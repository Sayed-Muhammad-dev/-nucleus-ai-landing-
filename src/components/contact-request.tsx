"use client";
import { useState } from "react";
export function ContactRequest() {
  const [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  return (
    <form
      className="mx-auto max-w-xl space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        if (busy) return;
        const form = event.currentTarget,
          values = Object.fromEntries(new FormData(form));
        setBusy(true);
        try {
          const response = await fetch("/api/app/submit/inquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error);
          setMessage("Request received. Your message is saved for the team.");
          form.reset();
        } catch (error) {
          setMessage(error instanceof Error ? error.message : "Request failed");
        } finally {
          setBusy(false);
        }
      }}
    >
      <h2 className="text-2xl font-semibold text-white">
        Discuss your knowledge workflow.
      </h2>
      <label className="block text-sm text-slate-300">
        Your name
        <input
          className="mt-2 block w-full rounded-xl border border-white/20 bg-void-900 p-3 text-white"
          name="name"
          required
          maxLength={120}
        />
      </label>
      <label className="block text-sm text-slate-300">
        Work email
        <input
          className="mt-2 block w-full rounded-xl border border-white/20 bg-void-900 p-3 text-white"
          name="email"
          type="email"
          required
        />
      </label>
      <label className="block text-sm text-slate-300">
        What do you want to organise?
        <textarea
          className="mt-2 block w-full rounded-xl border border-white/20 bg-void-900 p-3 text-white"
          name="message"
          required
          minLength={10}
          maxLength={2000}
        />
      </label>
      <button
        disabled={busy}
        className="rounded-xl bg-violet-500 px-5 py-3 font-semibold text-white hover:bg-violet-400 focus-visible:outline focus-visible:outline-2"
      >
        {busy ? "Sending…" : "Send request →"}
      </button>
      <p className="text-sm text-slate-300" role="status">
        {message}
      </p>
    </form>
  );
}
