"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { ProductCategory } from "@/lib/types";
import { categoryMeta } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CategoryStrip({
  active,
  onSelect
}: {
  active: ProductCategory | "all";
  onSelect: (value: ProductCategory | "all") => void;
}) {
  return (
    <div className="no-scrollbar overflow-x-auto">
      <div className="flex min-w-max gap-3 py-2">
        <CategoryPill selected={active === "all"} onClick={() => onSelect("all")}>
          All
        </CategoryPill>
        {categoryMeta.map((category) => (
          <CategoryPill
            key={category.value}
            selected={active === category.value}
            onClick={() => onSelect(category.value)}
          >
            {category.label}
          </CategoryPill>
        ))}
      </div>
    </div>
  );
}

function CategoryPill({
  children,
  selected,
  onClick
}: {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring relative rounded-full border px-4 py-2 text-sm font-medium transition",
        selected
          ? "border-accent bg-accent text-white"
          : "border-border bg-surface text-text-secondary hover:border-border-hover hover:text-text-primary"
      )}
    >
      {children}
      {selected && (
        <motion.span
          layoutId="active-category-pill"
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-accent-secondary/50"
        />
      )}
    </button>
  );
}
