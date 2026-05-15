"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
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
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
            ↳ Frequently asked
          </span>
          <h2 className="editorial-display mt-6 text-5xl md:text-6xl lg:text-7xl">
            Asked
            <br />
            <span className="text-accent">first.</span>
          </h2>
        </div>

        <div className="md:col-span-8">
          <div className="border-t border-[--color-border]">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              const num = String(i + 1).padStart(2, "0");
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full border-b border-[--color-border] text-left transition hover:bg-[--color-bg-soft]/40"
                  aria-expanded={isOpen}
                >
                  <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-8">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                      {num}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-xl tracking-[-0.01em] text-[--color-fg] md:text-2xl">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "size-6 shrink-0 text-[--color-fg]/60 transition-transform",
                        isOpen && "rotate-45 text-[--color-accent]"
                      )}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300",
                      isOpen ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
                    )}
                  >
                    <p className="overflow-hidden pl-[3.5rem] text-base leading-relaxed text-[--color-fg]/75">
                      {f.a}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
