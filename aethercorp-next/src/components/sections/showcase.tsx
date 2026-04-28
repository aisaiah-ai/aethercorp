"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const ITEMS = [
  {
    tag: "AI · SaaS",
    title: "Northwind — agentic operations copilot",
    metric: "+38% ops throughput in 90 days",
    gradient: "from-[#7c5cff] via-[#a78bfa] to-[#22d3ee]",
  },
  {
    tag: "Native iOS · Health",
    title: "Lumen — SwiftUI wellness companion",
    metric: "4.9★ App Store · 220k MAU",
    gradient: "from-[#34d399] via-[#22d3ee] to-[#7c5cff]",
  },
  {
    tag: "Web · Commerce",
    title: "Atlasly — headless storefront rebuild",
    metric: "2.4× conversion · 96 Lighthouse",
    gradient: "from-[#f0abfc] via-[#7c5cff] to-[#22d3ee]",
  },
  {
    tag: "Social · Creator",
    title: "Cinder — short-form content engine",
    metric: "12M views in first quarter",
    gradient: "from-[#22d3ee] via-[#7c5cff] to-[#f0abfc]",
  },
];

export function Showcase() {
  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Selected work"
        title={
          <>
            Outcomes we shipped{" "}
            <span className="text-gradient">last year.</span>
          </>
        }
        description="A glimpse of what happens when AI, social, web and mobile move as one. We measure success in business outcomes, not deliverables."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {ITEMS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              href="/case-studies"
              className="group relative block overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-1 transition hover:border-[--color-border-strong]"
            >
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden rounded-[22px] bg-gradient-to-br ${c.gradient}`}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')] opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="rounded-full border border-white/30 bg-black/30 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
                      {c.tag}
                    </span>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{c.metric}</p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-white text-black transition group-hover:rotate-12">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
