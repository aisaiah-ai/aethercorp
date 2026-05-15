"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const STEPS = [
  {
    num: "i.",
    week: "Week 01",
    title: "Discover",
    body: "We pressure-test your idea against the market, your data, and your team's reality. You leave with a sharp brief and a clear bet.",
  },
  {
    num: "ii.",
    week: "Week 02",
    title: "Design",
    body: "Brand, product, and prompt design move in parallel. Prototypes in days, not weeks. Stakeholder reviews built in.",
  },
  {
    num: "iii.",
    week: "Week 03 — N",
    title: "Build",
    body: "Senior engineers ship to production from day one. Web, mobile, and AI tracks run together on one timeline.",
  },
  {
    num: "iv.",
    week: "Launch",
    title: "Scale",
    body: "Launch playbook, growth instrumentation, and an ongoing studio retainer for product velocity post-go-live.",
  },
];

export function Process() {
  return (
    <Section id="process" className="section-coal !text-[--color-paper]">
      <div className="mb-20 grid items-end gap-8 border-b-2 border-[--color-paper]/30 pb-12 md:grid-cols-12">
        <div className="md:col-span-1">
          <div className="label text-[--color-paper]/60">§ III.</div>
        </div>
        <div className="md:col-span-7">
          <div className="label text-[--color-paper]/60">↳ The method</div>
          <h2
            className="display-italic mt-6 text-6xl text-[--color-paper] md:text-8xl lg:text-[110px]"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            On the
            <br />
            <span className="display text-[--color-signal]" style={{ fontVariationSettings: '"opsz" 144' }}>
              clock.
            </span>
          </h2>
        </div>
        <div className="md:col-span-4">
          <p className="serif-body text-lg text-[--color-paper]/85">
            A four-week-to-four-month rhythm tuned to your stage. No theatre,
            no rework, no agency handoff drama.
          </p>
        </div>
      </div>

      <div className="grid gap-0">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="grid items-baseline gap-8 border-b border-[--color-paper]/20 py-10 md:grid-cols-12 md:gap-12 md:py-16"
          >
            <div className="md:col-span-1">
              <span
                className="display-italic text-5xl text-[--color-signal] md:text-6xl"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                {s.num}
              </span>
            </div>
            <div className="md:col-span-2">
              <span className="label text-[--color-paper]/60">{s.week}</span>
            </div>
            <div className="md:col-span-4">
              <h3
                className="display text-5xl text-[--color-paper] md:text-7xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {s.title}
              </h3>
            </div>
            <div className="md:col-span-5">
              <p className="serif-body text-lg text-[--color-paper]/85">
                {s.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
