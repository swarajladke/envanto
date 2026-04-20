"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/shared/button";
import { products } from "@/lib/data";

export function HeroSection() {
  const previewProducts = products.slice(0, 3);

  return (
    <section className="hero-mesh noise-overlay relative flex min-h-screen items-center overflow-hidden border-b border-border pt-24">
      <div className="container-shell grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-balance font-display text-[clamp(2.65rem,7vw,5.7rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            Premium Design Assets.
            <br />
            Built for Creators.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 max-w-2xl text-balance text-base text-text-secondary sm:text-lg"
          >
            Templates, UI kits, Figma files, and graphics crafted with obsessive detail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <LinkButton href="/products" size="lg">
              Browse All Products
            </LinkButton>
            <LinkButton href="/freebies" variant="ghost" size="lg">
              See Free Stuff
            </LinkButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-5 rounded-2xl border border-border bg-surface/70 p-4 text-sm text-text-secondary backdrop-blur-sm"
          >
            <span>
              <strong className="text-text-primary">120+</strong> Products
            </span>
            <span>
              <strong className="text-text-primary">4,800+</strong> Downloads
            </span>
            <span>
              <strong className="text-text-primary">5-star</strong> Average Rating
            </span>
          </motion.div>
        </div>

        <div className="relative hidden h-[580px] lg:block">
          {previewProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 + index * 0.12 }}
              className="card-frame drift absolute w-[72%] overflow-hidden rounded-2xl"
              style={{
                top: `${index * 26}%`,
                right: `${index * 8}%`,
                animationDelay: `${index * 0.7}s`
              }}
            >
              <div
                className="aspect-[4/3] w-full"
                style={{
                  background: `linear-gradient(130deg, ${product.accentFrom}, ${product.accentTo})`
                }}
              />
              <div className="space-y-1 p-4">
                <p className="text-sm text-text-secondary">{product.previewLabel}</p>
                <p className="font-medium">{product.title}</p>
              </div>
            </motion.article>
          ))}
          <Link
            href="/products"
            className="focus-ring absolute bottom-5 right-5 rounded-full border border-border bg-surface/90 px-4 py-2 text-sm text-text-secondary transition hover:text-text-primary"
          >
            Explore Store
          </Link>
        </div>
      </div>
    </section>
  );
}
