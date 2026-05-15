"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const STEPS = [
  {
    num: "01",
    day: "Day 01",
    title: "Kickoff",
    body: "30-minute call. We learn your business — services, customers, voice. You send logo, photos, and any copy you have.",
  },
  {
    num: "02",
    day: "Day 02 — 03",
    title: "Preview",
    body: "We send a clickable preview of your site. You react. We revise. No six-week design phase — we work from a proven system.",
  },
  {
    num: "03",
    day: "Day 04 — 06",
    title: "Build",
    body: "We code, polish, wire up the contact form, run SEO checks, set up analytics, and seed your first blog post.",
  },
  {
    num: "04",
    day: "Day 07",
    title: "Launch",
    body: "Site goes live on your domain via Cloudflare. You get a quick walkthrough, training video, and the keys.",
  },
];

export function StarterTimeline() {
  return (
    <Section className="section-cream">
      <div className="mb-16 flex flex-col gap-6 border-b border-[--color-border-on-cream] pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
            ↳ The process · 01 — 04
          </span>
          <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl text-[--color-fg-on-cream] md:text-7xl lg:text-8xl">
            Kickoff to live —
            <br />
            <span className="text-[--color-accent-deep]">7 business days.</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-[--color-fg-on-cream-muted] md:text-lg">
          We&apos;ve removed every step that doesn&apos;t move the ball. Same
          craft, a fraction of the calendar time.
        </p>
      </div>

      <div className="grid gap-px bg-[--color-border-on-cream-strong] md:grid-cols-4">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="bg-[--color-cream] p-8 md:p-10"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
                {s.num}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
                {s.day}
              </span>
            </div>
            <h3 className="editorial-display mt-12 text-4xl text-[--color-fg-on-cream] md:text-5xl">
              {s.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[--color-fg-on-cream-muted] md:text-base">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
