import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/product-catalog";
import { categoryMeta, products } from "@/lib/data";
import type { ProductCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Premium UI Kits & Website Templates",
  description: "Browse the PixelForge collection of high-end Figma templates, dashboard kits, and professional design systems."
};

export default function ProductsPage({
  searchParams
}: {
  searchParams?: { category?: string };
}) {
  const categoryParam = searchParams?.category;
  const validCategory = categoryMeta.find((entry) => entry.value === categoryParam)?.value as
    | ProductCategory
    | undefined;
  const defaultCategories = validCategory ? [validCategory] : [];

  return (
    <ProductCatalog
      sourceProducts={products}
      defaultCategories={defaultCategories}
      heading="Premium UI & Website Templates"
      description="Accelerate your workflow with handcrafted Figma kits, landing pages, and comprehensive design systems built for world-class products."
      marketplaceMode
    />
  );
}
