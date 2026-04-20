"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { categoryMeta, getFeaturedProducts } from "@/lib/data";
import type { ProductCategory } from "@/lib/types";
import { ProductCard } from "@/components/products/product-card";
import { CategoryStrip } from "@/components/home/category-strip";

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const sectionRef = useRef<HTMLElement | null>(null);
  const featured = getFeaturedProducts();

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return featured;
    return featured.filter((product) => product.category === activeCategory);
  }, [activeCategory, featured]);

  function handleSelect(category: ProductCategory | "all") {
    setActiveCategory(category);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section ref={sectionRef} className="section-gap pt-6">
      <div className="container-shell">
        <CategoryStrip active={activeCategory} onSelect={handleSelect} />
        <div className="mb-8 mt-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Featured Products</h2>
            {activeCategory !== "all" && (
              <p className="mt-2 text-sm text-text-secondary">
                Filtered by{" "}
                {categoryMeta.find((entry) => entry.value === activeCategory)?.label ?? activeCategory}
              </p>
            )}
          </div>
          <Link href="/products" className="focus-ring rounded-md text-sm text-accent hover:underline">
            View All
          </Link>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.18) }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
