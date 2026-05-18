"use client";

import { motion } from "framer-motion";
import { Activity, Bot, Cpu, Sparkles, TrendingUp, Zap } from "lucide-react";

const AGENTS = [
  { icon: Bot, name: "lead-router-v3", status: "Routing", load: 72 },
  { icon: Sparkles, name: "content-synth", status: "Drafting", load: 48 },
  { icon: Cpu, name: "intake-triage", status: "Scoring", load: 86 },
  { icon: Activity, name: "retention-watch", status: "Listening", load: 24 },
];

const SPARK = [12, 22, 18, 34, 28, 45, 40, 58, 52, 70, 62, 84, 78, 96];

export function CommandCenter() {
  const max = Math.max(...SPARK);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      className="relative w-full"
    >
      {/* Aurora behind */}
      <div className="pointer-events-none absolute -inset-12 -z-10">
        <div className="aurora absolute inset-0 rounded-[50%]" />
      </div>

      {/* Outer glass plate */}
      <div className="glass-strong relative overflow-hidden rounded-[28px] p-2 ring-glow sm:rounded-[32px] sm:p-3">
        {/* shine */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,transparent_30%)] sm:rounded-[32px]" />

        {/* Inner pane */}
        <div className="relative overflow-hidden rounded-[22px] bg-[--color-night-soft]/90 sm:rounded-[26px]">
          {/* Status bar */}
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-2.5">
              <span className="live-dot" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/85">
                Aether Command Center
              </span>
            </div>
            <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/50 sm:flex">
              <span>System nominal</span>
              <span>·</span>
              <span className="text-white/85">v 4.7</span>
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-4 p-4 sm:gap-5 sm:p-6">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <Kpi icon={TrendingUp} label="Pipeline" value="$1.84M" delta="+38%" tone="electric" />
              <Kpi icon={Zap} label="Automations" value="2,914" delta="+612 / wk" tone="cyan" />
              <Kpi icon={Activity} label="Conv. rate" value="6.7%" delta="+2.4×" tone="amber" />
            </div>

            {/* Sparkline panel */}
            <div className="glass rounded-2xl p-4 sm:p-5">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Demand · last 14 days
                  </div>
                  <div className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    +312% inbound
                  </div>
                </div>
                <div className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[--color-lime]">
                  ▲ Live
                </div>
              </div>

              <div className="mt-4 flex h-20 items-end gap-1.5 sm:h-24">
                {SPARK.map((v, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + i * 0.04,
                      ease: "easeOut",
                    }}
                    style={{
                      height: `${(v / max) * 100}%`,
                      transformOrigin: "bottom",
                      background:
                        i === SPARK.length - 1
                          ? "linear-gradient(180deg, #00e1ff 0%, #7c5cff 100%)"
                          : "linear-gradient(180deg, rgba(167,139,250,0.95) 0%, rgba(124,92,255,0.7) 100%)",
                    }}
                    className="block flex-1 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* Agents */}
            <div className="glass rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                  Active agents · 24/7
                </div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                  4 of 12
                </div>
              </div>
              <ul className="mt-3 space-y-2.5">
                {AGENTS.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <li
                      key={a.name}
                      className="flex items-center gap-3"
                    >
                      <span className="grid size-8 place-items-center rounded-lg bg-white/[0.06] text-[--color-electric-soft]">
                        <Icon className="size-3.5" strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="truncate font-mono text-[11px] text-white">
                            {a.name}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.14em] text-white/50">
                            {a.status}
                          </span>
                        </div>
                        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/[0.08]">
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: `${a.load}%` }}
                            transition={{
                              duration: 1.4,
                              delay: 0.8 + i * 0.12,
                              ease: "easeOut",
                            }}
                            className="block h-full rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, #7c5cff 0%, #00e1ff 100%)",
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative pills */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute -left-4 -top-3 hidden rounded-full border border-white/15 bg-[--color-night]/80 px-3 py-1.5 backdrop-blur sm:flex sm:items-center sm:gap-2"
      >
        <Sparkles className="size-3 text-[--color-amber]" />
        <span className="text-[10px] uppercase tracking-[0.16em] text-white/85">
          Shipped this week
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute -bottom-3 right-4 hidden rounded-full border border-white/15 bg-[--color-night]/80 px-3 py-1.5 backdrop-blur sm:flex sm:items-center sm:gap-2"
      >
        <span className="live-dot" />
        <span className="text-[10px] uppercase tracking-[0.16em] text-white/85">
          14 systems running
        </span>
      </motion.div>
    </motion.div>
  );
}

function Kpi({
  icon: Icon,
  label,
  value,
  delta,
  tone,
}: {
  icon: typeof Activity;
  label: string;
  value: string;
  delta: string;
  tone: "electric" | "cyan" | "amber";
}) {
  const toneClass =
    tone === "electric"
      ? "text-[--color-electric-soft]"
      : tone === "cyan"
        ? "text-[--color-cyan]"
        : "text-[--color-amber]";
  return (
    <div className="glass min-w-0 rounded-xl p-3 sm:rounded-2xl sm:p-4">
      <div className="flex items-center gap-1.5">
        <Icon className={`size-3.5 shrink-0 ${toneClass}`} strokeWidth={2.4} />
        <span className="truncate text-[9px] uppercase tracking-[0.14em] text-white/55">
          {label}
        </span>
      </div>
      <div className="mt-2 truncate text-lg font-semibold tracking-tight text-white sm:text-xl lg:text-2xl">
        {value}
      </div>
      <div className={`mt-0.5 truncate text-[10px] uppercase tracking-[0.14em] ${toneClass}`}>
        {delta}
      </div>
    </div>
  );
}
