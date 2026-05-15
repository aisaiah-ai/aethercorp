"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const QUOTES = [
  {
    num: "01",
    quote:
      "Ran our AI roadmap, our app launch, and our social channel in lockstep. We doubled qualified pipeline in a quarter.",
    name: "Maya Okafor",
    role: "VP Growth",
    company: "Northwind",
  },
  {
    num: "02",
    quote:
      "Spec to App Store in eight weeks. The team operates like an in-house squad, not an agency.",
    name: "Daniel Reyes",
    role: "CTO",
    company: "Lumen Health",
  },
  {
    num: "03",
    quote:
      "Shipped a real RAG product, not a demo. Evals, guardrails, telemetry — production-grade from day one.",
    name: "Priya Shah",
    role: "Head of Product",
    company: "Atlasly",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="mb-16 border-b border-[--color-border] pb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          ↳ Word from the field · 01 — 03
        </span>
        <h2 className="editorial-display mt-6 max-w-[18ch] text-5xl md:text-7xl lg:text-8xl">
          Trusted by operators,
          <br />
          <span className="text-accent">not marketers.</span>
        </h2>
      </div>

      <div className="grid gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative flex h-full flex-col bg-[--color-bg] p-8 md:p-10"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              {q.num}
            </span>
            <span className="mt-8 font-[family-name:var(--font-display)] text-7xl leading-none text-[--color-accent]">
              &ldquo;
            </span>
            <blockquote className="mt-4 flex-1 font-[family-name:var(--font-display)] text-xl leading-snug tracking-[-0.01em] text-[--color-fg] md:text-2xl">
              {q.quote}
            </blockquote>
            <figcaption className="mt-10 border-t border-[--color-border] pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg]/85">
                {q.name}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                {q.role} · {q.company}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
