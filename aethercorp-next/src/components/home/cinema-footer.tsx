import Link from "next/link";

const COLS = [
  {
    title: "Studio",
    links: [
      { href: "#labs", label: "Labs" },
      { href: "/case-studies", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/blog", label: "Journal" },
    ],
  },
  {
    title: "Engage",
    links: [
      { href: "/proposal", label: "Start a flagship" },
      { href: "/contact", label: "Strategy call" },
      { href: "/starter", label: "Small business" },
      { href: "#value", label: "Value" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Cookies" },
    ],
  },
];

export function CinemaFooter() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[--color-night-soft]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span
                className="grid size-8 place-items-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #7c5cff 0%, #00e1ff 100%)",
                  boxShadow: "0 8px 24px -8px rgba(124, 92, 255, 0.6)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 19 L12 4 L19 19" />
                  <path d="M8.5 14 L15.5 14" />
                </svg>
              </span>
              <span className="text-base font-semibold tracking-tight text-white">
                AetherCorp
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              We design and ship flagship web apps, native mobile products, AI
              systems, and launch engines for businesses that refuse to be
              invisible.
            </p>
            <a
              href="mailto:hello@aethercorp.io"
              className="mt-6 inline-block text-[13px] uppercase tracking-[0.14em] text-white/85 hover:text-[--color-cyan]"
            >
              hello@aethercorp.io
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/80 transition hover:text-[--color-cyan]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 md:text-right">
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/45">
              Status
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/85">
              <span className="live-dot" />
              <span>Booking</span>
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
              Q3 — Q4 ’26
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.08] pt-6 text-[11px] uppercase tracking-[0.14em] text-white/45 md:flex-row">
          <span>© {new Date().getFullYear()} AetherCorp · All rights reserved</span>
          <span>Based remote · Built on Cloudflare</span>
        </div>
      </div>
    </footer>
  );
}
