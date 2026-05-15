"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    icon: Sparkles,
    tagline: "Look real online — fast.",
    price: 200,
    compareAt: 1500,
    monthly: 100,
    monthlyNote: "maintenance + 1 weekly blog",
    featured: false,
    cta: "Claim the $200 starter",
    points: [
      "1-page responsive site from a polished template",
      "Your logo, colors, photos, and copy",
      "Contact form wired to your email",
      "Cloudflare global hosting (lightning fast)",
      "Free SSL + custom domain setup",
      "1 round of revisions before launch",
    ],
    careNote:
      "Monthly care: content edits, uptime monitoring, security patches, and 1 AI-drafted-and-human-edited blog post per week.",
  },
  {
    id: "growth",
    name: "Growth",
    icon: Zap,
    tagline: "When you need more than a brochure.",
    price: 650,
    compareAt: 3500,
    monthly: 250,
    monthlyNote: "maintenance + 2 blogs + SEO",
    featured: true,
    cta: "Start Growth plan",
    points: [
      "Up to 5 pages — home, services, about, blog, contact",
      "Custom layout from our design system (not a template)",
      "Blog & insights section with categories",
      "Google Analytics + on-page SEO + sitemap",
      "Lead capture wired to your CRM or email tool",
      "2 rounds of revisions",
      "Priority response within 1 business day",
    ],
    careNote:
      "Monthly care: 2 blog posts weekly, content updates, light keyword/SEO tuning, monthly performance report.",
  },
  {
    id: "pro",
    name: "Pro",
    icon: Rocket,
    tagline: "Built to actually scale.",
    price: 2500,
    priceLabel: "from",
    compareAt: 12000,
    monthly: 600,
    monthlyLabel: "from",
    monthlyNote: "retainer — content, SEO, ads, AI",
    featured: false,
    cta: "Request a proposal",
    points: [
      "Unlimited pages, fully custom design",
      "Booking, ecommerce, members, or AI features",
      "Full SEO strategy + content calendar",
      "Email marketing & automation",
      "Performance + conversion optimization",
      "Direct Slack / email line to the team",
    ],
    careNote:
      "Monthly retainer scoped to your goals — content, paid ads, AI agents, feature work, or all of the above.",
  },
] as const;

export function StarterPricing() {
  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            One-time build.{" "}
            <span className="text-gradient">Monthly upkeep, optional.</span>
          </>
        }
        description="Every plan includes Cloudflare hosting, SSL, and a working contact form. Maintenance is month-to-month — the site is yours either way."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {TIERS.map((t, i) => {
          const Icon = t.icon;
          const savings = Math.round(
            ((t.compareAt - t.price) / t.compareAt) * 100
          );

          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative"
            >
              {/* Animated gradient border for featured */}
              {t.featured ? (
                <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-[--color-brand] via-[--color-brand-3] to-[--color-brand-2] opacity-80" />
              ) : null}

              <div
                className={`relative flex h-full flex-col rounded-[26px] border p-7 backdrop-blur transition ${
                  t.featured
                    ? "border-transparent bg-gradient-to-b from-[#1a1233] via-[--color-surface] to-[--color-bg-soft] shadow-[0_40px_100px_-30px_rgba(124,92,255,0.6)]"
                    : "border-[--color-border] bg-[--color-surface]/60 hover:border-[--color-border-strong]"
                }`}
              >
                {t.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[--color-brand] to-[--color-brand-3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.8)]">
                    Most popular
                  </span>
                ) : null}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-[--color-brand]/30 via-[--color-brand-3]/20 to-[--color-brand-2]/30 text-[--color-brand-2]">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                      {t.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[--color-accent]/30 bg-[--color-accent]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[--color-accent]">
                    Save {savings}%
                  </span>
                </div>
                <p className="mt-3 text-sm text-[--color-fg-muted]">
                  {t.tagline}
                </p>

                {/* Big price */}
                <div className="mt-7">
                  <div className="flex items-baseline gap-2 text-[--color-fg-muted]">
                    <span className="text-sm line-through decoration-white/30">
                      ${t.compareAt.toLocaleString()}
                    </span>
                    <span className="text-xs uppercase tracking-wider">
                      typical agency
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    {"priceLabel" in t && t.priceLabel ? (
                      <span className="text-base text-[--color-fg-muted]">
                        {t.priceLabel}
                      </span>
                    ) : null}
                    <span className="font-[family-name:var(--font-display)] text-6xl font-semibold tracking-tight">
                      ${t.price}
                    </span>
                    <span className="text-sm text-[--color-fg-muted]">
                      one-time
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2 text-sm">
                    <span className="text-[--color-fg-muted]">+</span>
                    <span className="font-semibold text-[--color-brand-2]">
                      {"monthlyLabel" in t && t.monthlyLabel
                        ? `${t.monthlyLabel} `
                        : ""}
                      ${t.monthly}/mo
                    </span>
                    <span className="text-[--color-fg-muted]">
                      · {t.monthlyNote}
                    </span>
                  </div>
                </div>

                <ul className="mt-7 space-y-3">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-white/85">
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
            </motion.div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-[--color-fg-muted]">
        Every plan: no contracts, no setup fees, full code ownership, 14-day
        money-back guarantee.
      </p>
    </Section>
  );
}
