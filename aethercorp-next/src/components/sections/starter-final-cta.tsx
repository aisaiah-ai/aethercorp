import { ArrowRight, ShieldCheck, Clock3, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const GUARANTEES = [
  { icon: Clock3, label: "Same-day proposal response" },
  { icon: ShieldCheck, label: "14-day money-back guarantee" },
  { icon: RefreshCcw, label: "Cancel monthly care anytime" },
];

export function StarterFinalCta() {
  return (
    <Section className="!pt-4 !pb-28">
      <div className="relative overflow-hidden rounded-[36px] border border-[--color-border-strong] bg-gradient-to-br from-[#11141d] via-[#1a1233] to-[#0b0d14] p-10 md:p-16">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-[--color-brand]/35 blur-3xl" />
        <div className="pointer-events-none absolute -top-20 right-10 size-72 rounded-full bg-[--color-brand-2]/20 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-[--color-accent]" />
            Now booking
          </span>
          <h3 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Be online for real —{" "}
            <span className="text-gradient">by next week.</span>
          </h3>
          <p className="mt-5 max-w-2xl text-base text-[--color-fg-muted] md:text-lg">
            Send a 2-minute proposal request. We respond the same business day
            with a fixed quote — no sales call required.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/proposal?tier=starter" size="lg">
              Request a proposal
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Talk to a human first
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            {GUARANTEES.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.label}
                  className="flex items-center gap-2.5 text-sm text-white/80"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-[--color-accent]/15 text-[--color-accent]">
                    <Icon className="size-4" />
                  </span>
                  {g.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
