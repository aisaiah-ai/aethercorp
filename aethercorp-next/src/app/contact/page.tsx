import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We respond within one business day.",
};

const META = [
  { num: "01", label: "Email", value: "hello@aethercorp.io" },
  { num: "02", label: "Discovery call", value: "30 min, no slides" },
  { num: "03", label: "Location", value: "Remote · Worldwide" },
  { num: "04", label: "Response time", value: "1 business day" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-border]">
      <div className="bg-hairline pointer-events-none absolute inset-0 opacity-50" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

      <Section className="relative !py-32 md:!py-40">
        <div className="mb-16 flex items-center justify-between border-b border-[--color-border] pb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
          <span>↳ Contact · Studio inquiry</span>
          <span className="hidden text-[--color-accent] md:inline">
            Available for Q3 — Q4
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h1 className="editorial-display text-5xl md:text-7xl lg:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-accent">your next chapter.</span>
            </h1>
            <p className="mt-8 max-w-md text-base text-[--color-fg]/85 md:text-lg">
              Tell us where you want to be in twelve months. We respond within
              one business day with a plan, a timeline, and a senior team.
            </p>

            <div className="mt-16 border-t border-[--color-border]">
              {META.map((m) => (
                <div
                  key={m.num}
                  className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-[--color-border] py-6"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                    {m.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg-muted]">
                    {m.label}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-base font-medium tracking-[-0.01em] text-[--color-fg]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </section>
  );
}
