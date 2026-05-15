"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/services", label: "Services", num: "01" },
  { href: "/case-studies", label: "Work", num: "02" },
  { href: "/starter", label: "Small Business", num: "03" },
  { href: "/blog", label: "Journal", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[--color-border] bg-[--color-bg]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-10 lg:px-14">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.02em] text-[--color-fg]"
        >
          AETHERCORP<span className="text-[--color-accent]">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg]/70 transition hover:text-[--color-fg]"
            >
              <span className="text-[9px] text-[--color-fg-dim] transition group-hover:text-[--color-accent]">
                {item.num}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-fg] transition"
          >
            <span className="link-underline">Book a call</span>
            <span className="text-[--color-accent] transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <button
          className="grid size-10 place-items-center border border-[--color-border-strong] text-[--color-fg] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[--color-border] bg-[--color-bg]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-[--color-border] py-4 font-mono text-xs uppercase tracking-[0.16em] text-[--color-fg]/85 hover:text-[--color-fg]"
              >
                <span className="text-[10px] text-[--color-fg-dim]">
                  {item.num}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-between border border-[--color-fg] bg-[--color-fg] px-4 py-4 font-mono text-xs uppercase tracking-[0.16em] text-[--color-bg]"
            >
              <span>Book a call</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
