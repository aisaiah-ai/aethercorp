"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    v: "120+",
    k: "AI agents, automations & copilots shipped",
  },
  {
    v: "17+",
    k: "Native mobile products launched",
  },
  {
    v: "3.4×",
    k: "Average growth lift across redesigns",
  },
  {
    v: "0",
    k: "Generic templates, weak funnels, or throwaway builds",
  },
];

export function CinemaStats() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <span className="cinema-eyebrow text-white/55">
              ↳ Receipts · Issue 01
            </span>
            <h2 className="cinema-h2 mt-3 max-w-[18ch] text-white">
              Numbers we&apos;ll show you{" "}
              <span className="text-electric">because they&apos;re real.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex flex-col justify-between bg-[--color-night-soft] p-6 sm:p-8 lg:p-10"
              style={{ minHeight: "12rem" }}
            >
              <div
                className="cinema-display text-white"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                {s.v}
              </div>
              <div className="mt-4 text-[13px] leading-relaxed text-white/65 sm:text-[14px]">
                {s.k}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
