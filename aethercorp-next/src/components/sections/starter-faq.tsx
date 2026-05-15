"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Is $200 really the total to launch?",
    a: "Yes — $200 one-time covers a 1-page Starter site using our design system, your branding, and a launch. No setup fees, no surprise add-ons. The $100/month maintenance is optional but recommended; cancel it and the site is still yours.",
  },
  {
    q: "How do you deliver a weekly blog post at this price?",
    a: "We draft posts with AI tuned to your business voice and topics, then a human editor reviews and polishes before publishing. It's not Pulitzer prose — it's consistent, on-topic SEO content that keeps your site fresh, searchable, and worth bookmarking.",
  },
  {
    q: "Will my site look like every other small-business site?",
    a: "No. We work from a design system, not a template gallery — meaning every site shares our craft standards but ends up visually distinct.",
  },
  {
    q: "What if I cancel the $100/month?",
    a: "Cancel anytime — month-to-month, no contract. The site stays live for the rest of the billed month. After that, we hand off the code and you can self-host (cheap on Cloudflare) or pause. Come back any time, no setup fee.",
  },
  {
    q: "Can you do more than a website?",
    a: "Yes — AetherCorp is a full studio. The Starter tier exists so small businesses can get online affordably. When you're ready for an iOS app, an AI assistant on your site, or paid ads, the same team picks it up — no vendor switch.",
  },
  {
    q: "Why Cloudflare instead of WordPress / Wix / Squarespace?",
    a: "Faster pages, lower running cost, no plugin sprawl, no security maintenance theater. Your site loads in under a second from anywhere in the world. If you ever want to move it elsewhere, the code is fully portable.",
  },
  {
    q: "What about the money-back guarantee?",
    a: "If you're not happy with the first design preview, you get a full refund — no questions. After launch, the maintenance subscription is month-to-month with no commitment.",
  },
];

export function StarterFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
            ↳ FAQ
          </span>
          <h2 className="editorial-display mt-6 text-5xl md:text-6xl lg:text-7xl">
            Asked
            <br />
            <span className="text-accent">honestly.</span>
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
