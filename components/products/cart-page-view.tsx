"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { products } from "@/lib/data";
import { Button, LinkButton } from "@/components/shared/button";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";

export function CartPageView() {
  const { items, incrementItem, decrementItem, removeItem, subtotal } = useCartStore();
  const currentSubtotal = subtotal();
  const tax = currentSubtotal * 0.08;
  const total = currentSubtotal + tax;

  if (items.length === 0) {
    return (
      <section className="section-gap">
        <div className="container-shell">
          <div className="card-frame mx-auto max-w-3xl px-6 py-16 text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/15" />
            <h1 className="font-display text-4xl font-bold">Your cart is empty</h1>
            <p className="mt-3 text-sm text-text-secondary">Start by adding products from the catalog.</p>
            <LinkButton href="/products" className="mt-6">
              Browse Products
            </LinkButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-gap">
      <div className="container-shell">
        <h1 className="font-display text-5xl font-bold tracking-tight">Your Cart</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            {items.map((item) => {
              const product = products.find((entry) => entry.id === item.productId);
              if (!product) return null;

              return (
                <article key={item.productId} className="card-frame flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-border">
                    <Image
                      src={product.images[0]}
                      alt={`${product.title} thumbnail`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1">
                    <Link
                      href={`/products/${product.slug}`}
                      className="focus-ring rounded-md font-medium text-text-primary hover:underline"
                    >
                      {product.title}
                    </Link>
                    <p className="mt-1 text-sm text-text-secondary">{product.formats.join(" | ")}</p>
                    <p className="mt-1 text-sm font-medium">{formatPrice(product.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => decrementItem(product.id)}
                      className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => incrementItem(product.id)}
                      className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <p className="min-w-[80px] text-right font-medium">
                    {formatPrice(item.quantity * product.price)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    aria-label="Remove item"
                    className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-secondary"
                  >
                    <X className="size-4" />
                  </button>
                </article>
              );
            })}
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="card-frame space-y-4 p-5">
              <h2 className="font-display text-3xl font-bold">Order Summary</h2>
              <SummaryRow label="Subtotal" value={formatPrice(currentSubtotal)} />
              <div>
                <label htmlFor="discount" className="mb-2 block text-sm text-text-secondary">
                  Discount code
                </label>
                <div className="flex gap-2">
                  <input
                    id="discount"
                    placeholder="ENTER-CODE"
                    className="focus-ring h-10 flex-1 rounded-[10px] border border-border bg-surface-elevated px-3 text-sm"
                  />
                  <Button variant="secondary" size="sm">
                    Apply
                  </Button>
                </div>
              </div>
              <SummaryRow label="Tax" value={formatPrice(tax)} />
              <SummaryRow label="Total" value={formatPrice(total)} emphasis />
              <LinkButton href="/checkout" className="mt-2 w-full justify-center" size="lg">
                Proceed to Checkout
              </LinkButton>
              <p className="text-xs text-text-muted">Secure checkout | Powered by Stripe</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ label, value, emphasis = false }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-secondary">{label}</span>
      <span className={emphasis ? "font-display text-2xl font-bold text-text-primary" : "font-medium text-text-primary"}>
        {value}
      </span>
    </div>
  );
}
