import { ArrowUpRight, Phone } from "lucide-react";

export function CinemaFinal() {
  return (
    <section id="start" className="relative overflow-hidden">
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute inset-0 opacity-80" />
        <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="noise-bg absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur">
            <span className="live-dot" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/85">
              Now booking · Q3 — Q4 2026
            </span>
          </div>

          <h2 className="cinema-display mt-8 text-white">
            Ready to look{" "}
            <span className="text-electric">inevitable?</span>
          </h2>

          <p className="cinema-body mx-auto mt-8 max-w-2xl text-white/75">
            Send the vision, the problem, or the messy current website. We
            will turn it into a flagship digital product that sells the
            company before your team says a word.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="/proposal" className="btn-cinema">
              Start now
              <ArrowUpRight className="size-4" strokeWidth={2.4} />
            </a>
            <a href="/contact" className="btn-cinema-ghost">
              <Phone className="size-4" strokeWidth={2.2} />
              Strategy call
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06]">
            <Mini v="3h" k="Avg response" />
            <Mini v="7d" k="To first preview" />
            <Mini v="0" k="Long contracts" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ v, k }: { v: string; k: string }) {
  return (
    <div className="bg-[--color-night-soft] px-3 py-5 text-center sm:px-6 sm:py-7">
      <div
        className="font-semibold tracking-tight text-white"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
      >
        {v}
      </div>
      <div className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-[11px]">
        {k}
      </div>
    </div>
  );
}
