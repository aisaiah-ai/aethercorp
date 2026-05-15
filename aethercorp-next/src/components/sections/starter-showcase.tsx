"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const INDUSTRIES = [
  {
    tag: "Café · Restaurant",
    title: "Willow Café",
    subtitle: "Menu, hours, reservations",
    gradient: "from-[#f0abfc] via-[#c084fc] to-[#7c5cff]",
    accent: "Single-origin · Open daily",
  },
  {
    tag: "Trades · Local Service",
    title: "Northgate Plumbing",
    subtitle: "Quotes, emergency line, reviews",
    gradient: "from-[#22d3ee] via-[#0ea5e9] to-[#3b82f6]",
    accent: "24/7 emergency · 4.9★",
  },
  {
    tag: "Health · Wellness",
    title: "Cedar & Sage Wellness",
    subtitle: "Bookings, services, blog",
    gradient: "from-[#34d399] via-[#10b981] to-[#0d9488]",
    accent: "New patient intake online",
  },
  {
    tag: "Real Estate",
    title: "Hollow Pine Realty",
    subtitle: "Listings, agents, IDX feed",
    gradient: "from-[#fbbf24] via-[#f59e0b] to-[#d97706]",
    accent: "Featured listings · 32 active",
  },
  {
    tag: "Fitness · Studio",
    title: "Reps & Rhythm",
    subtitle: "Class schedule, memberships",
    gradient: "from-[#f43f5e] via-[#ec4899] to-[#a855f7]",
    accent: "Drop-in available",
  },
  {
    tag: "Consulting",
    title: "Mercer Strategy Group",
    subtitle: "Services, case studies, contact",
    gradient: "from-[#7c5cff] via-[#a78bfa] to-[#22d3ee]",
    accent: "Fortune 500 partners",
  },
];

export function StarterShowcase() {
  return (
    <Section className="!pt-0">
      <SectionHeader
        eyebrow="What we build"
        title={
          <>
            Real businesses,{" "}
            <span className="text-gradient">real-looking sites.</span>
          </>
        }
        description="Pick a template family — or let us design something custom. Every site is mobile-first, blazing fast, and built to actually convert."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/70 p-1 transition hover:border-[--color-border-strong]"
          >
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-gradient-to-br ${c.gradient}`}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')] mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Mock browser chrome on the inside */}
              <div className="absolute left-4 right-4 top-4 flex items-center gap-1.5 rounded-md bg-black/40 px-2 py-1.5 backdrop-blur">
                <span className="size-1.5 rounded-full bg-white/60" />
                <span className="size-1.5 rounded-full bg-white/60" />
                <span className="size-1.5 rounded-full bg-white/60" />
                <span className="ml-2 text-[10px] text-white/70">
                  {c.title.toLowerCase().replace(/\s+/g, "")}.com
                </span>
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
                  {c.tag}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-white/80">{c.subtitle}</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 text-[11px] text-white/90 backdrop-blur">
                  <span className="size-1.5 rounded-full bg-[--color-accent]" />
                  {c.accent}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
