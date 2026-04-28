import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/cta";

const CASES: Record<
  string,
  {
    tag: string;
    title: string;
    metric: string;
    gradient: string;
    summary: string;
    body: string[];
  }
> = {
  northwind: {
    tag: "AI · SaaS",
    title: "Northwind agentic ops copilot",
    metric: "+38% ops throughput in 90 days",
    gradient: "from-[#7c5cff] via-[#a78bfa] to-[#22d3ee]",
    summary:
      "We replaced a sprawling internal tooling stack with a single agent surface.",
    body: [
      "Northwind's operations team was juggling six dashboards, three internal tools, and an aging chatbot. We unified the experience behind a single agent capable of executing multi-step workflows safely.",
      "Our team designed the tool registry, evaluation suite, and audit logging from scratch, then layered a streaming UI on top using Next.js 16 with Server Components and React 19.",
      "Within 90 days, weekly resolved tickets per analyst rose by 38% and customer satisfaction climbed across every measured surface.",
    ],
  },
  lumen: {
    tag: "Native iOS · Health",
    title: "Lumen wellness companion",
    metric: "220k MAU · 4.9★ at launch",
    gradient: "from-[#34d399] via-[#22d3ee] to-[#7c5cff]",
    summary:
      "A SwiftUI app with HealthKit, on-device coaching, and live activities.",
    body: [
      "Lumen wanted a launch app that felt unmistakably native — fluid animations, Live Activities, and a coaching loop powered by an on-device model.",
      "We shipped end-to-end in eight weeks: SwiftUI front-end, a Vapor backend on Vercel-fronted infrastructure, and an evaluation harness for the coaching prompts.",
      "Day-one App Store rating sat at 4.9★ across the first 8,000 reviews, and the product crossed 220k MAU within the first quarter.",
    ],
  },
  atlasly: {
    tag: "Web · Commerce",
    title: "Atlasly headless storefront",
    metric: "2.4× conversion · 96 Lighthouse",
    gradient: "from-[#f0abfc] via-[#7c5cff] to-[#22d3ee]",
    summary:
      "Replatformed onto a composable commerce stack with AI-native search.",
    body: [
      "Atlasly was outgrowing a legacy storefront. We replatformed onto Next.js, edge-rendered PDPs, and a composable commerce backend that their team can iterate on independently.",
      "Search and merchandising are powered by a small custom retrieval system that blends product embeddings with structured filters and live inventory signals.",
      "Conversion rose 2.4× quarter-over-quarter and Lighthouse performance scores stay locked above 96 across every category page.",
    ],
  },
  cinder: {
    tag: "Social · Creator",
    title: "Cinder content engine",
    metric: "12M views in first 90 days",
    gradient: "from-[#22d3ee] via-[#7c5cff] to-[#f0abfc]",
    summary:
      "Daily short-form output powered by a custom AI editing pipeline.",
    body: [
      "Cinder needed to publish daily across TikTok, Reels, and Shorts without growing the team. We built a pipeline that ingests raw footage and produces edited clips with captions and hooks.",
      "A creator collective we curated and trained handles the human-in-the-loop QA, posting cadence, and partnership coordination.",
      "Within 90 days, the channels crossed 12M aggregated views and a measurable contribution to top-of-funnel pipeline.",
    ],
  },
  vesper: {
    tag: "Native Android · Fintech",
    title: "Vesper Compose banking app",
    metric: "Sub-200ms cold start",
    gradient: "from-[#7c5cff] via-[#22d3ee] to-[#34d399]",
    summary:
      "A fully native Kotlin app with biometric auth and instant payments.",
    body: [
      "Vesper wanted parity with the best fintech apps on Android. We built natively with Kotlin and Jetpack Compose, sharing a design language with the marketing site.",
      "Cold start sits below 200ms thanks to baseline profiles, dependency tuning, and a deliberately lean module graph.",
      "Biometric auth, instant payments, and a polished onboarding flow shipped in the first release.",
    ],
  },
  mosaic: {
    tag: "AI · Internal",
    title: "Mosaic enterprise RAG",
    metric: "65% answer-rate jump",
    gradient: "from-[#34d399] via-[#7c5cff] to-[#f0abfc]",
    summary:
      "Private RAG over 1.2M documents, used daily by 4,000 employees.",
    body: [
      "Mosaic deployed a private RAG over 1.2M internal documents — policy, runbooks, and historical Slack threads.",
      "We engineered role-aware retrieval, eval suites tied to release gates, and a Slack/Teams surface that integrates with their existing identity provider.",
      "Answer rate increased 65% over the prior keyword-only system and the eval suite catches regressions before they reach production.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: "Case study" };
  return { title: c.title, description: c.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();

  return (
    <>
      <Section className="!py-20 md:!py-28">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-[--color-fg-muted] hover:text-white"
        >
          <ArrowLeft className="size-4" />
          All case studies
        </Link>

        <div className="mt-8 flex flex-col gap-3">
          <Badge>{c.tag}</Badge>
          <h1 className="max-w-4xl text-balance font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {c.title}
          </h1>
          <p className="text-lg text-[--color-fg-muted]">{c.summary}</p>
        </div>

        <div
          className={`relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-3xl bg-gradient-to-br ${c.gradient}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
            {c.metric}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-5 text-lg leading-relaxed text-white/85">
          {c.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
