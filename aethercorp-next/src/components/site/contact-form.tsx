"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const SERVICES = ["AI", "Social Media", "Web Development", "Native Mobile"];
const BUDGETS = ["< $25k", "$25k—$75k", "$75k—$200k", "$200k+"];

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
      <div className="border border-[--color-border-strong] bg-[--color-bg-soft] p-10 md:p-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-accent]">
          ↳ Received
        </div>
        <h3 className="editorial-display mt-6 text-4xl md:text-5xl">
          Thanks — we
          <br />
          <span className="text-accent">got it.</span>
        </h3>
        <p className="mt-6 max-w-md text-[--color-fg]/85">
          A senior member of the team will be in touch within one business day
          with next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-[--color-border-strong] bg-[--color-bg-soft]/60 p-7 md:p-10"
    >
      <div className="flex items-center justify-between border-b border-[--color-border] pb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
        <span>↳ Brief · Form B</span>
        <span>Studio inquiry</span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field num="01" label="Full name" name="name" required />
        <Field num="02" label="Work email" name="email" type="email" required />
        <Field
          num="03"
          label="Company"
          name="company"
          className="sm:col-span-2"
          required
        />
      </div>

      <FieldGroup num="04" label="What do you need?">
        <div className="flex flex-wrap gap-1">
          {SERVICES.map((s) => {
            const active = picked.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggle(s)}
                className={`border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition ${
                  active
                    ? "border-[--color-accent] bg-[--color-accent] text-[--color-bg]"
                    : "border-[--color-border-strong] bg-transparent text-[--color-fg]/75 hover:border-[--color-fg] hover:text-[--color-fg]"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </FieldGroup>

      <FieldGroup num="05" label="Budget">
        <div className="flex flex-wrap gap-1">
          {BUDGETS.map((b) => {
            const active = budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={`border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition ${
                  active
                    ? "border-[--color-fg] bg-[--color-fg] text-[--color-bg]"
                    : "border-[--color-border-strong] bg-transparent text-[--color-fg]/75 hover:border-[--color-fg] hover:text-[--color-fg]"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </FieldGroup>

      <FieldGroup num="06" label="Tell us about your project">
        <textarea
          name="message"
          rows={5}
          required
          className="w-full border border-[--color-border-strong] bg-transparent px-4 py-3 text-sm text-[--color-fg] placeholder:text-[--color-fg-dim] focus:border-[--color-fg] focus:outline-none"
          placeholder="Goals, timeline, current stack, anything that helps."
        />
      </FieldGroup>

      <Button type="submit" size="lg" className="mt-10 w-full">
        Send brief →
      </Button>
    </form>
  );
}

function FieldGroup({
  num,
  label,
  children,
}: {
  num: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 border-t border-[--color-border] pt-8">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
          {num}
        </span>
        <label className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg]">
          {label}
        </label>
      </div>
      {children}
    </div>
  );
}

function Field({
  num,
  label,
  name,
  type = "text",
  required,
  className,
}: {
  num: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
          {num}
        </span>
        <label className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg]">
          {label}
        </label>
      </div>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-[--color-border-strong] bg-transparent px-4 py-3 text-sm text-[--color-fg] placeholder:text-[--color-fg-dim] focus:border-[--color-fg] focus:outline-none"
      />
    </div>
  );
}
