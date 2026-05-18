"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Banknote,
  Building2,
  GraduationCap,
  ShoppingBag,
  Cloud,
  UtensilsCrossed,
  Mic2,
  Truck,
  Wrench,
  Bot,
  Briefcase,
} from "lucide-react";

const VERTICALS = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Banknote, name: "Fintech" },
  { icon: Building2, name: "Real Estate" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Cloud, name: "SaaS" },
  { icon: UtensilsCrossed, name: "Hospitality" },
  { icon: Mic2, name: "Creators" },
  { icon: Truck, name: "Logistics" },
  { icon: Wrench, name: "Local services" },
  { icon: Bot, name: "AI startups" },
  { icon: Briefcase, name: "Enterprise teams" },
];

export function CinemaVerticals() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mb-14 grid gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-end">
          <div>
            <span className="cinema-eyebrow text-white/55">
              ↳ Verticals · 12 industries we&apos;ve built for
            </span>
            <h2 className="cinema-h2 mt-3 text-white">
              Different industries.{" "}
              <span className="text-electric">Same playbook.</span>
            </h2>
          </div>
          <p className="cinema-body max-w-md text-white/70">
            The category changes. The mandate doesn&apos;t — look inevitable,
            convert higher, automate the boring parts, scale past the launch.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-4">
          {VERTICALS.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.li
                key={v.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className="group relative flex items-center gap-3.5 bg-[--color-night-soft] px-5 py-5 transition hover:bg-[--color-night-2] sm:gap-4 sm:px-6 sm:py-6"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[0.04] text-[--color-electric-soft] transition group-hover:text-[--color-cyan]">
                  <Icon className="size-4" strokeWidth={2.2} />
                </span>
                <span className="text-sm font-medium text-white/90 sm:text-base">
                  {v.name}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
