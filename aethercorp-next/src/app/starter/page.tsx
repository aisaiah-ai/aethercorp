import type { Metadata } from "next";
import { StarterHero } from "@/components/sections/starter-hero";
import { StarterTrustStrip } from "@/components/sections/starter-trust-strip";
import { StarterPricing } from "@/components/sections/starter-pricing";
import { StarterShowcase } from "@/components/sections/starter-showcase";
import { StarterTimeline } from "@/components/sections/starter-timeline";
import { StarterComparison } from "@/components/sections/starter-comparison";
import { StarterIncluded } from "@/components/sections/starter-included";
import { StarterTestimonialBar } from "@/components/sections/starter-testimonial-bar";
import { StarterFaq } from "@/components/sections/starter-faq";
import { StarterFinalCta } from "@/components/sections/starter-final-cta";

export const metadata: Metadata = {
  title: "Small Business Websites — From $200",
  description:
    "A modern, fast business website built by a real studio — launched in 7 days from $200, kept sharp for $100/month including a weekly blog post.",
  openGraph: {
    title: "Small Business Websites — From $200 · AetherCorp",
    description:
      "Launch in 7 days. Look like a Fortune 500. Pay like a freelancer. Starter sites from $200 with $100/mo maintenance and a weekly blog.",
    type: "website",
  },
};

export default function StarterPage() {
  return (
    <>
      <StarterHero />
      <StarterTrustStrip />
      <StarterPricing />
      <StarterShowcase />
      <StarterTimeline />
      <StarterComparison />
      <StarterIncluded />
      <StarterTestimonialBar />
      <StarterFaq />
      <StarterFinalCta />
    </>
  );
}
