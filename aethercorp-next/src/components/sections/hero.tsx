"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-radial-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-20 pt-28 text-center md:pt-36 lg:pb-28 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge>New · 2026 capabilities released</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mt-6 max-w-5xl text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]"
        >
          <span className="text-gradient">AI, Social, Web & Native Mobile</span>
          <br />
          <span className="text-white/95">built to scale your business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-[--color-fg-muted] md:text-xl"
        >
          AetherCorp is the modern studio for ambitious founders and growth
          teams. We ship AI products, social engines, rich web experiences,
          and native iOS & Android apps — under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            Start a project
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/case-studies" variant="ghost" size="lg">
            <PlayCircle className="size-4" />
            See our work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative mt-20 w-full max-w-5xl"
        >
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
          <div className="relative overflow-hidden rounded-[28px] border border-[--color-border-strong] bg-[--color-surface]/90 p-2 backdrop-blur">
            <div className="relative grid grid-cols-1 gap-2 rounded-2xl bg-[--color-bg-soft] p-4 md:grid-cols-3 md:p-6">
              {[
                { k: "AI agents shipped", v: "120+" },
                { k: "Avg. growth lift", v: "3.4×" },
                { k: "Native apps live", v: "40+" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-[--color-border] bg-[--color-surface-2]/60 p-5 text-left"
                >
                  <div className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-sm text-[--color-fg-muted]">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-[--color-brand]/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
