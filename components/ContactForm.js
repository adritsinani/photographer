"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus({ state: "sent", message: "Message sent. I'll reply within two working days." });
    } catch (err) {
      setStatus({ state: "error", message: `${err.message} Check the fields and try again.` });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Tell me about your project<textarea name="message" required minLength={10} /></label>
      <button type="submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="status" role="status">{status.message}</p>
    </form>
  );
}
