import { Section } from "@/components/ui/section";

export function Facts() {
  return (
    <Section className="paper-grain">
      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-3">
          <div className="label">↳ The brief</div>
          <p
            className="display-italic mt-6 text-4xl text-[--color-ink] md:text-5xl"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            What this studio
            <br />
            <span className="text-[--color-oxblood]">actually does.</span>
          </p>

          <div className="mt-10 space-y-3 border-t border-[--color-ink]/20 pt-6 font-mono text-xs uppercase tracking-[0.14em] text-[--color-ink-muted]">
            <div className="flex items-baseline justify-between">
              <span>Founded</span>
              <span className="text-[--color-ink]">2024</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span>Operating</span>
              <span className="text-[--color-ink]">Remote / Global</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span>Projects shipped</span>
              <span className="text-[--color-ink]">40+</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span>Avg engagement</span>
              <span className="text-[--color-ink]">4 — 16 weeks</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span>Starting price</span>
              <span className="text-[--color-oxblood]">$200</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-9">
          {/* 3-column magazine spread */}
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="label text-[--color-oxblood]">№ 01</div>
              <h3
                className="display mt-3 text-2xl text-[--color-ink] md:text-3xl"
                style={{ fontVariationSettings: '"opsz" 96' }}
              >
                Studio, not agency.
              </h3>
              <p className="serif-body mt-4 text-base text-[--color-ink]/90 drop-cap">
                We work in small senior pods, with no account managers, no
                handoff theatre, and no junior teams quietly shipping your
                work. Every line of code and every line of copy is the
                responsibility of someone you&apos;ve met.
              </p>
            </div>

            <div>
              <div className="label text-[--color-oxblood]">№ 02</div>
              <h3
                className="display mt-3 text-2xl text-[--color-ink] md:text-3xl"
                style={{ fontVariationSettings: '"opsz" 96' }}
              >
                Outcomes, not deliverables.
              </h3>
              <p className="serif-body mt-4 text-base text-[--color-ink]/90 drop-cap">
                We measure ourselves the way our clients do — pipeline,
                retention, conversion, app reviews, throughput. Deliverables
                are a means to an end, never the point. If the metric
                doesn&apos;t move, the project failed.
              </p>
            </div>

            <div>
              <div className="label text-[--color-oxblood]">№ 03</div>
              <h3
                className="display mt-3 text-2xl text-[--color-ink] md:text-3xl"
                style={{ fontVariationSettings: '"opsz" 96' }}
              >
                From $200 to eight figures.
              </h3>
              <p className="serif-body mt-4 text-base text-[--color-ink]/90 drop-cap">
                Most studios pick one tier. We pick the work. The same team
                that builds AI products for funded startups also runs the
                starter program for local businesses — same craft, scaled to
                the budget and the risk.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <div className="mt-16 border-y-2 border-[--color-ink] py-10">
            <p
              className="display-italic text-4xl text-[--color-ink] md:text-6xl lg:text-7xl"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              &ldquo;Good design is the cheapest thing
              <br />
              you&apos;ll ever{" "}
              <span className="text-[--color-oxblood]">buy.</span>&rdquo;
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[--color-ink-muted]">
              — Studio principle №&nbsp;7
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
