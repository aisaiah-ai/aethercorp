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
    num: "i.",
    title: "Same-day response.",
    body: "Submit before 5pm ET on a weekday and you have a written proposal by end of day. Faster than most agencies return a call.",
  },
  {
    num: "ii.",
    title: "Fixed pricing, in writing.",
    body: "No hourly billing, no surprise add-ons. The quote we send is the quote you pay.",
  },
  {
    num: "iii.",
    title: "Zero commitment.",
    body: "No retainer, no contract. Maintenance is month-to-month and you own your site outright.",
  },
];

export default function ProposalPage() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-ink] paper-grain">
      <Section className="!py-24 md:!py-32">
        <div className="mb-16 flex items-center justify-between border-b-2 border-[--color-ink] pb-4 label-lg">
          <span>↳ Aethercorp · Proposal request · Form A</span>
          <span className="hidden text-[--color-oxblood] md:inline">
            Response within 1 business day
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h1
              className="display-italic text-[14vw] leading-[0.86] text-[--color-ink] md:text-[10vw] lg:text-[8.5vw]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              Tell us about
              <br />
              <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
                your business.
              </span>
            </h1>
            <p className="serif-body mt-8 max-w-md text-lg text-[--color-ink]">
              Two minutes of your time, a fixed quote in your inbox. No
              obligation, no sales call unless you want one.
            </p>

            <div className="mt-16 border-t border-[--color-ink]">
              {PERKS.map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-[--color-ink]/15 py-8"
                >
                  <span
                    className="display-italic text-4xl text-[--color-oxblood]"
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3
                      className="display-italic text-2xl text-[--color-ink] md:text-3xl"
                      style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                    >
                      {p.title}
                    </h3>
                    <p className="serif-body mt-2 text-base text-[--color-ink]/85">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="h-[700px] border-2 border-[--color-ink] bg-[--color-paper-deep]" />
              }
            >
              <ProposalForm />
            </Suspense>
          </div>
        </div>
      </Section>
    </section>
  );
}
