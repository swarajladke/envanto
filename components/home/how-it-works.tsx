import { Download, ShoppingBag, Sparkles } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse & choose your product",
    description: "Explore curated templates, UI kits, and graphics built for speed.",
    icon: ShoppingBag
  },
  {
    id: 2,
    title: "One-time purchase or bundle",
    description: "Simple checkout with clear licensing and transparent pricing.",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Instant download, lifetime access",
    description: "Get files right away with free updates on supported products.",
    icon: Download
  }
];

export function HowItWorks() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">How It Works</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="card-frame p-6">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <step.icon className="size-7" />
              </div>
              <h3 className="font-medium text-text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
