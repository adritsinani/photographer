import { NextResponse } from "next/server";

export async function POST(request) {
  const b = await request.json().catch(() => ({}));
  const { name, email, message } = b;

  if (!name?.trim() || !/^\S+@\S+\.\S+$/.test(email || "") || (message || "").trim().length < 10) {
    return NextResponse.json({ error: "Name, a valid email and a message are required." }, { status: 400 });
  }

  // TODO: deliver to hello@adritsinani.com with Resend, Postmark or SMTP (keep keys in env vars).
  console.log("New inquiry:", { name, email, type: b.type, date: b.date, location: b.location, message });

  return NextResponse.json({ ok: true });
}
