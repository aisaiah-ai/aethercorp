import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, Shield, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ProposalForm } from "@/components/site/proposal-form";

export const metadata: Metadata = {
  title: "Request a Proposal",
  description:
    "Tell us about your business and we'll send a fixed-price proposal within one business day. Starter sites from $200, no setup fees.",
};

const PERKS = [
  {
    icon: Clock,
    title: "Same-day response",
    body: "Submit before 5pm ET on a weekday and you'll have a written proposal by end of day. Faster than most agencies return your first call.",
  },
  {
    icon: Mail,
    title: "Fixed pricing, in writing",
    body: "No hourly billing, no surprise add-ons. The quote we send is the quote you pay — period.",
  },
  {
    icon: Shield,
    title: "Zero commitment",
    body: "No retainer, no contract. Maintenance is month-to-month and you own your site outright.",
  },
];

export default function ProposalPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-radial-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <Section className="!py-24 md:!py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Badge>
              <Sparkles className="size-3" />
              Request a proposal
            </Badge>
            <h1 className="mt-6 max-w-xl text-balance font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Tell us about{" "}
              <span className="text-gradient">your business.</span>
            </h1>
            <p className="mt-5 max-w-md text-pretty text-base text-[--color-fg-muted] md:text-lg">
              Two minutes of your time, a fixed quote in your inbox. No
              obligation, no sales call unless you want one.
            </p>

            <ul className="mt-10 space-y-5">
              {PERKS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[--color-brand]/30 via-[--color-brand-3]/20 to-[--color-brand-2]/30 text-[--color-brand-2] shadow-[0_8px_30px_-10px_rgba(124,92,255,0.5)]">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <div className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                        {p.title}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-[--color-fg-muted]">
                        {p.body}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 flex items-center gap-4 rounded-2xl border border-[--color-border] bg-[--color-surface]/50 p-5 backdrop-blur">
              <div className="grid size-10 place-items-center rounded-xl bg-[--color-accent]/15 text-[--color-accent]">
                <Shield className="size-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Built on the same studio stack
                </div>
                <div className="text-xs text-[--color-fg-muted]">
                  Used by funded startups for AI products & mobile apps —
                  scaled down for small business.
                </div>
              </div>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="h-[700px] rounded-3xl border border-[--color-border] bg-[--color-surface]/40" />
            }
          >
            <ProposalForm />
          </Suspense>
        </div>
      </Section>
    </section>
  );
}
