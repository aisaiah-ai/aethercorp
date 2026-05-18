"use client";

import { motion } from "framer-motion";
import { ScanLine, Lightbulb, Hammer, Rocket } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: ScanLine,
    title: "X-ray the business",
    body:
      "We pressure-test your funnel, product surface, and unit economics — and find the highest-leverage bet before we touch a single Figma file.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Invent the flagship",
    body:
      "Brand, narrative, design system, and product surface — invented together as a single piece of work, not a relay race between vendors.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Build the machine",
    body:
      "Senior engineers, real architecture, AI agents wired into the actual operations — built to scale past launch, not just survive it.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Turn it into growth",
    body:
      "Paid + organic launch, lifecycle, partnerships, content, and an instrumentation layer that tells you exactly what's working — in revenue.",
  },
];

export function CinemaProcess() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mb-14 grid gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-end">
          <div>
            <span className="cinema-eyebrow text-white/55">
              ↳ The process · 01 — 04
            </span>
            <h2 className="cinema-h2 mt-3 text-white">
              Idea to revenue —{" "}
              <span className="text-electric">on the clock.</span>
            </h2>
          </div>
          <p className="cinema-body max-w-md text-white/70">
            A four-step engagement designed for ambitious teams. No theatre, no
            rework, no agency handoff drama — start in week one, ship in week
            two, compound from there.
          </p>
        </div>

        <div className="relative">
          {/* Connecting timeline line on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative"
                >
                  <span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[--color-night-2] to-[--color-night-3] ring-1 ring-white/15">
                    <Icon className="size-5 text-[--color-electric-soft]" strokeWidth={2.2} />
                    <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[--color-night] text-[9px] font-semibold text-[--color-cyan] ring-1 ring-white/20">
                      {s.num}
                    </span>
                  </span>
                  <h3 className="cinema-h3 mt-6 text-white">{s.title}</h3>
                  <p className="cinema-body mt-3 text-white/70">{s.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
