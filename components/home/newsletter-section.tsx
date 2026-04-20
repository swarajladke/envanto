"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/shared/button";
import { useToastStore } from "@/store/toast-store";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const push = useToastStore((state) => state.push);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      push("Please enter a valid email", "danger");
      return;
    }
    push("Subscribed successfully", "success");
    setEmail("");
  }

  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="card-frame mx-auto max-w-4xl p-8 text-center md:p-10">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Get notified when new products drop.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-secondary sm:text-base">
            New templates, new bundles, and free resources straight to your inbox.
          </p>
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@studio.com"
              className="focus-ring h-12 flex-1 rounded-[10px] border border-border bg-surface px-4 text-sm text-text-primary placeholder:text-text-muted"
              required
            />
            <Button size="md" className="h-12">
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-text-muted">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
