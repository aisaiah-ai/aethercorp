"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Do you build AI agents or just integrations?",
    a: "Both. We ship full agentic systems — multi-step tools, memory, evals, tracing, guardrails — and we also wire in off-the-shelf assistants where that's the right call.",
  },
  {
    q: "Are your mobile apps truly native?",
    a: "Yes. SwiftUI for iOS and Jetpack Compose for Android. We use cross-platform only when it's a deliberate fit — never as a default.",
  },
  {
    q: "How fast can you start?",
    a: "Most engagements kick off within 10 days. Discovery sprints run in week one and shipping starts in week two.",
  },
  {
    q: "Do you offer ongoing retainers?",
    a: "Yes. Most clients move into a studio retainer post-launch — a senior pod that ships features, runs experiments, and owns growth instrumentation.",
  },
  {
    q: "Where is the team based?",
    a: "We're a fully distributed senior team across the Americas and EMEA, working in your time zone for stand-ups and design reviews.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Things teams usually{" "}
            <span className="text-gradient">ask first.</span>
          </>
        }
      />
      <div className="mx-auto max-w-3xl divide-y divide-[--color-border] rounded-3xl border border-[--color-border] bg-[--color-surface]/60">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={f.q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="block w-full text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between gap-6 px-6 py-5">
                <span className="text-base font-medium text-white md:text-lg">
                  {f.q}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-white/60 transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </div>
              <div
                className={cn(
                  "grid overflow-hidden px-6 transition-[grid-template-rows] duration-300",
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                )}
              >
                <p className="overflow-hidden text-[--color-fg-muted]">
                  {f.a}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
