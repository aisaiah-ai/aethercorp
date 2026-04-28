import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Pillars } from "@/components/sections/pillars";
import { Process } from "@/components/sections/process";
import { Showcase } from "@/components/sections/showcase";
import { Stack } from "@/components/sections/stack";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Pillars />
      <Process />
      <Showcase />
      <Stack />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
