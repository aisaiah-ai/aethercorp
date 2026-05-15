"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const ROWS = [
  {
    num: "01",
    label: "AI",
    items: [
      "Claude",
      "GPT-5",
      "Gemini",
      "Llama",
      "LangGraph",
      "MCP",
      "Mastra",
      "Eval suites",
    ],
  },
  {
    num: "02",
    label: "Web",
    items: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "Framer Motion",
      "Cloudflare",
      "Edge",
    ],
  },
  {
    num: "03",
    label: "Mobile",
    items: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "Xcode Cloud",
      "Fastlane",
      "RevenueCat",
      "Sentry",
    ],
  },
  {
    num: "04",
    label: "Data & Ops",
    items: [
      "Postgres",
      "Redis",
      "Pinecone",
      "BigQuery",
      "Segment",
      "PostHog",
      "Linear",
      "GitHub Actions",
    ],
  },
];

export function Stack() {
  return (
    <Section id="stack">
      <div className="mb-16 flex flex-col gap-6 border-b border-[--color-border] pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
            ↳ Tools we ship · 01 — 04
          </span>
          <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl md:text-7xl lg:text-8xl">
            Production
            <br />
            <span className="text-accent">over novelty.</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-[--color-fg-muted] md:text-lg">
          Vetted, modern, and chosen for outcomes. We bring the toolchain so
          your team can stay focused.
        </p>
      </div>

      <div>
        {ROWS.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="grid items-baseline gap-6 border-t border-[--color-border] py-8 md:grid-cols-12 md:gap-10 md:py-10"
          >
            <div className="md:col-span-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                {row.num}
              </span>
            </div>
            <div className="md:col-span-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[--color-fg] md:text-3xl">
                {row.label}
              </span>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-[--color-fg]/85 md:text-[13px]">
                {row.items.map((it, idx) => (
                  <span key={it} className="flex items-center gap-6">
                    {it}
                    {idx < row.items.length - 1 ? (
                      <span className="text-[--color-fg-dim]">·</span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[--color-border]" />
      </div>
    </Section>
  );
}
