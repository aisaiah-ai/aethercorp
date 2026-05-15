import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the Aethercorp studio on AI, product, and growth.",
};

const POSTS = [
  {
    num: "I.",
    title: "Shipping production AI agents in 2026",
    excerpt:
      "What we've learned running real agents at scale — tool design, evals, and the patterns that don't break under pressure.",
    tag: "AI",
    date: "Apr 2026",
    minutes: "8 min",
  },
  {
    num: "II.",
    title: "Why we still go native on iOS and Android",
    excerpt:
      "The case for SwiftUI and Compose, told from the inside of half a dozen launches in the last 12 months.",
    tag: "Mobile",
    date: "Mar 2026",
    minutes: "6 min",
  },
  {
    num: "III.",
    title: "A modern Next.js stack for product teams",
    excerpt:
      "How we set up Next.js 16, shadcn/ui, Tailwind v4, and Cloudflare for real-world apps.",
    tag: "Web",
    date: "Mar 2026",
    minutes: "12 min",
  },
  {
    num: "IV.",
    title: "Social as a growth system, not a vibe",
    excerpt:
      "Treating social like product — playbooks, instrumentation, and the metrics we actually report on.",
    tag: "Social",
    date: "Feb 2026",
    minutes: "7 min",
  },
];

export default function BlogPage() {
  return (
    <Section className="paper-grain">
      <div className="mb-16 flex items-center justify-between border-b-2 border-[--color-ink] pb-4 label-lg">
        <span>↳ Aethercorp · Journal · Issue 04</span>
        <span className="hidden text-[--color-oxblood] md:inline">
          Studio writing
        </span>
      </div>

      <h1
        className="display-italic text-[14vw] leading-[0.86] text-[--color-ink] md:text-[10vw] lg:text-[9vw]"
        style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
      >
        Notes from
        <br />
        <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
          the studio.
        </span>
      </h1>
      <p className="serif-body mt-8 max-w-xl text-lg text-[--color-ink] md:text-xl">
        A small, opinionated journal on AI engineering, native mobile, modern
        web, and growing brands worth following.
      </p>

      <div className="mt-24 border-t border-[--color-ink]">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="group block border-b border-[--color-ink]/15 py-10 transition hover:bg-[--color-paper-deep] md:py-16"
          >
            <Link href="#" className="block">
              <div className="grid items-baseline gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-1">
                  <span
                    className="display-italic text-5xl text-[--color-oxblood] md:text-6xl"
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {p.num}
                  </span>
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-x-4 gap-y-1 label">
                  <span className="text-[--color-oxblood]">{p.tag}</span>
                  <span>{p.date}</span>
                  <span>{p.minutes}</span>
                </div>
                <h3
                  className="display-italic md:col-span-6 text-3xl text-[--color-ink] md:text-5xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  {p.title}
                </h3>
                <p className="serif-body md:col-span-3 text-base text-[--color-ink]/85">
                  {p.excerpt}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 label transition group-hover:text-[--color-oxblood]">
                <span className="dotted-link">Read in full</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
