"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const ROWS = [
  {
    label: "AI",
    items: ["Claude", "GPT-5", "Gemini", "Llama", "LangGraph", "MCP", "Mastra", "Eval suites"],
  },
  {
    label: "Web",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "shadcn/ui", "Framer Motion", "Vercel", "Edge"],
  },
  {
    label: "Mobile",
    items: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Xcode Cloud", "Fastlane", "RevenueCat", "Sentry"],
  },
  {
    label: "Data & Ops",
    items: ["Postgres", "Redis", "Pinecone", "BigQuery", "Segment", "PostHog", "Linear", "GitHub Actions"],
  },
];

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeader
        eyebrow="Stack"
        title={
          <>
            Tools we ship in{" "}
            <span className="text-gradient">production.</span>
          </>
        }
        description="Modern, vetted, and chosen for outcomes — not novelty. We bring the toolchain so your team can stay focused."
      />
      <div className="space-y-4">
        {ROWS.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="flex flex-wrap items-center gap-3 rounded-3xl border border-[--color-border] bg-[--color-surface]/60 p-5"
          >
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em] text-[--color-brand-2]">
              {row.label}
            </span>
            <span className="h-5 w-px bg-[--color-border-strong]" />
            <div className="flex flex-wrap gap-2">
              {row.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-[--color-border] bg-[--color-surface-2]/80 px-3 py-1.5 text-sm text-white/80"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
