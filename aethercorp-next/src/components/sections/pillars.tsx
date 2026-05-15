"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/section";

const PILLARS = [
  {
    id: "ai",
    num: "01",
    title: "AI Engineering",
    blurb:
      "Custom agents, RAG, copilots, evals, and production-grade pipelines on Claude, OpenAI, Gemini, and open models.",
    items: [
      "Agentic systems & tool use",
      "RAG over your private data",
      "LLM evaluation & guardrails",
      "Real-time voice & vision",
    ],
  },
  {
    id: "social",
    num: "02",
    title: "Social Media",
    blurb:
      "Strategy, creative, and AI-powered content engines that turn social into a measurable growth channel.",
    items: [
      "Brand & creative direction",
      "Short-form video at scale",
      "Community & creator ops",
      "Paid + organic playbooks",
    ],
  },
  {
    id: "web",
    num: "03",
    title: "Web Development",
    blurb:
      "High-performance Next.js sites and product surfaces — pixel-perfect, accessible, built to convert.",
    items: [
      "Next.js 16 & App Router",
      "Marketing → SaaS in one stack",
      "Headless commerce & CMS",
      "Edge, streaming, AI-native",
    ],
  },
  {
    id: "mobile",
    num: "04",
    title: "Native iOS & Android",
    blurb:
      "Truly native apps in Swift/SwiftUI and Kotlin/Compose — App Store ready, performance-obsessed.",
    items: [
      "SwiftUI & Jetpack Compose",
      "Offline-first architecture",
      "Push, payments, deep links",
      "App Store & Play launches",
    ],
  },
];

export function Pillars() {
  return (
    <Section id="services">
      {/* Big header */}
      <div className="mb-20 flex flex-col gap-6 border-b border-[--color-border] pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
            ↳ What we do · 01 — 04
          </span>
          <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl md:text-7xl lg:text-8xl">
            Four disciplines.
            <br />
            <span className="text-accent">One studio.</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-[--color-fg-muted] md:text-lg">
          We unify what most agencies silo — so AI, social, web, and mobile
          compound on each other instead of fighting for attention.
        </p>
      </div>

      {/* Stacked discipline rows, Rivian-style */}
      <div>
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          >
            <Link
              href={`/services#${p.id}`}
              className="group block border-t border-[--color-border] py-10 transition hover:bg-[--color-bg-soft]/40 md:py-16"
            >
              <div className="grid gap-8 md:grid-cols-12 md:items-baseline md:gap-12">
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                    {p.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="editorial-display text-4xl text-[--color-fg] md:text-5xl lg:text-6xl">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-base leading-relaxed text-[--color-fg]/85 md:text-lg">
                    {p.blurb}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[--color-fg-muted]">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-[--color-fg-dim]">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted] transition group-hover:text-[--color-accent] md:mt-12">
                <span className="link-underline">Explore {p.title}</span>
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
        <div className="border-t border-[--color-border]" />
      </div>
    </Section>
  );
}
