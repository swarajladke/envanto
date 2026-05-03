"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { useUiStore } from "@/store/ui-store";
import { LinkButton } from "@/components/shared/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isPricingPage = pathname === "/pricing";
  const isProductsPage = pathname === "/products" || pathname.startsWith("/products/");
  const isDashboardPage = pathname === "/dashboard";
  const isAdminPage = pathname.startsWith("/admin");
  const isAuthPage = pathname === "/signin" || pathname === "/signup";
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());
  const bumpKey = useCartStore((state) => state.bumpKey);
  const { openSearch, isMobileNavOpen, toggleMobileNav, closeMobileNav } = useUiStore();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 14);
    listener();
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    closeMobileNav();
  }, [pathname, closeMobileNav]);

  const cartCount = useMemo(() => (mounted ? totalItems : 0), [mounted, totalItems]);

  if (isPricingPage || isProductsPage || isAuthPage || isDashboardPage || isHomePage || isAdminPage) return null;

  return (
    <>
      {isHomePage ? (
        <header
          className={cn(
            "fixed inset-x-0 top-0 z-50 transition-all duration-300",
            scrolled ? "border-b border-[#ecebe7] bg-white/95 backdrop-blur-xl" : "border-b border-[#ecebe7] bg-white"
          )}
        >
          <div className="container-shell flex h-[76px] items-center justify-between gap-4">
            <Link href="/" className="focus-ring rounded-md">
              <span className="font-body text-[2rem] font-bold tracking-[-0.06em] text-[#171717]">PixelForge</span>
            </Link>

            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/signin"
                className="focus-ring rounded-md px-3 py-2 text-base font-semibold text-[#333] transition hover:text-[#171717]"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="focus-ring rounded-md px-3 py-2 text-base font-semibold text-[#333] transition hover:text-[#171717]"
              >
                Sign Up
              </Link>
              <LinkButton
                href="/products"
                className="ml-2 h-12 rounded-lg bg-[#FFF700] px-6 text-base font-semibold text-[#171717] hover:brightness-95"
              >
                Explore Collection
              </LinkButton>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <IconButton ariaLabel="Open menu" onClick={toggleMobileNav}>
                <Menu className="size-5" />
              </IconButton>
            </div>
          </div>
        </header>
      ) : (
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "border-b border-border bg-bg/85 backdrop-blur-2xl" : "bg-transparent"
        )}
      >
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          <Link href="/" className="focus-ring rounded-md">
            <span className="font-display text-xl font-extrabold tracking-tight">PixelForge</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "focus-ring rounded-md text-sm text-text-secondary transition hover:text-text-primary",
                    active && "text-text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <IconButton ariaLabel="Search products" onClick={openSearch}>
              <Search className="size-5" />
            </IconButton>
            <Link href="/cart" aria-label="View cart" className="focus-ring relative rounded-full">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition hover:border-border-hover">
                <ShoppingCart className="size-5" />
              </span>
              <AnimatePresence mode="wait">
                {cartCount > 0 && (
                  <motion.span
                    key={bumpKey}
                    initial={{ scale: 0.8, y: 4, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="absolute -right-1 -top-1 min-w-5 rounded-full bg-accent px-1 text-center text-[11px] font-bold text-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            <ThemeToggle />
            <Link
              href="/account"
              className="focus-ring rounded-md px-3 py-2 text-sm text-text-secondary transition hover:text-text-primary"
            >
              Sign In
            </Link>
            <LinkButton href="/products" size="md">
              Get Access
            </LinkButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <IconButton ariaLabel="Search products" onClick={openSearch}>
              <Search className="size-5" />
            </IconButton>
            <Link href="/cart" aria-label="View cart" className="focus-ring relative rounded-full">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition hover:border-border-hover">
                <ShoppingCart className="size-5" />
              </span>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-accent px-1 text-center text-[11px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <IconButton ariaLabel="Open menu" onClick={toggleMobileNav}>
              <Menu className="size-5" />
            </IconButton>
          </div>
        </div>
      </header>
      )}

      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-[70] w-[86vw] max-w-sm border-l border-border bg-surface-elevated p-6 lg:hidden"
            aria-label="Mobile navigation drawer"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-lg font-bold">Menu</span>
              <IconButton ariaLabel="Close menu" onClick={closeMobileNav}>
                <X className="size-5" />
              </IconButton>
            </div>
            <div className="space-y-1">
              {(isHomePage
                ? [
                    { label: "Templates", href: "/#templates" },
                    { label: "Benefits", href: "/#benefits" },
                    { label: "Categories", href: "/#categories" }
                  ]
                : navLinks
              ).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring block rounded-lg px-3 py-3 text-base text-text-secondary transition hover:bg-surface hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              {isHomePage && (
                <div className="mb-4 flex gap-3">
                  <Link href="/signin" className="focus-ring flex w-full items-center justify-center rounded-lg border border-[#dcdad4] py-[10px] text-[0.95rem] font-semibold text-[#171717] transition hover:bg-[#f8f8f8]">
                    Sign In
                  </Link>
                  <Link href="/signup" className="focus-ring flex w-full items-center justify-center rounded-lg border border-[#dcdad4] py-[10px] text-[0.95rem] font-semibold text-[#171717] transition hover:bg-[#f8f8f8]">
                    Sign Up
                  </Link>
                </div>
              )}
              <LinkButton href="/products" className="w-full justify-center bg-[#FFF700] text-[#171717] hover:brightness-95">
                {isHomePage ? "Explore Collection" : "Get Access"}
              </LinkButton>
            </div>
            {!isHomePage && (
              <div className="mt-6 flex justify-end">
                <ThemeToggle />
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

function IconButton({
  children,
  onClick,
  ariaLabel
}: {
  children: ReactNode;
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition hover:border-border-hover"
    >
      {children}
    </button>
  );
}
