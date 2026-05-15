import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We respond within one business day.",
};

const META = [
  { num: "i.", label: "Email", value: "hello@aethercorp.io" },
  { num: "ii.", label: "Discovery call", value: "30 min, no slides" },
  { num: "iii.", label: "Location", value: "Remote · Worldwide" },
  { num: "iv.", label: "Response time", value: "1 business day" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-ink] paper-grain">
      <Section className="!py-24 md:!py-32">
        <div className="mb-16 flex items-center justify-between border-b-2 border-[--color-ink] pb-4 label-lg">
          <span>↳ Aethercorp · Studio inquiry · Form B</span>
          <span className="hidden text-[--color-oxblood] md:inline">
            Available for Q3 — Q4
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-12 md:gap-24">
          <div className="md:col-span-5">
            <h1
              className="display-italic text-[14vw] leading-[0.86] text-[--color-ink] md:text-[10vw] lg:text-[8.5vw]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              Let&apos;s build
              <br />
              <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
                your next chapter.
              </span>
            </h1>
            <p className="serif-body mt-8 max-w-md text-lg text-[--color-ink]">
              Tell us where you want to be in twelve months. We respond within
              one business day with a plan, a timeline, and a senior team.
            </p>

            <div className="mt-16 border-t border-[--color-ink]">
              {META.map((m) => (
                <div
                  key={m.num}
                  className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-[--color-ink]/15 py-6"
                >
                  <span
                    className="display-italic text-3xl text-[--color-oxblood]"
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {m.num}
                  </span>
                  <span className="label text-[--color-ink-muted]">
                    {m.label}
                  </span>
                  <span
                    className="display-italic text-lg text-[--color-ink]"
                    style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </section>
  );
}
