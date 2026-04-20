export type ProductCategory =
  | "website-templates"
  | "ui-kits"
  | "figma-templates"
  | "graphics"
  | "illustrations"
  | "free";

export type ProductFormat = "Figma" | "Adobe XD" | "HTML" | "Sketch";

export type ProductBadge = "NEW" | "BESTSELLER" | "FREE";

export type LicenseType = "Personal" | "Commercial";

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProductCategory;
  formats: ProductFormat[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  downloads: number;
  badge?: ProductBadge;
  accentFrom: string;
  accentTo: string;
  previewLabel: string;
  included: string[];
  features: { title: string; description: string; icon: string }[];
  changelog: { version: string; date: string; notes: string }[];
  license: LicenseType;
  images: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
};

export type DownloadItem = {
  id: string;
  title: string;
  version: string;
  category: ProductCategory;
  format: ProductFormat;
  accentFrom: string;
  accentTo: string;
};
