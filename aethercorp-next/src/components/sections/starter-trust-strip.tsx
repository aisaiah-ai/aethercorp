import { Clock, ShieldCheck, RefreshCw, KeyRound } from "lucide-react";

const ITEMS = [
  { icon: Clock, label: "Live in 7 days" },
  { icon: KeyRound, label: "You own the code" },
  { icon: RefreshCw, label: "Cancel anytime" },
  { icon: ShieldCheck, label: "14-day money back" },
];

export function StarterTrustStrip() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-2 backdrop-blur md:grid-cols-4">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center justify-center gap-3 rounded-xl border border-transparent px-4 py-4 text-sm text-white/85 transition hover:border-[--color-border] hover:bg-[--color-surface-2]/40"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[--color-brand]/25 via-[--color-brand-3]/15 to-[--color-brand-2]/25 text-[--color-brand-2]">
                  <Icon className="size-4" />
                </span>
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
