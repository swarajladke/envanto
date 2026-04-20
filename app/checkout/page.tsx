import type { Metadata } from "next";
import { CheckoutPageView } from "@/components/products/checkout-page-view";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout for your selected digital products."
};

export default function CheckoutPage() {
  return <CheckoutPageView />;
}
