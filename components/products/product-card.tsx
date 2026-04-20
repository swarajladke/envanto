"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { categoryMeta } from "@/lib/data";
import { Badge } from "@/components/shared/badge";
import { cn, formatPrice } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";

export function ProductCard({
  product,
  priority = false
}: {
  product: Product;
  priority?: boolean;
}) {
  const openQuickView = useUiStore((state) => state.openQuickView);
  const category = categoryMeta.find((entry) => entry.value === product.category)?.label ?? product.category;

  return (
    <motion.article
      layout
      className="card-frame group relative overflow-hidden transition"
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={`${product.title} preview image`}
          fill
          priority={priority}
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <Badge
            className={cn(
              "absolute right-3 top-3 border-0",
              product.badge === "FREE"
                ? "bg-success text-white"
                : product.badge === "NEW"
                  ? "bg-info text-white"
                  : "bg-accent text-white"
            )}
          >
            {product.badge}
          </Badge>
        )}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            onClick={() => openQuickView(product.id)}
            className="focus-ring pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-surface px-4 py-2 text-sm font-medium text-text-primary"
          >
            <Eye className="size-4" />
            Quick View
          </button>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <Badge>{category}</Badge>
        <Link href={`/products/${product.slug}`} className="focus-ring inline-block rounded-md">
          <h3 className="line-clamp-2 text-lg font-semibold text-text-primary">{product.title}</h3>
        </Link>
        <p className="line-clamp-1 text-sm text-text-secondary">{product.subtitle}</p>
        <p className="flex items-center gap-1 text-sm text-text-secondary">
          <Star className="size-4 fill-current text-warning" />
          {product.rating.toFixed(1)}
          <span className="text-text-muted">({product.reviews} reviews)</span>
        </p>
        <p className="flex items-end gap-2">
          <span className="font-display text-2xl font-bold text-text-primary">{formatPrice(product.price)}</span>
          {typeof product.originalPrice === "number" && (
            <span className="text-sm text-text-muted line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </p>
      </div>
    </motion.article>
  );
}
