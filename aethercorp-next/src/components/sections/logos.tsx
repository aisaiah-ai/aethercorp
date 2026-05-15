const LOGOS = [
  "Northwind",
  "Lumen",
  "Hyperloop",
  "Vesper",
  "Cinder",
  "Atlasly",
  "Mosaic",
  "Quantic",
  "Veltra",
  "Orbit",
];

export function Logos() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="relative border-b border-[--color-border] bg-[--color-bg] py-10">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="flex items-baseline justify-between border-b border-[--color-border] pb-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
            ↳ Selected clients · 2024 — 2026
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim] md:block">
            10 of 40+
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div
            className="flex w-max gap-20 whitespace-nowrap"
            style={{ animation: "var(--animate-marquee)" }}
          >
            {row.map((name, i) => (
              <span
                key={i}
                className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[--color-fg]/40 md:text-4xl"
              >
                {name}
                <span className="ml-20 text-[--color-fg-dim]">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
