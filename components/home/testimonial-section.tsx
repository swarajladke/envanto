import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialSection() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">What Creators Say</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="card-frame p-6">
              <p className="mb-3 flex gap-1 text-warning">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-current" />
                ))}
              </p>
              <p className="text-sm leading-6 text-text-secondary">{item.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
