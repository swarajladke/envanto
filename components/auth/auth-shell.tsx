"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Apple,
  ChevronDown,
  TriangleAlert,
  CheckCircle,
  Facebook,
  Globe,
  Instagram,
  Mail,
  Music2,
  Pin,
  PlaySquare,
  CircleUser,
  X
} from "lucide-react";

type AuthShellProps = {
  mode: "signin" | "signup";
};

const legalLinks = [
  "About ZOR",
  "Pricing & Plans",
  "License Terms",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookies",
  "Do not sell or share my personal information",
  "Help Center",
  "Cookie Settings"
];

export function AuthShell({ mode }: AuthShellProps) {
  const isSignIn = mode === "signin";
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(isSignIn);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f7efe4] text-[#171717]">
      <header className="bg-[#1a1a1a]">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-8 py-4">
          <Link href="/" className="focus-ring flex items-center gap-1.5 rounded-md">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#8CF45D"/>
            </svg>
            <span className="font-body text-[1.6rem] font-bold tracking-[-0.06em] text-white">ZOR</span>
          </Link>
          <Link
            href={isSignIn ? "/signin" : "/signup"}
            className="focus-ring rounded-md text-[0.95rem] font-medium text-white/90"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="relative flex min-h-[810px] flex-col items-center justify-center gap-12 overflow-hidden px-6 py-12 lg:flex-row lg:justify-between lg:px-[10%]">
            <div className="absolute inset-0 z-0 bg-black">
              <Image
                src={isSignIn ? "/images/signin_bg.png" : "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                alt="Background"
                fill
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>

            <div className="relative z-10 hidden max-w-[600px] lg:block">
              <h1 className="font-inter text-[48px] font-extrabold leading-[1] tracking-[-0.04em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {isSignIn ? (
                  <>
                    Great to have you
                    <br />
                    back!
                  </>
                ) : (
                  <>
                    Come in, get
                    <br />
                    creative.
                  </>
                )}
              </h1>
            </div>

            <div className="relative z-10 w-full max-w-[460px] rounded-[4px] border border-[#dcdad4] bg-white px-10 py-12 shadow-[0_4px_20px_rgba(0,0,0,0.15)] sm:px-12">
              <h2 className="text-center font-body text-[2.2rem] font-bold tracking-[-0.02em] text-[#171717]">
                {isSignIn ? "Sign in" : "Create a free account"}
              </h2>

              {!isSignIn && (
                <div className="mt-4 flex items-center justify-center gap-2 text-[0.92rem] font-medium text-[#4b4b4b]">
                  <CheckCircle className="size-5 text-[#171717]" />
                  <span>Save assets into your own collections</span>
                </div>
              )}

              <div className="mt-8 space-y-4">
                <SocialButton icon={<GoogleMark />} label={`Continue with Google`} />
                <SocialButton icon={<Apple className="size-[22px]" />} label={`Continue with Apple`} />
                <SocialButton icon={<Facebook className="size-[22px] text-[#1b74e4]" />} label={`Continue with Facebook`} />
                {!isSignIn && !showEmailForm && (
                  <button 
                    onClick={() => setShowEmailForm(true)}
                    className="focus-ring inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[4px] border border-[#dcdad4] bg-white text-[0.95rem] font-bold text-[#171717] hover:bg-gray-50"
                  >
                    <Mail className="size-[22px]" /> Continue with Email
                  </button>
                )}
              </div>

              {showEmailForm && (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {!isSignIn && (
                    <div className="grid grid-cols-2 gap-4">
                      <FieldBlock 
                        label="First name" 
                        value={firstName} 
                        onChange={setFirstName} 
                        required 
                      />
                      <FieldBlock 
                        label="Last name" 
                        value={lastName} 
                        onChange={setLastName} 
                        required 
                      />
                    </div>
                  )}
                  <FieldBlock
                    label={isSignIn ? "Username or Email" : "Email"}
                    value={email}
                    onChange={setEmail}
                    type="email"
                    required
                  />
                  <FieldBlock 
                    label="Password" 
                    value={password} 
                    onChange={setPassword} 
                    type="password" 
                    required 
                  />
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="focus-ring mt-8 inline-flex h-[52px] w-full items-center justify-center rounded-[3px] bg-[#81d742] text-[1.1rem] font-bold text-[#171717] transition hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Processing..." : isSignIn ? "Sign in" : "Create account"}
                  </button>
                </form>
              )}
              {!isSignIn && (
                <div className="mt-7">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 size-5 shrink-0 rounded border-[#d1d1d1] accent-[#8CF45D]" />
                    <div className="text-[0.9rem] leading-6 text-[#171717]">
                      <strong>Yes to creative inspo in your inbox.</strong> Fresh tutorials, trends, tools (and no boring bits).
                      <div className="mt-1 text-[0.85rem] text-[#777]">
                        You can unsubscribe at any time.
                      </div>
                    </div>
                  </label>
                </div>
              )}

              <div className="mt-8 text-center text-[0.95rem] text-[#555]">
                {isSignIn ? (
                  <p>
                    New here?{" "}
                    <Link href="/signup" className="font-semibold text-[#171717] underline decoration-[#171717]/30 underline-offset-2 hover:decoration-[#171717]">
                      Create a ZOR account
                    </Link>
                  </p>
                ) : (
                  <p>
                    Already have a ZOR Account?{" "}
                    <Link href="/signin" className="font-semibold text-[#171717] underline decoration-[#171717]/30 underline-offset-2 hover:decoration-[#171717]">
                      Sign in here.
                    </Link>
                  </p>
                )}
              </div>

              <div className="mt-8 border-t border-[#ece9e3] pt-6">
                <p className="text-[0.85rem] leading-6 text-[#777]">
                  By continuing, you confirm you are 18 or over and agree to our{" "}
                  <Link href="/search?q=privacy" className="underline decoration-[#777]/50 underline-offset-2 hover:decoration-[#777]">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/search?q=terms" className="underline decoration-[#777]/50 underline-offset-2 hover:decoration-[#777]">
                    Terms of Use
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#f4ede4] border-t border-[#e8e4dc] px-8 py-10">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[12px] font-medium text-[#777]">
              {legalLinks.map((link, index) => (
                <div key={link} className="flex items-center">
                  <Link href={`/search?q=${link.toLowerCase()}`} className="hover:underline">
                    {link}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="ml-6 text-[#cfcfcf]/60">|</span>}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-6 text-[#171717]">
                <Instagram className="size-[1.4rem]" />
                <Music2 className="size-[1.4rem]" />
                <Facebook className="size-[1.4rem]" />
                <PlaySquare className="size-[1.4rem]" />
                <CircleUser className="size-[1.4rem]" />
                <Pin className="size-[1.4rem]" />
                <X className="size-[1.4rem]" />
              </div>
              <div className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-[#171717]">
                <Globe className="size-5" />
                English
                <ChevronDown className="size-4" />
              </div>
            </div>

            <p className="mt-8 text-[0.88rem] text-[#777]">
              (c) 2026 ZOR Trademarks and brands are the property of their respective owners.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Link
      href="/dashboard"
      className="focus-ring inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[4px] border border-[#dcdad4] bg-white text-[0.95rem] font-bold text-[#171717] hover:bg-gray-50"
    >
      <span className="inline-flex items-center justify-center">{icon}</span>
      {label}
    </Link>
  );
}

function FieldBlock({
  label,
  helperAction,
  error,
  alert = false,
  type = "text",
  value,
  onChange,
  required = false
}: {
  label: string;
  helperAction?: string;
  error?: string;
  alert?: boolean;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[0.9rem] font-bold text-[#222]">
        <span>{label}</span>
        {helperAction ? (
          <button type="button" className="focus-ring rounded-md text-[0.85rem] text-[#171717] underline decoration-[#171717]/20 underline-offset-4 hover:decoration-[#171717]">
            {helperAction}
          </button>
        ) : null}
      </div>
      <div
        className={`flex h-[48px] items-center rounded-[3px] border px-4 transition-colors ${
          alert ? "border-[#bf1b4c] bg-[#fff0f3]" : "border-[#d1d1d1] focus-within:border-[#171717]"
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full bg-transparent text-[#171717] outline-none placeholder:text-[#999]"
        />
        {alert && <TriangleAlert className="size-5 text-[#bf1b4c]" />}
      </div>
      {error && <p className="mt-2 text-[0.88rem] font-medium text-[#bf1b4c]">{error}</p>}
    </div>
  );
}

function GoogleMark() {
  return (
    <span className="text-[1.7rem] font-bold leading-none">
      <span className="text-[#4285f4]">G</span>
    </span>
  );
}
