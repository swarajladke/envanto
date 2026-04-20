import type { MetadataRoute } from "next";
import { products } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pixelforge.example";
  const staticRoutes = [
    "",
    "/products",
    "/freebies",
    "/cart",
    "/checkout",
    "/confirmation",
    "/account",
    "/about",
    "/search",
    "/404"
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    }))
  ];
}
