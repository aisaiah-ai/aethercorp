"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const QUOTES = [
  {
    quote:
      "AetherCorp ran our AI roadmap, our app launch, and our social channel in lockstep. We doubled qualified pipeline in a quarter.",
    name: "Maya Okafor",
    role: "VP Growth, Northwind",
  },
  {
    quote:
      "The native iOS rebuild went from spec to App Store in eight weeks. The team operates like an in-house squad, not an agency.",
    name: "Daniel Reyes",
    role: "CTO, Lumen Health",
  },
  {
    quote:
      "Their AI engineers shipped a real RAG product, not a demo. Evals, guardrails, telemetry — production-grade from day one.",
    name: "Priya Shah",
    role: "Head of Product, Atlasly",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow="What clients say"
        title={
          <>
            Trusted by founders, operators,{" "}
            <span className="text-gradient">and product leaders.</span>
          </>
        }
      />
      <div className="grid gap-5 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative flex h-full flex-col rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-7 backdrop-blur"
          >
            <Quote className="size-6 text-[--color-brand-2]" />
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-white/90">
              &ldquo;{q.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-[--color-border] pt-4">
              <div className="text-sm font-semibold text-white">{q.name}</div>
              <div className="text-xs text-[--color-fg-muted]">{q.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
