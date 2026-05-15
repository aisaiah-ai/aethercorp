"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const ITEMS = [
  {
    num: "I.",
    tag: "AI · SaaS",
    title: "Northwind",
    subtitle: "Agentic operations copilot",
    summary:
      "We replaced six dashboards with a single streaming agent. Multi-step tool use, audit logs, evals on every release.",
    metric: "+38%",
    metricLabel: "Ops throughput · 90 days",
    palette: "ink",
  },
  {
    num: "II.",
    tag: "Native iOS · Health",
    title: "Lumen",
    subtitle: "SwiftUI wellness companion",
    summary:
      "Spec to App Store in eight weeks. Live activities, on-device coaching, HealthKit, 4.9★ at launch.",
    metric: "4.9★",
    metricLabel: "App Store · 220k MAU",
    palette: "oxblood",
  },
  {
    num: "III.",
    tag: "Web · Commerce",
    title: "Atlasly",
    subtitle: "Headless storefront",
    summary:
      "Edge-rendered PDPs, AI search, composable commerce. Conversion lift 2.4× in a single quarter.",
    metric: "2.4×",
    metricLabel: "Conversion · LH 96",
    palette: "ink",
  },
  {
    num: "IV.",
    tag: "Social · Creator",
    title: "Cinder",
    subtitle: "Short-form content engine",
    summary:
      "Daily output across TikTok, Reels, and Shorts powered by an AI editing pipeline and an in-house creator collective.",
    metric: "12M",
    metricLabel: "Views · first 90 days",
    palette: "oxblood",
  },
];

export function Showcase() {
  return (
    <Section id="case-studies" className="relative !pt-0">
      <div className="mb-16 grid items-end gap-8 border-b-2 border-[--color-ink] pb-12 md:grid-cols-12">
        <div className="md:col-span-1">
          <div className="label">§ II.</div>
        </div>
        <div className="md:col-span-8">
          <div className="label text-[--color-ink-muted]">↳ Selected from the atelier</div>
          <h2
            className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl lg:text-[110px]"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            Receipts.
            <br />
            <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
              Not promises.
            </span>
          </h2>
        </div>
        <div className="md:col-span-3 md:text-right">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 border-2 border-[--color-ink] bg-[--color-ink] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-oxblood] hover:border-[--color-oxblood]"
          >
            <span>View all 40+</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Editorial 2-col layout with alternating offset */}
      <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
        {ITEMS.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
            className={i % 2 === 1 ? "md:mt-24" : ""}
          >
            <Link
              href="/case-studies"
              className="group block"
            >
              {/* Image / mark */}
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden border-2 border-[--color-ink] ${
                  c.palette === "ink"
                    ? "bg-[--color-coal]"
                    : "bg-[--color-oxblood]"
                }`}
              >
                <CaseStudyArt palette={c.palette} title={c.title} />

                {/* Top meta */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]">
                  <span>{c.num} · {c.tag}</span>
                  <span className="opacity-60">Case File</span>
                </div>

                {/* Big metric corner */}
                <div className="absolute bottom-5 left-5">
                  <div
                    className="display text-7xl text-[--color-paper] md:text-9xl"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {c.metric}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]/70">
                    {c.metricLabel}
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-baseline gap-4">
                <span
                  className="display-italic text-3xl text-[--color-oxblood]"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  {c.title}
                </span>
                <span className="border-b border-dotted border-[--color-ink-dim]" />
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[--color-ink-muted] transition group-hover:text-[--color-oxblood]">
                  read →
                </span>
              </div>
              <p className="serif-body mt-2 max-w-prose text-base text-[--color-ink]">
                {c.summary}
              </p>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function CaseStudyArt({
  palette,
  title,
}: {
  palette: string;
  title: string;
}) {
  const inkOnDark = palette === "ink";
  return (
    <div className="absolute inset-0">
      {/* Massive typographic art — the title slammed against the frame */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center">
        <div
          className={`display-italic text-[28vw] leading-[0.85] md:text-[18vw] ${
            inkOnDark ? "text-[--color-paper]" : "text-[--color-paper]"
          }`}
          style={{
            fontVariationSettings: '"WONK" 1, "opsz" 144',
            opacity: 0.1,
          }}
        >
          {title.toUpperCase().slice(0, 2)}
        </div>
      </div>

      {/* Concentric rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`spin-slow size-64 rounded-full border border-dotted ${
            inkOnDark
              ? "border-[--color-paper]/30"
              : "border-[--color-paper]/40"
          }`}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[--color-paper]/25" />
    </div>
  );
}
