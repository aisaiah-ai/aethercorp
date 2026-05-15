"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const TIERS = [
  {
    id: "starter",
    num: "01",
    name: "Starter",
    tagline: "Look real online, fast.",
    price: 200,
    compareAt: 1500,
    monthly: 100,
    monthlyNote: "Maintenance + 1 weekly blog",
    featured: false,
    cta: "Claim the $200 starter",
    points: [
      "1-page responsive site, our system",
      "Your logo, colors, photos, copy",
      "Contact form to your email",
      "Cloudflare global hosting",
      "Free SSL + domain setup",
      "1 revision round",
    ],
  },
  {
    id: "growth",
    num: "02",
    name: "Growth",
    tagline: "More than a brochure.",
    price: 650,
    compareAt: 3500,
    monthly: 250,
    monthlyNote: "Maintenance + 2 blogs + SEO",
    featured: true,
    cta: "Start Growth plan",
    points: [
      "Up to 5 pages, custom design",
      "Blog section with categories",
      "Analytics + on-page SEO",
      "Lead capture to your CRM",
      "2 revision rounds",
      "Priority response, 1 business day",
    ],
  },
  {
    id: "pro",
    num: "03",
    name: "Pro",
    tagline: "Built to actually scale.",
    price: 2500,
    priceLabel: "from",
    compareAt: 12000,
    monthly: 600,
    monthlyLabel: "from",
    monthlyNote: "Retainer — content, SEO, ads, AI",
    featured: false,
    cta: "Request a proposal",
    points: [
      "Unlimited pages, fully custom",
      "Booking, ecommerce, members, AI",
      "Full SEO + content calendar",
      "Email + automation",
      "Conversion optimization",
      "Direct line to the team",
    ],
  },
] as const;

export function StarterPricing() {
  return (
    <Section id="pricing">
      <div className="mb-16 flex flex-col gap-6 border-b border-[--color-border] pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
            ↳ Pricing · 01 — 03
          </span>
          <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl md:text-7xl lg:text-8xl">
            One-time build.
            <br />
            <span className="text-accent">Monthly upkeep, optional.</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-[--color-fg-muted] md:text-lg">
          Every plan includes Cloudflare hosting, SSL, and a contact form.
          Maintenance is month-to-month — the site is yours either way.
        </p>
      </div>

      <div className="grid gap-px border border-[--color-border] bg-[--color-border] lg:grid-cols-3">
        {TIERS.map((t, i) => {
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
              className={`relative flex flex-col p-8 md:p-10 ${
                t.featured ? "bg-[--color-bg-soft]" : "bg-[--color-bg]"
              }`}
            >
              {t.featured ? (
                <span className="absolute right-0 top-0 border-l border-b border-[--color-border-strong] bg-[--color-accent] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-bg]">
                  Most popular
                </span>
              ) : null}

              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                  {t.num}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-accent]">
                  Save {savings}%
                </span>
              </div>

              <h3 className="editorial-display mt-12 text-5xl text-[--color-fg] md:text-6xl">
                {t.name}
              </h3>
              <p className="mt-3 text-sm text-[--color-fg-muted]">
                {t.tagline}
              </p>

              {/* Price spec */}
              <div className="mt-10 border-t border-[--color-border] pt-8">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim] line-through decoration-[--color-fg-dim]/50">
                    ${t.compareAt.toLocaleString()} typical
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  {"priceLabel" in t && t.priceLabel ? (
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[--color-fg-muted]">
                      {t.priceLabel}
                    </span>
                  ) : null}
                  <span className="spec-num text-[--color-fg]">
                    ${t.price.toLocaleString()}
                  </span>
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg]/85">
                  +{" "}
                  {"monthlyLabel" in t && t.monthlyLabel
                    ? `${t.monthlyLabel} `
                    : ""}
                  <span className="text-[--color-accent]">${t.monthly}/mo</span>
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                  {t.monthlyNote}
                </div>
              </div>

              <ul className="mt-10 space-y-3 border-t border-[--color-border] pt-8">
                {t.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[--color-fg]/85"
                  >
                    <span className="text-[--color-accent]">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex-1" />

              <Link
                href={`/proposal?tier=${t.id}`}
                className={`group mt-10 flex items-center justify-between border px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] transition ${
                  t.featured
                    ? "border-[--color-fg] bg-[--color-fg] text-[--color-bg] hover:bg-[--color-accent] hover:border-[--color-accent]"
                    : "border-[--color-border-strong] text-[--color-fg] hover:border-[--color-fg]"
                }`}
              >
                <span>{t.cta}</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
        No contracts · No setup fees · Full code ownership · 14-day money back
      </p>
    </Section>
  );
}
