"use client";

import { motion } from "framer-motion";
import { Compass, Pencil, Code2, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const STEPS = [
  {
    icon: Compass,
    title: "Discover",
    body: "We pressure-test your idea against the market, your data, and your team's reality. You leave with a sharp brief and a clear bet.",
  },
  {
    icon: Pencil,
    title: "Design",
    body: "Brand, product, and prompt design move in parallel. Prototypes in days, not weeks. Stakeholder reviews built in.",
  },
  {
    icon: Code2,
    title: "Build",
    body: "Senior engineers ship to production from week one. Web, mobile, and AI tracks run together with one timeline.",
  },
  {
    icon: Rocket,
    title: "Launch & scale",
    body: "Launch playbook, growth instrumentation, and an ongoing studio retainer for product velocity post-go-live.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="Process"
        title={
          <>
            How we move from{" "}
            <span className="text-gradient">idea to impact.</span>
          </>
        }
        description="A four-week-to-four-month rhythm tuned to your stage. No theatre, no rework, no agency handoff drama."
      />
      <div className="relative grid gap-4 md:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[--color-border-strong] to-transparent md:block" />
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="relative rounded-3xl border border-[--color-border] bg-[--color-surface]/60 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl border border-[--color-border-strong] bg-[--color-bg-soft] text-[--color-brand-2]">
                <s.icon className="size-5" />
              </span>
              <span className="text-xs font-mono text-[--color-fg-dim]">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[--color-fg-muted]">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
