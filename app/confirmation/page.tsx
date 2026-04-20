import type { Metadata } from "next";
import Link from "next/link";
import { Download, KeyRound } from "lucide-react";
import { Button, LinkButton } from "@/components/shared/button";

export const metadata: Metadata = {
  title: "Order Confirmation",
  description: "Your order is complete. Download your products instantly."
};

export default function ConfirmationPage() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="card-frame mx-auto max-w-3xl px-6 py-14 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/20 text-success">
            <svg viewBox="0 0 24 24" className="size-10" aria-hidden="true">
              <path
                fill="currentColor"
                d="M9.5 16.2 5.8 12.5l-1.4 1.4 5.1 5.1L20 8.5l-1.4-1.4z"
              />
            </svg>
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight">Your order is confirmed!</h1>
          <p className="mt-3 text-sm text-text-secondary">
            Download links are active now and also sent to your email.
          </p>
          <div className="mt-8 space-y-3">
            <Button size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 size-5" />
              Download Assets
            </Button>
            <div className="mx-auto max-w-md rounded-xl border border-border bg-surface p-3 text-left font-mono text-sm text-text-secondary">
              <p className="flex items-center gap-2">
                <KeyRound className="size-4 text-accent" />
                License Key
              </p>
              <p className="mt-1 text-text-primary">PXLF-7A3D-29QK-1MNE</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href="/products" variant="secondary">
              Continue Shopping
            </LinkButton>
            <LinkButton href="/account">Create Account</LinkButton>
          </div>
          <p className="mt-4 text-xs text-text-muted">
            Create an account to access downloads and invoices anytime.
          </p>
          <Link href="/account" className="focus-ring mt-3 inline-flex rounded-md text-sm text-accent hover:underline">
            Go to Account
          </Link>
        </div>
      </div>
    </section>
  );
}
