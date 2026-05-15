"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DISCIPLINES = [
  { num: "01", label: "AI Engineering" },
  { num: "02", label: "Social Media" },
  { num: "03", label: "Web Development" },
  { num: "04", label: "Native Mobile" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-border]">
      <div className="bg-hairline pointer-events-none absolute inset-0 opacity-60" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-12 pt-32 md:px-10 md:pt-40 lg:px-14 lg:pb-20 lg:pt-48">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]"
        >
          <span>01 — 04 · Disciplines</span>
          <span className="hidden md:inline">Index ↓</span>
          <span className="text-[--color-fg]">2026 Edition</span>
        </motion.div>

        {/* Massive headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="editorial-display mt-16 text-[14vw] text-[--color-fg] md:mt-20 md:text-[10vw] lg:text-[9vw]"
        >
          <span className="block">We build</span>
          <span className="block">
            websites <span className="text-[--color-accent]">that</span>
          </span>
          <span className="block">earn their keep.</span>
        </motion.h1>

        {/* Description + CTAs row */}
        <div className="mt-16 grid gap-12 border-t border-[--color-border] pt-12 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
              ↳ Studio brief
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[--color-fg]/90 md:text-xl">
              A modern studio for ambitious businesses. We design and ship AI
              products, social engines, web platforms, and native mobile apps —
              from <span className="text-[--color-accent]">$200</span> to
              eight figures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-[--color-fg] bg-[--color-fg] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-bg] transition hover:bg-[--color-accent] hover:border-[--color-accent]"
            >
              <span>Start a project</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="group flex items-center gap-3 border border-[--color-border-strong] bg-transparent px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg] transition hover:border-[--color-fg]"
            >
              <span>Selected work</span>
              <span className="text-[--color-accent] transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Disciplines index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-4"
        >
          {DISCIPLINES.map((d) => (
            <Link
              key={d.label}
              href={`/services#${d.label.toLowerCase().replace(/\s+/g, "")}`}
              className="group relative flex flex-col justify-between bg-[--color-bg] p-6 transition hover:bg-[--color-bg-soft] md:p-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                {d.num}
              </span>
              <div className="mt-12 flex items-end justify-between">
                <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[--color-fg] md:text-2xl">
                  {d.label}
                </span>
                <span className="text-[--color-accent] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Bottom strip */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
          <span>Based Remote</span>
          <span>·</span>
          <span>Est. 2024</span>
          <span>·</span>
          <span>Available for Q3 — Q4</span>
          <span>·</span>
          <span className="text-[--color-accent]">Now booking</span>
        </div>
      </div>
    </section>
  );
}
