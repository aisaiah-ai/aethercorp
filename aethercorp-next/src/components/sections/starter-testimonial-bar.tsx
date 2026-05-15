import { Section } from "@/components/ui/section";

const STATS = [
  { v: "7 days", k: "avg time to launch" },
  { v: "99/100", k: "median Lighthouse score" },
  { v: "$200", k: "starting price — that's it" },
  { v: "0", k: "long-term contracts ever" },
];

export function StarterTestimonialBar() {
  return (
    <Section className="!pt-0">
      <div className="relative overflow-hidden rounded-[32px] border border-[--color-border-strong] bg-gradient-to-br from-[#0b0d14] via-[#11141d] to-[#1a1233] p-10 md:p-14">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-[--color-brand]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 size-96 rounded-full bg-[--color-brand-2]/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[--color-brand-2]">
              The promise
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Premium craft.{" "}
              <span className="text-gradient">Small-business price.</span>
            </h3>
            <p className="mt-5 max-w-xl text-[--color-fg-muted] md:text-lg">
              The same team that builds AI products and native mobile apps for
              funded startups built a leaner product for local businesses. You
              get studio-grade design and engineering — without the studio
              budget.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-[--color-border] bg-[--color-surface]/70 p-5 backdrop-blur"
              >
                <div className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs text-[--color-fg-muted]">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
