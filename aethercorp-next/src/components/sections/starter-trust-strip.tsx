const ITEMS = [
  "Live in 7 days",
  "You own the code",
  "Cancel anytime",
  "14-day money back",
];

export function StarterTrustStrip() {
  return (
    <section className="border-b border-[--color-border]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 py-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg]/85">
          {ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-12">
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-[--color-accent]" />
                {item}
              </span>
              {i < ITEMS.length - 1 ? (
                <span className="hidden text-[--color-fg-dim] md:inline">·</span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
