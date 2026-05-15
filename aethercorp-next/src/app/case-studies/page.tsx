import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Atelier",
  description:
    "Selected work across AI products, native mobile apps, web platforms, and social engines.",
};

const CASES = [
  {
    num: "I.",
    slug: "northwind",
    tag: "AI · SaaS",
    title: "Northwind",
    subtitle: "Agentic ops copilot",
    summary:
      "Replaced six dashboards with one streaming agent surface. Multi-step tool use, evals, audit logs.",
    metric: "+38%",
    metricLabel: "Ops throughput",
    palette: "ink",
  },
  {
    num: "II.",
    slug: "lumen",
    tag: "Native iOS · Health",
    title: "Lumen",
    subtitle: "Wellness companion",
    summary:
      "SwiftUI with HealthKit, on-device coaching, Live Activities. End-to-end in eight weeks.",
    metric: "4.9★",
    metricLabel: "220k MAU",
    palette: "oxblood",
  },
  {
    num: "III.",
    slug: "atlasly",
    tag: "Web · Commerce",
    title: "Atlasly",
    subtitle: "Headless storefront",
    summary:
      "Edge-rendered PDPs and AI search. 2.4× conversion in a single quarter.",
    metric: "2.4×",
    metricLabel: "Conversion",
    palette: "ink",
  },
  {
    num: "IV.",
    slug: "cinder",
    tag: "Social · Creator",
    title: "Cinder",
    subtitle: "Short-form content engine",
    summary:
      "Daily output across TikTok, Reels, Shorts powered by a custom AI editing pipeline.",
    metric: "12M",
    metricLabel: "Views · 90 days",
    palette: "oxblood",
  },
  {
    num: "V.",
    slug: "vesper",
    tag: "Native Android · Fintech",
    title: "Vesper",
    subtitle: "Compose banking app",
    summary:
      "Fully native Kotlin app with biometric auth, instant payments, polished onboarding.",
    metric: "<200ms",
    metricLabel: "Cold start",
    palette: "ink",
  },
  {
    num: "VI.",
    slug: "mosaic",
    tag: "AI · Internal",
    title: "Mosaic",
    subtitle: "Enterprise RAG",
    summary:
      "Private RAG over 1.2M documents. Role-aware retrieval, eval suites, Slack/Teams surface.",
    metric: "+65%",
    metricLabel: "Answer rate vs prior",
    palette: "oxblood",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="!py-24 md:!py-32 paper-grain">
        <div className="mb-16 flex items-center justify-between border-b-2 border-[--color-ink] pb-4 label-lg">
          <span>↳ Aethercorp · Atelier · 06 of 40+</span>
          <span className="hidden text-[--color-oxblood] md:inline">2024 — 2026</span>
        </div>

        <h1
          className="display-italic text-[14vw] leading-[0.86] text-[--color-ink] md:text-[10vw] lg:text-[9vw]"
          style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
        >
          Receipts.
          <br />
          <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
            Not promises.
          </span>
        </h1>
        <p className="serif-body mt-8 max-w-xl text-lg text-[--color-ink] md:text-xl">
          A small selection of recent engagements. Every project is led by a
          senior team and measured against the business KPI it was commissioned
          to move.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
          {CASES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden border-2 border-[--color-ink] ${
                  c.palette === "ink" ? "bg-[--color-coal]" : "bg-[--color-oxblood]"
                }`}
              >
                {/* Big initials behind */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center">
                  <div
                    className="display-italic text-[28vw] leading-[0.85] text-[--color-paper] opacity-10 md:text-[18vw]"
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {c.title.toUpperCase().slice(0, 2)}
                  </div>
                </div>

                {/* Top meta */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]">
                  <span>{c.num} · {c.tag}</span>
                  <span className="opacity-60">Case file</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="display text-7xl text-[--color-paper] md:text-9xl"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {c.metric}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]/70">
                    {c.metricLabel}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-baseline gap-4">
                <span
                  className="display-italic text-3xl text-[--color-oxblood] md:text-4xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  {c.title}
                </span>
                <span className="border-b border-dotted border-[--color-ink-dim]" />
                <span className="label transition group-hover:text-[--color-oxblood]">read →</span>
              </div>
              <p className="serif-body mt-2 max-w-prose text-base text-[--color-ink]">
                {c.summary}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
