import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Pillars } from "@/components/sections/pillars";
import { Stack } from "@/components/sections/stack";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering, social media, web development, and native iOS & Android — under one studio.",
};

const DETAILS = [
  {
    id: "ai",
    num: "01",
    title: "AI Engineering",
    points: [
      "Agentic systems with tool use, memory, and human-in-the-loop",
      "Retrieval-augmented generation over private datasets",
      "Evaluation pipelines, regression testing, and live telemetry",
      "Voice, vision, and multimodal product surfaces",
    ],
  },
  {
    id: "social",
    num: "02",
    title: "Social Media",
    points: [
      "Brand strategy, narrative, and creative direction",
      "Short-form video factories powered by AI workflows",
      "Community ops, partnerships, creator collaborations",
      "Paid + organic playbooks measured against revenue",
    ],
  },
  {
    id: "web",
    num: "03",
    title: "Web Development",
    points: [
      "Next.js 16 marketing, dashboards, and full SaaS surfaces",
      "Headless commerce, CMS, and personalization at the edge",
      "Design systems built on shadcn/ui + Tailwind v4",
      "AI-native interfaces — copilots, search, and chat",
    ],
  },
  {
    id: "mobile",
    num: "04",
    title: "Native iOS & Android",
    points: [
      "SwiftUI + Jetpack Compose, no cross-platform compromise",
      "Offline-first architecture and resilient sync",
      "Push, payments, deep links, and analytics from day one",
      "App Store + Play submissions and post-launch retainers",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="!py-32 md:!py-40">
        <div className="mb-16 flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          <span>↳ Services · 01 — 04</span>
          <span className="hidden md:inline">Full studio</span>
        </div>

        <h1 className="editorial-display max-w-[14ch] text-5xl md:text-7xl lg:text-9xl">
          Four practices.
          <br />
          <span className="text-accent">One studio.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-[--color-fg]/85 md:text-lg">
          Each capability is excellent on its own. Run them together and you
          get a flywheel — AI that powers the product, social that spreads it,
          web that converts, mobile that retains.
        </p>
      </Section>

      <Pillars />

      <Section>
        <div className="mb-16 border-b border-[--color-border] pb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
            ↳ What you actually get
          </span>
          <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl md:text-7xl">
            Inside each
            <br />
            <span className="text-accent">discipline.</span>
          </h2>
        </div>

        <div className="grid gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-2">
          {DETAILS.map((d) => (
            <div
              key={d.id}
              id={d.id}
              className="bg-[--color-bg] p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                  {d.num}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-accent]">
                  Discipline
                </span>
              </div>
              <h3 className="editorial-display mt-12 text-4xl md:text-5xl">
                {d.title}
              </h3>
              <ul className="mt-10 space-y-4 border-t border-[--color-border] pt-8">
                {d.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-4 text-sm leading-relaxed text-[--color-fg]/85 md:text-base"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-accent]">
                      —
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Stack />
      <CTA />
    </>
  );
}
