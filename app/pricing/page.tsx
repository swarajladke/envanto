import type { Metadata } from "next";
import { PricingPageView } from "@/components/pricing/pricing-page-view";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Subscription plans for unlimited downloads and creative assets."
};

export default function PricingPage() {
  return <PricingPageView />;
}
