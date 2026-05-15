import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Facts } from "@/components/sections/facts";
import { Pillars } from "@/components/sections/pillars";
import { Showcase } from "@/components/sections/showcase";
import { Doctrine } from "@/components/sections/doctrine";
import { Process } from "@/components/sections/process";
import { Stack } from "@/components/sections/stack";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Facts />
      <Pillars />
      <Showcase />
      <Doctrine />
      <Process />
      <Stack />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
