"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = ["AI", "Social Media", "Web Development", "Native Mobile"];
const BUDGETS = ["< $25k", "$25k–$75k", "$75k–$200k", "$200k+"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);

  function toggle(s: string) {
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-[--color-accent]/15 text-[--color-accent]">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
          Thanks — we got it.
        </h3>
        <p className="mt-2 max-w-sm text-[--color-fg-muted]">
          A senior member of the team will be in touch within one business
          day with next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-7 backdrop-blur md:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field
          label="Company"
          name="company"
          className="sm:col-span-2"
          required
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-white">
          What do you need?
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const active = picked.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggle(s)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  active
                    ? "border-[--color-brand] bg-[--color-brand]/15 text-white"
                    : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-white">
          Budget
        </label>
        <div className="flex flex-wrap gap-2">
          {BUDGETS.map((b) => {
            const active = budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  active
                    ? "border-[--color-brand-2] bg-[--color-brand-2]/15 text-white"
                    : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-white">
          Tell us about your project
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-[--color-border-strong] bg-[--color-bg-soft] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/40"
          placeholder="Goals, timeline, current stack, anything that helps."
        />
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full">
        <Send className="size-4" />
        Send brief
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-[--color-border-strong] bg-[--color-bg-soft] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/40"
      />
    </div>
  );
}
