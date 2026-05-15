"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
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
  "ASAP (1–2 weeks)",
  "This month",
  "Next 1–3 months",
  "Just exploring",
];

const INDUSTRIES = [
  "Local services (trades, salon, fitness)",
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
      <div className="relative overflow-hidden rounded-3xl border border-[--color-border-strong] bg-gradient-to-br from-[#11141d] via-[#1a1233] to-[#0b0d14] p-12 text-center">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-[--color-accent]/25 blur-3xl" />
        <div className="relative">
          <span className="grid size-16 place-items-center rounded-full bg-[--color-accent]/15 text-[--color-accent] shadow-[0_10px_30px_-10px_rgba(52,211,153,0.6)] mx-auto">
            <CheckCircle2 className="size-8" />
          </span>
          <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
            Proposal request received.
          </h3>
          <p className="mt-3 mx-auto max-w-md text-[--color-fg-muted]">
            We&apos;ll email you a fixed-price proposal within one business
            day — usually same-day. Check your spam folder just in case.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[--color-border-strong] bg-[--color-surface]/60 px-4 py-2 text-xs text-white/70">
            <span className="size-1.5 rounded-full bg-[--color-accent] animate-pulse" />
            Average response time: 3 hours
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Gradient halo */}
      <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/15 via-white/5 to-transparent" />

      <form
        onSubmit={onSubmit}
        className="relative rounded-[26px] border border-[--color-border-strong] bg-[--color-surface]/80 p-7 backdrop-blur md:p-9"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[--color-brand-2]">
            <Sparkles className="size-3.5" />
            Proposal request
          </div>
          <span className="text-xs text-[--color-fg-muted]">~2 minutes</span>
        </div>

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

        <FieldGroup label="What industry are you in?">
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
                      ? "border-[--color-brand-2] bg-[--color-brand-2]/15 text-white shadow-[0_4px_20px_-4px_rgba(34,211,238,0.4)]"
                      : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                  }`}
                >
                  {i}
                </button>
              );
            })}
          </div>
        </FieldGroup>

        <FieldGroup label="Which plan looks right?">
          <div className="grid gap-2 sm:grid-cols-2">
            {TIERS.map((t) => {
              const active = tier === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id)}
                  className={`group/tier relative rounded-2xl border px-4 py-3.5 text-left transition ${
                    active
                      ? "border-[--color-brand] bg-gradient-to-b from-[--color-brand]/15 to-[--color-brand]/5 text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.5)]"
                      : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:border-[--color-border] hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{t.label}</span>
                    {"tag" in t && t.tag ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-white/[0.06] text-white/60"
                        }`}
                      >
                        {t.tag}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{t.sub}</div>
                </button>
              );
            })}
          </div>
        </FieldGroup>

        <FieldGroup label="Launch timeline">
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
                      ? "border-[--color-brand] bg-[--color-brand]/15 text-white shadow-[0_4px_20px_-4px_rgba(124,92,255,0.4)]"
                      : "border-[--color-border-strong] bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </FieldGroup>

        <FieldGroup label="Tell us about your business">
          <textarea
            name="description"
            rows={5}
            required
            className="w-full rounded-2xl border border-[--color-border-strong] bg-[--color-bg-soft] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[--color-brand] focus:outline-none focus:ring-2 focus:ring-[--color-brand]/40"
            placeholder="What do you sell, who's your customer, and what should the site do for you?"
          />
        </FieldGroup>

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
    </div>
  );
}

function FieldGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <label className="mb-2.5 block text-sm font-medium text-white">
        {label}
      </label>
      {children}
    </div>
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
