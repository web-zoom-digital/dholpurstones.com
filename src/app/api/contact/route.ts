import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, stoneType, message, honeypot } = data;

    // 1. Silent trap for automated spam crawlers
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json({ success: true, message: "Inquiry processed successfully." }, { status: 200 });
    }

    // 2. Validate essential fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid full name." }, { status: 422 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json({ error: "Please provide a valid contact phone number." }, { status: 422 });
    }

    // 3. Structured enterprise inquiry log
    const leadRecord = {
      timestamp: new Date().toISOString(),
      name: name.trim().slice(0, 100),
      phone: phone.trim().slice(0, 30),
      email: email ? email.trim().slice(0, 100) : "Not provided",
      stoneType: stoneType || "General Quarry Inquiry",
      message: message ? message.trim().slice(0, 2000) : "",
      source: "Dholpurestones.com Web Lead Form",
    };

    console.log("[ENTERPRISE INQUIRY RECEIVED]:", JSON.stringify(leadRecord, null, 2));

    // Here webhooks (e.g. Zapier, Make, Slack, SendGrid, CRM) can be connected seamlessly
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your quotation request has been received by Mr. Arvind Garg's desk. Our engineering team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json({ error: "Unable to process request at this moment. Please connect directly via WhatsApp." }, { status: 500 });
  }
}
