import { Section } from "@/components/ui/section";

const STATS = [
  { v: "7 days", k: "Avg time to launch" },
  { v: "99/100", k: "Median Lighthouse" },
  { v: "$200", k: "Starting price" },
  { v: "0", k: "Long-term contracts" },
];

export function StarterTestimonialBar() {
  return (
    <Section className="section-cream">
      <div className="grid items-end gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
            ↳ The promise
          </span>
          <h2 className="editorial-display mt-6 text-5xl text-[--color-fg-on-cream] md:text-7xl lg:text-[88px]">
            Premium craft.
            <br />
            <span className="text-[--color-accent-deep]">
              Small-business price.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-base text-[--color-fg-on-cream-muted] md:text-lg">
            The same team that builds AI products and native mobile apps for
            funded startups built a leaner product for local businesses. You
            get studio-grade design and engineering — without the studio
            budget.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px self-end bg-[--color-border-on-cream-strong] md:col-span-5">
          {STATS.map((s) => (
            <div key={s.k} className="bg-[--color-cream] p-6 md:p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-on-cream-muted]">
                {s.k}
              </span>
              <div className="spec-num mt-6 text-[--color-fg-on-cream]">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
