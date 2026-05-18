"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV = [
  { href: "#labs", label: "Labs" },
  { href: "#value", label: "Value" },
  { href: "#process", label: "Process" },
  { href: "#start", label: "Start" },
];

export function CinemaHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled
            ? "border-b border-[--color-glass-line] bg-[--color-night]/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
          {/* Wordmark */}
          <Link
            href="/"
            aria-label="AetherCorp"
            className="group inline-flex items-center gap-2.5"
          >
            <AetherMark />
            <span className="text-base font-semibold tracking-tight text-white sm:text-[17px]">
              AetherCorp
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[13px] text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#start" className="btn-cinema">
              Start a flagship
              <ArrowUpRight className="size-4" strokeWidth={2.4} />
            </a>
          </div>

          {/* Mobile toggle — big touch target */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white backdrop-blur md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Mobile glassmorphic drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[75] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[--color-night]/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-[420px] flex-col glass-strong p-6 pt-7"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2.5"
                >
                  <AetherMark />
                  <span className="text-base font-semibold tracking-tight text-white">
                    AetherCorp
                  </span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 * i, ease: "easeOut" }}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold tracking-tight text-white"
                  >
                    <span>{item.label}</span>
                    <span className="text-white/40 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <a
                  href="#start"
                  onClick={() => setOpen(false)}
                  className="btn-cinema w-full"
                >
                  Start a flagship
                  <ArrowUpRight className="size-4" strokeWidth={2.4} />
                </a>
                <p className="mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-white/50">
                  Now booking · Q3 — Q4 2026
                </p>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function AetherMark() {
  return (
    <span
      className="relative grid size-8 place-items-center overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(135deg, #7c5cff 0%, #00e1ff 100%)",
        boxShadow: "0 8px 24px -8px rgba(124, 92, 255, 0.6)",
      }}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        className="relative text-white"
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
  );
}
