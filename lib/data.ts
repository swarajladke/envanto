import type { DownloadItem, Product, ProductCategory, Testimonial } from "@/lib/types";

export const brand = {
  name: "PixelForge",
  creator: "Aarav Mehta",
  tagline: "Premium Digital Products by Aarav Mehta"
};

export const categoryMeta: { value: ProductCategory; label: string }[] = [
  { value: "figma-templates", label: "Figma Templates" },
  { value: "graphics", label: "Graphics" },
  { value: "logos", label: "Logos" },
  { value: "website-templates", label: "Website Templates" },
  { value: "ai-images", label: "AI Images" }
];

const pexelsImage = (id: string, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const remoteImageSets: Record<string, string[]> = {
  "Nova Dashboard": ["/images/dashboard.png"],
  "Arcfolio": ["/images/portfolio.png"],
  "Lumen Kit": ["/images/landing.png"],
  "Illustration Pack": ["/images/components.png"],
  "Social Graphics": ["https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1600"],
  "Mini Dashboard Free": ["/images/dashboard.png"],
  "Commerce Template": ["/images/ecommerce.png"],
  "Finance Dashboard": ["/images/dataviz.png"],
  "Onboarding Free Pack": ["/images/auth.png"],
  "Creator Brand Kit": ["/images/hybrid.png"],
  "SaaS Illustration Vol.2": ["/images/dark.png"],
  "Startup Landing Free": ["/images/onepage.png"]
};

function buildImages(title: string, ...legacyColors: string[]) {
  void legacyColors;
  const assets = remoteImageSets[title];

  if (!assets) {
    return [
      "/images/landing.png",
      "/images/dashboard.png"
    ];
  }

  return assets;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "nova-dashboard-ui-kit",
    title: "Nova Dashboard UI Kit",
    subtitle: "2,300+ components for modern SaaS apps",
    description: "A production-ready UI kit with deep variant coverage and clean auto-layout.",
    longDescription:
      "Nova Dashboard UI Kit is crafted for solo creators and agency teams building modern products. It includes complete design tokens, component variants, chart blocks, and ready page flows across desktop and mobile.",
    category: "figma-templates",
    formats: ["Figma", "Sketch"],
    price: 49,
    originalPrice: 79,
    rating: 4.9,
    reviews: 84,
    downloads: 1240,
    badge: "BESTSELLER",
    accentFrom: "#7C3AED",
    accentTo: "#1A1A1A",
    previewLabel: "SaaS UI",
    included: ["Figma source file", "Sketch file", "Design tokens", "Documentation PDF"],
    features: [
      { title: "Auto-layout first", description: "Built on clean nested auto-layout and smart components.", icon: "LayoutDashboard" },
      { title: "Dark + light styles", description: "Ready theme palettes and semantic token layers.", icon: "MoonStar" },
      { title: "Analytics blocks", description: "Charts, KPI rows, filters, and data table patterns.", icon: "LineChart" }
    ],
    changelog: [
      { version: "v1.2", date: "2026-02-10", notes: "Added CRM pages and empty states." },
      { version: "v1.1", date: "2025-11-04", notes: "Refined typography scale and spacing tokens." },
      { version: "v1.0", date: "2025-08-22", notes: "Initial release." }
    ],
    license: "Commercial",
    images: buildImages("Nova Dashboard", "#7C3AED", "#111111")
  },
  {
    id: "p2",
    slug: "arcfolio-portfolio-template",
    title: "Arcfolio Portfolio Template",
    subtitle: "A striking personal website template for creatives",
    description: "Next.js-ready portfolio with case-study pages and subtle motion.",
    longDescription:
      "Arcfolio helps freelancers and studios launch a clean, conversion-focused portfolio. It includes homepage variants, work listing, project detail templates, and contact flows with thoughtful interactions.",
    category: "website-templates",
    formats: ["HTML", "Figma"],
    price: 39,
    rating: 4.8,
    reviews: 61,
    downloads: 930,
    badge: "NEW",
    accentFrom: "#5B21B6",
    accentTo: "#0A0A0A",
    previewLabel: "Portfolio",
    included: ["HTML template", "Figma source", "README setup guide"],
    features: [
      { title: "Performance ready", description: "Optimized sections and lazy visual blocks.", icon: "Zap" },
      { title: "Case study layouts", description: "Show process, visuals, and results clearly.", icon: "FileStack" },
      { title: "Multi-page navigation", description: "Home, work, about, blog, and contact templates.", icon: "Map" }
    ],
    changelog: [
      { version: "v1.1", date: "2026-01-14", notes: "Added blog archive and reading mode." },
      { version: "v1.0", date: "2025-09-08", notes: "Initial release." }
    ],
    license: "Commercial",
    images: buildImages("Arcfolio", "#5B21B6", "#111111")
  },
  {
    id: "p3",
    slug: "lumen-figma-web-kit",
    title: "Lumen Figma Website Kit",
    subtitle: "Landing page system for SaaS and AI products",
    description: "Fast-start wireframe to polished hero sections and conversion blocks.",
    longDescription:
      "Lumen is a high-converting web template library in Figma. Build SaaS landing pages, pricing sections, and launch pages with responsive tokens and polished typography.",
    category: "figma-templates",
    formats: ["Figma"],
    price: 29,
    originalPrice: 59,
    rating: 4.7,
    reviews: 49,
    downloads: 860,
    accentFrom: "#A855F7",
    accentTo: "#1A1A1A",
    previewLabel: "Landing Pages",
    included: ["Figma file", "Section variants", "Icon pack", "Style guide"],
    features: [
      { title: "Hero variations", description: "12 modular hero options for many product angles.", icon: "PanelTopOpen" },
      { title: "Pricing components", description: "Monthly/yearly cards and plan comparison tables.", icon: "CreditCard" },
      { title: "Team templates", description: "About, hiring, and culture sections.", icon: "Users" }
    ],
    changelog: [
      { version: "v1.2", date: "2026-03-01", notes: "Added AI product-specific section variants." },
      { version: "v1.0", date: "2025-10-06", notes: "Initial release." }
    ],
    license: "Commercial",
    images: buildImages("Lumen Kit", "#A855F7", "#1A1A1A")
  },
  {
    id: "p4",
    slug: "brand-illustration-pack-vol1",
    title: "Brand Illustration Pack Vol. 1",
    subtitle: "120 vector illustrations for web and product marketing",
    description: "Cohesive illustration scenes for onboarding, billing, and analytics.",
    longDescription:
      "A versatile collection of hand-crafted vector scenes across product, fintech, and collaboration use cases. Comes with organized layers and color style variants.",
    category: "graphics",
    formats: ["Figma", "Adobe XD"],
    price: 34,
    rating: 4.9,
    reviews: 33,
    downloads: 502,
    badge: "BESTSELLER",
    accentFrom: "#6D28D9",
    accentTo: "#0B1120",
    previewLabel: "Illustrations",
    included: ["120 vector scenes", "Color variants", "PNG exports"],
    features: [
      { title: "Editable vectors", description: "Clean groups and naming for quick edits.", icon: "PenTool" },
      { title: "Scene consistency", description: "Shared perspective and lighting style.", icon: "SunMoon" },
      { title: "Instant exports", description: "PNG files in 1x, 2x, and transparent versions.", icon: "Download" }
    ],
    changelog: [
      { version: "v1.1", date: "2026-02-03", notes: "Added 24 new fintech scenes." },
      { version: "v1.0", date: "2025-07-19", notes: "Initial release." }
    ],
    license: "Commercial",
    images: buildImages("Illustration Pack", "#6D28D9", "#0B1120")
  },
  {
    id: "p5",
    slug: "social-graphics-system",
    title: "Social Graphics System",
    subtitle: "Plug-and-play post templates for product launches",
    description: "A consistent social graphics kit for launches, updates, and promos.",
    longDescription:
      "Scale your social output with reusable visual templates for product updates, launch posts, changelogs, and testimonials. Includes typography presets and grid-safe canvases.",
    category: "graphics",
    formats: ["Figma", "Adobe XD"],
    price: 24,
    rating: 4.6,
    reviews: 28,
    downloads: 410,
    accentFrom: "#7C3AED",
    accentTo: "#312E81",
    previewLabel: "Social Kit",
    included: ["40 post templates", "Story templates", "Typography presets"],
    features: [
      { title: "Brand-ready", description: "Swap colors and fonts in seconds.", icon: "Palette" },
      { title: "Platform-safe", description: "Instagram, X, and LinkedIn dimensions.", icon: "Monitor" },
      { title: "Reusable blocks", description: "Quote, feature, and promo modules.", icon: "Blocks" }
    ],
    changelog: [
      { version: "v1.1", date: "2026-01-28", notes: "Added LinkedIn carousel templates." },
      { version: "v1.0", date: "2025-12-01", notes: "Initial release." }
    ],
    license: "Personal",
    images: buildImages("Social Graphics", "#7C3AED", "#312E81")
  },
  {
    id: "p6",
    slug: "mini-dashboard-freebie",
    title: "Mini Dashboard Freebie",
    subtitle: "Starter analytics screen for your next project",
    description: "A free UI starter to kickstart dashboard experiments.",
    longDescription:
      "The Mini Dashboard Freebie gives you a polished analytics screen with sidebar navigation, charts, and KPI cards. Perfect for personal projects and MVPs.",
    category: "figma-templates",
    formats: ["Figma"],
    price: 0,
    rating: 4.7,
    reviews: 96,
    downloads: 2300,
    badge: "FREE",
    accentFrom: "#7C3AED",
    accentTo: "#111111",
    previewLabel: "Freebie",
    included: ["Figma file", "Starter components"],
    features: [
      { title: "Quick start", description: "Open and adapt in minutes.", icon: "Rocket" },
      { title: "Clean layers", description: "Readable naming and sections.", icon: "Layers" },
      { title: "Token friendly", description: "Semantic styles for easy theming.", icon: "SwatchBook" }
    ],
    changelog: [
      { version: "v1.0", date: "2025-10-20", notes: "Initial release." }
    ],
    license: "Personal",
    images: buildImages("Mini Dashboard Free", "#7C3AED", "#111111")
  },
  {
    id: "p7",
    slug: "commerce-website-template",
    title: "Commerce Website Template",
    subtitle: "Premium storefront template with checkout flows",
    description: "A conversion-first commerce frontend for digital products.",
    longDescription:
      "Commerce Website Template includes product listing, detail pages, cart, and checkout screens with polished interactions and scalable design tokens.",
    category: "website-templates",
    formats: ["HTML", "Figma"],
    price: 59,
    originalPrice: 89,
    rating: 4.9,
    reviews: 42,
    downloads: 620,
    badge: "NEW",
    accentFrom: "#9333EA",
    accentTo: "#0F172A",
    previewLabel: "Storefront",
    included: ["HTML app", "Figma source", "Checkout flow"],
    features: [
      { title: "Catalog views", description: "Grid, list, filters, and sorting patterns.", icon: "Store" },
      { title: "Checkout screens", description: "Guest checkout and order confirmation.", icon: "ShoppingCart" },
      { title: "A11y baseline", description: "Focus rings and keyboard navigation patterns.", icon: "Accessibility" }
    ],
    changelog: [
      { version: "v1.1", date: "2026-03-16", notes: "Added wishlist and improved mobile nav." },
      { version: "v1.0", date: "2025-12-18", notes: "Initial release." }
    ],
    license: "Commercial",
    images: buildImages("Commerce Template", "#9333EA", "#0F172A")
  },
  {
    id: "p8",
    slug: "finance-dashboard-figma",
    title: "Finance Dashboard Figma",
    subtitle: "Fintech dashboard components and screens",
    description: "Detailed fintech design system for complex financial products.",
    longDescription:
      "Built for clarity under complex data density, this fintech dashboard kit includes account, transfer, card, and budgeting views with robust component states.",
    category: "figma-templates",
    formats: ["Figma"],
    price: 44,
    rating: 4.8,
    reviews: 52,
    downloads: 780,
    badge: "BESTSELLER",
    accentFrom: "#7E22CE",
    accentTo: "#1E1B4B",
    previewLabel: "Fintech",
    included: ["Figma file", "Icon set", "UI copy examples"],
    features: [
      { title: "Data-heavy layouts", description: "Table, charts, and transaction modules.", icon: "Table2" },
      { title: "State coverage", description: "Success, warning, and error screens.", icon: "ShieldCheck" },
      { title: "Ready forms", description: "Transfer and KYC form patterns.", icon: "FormInput" }
    ],
    changelog: [
      { version: "v1.2", date: "2026-02-21", notes: "Introduced budgeting module and card manager." },
      { version: "v1.0", date: "2025-09-27", notes: "Initial release." }
    ],
    license: "Commercial",
    images: buildImages("Finance Dashboard", "#7E22CE", "#1E1B4B")
  },
  {
    id: "p9",
    slug: "onboarding-illustrations-free",
    title: "Onboarding Illustration Free Pack",
    subtitle: "8 free scenes for welcome and setup flows",
    description: "Compact illustration bundle for onboarding screens and empty states.",
    longDescription:
      "A free, consistent set of onboarding scenes for dashboards, SaaS apps, and portfolio projects. Lightweight and easy to recolor.",
    category: "graphics",
    formats: ["Figma", "Sketch"],
    price: 0,
    rating: 4.8,
    reviews: 141,
    downloads: 3510,
    badge: "FREE",
    accentFrom: "#A855F7",
    accentTo: "#27272A",
    previewLabel: "Free Scenes",
    included: ["8 vectors", "PNG exports", "Color styles"],
    features: [
      { title: "Lightweight files", description: "Fast load and easy reuse.", icon: "Feather" },
      { title: "Consistent style", description: "Shared line and fill logic.", icon: "Brush" },
      { title: "Multiple formats", description: "Figma and Sketch source included.", icon: "FileType2" }
    ],
    changelog: [{ version: "v1.0", date: "2025-11-13", notes: "Initial release." }],
    license: "Personal",
    images: buildImages("Onboarding Free Pack", "#A855F7", "#27272A")
  },
  {
    id: "p10",
    slug: "creator-brand-kit",
    title: "Creator Brand Kit",
    subtitle: "Logo, social, and web brand templates",
    description: "A visual identity starter pack for creators and small studios.",
    longDescription:
      "The Creator Brand Kit gives you editable logo directions, type hierarchy templates, social cards, and website brand blocks to launch fast with consistency.",
    category: "graphics",
    formats: ["Figma", "Adobe XD"],
    price: 31,
    rating: 4.6,
    reviews: 23,
    downloads: 350,
    accentFrom: "#6B21A8",
    accentTo: "#18181B",
    previewLabel: "Brand Kit",
    included: ["Brand boards", "Social covers", "Guideline file"],
    features: [
      { title: "Logo starters", description: "Geometric marks and wordmark templates.", icon: "Gem" },
      { title: "Type systems", description: "Scales and hierarchy presets.", icon: "Type" },
      { title: "Launch assets", description: "Social and site-ready visuals.", icon: "Send" }
    ],
    changelog: [{ version: "v1.0", date: "2026-01-05", notes: "Initial release." }],
    license: "Personal",
    images: buildImages("Creator Brand Kit", "#6B21A8", "#18181B")
  },
  {
    id: "p11",
    slug: "saas-illustration-saas-vol2",
    title: "SaaS Illustration Set Vol. 2",
    subtitle: "Dark-mode scenes for modern product websites",
    description: "A stylized set of launch-quality dark illustration scenes.",
    longDescription:
      "Vol. 2 brings deeper storytelling visuals for pricing, onboarding, support, and analytics pages, optimized for dark interfaces.",
    category: "graphics",
    formats: ["Figma"],
    price: 37,
    rating: 4.8,
    reviews: 37,
    downloads: 478,
    accentFrom: "#7C3AED",
    accentTo: "#0C0A09",
    previewLabel: "Dark Scenes",
    included: ["60 vectors", "PNG previews", "Dark + light colors"],
    features: [
      { title: "Dark-UI ready", description: "Color calibrated for low-light interfaces.", icon: "Moon" },
      { title: "Web hero scenes", description: "Optimized dimensions for hero and feature rows.", icon: "Image" },
      { title: "Editable layers", description: "Simple grouping for rapid tweaks.", icon: "Layers3" }
    ],
    changelog: [{ version: "v1.0", date: "2025-12-12", notes: "Initial release." }],
    license: "Commercial",
    images: buildImages("SaaS Illustration Vol.2", "#7C3AED", "#0C0A09")
  },
  {
    id: "p12",
    slug: "startup-landing-ui-kit-free",
    title: "Startup Landing UI Kit Free",
    subtitle: "Free 10-section landing page kit",
    description: "A free launch kit with hero, features, pricing, and FAQ blocks.",
    longDescription:
      "Startup Landing UI Kit Free helps indie makers publish fast with a refined section stack and modular style controls.",
    category: "website-templates",
    formats: ["Figma", "HTML"],
    price: 0,
    rating: 4.7,
    reviews: 120,
    downloads: 4100,
    badge: "FREE",
    accentFrom: "#9333EA",
    accentTo: "#111827",
    previewLabel: "Free Landing",
    included: ["Figma file", "HTML starter", "Icons"],
    features: [
      { title: "Section library", description: "10 high-converting section types.", icon: "LibraryBig" },
      { title: "Easy customization", description: "Swap accents and typography quickly.", icon: "Paintbrush" },
      { title: "Launch checklist", description: "Simple setup notes included.", icon: "ListChecks" }
    ],
    changelog: [{ version: "v1.0", date: "2025-10-03", notes: "Initial release." }],
    license: "Personal",
    images: buildImages("Startup Landing Free", "#9333EA", "#111827")
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Maya Brooks",
    role: "Product Designer",
    text: "The quality is consistently high. I shipped a new client dashboard in under a week using these kits.",
    rating: 5
  },
  {
    id: "t2",
    name: "Rafael Kim",
    role: "Frontend Lead",
    text: "Design decisions are thoughtful and implementation-friendly. The spacing and hierarchy save tons of time.",
    rating: 5
  },
  {
    id: "t3",
    name: "Isha Nair",
    role: "Freelance Designer",
    text: "Clean files, useful docs, and frequent updates. These are my default assets for new projects.",
    rating: 5
  },
  {
    id: "t4",
    name: "Jonas Reed",
    role: "Agency Founder",
    text: "My team uses PixelForge products on almost every web build. They look premium out of the box.",
    rating: 5
  },
  {
    id: "t5",
    name: "Nico Alvarez",
    role: "No-code Builder",
    text: "Strong visual consistency and easy to adapt. The freebies alone are better than most paid packs elsewhere.",
    rating: 5
  },
  {
    id: "t6",
    name: "Sara Mitchell",
    role: "UX Consultant",
    text: "Loved the depth of components and edge-case states. Great for serious client work.",
    rating: 5
  }
];

export const downloads: DownloadItem[] = [
  {
    id: "d1",
    title: "Nova Dashboard UI Kit",
    version: "1.2.0",
    category: "ui-kits",
    format: "Figma",
    accentFrom: "#7C3AED",
    accentTo: "#111111"
  },
  {
    id: "d2",
    title: "Arcfolio Portfolio Template",
    version: "1.1.0",
    category: "website-templates",
    format: "HTML",
    accentFrom: "#5B21B6",
    accentTo: "#0A0A0A"
  },
  {
    id: "d3",
    title: "Brand Illustration Pack Vol. 1",
    version: "1.1.0",
    category: "illustrations",
    format: "Figma",
    accentFrom: "#6D28D9",
    accentTo: "#0B1120"
  }
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Freebies", href: "/freebies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/search?q=design" }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.badge || product.rating >= 4.8).slice(0, 9);
}

export function getProductsByCategory(category: ProductCategory | "all") {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(currentId: string, category: ProductCategory) {
  return products
    .filter((product) => product.id !== currentId && product.category === category)
    .slice(0, 4);
}
