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
    num: "I.",
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
    num: "II.",
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
    num: "III.",
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
    num: "IV.",
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
      <Section className="!py-24 md:!py-32 paper-grain">
        <div className="mb-16 flex items-center justify-between border-b-2 border-[--color-ink] pb-4 label-lg">
          <span>↳ Aethercorp · Services · 01 — 04</span>
          <span className="hidden text-[--color-oxblood] md:inline">Full studio</span>
        </div>

        <h1
          className="display-italic text-[14vw] leading-[0.86] text-[--color-ink] md:text-[10vw] lg:text-[9vw]"
          style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
        >
          Four practices.
          <br />
          <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
            One studio.
          </span>
        </h1>
        <p className="serif-body mt-8 max-w-xl text-lg text-[--color-ink] md:text-xl">
          Each capability is excellent on its own. Run them together and you
          get a flywheel — AI that powers the product, social that spreads it,
          web that converts, mobile that retains.
        </p>
      </Section>

      <Pillars />

      <Section className="!pt-0">
        <div className="mb-16 border-b-2 border-[--color-ink] pb-12">
          <div className="label text-[--color-ink-muted]">↳ Inside each discipline</div>
          <h2
            className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            What you{" "}
            <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
              actually get.
            </span>
          </h2>
        </div>

        <div className="grid gap-px border-2 border-[--color-ink] bg-[--color-ink] md:grid-cols-2">
          {DETAILS.map((d) => (
            <div key={d.id} id={d.id} className="bg-[--color-paper] p-8 md:p-12">
              <div className="flex items-baseline justify-between">
                <span
                  className="display-italic text-5xl text-[--color-oxblood] md:text-6xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  {d.num}
                </span>
                <span className="label text-[--color-ink-muted]">
                  Discipline
                </span>
              </div>
              <h3
                className="display mt-12 text-5xl text-[--color-ink] md:text-6xl"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {d.title}
              </h3>
              <ul className="mt-10 space-y-4 border-t border-[--color-ink]/15 pt-8">
                {d.points.map((p) => (
                  <li
                    key={p}
                    className="serif-body flex gap-4 text-base leading-relaxed text-[--color-ink] md:text-lg"
                  >
                    <span className="label text-[--color-oxblood] shrink-0 pt-1.5">—</span>
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
