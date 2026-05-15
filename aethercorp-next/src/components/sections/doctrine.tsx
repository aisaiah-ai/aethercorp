import { Section } from "@/components/ui/section";

const STATEMENTS = [
  {
    num: "i.",
    line: "If it doesn't move the metric, it didn't ship.",
    note: "On scope.",
  },
  {
    num: "ii.",
    line: "Make it fast. Then make it slow on purpose.",
    note: "On performance.",
  },
  {
    num: "iii.",
    line: "AI is a material, not a product.",
    note: "On AI.",
  },
  {
    num: "iv.",
    line: "Cross-platform is a budget choice, not a design choice.",
    note: "On mobile.",
  },
  {
    num: "v.",
    line: "Brand is the operating system of growth.",
    note: "On social.",
  },
  {
    num: "vi.",
    line: "If you can't explain it on the bus, it isn't done.",
    note: "On writing.",
  },
  {
    num: "vii.",
    line: "Good design is the cheapest thing you'll ever buy.",
    note: "On price.",
  },
  {
    num: "viii.",
    line: "Ship the boring version first. Earn the right to the loud one.",
    note: "On craft.",
  },
];

export function Doctrine() {
  return (
    <Section className="!pt-0">
      <div className="mb-20 grid items-end gap-8 border-b-2 border-[--color-ink] pb-12 md:grid-cols-12">
        <div className="md:col-span-1">
          <div className="label">§ IV.</div>
        </div>
        <div className="md:col-span-11">
          <div className="label text-[--color-ink-muted]">
            ↳ The doctrine · 8 statements
          </div>
          <h2
            className="display-italic mt-6 text-6xl text-[--color-ink] md:text-8xl lg:text-[110px]"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            What we
            <br />
            <span className="display text-[--color-oxblood]" style={{ fontVariationSettings: '"opsz" 144' }}>
              believe.
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-0">
        {STATEMENTS.map((s, i) => (
          <div
            key={s.num}
            className="grid items-baseline gap-6 border-b border-[--color-ink]/20 py-8 md:grid-cols-12 md:gap-12 md:py-12"
          >
            <div className="md:col-span-1">
              <span
                className="display-italic text-4xl text-[--color-oxblood] md:text-5xl"
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                {s.num}
              </span>
            </div>
            <div className="md:col-span-9">
              <p
                className={`display-italic text-3xl text-[--color-ink] md:text-5xl lg:text-${
                  i % 3 === 0 ? "6xl" : "5xl"
                }`}
                style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
              >
                {s.line}
              </p>
            </div>
            <div className="md:col-span-2 md:pl-8">
              <div className="label text-[--color-ink-muted]">{s.note}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
