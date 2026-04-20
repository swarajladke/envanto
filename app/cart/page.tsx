import type { Metadata } from "next";
import { CartPageView } from "@/components/products/cart-page-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your selected products and proceed to checkout."
};

export default function CartPage() {
  return <CartPageView />;
}
