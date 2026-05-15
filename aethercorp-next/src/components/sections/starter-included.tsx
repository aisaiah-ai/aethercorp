import { Section } from "@/components/ui/section";

const INCLUDED = [
  "Mobile-first responsive design",
  "Cloudflare global hosting",
  "Free SSL certificate",
  "Contact form with spam protection",
  "Domain setup (yours or new)",
  "On-page SEO + sitemap",
  "Google Analytics installed",
  "Image optimization",
  "Open Graph + social cards",
  "Accessibility baseline (WCAG AA)",
  "Owner-friendly content updates",
  "Code ownership — yours forever",
];

export function StarterIncluded() {
  return (
    <Section>
      <div className="mb-16 border-b border-[--color-border] pb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          ↳ Included in every plan · 12 items
        </span>
        <h2 className="editorial-display mt-6 max-w-[14ch] text-5xl md:text-7xl lg:text-8xl">
          The boring stuff —
          <br />
          <span className="text-accent">handled.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-px border border-[--color-border] bg-[--color-border] md:grid-cols-3 lg:grid-cols-4">
        {INCLUDED.map((item, i) => (
          <div
            key={item}
            className="flex items-baseline gap-4 bg-[--color-bg] p-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-[--color-fg]/85">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
