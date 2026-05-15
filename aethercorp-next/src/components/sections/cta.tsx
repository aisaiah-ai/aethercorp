import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y-2 border-[--color-ink] bg-[--color-oxblood] text-[--color-paper]">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-40">
        <div className="grid items-end gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 label-lg text-[--color-paper]/70">
              <span className="size-1.5 rounded-full bg-[--color-signal] blink" />
              Now booking · Q3 — Q4 2026
            </div>
            <h2
              className="display-italic mt-8 text-6xl text-[--color-paper] md:text-9xl lg:text-[140px]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              Send the
              <br />
              <span className="display text-[--color-signal]" style={{ fontVariationSettings: '"opsz" 144' }}>
                brief.
              </span>
            </h2>
            <p className="serif-body mt-8 max-w-xl text-lg text-[--color-paper]/85 md:text-xl">
              Two-minute proposal request. Fixed quote, in writing, within one
              business day. No sales call unless you want one.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
            <Link
              href="/proposal"
              className="group flex w-full items-center justify-between border border-[--color-paper] bg-[--color-paper] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-oxblood] transition hover:bg-[--color-signal] hover:border-[--color-signal] md:w-auto"
            >
              <span>Request a proposal</span>
              <span className="ml-8 transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="group flex w-full items-center justify-between border border-[--color-paper] bg-transparent px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-paper] hover:text-[--color-oxblood] md:w-auto"
            >
              <span>Book a call</span>
              <span className="ml-8 transition group-hover:translate-x-1">→</span>
            </Link>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[--color-paper]/20 pt-6 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]/75 md:text-left">
              <div>
                <div
                  className="display-italic text-3xl text-[--color-paper] md:text-4xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  3h
                </div>
                <div className="mt-1">Avg response</div>
              </div>
              <div>
                <div
                  className="display-italic text-3xl text-[--color-paper] md:text-4xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  0
                </div>
                <div className="mt-1">Contracts</div>
              </div>
              <div>
                <div
                  className="display-italic text-3xl text-[--color-paper] md:text-4xl"
                  style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                >
                  ∞
                </div>
                <div className="mt-1">Revisions w/ care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
