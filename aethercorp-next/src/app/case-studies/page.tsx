import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected work across AI products, native mobile apps, web platforms, and social engines.",
};

const CASES = [
  {
    num: "01",
    slug: "northwind",
    tag: "AI · SaaS",
    title: "Northwind",
    subtitle: "Agentic ops copilot",
    summary:
      "Replaced a sprawling internal tooling stack with a single agent surface — multi-step actions, audit logs, evals.",
    metric: "+38%",
    metricLabel: "Ops throughput, 90 days",
    gradient: "from-[#5a6342] via-[#9eb867] to-[#cfd784]",
  },
  {
    num: "02",
    slug: "lumen",
    tag: "Native iOS · Health",
    title: "Lumen",
    subtitle: "Wellness companion",
    summary:
      "SwiftUI with HealthKit, on-device coaching, Live Activities. Shipped end-to-end in 8 weeks.",
    metric: "4.9★",
    metricLabel: "App Store · 220k MAU",
    gradient: "from-[#2a3340] via-[#4a5970] to-[#7b8aa3]",
  },
  {
    num: "03",
    slug: "atlasly",
    tag: "Web · Commerce",
    title: "Atlasly",
    subtitle: "Headless storefront",
    summary:
      "Replatformed onto Next.js + composable commerce. Edge-rendered PDPs, AI search.",
    metric: "2.4×",
    metricLabel: "Conversion · LH 96",
    gradient: "from-[#3a2a1f] via-[#8b6a4a] to-[#d4a574]",
  },
  {
    num: "04",
    slug: "cinder",
    tag: "Social · Creator",
    title: "Cinder",
    subtitle: "Short-form content engine",
    summary:
      "Daily output across TikTok, Reels, Shorts powered by a custom AI editing pipeline.",
    metric: "12M",
    metricLabel: "Views, first 90 days",
    gradient: "from-[#1f2a3a] via-[#3a5572] to-[#a3b8d4]",
  },
  {
    num: "05",
    slug: "vesper",
    tag: "Native Android · Fintech",
    title: "Vesper",
    subtitle: "Compose banking app",
    summary:
      "Fully native Kotlin app with biometric auth, instant payments, polished onboarding.",
    metric: "<200ms",
    metricLabel: "Cold start",
    gradient: "from-[#1a2438] via-[#2f4566] to-[#5a6b78]",
  },
  {
    num: "06",
    slug: "mosaic",
    tag: "AI · Internal",
    title: "Mosaic",
    subtitle: "Enterprise RAG",
    summary:
      "Private RAG over 1.2M documents. Role-aware retrieval, eval suites, Slack/Teams surface.",
    metric: "+65%",
    metricLabel: "Answer rate vs prior",
    gradient: "from-[#1f1a2a] via-[#3a2a4a] to-[#7864a3]",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="!py-32 md:!py-40">
        <div className="mb-16 flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          <span>↳ Selected work · 06 of 40+</span>
          <span className="hidden md:inline">2024 — 2026</span>
        </div>

        <h1 className="editorial-display max-w-[16ch] text-5xl md:text-7xl lg:text-9xl">
          Outcomes,
          <br />
          <span className="text-accent">not deliverables.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-[--color-fg-muted] md:text-lg">
          A small selection of recent engagements. Every project is led by a
          senior team and measured against the business KPI it was
          commissioned to move.
        </p>
      </Section>

      <Section className="!py-0">
        <div className="grid gap-px border-y border-[--color-border] bg-[--color-border] md:grid-cols-2">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group relative block bg-[--color-bg] transition"
            >
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${c.gradient}`}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')] mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116]/85 via-[#0e1116]/25 to-transparent" />

                <div className="absolute left-6 right-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
                  <span>{c.num}</span>
                  <span>{c.tag}</span>
                </div>

                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="editorial-display text-4xl text-white md:text-5xl lg:text-6xl">
                    {c.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/85">
                    {c.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-end gap-6 bg-[--color-bg] px-6 py-8 md:px-8">
                <div>
                  <p className="max-w-md text-sm text-[--color-fg]/85">
                    {c.summary}
                  </p>
                  <div className="mt-4 flex items-baseline gap-4">
                    <span className="spec-num text-[--color-fg]">
                      {c.metric}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                      {c.metricLabel}
                    </span>
                  </div>
                </div>
                <span className="grid size-12 place-items-center border border-[--color-border-strong] text-[--color-fg] transition group-hover:border-[--color-accent] group-hover:text-[--color-accent]">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
