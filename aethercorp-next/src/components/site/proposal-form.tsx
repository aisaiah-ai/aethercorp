"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIERS = [
  { id: "starter", label: "Starter — $200 + $100/mo" },
  { id: "growth", label: "Growth — $650 + $250/mo" },
  { id: "pro", label: "Pro — Custom" },
  { id: "unsure", label: "Not sure yet" },
] as const;

const TIMELINES = [
  "ASAP (1–2 weeks)",
  "This month",
  "Next 1–3 months",
  "Just exploring",
];

const INDUSTRIES = [
  "Local services (trades, salon, fitness, etc.)",
  "Restaurant / hospitality",
  "Retail / ecommerce",
  "Professional services (law, finance, consulting)",
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
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-[--color-accent]/15 text-[--color-accent]">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
          Proposal request received.
        </h3>
        <p className="mt-2 max-w-sm text-[--color-fg-muted]">
          We&apos;ll email you a fixed-price proposal within one business day —
          usually same-day. Check your spam folder just in case.
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
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field
          label="Business name"
          name="business"
          className="sm:col-span-2"
          required
        />
        <Field
          label="Current website (optional)"
          name="website"
          type="url"
          placeholder="https://"
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-white">
          What industry are you in?
        </label>
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES.map((i) => {
            const active = industry === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndustry(i)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  active
                    ? "border-[--color-brand-2] bg-[--color-brand-2]/15 text-white"
                    : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                }`}
              >
                {i}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-white">
          Which plan looks right?
        </label>
        <div className="grid gap-2 sm:grid-cols-2">
          {TIERS.map((t) => {
            const active = tier === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTier(t.id)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  active
                    ? "border-[--color-brand] bg-[--color-brand]/15 text-white"
                    : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-white">
          Launch timeline
        </label>
        <div className="flex flex-wrap gap-2">
          {TIMELINES.map((t) => {
            const active = timeline === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTimeline(t)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  active
                    ? "border-[--color-brand] bg-[--color-brand]/15 text-white"
                    : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-white">
          Tell us about your business
        </label>
        <textarea
          name="description"
          rows={5}
          required
          className="w-full rounded-2xl border border-[--color-border-strong] bg-[--color-bg-soft] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/40"
          placeholder="What do you sell, who's your customer, and what should the site do for you?"
        />
      </div>

      <input type="hidden" name="tier" value={tier} />
      <input type="hidden" name="timeline" value={timeline ?? ""} />
      <input type="hidden" name="industry" value={industry ?? ""} />

      <Button type="submit" size="lg" className="mt-7 w-full">
        <Send className="size-4" />
        Send my proposal request
      </Button>

      <p className="mt-4 text-center text-xs text-[--color-fg-muted]">
        No spam. No newsletter signup. We email you a quote, that&apos;s it.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[--color-border-strong] bg-[--color-bg-soft] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/40"
      />
    </div>
  );
}
