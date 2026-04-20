import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/product-catalog";
import { categoryMeta, products } from "@/lib/data";
import type { ProductCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Motion Graphics Video Templates",
  description: "Explore an Envato-style marketplace catalog for templates, graphics, UI kits, and digital assets."
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
      heading="After Effects Video Templates"
      description="Professional templates and assets locally After Effects templates and After Effects. Customize your projects with fully editable After Effects templates, elements, and other AE templates."
      marketplaceMode
    />
  );
}
