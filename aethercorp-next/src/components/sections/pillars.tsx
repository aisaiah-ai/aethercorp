"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Megaphone,
  Globe2,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";

const PILLARS = [
  {
    id: "ai",
    icon: Brain,
    title: "AI Engineering",
    blurb:
      "Custom agents, RAG, copilots, evals, and production-grade pipelines on Claude, OpenAI, Gemini & open models.",
    items: [
      "Agentic systems & tool use",
      "RAG over your private data",
      "LLM evaluation & guardrails",
      "Real-time voice & vision",
    ],
    accent: "from-[#7c5cff] to-[#22d3ee]",
  },
  {
    id: "social",
    icon: Megaphone,
    title: "Social Media",
    blurb:
      "Strategy, creative, and AI-powered content engines that turn social into a measurable growth channel.",
    items: [
      "Brand & creative direction",
      "Short-form video at scale",
      "Community & creator ops",
      "Paid + organic playbooks",
    ],
    accent: "from-[#f0abfc] to-[#7c5cff]",
  },
  {
    id: "web",
    icon: Globe2,
    title: "Web Development",
    blurb:
      "High-performance Next.js sites and product surfaces — pixel-perfect, accessible, and built to convert.",
    items: [
      "Next.js 16 & App Router",
      "Marketing → SaaS in one stack",
      "Headless commerce & CMS",
      "Edge, streaming, AI-native",
    ],
    accent: "from-[#22d3ee] to-[#34d399]",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Native iOS & Android",
    blurb:
      "Truly native apps in Swift/SwiftUI and Kotlin/Compose — App Store ready, performance-obsessed.",
    items: [
      "SwiftUI & Jetpack Compose",
      "Offline-first architecture",
      "Push, payments, deep links",
      "App Store & Play launches",
    ],
    accent: "from-[#34d399] to-[#22d3ee]",
  },
];

export function Pillars() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="What we do"
        title={
          <>
            Four disciplines.{" "}
            <span className="text-gradient">One studio.</span>
          </>
        }
        description="We unify the practices most agencies silo — so AI, social, web, and mobile compound on each other instead of fighting for attention."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-8 backdrop-blur transition hover:border-[--color-border-strong]"
          >
            <div
              className={`pointer-events-none absolute -top-24 right-[-10%] size-72 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition group-hover:opacity-40`}
            />
            <div className="relative flex items-start justify-between">
              <div
                className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} shadow-[0_10px_30px_-10px_rgba(124,92,255,0.5)]`}
              >
                <p.icon className="size-6 text-white" />
              </div>
              <Link
                href={`/services#${p.id}`}
                className="grid size-10 place-items-center rounded-full border border-[--color-border-strong] bg-white/[0.03] text-white/70 transition hover:bg-white/[0.08] hover:text-white"
              >
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <h3 className="relative mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight md:text-3xl">
              {p.title}
            </h3>
            <p className="relative mt-3 max-w-md text-[--color-fg-muted]">
              {p.blurb}
            </p>

            <ul className="relative mt-6 grid grid-cols-2 gap-2 text-sm">
              {p.items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-2 rounded-xl border border-[--color-border] bg-[--color-surface-2]/60 px-3 py-2 text-white/80"
                >
                  <span className="size-1.5 rounded-full bg-[--color-brand-2]" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
