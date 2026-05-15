"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DISCIPLINES = [
  "AI Engineering",
  "Social Media",
  "Web Development",
  "Native Mobile",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-ink] paper-grain">
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-12 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
        {/* Top editorial slug */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-[--color-ink] pb-4 label-lg"
        >
          <span>Aethercorp · Issue 01 · 2026</span>
          <span className="hidden md:inline">
            A studio quarterly · No. 01 — 06
          </span>
          <span className="text-[--color-oxblood]">↓ Scroll</span>
        </motion.div>

        {/* The main composition — asymmetric */}
        <div className="relative grid items-start gap-6 py-12 md:grid-cols-12 md:gap-8 md:py-20 lg:py-28">
          {/* Left — giant rotating mark */}
          <div className="relative md:col-span-5 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative mx-auto aspect-square w-full max-w-[440px]"
            >
              <RotatingMark />
            </motion.div>

            <div className="mt-8 hidden md:block">
              <div className="label text-[--color-ink-muted]">↳ Folio</div>
              <ul className="mt-3 space-y-1">
                {DISCIPLINES.map((d, i) => (
                  <li
                    key={d}
                    className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[--color-ink]"
                  >
                    <span className="text-[--color-ink-dim]">
                      0{i + 1}
                    </span>
                    {d}
                    <span className="flex-1 border-t border-dotted border-[--color-ink-dim] translate-y-[-3px]" />
                    <span className="text-[--color-ink-muted]">→</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — giant typographic statement */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <h1
              className="display-italic text-[--color-ink] text-[16vw] leading-[0.86] md:text-[11.5vw] lg:text-[10.5vw]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              <span className="block">We make</span>
              <span className="block">
                things
              </span>
              <span className="block">
                <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>people</span>
              </span>
              <span className="block">can&apos;t ignore.</span>
            </h1>
          </motion.div>
        </div>

        {/* Footer of hero — meta + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="grid gap-8 border-t-2 border-[--color-ink] py-8 md:grid-cols-12 md:gap-8 md:py-10"
        >
          <div className="md:col-span-3">
            <div className="label text-[--color-ink-muted]">↳ Studio</div>
            <p className="serif-body mt-3 text-base text-[--color-ink]">
              Aethercorp is a studio of AI engineers, designers, and storytellers
              — making products, brands, and platforms for businesses that
              refuse to be invisible.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="label text-[--color-ink-muted]">↳ Working with</div>
            <ul className="mt-3 space-y-1 font-mono text-xs uppercase tracking-[0.1em] text-[--color-ink]">
              <li>Funded startups · Series A — C</li>
              <li>Enterprise innovation teams</li>
              <li>Local businesses · from $200</li>
              <li>Creators & operators</li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="label text-[--color-ink-muted]">↳ Availability</div>
            <p
              className="display-italic mt-3 text-3xl text-[--color-ink]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              Now booking
              <br />
              <span className="text-[--color-oxblood]">Q3 — Q4 2026.</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 md:col-span-3 md:items-end md:justify-end">
            <Link
              href="/proposal"
              className="group flex w-full items-center justify-between border border-[--color-ink] bg-[--color-ink] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-oxblood] hover:border-[--color-oxblood]"
            >
              <span>Start a project</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="group flex w-full items-center justify-between border border-[--color-ink] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-ink] transition hover:bg-[--color-ink] hover:text-[--color-paper]"
            >
              <span>See the atelier</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RotatingMark() {
  // Giant rotating ASTERISK-style mark — eight petals built with absolute
  // positioned bars + a center dot. Rotates infinitely.
  return (
    <div className="relative size-full">
      <div className="absolute inset-0 spin-slow">
        {/* Eight petals (every 22.5deg) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 block h-[44%] w-[3.5%] origin-bottom rounded-full bg-[--color-oxblood]"
            style={{
              transform: `translateX(-50%) translateY(-100%) rotate(${
                i * (360 / 8)
              }deg)`,
              transformOrigin: "50% 100%",
              top: "50%",
            }}
          />
        ))}
        {/* Center mass */}
        <span className="absolute left-1/2 top-1/2 size-[14%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--color-ink]" />
        {/* Inner ring detail */}
        <span className="absolute left-1/2 top-1/2 size-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[--color-ink]" />
        <span className="absolute left-1/2 top-1/2 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[--color-ink]/40" />
      </div>

      {/* Static label arc — Specimen / 2026 */}
      <div className="absolute inset-0 flex items-end justify-center pb-2">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[--color-ink]">
          ✶ specimen · 2026 ✶
        </div>
      </div>
      <div className="absolute inset-0 flex items-start justify-center pt-2">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[--color-ink]">
          aethercorp / studio
        </div>
      </div>
    </div>
  );
}
