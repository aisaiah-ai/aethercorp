import { ScrollProgress } from "@/components/home/scroll-progress";
import { CinemaHeader } from "@/components/home/cinema-header";
import { CinemaHero } from "@/components/home/cinema-hero";
import { CinemaMarquee } from "@/components/home/cinema-marquee";
import { CinemaStats } from "@/components/home/cinema-stats";
import { CinemaValue } from "@/components/home/cinema-value";
import { CinemaLabs } from "@/components/home/cinema-labs";
import { CinemaProcess } from "@/components/home/cinema-process";
import { CinemaVerticals } from "@/components/home/cinema-verticals";
import { CinemaFinal } from "@/components/home/cinema-final";
import { CinemaFooter } from "@/components/home/cinema-footer";

export default function HomePage() {
  return (
    <div className="cinema relative">
      <ScrollProgress />
      <CinemaHeader />
      <CinemaHero />
      <CinemaMarquee />
      <CinemaStats />
      <CinemaValue />
      <CinemaLabs />
      <CinemaProcess />
      <CinemaVerticals />
      <CinemaFinal />
      <CinemaFooter />
    </div>
  );
}
