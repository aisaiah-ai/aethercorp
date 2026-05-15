"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  "● LIVE",
  "STUDIO OPEN",
  "REMOTE · WORLDWIDE",
  "EST 2024",
  "NOW BOOKING · Q3 — Q4 2026",
  "STARTER SITES FROM $200",
  "AI · SOCIAL · WEB · MOBILE",
  "RESPONSE TIME · 1 BUSINESS DAY",
  "BUILT ON CLOUDFLARE",
];

export function Ticker() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.getUTCHours().toString().padStart(2, "0");
      const mm = d.getUTCMinutes().toString().padStart(2, "0");
      const ss = d.getUTCSeconds().toString().padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  const row = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-7 items-center overflow-hidden border-b border-[--color-ink] bg-[--color-ink] text-[--color-paper]">
      {/* Live clock left */}
      <div className="flex h-full shrink-0 items-center gap-2 border-r border-[--color-paper]/20 bg-[--color-oxblood] px-4 font-mono text-[10px] uppercase tracking-[0.14em]">
        <span className="size-1.5 rounded-full bg-[--color-signal] blink" />
        <span>{time || "--:--:-- UTC"}</span>
      </div>

      {/* Marquee */}
      <div className="relative flex-1 overflow-hidden">
        <div className="marquee font-mono text-[10px] uppercase tracking-[0.14em]">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{t}</span>
              <span className="text-[--color-paper]/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Right pin */}
      <div className="hidden h-full shrink-0 items-center border-l border-[--color-paper]/20 px-4 font-mono text-[10px] uppercase tracking-[0.14em] md:flex">
        <span className="text-[--color-signal]">●</span>
        <span className="ml-2">All systems normal</span>
      </div>
    </div>
  );
}
