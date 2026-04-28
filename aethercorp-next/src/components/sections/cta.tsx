import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function CTA() {
  return (
    <Section className="!pt-10">
      <div className="relative overflow-hidden rounded-[32px] border border-[--color-border-strong] bg-gradient-to-br from-[#11141d] via-[#1a1233] to-[#0b0d14] p-10 md:p-16">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-[--color-brand]/40 blur-3xl" />
        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Ready to make your business{" "}
              <span className="text-gradient">unmistakable?</span>
            </h3>
            <p className="mt-4 max-w-lg text-base text-[--color-fg-muted] md:text-lg">
              Tell us where you want to be in twelve months. We&apos;ll build
              the AI, mobile, web, and social system to get you there.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Start a project
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
