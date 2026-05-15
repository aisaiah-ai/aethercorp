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
  const row = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <section className="relative overflow-hidden border-b border-[--color-ink] bg-[--color-paper]">
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-10 md:px-12 lg:px-16">
        <div className="flex items-baseline justify-between pb-6 label-lg">
          <span>↳ Patrons of the studio · 10 of 40+</span>
          <span className="hidden text-[--color-oxblood] md:inline">
            2024 — 2026
          </span>
        </div>
      </div>

      {/* Marquee — italic Fraunces, paper bleed to ink */}
      <div className="relative w-full overflow-hidden border-y-2 border-[--color-ink] bg-[--color-paper] py-8">
        <div className="marquee">
          {row.map((name, i) => (
            <span
              key={i}
              className="flex items-baseline gap-20"
            >
              <span
                className="display-italic text-5xl text-[--color-ink] md:text-7xl lg:text-8xl"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                {name}
              </span>
              <span className="text-3xl text-[--color-oxblood] md:text-5xl">
                ✶
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
