import { NextResponse } from "next/server";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);
const oneLine = (v) => v.replace(/[\r\n]+/g, " ");

export async function POST(request) {
  const b = await request.json().catch(() => ({}));
  if (b.company) return NextResponse.json({ ok: true }); // honeypot: bots fill this hidden field

  const name = clip(b.name, 100), email = clip(b.email, 150), message = clip(b.message, 4000);
  const type = clip(b.type, 60), date = clip(b.date, 30), location = clip(b.location, 120);

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Name, a valid email and a message are required." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "The form isn't connected yet." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || "adritsinani@gmail.com"],
      reply_to: email,
      subject: oneLine(`New inquiry: ${type || "Website"} - ${name}`),
      text: `Name: ${name}\nEmail: ${email}\nEvent / Session: ${type}\nDate: ${date}\nLocation: ${location}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Couldn't send your message." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
