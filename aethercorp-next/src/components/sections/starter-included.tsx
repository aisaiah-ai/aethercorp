import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const INCLUDED = [
  "Mobile-first responsive design",
  "Cloudflare global hosting & CDN",
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
    <Section className="!pt-0">
      <SectionHeader
        eyebrow="Included in every plan"
        title={
          <>
            The boring stuff,{" "}
            <span className="text-gradient">already handled.</span>
          </>
        }
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {INCLUDED.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-[--color-border] bg-[--color-surface]/40 px-5 py-4 text-sm text-white/85 transition hover:border-[--color-border-strong] hover:bg-[--color-surface]/70"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[--color-accent]/15 text-[--color-accent]">
              <Check className="size-4" strokeWidth={2.5} />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
