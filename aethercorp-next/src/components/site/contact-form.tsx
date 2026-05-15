"use client";

import { useState } from "react";

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
      <div className="border-2 border-[--color-ink] bg-[--color-oxblood] p-10 text-[--color-paper] md:p-14">
        <div className="label text-[--color-paper]/70">↳ Received</div>
        <h3
          className="display-italic mt-6 text-5xl md:text-6xl"
          style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
        >
          Brief
          <br />
          <span className="text-[--color-signal]">received.</span>
        </h3>
        <p className="serif-body mt-6 max-w-md text-base text-[--color-paper]/90">
          A senior member of the team will be in touch within one business day
          with next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border-2 border-[--color-ink] bg-[--color-paper-soft] p-7 md:p-10"
    >
      <div className="flex items-center justify-between border-b-2 border-[--color-ink] pb-5 label-lg">
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
                    ? "border-[--color-oxblood] bg-[--color-oxblood] text-[--color-paper]"
                    : "border-[--color-ink]/40 bg-transparent text-[--color-ink] hover:border-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-paper]"
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
                    ? "border-[--color-ink] bg-[--color-ink] text-[--color-paper]"
                    : "border-[--color-ink]/40 bg-transparent text-[--color-ink] hover:border-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-paper]"
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
          className="serif-body w-full border-2 border-[--color-ink] bg-transparent px-4 py-3 text-base text-[--color-ink] placeholder:text-[--color-ink-dim] focus:bg-[--color-paper] focus:outline-none"
          placeholder="Goals, timeline, current stack, anything that helps."
        />
      </FieldGroup>

      <button
        type="submit"
        className="group mt-10 flex w-full items-center justify-between border-2 border-[--color-ink] bg-[--color-ink] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-oxblood] hover:border-[--color-oxblood]"
      >
        <span>Send brief</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </button>
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
    <div className="mt-8 border-t border-[--color-ink]/15 pt-8">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="label text-[--color-ink-muted]">{num}</span>
        <label className="label-lg text-[--color-ink]">{label}</label>
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
        <span className="label text-[--color-ink-muted]">{num}</span>
        <label className="label-lg text-[--color-ink]">{label}</label>
      </div>
      <input
        name={name}
        type={type}
        required={required}
        className="serif-body w-full border-2 border-[--color-ink] bg-transparent px-4 py-3 text-base text-[--color-ink] placeholder:text-[--color-ink-dim] focus:bg-[--color-paper] focus:outline-none"
      />
    </div>
  );
}
