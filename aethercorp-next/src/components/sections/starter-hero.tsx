"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SPECS = [
  { v: "$200", k: "Starting price" },
  { v: "7 days", k: "Time to launch" },
  { v: "99/100", k: "Median Lighthouse" },
  { v: "0", k: "Long contracts" },
];

export function StarterHero() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-border]">
      <div className="bg-hairline pointer-events-none absolute inset-0 opacity-60" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-12 pt-32 md:px-10 md:pt-40 lg:px-14 lg:pb-20 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]"
        >
          <span>↳ Small business · Edition 01</span>
          <span className="hidden md:inline text-[--color-accent]">
            Now booking
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="editorial-display mt-16 text-[13vw] text-[--color-fg] md:mt-20 md:text-[9vw] lg:text-[8.5vw]"
        >
          <span className="block">A website</span>
          <span className="block">
            that <span className="text-accent">earns</span>
          </span>
          <span className="block">its keep.</span>
        </motion.h1>

        <div className="mt-16 grid gap-12 border-t border-[--color-border] pt-12 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
              ↳ The brief
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[--color-fg]/90 md:text-xl">
              Most agencies want $5,000 and three months. Most DIY builders
              look like 2012. We built a third option — studio craft, small
              business price, live in a week.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end"
          >
            <Link
              href="/proposal?tier=starter"
              className="group flex items-center gap-3 border border-[--color-fg] bg-[--color-fg] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-bg] transition hover:bg-[--color-accent] hover:border-[--color-accent]"
            >
              <span>Claim a $200 site</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#pricing"
              className="group flex items-center gap-3 border border-[--color-border-strong] bg-transparent px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg] transition hover:border-[--color-fg]"
            >
              <span>See all plans</span>
              <span className="text-[--color-accent] transition group-hover:translate-x-1">
                ↓
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Spec strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-4"
        >
          {SPECS.map((s) => (
            <div
              key={s.k}
              className="flex flex-col justify-between bg-[--color-bg] p-6 md:p-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                {s.k}
              </span>
              <span className="spec-num mt-8 text-[--color-fg]">{s.v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
