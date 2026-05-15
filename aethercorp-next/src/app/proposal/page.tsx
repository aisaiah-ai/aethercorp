import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/ui/section";
import { ProposalForm } from "@/components/site/proposal-form";

export const metadata: Metadata = {
  title: "Request a Proposal",
  description:
    "Tell us about your business and we'll send a fixed-price proposal within one business day. Starter sites from $200, no setup fees.",
};

const PERKS = [
  {
    num: "01",
    title: "Same-day response",
    body: "Submit before 5pm ET on a weekday and you'll have a written proposal by end of day. Faster than most agencies return a call.",
  },
  {
    num: "02",
    title: "Fixed pricing, in writing",
    body: "No hourly billing, no surprise add-ons. The quote we send is the quote you pay — period.",
  },
  {
    num: "03",
    title: "Zero commitment",
    body: "No retainer, no contract. Maintenance is month-to-month and you own your site outright.",
  },
];

export default function ProposalPage() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-border]">
      <div className="bg-hairline pointer-events-none absolute inset-0 opacity-50" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

      <Section className="relative !py-32 md:!py-40">
        <div className="mb-16 flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          <span>↳ Request a proposal · 2 minutes</span>
          <span className="hidden text-[--color-accent] md:inline">
            Same-day response
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <h1 className="editorial-display text-5xl md:text-7xl lg:text-8xl">
              Tell us about
              <br />
              <span className="text-accent">your business.</span>
            </h1>
            <p className="mt-8 max-w-md text-base text-[--color-fg]/85 md:text-lg">
              Two minutes of your time, a fixed quote in your inbox. No
              obligation, no sales call unless you want one.
            </p>

            <div className="mt-16 border-t border-[--color-border]">
              {PERKS.map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-[--color-border] py-8"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.01em] md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[--color-fg-muted]">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Suspense
            fallback={
              <div className="h-[700px] border border-[--color-border] bg-[--color-bg-soft]/40" />
            }
          >
            <ProposalForm />
          </Suspense>
        </div>
      </Section>
    </section>
  );
}
