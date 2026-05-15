"use client";

import { motion } from "framer-motion";
import { Phone, Palette, Code2, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const STEPS = [
  {
    day: "Day 1",
    icon: Phone,
    title: "30-minute kickoff",
    body: "We learn your business — services, customers, voice, what success looks like. You send us your logo, photos, and any copy you already have.",
  },
  {
    day: "Day 2–3",
    icon: Palette,
    title: "Design preview",
    body: "We send a clickable preview of your site. You react. We revise. No 6-week design phase — we work from a proven system.",
  },
  {
    day: "Day 4–6",
    icon: Code2,
    title: "Build + content",
    body: "We code, polish, wire up the contact form, run SEO checks, set up analytics, and seed your first blog post.",
  },
  {
    day: "Day 7",
    icon: Rocket,
    title: "Launch",
    body: "Site goes live on your domain via Cloudflare. You get a quick walkthrough, training video, and the keys. Done.",
  },
];

export function StarterTimeline() {
  return (
    <Section className="!pt-0">
      <SectionHeader
        eyebrow="The process"
        title={
          <>
            Kickoff to live in{" "}
            <span className="text-gradient">7 business days.</span>
          </>
        }
        description="We've removed every step that doesn't move the ball. Same craft, a fraction of the calendar time."
      />

      <div className="relative">
        {/* connecting line */}
        <div className="pointer-events-none absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-[--color-brand]/50 to-transparent md:block" />

        <div className="grid gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.day}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-3xl border border-[--color-border] bg-[--color-surface]/60 p-6 backdrop-blur"
              >
                <div className="relative z-10 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[--color-brand]/25 via-[--color-brand-3]/15 to-[--color-brand-2]/25 text-[--color-brand-2] shadow-[0_10px_30px_-10px_rgba(124,92,255,0.6)]">
                  <Icon className="size-6" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[--color-brand-2]">
                  {s.day}
                </div>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[--color-fg-muted]">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
