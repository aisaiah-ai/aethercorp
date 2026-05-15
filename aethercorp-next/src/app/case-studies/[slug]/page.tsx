import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { CTA } from "@/components/sections/cta";

const CASES: Record<
  string,
  {
    num: string;
    tag: string;
    title: string;
    subtitle: string;
    metric: string;
    metricLabel: string;
    palette: string;
    summary: string;
    body: string[];
  }
> = {
  northwind: {
    num: "I.",
    tag: "AI · SaaS",
    title: "Northwind",
    subtitle: "Agentic operations copilot",
    metric: "+38%",
    metricLabel: "Ops throughput · 90 days",
    palette: "ink",
    summary:
      "Replaced a sprawling internal tooling stack with a single agent surface.",
    body: [
      "Northwind's operations team was juggling six dashboards, three internal tools, and an aging chatbot. We unified the experience behind a single agent capable of executing multi-step workflows safely.",
      "Our team designed the tool registry, evaluation suite, and audit logging from scratch, then layered a streaming UI on top using Next.js 16 with Server Components and React 19.",
      "Within 90 days, weekly resolved tickets per analyst rose by 38% and customer satisfaction climbed across every measured surface.",
    ],
  },
  lumen: {
    num: "II.",
    tag: "Native iOS · Health",
    title: "Lumen",
    subtitle: "SwiftUI wellness companion",
    metric: "4.9★",
    metricLabel: "App Store · 220k MAU",
    palette: "oxblood",
    summary:
      "A SwiftUI app with HealthKit, on-device coaching, and live activities.",
    body: [
      "Lumen wanted a launch app that felt unmistakably native — fluid animations, Live Activities, and a coaching loop powered by an on-device model.",
      "We shipped end-to-end in eight weeks: SwiftUI front-end, a Vapor backend on Cloudflare-fronted infrastructure, and an evaluation harness for the coaching prompts.",
      "Day-one App Store rating sat at 4.9★ across the first 8,000 reviews, and the product crossed 220k MAU within the first quarter.",
    ],
  },
  atlasly: {
    num: "III.",
    tag: "Web · Commerce",
    title: "Atlasly",
    subtitle: "Headless storefront",
    metric: "2.4×",
    metricLabel: "Conversion · LH 96",
    palette: "ink",
    summary:
      "Replatformed onto a composable commerce stack with AI-native search.",
    body: [
      "Atlasly was outgrowing a legacy storefront. We replatformed onto Next.js, edge-rendered PDPs, and a composable commerce backend that their team can iterate on independently.",
      "Search and merchandising are powered by a small custom retrieval system that blends product embeddings with structured filters and live inventory signals.",
      "Conversion rose 2.4× quarter-over-quarter and Lighthouse performance scores stay locked above 96 across every category page.",
    ],
  },
  cinder: {
    num: "IV.",
    tag: "Social · Creator",
    title: "Cinder",
    subtitle: "Short-form content engine",
    metric: "12M",
    metricLabel: "Views · first 90 days",
    palette: "oxblood",
    summary: "Daily short-form output powered by a custom AI editing pipeline.",
    body: [
      "Cinder needed to publish daily across TikTok, Reels, and Shorts without growing the team. We built a pipeline that ingests raw footage and produces edited clips with captions and hooks.",
      "A creator collective we curated and trained handles the human-in-the-loop QA, posting cadence, and partnership coordination.",
      "Within 90 days, the channels crossed 12M aggregated views and a measurable contribution to top-of-funnel pipeline.",
    ],
  },
  vesper: {
    num: "V.",
    tag: "Native Android · Fintech",
    title: "Vesper",
    subtitle: "Compose banking app",
    metric: "<200ms",
    metricLabel: "Cold start",
    palette: "ink",
    summary: "A fully native Kotlin app with biometric auth and instant payments.",
    body: [
      "Vesper wanted parity with the best fintech apps on Android. We built natively with Kotlin and Jetpack Compose, sharing a design language with the marketing site.",
      "Cold start sits below 200ms thanks to baseline profiles, dependency tuning, and a deliberately lean module graph.",
      "Biometric auth, instant payments, and a polished onboarding flow shipped in the first release.",
    ],
  },
  mosaic: {
    num: "VI.",
    tag: "AI · Internal",
    title: "Mosaic",
    subtitle: "Enterprise RAG",
    metric: "+65%",
    metricLabel: "Answer rate vs prior",
    palette: "oxblood",
    summary: "Private RAG over 1.2M documents, used daily by 4,000 employees.",
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
      <Section className="!py-24 md:!py-32 paper-grain">
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 label hover:text-[--color-oxblood]"
        >
          <span className="transition group-hover:-translate-x-1">←</span>
          <span className="dotted-link">All work</span>
        </Link>

        <div className="mt-12 flex items-center justify-between border-b-2 border-[--color-ink] pb-4 label-lg">
          <span>↳ {c.num} {c.tag}</span>
          <span className="hidden text-[--color-oxblood] md:inline">Case study</span>
        </div>

        <h1
          className="display-italic mt-12 text-[16vw] leading-[0.85] text-[--color-ink] md:text-[12vw] lg:text-[10vw]"
          style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
        >
          {c.title}
        </h1>
        <p
          className="display mt-6 max-w-2xl text-2xl text-[--color-ink] md:text-4xl"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          {c.subtitle}
        </p>

        {/* Big image */}
        <div
          className={`relative mt-16 aspect-[21/10] w-full overflow-hidden border-2 border-[--color-ink] ${
            c.palette === "ink" ? "bg-[--color-coal]" : "bg-[--color-oxblood]"
          }`}
        >
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center">
            <div
              className="display-italic text-[24vw] leading-[0.85] text-[--color-paper] opacity-15"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              {c.title.toUpperCase().slice(0, 2)}
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]">
            <span>{c.tag}</span>
            <span>{c.metricLabel}</span>
          </div>
        </div>

        {/* Spec strip */}
        <div className="mt-16 grid gap-px border-2 border-[--color-ink] bg-[--color-ink] md:grid-cols-4">
          <Spec label="Outcome" value={c.metric} note={c.metricLabel} accent />
          <Spec label="Discipline" value={c.tag.split(" · ")[0]} />
          <Spec label="Stage" value="Launched" />
          <Spec label="Status" value="Live" accent />
        </div>

        {/* Body */}
        <div className="mt-20 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <div className="label text-[--color-ink-muted]">↳ Brief</div>
            <p className="serif-body mt-6 text-base text-[--color-ink]">
              {c.summary}
            </p>
          </div>
          <div className="md:col-span-9 space-y-6 serif-body text-lg leading-relaxed text-[--color-ink] md:text-xl">
            {c.body.map((p, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}

function Spec({
  label,
  value,
  note,
  accent,
}: {
  label: string;
  value: string;
  note?: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-[--color-paper] p-6 md:p-8">
      <span className="label text-[--color-ink-muted]">{label}</span>
      <div
        className={`display mt-6 text-4xl md:text-5xl ${
          accent ? "text-[--color-oxblood]" : "text-[--color-ink]"
        }`}
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {value}
      </div>
      {note ? (
        <div className="mt-2 label text-[--color-ink-muted]">{note}</div>
      ) : null}
    </div>
  );
}
