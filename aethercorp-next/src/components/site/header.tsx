"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Ticker } from "@/components/site/ticker";

const NAV = [
  { href: "/", label: "Index", num: "00" },
  { href: "/services", label: "Services", num: "01" },
  { href: "/case-studies", label: "Atelier", num: "02" },
  { href: "/starter", label: "Small Business", num: "03" },
  { href: "/blog", label: "Journal", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
  { href: "/proposal", label: "Request Proposal", num: "06" },
];

const DISCIPLINES = ["AI Engineering", "Social Media", "Web Development", "Native Mobile"];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Homepage owns its own bespoke cinematic chrome.
  if (pathname === "/") return null;

  return (
    <>
      <Ticker />

      {/* Spacer so content begins below the ticker */}
      <div className="h-7" aria-hidden />

      <header className="sticky top-7 z-50 border-b border-[--color-ink]/15 bg-[--color-paper]/85 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-12 lg:px-16">
          <Link
            href="/"
            aria-label="Aethercorp home"
            className="group flex items-center gap-3"
          >
            <span
              className="display-italic text-2xl text-[--color-ink] md:text-3xl"
              style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
            >
              Aethercorp
            </span>
            <span className="size-1.5 rounded-full bg-[--color-oxblood] transition group-hover:scale-150" />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 border border-[--color-ink] bg-transparent px-5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-ink] transition hover:bg-[--color-ink] hover:text-[--color-paper] md:px-6 md:py-2.5"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="grid grid-cols-2 gap-[3px]">
              <span className="size-1 rounded-full bg-current" />
              <span className="size-1 rounded-full bg-current" />
              <span className="size-1 rounded-full bg-current" />
              <span className="size-1 rounded-full bg-current" />
            </span>
            <span>Menu / Index</span>
          </button>
        </div>
      </header>

      {/* Full-bleed menu takeover */}
      {open ? <MenuTakeover onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function MenuTakeover({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col bg-[--color-coal] text-[--color-paper]"
      role="dialog"
      aria-modal="true"
    >
      {/* Top bar */}
      <div className="flex h-7 shrink-0 items-center border-b border-[--color-paper]/20 bg-[--color-oxblood] px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[--color-signal] blink" />
          Menu open · Esc to close
        </span>
        <span className="ml-auto hidden md:inline">Aethercorp Index 00 — 06</span>
      </div>

      <div className="flex h-16 shrink-0 items-center justify-between border-b border-[--color-paper]/15 px-6 md:h-20 md:px-12 lg:px-16">
        <span
          className="display-italic text-2xl text-[--color-paper] md:text-3xl"
          style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
        >
          Aethercorp
          <span className="ml-2 inline-block size-1.5 translate-y-[-0.5em] rounded-full bg-[--color-signal]" />
        </span>
        <button
          onClick={onClose}
          className="group flex items-center gap-3 border border-[--color-paper] bg-transparent px-5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-paper] transition hover:bg-[--color-paper] hover:text-[--color-coal] md:px-6 md:py-2.5"
          aria-label="Close menu"
        >
          <span className="text-base leading-none">×</span>
          <span>Close</span>
        </button>
      </div>

      <div className="grid flex-1 grid-rows-[1fr_auto] overflow-y-auto md:grid-cols-[1fr_360px] md:grid-rows-1">
        {/* Nav list */}
        <nav className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-0 lg:px-16">
          <ul>
            {NAV.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-[--color-paper]/10 first:border-t"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between gap-6 py-5 md:py-6"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="flex items-baseline gap-6">
                    <span className="label-lg w-10 text-[--color-paper]/40">
                      {item.num}
                    </span>
                    <span
                      className="display-italic text-4xl text-[--color-paper] transition group-hover:text-[--color-signal] md:text-6xl lg:text-7xl"
                      style={{ fontVariationSettings: '"WONK" 1, "opsz" 144' }}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span className="font-mono text-2xl text-[--color-paper]/30 transition group-hover:translate-x-2 group-hover:text-[--color-signal] md:text-3xl">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Side meta column */}
        <aside className="grid grid-rows-[auto_auto_auto] gap-10 border-t border-[--color-paper]/15 px-6 py-10 md:border-l md:border-t-0 md:px-10 md:py-12">
          <div>
            <div className="label text-[--color-paper]/50">
              ↳ Disciplines
            </div>
            <ul className="mt-4 space-y-1">
              {DISCIPLINES.map((d, i) => (
                <li
                  key={d}
                  className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.14em] text-[--color-paper]/85"
                >
                  <span className="text-[--color-paper]/40">
                    0{i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label text-[--color-paper]/50">↳ Contact</div>
            <a
              href="mailto:hello@aethercorp.io"
              className="mt-4 block font-mono text-sm uppercase tracking-[0.1em] text-[--color-paper] hover:text-[--color-signal]"
            >
              hello@aethercorp.io
            </a>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]/60">
              Response within 1 business day
            </p>
          </div>

          <div>
            <div className="label text-[--color-paper]/50">↳ Status</div>
            <div className="mt-4 flex items-center gap-2 font-mono text-sm text-[--color-paper]">
              <span className="size-1.5 rounded-full bg-[--color-signal] blink" />
              <span className="uppercase tracking-[0.1em]">
                Now booking
              </span>
            </div>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[--color-paper]/60">
              Q3 — Q4 2026
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
