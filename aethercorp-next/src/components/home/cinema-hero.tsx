"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { CommandCenter } from "@/components/home/command-center";

export function CinemaHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -top-40 left-1/2 size-[120vw] max-w-[1600px] -translate-x-1/2 rounded-full opacity-90" />
        <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="noise-bg absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[--color-night] to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT — copy */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur"
            >
              <span className="live-dot" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/85">
                For companies that need to look, feel & perform like the market leader.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="cinema-display-lg mt-7 max-w-[14ch] text-white"
            >
              Build a site{" "}
              <span className="text-electric">people cannot ignore.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="cinema-body mt-7 max-w-xl text-white/75"
            >
              AetherCorp designs and ships flagship web apps, native iOS &amp;
              Android products, custom AI systems, and end-to-end launch engines
              — so your digital presence sells the company before your sales
              team says a word.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#start" className="btn-cinema">
                Create our flagship
                <ArrowUpRight className="size-4" strokeWidth={2.4} />
              </a>
              <a href="#value" className="btn-cinema-ghost">
                <PlayCircle className="size-4" strokeWidth={2.2} />
                Show me the value
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-6 text-[11px] uppercase tracking-[0.16em] text-white/55"
            >
              <span>Web apps</span>
              <span className="text-white/25">·</span>
              <span>Native mobile</span>
              <span className="text-white/25">·</span>
              <span>AI systems</span>
              <span className="text-white/25">·</span>
              <span>Growth engines</span>
            </motion.div>
          </div>

          {/* RIGHT — Aether Command Center */}
          <div className="relative">
            <CommandCenter />
          </div>
        </div>
      </div>
    </section>
  );
}
