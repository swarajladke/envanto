import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { SearchOverlay } from "@/components/shared/search-overlay";
import { QuickViewModal } from "@/components/products/quick-view-modal";
import { ToastRegion } from "@/components/shared/toast-region";
import { CookieBanner } from "@/components/shared/cookie-banner";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"]
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelforge.example"),
  title: {
    default: "PixelForge | Premium Digital Products by Aarav Mehta",
    template: "%s | PixelForge"
  },
  description:
    "Premium solo-creator storefront for website templates, UI kits, Figma templates, graphics, and illustrations.",
  openGraph: {
    title: "PixelForge",
    description: "Premium Digital Products by Aarav Mehta",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelForge",
    description: "Premium Digital Products by Aarav Mehta"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem("pixelforge-theme");
                  if (stored === "light" || stored === "dark") {
                    document.documentElement.setAttribute("data-theme", stored);
                  } else {
                    document.documentElement.setAttribute("data-theme", "light");
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className={`${display.variable} ${inter.variable} ${mono.variable} font-inter`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <SearchOverlay />
        <QuickViewModal />
        <ToastRegion />
        <CookieBanner />
      </body>
    </html>
  );
}
