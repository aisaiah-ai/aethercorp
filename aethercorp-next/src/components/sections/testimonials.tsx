"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const QUOTES = [
  {
    num: "i.",
    quote:
      "Ran our AI roadmap, our app launch, and our social channel in lockstep. We doubled qualified pipeline in a quarter.",
    name: "Maya Okafor",
    role: "VP Growth",
    company: "Northwind",
  },
  {
    num: "ii.",
    quote:
      "Spec to App Store in eight weeks. The team operates like an in-house squad, not an agency.",
    name: "Daniel Reyes",
    role: "CTO",
    company: "Lumen Health",
  },
  {
    num: "iii.",
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
      <div className="mb-20 grid items-end gap-8 border-b-2 border-[--color-ink] pb-12 md:grid-cols-12">
        <div className="md:col-span-1">
          <div className="label">§ V.</div>
        </div>
        <div className="md:col-span-11">
          <div className="label text-[--color-ink-muted]">↳ Word from the field</div>
          <h2
            className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl lg:text-[110px]"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            Operators
            <br />
            <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
              talk back.
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {QUOTES.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="grid items-start gap-8 border-b border-[--color-ink]/15 pb-16 md:grid-cols-12"
          >
            <div className="md:col-span-1">
              <span
                className="display-italic text-5xl text-[--color-oxblood] md:text-6xl"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                {q.num}
              </span>
            </div>
            <div className="md:col-span-8">
              <span
                className="display-italic text-7xl leading-none text-[--color-oxblood]"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                &ldquo;
              </span>
              <blockquote
                className="display mt-2 text-3xl text-[--color-ink] md:text-5xl lg:text-6xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {q.quote}
              </blockquote>
            </div>
            <div className="md:col-span-3 md:pt-12">
              <div className="label text-[--color-ink-muted]">↳ Attribution</div>
              <div
                className="display-italic mt-3 text-2xl text-[--color-ink]"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                {q.name}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[--color-ink-muted]">
                {q.role}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[--color-oxblood]">
                {q.company}
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
