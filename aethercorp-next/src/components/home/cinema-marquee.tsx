const ITEMS = [
  "Brand strategy",
  "Conversion design",
  "Web apps",
  "Mobile apps",
  "AI automations",
  "Launch campaigns",
  "Analytics",
  "Growth loops",
];

export function CinemaMarquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Capabilities"
      className="relative overflow-hidden border-y border-white/[0.08] bg-[--color-night-soft]/70 py-7 sm:py-9"
    >
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex w-max gap-12 whitespace-nowrap will-change-transform sm:gap-16"
          style={{ animation: "var(--animate-marquee-slow)" }}
        >
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-2xl font-semibold tracking-tight text-white/85 sm:gap-16 sm:text-4xl"
            >
              {t}
              <span
                aria-hidden
                className="inline-block size-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #7c5cff 0%, #00e1ff 100%)",
                  boxShadow: "0 0 18px rgba(124, 92, 255, 0.6)",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
