import Link from "next/link";
import { Section } from "@/components/ui/section";

const GUARANTEES = [
  "Same-day proposal response",
  "14-day money-back guarantee",
  "Cancel monthly care anytime",
];

export function StarterFinalCta() {
  return (
    <Section className="!py-0">
      <div className="relative overflow-hidden border-y border-[--color-border]">
        <div className="bg-hairline pointer-events-none absolute inset-0 opacity-40" />
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="grid items-end gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
                ↳ Now booking · Q3 — Q4 2026
              </span>
              <h2 className="editorial-display mt-6 text-5xl md:text-7xl lg:text-[110px]">
                Be online —
                <br />
                <span className="text-accent">by next week.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base text-[--color-fg-muted] md:text-lg">
                Send a 2-minute proposal request. We respond the same business
                day with a fixed quote — no sales call required.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Link
                href="/proposal?tier=starter"
                className="group flex w-full items-center justify-between border border-[--color-fg] bg-[--color-fg] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-bg] transition hover:bg-[--color-accent] hover:border-[--color-accent] md:w-auto"
              >
                <span>Request a proposal</span>
                <span className="ml-8 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group flex w-full items-center justify-between border border-[--color-border-strong] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg] transition hover:border-[--color-fg] md:w-auto"
              >
                <span>Talk to a human</span>
                <span className="ml-8 text-[--color-accent] transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-[--color-border] pt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg]/85">
            {GUARANTEES.map((g, i) => (
              <span key={g} className="flex items-center gap-12">
                <span className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-[--color-accent]" />
                  {g}
                </span>
                {i < GUARANTEES.length - 1 ? (
                  <span className="hidden text-[--color-fg-dim] md:inline">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
