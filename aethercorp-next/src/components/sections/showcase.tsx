"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const ITEMS = [
  {
    num: "01",
    tag: "AI · SaaS",
    title: "Northwind",
    subtitle: "Agentic operations copilot",
    metric: "+38%",
    metricLabel: "Ops throughput, 90 days",
    gradient: "from-[#5a6342] via-[#9eb867] to-[#cfd784]",
  },
  {
    num: "02",
    tag: "Native iOS · Health",
    title: "Lumen",
    subtitle: "SwiftUI wellness companion",
    metric: "4.9★",
    metricLabel: "App Store · 220k MAU",
    gradient: "from-[#2a3340] via-[#4a5970] to-[#7b8aa3]",
  },
  {
    num: "03",
    tag: "Web · Commerce",
    title: "Atlasly",
    subtitle: "Headless storefront rebuild",
    metric: "2.4×",
    metricLabel: "Conversion · Lighthouse 96",
    gradient: "from-[#3a2a1f] via-[#8b6a4a] to-[#d4a574]",
  },
  {
    num: "04",
    tag: "Social · Creator",
    title: "Cinder",
    subtitle: "Short-form content engine",
    metric: "12M",
    metricLabel: "Views, first quarter",
    gradient: "from-[#1f2a3a] via-[#3a5572] to-[#a3b8d4]",
  },
];

export function Showcase() {
  return (
    <Section id="case-studies" className="!py-0">
      <div className="border-t border-[--color-border] py-24 md:py-32 lg:py-40">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
              ↳ Selected work · 01 — 04
            </span>
            <h2 className="editorial-display mt-6 max-w-[16ch] text-5xl md:text-7xl lg:text-8xl">
              Outcomes,
              <br />
              <span className="text-accent">not deliverables.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg]"
          >
            <span className="link-underline">View archive</span>
            <span className="text-[--color-accent] transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-2">
          {ITEMS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-[--color-bg]"
            >
              <Link
                href="/case-studies"
                className="group relative block overflow-hidden transition"
              >
                {/* Image area */}
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${c.gradient}`}
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')] mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116]/80 via-[#0e1116]/20 to-transparent" />

                  {/* Top meta */}
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
                    <span>{c.num}</span>
                    <span>{c.tag}</span>
                  </div>

                  {/* Bottom title */}
                  <div className="absolute inset-x-6 bottom-6">
                    <h3 className="editorial-display text-4xl text-white md:text-5xl lg:text-6xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/85">{c.subtitle}</p>
                  </div>
                </div>

                {/* Spec strip below */}
                <div className="flex items-end justify-between gap-4 bg-[--color-bg] px-6 py-6 md:px-8">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                      {c.metricLabel}
                    </div>
                    <div className="mt-2 spec-num text-[--color-fg]">
                      {c.metric}
                    </div>
                  </div>
                  <span className="grid size-12 place-items-center border border-[--color-border-strong] text-[--color-fg] transition group-hover:border-[--color-accent] group-hover:text-[--color-accent]">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
