import type { Metadata } from "next";
import { AccountPageView } from "@/components/shared/account-page-view";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your profile, downloads, purchases, and licenses."
};

export default function AccountPage() {
  return <AccountPageView />;
}
