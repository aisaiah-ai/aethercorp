"use client";

import { motion } from "framer-motion";
import { Bot, Layers, Megaphone } from "lucide-react";

const LABS = [
  {
    num: "01",
    icon: Bot,
    title: "AI Product Lab",
    blurb:
      "Custom agents, RAG, copilots, evals, voice & vision. We ship production-grade AI features — not demos.",
    chips: ["Agents", "RAG", "Evals", "MCP", "Voice", "Vision"],
    gradient: "from-[#7c5cff] via-[#a78bfa] to-[#00e1ff]",
  },
  {
    num: "02",
    icon: Layers,
    title: "Web + Mobile Lab",
    blurb:
      "Next.js, SwiftUI, and Compose under one roof. Pixel-perfect surfaces, native depth, fast everywhere.",
    chips: ["Next.js", "SwiftUI", "Compose", "Edge", "Tailwind", "Motion"],
    gradient: "from-[#00e1ff] via-[#7c5cff] to-[#ff5b8a]",
  },
  {
    num: "03",
    icon: Megaphone,
    title: "Growth + Creative Lab",
    blurb:
      "Brand, content, paid, organic, partnerships — instrumented like product, measured against revenue.",
    chips: ["Brand", "Content", "Paid", "SEO", "Lifecycle", "Partners"],
    gradient: "from-[#ffb76b] via-[#ff5b8a] to-[#7c5cff]",
  },
];

export function CinemaLabs() {
  return (
    <section id="labs" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mb-14 max-w-3xl">
          <span className="cinema-eyebrow text-white/55">↳ The labs · 03</span>
          <h2 className="cinema-h2 mt-3 text-white">
            Three studios.{" "}
            <span className="text-electric">One operating system.</span>
          </h2>
          <p className="cinema-body mt-6 max-w-xl text-white/70">
            Inside AetherCorp we run three tightly-knit labs that share the
            same engineering bench and design language — so AI, product, and
            growth ship together instead of fighting for attention.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {LABS.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="glass group relative flex flex-col overflow-hidden rounded-3xl p-7 sm:p-9"
              >
                {/* Top gradient strip */}
                <div className={`mb-7 h-1 w-12 rounded-full bg-gradient-to-r ${lab.gradient}`} />

                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/[0.04]">
                    <Icon className="size-5 text-white" strokeWidth={2.2} />
                  </span>
                  <span className="cinema-eyebrow text-white/35">{lab.num}</span>
                </div>

                <h3 className="cinema-h3 mt-8 text-white">{lab.title}</h3>
                <p className="cinema-body mt-3 text-white/70">{lab.blurb}</p>

                <ul className="mt-7 flex flex-wrap gap-1.5">
                  {lab.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] text-white/75"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                {/* Hover wash */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 -bottom-32 h-64 bg-gradient-to-t opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40 ${lab.gradient}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
