import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes from the AetherCorp studio on AI, product, and growth.",
};

const POSTS = [
  {
    title: "Shipping production AI agents in 2026",
    excerpt:
      "What we've learned running real agents at scale — tool design, evals, and the patterns that don't break under pressure.",
    tag: "AI",
    date: "Apr 2026",
  },
  {
    title: "Why we still go native on iOS and Android",
    excerpt:
      "The case for SwiftUI and Compose, told from the inside of half a dozen launches in the last 12 months.",
    tag: "Mobile",
    date: "Mar 2026",
  },
  {
    title: "A modern Next.js stack for product teams",
    excerpt:
      "How we set up Next.js 16, shadcn/ui, Tailwind v4, and Vercel for real-world apps.",
    tag: "Web",
    date: "Mar 2026",
  },
  {
    title: "Social as a growth system, not a vibe",
    excerpt:
      "Treating social like product — playbooks, instrumentation, and the metrics we actually report on.",
    tag: "Social",
    date: "Feb 2026",
  },
];

export default function BlogPage() {
  return (
    <Section className="!py-24 md:!py-32">
      <div className="flex flex-col items-center text-center">
        <Badge>Insights</Badge>
        <h1 className="mt-6 max-w-3xl text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Notes from{" "}
          <span className="text-gradient">the studio.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-[--color-fg-muted]">
          A small, opinionated journal on AI engineering, native mobile,
          modern web, and growing brands worth following.
        </p>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="group rounded-3xl border border-[--color-border] bg-[--color-surface]/60 p-7 transition hover:border-[--color-border-strong]"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[--color-fg-dim]">
              <span className="rounded-full border border-[--color-border-strong] bg-white/[0.04] px-2.5 py-1 text-[--color-brand-2]">
                {p.tag}
              </span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-3 text-[--color-fg-muted]">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
