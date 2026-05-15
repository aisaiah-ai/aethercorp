import { Check, X, Minus } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

type Cell = "yes" | "no" | "partial" | string;

const COLS = [
  { id: "us", label: "AetherCorp", featured: true, price: "$200" },
  { id: "wix", label: "Wix / Squarespace", featured: false, price: "$28/mo" },
  { id: "freelancer", label: "Freelancer", featured: false, price: "$1,200" },
  { id: "agency", label: "Local agency", featured: false, price: "$5,000+" },
] as const;

const ROWS: { feature: string; us: Cell; wix: Cell; freelancer: Cell; agency: Cell }[] = [
  {
    feature: "Live in 7 days",
    us: "yes",
    wix: "yes",
    freelancer: "partial",
    agency: "no",
  },
  {
    feature: "Real designer involved",
    us: "yes",
    wix: "no",
    freelancer: "partial",
    agency: "yes",
  },
  {
    feature: "Doesn't look like a template",
    us: "yes",
    wix: "no",
    freelancer: "partial",
    agency: "yes",
  },
  {
    feature: "You own the code",
    us: "yes",
    wix: "no",
    freelancer: "yes",
    agency: "yes",
  },
  {
    feature: "Fast Cloudflare hosting",
    us: "yes",
    wix: "no",
    freelancer: "partial",
    agency: "partial",
  },
  {
    feature: "Weekly blog included",
    us: "yes",
    wix: "no",
    freelancer: "no",
    agency: "partial",
  },
  {
    feature: "Real SEO setup",
    us: "yes",
    wix: "partial",
    freelancer: "partial",
    agency: "yes",
  },
  {
    feature: "Cancel anytime",
    us: "yes",
    wix: "yes",
    freelancer: "partial",
    agency: "no",
  },
  {
    feature: "Upgrade path to AI / mobile",
    us: "yes",
    wix: "no",
    freelancer: "no",
    agency: "partial",
  },
];

function renderCell(value: Cell) {
  if (value === "yes") {
    return (
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-[--color-accent]/15 text-[--color-accent]">
        <Check className="size-4" strokeWidth={2.5} />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-white/[0.04] text-white/30">
        <X className="size-4" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-[--color-brand-2]/10 text-[--color-brand-2]/70">
        <Minus className="size-4" />
      </span>
    );
  }
  return <span className="text-sm text-white/80">{value}</span>;
}

export function StarterComparison() {
  return (
    <Section className="!pt-0">
      <SectionHeader
        eyebrow="How we compare"
        title={
          <>
            The cheap option that{" "}
            <span className="text-gradient">isn&apos;t cheap.</span>
          </>
        }
        description="Lower price doesn't have to mean lower quality. Here's where we land vs. the alternatives most small businesses consider."
      />

      <div className="overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/40 backdrop-blur">
        {/* Header row */}
        <div className="grid grid-cols-[1.5fr_repeat(4,_1fr)] gap-2 border-b border-[--color-border] bg-[--color-bg-soft]/70 px-5 py-4 text-xs uppercase tracking-wider text-[--color-fg-muted]">
          <div />
          {COLS.map((c) => (
            <div
              key={c.id}
              className={`text-center ${c.featured ? "text-white" : ""}`}
            >
              <div
                className={`font-semibold ${
                  c.featured ? "text-[--color-brand-2]" : ""
                }`}
              >
                {c.label}
              </div>
              <div className="mt-1 text-[10px] font-normal normal-case text-[--color-fg-dim]">
                {c.price}
              </div>
            </div>
          ))}
        </div>

        <div>
          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.5fr_repeat(4,_1fr)] items-center gap-2 px-5 py-4 ${
                i !== ROWS.length - 1
                  ? "border-b border-[--color-border]"
                  : ""
              }`}
            >
              <div className="text-sm text-white/85">{row.feature}</div>
              <div className="flex justify-center bg-gradient-to-b from-[--color-brand]/5 to-transparent py-1">
                {renderCell(row.us)}
              </div>
              <div className="flex justify-center">{renderCell(row.wix)}</div>
              <div className="flex justify-center">
                {renderCell(row.freelancer)}
              </div>
              <div className="flex justify-center">
                {renderCell(row.agency)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
