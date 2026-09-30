"use client";

import { useState, type FormEvent } from "react";
import { FiAlertCircle, FiCheck, FiLoader, FiSend } from "react-icons/fi";
import { site } from "@/data/portfolio";
import { Button } from "@/components/ui";
import { FormField } from "./FormField";

type Status = "idle" | "sending" | "success" | "error";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!formspreeId) {
      console.warn("NEXT_PUBLIC_FORMSPREE_ID is not set — see README.md.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" autoComplete="name" required />
        <FormField label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <FormField label="Subject" name="_subject" placeholder="Project, role, or question" />
      <FormField label="Message" name="message" multiline required />

      {/* Honeypot: hidden from people, catches spam bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          disabled={status === "sending"}
          icon={
            status === "sending" ? <FiLoader className="animate-spin" /> : <FiSend />
          }
          iconEnd
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="inline-flex animate-fade-up items-center gap-2 text-accent">
              <FiCheck aria-hidden /> Thanks! Your message is on its way.
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex animate-fade-up items-center gap-2 text-red-600 dark:text-red-400">
              <FiAlertCircle aria-hidden />
              <span>
                Something went wrong. Email me at{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                  {site.email}
                </a>
                .
              </span>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
