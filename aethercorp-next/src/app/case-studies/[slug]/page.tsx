import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { CTA } from "@/components/sections/cta";

const CASES: Record<
  string,
  {
    tag: string;
    title: string;
    subtitle: string;
    metric: string;
    metricLabel: string;
    gradient: string;
    summary: string;
    body: string[];
  }
> = {
  northwind: {
    tag: "AI · SaaS",
    title: "Northwind",
    subtitle: "Agentic operations copilot",
    metric: "+38%",
    metricLabel: "Ops throughput, 90 days",
    gradient: "from-[#5a6342] via-[#9eb867] to-[#cfd784]",
    summary:
      "Replaced a sprawling internal tooling stack with a single agent surface.",
    body: [
      "Northwind's operations team was juggling six dashboards, three internal tools, and an aging chatbot. We unified the experience behind a single agent capable of executing multi-step workflows safely.",
      "Our team designed the tool registry, evaluation suite, and audit logging from scratch, then layered a streaming UI on top using Next.js 16 with Server Components and React 19.",
      "Within 90 days, weekly resolved tickets per analyst rose by 38% and customer satisfaction climbed across every measured surface.",
    ],
  },
  lumen: {
    tag: "Native iOS · Health",
    title: "Lumen",
    subtitle: "SwiftUI wellness companion",
    metric: "4.9★",
    metricLabel: "App Store · 220k MAU",
    gradient: "from-[#2a3340] via-[#4a5970] to-[#7b8aa3]",
    summary:
      "A SwiftUI app with HealthKit, on-device coaching, and live activities.",
    body: [
      "Lumen wanted a launch app that felt unmistakably native — fluid animations, Live Activities, and a coaching loop powered by an on-device model.",
      "We shipped end-to-end in eight weeks: SwiftUI front-end, a Vapor backend on Cloudflare-fronted infrastructure, and an evaluation harness for the coaching prompts.",
      "Day-one App Store rating sat at 4.9★ across the first 8,000 reviews, and the product crossed 220k MAU within the first quarter.",
    ],
  },
  atlasly: {
    tag: "Web · Commerce",
    title: "Atlasly",
    subtitle: "Headless storefront",
    metric: "2.4×",
    metricLabel: "Conversion · LH 96",
    gradient: "from-[#3a2a1f] via-[#8b6a4a] to-[#d4a574]",
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
    title: "Cinder",
    subtitle: "Short-form content engine",
    metric: "12M",
    metricLabel: "Views, first 90 days",
    gradient: "from-[#1f2a3a] via-[#3a5572] to-[#a3b8d4]",
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
    title: "Vesper",
    subtitle: "Compose banking app",
    metric: "<200ms",
    metricLabel: "Cold start",
    gradient: "from-[#1a2438] via-[#2f4566] to-[#5a6b78]",
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
    title: "Mosaic",
    subtitle: "Enterprise RAG",
    metric: "+65%",
    metricLabel: "Answer rate vs prior",
    gradient: "from-[#1f1a2a] via-[#3a2a4a] to-[#7864a3]",
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
      <Section className="!py-32 md:!py-40">
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted] hover:text-[--color-fg]"
        >
          <span className="transition group-hover:-translate-x-1">←</span>
          <span className="link-underline">All work</span>
        </Link>

        <div className="mt-12 flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          <span>↳ {c.tag}</span>
          <span className="hidden text-[--color-accent] md:inline">
            Case study
          </span>
        </div>

        <h1 className="editorial-display mt-12 max-w-[14ch] text-6xl md:text-8xl lg:text-9xl">
          {c.title}
        </h1>
        <p className="mt-6 max-w-xl text-xl text-[--color-fg]/85 md:text-2xl">
          {c.subtitle}
        </p>

        {/* Big image */}
        <div
          className={`relative mt-16 aspect-[21/10] w-full overflow-hidden bg-gradient-to-br ${c.gradient}`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white">
            <span>{c.tag}</span>
            <span>{c.metricLabel}</span>
          </div>
        </div>

        {/* Spec strip */}
        <div className="mt-16 grid gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-4">
          <div className="bg-[--color-bg] p-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              Outcome
            </span>
            <div className="spec-num mt-6 text-[--color-accent]">
              {c.metric}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
              {c.metricLabel}
            </div>
          </div>
          <div className="bg-[--color-bg] p-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              Discipline
            </span>
            <div className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em]">
              {c.tag.split(" · ")[0]}
            </div>
          </div>
          <div className="bg-[--color-bg] p-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              Stage
            </span>
            <div className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em]">
              Launched
            </div>
          </div>
          <div className="bg-[--color-bg] p-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              Status
            </span>
            <div className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em] text-[--color-accent]">
              Live
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mt-20 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
              ↳ Brief
            </span>
            <p className="mt-6 text-base text-[--color-fg]/85">{c.summary}</p>
          </div>
          <div className="md:col-span-9">
            <div className="space-y-6 text-lg leading-relaxed text-[--color-fg]/85 md:text-xl">
              {c.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
