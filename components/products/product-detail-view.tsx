"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Link2,
  Linkedin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter
} from "lucide-react";
import { getRelatedProducts } from "@/lib/data";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/shared/badge";
import { Button, LinkButton } from "@/components/shared/button";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { ProductCard } from "@/components/products/product-card";

type TabKey = "overview" | "features" | "changelog" | "reviews";

const tabOptions: { key: TabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "features", label: "Features" },
  { key: "changelog", label: "Changelog" },
  { key: "reviews", label: "Reviews" }
];

export function ProductDetailView({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [includeOpen, setIncludeOpen] = useState(true);
  const addItem = useCartStore((state) => state.addItem);
  const related = getRelatedProducts(product.id, product.category);

  const reviewRows = useMemo(
    () =>
      [
        {
          id: "r1",
          name: "Aisha Rana",
          rating: 5,
          text: "Incredibly clean files and thoughtful edge-case handling."
        },
        {
          id: "r2",
          name: "Liam Foster",
          rating: 5,
          text: "Helped me ship client work much faster without quality trade-offs."
        },
        {
          id: "r3",
          name: "Kei Yamamoto",
          rating: 4,
          text: "Great value. Would love more format variants in future updates."
        }
      ].slice(0, Math.max(2, Math.min(5, Math.round(product.reviews / 30)))),
    [product.reviews]
  );

  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
              <Image
                src={activeImage}
                alt={`${product.title} main preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-6">
              {product.images.slice(0, 6).map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`focus-ring relative aspect-[4/3] overflow-hidden rounded-xl border ${activeImage === image ? "border-accent" : "border-border"}`}
                  aria-label={`View preview image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} preview thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
            <div className="mt-4">
              <LinkButton href={`/search?q=${encodeURIComponent(product.title)}`} variant="secondary">
                Live Preview <ExternalLink className="ml-2 size-4" />
              </LinkButton>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <p className="text-sm text-text-secondary">
              <Link href="/products" className="focus-ring rounded-md hover:text-text-primary">
                Products
              </Link>{" "}
              &gt;{" "}
              <span className="capitalize">{product.category.replace("-", " ")}</span>
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight">{product.title}</h1>
            <p className="mt-2 flex items-center gap-1 text-sm text-text-secondary">
              <Star className="size-4 fill-current text-warning" />
              {product.rating.toFixed(1)} | {product.reviews} reviews
            </p>
            <p className="mt-4 flex items-end gap-2">
              <span className="font-display text-4xl font-bold">{formatPrice(product.price)}</span>
              {typeof product.originalPrice === "number" && (
                <span className="text-sm text-text-muted line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </p>
            <p className="mt-4 max-w-xl text-sm text-text-secondary">{product.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.formats.map((format) => (
                <Badge key={format}>{format}</Badge>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-border bg-surface p-4">
              <button
                type="button"
                onClick={() => setIncludeOpen((prev) => !prev)}
                className="focus-ring flex w-full items-center justify-between rounded-md text-left"
              >
                <span className="text-sm font-medium">What&apos;s Included</span>
                {includeOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
              </button>
              {includeOpen && (
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  {product.included.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="size-4 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 rounded-xl border border-border bg-surface p-4">
              <p className="text-sm font-medium">License</p>
              <p className="mt-1 text-sm text-text-secondary">
                {product.license} license with usage in unlimited personal and client projects.
              </p>
            </div>

            <div className="mt-6 grid gap-2">
              <Button
                size="lg"
                onClick={() => {
                  addItem(product.id);
                  window.location.href = "/checkout";
                }}
              >
                Buy Now - {formatPrice(product.price)}
              </Button>
              <Button size="lg" variant="secondary" onClick={() => addItem(product.id)}>
                Add to Cart
              </Button>
            </div>

            <p className="mt-4 text-sm text-text-secondary">
              Instant download | Lifetime access | Free updates
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <ShareButton label="Share on X">
                <Twitter className="size-4" />
              </ShareButton>
              <ShareButton label="Share on LinkedIn">
                <Linkedin className="size-4" />
              </ShareButton>
              <ShareButton
                label="Copy product link"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
              >
                <Link2 className="size-4" />
              </ShareButton>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap gap-2 border-b border-border pb-3">
            {tabOptions.map((tab) => (
              <button
                type="button"
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm ${activeTab === tab.key ? "border-accent bg-accent text-white" : "border-border text-text-secondary"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === "overview" && (
              <div className="space-y-4 text-sm leading-7 text-text-secondary">
                <p>{product.longDescription}</p>
                <p>
                  This pack is designed to be practical, fast to adapt, and easy to maintain in real projects.
                  Every screen and component follows a clear hierarchy so implementation stays smooth.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {product.features.map((feature) => (
                    <article key={feature.title} className="card-frame p-4">
                      <Sparkles className="size-5 text-accent" />
                      <h3 className="mt-3 font-medium text-text-primary">{feature.title}</h3>
                      <p className="mt-1 text-sm text-text-secondary">{feature.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "features" && (
              <div className="grid gap-4 md:grid-cols-2">
                {product.features.map((feature) => (
                  <article key={feature.title} className="card-frame p-5">
                    <ShieldCheck className="size-5 text-accent" />
                    <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{feature.description}</p>
                  </article>
                ))}
              </div>
            )}
            {activeTab === "changelog" && (
              <div className="space-y-3">
                {product.changelog.map((item) => (
                  <article key={item.version} className="card-frame p-4">
                    <p className="font-mono text-sm text-accent">{item.version}</p>
                    <p className="text-xs text-text-muted">{item.date}</p>
                    <p className="mt-2 text-sm text-text-secondary">{item.notes}</p>
                  </article>
                ))}
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-4">
                {reviewRows.map((review) => (
                  <article key={review.id} className="card-frame p-5">
                    <p className="mb-2 flex gap-1 text-warning">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="size-4 fill-current" />
                      ))}
                    </p>
                    <p className="text-sm text-text-secondary">{review.text}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm font-medium">
                      <MessageSquare className="size-4 text-accent" />
                      {review.name}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-3xl font-bold tracking-tight">You May Also Like</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

function ShareButton({
  children,
  label,
  onClick
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition hover:border-border-hover hover:text-text-primary"
    >
      {children}
    </button>
  );
}
