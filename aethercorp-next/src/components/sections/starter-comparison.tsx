import { Section } from "@/components/ui/section";

type Cell = "yes" | "no" | "partial";

const COLS = [
  { id: "us", label: "Aethercorp", featured: true, price: "$200" },
  { id: "wix", label: "Wix / Sqsp", featured: false, price: "$28/mo" },
  { id: "freelancer", label: "Freelancer", featured: false, price: "$1,200" },
  { id: "agency", label: "Agency", featured: false, price: "$5,000+" },
] as const;

const ROWS: {
  feature: string;
  us: Cell;
  wix: Cell;
  freelancer: Cell;
  agency: Cell;
}[] = [
  { feature: "Live in 7 days", us: "yes", wix: "yes", freelancer: "partial", agency: "no" },
  { feature: "Real designer involved", us: "yes", wix: "no", freelancer: "partial", agency: "yes" },
  { feature: "Doesn't look like a template", us: "yes", wix: "no", freelancer: "partial", agency: "yes" },
  { feature: "You own the code", us: "yes", wix: "no", freelancer: "yes", agency: "yes" },
  { feature: "Fast Cloudflare hosting", us: "yes", wix: "no", freelancer: "partial", agency: "partial" },
  { feature: "Weekly blog included", us: "yes", wix: "no", freelancer: "no", agency: "partial" },
  { feature: "Real SEO setup", us: "yes", wix: "partial", freelancer: "partial", agency: "yes" },
  { feature: "Cancel anytime", us: "yes", wix: "yes", freelancer: "partial", agency: "no" },
  { feature: "Upgrade path to AI / mobile", us: "yes", wix: "no", freelancer: "no", agency: "partial" },
];

function renderCell(value: Cell) {
  if (value === "yes") {
    return <span className="font-mono text-base text-[--color-accent]">●</span>;
  }
  if (value === "no") {
    return (
      <span className="font-mono text-base text-[--color-fg-dim]">○</span>
    );
  }
  return (
    <span className="font-mono text-base text-[--color-fg-muted]">◐</span>
  );
}

export function StarterComparison() {
  return (
    <Section>
      <div className="mb-16 flex flex-col gap-6 border-b border-[--color-border] pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
            ↳ How we compare
          </span>
          <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl md:text-7xl lg:text-8xl">
            The cheap option
            <br />
            <span className="text-accent">that isn&apos;t cheap.</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-[--color-fg-muted] md:text-lg">
          Lower price doesn&apos;t have to mean lower quality. Here&apos;s
          where we land vs. the alternatives.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px] border border-[--color-border]">
          {/* Header row */}
          <div className="grid grid-cols-[1.7fr_repeat(4,_1fr)] border-b border-[--color-border]">
            <div className="p-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              Feature
            </div>
            {COLS.map((c) => (
              <div
                key={c.id}
                className={`border-l border-[--color-border] p-5 text-center ${
                  c.featured ? "bg-[--color-bg-soft]" : ""
                }`}
              >
                <div
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                    c.featured ? "text-[--color-accent]" : "text-[--color-fg]/85"
                  }`}
                >
                  {c.label}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                  {c.price}
                </div>
              </div>
            ))}
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.7fr_repeat(4,_1fr)] items-center ${
                i !== ROWS.length - 1 ? "border-b border-[--color-border]" : ""
              }`}
            >
              <div className="p-5 text-sm text-[--color-fg]/85">
                {row.feature}
              </div>
              <div className="flex justify-center border-l border-[--color-border] bg-[--color-bg-soft] py-5">
                {renderCell(row.us)}
              </div>
              <div className="flex justify-center border-l border-[--color-border] py-5">
                {renderCell(row.wix)}
              </div>
              <div className="flex justify-center border-l border-[--color-border] py-5">
                {renderCell(row.freelancer)}
              </div>
              <div className="flex justify-center border-l border-[--color-border] py-5">
                {renderCell(row.agency)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
        <span className="flex items-center gap-2">
          <span className="text-[--color-accent]">●</span> Yes
        </span>
        <span className="flex items-center gap-2">
          <span className="text-[--color-fg-muted]">◐</span> Partial
        </span>
        <span className="flex items-center gap-2">
          <span className="text-[--color-fg-dim]">○</span> No
        </span>
      </div>
    </Section>
  );
}
