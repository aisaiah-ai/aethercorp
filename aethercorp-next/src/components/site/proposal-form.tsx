"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const TIERS = [
  { id: "starter", label: "Starter", sub: "$200 + $100/mo", tag: "Fastest" },
  { id: "growth", label: "Growth", sub: "$650 + $250/mo", tag: "Most popular" },
  { id: "pro", label: "Pro", sub: "Custom quote", tag: "Custom" },
  { id: "unsure", label: "Not sure yet", sub: "Let's talk it through" },
] as const;

const TIMELINES = [
  "ASAP (1—2 weeks)",
  "This month",
  "Next 1—3 months",
  "Just exploring",
];

const INDUSTRIES = [
  "Local services",
  "Restaurant / hospitality",
  "Retail / ecommerce",
  "Professional services",
  "Health / wellness",
  "Real estate",
  "Creator / personal brand",
  "Other",
];

export function ProposalForm() {
  const search = useSearchParams();
  const tierFromUrl = search.get("tier");
  const initialTier =
    tierFromUrl && TIERS.some((t) => t.id === tierFromUrl)
      ? tierFromUrl
      : "starter";

  const [submitted, setSubmitted] = useState(false);
  const [tier, setTier] = useState<string>(initialTier);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-2 border-[--color-ink] bg-[--color-oxblood] p-10 text-[--color-paper] md:p-14">
        <div className="label text-[--color-paper]/70">↳ Received · 01 / 01</div>
        <h3
          className="display-italic mt-6 text-5xl md:text-6xl"
          style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
        >
          Proposal
          <br />
          <span className="text-[--color-signal]">received.</span>
        </h3>
        <p className="serif-body mt-6 max-w-md text-base text-[--color-paper]/90">
          We&apos;ll email you a fixed-price proposal within one business
          day — usually same-day. Check your spam folder just in case.
        </p>
        <div className="mt-10 flex items-center gap-3 border-t border-[--color-paper]/25 pt-6 label text-[--color-paper]/80">
          <span className="size-1.5 rounded-full bg-[--color-signal] blink" />
          Average response time · 3 hours
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border-2 border-[--color-ink] bg-[--color-paper-soft] p-7 md:p-10"
    >
      <div className="flex items-center justify-between border-b-2 border-[--color-ink] pb-5 label-lg">
        <span>↳ Proposal · Form A</span>
        <span>2 min</span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field num="01" label="Your name" name="name" required />
        <Field num="02" label="Email" name="email" type="email" required />
        <Field
          num="03"
          label="Business name"
          name="business"
          className="sm:col-span-2"
          required
        />
        <Field
          num="04"
          label="Current website (optional)"
          name="website"
          type="url"
          placeholder="https://"
          className="sm:col-span-2"
        />
      </div>

      <FieldGroup num="05" label="Industry">
        <div className="flex flex-wrap gap-1">
          {INDUSTRIES.map((i) => {
            const active = industry === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndustry(i)}
                className={`border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition ${
                  active
                    ? "border-[--color-oxblood] bg-[--color-oxblood] text-[--color-paper]"
                    : "border-[--color-ink]/40 bg-transparent text-[--color-ink] hover:border-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-paper]"
                }`}
              >
                {i}
              </button>
            );
          })}
        </div>
      </FieldGroup>

      <FieldGroup num="06" label="Plan">
        <div className="grid gap-1 sm:grid-cols-2">
          {TIERS.map((t) => {
            const active = tier === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTier(t.id)}
                className={`border px-4 py-4 text-left transition ${
                  active
                    ? "border-[--color-ink] bg-[--color-ink] text-[--color-paper]"
                    : "border-[--color-ink]/40 bg-transparent text-[--color-ink] hover:border-[--color-ink]"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="display-italic text-xl"
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {t.label}
                  </span>
                  {"tag" in t && t.tag ? (
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                        active ? "text-[--color-signal]" : "text-[--color-oxblood]"
                      }`}
                    >
                      {t.tag}
                    </span>
                  ) : null}
                </div>
                <div
                  className={`mt-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                    active ? "text-[--color-paper]/70" : "text-[--color-ink-muted]"
                  }`}
                >
                  {t.sub}
                </div>
              </button>
            );
          })}
        </div>
      </FieldGroup>

      <FieldGroup num="07" label="Timeline">
        <div className="flex flex-wrap gap-1">
          {TIMELINES.map((t) => {
            const active = timeline === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTimeline(t)}
                className={`border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition ${
                  active
                    ? "border-[--color-oxblood] bg-[--color-oxblood] text-[--color-paper]"
                    : "border-[--color-ink]/40 bg-transparent text-[--color-ink] hover:border-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-paper]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </FieldGroup>

      <FieldGroup num="08" label="Tell us about your business">
        <textarea
          name="description"
          rows={5}
          required
          className="w-full border-2 border-[--color-ink] bg-transparent px-4 py-3 text-base text-[--color-ink] placeholder:text-[--color-ink-dim] focus:bg-[--color-paper] focus:outline-none serif-body"
          placeholder="What do you sell, who's your customer, and what should the site do for you?"
        />
      </FieldGroup>

      <input type="hidden" name="tier" value={tier} />
      <input type="hidden" name="timeline" value={timeline ?? ""} />
      <input type="hidden" name="industry" value={industry ?? ""} />

      <button
        type="submit"
        className="group mt-10 flex w-full items-center justify-between border-2 border-[--color-ink] bg-[--color-ink] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-oxblood] hover:border-[--color-oxblood]"
      >
        <span>Send proposal request</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </button>

      <p className="mt-4 text-center label">
        No spam · No newsletter · We email you a quote, that&apos;s it
      </p>
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
  placeholder,
}: {
  num: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className="w-full border-2 border-[--color-ink] bg-transparent px-4 py-3 text-base text-[--color-ink] placeholder:text-[--color-ink-dim] focus:bg-[--color-paper] focus:outline-none serif-body"
      />
    </div>
  );
}
