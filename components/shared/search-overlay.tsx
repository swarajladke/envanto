"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { products } from "@/lib/data";
import { useUiStore } from "@/store/ui-store";

const popularSearches = ["dashboard", "figma", "landing page", "illustrations", "free"];
const recentSearches = ["checkout", "saas ui", "portfolio"];

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUiStore();
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    if (!isSearchOpen) return;
    const keyListener = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  }, [isSearchOpen, closeSearch]);

  useEffect(() => {
    if (!isSearchOpen) {
      setQuery("");
      setDebounced("");
      return;
    }
    const timeoutId = window.setTimeout(() => setDebounced(query), 300);
    return () => window.clearTimeout(timeoutId);
  }, [query, isSearchOpen]);

  const results = useMemo(() => {
    const value = debounced.trim().toLowerCase();
    if (!value) return [];
    return products
      .filter(
        (product) =>
          product.title.toLowerCase().includes(value) ||
          product.subtitle.toLowerCase().includes(value) ||
          product.category.toLowerCase().includes(value)
      )
      .slice(0, 8);
  }, [debounced]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          className="fixed inset-0 z-[80] bg-bg/92 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search products"
        >
          <div className="container-shell pt-24">
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mx-auto max-w-3xl">
              <label htmlFor="global-search" className="sr-only">
                Search products
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4 shadow-card">
                <Search className="size-5 text-text-secondary" />
                <input
                  id="global-search"
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search templates, kits, and graphics..."
                  className="w-full bg-transparent text-lg text-text-primary placeholder:text-text-muted focus:outline-none"
                />
              </div>

              <div className="mt-6 space-y-5">
                <SectionLabel>Popular searches</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search) => (
                    <Link
                      href={`/search?q=${encodeURIComponent(search)}`}
                      onClick={closeSearch}
                      key={search}
                      className="focus-ring rounded-full border border-border px-3 py-1.5 text-sm text-text-secondary transition hover:border-accent hover:text-text-primary"
                    >
                      {search}
                    </Link>
                  ))}
                </div>

                <SectionLabel>Recent</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search) => (
                    <Link
                      href={`/search?q=${encodeURIComponent(search)}`}
                      onClick={closeSearch}
                      key={search}
                      className="focus-ring rounded-full border border-border px-3 py-1.5 text-sm text-text-secondary transition hover:border-accent hover:text-text-primary"
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </div>

              {debounced && (
                <div className="mt-8">
                  <SectionLabel>Results</SectionLabel>
                  {results.length > 0 ? (
                    <div className="mt-3 grid gap-2">
                      {results.map((result) => (
                        <Link
                          key={result.id}
                          href={`/products/${result.slug}`}
                          onClick={closeSearch}
                          className="focus-ring rounded-xl border border-border bg-surface p-4 transition hover:border-border-hover"
                        >
                          <p className="font-medium">{result.title}</p>
                          <p className="mt-1 text-sm text-text-secondary">{result.subtitle}</p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-text-secondary">
                      No instant matches. Try fewer keywords.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">{children}</p>;
}
