import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, message } = await request.json().catch(() => ({}));

  if (!name?.trim() || !/^\S+@\S+\.\S+$/.test(email || "") || (message || "").trim().length < 10) {
    return NextResponse.json({ error: "Name, a valid email and a message are required." }, { status: 400 });
  }

  // TODO: deliver the message. Options: Resend, Postmark, Nodemailer (SMTP), or Formspree.
  // Example with Resend: await resend.emails.send({ from, to: process.env.CONTACT_TO, subject, text })
  console.log("New inquiry:", { name, email, message });

  return NextResponse.json({ ok: true });
}
