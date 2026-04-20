import Link from "next/link";
import { LinkButton } from "@/components/shared/button";

export default function NotFound() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="card-frame mx-auto max-w-2xl p-10 text-center">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-2 font-display text-5xl font-bold">We could not find that page</h1>
          <p className="mt-3 text-sm text-text-secondary">
            Try exploring products or returning to the homepage.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <LinkButton href="/">Back Home</LinkButton>
            <Link
              href="/products"
              className="focus-ring inline-flex h-11 items-center rounded-lg border border-border px-4 text-sm text-text-primary"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
