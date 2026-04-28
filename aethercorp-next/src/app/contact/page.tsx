import type { Metadata } from "next";
import { Mail, Calendar, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <Section className="!py-24 md:!py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Badge>Contact</Badge>
          <h1 className="mt-6 max-w-xl text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Let&apos;s build{" "}
            <span className="text-gradient">your next chapter.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-[--color-fg-muted]">
            Tell us where you want to be in twelve months. We respond within
            one business day with a plan, a timeline, and a senior team.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-2xl border border-[--color-border-strong] bg-[--color-surface]">
                <Mail className="size-5 text-[--color-brand-2]" />
              </span>
              <div>
                <div className="text-sm font-medium text-white">Email</div>
                <div className="text-sm text-[--color-fg-muted]">
                  hello@aethercorp.io
                </div>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-2xl border border-[--color-border-strong] bg-[--color-surface]">
                <Calendar className="size-5 text-[--color-brand-2]" />
              </span>
              <div>
                <div className="text-sm font-medium text-white">
                  Book a call
                </div>
                <div className="text-sm text-[--color-fg-muted]">
                  30 min discovery, no slides
                </div>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-2xl border border-[--color-border-strong] bg-[--color-surface]">
                <MapPin className="size-5 text-[--color-brand-2]" />
              </span>
              <div>
                <div className="text-sm font-medium text-white">Where</div>
                <div className="text-sm text-[--color-fg-muted]">
                  Remote · Worldwide
                </div>
              </div>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
