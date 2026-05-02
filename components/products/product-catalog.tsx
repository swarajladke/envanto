"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BookmarkPlus, ChevronDown, CircleUser, Copy, Download, Globe, Moon, Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { categoryMeta } from "@/lib/data";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { Button } from "@/components/shared/button";
import { formatPrice } from "@/lib/utils";
import type { Product, ProductCategory, ProductFormat } from "@/lib/types";

const formats: ProductFormat[] = ["Figma", "Adobe XD", "HTML", "Sketch"];

type SortValue = "newest" | "bestseller" | "price-low" | "price-high";
type PriceMode = "all" | "free" | "paid";

const PAGE_SIZE = 24;
const MARKETPLACE_PAGE_SIZE = 33;

const marketplaceFooterColumns = [
  {
    title: "Discover",
    links: ["Stock Video", "Video Templates", "Royalty-Free Music", "Stock Photos", "Fonts", "Popular Searches"]
  },
  {
    title: "License & User Terms",
    links: ["License Terms", "Terms & Conditions", "Privacy Policy", "Fair Use Policy", "Cookies", "Cookie Settings"]
  },
  {
    title: "Resources",
    links: ["Help Center", "Discover Blog", "Design", "Marketing", "Web Design", "Become an Affiliate"]
  },
  {
    title: "About Us",
    links: ["Who We Are", "Our Products", "Our Purpose", "Authors", "Become an Author", "Author Help Center"]
  }
];

export function ProductCatalog({
  sourceProducts,
  defaultCategories = [],
  initialSearch = "",
  heading,
  description,
  marketplaceMode = false
}: {
  sourceProducts: Product[];
  defaultCategories?: ProductCategory[];
  initialSearch?: string;
  heading?: string;
  description?: string;
  marketplaceMode?: boolean;
}) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>(defaultCategories);
  const [selectedFormats, setSelectedFormats] = useState<ProductFormat[]>([]);
  const [priceMode, setPriceMode] = useState<PriceMode>("all");
  const [maxPrice, setMaxPrice] = useState(100);
  const [sortBy, setSortBy] = useState<SortValue>("newest");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    setPage(1);
    setLoading(true);
    const timeoutId = window.setTimeout(() => setLoading(false), 220);
    return () => window.clearTimeout(timeoutId);
  }, [search, selectedCategories, selectedFormats, priceMode, maxPrice, sortBy]);

  const filteredProducts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();
    let result = sourceProducts.filter((product) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      if (selectedFormats.length > 0 && !product.formats.some((format) => selectedFormats.includes(format))) {
        return false;
      }
      if (priceMode === "free" && product.price !== 0) return false;
      if (priceMode === "paid" && product.price === 0) return false;
      if (product.price > maxPrice) return false;
      if (
        searchValue &&
        !(
          product.title.toLowerCase().includes(searchValue) ||
          product.subtitle.toLowerCase().includes(searchValue) ||
          product.category.toLowerCase().includes(searchValue)
        )
      ) {
        return false;
      }
      return true;
    });

    if (sortBy === "bestseller") {
      result = [...result].sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else {
      result = [...result].sort((a, b) => b.downloads - a.downloads);
    }

    return result;
  }, [sourceProducts, search, selectedCategories, selectedFormats, priceMode, maxPrice, sortBy]);

  const galleryItems = useMemo(
    () =>
      filteredProducts.flatMap((product) =>
        product.images.map((image, imageIndex) => ({
          id: `${product.id}-${imageIndex}`,
          image,
          product
        }))
      ),
    [filteredProducts]
  );
  const itemCount = marketplaceMode ? galleryItems.length : filteredProducts.length;
  const activePageSize = marketplaceMode ? MARKETPLACE_PAGE_SIZE : PAGE_SIZE;
  const pageCount = Math.max(1, Math.ceil(itemCount / activePageSize));
  const visibleProducts = filteredProducts.slice((page - 1) * activePageSize, page * activePageSize);
  const visibleGalleryItems = galleryItems.slice((page - 1) * activePageSize, page * activePageSize);
  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        categoryMeta.map((entry) => [
          entry.value,
          sourceProducts.filter((product) => product.category === entry.value).length
        ])
      ) as Record<ProductCategory, number>,
    [sourceProducts]
  );

  function resetFilters() {
    setSearch("");
    setSelectedCategories(defaultCategories);
    setSelectedFormats([]);
    setPriceMode("all");
    setMaxPrice(100);
    setSortBy("newest");
  }

  function toggleCategory(value: ProductCategory) {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((entry) => entry !== value) : [...prev, value]
    );
  }

  function toggleFormat(value: ProductFormat) {
    setSelectedFormats((prev) =>
      prev.includes(value) ? prev.filter((entry) => entry !== value) : [...prev, value]
    );
  }

  return (
    <div className={marketplaceMode ? "min-h-screen bg-white text-[#171717]" : "bg-[#fbf3e9] text-[#171717]"}>
      {marketplaceMode && <MarketplaceTopbar />}

      <section className={marketplaceMode ? "bg-[#f8efe4] pb-8 pt-2" : "bg-[#fbf3e9] py-8 sm:py-10"}>
        <div className={`container-shell ${marketplaceMode ? "max-w-[1260px]" : "max-w-[1380px]"}`}>
          <div className={marketplaceMode ? "" : "border-b border-[#e4ddd2] pb-6"}>
            {marketplaceMode ? (
              <>
                <div className="flex flex-wrap items-center gap-2 text-[0.82rem] font-medium text-[#7a6f65]">
                  <span className="hover:text-[#171717] cursor-pointer">All Items</span>
                  <span className="text-[#bbaaa0]">»</span>
                  <span className="hover:text-[#171717] cursor-pointer">Video Templates</span>
                  <span className="text-[#bbaaa0]">»</span>
                  <span className="text-[#4e4741]">After Effects</span>
                </div>
              </>
            ) : (
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-[#9b7d6b]">
                ZOR-style catalog
              </p>
            )}

            <div className={`flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between ${marketplaceMode ? "mt-2" : "mt-3"}`}>
              <div>
                <h1
                  className={`font-body tracking-[-0.06em] text-[#171717] ${
                    marketplaceMode ? "text-[clamp(2.2rem,3.3vw,3.25rem)] leading-[1.04]" : "font-bold text-[clamp(2rem,3.6vw,3.4rem)]"
                  }`}
                >
                  {marketplaceMode ? (
                    <>
                      <span className="font-bold bg-gradient-to-r from-[#d92c7d] to-[#7f39b0] bg-clip-text text-transparent">After Effects</span> <span className="font-medium">Video Templates</span>
                    </>
                  ) : (
                    heading ?? "Motion Graphics Video Templates"
                  )}
                </h1>
                <p
                  className={`max-w-3xl text-[#5e544c] ${
                    marketplaceMode ? "mt-3 text-[1rem] leading-7" : "mt-2 text-[1rem]"
                  }`}
                >
                  {marketplaceMode ? (
                    <>
                      Produce stand-out videos with studio-quality After Effects templates and visual effects.<br/>
                      Customize your projects with fully editable <a href="#" className="underline decoration-[#999] underline-offset-4">logo animations</a>, <a href="#" className="underline decoration-[#999] underline-offset-4">slideshows</a>, <a href="#" className="underline decoration-[#999] underline-offset-4">text</a>, <a href="#" className="underline decoration-[#999] underline-offset-4">titles</a> and <a href="#" className="underline decoration-[#999] underline-offset-4">transitions</a>.
                    </>
                  ) : (
                    description ?? "Browse marketplace-style template results with compact filters, dense previews, and faster scanning."
                  )}
                </p>
                {marketplaceMode && (
                  <button type="button" className="mt-2 text-[0.95rem] font-medium text-[#171717] underline decoration-[#999] underline-offset-4 hover:text-black">
                    Show More
                  </button>
                )}
              </div>
              {marketplaceMode ? null : (
                <p className="text-sm font-medium text-[#5f5a55]">{itemCount} items found</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={marketplaceMode ? "bg-white py-8" : "bg-[#fbf3e9] pb-8 sm:pb-10"}>
        <div className={`container-shell ${marketplaceMode ? "max-w-[1260px]" : "max-w-[1380px]"}`}>
          <div className="mt-5 flex items-center justify-between gap-3 lg:hidden">
            <p className="text-sm text-[#5f5a55]">{itemCount} results</p>
            <Button variant="secondary" size="sm" onClick={() => setIsMobileFilterOpen(true)}>
              <SlidersHorizontal className="mr-2 size-4" />
              Filters
            </Button>
          </div>

          {marketplaceMode && (
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <button type="button" className="flex items-center gap-2 text-[0.92rem] font-bold text-[#171717] hover:text-[#555]">
                <SlidersHorizontal className="size-4" /> Hide Filters
              </button>
              <div className="flex items-center gap-2 text-[0.92rem] text-[#6a5f57]">
                Sort by{" "}
                <div className="relative inline-block">
                  <select
                    id="sort-by-market"
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value as SortValue)}
                    className="focus-ring cursor-pointer appearance-none bg-transparent pr-4 font-bold text-[#171717] outline-none"
                  >
                    <option value="newest">Newest</option>
                    <option value="bestseller">Popular</option>
                    <option value="price-low">Price low-high</option>
                    <option value="price-high">Price high-low</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2 text-[#171717]" />
                </div>
              </div>
            </div>
          )}

          <div
            className={`grid ${marketplaceMode ? "gap-6 lg:grid-cols-[220px_1fr]" : "mt-6 gap-6 lg:grid-cols-[220px_1fr]"}`}
          >
            <aside className="hidden lg:block">
              <div
                className={`sticky top-16 ${marketplaceMode ? "pr-6" : "rounded-[2px] border border-[#e4ddd2] bg-white p-4"}`}
              >
                {marketplaceMode && (
                  <div className="mb-6 border-b border-[#e4ddd2] pb-4">
                    <button type="button" onClick={resetFilters} className="flex items-center gap-2 text-[0.88rem] font-bold text-[#171717] hover:text-[#555]">
                      <X className="size-[18px]" /> Clear all
                    </button>
                  </div>
                )}
                <FilterPanel
                  search={search}
                  onSearchChange={setSearch}
                  selectedCategories={selectedCategories}
                  toggleCategory={toggleCategory}
                  priceMode={priceMode}
                  setPriceMode={setPriceMode}
                  maxPrice={maxPrice}
                  setMaxPrice={setMaxPrice}
                  selectedFormats={selectedFormats}
                  toggleFormat={toggleFormat}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  onClear={resetFilters}
                  categoryCounts={categoryCounts}
                  compact={marketplaceMode}
                />
              </div>
            </aside>

            <main>
              {!marketplaceMode && (
                <div className="mb-3 flex flex-col gap-2 rounded-[2px] border border-[#e4ddd2] bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#5f5a55]">
                    <span className="font-medium text-[#171717]">
                      Showing {visibleProducts.length}
                    </span>
                    <span className="hidden sm:inline">from {itemCount} results</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="sr-only" htmlFor="sort-by">
                      Sort products
                    </label>
                    <select
                      id="sort-by"
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value as SortValue)}
                      className="focus-ring h-10 rounded-[4px] border border-[#ddd4ca] bg-white px-3 text-sm text-[#171717]"
                    >
                      <option value="newest">Newest</option>
                      <option value="bestseller">Best selling</option>
                      <option value="price-low">Price low-high</option>
                      <option value="price-high">Price high-low</option>
                    </select>
                  </div>
                </div>
              )}

              {loading ? (
                <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${marketplaceMode ? "xl:grid-cols-5" : "xl:grid-cols-4"}`}>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))}
                </div>
              ) : (marketplaceMode ? visibleGalleryItems.length > 0 : visibleProducts.length > 0) ? (
                <>
                  <div
                    className={`grid grid-cols-2 sm:grid-cols-3 ${
                      marketplaceMode ? "gap-1 lg:grid-cols-3 xl:grid-cols-3" : "gap-3 xl:grid-cols-4"
                    }`}
                  >
                    {marketplaceMode
                      ? visibleGalleryItems.map((item, index) => (
                          <MarketplaceTile
                            key={item.id}
                            product={item.product}
                            imageSrc={item.image}
                            priority={index < 10}
                            marketplaceMode
                          />
                        ))
                      : visibleProducts.map((product, index) => (
                          <MarketplaceTile
                            key={product.id}
                            product={product}
                            priority={index < 8}
                            marketplaceMode={false}
                          />
                        ))}
                  </div>
                  <Pagination page={page} setPage={setPage} pageCount={pageCount} />
                </>
              ) : (
                <EmptyState onReset={resetFilters} />
              )}

              {marketplaceMode && (
                <div className="mt-16 flex flex-col items-center justify-center border-t border-[#e4ddd2] pt-8 pb-4">
                  <p className="text-[0.9rem] font-medium text-[#171717]">How satisfied are you with your After Effects templates search experience?</p>
                  <div className="mt-2 flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" aria-label={`Rate ${star} stars`} className="text-[#c1b5a8] hover:text-[#171717]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <section
                className={`grid lg:grid-cols-[0.42fr_1.58fr] ${
                  marketplaceMode ? "mt-6 gap-6 pt-2" : "mt-16 border-t border-[#e4ddd2] gap-10 pt-10"
                }`}
              >
                <div>
                  <h2
                    className={`font-body font-bold tracking-[-0.05em] text-[#171717] ${
                      marketplaceMode ? "text-[2rem]" : "text-[clamp(1.7rem,3vw,2.6rem)]"
                    }`}
                  >
                    FAQs
                  </h2>
                </div>
                <div className="divide-y divide-[#e8e0d6] border-t border-[#e8e0d6]">
                  {[
                    "What is included with each template?",
                    "Can I use these assets commercially?",
                    "Do templates work with multiple apps?",
                    "How do updates and downloads work?"
                  ].map((faq) => (
                    <button
                      key={faq}
                      type="button"
                      className={`focus-ring flex w-full items-center justify-between text-left font-medium text-[#171717] ${
                        marketplaceMode ? "py-4 text-[1.12rem]" : "py-5 text-[1rem]"
                      }`}
                    >
                      <span>{faq}</span>
                      <ChevronDown className="size-4" />
                    </button>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>

      {marketplaceMode && <MarketplaceFooter />}

      <AnimatePresence>
        {isMobileFilterOpen && (
          <motion.div
            className="fixed inset-0 z-[76] bg-black/60 p-3 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              exit={{ y: "120%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-[18px] border border-[#dfd6cb] bg-[#fbf3e9] p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="font-medium text-[#171717]">Filters</p>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  aria-label="Close filters"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#ddd4ca] bg-white"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="rounded-[2px] border border-[#e4ddd2] bg-white p-4">
                <FilterPanel
                  search={search}
                  onSearchChange={setSearch}
                  selectedCategories={selectedCategories}
                  toggleCategory={toggleCategory}
                  priceMode={priceMode}
                  setPriceMode={setPriceMode}
                  maxPrice={maxPrice}
                  setMaxPrice={setMaxPrice}
                  selectedFormats={selectedFormats}
                  toggleFormat={toggleFormat}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  onClear={resetFilters}
                  categoryCounts={categoryCounts}
                  compact={marketplaceMode}
                />
              </div>
              <Button onClick={() => setIsMobileFilterOpen(false)} className="mt-4 w-full">
                Apply filters
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterPanel({
  search,
  onSearchChange,
  selectedCategories,
  toggleCategory,
  priceMode,
  setPriceMode,
  maxPrice,
  setMaxPrice,
  selectedFormats,
  toggleFormat,
  sortBy,
  setSortBy,
  onClear,
  categoryCounts,
  compact
}: {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategories: ProductCategory[];
  toggleCategory: (value: ProductCategory) => void;
  priceMode: PriceMode;
  setPriceMode: (value: PriceMode) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
  selectedFormats: ProductFormat[];
  toggleFormat: (value: ProductFormat) => void;
  sortBy: SortValue;
  setSortBy: (value: SortValue) => void;
  onClear: () => void;
  categoryCounts: Record<ProductCategory, number>;
  compact: boolean;
}) {
  return (
    <div className={compact ? "space-y-6" : "space-y-5"}>
      {!compact && (
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7767]">
            Search
          </p>
          <div className="flex items-center rounded-[6px] border border-[#ddd4ca] bg-[#fbf8f4] px-3">
            <Search className="size-4 text-[#776b61]" />
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search templates"
              className="focus-ring w-full bg-transparent h-10 px-2 text-sm text-[#171717] placeholder:text-[#97897c]"
            />
          </div>
        </div>
      )}

      <FilterGroup title="Categories">
        {categoryMeta.map((entry) => (
          compact ? (
            <label
              key={entry.value}
              className="flex cursor-pointer items-center gap-3 py-1.5 text-[0.95rem] text-[#171717]"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(entry.value)}
                onChange={() => toggleCategory(entry.value)}
                className="h-4 w-4 rounded border-[#d8cec3] bg-white text-[#171717] focus:ring-[#171717]"
              />
              <span className="flex-1">{entry.label}</span>
            </label>
          ) : (
            <button
              key={entry.value}
              type="button"
              onClick={() => toggleCategory(entry.value)}
              className={`focus-ring flex w-full items-center justify-between text-left ${
                selectedCategories.includes(entry.value)
                  ? "rounded-[6px] bg-[#f4ede4] px-2 py-2 text-[#171717]"
                  : "rounded-[6px] px-2 py-2 text-[#5f5a55]"
              }`}
            >
              <span>{entry.label}</span>
              <span className="text-xs text-[#8a7b6f]">{categoryCounts[entry.value] ?? 0}</span>
            </button>
          )
        ))}
      </FilterGroup>

      {compact && (
        <>
          <FilterGroup title="Applications Supported">
            {["After Effects", "Premiere Pro", "Apple Motion", "Final Cut Pro", "DaVinci Resolve"].map((app) => (
              <label key={app} className="flex cursor-pointer items-center gap-3 py-1.5 text-[0.95rem] text-[#171717]">
                <input type="checkbox" defaultChecked={app === "After Effects"} className="h-4 w-4 rounded border-[#d8cec3] bg-white text-[#171717] focus:ring-[#171717]" />
                <span className="flex-1">{app}</span>
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Plugins">
            <label className="flex cursor-pointer items-center gap-3 py-1.5 text-[0.95rem] text-[#171717]">
              <input type="checkbox" className="h-4 w-4 rounded border-[#d8cec3] bg-white text-[#171717] focus:ring-[#171717]" />
              <span className="flex-1">No plugins required</span>
            </label>
          </FilterGroup>

          <FilterGroup title="Resolution">
            {["720p (HD)", "1080p (Full HD)", "4K", "8K (UHD)"].map((res) => (
              <label key={res} className="flex cursor-pointer items-center gap-3 py-1.5 text-[0.95rem] text-[#171717]">
                <input type="checkbox" className="h-4 w-4 rounded border-[#d8cec3] bg-white text-[#171717] focus:ring-[#171717]" />
                <span className="flex-1">{res}</span>
              </label>
            ))}
          </FilterGroup>
        </>
      )}

      {!compact && (
        <FilterGroup title="Price">
          <div className="flex gap-2">
            {(["all", "free", "paid"] as PriceMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setPriceMode(mode)}
                className={`focus-ring rounded-full border px-3 py-1 text-xs uppercase tracking-wide ${
                  priceMode === mode ? "border-[#171717] bg-[#171717] text-white" : "border-[#ddd4ca] text-[#5f5a55]"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          <div>
            <label className="mb-1 block text-xs text-[#8b7767]">Max price: {formatPrice(maxPrice)}</label>
            <input
              type="range"
              min={0}
              max={100}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="w-full accent-[#171717]"
            />
          </div>
        </FilterGroup>
      )}

      {!compact && (
        <FilterGroup title="Formats">
          {formats.map((format) => (
            <label key={format} className={`flex items-center gap-3 text-[#5f5a55] ${compact ? "text-[1.02rem] leading-7" : "text-sm"}`}>
              <input
                type="checkbox"
                checked={selectedFormats.includes(format)}
                onChange={() => toggleFormat(format)}
                className="h-4 w-4 rounded border-[#d8cec3] bg-white text-[#171717] focus:ring-[#171717]"
              />
              {format}
            </label>
          ))}
        </FilterGroup>
      )}

      {!compact && (
        <div>
          <label htmlFor="sidebar-sort" className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7767]">
            Sort
          </label>
          <select
            id="sidebar-sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortValue)}
            className="focus-ring h-10 w-full rounded-[6px] border border-[#ddd4ca] bg-[#fbf8f4] px-3 text-sm text-[#171717]"
          >
            <option value="newest">Newest</option>
            <option value="bestseller">Best selling</option>
            <option value="price-low">Price low-high</option>
            <option value="price-high">Price high-low</option>
          </select>
        </div>
      )}

      <Button variant="ghost" className="w-full" onClick={onClear}>
        Clear filters
      </Button>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-[1.08rem] font-semibold tracking-[-0.01em] text-[#171717]">{title}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function MarketplaceTile({
  product,
  imageSrc,
  priority = false,
  marketplaceMode = false
}: {
  product: Product;
  imageSrc?: string;
  priority?: boolean;
  marketplaceMode?: boolean;
}) {
  const category = categoryMeta.find((entry) => entry.value === product.category)?.label ?? product.category;
  const targetHref = `/products/${product.slug}`;

  return (
    <Link href={targetHref} className="focus-ring block rounded-[2px]">
      <article className="group">
        <div
          className={`relative overflow-hidden rounded-[2px] border border-[#ded6cc] bg-black ${
            marketplaceMode ? "aspect-square" : "aspect-square"
          }`}
        >
          <Image
            src={imageSrc ?? product.images[0]}
            alt={`${product.title} preview image`}
            fill
            priority={priority}
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes={marketplaceMode ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw" : "(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 20vw"}
          />
          
          {marketplaceMode && (
            <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between bg-black/0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className="flex justify-end p-2 opacity-0 transition-opacity delay-75 duration-300 group-hover:opacity-100">
                <button type="button" aria-label="Save to collection" className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30">
                  <BookmarkPlus className="size-[18px]" />
                </button>
              </div>
              
              <div className="p-3 opacity-0 transition-opacity delay-150 duration-300 group-hover:opacity-100">
                <h4 className="line-clamp-1 text-[0.95rem] font-medium text-white">{product.title}</h4>
                <p className="mt-0.5 text-[0.75rem] text-white/80">by <span className="underline decoration-white/40 underline-offset-2">ZOR Creator</span></p>
                
                <div className="mt-3 flex items-center justify-between">
                  <button type="button" aria-label="Show similar items" className="pointer-events-auto flex items-center gap-1.5 rounded-[4px] bg-white/20 px-2 py-1 text-[0.75rem] font-medium text-white backdrop-blur-md transition hover:bg-white/30">
                    <Copy className="size-[14px]" /> Similar
                  </button>
                  <button type="button" aria-label="Download" className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#8CF45D] text-[#171717] transition hover:brightness-95">
                    <Download className="size-[16px]" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
                <div className="h-full w-0 bg-[#8CF45D] transition-all duration-[4000ms] ease-linear group-hover:w-full" />
              </div>
            </div>
          )}

          {!marketplaceMode && product.badge && (
            <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#171717]">
              {product.badge}
            </span>
          )}
        </div>
        {!marketplaceMode && (
          <div className="px-1 py-2">
            <p className="line-clamp-1 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#8a786a]">
              {category}
            </p>
            <h3 className="mt-1 line-clamp-2 text-[0.96rem] font-semibold leading-6 text-[#171717]">
              {product.title}
            </h3>
            <div className="mt-1 flex items-center justify-between gap-3 text-sm">
              <span className="line-clamp-1 text-[#6a5f57]">{product.formats[0]}</span>
              <span className="font-semibold text-[#171717]">{formatPrice(product.price)}</span>
            </div>
          </div>
        )}
      </article>
    </Link>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-[2px] border border-[#e4ddd2] bg-white px-5 py-14 text-center">
      <div className="mx-auto mb-5 h-20 w-20 rounded-full bg-[#f4ede4]" />
      <h3 className="font-body text-3xl font-bold text-[#171717]">No templates found</h3>
      <p className="mt-3 text-sm text-[#6a5f57]">Try adjusting your filters.</p>
      <Button variant="secondary" className="mt-5" onClick={onReset}>
        Reset filters
      </Button>
    </div>
  );
}

function Pagination({
  page,
  setPage,
  pageCount
}: {
  page: number;
  setPage: (value: number) => void;
  pageCount: number;
}) {
  if (pageCount <= 1) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
      <Button variant="secondary" size="sm" onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
        Previous
      </Button>
      {Array.from({ length: pageCount }).map((_, index) => {
        const value = index + 1;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setPage(value)}
            className={`focus-ring rounded-[4px] border ${
              value === page ? "border-[#171717] bg-[#171717] text-white" : "border-[#ddd4ca] bg-white text-[#5f5a55]"
            } ${pageCount > 5 ? "h-8 min-w-8 text-[0.78rem]" : "h-10 min-w-10 text-sm"}`}
          >
            {value}
          </button>
        );
      })}
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setPage(Math.min(pageCount, page + 1))}
        disabled={page === pageCount}
      >
        Next
      </Button>
    </div>
  );
}

function MarketplaceTopbar() {
  return (
    <header>
      <div className="bg-[#f8efe4]">
        <div className="mx-auto w-full max-w-[1260px] px-4">
          <div className="flex items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-8">
              <Link href="/" className="focus-ring flex items-center rounded-md">
                <svg className="mr-1.5" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#8CF45D"/></svg>
                <span className="font-body text-[1.55rem] font-bold tracking-[-0.06em] text-[#171717]">ZOR</span>
              </Link>
              <nav className="hidden items-center gap-5 xl:flex">
                {["Figma Templates", "Graphics", "Logos", "Website Templates", "AI Images"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="focus-ring inline-flex items-center gap-1 rounded-md text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]"
                  >
                    {item}
                    <ChevronDown className="size-3.5 text-[#888]" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="hidden items-center gap-5 xl:flex">
              <Link href="/search?q=license" className="focus-ring rounded-md text-[0.92rem] font-medium text-[#38312c] hover:text-[#171717]">
                License
              </Link>
              <Link href="/search?q=enterprise" className="focus-ring rounded-md text-[0.92rem] font-medium text-[#38312c] hover:text-[#171717]">
                Enterprise
              </Link>
              <Link href="/pricing" className="focus-ring rounded-md text-[0.92rem] font-medium text-[#38312c] hover:text-[#171717]">
                Pricing
              </Link>
              <Link
                href="/pricing"
                className="focus-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-[4px] bg-[#8CF45D] px-5 text-[0.88rem] font-semibold text-[#171717] transition hover:brightness-95"
              >
                Get unlimited downloads
              </Link>
              <Link href="/dashboard" className="focus-ring rounded-full" aria-label="Profile">
                <CircleUser className="size-[26px] text-[#171717] hover:text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8efe4]">
        <div className="mx-auto w-full max-w-[1260px] px-4 pb-4 pt-5">
          <div className="hidden xl:block">
            <div className="mx-auto flex h-[54px] max-w-[840px] items-center overflow-hidden rounded-full border border-[#e4dcd2] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <button
                type="button"
                className="focus-ring inline-flex h-full items-center gap-2 border-r border-[#ece6de] px-6 text-[0.95rem] font-medium text-[#171717] hover:bg-gray-50"
              >
                Video Templates
                <ChevronDown className="size-4 text-[#888]" />
              </button>
              <div className="flex min-w-0 flex-1 items-center gap-3 px-5">
                <Search className="size-[18px] text-[#9f9488]" />
                <input
                  type="text"
                  value=""
                  readOnly
                  aria-label="Search products"
                  placeholder="Search"
                  className="w-full bg-transparent text-[1.05rem] text-[#171717] placeholder:text-[#9f9488] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MarketplaceFooter() {
  return (
    <footer className="mt-10 bg-[#f8efe4] py-8">
      <div className="mx-auto w-full max-w-[1180px] px-4">
        <div className="grid gap-8 xl:grid-cols-[0.8fr_2.5fr]">
          <div>
            <p className="font-body text-[2.15rem] font-bold tracking-[-0.06em] text-[#171717]">ZOR</p>
            <div className="mt-3 flex gap-3 text-[#171717]">
              {["ig", "tt", "fb", "yt", "rd", "pi", "x"].map((item) => (
                <span key={item} className="text-[0.95rem] font-semibold uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {marketplaceFooterColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[1.12rem] font-semibold text-[#171717]">{column.title}</h3>
                <div className="mt-3 space-y-1.5">
                  {column.links.map((link) => (
                    <p key={link} className="text-[1.02rem] leading-7 text-[#3a322d]">
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[#ddd1c6] pt-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[1rem] text-[#4a433c]">
              {["ZOR Market", "ZOR Learn", "ZOR Create", "Mixkit", "All Products", "Sitemap"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[1rem] text-[#171717]">
              <Globe className="size-3.5" />
              English
              <ChevronDown className="size-3.5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
