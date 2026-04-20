import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/shared/button";

export function CollectionBanner() {
  return (
    <section className="section-gap pt-8">
      <div className="container-shell">
        <article className="noise-overlay relative overflow-hidden rounded-[18px] border border-border bg-gradient-to-br from-[#2e1065] via-[#1f1534] to-[#111111] p-7 shadow-card sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-text-secondary">Featured Collection</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Figma UI Kit Collection
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-text-secondary sm:text-base">
                A curated set of modular SaaS, fintech, and marketing UI systems built for fast product delivery.
              </p>
              <div className="mt-6">
                <LinkButton href="/products?category=ui-kits" variant="secondary">
                  Explore Collection
                </LinkButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="drift rounded-xl border border-white/10 bg-gradient-to-br from-accent/70 to-transparent p-4">
                <p className="text-sm text-white/80">UI Foundations</p>
                <p className="mt-10 text-lg font-semibold text-white">2,000+ Components</p>
              </div>
              <div className="drift rounded-xl border border-white/10 bg-gradient-to-br from-white/20 to-transparent p-4 [animation-delay:.6s]">
                <p className="text-sm text-white/80">Page Flows</p>
                <p className="mt-10 text-lg font-semibold text-white">120 Layouts</p>
              </div>
              <div className="drift col-span-2 rounded-xl border border-white/10 bg-black/30 p-4 [animation-delay:1.2s]">
                <p className="text-sm text-white/80">Includes dark mode + tokens + docs</p>
                <Link
                  href="/products"
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm text-white transition hover:text-accent-secondary"
                >
                  View All Products <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
