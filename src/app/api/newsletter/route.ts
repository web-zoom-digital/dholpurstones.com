import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, honeypot } = data;

    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json({ success: true, message: "Subscription confirmed." });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 422 });
    }

    console.log("[NEWSLETTER SUBSCRIPTION]:", email.trim().toLowerCase());

    return NextResponse.json({
      success: true,
      message: "You have been successfully added to our architectural stone newsletter.",
    });
  } catch (error) {
    console.error("[NEWSLETTER_API_ERROR]", error);
    return NextResponse.json({ error: "Failed to process newsletter subscription." }, { status: 500 });
  }
}
