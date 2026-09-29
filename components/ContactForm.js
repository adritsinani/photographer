"use client";
import { useState } from "react";

const types = ["Wedding", "Engagement", "Proposal", "Portrait", "Fashion / Editorial", "Brand content", "Reels & video", "Other"];

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
      setStatus({ state: "sent", message: "Inquiry sent. I'll get back to you with availability and details." });
    } catch (err) {
      setStatus({ state: "error", message: `${err.message} You can also reach me on WhatsApp.` });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input className="hp" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Event / Session
        <select name="type" required defaultValue="">
          <option value="" disabled>Choose one</option>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <div className="two">
        <label>Date<input name="date" type="date" /></label>
        <label>Location<input name="location" /></label>
      </div>
      <label>Message<textarea name="message" required minLength={10} /></label>
      <button type="submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending…" : "Send inquiry"}
      </button>
      <p className="status" role="status">{status.message}</p>
    </form>
  );
}
