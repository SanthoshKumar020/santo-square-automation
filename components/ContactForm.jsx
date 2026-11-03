"use client";

import { useState } from "react";

/**
 * No-backend contact form: submitting opens the visitor's own mail client
 * with a pre-filled email to the founder. Nothing is stored or faked.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:kumarsanthosh2743@gmail.com?subject=${subject}&body=${body}`;
    setNotice("Opening your mail client — your message is addressed to kumarsanthosh2743@gmail.com.");
  };

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-cream placeholder:text-muted focus:border-amber focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        className={field}
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={field}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className={`${field} min-h-32`}
        placeholder="Tell me about your project — a website, a web app, or an automation"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full rounded-full bg-amber px-6 py-3 font-semibold text-ink hover:opacity-90"
      >
        Send via email
      </button>
      {notice && <p className="text-sm text-muted">{notice}</p>}
      <p className="text-xs text-muted">
        This form opens your own mail app. Nothing is submitted to a server.
      </p>
    </form>
  );
}
