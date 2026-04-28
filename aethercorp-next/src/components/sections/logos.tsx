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
    <section className="relative border-y border-[--color-border] bg-[--color-bg-soft]/60 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-[--color-fg-dim]">
          Trusted by ambitious teams worldwide
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex w-max gap-14 whitespace-nowrap"
            style={{ animation: "var(--animate-marquee)" }}
          >
            {row.map((name, i) => (
              <span
                key={i}
                className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white/35"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
