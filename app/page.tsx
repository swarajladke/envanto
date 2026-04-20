import type { Metadata } from "next";
import { EnvatoStyleLanding } from "@/components/home/envato-style-landing";

export const metadata: Metadata = {
  title: "Unlimited Digital Product Templates",
  description: "Landing-page UI inspired by Envato Elements for templates, graphics, and creative assets."
};

export default function HomePage() {
  return <EnvatoStyleLanding />;
}
