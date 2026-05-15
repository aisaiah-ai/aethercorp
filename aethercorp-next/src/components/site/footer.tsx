import Link from "next/link";
import { Sparkles } from "lucide-react";

const COLS = [
  {
    title: "Services",
    links: [
      { href: "/services#ai", label: "AI Engineering" },
      { href: "/services#social", label: "Social Media" },
      { href: "/services#web", label: "Web Development" },
      { href: "/services#mobile", label: "iOS & Android" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/starter", label: "Small Business" },
      { href: "/proposal", label: "Request a proposal" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/blog", label: "Insights" },
      { href: "/contact", label: "Contact" },
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

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[--color-border] bg-[--color-bg-soft]">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-[--color-brand] via-[--color-brand-3] to-[--color-brand-2]">
              <Sparkles className="size-4 text-white" />
            </span>
            <span className="text-base font-semibold tracking-tight">
              Aether<span className="text-[--color-brand-2]">Corp</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[--color-fg-muted]">
            We design, ship, and scale AI products, social presence, modern
            web platforms, and native mobile apps for businesses ready to
            redefine their category.
          </p>
        </div>

        {COLS.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-[--color-fg-muted] transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold tracking-wide text-white">
            Get in touch
          </h3>
          <p className="mt-4 text-sm text-[--color-fg-muted]">
            hello@aethercorp.io
          </p>
          <p className="mt-1 text-sm text-[--color-fg-muted]">
            Remote · Worldwide
          </p>
        </div>
      </div>
      <div className="relative border-t border-[--color-border]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[--color-fg-dim] md:flex-row">
          <span>© {new Date().getFullYear()} AetherCorp. All rights reserved.</span>
          <span>Crafted for businesses ready to scale.</span>
        </div>
      </div>
    </footer>
  );
}
