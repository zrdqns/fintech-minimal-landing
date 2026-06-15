const logos = [
  "Northwind",
  "Arcadia",
  "Helio",
  "Bytemark",
  "Vela Labs",
  "Stride",
  "Cleo",
  "Forma",
];

export function Logos() {
  return (
    <section className="border-y border-line bg-mist/60 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Trusted by finance and platform teams at
        </p>
        <div className="marquee-mask mt-7 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="select-none text-lg font-semibold tracking-tight text-graphite/55"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
