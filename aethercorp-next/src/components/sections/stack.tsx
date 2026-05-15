const ROWS = [
  {
    label: "AI",
    items: [
      "Claude",
      "GPT-5",
      "Gemini",
      "Llama",
      "LangGraph",
      "MCP",
      "Mastra",
      "Eval suites",
    ],
  },
  {
    label: "Web",
    items: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "shadcn/ui",
      "Framer Motion",
      "Cloudflare",
      "Edge",
    ],
  },
  {
    label: "Mobile",
    items: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "Xcode Cloud",
      "Fastlane",
      "RevenueCat",
      "Sentry",
    ],
  },
  {
    label: "Data & Ops",
    items: [
      "Postgres",
      "Redis",
      "Pinecone",
      "BigQuery",
      "Segment",
      "PostHog",
      "Linear",
      "GitHub Actions",
    ],
  },
];

export function Stack() {
  // Render as a continuously scrolling ticker — one ticker per discipline
  return (
    <section className="relative overflow-hidden border-y-2 border-[--color-ink] bg-[--color-paper-deep] py-12">
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-8 md:px-12 lg:px-16">
        <div className="flex items-baseline justify-between border-b border-[--color-ink]/20 pb-4 label-lg">
          <span>↳ Tools we actually ship · production grade</span>
          <span className="hidden text-[--color-oxblood] md:inline">
            § IV.
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {ROWS.map((row, i) => {
          const items = [...row.items, ...row.items, ...row.items];
          const animation =
            i % 2 === 0
              ? "var(--animate-marquee-slow)"
              : "var(--animate-marquee)";
          const reverse = i % 2 === 1;
          return (
            <div
              key={row.label}
              className="relative overflow-hidden border-y border-[--color-ink]/15 py-4"
            >
              <div
                className="marquee"
                style={{
                  animation,
                  animationDirection: reverse ? "reverse" : "normal",
                }}
              >
                {items.map((it, idx) => (
                  <span key={idx} className="flex items-baseline gap-12">
                    <span
                      className="display-italic text-4xl text-[--color-ink] md:text-6xl"
                      style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                    >
                      {it}
                    </span>
                    <span className="text-2xl text-[--color-oxblood]">/</span>
                    {idx % 4 === 0 ? (
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-[--color-ink-muted]">
                        {row.label}
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
