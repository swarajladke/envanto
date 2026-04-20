import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account."
};

export default function SignInPage() {
  return <AuthShell mode="signin" />;
}
