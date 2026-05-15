"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function StarterHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-radial-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-12 pt-28 text-center md:pt-36 lg:pb-16 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge>Built for small business · From $200</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mt-6 max-w-5xl text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[92px]"
        >
          <span className="text-white/95">A website that</span>{" "}
          <span className="text-gradient">earns its keep —</span>
          <br />
          <span className="text-white/95">launched in a week.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-[--color-fg-muted] md:text-xl"
        >
          Most agencies want $5,000 and three months. Most DIY builders look
          like 2012. We built a smarter way: a real studio site for $200, kept
          fresh for $100 a month — blog posts included.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/proposal?tier=starter" size="lg">
            Claim a $200 starter site
            <ArrowRight className="size-4" />
          </Button>
          <Button href="#pricing" variant="ghost" size="lg">
            <Sparkles className="size-4" />
            See all plans
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-7 flex items-center gap-2 text-sm text-[--color-fg-muted]"
        >
          <span className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="size-4 fill-[--color-brand-2] text-[--color-brand-2]"
              />
            ))}
          </span>
          <span className="text-white/85">
            Loved by founders, contractors, and clinicians
          </span>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative mt-16 w-full max-w-5xl"
        >
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/25 via-white/5 to-transparent" />
          <div className="absolute -inset-32 -z-10 rounded-full bg-[--color-brand]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[24px] border border-[--color-border-strong] bg-[--color-surface]/90 shadow-[0_60px_120px_-30px_rgba(124,92,255,0.55)] backdrop-blur">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-[--color-border] bg-[--color-bg-soft] px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <div className="ml-4 flex-1">
                <div className="mx-auto flex h-7 max-w-md items-center justify-center gap-2 rounded-md border border-[--color-border] bg-[--color-bg]/70 px-3 text-xs text-white/60">
                  <span className="text-[--color-brand-2]">🔒</span>
                  willow-cafe.com
                </div>
              </div>
              <div className="hidden gap-1 md:flex">
                <span className="size-7 rounded-md bg-white/5" />
                <span className="size-7 rounded-md bg-white/5" />
              </div>
            </div>

            {/* Sample customer site preview */}
            <div className="relative grid min-h-[420px] grid-cols-1 bg-[--color-bg] md:grid-cols-2">
              {/* Left: hero text */}
              <div className="flex flex-col justify-center gap-5 p-8 text-left md:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-wider text-white/70">
                  <span className="size-1.5 rounded-full bg-[--color-brand-3]" />
                  Local · Open daily
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  Willow Café — pour-overs,
                  <br />
                  pastries, and slow mornings.
                </h2>
                <p className="max-w-sm text-sm text-white/70 md:text-base">
                  Family-run since 2018. Single-origin coffee, fresh-baked
                  pastries, and the best seat in the neighborhood.
                </p>
                <div className="mt-2 flex gap-2">
                  <span className="rounded-full bg-[--color-brand-3] px-4 py-2 text-xs font-medium text-black">
                    See the menu
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs text-white/80">
                    Visit us
                  </span>
                </div>
              </div>
              {/* Right: gradient art */}
              <div className="relative hidden overflow-hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0abfc] via-[#7c5cff] to-[#22d3ee]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')] mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span>Lighthouse</span>
                    <span className="font-semibold text-[--color-accent]">
                      99 / 100
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-2 text-[10px] text-white/70">
                    <div>
                      <div className="font-semibold text-white">A+</div>
                      <div>Speed</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">A</div>
                      <div>SEO</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">A</div>
                      <div>A11y</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">A</div>
                      <div>Mobile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
