import Link from "next/link";

const COLS = [
  {
    num: "01",
    title: "Services",
    links: [
      { href: "/services#ai", label: "AI Engineering" },
      { href: "/services#social", label: "Social Media" },
      { href: "/services#web", label: "Web Development" },
      { href: "/services#mobile", label: "iOS & Android" },
    ],
  },
  {
    num: "02",
    title: "Studio",
    links: [
      { href: "/case-studies", label: "Atelier" },
      { href: "/starter", label: "Small Business" },
      { href: "/blog", label: "Journal" },
      { href: "/proposal", label: "Request Proposal" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    num: "03",
    title: "Index",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[--color-coal] text-[--color-paper]">
      {/* Top rule with mini ticker */}
      <div className="flex h-7 items-center border-b border-[--color-paper]/15 bg-[--color-oxblood] px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[--color-signal] blink" />
          End of document
        </span>
        <span className="ml-auto hidden md:inline">
          AC—2026 · Cloudflare — global edge
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-6 pt-24 md:px-12 lg:px-16">
        {/* Big sign-off — italic display */}
        <div className="border-b border-[--color-paper]/15 pb-20">
          <div className="label text-[--color-paper]/50">↳ Closing</div>
          <p
            className="display-italic mt-8 text-5xl text-[--color-paper] md:text-7xl lg:text-9xl"
            style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
          >
            Make
            <br />
            <span className="text-[--color-signal]">something</span>
            <br />
            people can&apos;t
            <br />
            ignore.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              href="/proposal"
              className="group flex items-center gap-3 border border-[--color-paper] bg-[--color-paper] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-coal] transition hover:bg-[--color-signal] hover:border-[--color-signal]"
            >
              <span>Request a proposal</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:hello@aethercorp.io"
              className="font-mono text-xs uppercase tracking-[0.14em] text-[--color-paper] dotted-link hover:text-[--color-signal]"
            >
              hello@aethercorp.io
            </a>
          </div>
        </div>

        {/* Index columns */}
        <div className="grid gap-12 pt-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="label text-[--color-paper]/50">00 — Index</div>
            <p
              className="display-italic mt-6 text-3xl text-[--color-paper]"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              Aethercorp
              <span className="ml-1 inline-block size-1.5 translate-y-[-0.7em] rounded-full bg-[--color-signal]" />
            </p>
            <p className="serif-body mt-4 max-w-xs text-base text-[--color-paper]/75">
              A studio building AI products, social engines, web platforms, and
              native mobile apps.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <div className="label text-[--color-paper]/50">
                {col.num} — {col.title}
              </div>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-mono text-xs uppercase tracking-[0.1em] text-[--color-paper]/85 transition hover:text-[--color-signal]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive wordmark fills the bottom */}
        <div className="mt-24 overflow-hidden border-t border-[--color-paper]/15 pt-8">
          <p
            className="display block w-full text-[18vw] leading-[0.85] text-[--color-paper]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Aether<span className="display-italic" style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}>corp</span>
            <span className="text-[--color-oxblood]">.</span>
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[--color-paper]/15 py-8 font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]/55 md:flex-row">
          <span>© {new Date().getFullYear()} Aethercorp Studio · All rights reserved</span>
          <span>Based remote · Est. 2024 · Issue 01</span>
        </div>
      </div>
    </footer>
  );
}
