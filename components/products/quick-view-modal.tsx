"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { products } from "@/lib/data";
import { Button } from "@/components/shared/button";
import { Badge } from "@/components/shared/badge";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { useUiStore } from "@/store/ui-store";

export function QuickViewModal() {
  const { isQuickViewOpen, closeQuickView, quickViewProductId } = useUiStore();
  const addItem = useCartStore((state) => state.addItem);
  const product = products.find((entry) => entry.id === quickViewProductId);

  return (
    <AnimatePresence>
      {isQuickViewOpen && product && (
        <motion.div
          className="fixed inset-0 z-[82] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Quick view product details"
        >
          <motion.div
            className="w-full max-w-4xl overflow-hidden rounded-[18px] border border-border bg-surface-elevated shadow-modal"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <p className="font-medium">Quick View</p>
              <button
                type="button"
                onClick={closeQuickView}
                aria-label="Close modal"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition hover:border-border-hover"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative min-h-[280px]">
                <Image
                  src={product.images[0]}
                  alt={`${product.title} preview image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <Badge tone="accent">{product.category.replace("-", " ")}</Badge>
                <h3 className="font-display text-3xl font-bold">{product.title}</h3>
                <p className="text-sm text-text-secondary">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.formats.map((format) => (
                    <Badge key={format}>{format}</Badge>
                  ))}
                </div>
                <p className="font-display text-3xl font-bold">{formatPrice(product.price)}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <Button
                    onClick={() => {
                      addItem(product.id);
                      closeQuickView();
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="secondary" onClick={closeQuickView}>
                    Close
                  </Button>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  onClick={closeQuickView}
                  className="focus-ring inline-flex rounded-md text-sm text-accent hover:underline"
                >
                  View full details
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
