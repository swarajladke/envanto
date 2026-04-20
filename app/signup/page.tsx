import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account."
};

export default function SignUpPage() {
  return <AuthShell mode="signup" />;
}
