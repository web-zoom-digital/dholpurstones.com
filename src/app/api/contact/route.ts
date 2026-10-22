import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");

interface LeadRecord {
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  interest: string;
  product: string;
  message: string;
  source: {
    page: string;
    cta: string;
    landing: string;
    referrer: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    gclid: string;
  };
  userAgent: string;
}

/** Delivers a lead to whatever the owner has configured. All channels are optional. */
async function deliver(lead: LeadRecord) {
  const jobs: Promise<unknown>[] = [];

  // 1) Webhook (Google Sheets via Apps Script / Zapier / Make / CRM)
  if (process.env.LEAD_WEBHOOK_URL) {
    jobs.push(
      fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      })
    );
  }

  // 2) Email through Resend (https://resend.com)
  if (process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL) {
    const s = lead.source;
    const text = [
      `New enquiry — ${lead.interest || "General"}${lead.product ? ` / ${lead.product}` : ""}`,
      "",
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Email: ${lead.email || "-"}`,
      `Location: ${lead.location || "-"}`,
      `Message: ${lead.message || "-"}`,
      "",
      "— Where this lead came from —",
      `Page: ${s.page}`,
      `Button: ${s.cta || "-"}`,
      `First landing page: ${s.landing || "-"}`,
      `Referrer: ${s.referrer || "-"}`,
      `UTM: ${[s.utm_source, s.utm_medium, s.utm_campaign].filter(Boolean).join(" / ") || "-"}`,
      `Google Ads click id: ${s.gclid || "-"}`,
      `Time: ${lead.timestamp}`,
    ].join("\n");
    jobs.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Dholpurestones Leads <onboarding@resend.dev>",
          to: process.env.LEAD_TO_EMAIL.split(",").map((e) => e.trim()),
          subject: `New enquiry: ${lead.name} — ${lead.interest || "General"} (${s.page})`,
          text,
        }),
      })
    );
  }

  const results = await Promise.allSettled(jobs);
  results.forEach((r) => {
    if (r.status === "rejected") console.error("[LEAD_DELIVERY_ERROR]", r.reason);
  });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Silent trap for bots
    if (clip(data.honeypot, 50)) {
      return NextResponse.json({ success: true, message: "Thank you! We will contact you shortly." });
    }

    const name = clip(data.name, 100);
    const phone = clip(data.phone, 30);
    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
    }
    if (phone.replace(/[^\d]/g, "").length < 7) {
      return NextResponse.json({ error: "Please enter a valid phone / WhatsApp number." }, { status: 422 });
    }

    const lead: LeadRecord = {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email: clip(data.email, 100),
      location: clip(data.location, 100),
      interest: clip(data.interest || data.stoneType, 80),
      product: clip(data.product, 120),
      message: clip(data.message, 2000),
      source: {
        page: clip(data.page, 200) || "unknown",
        cta: clip(data.cta, 80),
        landing: clip(data.landing, 200),
        referrer: clip(data.referrer, 200),
        utm_source: clip(data.utm_source, 120),
        utm_medium: clip(data.utm_medium, 120),
        utm_campaign: clip(data.utm_campaign, 120),
        utm_term: clip(data.utm_term, 120),
        gclid: clip(data.gclid, 120),
      },
      userAgent: clip(req.headers.get("user-agent"), 200),
    };

    console.log("[ENQUIRY RECEIVED]", JSON.stringify(lead));
    await deliver(lead);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has reached Mr. Arvind Garg's desk. We will contact you shortly.",
    });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "We could not send your enquiry right now. Please message us on WhatsApp." },
      { status: 500 }
    );
  }
}
