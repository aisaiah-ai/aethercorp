import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Zap, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Small Business Websites — From $200",
  description:
    "Get a beautiful business website for $200 and keep it sharp for $100/month — with a weekly blog post written for you. Built by AetherCorp, deployed on Cloudflare.",
  openGraph: {
    title: "Small Business Websites — From $200 · AetherCorp",
    description:
      "Launch fast. Pay less. Look bigger than you are. Starter sites from $200 with $100/mo maintenance and a weekly blog.",
    type: "website",
  },
};

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    icon: Sparkles,
    tagline: "Look real online — fast.",
    price: "$200",
    priceSuffix: "one-time",
    monthly: "$100/mo",
    monthlyNote: "maintenance + 1 blog post weekly",
    featured: false,
    cta: "Claim the $200 starter",
    points: [
      "1-page responsive site from a polished template",
      "Your logo, colors, photos, and copy",
      "Contact form wired to your email",
      "Hosted on Cloudflare — globally fast, no surprise bills",
      "Free SSL, custom domain setup",
      "1 round of revisions before launch",
    ],
    careNote:
      "Monthly care covers small content edits, uptime monitoring, dependency patches, and 1 AI-drafted blog post per week with a human edit pass.",
  },
  {
    id: "growth",
    name: "Growth",
    icon: Zap,
    tagline: "When you need more than a brochure.",
    price: "$650",
    priceSuffix: "one-time",
    monthly: "$250/mo",
    monthlyNote: "maintenance + 2 blogs weekly + light SEO",
    featured: true,
    cta: "Start Growth plan",
    points: [
      "Up to 5 pages — home, services, about, blog, contact",
      "Custom layout from our component system (not a generic template)",
      "Blog & insights section with categories",
      "Google Analytics + basic SEO meta + sitemap",
      "Lead capture wired to your CRM or email tool",
      "2 rounds of revisions",
      "Priority support response within 1 business day",
    ],
    careNote:
      "Monthly care covers 2 AI-drafted-and-human-edited blog posts weekly, content updates, image swaps, light keyword/SEO tuning, and monthly performance reports.",
  },
  {
    id: "pro",
    name: "Pro",
    icon: Rocket,
    tagline: "For businesses ready to actually scale.",
    price: "Custom",
    priceSuffix: "starts $2,500",
    monthly: "from $600/mo",
    monthlyNote: "retainer — content, SEO, ads, AI features",
    featured: false,
    cta: "Request a proposal",
    points: [
      "Unlimited pages, custom design system",
      "Booking, ecommerce, member areas, or AI features",
      "Full SEO strategy + content calendar",
      "Email marketing + automation integration",
      "Performance, accessibility, and conversion optimization",
      "Direct Slack/email line to the team",
    ],
    careNote:
      "Monthly retainer is scoped to your goals — content production, paid ads management, AI agents, ongoing feature work, or all of the above.",
  },
] as const;

const INCLUDED = [
  "Mobile-first responsive design",
  "Cloudflare global hosting & CDN",
  "Free SSL certificate",
  "Contact form with spam protection",
  "Domain setup help (yours or new)",
  "Basic on-page SEO",
  "Google Analytics installed",
  "Owner-friendly content updates",
];

const FAQS = [
  {
    q: "Is $200 really the total to launch?",
    a: "Yes — $200 one-time covers a 1-page Starter site using our template system, your branding, and a launch. There are no setup fees. The $100/month is optional but recommended; without it the site is yours and stays live, you just handle your own updates and hosting.",
  },
  {
    q: "How do you deliver a weekly blog post at this price?",
    a: "We draft posts with AI tuned to your business voice and topics, then a human editor reviews and polishes before publishing. You get 1 revision per post. It's not Pulitzer prose — it's consistent, on-topic SEO content that keeps your site fresh and searchable.",
  },
  {
    q: "What if I cancel the $100/month?",
    a: "You can cancel anytime — no contract. The site stays online for the rest of the billed month. After that, you can self-host (we hand off the codebase) or pause. If you ever come back, we'll bring you back online with no setup fee.",
  },
  {
    q: "Can you do more than a website?",
    a: "Yes — AetherCorp is a full studio. The Starter tier exists so small businesses can get online affordably. If you outgrow it (mobile app, AI agent, paid ads, full rebrand), we already have the team in place. Most clients move up over time.",
  },
  {
    q: "How long until my site is live?",
    a: "Starter: 5–7 business days once we have your content. Growth: 2–3 weeks. Pro: scoped per proposal.",
  },
  {
    q: "Why Cloudflare and not WordPress / Wix / Squarespace?",
    a: "Cloudflare-hosted sites load faster, scale further, and cost less to run — so we can keep your monthly price low. You also avoid plugin sprawl and the security headaches that come with WordPress. If you ever want to bring your site in-house, the code is portable.",
  },
];

export default function StarterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-radial-glow pointer-events-none absolute inset-0 -z-10" />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-16 pt-28 text-center md:pt-36 lg:pb-20 lg:pt-40">
          <Badge>For small businesses · From $200</Badge>
          <h1 className="mt-6 max-w-5xl text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[80px]">
            A real business website{" "}
            <span className="text-gradient">for $200.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-[--color-fg-muted] md:text-xl">
            Skip the $5,000 agency quote and the $40/month DIY builder. Get a
            fast, modern site launched in a week — plus a weekly blog post
            written for you — for $100 a month.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/proposal?tier=starter" size="lg">
              Get started for $200
              <ArrowRight className="size-4" />
            </Button>
            <Button href="#pricing" variant="ghost" size="lg">
              See all plans
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[--color-fg-muted]">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-[--color-accent]" />
              Live in a week
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-[--color-accent]" />
              No setup fees
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-[--color-accent]" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-[--color-accent]" />
              You own the site
            </span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Section id="pricing" className="!pt-8">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Pick a plan that{" "}
              <span className="text-gradient">fits your business.</span>
            </>
          }
          description="Every plan includes Cloudflare hosting, SSL, and a working contact form. Cancel monthly care anytime — the site is yours."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className={`relative flex flex-col rounded-3xl border p-7 backdrop-blur ${
                  t.featured
                    ? "border-[--color-brand]/60 bg-gradient-to-b from-[--color-brand]/10 to-[--color-surface]/70 shadow-[0_30px_80px_-20px_rgba(124,92,255,0.45)]"
                    : "border-[--color-border] bg-[--color-surface]/60"
                }`}
              >
                {t.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[--color-brand] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.8)]">
                    Most popular
                  </span>
                ) : null}

                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[--color-brand]/30 via-[--color-brand-3]/20 to-[--color-brand-2]/30 text-[--color-brand-2]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                    {t.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-[--color-fg-muted]">
                  {t.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight">
                    {t.price}
                  </span>
                  <span className="text-sm text-[--color-fg-muted]">
                    {t.priceSuffix}
                  </span>
                </div>
                <div className="mt-1 flex items-baseline gap-2 text-sm">
                  <span className="font-semibold text-[--color-brand-2]">
                    {t.monthly}
                  </span>
                  <span className="text-[--color-fg-muted]">
                    {t.monthlyNote}
                  </span>
                </div>

                <ul className="mt-7 space-y-3">
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm text-white/85"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-[--color-accent]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-2xl border border-[--color-border] bg-[--color-bg-soft]/70 p-4 text-xs leading-relaxed text-[--color-fg-muted]">
                  {t.careNote}
                </p>

                <div className="mt-7 flex-1" />
                <Button
                  href={`/proposal?tier=${t.id}`}
                  variant={t.featured ? "primary" : "ghost"}
                  size="lg"
                  className="w-full"
                >
                  {t.cta}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-[--color-fg-muted]">
          Need something between tiers?{" "}
          <Link
            href="/proposal"
            className="text-white underline-offset-4 hover:underline"
          >
            Request a custom proposal →
          </Link>
        </p>
      </Section>

      {/* What's included */}
      <Section className="!pt-0">
        <SectionHeader
          eyebrow="Included in every plan"
          title={
            <>
              The boring stuff,{" "}
              <span className="text-gradient">already handled.</span>
            </>
          }
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-4 text-sm text-white/85"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-[--color-accent]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section className="!pt-0">
        <div className="grid gap-8 rounded-[32px] border border-[--color-border-strong] bg-gradient-to-br from-[#11141d] via-[#1a1233] to-[#0b0d14] p-10 md:grid-cols-2 md:p-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-brand-2]">
              Why AetherCorp
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              You&apos;re hiring a studio,{" "}
              <span className="text-gradient">not a freelancer.</span>
            </h3>
            <p className="mt-4 text-[--color-fg-muted]">
              Most $200 sites come from someone&apos;s side hustle. Ours come
              from the same team that builds AI products and native mobile apps
              for funded startups — we just made a leaner package so small
              businesses can get the same craft at a small-business price.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              {
                k: "Real engineers",
                v: "Modern stack (Next.js 16, Cloudflare). No WordPress plugin nightmares.",
              },
              {
                k: "Real designers",
                v: "Your site won't look like a Wix template — because it isn't one.",
              },
              {
                k: "Real growth path",
                v: "When you're ready for an app, AI agent, or paid ads, you don't have to switch vendors.",
              },
            ].map((b) => (
              <li
                key={b.k}
                className="rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-5"
              >
                <div className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {b.k}
                </div>
                <div className="mt-1 text-sm text-[--color-fg-muted]">
                  {b.v}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
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
              className="group rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-5 transition open:bg-[--color-surface]/70"
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

      {/* Final CTA */}
      <Section className="!pt-4 !pb-28">
        <div className="relative overflow-hidden rounded-[32px] border border-[--color-border-strong] bg-gradient-to-br from-[#11141d] via-[#1a1233] to-[#0b0d14] p-10 md:p-16">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-[--color-brand]/40 blur-3xl" />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Ready to be{" "}
                <span className="text-gradient">online for real?</span>
              </h3>
              <p className="mt-4 max-w-lg text-base text-[--color-fg-muted] md:text-lg">
                Send us a 2-minute proposal request. We&apos;ll come back the
                same business day with a fixed quote.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="/proposal?tier=starter" size="lg">
                Request a proposal
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Talk to a human
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
