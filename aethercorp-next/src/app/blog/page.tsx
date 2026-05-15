import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the AetherCorp studio on AI, product, and growth.",
};

const POSTS = [
  {
    num: "01",
    title: "Shipping production AI agents in 2026",
    excerpt:
      "What we've learned running real agents at scale — tool design, evals, and the patterns that don't break under pressure.",
    tag: "AI",
    date: "Apr 2026",
    minutes: "8 min",
  },
  {
    num: "02",
    title: "Why we still go native on iOS and Android",
    excerpt:
      "The case for SwiftUI and Compose, told from the inside of half a dozen launches in the last 12 months.",
    tag: "Mobile",
    date: "Mar 2026",
    minutes: "6 min",
  },
  {
    num: "03",
    title: "A modern Next.js stack for product teams",
    excerpt:
      "How we set up Next.js 16, shadcn/ui, Tailwind v4, and Cloudflare for real-world apps.",
    tag: "Web",
    date: "Mar 2026",
    minutes: "12 min",
  },
  {
    num: "04",
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
    <Section className="!py-32 md:!py-40">
      <div className="mb-16 flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
        <span>↳ Journal · 04 of N</span>
        <span className="hidden md:inline">Studio writing</span>
      </div>

      <h1 className="editorial-display max-w-[14ch] text-5xl md:text-7xl lg:text-9xl">
        Notes from
        <br />
        <span className="text-accent">the studio.</span>
      </h1>
      <p className="mt-8 max-w-xl text-base text-[--color-fg-muted] md:text-lg">
        A small, opinionated journal on AI engineering, native mobile, modern
        web, and growing brands worth following.
      </p>

      <div className="mt-24 border-t border-[--color-border]">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="group block border-b border-[--color-border] py-10 transition hover:bg-[--color-bg-soft]/40 md:py-14"
          >
            <div className="grid items-baseline gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                  {p.num}
                </span>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
                <span className="text-[--color-accent]">{p.tag}</span>
                <span>{p.date}</span>
                <span>{p.minutes}</span>
              </div>
              <h3 className="md:col-span-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em] text-[--color-fg] md:text-4xl">
                {p.title}
              </h3>
              <p className="md:col-span-3 text-sm text-[--color-fg-muted]">
                {p.excerpt}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted] transition group-hover:text-[--color-accent]">
              <span className="link-underline">Read</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
