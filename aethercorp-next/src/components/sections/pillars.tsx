"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/section";

const PILLARS = [
  {
    id: "ai",
    num: "I.",
    title: "AI Engineering",
    blurb:
      "Agentic systems, retrieval, and copilots tuned to your data and your team's reality.",
    items: [
      "Agent design & tool use",
      "RAG over private data",
      "Evals + guardrails",
      "Multimodal interfaces",
    ],
  },
  {
    id: "social",
    num: "II.",
    title: "Social Media",
    blurb:
      "Brand, narrative, and short-form factories that turn social into a measurable channel.",
    items: [
      "Creative direction",
      "Short-form at scale",
      "Community ops",
      "Paid + organic",
    ],
  },
  {
    id: "web",
    num: "III.",
    title: "Web Development",
    blurb:
      "Pixel-perfect, accessible, and fast. Built to convert without looking like a template.",
    items: [
      "Next.js 16 + App Router",
      "Marketing → SaaS",
      "Headless commerce",
      "Edge & streaming",
    ],
  },
  {
    id: "mobile",
    num: "IV.",
    title: "Native Mobile",
    blurb:
      "Truly native Swift + Kotlin apps. App Store ready, performance-obsessed.",
    items: [
      "SwiftUI / Compose",
      "Offline-first sync",
      "Push / payments / DL",
      "Store launches",
    ],
  },
];

export function Pillars() {
  return (
    <Section id="services" className="relative paper-grain">
      {/* Manifesto-style header */}
      <div className="mb-20 grid items-end gap-8 border-b-2 border-[--color-ink] pb-12 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-1">
          <div className="label">§ I.</div>
        </div>
        <div className="md:col-span-7">
          <div className="label text-[--color-ink-muted]">↳ The disciplines</div>
          <h2
            className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl lg:text-[110px]"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            Four.
            <br />
            <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
              One studio.
            </span>
          </h2>
        </div>
        <div className="md:col-span-4">
          <p className="serif-body text-lg text-[--color-ink] md:text-xl drop-cap">
            Most agencies silo capabilities. We unify them so AI, social, web,
            and mobile compound on each other instead of fighting for attention
            — and your team works with one number, one timeline, one bill.
          </p>
        </div>
      </div>

      {/* Stacked rows */}
      <div>
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              href={`/services#${p.id}`}
              className="group block border-b border-[--color-ink]/15 py-12 transition hover:bg-[--color-paper-deep] md:py-20"
            >
              <div className="grid items-baseline gap-8 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-1">
                  <span
                    className="display-italic text-5xl text-[--color-oxblood] md:text-6xl"
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {p.num}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h3
                    className="display text-5xl text-[--color-ink] md:text-7xl lg:text-8xl"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-3">
                  <p className="serif-body text-lg text-[--color-ink]">
                    {p.blurb}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[--color-ink]">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-baseline gap-3">
                        <span className="text-[--color-oxblood]">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[--color-ink-muted] transition group-hover:text-[--color-oxblood] md:mt-10">
                <span className="dotted-link">Read about {p.title}</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
