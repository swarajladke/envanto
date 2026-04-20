"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { products } from "@/lib/data";
import { Button } from "@/components/shared/button";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { useToastStore } from "@/store/toast-store";

export function CheckoutPageView() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCartStore();
  const pushToast = useToastStore((state) => state.push);
  const [processing, setProcessing] = useState(false);
  const subtotalValue = subtotal();
  const tax = subtotalValue * 0.08;
  const total = subtotalValue + tax;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) {
      pushToast("Your cart is empty", "danger");
      return;
    }
    setProcessing(true);
    window.setTimeout(() => {
      clearCart();
      router.push("/confirmation");
    }, 800);
  }

  return (
    <section className="section-gap">
      <div className="container-shell">
        <ol className="mb-8 flex items-center gap-3 text-sm text-text-secondary">
          <li className="rounded-full border border-border px-3 py-1">Cart</li>
          <li>-&gt;</li>
          <li className="rounded-full border border-accent bg-accent/20 px-3 py-1 text-text-primary">Checkout</li>
          <li>-&gt;</li>
          <li className="rounded-full border border-border px-3 py-1">Confirmation</li>
        </ol>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} className="card-frame space-y-5 p-6">
            <h1 className="font-display text-4xl font-bold">Checkout</h1>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First Name" id="first-name" required />
              <Field label="Last Name" id="last-name" required />
              <Field label="Email" id="email" type="email" className="sm:col-span-2" required />
              <Field label="Country" id="country" className="sm:col-span-2" required />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-text-primary">Payment Details</h2>
              <div className="mt-3 rounded-xl border border-border bg-surface-elevated p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Card Number" id="card" className="sm:col-span-2" placeholder="4242 4242 4242 4242" required />
                  <Field label="Expiry" id="expiry" placeholder="MM/YY" required />
                  <Field label="CVC" id="cvc" placeholder="123" required />
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full" disabled={processing}>
              {processing ? "Processing..." : "Place Order"}
            </Button>
            <p className="text-xs text-text-muted">Guest checkout enabled. No account required.</p>
          </form>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="card-frame space-y-4 p-5">
              <h2 className="font-display text-3xl font-bold">Order Summary</h2>
              <div className="space-y-3">
                {items.map((item) => {
                  const product = products.find((entry) => entry.id === item.productId);
                  if (!product) return null;
                  return (
                    <article key={item.productId} className="flex items-center gap-3 rounded-lg border border-border p-2">
                      <div className="relative h-14 w-14 overflow-hidden rounded-md border border-border">
                        <Image
                          src={product.images[0]}
                          alt={`${product.title} thumbnail`}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{product.title}</p>
                        <p className="text-xs text-text-secondary">Qty {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">{formatPrice(product.price * item.quantity)}</p>
                    </article>
                  );
                })}
              </div>
              <Summary label="Subtotal" value={formatPrice(subtotalValue)} />
              <Summary label="Tax" value={formatPrice(tax)} />
              <Summary label="Total" value={formatPrice(total)} emphasis />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  className,
  required = false
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1 block text-sm text-text-secondary">{label}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="focus-ring h-11 w-full rounded-[10px] border border-border bg-surface-elevated px-3 text-sm text-text-primary placeholder:text-text-muted"
      />
    </label>
  );
}

function Summary({ label, value, emphasis = false }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-secondary">{label}</span>
      <span className={emphasis ? "font-display text-2xl font-bold" : "font-medium"}>{value}</span>
    </div>
  );
}
