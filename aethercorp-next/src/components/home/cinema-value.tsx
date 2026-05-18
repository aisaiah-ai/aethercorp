"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, LayoutGrid, Sparkles } from "lucide-react";

const CARDS = [
  {
    icon: TrendingUp,
    title: "More demand",
    body:
      "We design every page, hook, and CTA against measurable pipeline. Better visitors, better intent, better conversion — not just better screenshots.",
    accent: "electric",
  },
  {
    icon: Zap,
    title: "Less manual work",
    body:
      "AI agents and automations remove the busywork around your business — intake, qualification, follow-up, reporting — so your team scales without hiring.",
    accent: "cyan",
  },
  {
    icon: LayoutGrid,
    title: "A scalable foundation",
    body:
      "We build on Next.js, Cloudflare, and a real engineering stack — so the site you launch grows into a SaaS, an app, or a global platform without a rewrite.",
    accent: "amber",
  },
  {
    icon: Sparkles,
    title: "A premium market signal",
    body:
      "Your website tells the market who you are. We design surfaces that signal category leader from the first scroll — and back it up under the hood.",
    accent: "rose",
  },
];

const accentMap = {
  electric: { ring: "rgba(124,92,255,0.45)", text: "text-[--color-electric-soft]" },
  cyan: { ring: "rgba(0,225,255,0.45)", text: "text-[--color-cyan]" },
  amber: { ring: "rgba(255,183,107,0.45)", text: "text-[--color-amber]" },
  rose: { ring: "rgba(255,91,138,0.45)", text: "text-[--color-rose]" },
} as const;

export function CinemaValue() {
  return (
    <section id="value" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mb-14 max-w-3xl">
          <span className="cinema-eyebrow text-white/55">
            ↳ Why founders hire us
          </span>
          <h2 className="cinema-h2 mt-3 text-white">
            A great site should{" "}
            <span className="text-electric">change the business.</span>
          </h2>
          <p className="cinema-body mt-6 max-w-xl text-white/70">
            Not just a prettier logo, a faster page, or one more landing form.
            We build the surface, the systems, and the demand machine around it —
            so the business behaves differently after launch.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            const a = accentMap[c.accent as keyof typeof accentMap];
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass group relative overflow-hidden rounded-3xl p-7 sm:p-9 lg:p-10"
              >
                {/* corner aurora */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${a.ring} 0%, transparent 60%)`,
                    filter: "blur(40px)",
                  }}
                />
                <div className="relative">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.04]">
                    <Icon className={`size-5 ${a.text}`} strokeWidth={2.2} />
                  </span>
                  <h3 className="cinema-h3 mt-7 text-white">{c.title}</h3>
                  <p className="cinema-body mt-3 max-w-md text-white/70">
                    {c.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
