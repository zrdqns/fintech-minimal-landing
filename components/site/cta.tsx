import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CTA() {
  return (
    <section className="px-4 pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink px-6 py-20 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(40rem 20rem at 50% -10%, rgba(37,99,235,0.5), transparent 60%), radial-gradient(30rem 16rem at 80% 120%, rgba(13,148,136,0.4), transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Move money like an engineer
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-pretty text-white/65">
                Spin up a sandbox in minutes. Ship your first payout today, with no
                contract and no setup fee.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="accent" size="lg" className="group">
                  Start free
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
                <Button
                  size="lg"
                  className="bg-white/10 text-white backdrop-blur hover:bg-white/15"
                >
                  Read the docs
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
