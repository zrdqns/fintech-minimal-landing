import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const plans = [
  {
    name: "Starter",
    price: "$0",
    cadence: "+ 0.9% per payout",
    description: "For early teams testing money movement.",
    features: [
      "Up to $50k monthly volume",
      "Payouts to 40 countries",
      "Sandbox + REST API",
      "Email support",
    ],
    cta: "Start free",
    variant: "outline" as const,
  },
  {
    name: "Growth",
    price: "$499",
    cadence: "/month + 0.5% per payout",
    description: "For scaling platforms moving real volume.",
    features: [
      "Up to $2M monthly volume",
      "Payouts to 180 countries",
      "Automated reconciliation",
      "Webhooks + typed SDKs",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    variant: "accent" as const,
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "volume-based pricing",
    description: "For enterprises with treasury requirements.",
    features: [
      "Unlimited volume",
      "Dedicated FX desk",
      "SAML SSO + audit logs",
      "Custom approval flows",
      "Named solutions engineer",
    ],
    cta: "Talk to sales",
    variant: "default" as const,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Transparent, usage-based pricing
          </h2>
          <p className="mt-4 text-muted">
            No setup fees and no minimums. Pay for the volume you move.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-200 ${
                  plan.featured
                    ? "relative border-accent/30 bg-white shadow-[0_30px_70px_-40px_rgba(37,99,235,0.5)]"
                    : "border-line bg-white hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(10,10,10,0.3)]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.cadence}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{plan.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      <span className="text-graphite">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} className="mt-7 w-full">
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
