"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { label: "Terms & Conditions", href: "/search?q=terms" },
  { label: "License", href: "/search?q=license" },
  { label: "Help", href: "/search?q=help" },
  { label: "Privacy", href: "/search?q=privacy" },
  { label: "Cookies", href: "/search?q=cookies" }
];

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/pricing" || pathname === "/products" || pathname === "/signin" || pathname === "/signup") return null;

  return (
    <footer className="border-t border-border bg-white">
      <div className="container-shell py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-secondary md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md transition hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted">
            (c) 2026 PixelForge. Trademarks and brands are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
