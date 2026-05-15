"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const TIERS = [
  {
    id: "starter",
    label: "Starter",
    sub: "$200 + $100/mo",
    tag: "Fastest",
  },
  {
    id: "growth",
    label: "Growth",
    sub: "$650 + $250/mo",
    tag: "Most popular",
  },
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
      <div className="relative border border-[--color-border-strong] bg-[--color-bg-soft] p-10 md:p-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-accent]">
          ↳ Received · 01 / 01
        </div>
        <h3 className="editorial-display mt-6 text-4xl md:text-5xl">
          Proposal
          <br />
          <span className="text-accent">request received.</span>
        </h3>
        <p className="mt-6 max-w-md text-[--color-fg]/85">
          We&apos;ll email you a fixed-price proposal within one business day —
          usually same-day. Check your spam folder just in case.
        </p>
        <div className="mt-10 flex items-center gap-3 border-t border-[--color-border] pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          <span className="size-1.5 rounded-full bg-[--color-accent]" />
          Average response time · 3 hours
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-[--color-border-strong] bg-[--color-bg-soft]/60 p-7 md:p-10"
    >
      <div className="flex items-center justify-between border-b border-[--color-border] pb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
        <span>↳ Proposal · Form A</span>
        <span>2 min</span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required num="01" />
        <Field label="Email" name="email" type="email" required num="02" />
        <Field
          label="Business name"
          name="business"
          className="sm:col-span-2"
          required
          num="03"
        />
        <Field
          label="Current website (optional)"
          name="website"
          type="url"
          placeholder="https://"
          className="sm:col-span-2"
          num="04"
        />
      </div>

      <FieldGroup num="05" label="Industry">
        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {INDUSTRIES.map((i) => {
            const active = industry === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndustry(i)}
                className={`border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition ${
                  active
                    ? "border-[--color-accent] bg-[--color-accent] text-[--color-bg]"
                    : "border-[--color-border-strong] bg-transparent text-[--color-fg]/75 hover:border-[--color-fg] hover:text-[--color-fg]"
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
                    ? "border-[--color-fg] bg-[--color-fg] text-[--color-bg]"
                    : "border-[--color-border-strong] bg-transparent text-[--color-fg] hover:border-[--color-fg]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.01em]">
                    {t.label}
                  </span>
                  {"tag" in t && t.tag ? (
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                        active ? "text-[--color-bg]/70" : "text-[--color-accent]"
                      }`}
                    >
                      {t.tag}
                    </span>
                  ) : null}
                </div>
                <div
                  className={`mt-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                    active ? "text-[--color-bg]/70" : "text-[--color-fg-muted]"
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
                    ? "border-[--color-accent] bg-[--color-accent] text-[--color-bg]"
                    : "border-[--color-border-strong] bg-transparent text-[--color-fg]/75 hover:border-[--color-fg] hover:text-[--color-fg]"
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
          className="w-full border border-[--color-border-strong] bg-transparent px-4 py-3 text-sm text-[--color-fg] placeholder:text-[--color-fg-dim] focus:border-[--color-fg] focus:outline-none"
          placeholder="What do you sell, who's your customer, and what should the site do for you?"
        />
      </FieldGroup>

      <input type="hidden" name="tier" value={tier} />
      <input type="hidden" name="timeline" value={timeline ?? ""} />
      <input type="hidden" name="industry" value={industry ?? ""} />

      <Button type="submit" size="lg" className="mt-10 w-full">
        Send proposal request →
      </Button>

      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
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
        placeholder={placeholder}
        className="w-full border border-[--color-border-strong] bg-transparent px-4 py-3 text-sm text-[--color-fg] placeholder:text-[--color-fg-dim] focus:border-[--color-fg] focus:outline-none"
      />
    </div>
  );
}
