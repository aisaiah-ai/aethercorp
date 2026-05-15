"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const INDUSTRIES = [
  {
    num: "01",
    tag: "Café · Restaurant",
    title: "Willow",
    subtitle: "Menu · Hours · Reservations",
    gradient: "from-[#3a2a1f] via-[#8b6a4a] to-[#d4a574]",
  },
  {
    num: "02",
    tag: "Trades · Service",
    title: "Northgate",
    subtitle: "Quotes · 24/7 · Reviews",
    gradient: "from-[#1a2438] via-[#2f4566] to-[#7b8aa3]",
  },
  {
    num: "03",
    tag: "Health · Wellness",
    title: "Cedar & Sage",
    subtitle: "Bookings · Services · Blog",
    gradient: "from-[#1f2a1a] via-[#4a5a3a] to-[#9eb867]",
  },
  {
    num: "04",
    tag: "Real Estate",
    title: "Hollow Pine",
    subtitle: "Listings · Agents · IDX",
    gradient: "from-[#2a1f1a] via-[#6b4a3a] to-[#cfa078]",
  },
  {
    num: "05",
    tag: "Fitness · Studio",
    title: "Reps & Rhythm",
    subtitle: "Schedule · Memberships",
    gradient: "from-[#1f1a2a] via-[#3a2a4a] to-[#7864a3]",
  },
  {
    num: "06",
    tag: "Consulting",
    title: "Mercer Strategy",
    subtitle: "Services · Case studies",
    gradient: "from-[#0e1116] via-[#2a3340] to-[#5a6b78]",
  },
];

export function StarterShowcase() {
  return (
    <Section className="!py-0">
      <div className="border-t border-[--color-border] py-24 md:py-32 lg:py-40">
        <div className="mb-16 flex flex-col gap-6 border-b border-[--color-border] pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
              ↳ What we build · 01 — 06
            </span>
            <h2 className="editorial-display mt-6 max-w-[16ch] text-5xl md:text-7xl lg:text-8xl">
              Real businesses.
              <br />
              <span className="text-accent">Real-looking sites.</span>
            </h2>
          </div>
          <p className="max-w-md text-base text-[--color-fg-muted] md:text-lg">
            Pick a template family — or let us design something custom. Every
            site is mobile-first, blazing fast, and built to convert.
          </p>
        </div>

        <div className="grid gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="bg-[--color-bg]"
            >
              <div className="group relative block transition">
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${c.gradient}`}
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')] mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116]/80 via-[#0e1116]/10 to-transparent" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
                    <span>{c.num}</span>
                    <span>{c.tag}</span>
                  </div>

                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="editorial-display text-3xl text-white md:text-4xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
                      {c.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
