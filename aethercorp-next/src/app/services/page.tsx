import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Pillars } from "@/components/sections/pillars";
import { Stack } from "@/components/sections/stack";
import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering, social media, web development, and native iOS & Android — under one studio.",
};

const DETAILS = [
  {
    id: "ai",
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
      <Section className="!py-24 md:!py-32">
        <div className="flex flex-col items-center text-center">
          <Badge>Services</Badge>
          <h1 className="mt-6 max-w-4xl text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Four practices that{" "}
            <span className="text-gradient">compound.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-[--color-fg-muted]">
            Each capability is excellent on its own. Run them together, and
            you get a flywheel — AI that powers the product, social that
            spreads it, web that converts, mobile that retains.
          </p>
        </div>
      </Section>

      <Pillars />

      <Section className="!pt-0">
        <SectionHeader
          eyebrow="Deep dive"
          title={
            <>
              What you actually{" "}
              <span className="text-gradient">get.</span>
            </>
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {DETAILS.map((d) => (
            <div
              key={d.id}
              id={d.id}
              className="rounded-3xl border border-[--color-border] bg-[--color-surface]/60 p-7"
            >
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                {d.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {d.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm text-white/85"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[--color-brand-2]" />
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
