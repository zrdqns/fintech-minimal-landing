import { Reveal } from "@/components/motion/reveal";

const testimonials = [
  {
    quote:
      "We replaced three payout providers and a quarter-end reconciliation nightmare with one Numera integration. Close went from nine days to two.",
    name: "Priya Raman",
    role: "VP Finance, Arcadia",
  },
  {
    quote:
      "The programmable ledger let us model marketplace balances exactly how our product works. The API is the cleanest payments API our engineers have used.",
    name: "Marcus Feld",
    role: "Staff Engineer, Helio",
  },
  {
    quote:
      "Settlement is genuinely real time and the reporting ties out to the cent. Our auditors stopped asking for manual exports.",
    name: "Sofia Castellano",
    role: "Controller, Stride",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Customers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for teams that move money daily
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  className="text-accent/30"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M10 7H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H5v2h1a4 4 0 0 0 4-4V7Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-graphite">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-mist text-sm font-semibold text-ink">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
