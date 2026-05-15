import { Section, SectionHeader } from "@/components/ui/section";

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
    a: "No. We work from a design system, not a template gallery — meaning every site shares our craft standards but ends up visually distinct. Browse the gallery above: those are six wildly different vibes, all from the same studio.",
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
  return (
    <Section className="!pt-0">
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Questions, asked{" "}
            <span className="text-gradient">honestly.</span>
          </>
        }
      />
      <div className="mx-auto grid max-w-4xl gap-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-5 transition open:border-[--color-border-strong] open:bg-[--color-surface]/70 hover:border-[--color-border-strong]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white">
              {f.q}
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[--color-border-strong] bg-white/[0.04] text-white/70 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[--color-fg-muted]">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
