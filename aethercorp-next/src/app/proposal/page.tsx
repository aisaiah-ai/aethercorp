import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, Shield } from "lucide-react";
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
    body: "Submit before 5pm ET on a weekday and you'll have a written proposal by end of day.",
  },
  {
    icon: Mail,
    title: "Fixed pricing, in writing",
    body: "No hourly surprises. The quote we send is the quote you pay.",
  },
  {
    icon: Shield,
    title: "Cancel anytime",
    body: "Monthly maintenance is month-to-month. The site is yours either way.",
  },
];

export default function ProposalPage() {
  return (
    <Section className="!py-24 md:!py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Badge>Request a proposal</Badge>
          <h1 className="mt-6 max-w-xl text-balance font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Tell us about your business.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base text-[--color-fg-muted] md:text-lg">
            Two minutes of your time, a fixed quote in your inbox. No
            obligation, no sales calls unless you want one.
          </p>

          <ul className="mt-10 space-y-5">
            {PERKS.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[--color-brand]/30 via-[--color-brand-3]/20 to-[--color-brand-2]/30 text-[--color-brand-2]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-base font-semibold">
                      {p.title}
                    </div>
                    <div className="mt-1 text-sm text-[--color-fg-muted]">
                      {p.body}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <Suspense
          fallback={
            <div className="h-[600px] rounded-3xl border border-[--color-border] bg-[--color-surface]/40" />
          }
        >
          <ProposalForm />
        </Suspense>
      </div>
    </Section>
  );
}
