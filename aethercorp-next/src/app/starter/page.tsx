import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Small Business · From $200",
  description:
    "A studio-grade website for small businesses, launched in seven days from $200 — kept fresh for $100/month including a weekly blog post.",
};

const TIERS = [
  {
    id: "starter",
    num: "i.",
    name: "Starter",
    price: 200,
    typical: 1500,
    monthly: 100,
    monthlyNote: "Care + 1 weekly blog",
    points: [
      "1-page responsive site",
      "Your logo, colors, photos, copy",
      "Contact form to your inbox",
      "Cloudflare global hosting",
      "Free SSL + domain setup",
      "1 revision round",
    ],
    cta: "Claim a $200 site",
    featured: false,
  },
  {
    id: "growth",
    num: "ii.",
    name: "Growth",
    price: 650,
    typical: 3500,
    monthly: 250,
    monthlyNote: "Care + 2 blogs + SEO",
    points: [
      "Up to 5 pages, custom design",
      "Blog section with categories",
      "Analytics + on-page SEO",
      "Lead capture to your CRM",
      "2 revision rounds",
      "Priority response (1 business day)",
    ],
    cta: "Start Growth plan",
    featured: true,
  },
  {
    id: "pro",
    num: "iii.",
    name: "Pro",
    price: 2500,
    priceLabel: "from",
    typical: 12000,
    monthly: 600,
    monthlyLabel: "from",
    monthlyNote: "Retainer — content, SEO, ads, AI",
    points: [
      "Unlimited pages, full custom",
      "Booking, ecommerce, members, AI",
      "Full SEO + content calendar",
      "Email + automation",
      "Conversion optimization",
      "Direct line to the team",
    ],
    cta: "Request a proposal",
    featured: false,
  },
] as const;

const TRUST = [
  "Live in 7 days",
  "You own the code",
  "Cancel anytime",
  "14-day money back",
  "No contracts",
];

const FAQS = [
  {
    q: "Is $200 really the total to launch?",
    a: "Yes — $200 one-time, no setup fees. Maintenance ($100/mo) is optional and cancellable anytime. The site is yours either way.",
  },
  {
    q: "How do you deliver a weekly blog at this price?",
    a: "AI-drafted in your business voice, then a human editor polishes before publishing. Consistent, on-topic SEO content — not Pulitzer prose, but exactly what keeps you in search.",
  },
  {
    q: "Will it look like every other small-business site?",
    a: "No. We work from a design system, not a template gallery — every site shares our craft standards but ends up visually distinct.",
  },
  {
    q: "Why Cloudflare, not WordPress / Wix / Squarespace?",
    a: "Faster pages, lower running cost, no plugin sprawl, no security maintenance. Sites load in under a second from anywhere. Code is fully portable if you ever move.",
  },
];

export default function StarterPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[--color-ink] paper-grain">
        <div className="mx-auto w-full max-w-[1600px] px-6 pt-12 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="flex items-center justify-between border-b border-[--color-ink] pb-4 label-lg">
            <span>Aethercorp · Small Business · Edition 01</span>
            <span className="hidden text-[--color-oxblood] md:inline">
              Now booking
            </span>
          </div>

          <div className="grid items-end gap-8 py-12 md:grid-cols-12 md:py-16 lg:py-20">
            <div className="md:col-span-9">
              <div className="label text-[--color-ink-muted]">↳ The brief</div>
              <h1
                className="display-italic mt-6 text-[14vw] leading-[0.86] text-[--color-ink] md:text-[10vw] lg:text-[9vw]"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                A site that
                <br />
                <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
                  earns
                </span>{" "}
                its keep.
              </h1>
            </div>

            <div className="md:col-span-3 md:pb-2">
              <p className="serif-body text-lg text-[--color-ink] drop-cap">
                Most agencies want $5,000 and three months. Most DIY builders
                look like 2012. We built a third option — studio craft, small
                business price, live in a week.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href="/proposal?tier=starter"
                  className="group flex items-center justify-between border border-[--color-ink] bg-[--color-ink] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-oxblood] hover:border-[--color-oxblood]"
                >
                  <span>Claim a $200 site</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="#pricing"
                  className="group flex items-center justify-between border border-[--color-ink] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-ink] transition hover:bg-[--color-ink] hover:text-[--color-paper]"
                >
                  <span>See all plans</span>
                  <span className="transition group-hover:translate-y-1">↓</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-3 border-t-2 border-[--color-ink] py-6 label-lg">
            {TRUST.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                <span className="size-1 rounded-full bg-[--color-oxblood]" />
                {t}
                {i < TRUST.length - 1 ? (
                  <span className="ml-12 hidden text-[--color-ink-dim] md:inline">
                    ✶
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — luxury menu cards */}
      <Section id="pricing">
        <div className="mb-16 grid items-end gap-8 border-b-2 border-[--color-ink] pb-12 md:grid-cols-12">
          <div className="md:col-span-1">
            <div className="label">§ I.</div>
          </div>
          <div className="md:col-span-8">
            <div className="label text-[--color-ink-muted]">↳ Pricing · 3 tiers</div>
            <h2
              className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl lg:text-[110px]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              The menu.
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="serif-body text-lg text-[--color-ink]">
              One-time build, optional monthly upkeep. Every plan includes
              Cloudflare hosting, SSL, and a contact form. The site is yours.
            </p>
          </div>
        </div>

        <div className="grid gap-px border-2 border-[--color-ink] bg-[--color-ink] lg:grid-cols-3">
          {TIERS.map((t) => {
            const savings = Math.round(((t.typical - t.price) / t.typical) * 100);
            return (
              <div
                key={t.id}
                className={`relative flex flex-col p-8 md:p-10 ${
                  t.featured ? "bg-[--color-oxblood] text-[--color-paper]" : "bg-[--color-paper] text-[--color-ink]"
                }`}
              >
                {t.featured ? (
                  <div className="absolute right-0 top-0 bg-[--color-signal] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-ink]">
                    Most popular
                  </div>
                ) : null}

                <div className="flex items-baseline justify-between">
                  <span
                    className={`display-italic text-4xl md:text-5xl ${
                      t.featured ? "text-[--color-paper]" : "text-[--color-oxblood]"
                    }`}
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {t.num}
                  </span>
                  <span
                    className={`label ${
                      t.featured ? "text-[--color-paper]/70" : "text-[--color-ink-muted]"
                    }`}
                  >
                    Save {savings}%
                  </span>
                </div>

                <h3
                  className={`display mt-12 text-6xl md:text-7xl ${
                    t.featured ? "text-[--color-paper]" : "text-[--color-ink]"
                  }`}
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  {t.name}
                </h3>

                <div className={`mt-10 border-t pt-8 ${
                  t.featured ? "border-[--color-paper]/25" : "border-[--color-ink]/15"
                }`}>
                  <div
                    className={`font-mono text-[10px] uppercase tracking-[0.14em] line-through ${
                      t.featured ? "text-[--color-paper]/60" : "text-[--color-ink-muted]"
                    }`}
                  >
                    ${t.typical.toLocaleString()} typical
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                    {"priceLabel" in t && t.priceLabel ? (
                      <span
                        className={`font-mono text-xs uppercase tracking-[0.14em] ${
                          t.featured ? "text-[--color-paper]/70" : "text-[--color-ink-muted]"
                        }`}
                      >
                        {t.priceLabel}
                      </span>
                    ) : null}
                    <span
                      className={`display text-7xl md:text-8xl ${
                        t.featured ? "text-[--color-paper]" : "text-[--color-ink]"
                      }`}
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      ${t.price.toLocaleString()}
                    </span>
                  </div>
                  <div className={`mt-3 font-mono text-xs uppercase tracking-[0.14em] ${
                    t.featured ? "text-[--color-paper]" : "text-[--color-ink]"
                  }`}>
                    +{" "}
                    {"monthlyLabel" in t && t.monthlyLabel ? `${t.monthlyLabel} ` : ""}
                    <span className={t.featured ? "text-[--color-signal]" : "text-[--color-oxblood]"}>
                      ${t.monthly}/mo
                    </span>
                  </div>
                  <div className={`mt-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                    t.featured ? "text-[--color-paper]/65" : "text-[--color-ink-muted]"
                  }`}>
                    {t.monthlyNote}
                  </div>
                </div>

                <ul className={`mt-10 space-y-3 border-t pt-8 ${
                  t.featured ? "border-[--color-paper]/25" : "border-[--color-ink]/15"
                }`}>
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className={`flex gap-4 font-mono text-[11px] uppercase tracking-[0.12em] ${
                        t.featured ? "text-[--color-paper]/95" : "text-[--color-ink]"
                      }`}
                    >
                      <span className={t.featured ? "text-[--color-signal]" : "text-[--color-oxblood]"}>—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex-1" />

                <Link
                  href={`/proposal?tier=${t.id}`}
                  className={`group mt-10 flex items-center justify-between border px-6 py-4 font-mono text-[11px] uppercase tracking-[0.14em] transition ${
                    t.featured
                      ? "border-[--color-paper] bg-[--color-paper] text-[--color-oxblood] hover:bg-[--color-signal] hover:border-[--color-signal]"
                      : "border-[--color-ink] bg-[--color-ink] text-[--color-paper] hover:bg-[--color-oxblood] hover:border-[--color-oxblood]"
                  }`}
                >
                  <span>{t.cta}</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center label">
          No contracts · No setup fees · Code ownership · 14-day money back
        </p>
      </Section>

      {/* PROMISE block — dark insert */}
      <section className="section-coal">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
          <div className="grid items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="label text-[--color-paper]/60">↳ The promise</div>
              <h2
                className="display-italic mt-6 text-5xl text-[--color-paper] md:text-7xl lg:text-9xl"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                Studio craft.
                <br />
                <span className="display text-[--color-signal]" style={{ fontVariationSettings: '"opsz" 144' }}>
                  Small-business price.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="serif-body text-lg text-[--color-paper]/85">
                The same team that builds AI products and native mobile apps
                for funded startups built a leaner product for local
                businesses. You get studio-grade design and engineering —
                without the studio budget.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-px border-t border-[--color-paper]/20 pt-6">
                {[
                  { v: "7d", k: "Avg launch" },
                  { v: "99", k: "Median Lighthouse" },
                  { v: "$200", k: "Starting price" },
                  { v: "0", k: "Long contracts" },
                ].map((s) => (
                  <div key={s.k} className="py-4">
                    <div
                      className="display-italic text-4xl text-[--color-paper] md:text-5xl"
                      style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                    >
                      {s.v}
                    </div>
                    <div className="mt-1 label text-[--color-paper]/60">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div className="mb-16 grid items-end gap-8 border-b-2 border-[--color-ink] pb-12 md:grid-cols-12">
          <div className="md:col-span-1">
            <div className="label">§ II.</div>
          </div>
          <div className="md:col-span-7">
            <div className="label text-[--color-ink-muted]">↳ Footnotes</div>
            <h2
              className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl lg:text-[110px]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              Asked
              <br />
              <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
                honestly.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="serif-body text-lg text-[--color-ink]">
              The things every small business asks before they hire someone —
              answered before you have to ask.
            </p>
          </div>
        </div>

        <div className="border-t border-[--color-ink]">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group border-b border-[--color-ink]/15 transition hover:bg-[--color-paper-deep]"
            >
              <summary className="grid grid-cols-[auto_1fr_auto] cursor-pointer list-none items-baseline gap-6 py-8 md:gap-10">
                <span className="label w-10 text-[--color-ink-dim]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="display-italic text-2xl text-[--color-ink] md:text-4xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  {f.q}
                </span>
                <span
                  className="display-italic shrink-0 text-2xl text-[--color-ink]/60 transition-transform group-open:rotate-45 group-open:text-[--color-oxblood] md:text-3xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  +
                </span>
              </summary>
              <p className="serif-body pl-16 pr-12 pb-8 text-lg text-[--color-ink]/85 md:pl-20">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-y-2 border-[--color-ink] bg-[--color-oxblood] text-[--color-paper]">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
          <div className="grid items-end gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 label-lg text-[--color-paper]/70">
                <span className="size-1.5 rounded-full bg-[--color-signal] blink" />
                Now booking · Q3 — Q4 2026
              </div>
              <h2
                className="display-italic mt-8 text-6xl text-[--color-paper] md:text-9xl lg:text-[130px]"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                Online by
                <br />
                <span className="display text-[--color-signal]" style={{ fontVariationSettings: '"opsz" 144' }}>
                  next week.
                </span>
              </h2>
              <p className="serif-body mt-8 max-w-xl text-lg text-[--color-paper]/85 md:text-xl">
                Send a 2-minute proposal request. We respond the same business
                day with a fixed quote — no sales call required.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Link
                href="/proposal?tier=starter"
                className="group flex w-full items-center justify-between border border-[--color-paper] bg-[--color-paper] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-oxblood] transition hover:bg-[--color-signal] hover:border-[--color-signal] md:w-auto"
              >
                <span>Request a proposal</span>
                <span className="ml-8 transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="group flex w-full items-center justify-between border border-[--color-paper] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-paper] hover:text-[--color-oxblood] md:w-auto"
              >
                <span>Talk to a human</span>
                <span className="ml-8 transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
