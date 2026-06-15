import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";

const stats = [
  { value: 48, prefix: "$", suffix: "B+", label: "Processed annually" },
  { value: 180, suffix: "", label: "Countries supported" },
  { value: 99.99, suffix: "%", decimals: 2, label: "Uptime SLA" },
  { value: 2400, suffix: "+", label: "Finance teams" },
];

export function Stats() {
  return (
    <section id="stats" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-line bg-gradient-to-b from-mist to-white px-6 py-14 sm:px-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} className="text-center">
                  <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    <Counter
                      to={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
