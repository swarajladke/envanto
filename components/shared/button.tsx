"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type BaseProps = {
  className?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

function styleForVariant(variant: ButtonVariant) {
  if (variant === "primary") {
    return "bg-accent text-white hover:brightness-110";
  }
  if (variant === "secondary") {
    return "bg-surface text-text-primary border border-border hover:border-border-hover";
  }
  if (variant === "danger") {
    return "bg-danger/90 text-white hover:bg-danger";
  }
  return "bg-transparent border border-border text-text-primary hover:border-accent/70 hover:bg-accent/10";
}

function styleForSize(size: "sm" | "md" | "lg") {
  if (size === "sm") return "h-10 px-3 text-sm";
  if (size === "lg") return "h-14 px-6 text-base";
  return "h-11 px-4 text-sm";
}

const baseClass =
  "focus-ring inline-flex items-center justify-center rounded-lg font-medium transition active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(baseClass, styleForVariant(variant), styleForSize(size), className)}
      {...props}
    />
  );
});

export function LinkButton({
  className,
  href,
  variant = "primary",
  size = "md",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(baseClass, styleForVariant(variant), styleForSize(size), className)}
      {...props}
    />
  );
}
