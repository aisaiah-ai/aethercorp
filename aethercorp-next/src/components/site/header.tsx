"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/starter", label: "Small Business" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
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
          ? "border-b border-[--color-border] bg-[--color-bg]/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative grid size-8 place-items-center rounded-xl bg-gradient-to-br from-[--color-brand] via-[--color-brand-3] to-[--color-brand-2] shadow-[0_8px_30px_-8px_rgba(124,92,255,0.6)]">
            <Sparkles className="size-4 text-white" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            Aether<span className="text-[--color-brand-2]">Corp</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-white/70 transition hover:bg-white/[0.04] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/contact" variant="ghost" size="sm">
            Book a call
          </Button>
          <Button href="/contact" size="sm">
            Start a project
          </Button>
        </div>

        <button
          className="grid size-10 place-items-center rounded-full border border-[--color-border-strong] bg-white/[0.04] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[--color-border] bg-[--color-bg]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/[0.06]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button href="/contact" variant="ghost" size="sm" className="flex-1">
                Book a call
              </Button>
              <Button href="/contact" size="sm" className="flex-1">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
