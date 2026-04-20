import type { Metadata } from "next";
import { products } from "@/lib/data";
import { ProductCatalog } from "@/components/products/product-catalog";

export const metadata: Metadata = {
  title: "Freebies",
  description: "Free design resources with no strings attached."
};

export default function FreebiesPage() {
  const freebies = products.filter((item) => item.price === 0);

  return (
    <>
      <section className="section-gap pb-2">
        <div className="container-shell">
          <div className="rounded-[18px] border border-border bg-gradient-to-br from-[#2e1065] to-[#101010] p-7 sm:p-10">
            <h1 className="font-display text-5xl font-bold tracking-tight">Free Design Resources. No strings attached.</h1>
            <p className="mt-3 max-w-3xl text-sm text-text-secondary sm:text-base">
              Download free templates, UI blocks, and illustration packs. Optionally share your email for future updates.
            </p>
            <form className="mt-6 flex max-w-xl flex-col gap-2 sm:flex-row">
              <label htmlFor="freebie-email" className="sr-only">
                Enter email to unlock downloads
              </label>
              <input
                id="freebie-email"
                type="email"
                placeholder="Enter your email to download (optional)"
                className="focus-ring h-11 flex-1 rounded-[10px] border border-border bg-surface px-3 text-sm placeholder:text-text-muted"
              />
              <button
                type="button"
                className="focus-ring h-11 rounded-lg bg-accent px-5 text-sm font-medium text-white transition hover:brightness-110"
              >
                Unlock Freebies
              </button>
            </form>
          </div>
        </div>
      </section>
      <ProductCatalog sourceProducts={freebies} heading="All Freebies" description="Curated free resources for designers and developers." />
    </>
  );
}
