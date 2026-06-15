import {
  Globe,
  GitMerge,
  Layers,
  ShieldCheck,
  LineChart,
  Terminal,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const features = [
  {
    icon: Globe,
    title: "Global payouts",
    body: "Send to 180 countries with local rails, FX at interbank rates, and one settlement endpoint.",
  },
  {
    icon: GitMerge,
    title: "Automated reconciliation",
    body: "Match payments to invoices and ledgers in real time. Close the books without spreadsheets.",
  },
  {
    icon: Layers,
    title: "Programmable ledger",
    body: "Double-entry accounts you control by API. Hold, split, and route balances with full history.",
  },
  {
    icon: ShieldCheck,
    title: "Risk and fraud controls",
    body: "Velocity rules, allowlists, and approvals built in. Every transfer is signed and audited.",
  },
  {
    icon: LineChart,
    title: "Reporting that ties out",
    body: "Cash position, exposure, and fees in one view. Export to your warehouse on a schedule.",
  },
  {
    icon: Terminal,
    title: "Developer-first API",
    body: "Typed SDKs, idempotent requests, and webhooks. Go from sandbox to production in a day.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Platform</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            One API for money movement
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Replace a stack of processors, spreadsheets, and internal tools with a
            single programmable platform your team and your engineers can trust.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#d6dce6] hover:shadow-[0_18px_40px_-28px_rgba(10,10,10,0.35)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-mist text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
