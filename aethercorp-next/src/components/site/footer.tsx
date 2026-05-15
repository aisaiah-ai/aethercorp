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
      { href: "/case-studies", label: "Selected Work" },
      { href: "/starter", label: "Small Business" },
      { href: "/blog", label: "Journal" },
      { href: "/proposal", label: "Request a Proposal" },
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
    <footer className="relative border-t border-[--color-border] bg-[--color-bg]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 lg:px-14">
        {/* Closing statement */}
        <div className="border-b border-[--color-border] pb-16">
          <p className="editorial-display max-w-[18ch] text-4xl md:text-6xl lg:text-7xl">
            Let&apos;s build
            <br />
            <span className="text-accent">something</span>
            <br />
            unmistakable.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[--color-fg]"
            >
              <span className="link-underline">Start a project</span>
              <span className="text-[--color-accent] transition group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="mailto:hello@aethercorp.io"
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[--color-fg]/70 hover:text-[--color-fg]"
            >
              <span className="link-underline">hello@aethercorp.io</span>
            </a>
          </div>
        </div>

        {/* Index columns */}
        <div className="grid gap-12 pt-16 md:grid-cols-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
              00 — Index
            </div>
            <div className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
              Aethercorp<span className="text-[--color-accent]">.</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[--color-fg-muted]">
              A studio building AI products, social engines, web platforms,
              and native mobile apps.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim]">
                {col.num} — {col.title}
              </div>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[--color-fg]/85 transition hover:text-[--color-accent]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-[--color-border] pt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-[--color-fg-dim] md:flex-row">
          <span>© {new Date().getFullYear()} Aethercorp Studio</span>
          <span>Based remote · Est 2024 · Available for Q3</span>
        </div>
      </div>
    </footer>
  );
}
