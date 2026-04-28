import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected work across AI products, native mobile apps, web platforms, and social engines.",
};

const CASES = [
  {
    slug: "northwind",
    tag: "AI · SaaS",
    title: "Northwind agentic ops copilot",
    summary:
      "We replaced a sprawling internal tooling stack with a single agent surface — multi-step actions, audit logs, and evals across every release.",
    metric: "+38% ops throughput",
    gradient: "from-[#7c5cff] via-[#a78bfa] to-[#22d3ee]",
  },
  {
    slug: "lumen",
    tag: "Native iOS · Health",
    title: "Lumen wellness companion",
    summary:
      "A SwiftUI app with HealthKit, on-device coaching, and live activities. Shipped end-to-end in 8 weeks with a 4.9★ App Store launch.",
    metric: "220k MAU · 4.9★",
    gradient: "from-[#34d399] via-[#22d3ee] to-[#7c5cff]",
  },
  {
    slug: "atlasly",
    tag: "Web · Commerce",
    title: "Atlasly headless storefront",
    summary:
      "Replatformed onto Next.js + a composable commerce stack. Edge-rendered PDPs, AI search, and a 2.4× conversion lift in a single quarter.",
    metric: "2.4× conversion · 96 LH",
    gradient: "from-[#f0abfc] via-[#7c5cff] to-[#22d3ee]",
  },
  {
    slug: "cinder",
    tag: "Social · Creator",
    title: "Cinder content engine",
    summary:
      "Daily short-form output across TikTok, Reels, and Shorts powered by a custom AI editing pipeline and a creator collective we built in-house.",
    metric: "12M views · 90 days",
    gradient: "from-[#22d3ee] via-[#7c5cff] to-[#f0abfc]",
  },
  {
    slug: "vesper",
    tag: "Native Android · Fintech",
    title: "Vesper Compose banking app",
    summary:
      "Compose Multiplatform-free, fully native Kotlin app with biometric auth, instant payments, and a design system shared with the marketing site.",
    metric: "Sub-200ms cold start",
    gradient: "from-[#7c5cff] via-[#22d3ee] to-[#34d399]",
  },
  {
    slug: "mosaic",
    tag: "AI · Internal",
    title: "Mosaic enterprise RAG",
    summary:
      "Private RAG over 1.2M documents with role-aware retrieval, eval suites, and a Slack/Teams surface used by 4k employees daily.",
    metric: "65% answer-rate jump",
    gradient: "from-[#34d399] via-[#7c5cff] to-[#f0abfc]",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="!py-24 md:!py-32">
        <div className="flex flex-col items-center text-center">
          <Badge>Case studies</Badge>
          <h1 className="mt-6 max-w-4xl text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Outcomes,{" "}
            <span className="text-gradient">not deliverables.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-[--color-fg-muted]">
            A small selection of recent engagements. Every project is led by
            a senior team and measured against the business KPI it was
            commissioned to move.
          </p>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-1 transition hover:border-[--color-border-strong]"
            >
              <div
                className={`relative aspect-[16/9] w-full overflow-hidden rounded-[22px] bg-gradient-to-br ${c.gradient}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/30 bg-black/30 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
                    {c.tag}
                  </span>
                </div>
                <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white text-black transition group-hover:rotate-12">
                  <ArrowUpRight className="size-5" />
                </span>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                    {c.summary}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-white">
                    {c.metric}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
