import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCatalog } from "@/components/products/product-catalog";
import { ProductCard } from "@/components/products/product-card";

export const metadata: Metadata = {
  title: "Search",
  description: "Search premium digital products by keyword, category, format, or use case."
};

export default function SearchPage({
  searchParams
}: {
  searchParams?: { q?: string };
}) {
  const query = searchParams?.q?.trim() ?? "";
  const popular = products.slice(0, 4);

  return (
    <>
      <section className="section-gap pb-4">
        <div className="container-shell">
          <h1 className="font-display text-5xl font-bold tracking-tight">Search</h1>
          <p className="mt-3 text-sm text-text-secondary">
            {query ? `Results for "${query}"` : "Search templates, UI kits, graphics, and freebies."}
          </p>
        </div>
      </section>
      <ProductCatalog
        sourceProducts={products}
        initialSearch={query}
        heading={query ? `Search results for "${query}"` : "All Search Results"}
        description="Use filters to narrow down your results."
      />
      <section className="section-gap pt-2">
        <div className="container-shell">
          <h2 className="font-display text-3xl font-bold tracking-tight">Popular products</h2>
          <p className="mt-2 text-sm text-text-secondary">
            No perfect match? Try these top picks.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {popular.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link href="/products" className="focus-ring mt-5 inline-flex rounded-md text-sm text-accent hover:underline">
            Browse full catalog
          </Link>
        </div>
      </section>
    </>
  );
}
