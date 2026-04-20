import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/products/product-card";

export function FreebiesTeaser() {
  const freebies = products.filter((item) => item.price === 0).slice(0, 3);

  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="rounded-[18px] border border-border bg-gradient-to-br from-[#230f47] to-[#101010] p-7 sm:p-10">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Start with something free.
          </h2>
          <p className="mt-3 text-sm text-text-secondary sm:text-base">
            Grab free templates and design resources before you buy premium packs.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {freebies.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link
            href="/freebies"
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md text-sm text-accent-secondary hover:underline"
          >
            See All Freebies <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
