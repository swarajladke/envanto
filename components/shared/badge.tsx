import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "default" | "accent" | "success" | "warning";

export function Badge({
  children,
  tone = "default",
  className
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  const toneClass =
    tone === "accent"
      ? "bg-accent text-white"
      : tone === "success"
        ? "bg-success/20 text-success border-success/30"
        : tone === "warning"
          ? "bg-warning/20 text-warning border-warning/30"
          : "bg-surface-elevated text-text-secondary border-border";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] font-medium uppercase tracking-wide",
        toneClass,
        className
      )}
    >
      {children}
    </span>
  );
}
