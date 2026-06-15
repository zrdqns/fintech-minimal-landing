"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EASE_OUT } from "@/components/motion/ease";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE_OUT },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-16 pb-24 sm:pt-24">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-blob absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_62%)]" />
        <div className="hero-blob absolute top-10 -right-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.16),transparent_62%)] [animation-delay:-6s]" />
        <div className="absolute inset-0 grid-texture opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_72%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <Badge>
              <ShieldCheck className="h-3.5 w-3.5 text-teal" />
              SOC 2 Type II · PCI DSS Level 1
            </Badge>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl"
          >
            Payments infrastructure for{" "}
            <span className="text-gradient">modern finance teams</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-muted"
          >
            Numera unifies global payouts, reconciliation, and reporting in one
            programmable platform. Move money to 180 countries with predictable
            fees and real-time settlement.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="accent" size="lg" className="group">
              Start free
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg">
              Book a demo
            </Button>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 text-sm text-muted"
          >
            No card required · 14-day sandbox · Cancel anytime
          </motion.p>
        </div>

        {/* Glass dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease: EASE_OUT }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="rounded-3xl border border-line bg-white/70 p-2.5 shadow-[0_40px_90px_-50px_rgba(10,10,10,0.45)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-2xl border border-line bg-mist">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 border-b border-line bg-white/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e2e6ee]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e2e6ee]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e2e6ee]" />
                <span className="ml-3 font-mono text-xs text-muted">
                  app.numera.io / treasury
                </span>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-3">
                <DashCard
                  label="Available balance"
                  value="$4,182,940.18"
                  trend="+2.4% this week"
                  accent
                />
                <DashCard label="Settled today" value="$612,430.00" trend="318 payouts" />
                <DashCard label="In transit" value="$94,210.55" trend="12 countries" />

                <div className="rounded-xl border border-line bg-white p-4 sm:col-span-2">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium">Net flow · 30d</span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-teal">
                      <Activity className="h-3.5 w-3.5" /> live
                    </span>
                  </div>
                  <Sparkline />
                </div>

                <div className="rounded-xl border border-line bg-white p-4">
                  <span className="text-sm font-medium">Recent</span>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {[
                      ["Payroll · DE", "+€48,200"],
                      ["Vendor · SG", "−$12,050"],
                      ["Refund · US", "−$340"],
                    ].map(([a, b]) => (
                      <li key={a} className="flex items-center justify-between">
                        <span className="text-muted">{a}</span>
                        <span className="font-mono text-ink">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashCard({
  label,
  value,
  trend,
  accent,
}: {
  label: string;
  value: string;
  trend: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent ? "border-accent/20 bg-accent/[0.04]" : "border-line bg-white"
      }`}
    >
      <span className="text-xs text-muted">{label}</span>
      <p className="mt-1 text-xl font-semibold tracking-tight">{value}</p>
      <span className="mt-1 inline-flex items-center gap-1 text-xs text-teal">
        <ArrowUpRight className="h-3 w-3" />
        {trend}
      </span>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 320 90" className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 70 L40 58 L80 64 L120 40 L160 48 L200 26 L240 34 L280 16 L320 22"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 70 L40 58 L80 64 L120 40 L160 48 L200 26 L240 34 L280 16 L320 22 L320 90 L0 90 Z"
        fill="url(#spark)"
      />
    </svg>
  );
}
