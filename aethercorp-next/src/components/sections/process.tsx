"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const STEPS = [
  {
    num: "01",
    week: "Week 01",
    title: "Discover",
    body: "We pressure-test your idea against the market, your data, and your team's reality. You leave with a sharp brief and a clear bet.",
  },
  {
    num: "02",
    week: "Week 02",
    title: "Design",
    body: "Brand, product, and prompt design move in parallel. Prototypes in days, not weeks. Stakeholder reviews built in.",
  },
  {
    num: "03",
    week: "Week 03 — N",
    title: "Build",
    body: "Senior engineers ship to production from day one. Web, mobile, and AI tracks run together on one timeline.",
  },
  {
    num: "04",
    week: "Launch",
    title: "Scale",
    body: "Launch playbook, growth instrumentation, and an ongoing studio retainer for product velocity post-go-live.",
  },
];

export function Process() {
  return (
    <Section id="process" className="section-cream">
      <div className="mb-16 flex flex-col gap-6 border-b border-[--color-border-on-cream] pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
            ↳ How we move · 01 — 04
          </span>
          <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl text-[--color-fg-on-cream] md:text-7xl lg:text-8xl">
            Idea to impact —
            <br />
            <span className="text-[--color-accent-deep]">on the clock.</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-[--color-fg-on-cream-muted] md:text-lg">
          A four-week-to-four-month rhythm tuned to your stage. No theatre, no
          rework, no agency handoff drama.
        </p>
      </div>

      <div className="grid gap-px bg-[--color-border-on-cream-strong] md:grid-cols-4">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="bg-[--color-cream] p-8 md:p-10"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
                {s.num}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
                {s.week}
              </span>
            </div>
            <h3 className="editorial-display mt-12 text-4xl text-[--color-fg-on-cream] md:text-5xl">
              {s.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[--color-fg-on-cream-muted] md:text-base">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
