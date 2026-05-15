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
      <div className="mb-16 grid items-end gap-8 border-b-2 border-[--color-ink] pb-12 md:grid-cols-12">
        <div className="md:col-span-1">
          <div className="label">§ VI.</div>
        </div>
        <div className="md:col-span-7">
          <div className="label text-[--color-ink-muted]">↳ Asked & answered</div>
          <h2
            className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl lg:text-[110px]"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            Footnotes.
          </h2>
        </div>
        <div className="md:col-span-4">
          <p className="serif-body text-lg text-[--color-ink]">
            Things teams typically ask before they hire us — answered up front
            so you don&apos;t have to.
          </p>
        </div>
      </div>

      <div className="border-t border-[--color-ink]">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          const num = `0${i + 1}`;
          return (
            <button
              key={f.q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="block w-full border-b border-[--color-ink]/15 text-left transition hover:bg-[--color-paper-deep]"
              aria-expanded={isOpen}
            >
              <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-8 md:gap-10">
                <span className="label w-10 text-[--color-ink-dim]">
                  {num}
                </span>
                <span
                  className="display-italic text-2xl text-[--color-ink] md:text-4xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  {f.q}
                </span>
                <span
                  className={cn(
                    "display-italic shrink-0 text-2xl text-[--color-ink]/60 transition-transform md:text-3xl",
                    isOpen && "rotate-45 text-[--color-oxblood]"
                  )}
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
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
                <p className="serif-body overflow-hidden pl-16 pr-12 text-lg text-[--color-ink]/85 md:pl-20">
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
