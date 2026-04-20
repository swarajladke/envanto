import Link from "next/link";
import {
  Apple,
  ChevronDown,
  CircleAlert,
  Facebook,
  Globe,
  Instagram,
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
  "About Envato",
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

  return (
    <div className="min-h-screen bg-[#f7efe4] text-[#171717]">
      <header className="bg-[#1c1c1c]">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-8 py-5">
          <Link href="/" className="focus-ring rounded-md">
            <span className="font-body text-[2rem] font-bold tracking-[-0.06em] text-white">envato</span>
          </Link>
          <Link
            href={isSignIn ? "/signin" : "/signup"}
            className="focus-ring rounded-md text-[1.05rem] font-medium text-white/90"
          >
            {isSignIn ? "Sign In" : "Create account"}
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="grid min-h-[810px] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative overflow-hidden bg-[linear-gradient(180deg,#2fbdcd_0%,#1db2b8_52%,#72d6d5_100%)]">
              <div className="absolute inset-x-0 top-[22%] h-[34%] bg-[#c9c2bc]" />
              <div className="absolute bottom-0 left-0 right-0 h-[24%] bg-[#bada29]" />
              <div className="absolute bottom-[10%] left-[6%] h-44 w-44 rounded-full bg-[#d7ee52]/70 blur-[2px]" />
              <div className="absolute bottom-[6%] left-[22%] h-52 w-52 rounded-full bg-[#d6ef58]/70 blur-[2px]" />
              <div className="absolute bottom-[8%] left-[42%] h-48 w-48 rounded-full bg-[#c6e13f]/65 blur-[2px]" />
              <div className="absolute bottom-[4%] right-[14%] h-60 w-60 rounded-full bg-[#d6ef58]/60 blur-[2px]" />
              <div className="absolute right-[7%] top-[20%] h-[55%] w-[37%] rounded-[44px] bg-[linear-gradient(180deg,#ff6a6a_0%,#c9243a_100%)] shadow-[0_30px_50px_rgba(0,0,0,0.18)]" />
              <div className="absolute right-[19%] top-[17%] h-10 w-24 rounded-full border-[7px] border-[#202020] border-r-transparent border-b-transparent bg-transparent" />
              <div className="absolute right-[18%] top-[27%] h-[56%] w-[26%] rounded-[999px_999px_220px_220px] bg-[linear-gradient(180deg,#70483f_0%,#5c2f24_100%)] opacity-85" />
              <div className="absolute right-[17%] top-[24%] h-8 w-10 rounded-full bg-[#2f2f2f]" />
              <div className="absolute right-[18%] top-[28%] h-[46%] w-[20%] rounded-[30px] bg-[linear-gradient(180deg,#ff3a56_0%,#d21d42_100%)]" />
              <div className="absolute right-[21%] top-[33%] h-[32%] w-[12%] rounded-[18px] bg-[linear-gradient(180deg,#f4e4c7_0%,#ceb18b_100%)] opacity-90" />
              <div className="absolute right-[7%] top-[43%] h-[28%] w-[18%] rounded-[18px] bg-[linear-gradient(180deg,#f03552_0%,#bf1b39_100%)]" />
              <div className="absolute right-[27%] top-[48%] h-[28%] w-[15%] rounded-[18px] bg-[linear-gradient(180deg,#eb2c4b_0%,#ca173a_100%)]" />
              <div className="absolute left-[8%] top-[40%] max-w-[520px]">
                <h1 className="font-body text-[clamp(3.6rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.08em] text-white">
                  {isSignIn ? (
                    <>
                      Great to have you
                      <br />
                      back!
                    </>
                  ) : (
                    <>
                      Create and
                      <br />
                      get inspired.
                    </>
                  )}
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16">
              <div className="w-full max-w-[620px] rounded-[4px] border border-[#9d9b97] bg-white px-8 py-8 shadow-[0_8px_20px_rgba(0,0,0,0.06)] sm:px-10 sm:py-10">
                <h2 className="text-center font-body text-[3rem] font-bold tracking-[-0.06em] text-[#171717]">
                  {isSignIn ? "Sign in" : "Sign up"}
                </h2>

                <div className="mt-8 space-y-4">
                  <SocialButton icon={<GoogleMark />} label={`Continue with Google`} />
                  <SocialButton icon={<Apple className="size-6" />} label={`Continue with Apple`} />
                  <SocialButton icon={<Facebook className="size-6 text-[#1b74e4]" />} label={`Continue with Facebook`} />
                </div>

                <div className="mt-10 space-y-8">
                  <FieldBlock
                    label={isSignIn ? "Username or Email" : "Email"}
                    helperAction={isSignIn ? "Remind me" : undefined}
                    error={isSignIn ? "Username or Email is required" : undefined}
                    alert={isSignIn}
                  />

                  {!isSignIn && <FieldBlock label="Username" />}

                  <FieldBlock label="Password" helperAction={isSignIn ? "Forgot" : undefined} />

                  {!isSignIn && <FieldBlock label="Confirm Password" />}
                </div>

                <button
                  type="button"
                  className="focus-ring mt-8 inline-flex h-[58px] w-full items-center justify-center rounded-[3px] bg-[#8CF45D] text-[1.2rem] font-semibold text-[#171717]"
                >
                  {isSignIn ? "Sign in" : "Create account"}
                </button>

                <div className="mt-8 text-center text-[1.05rem] text-[#4a4a4a]">
                  {isSignIn ? (
                    <p>
                      New here?{" "}
                      <Link href="/signup" className="font-semibold underline">
                        Create an Envato account
                      </Link>
                    </p>
                  ) : (
                    <p>
                      Already have an account?{" "}
                      <Link href="/signin" className="font-semibold underline">
                        Sign in
                      </Link>
                    </p>
                  )}
                </div>

                <div className="mt-8 border-t border-[#ece9e3] pt-8">
                  <p className="text-[0.98rem] leading-7 text-[#666]">
                    By continuing, you confirm you are 18 or over and agree to our{" "}
                    <Link href="/search?q=privacy" className="underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/search?q=terms" className="underline">
                      Terms of Use
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#f7efe4] px-8 py-8">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-[1rem] text-[#2b2b2b]">
              {legalLinks.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-5 text-[#171717]">
                <Instagram className="size-5" />
                <Music2 className="size-5" />
                <Facebook className="size-5" />
                <PlaySquare className="size-5" />
                <CircleUser className="size-5" />
                <Pin className="size-5" />
                <X className="size-5" />
              </div>
              <div className="inline-flex items-center gap-2 text-[1rem] text-[#171717]">
                <Globe className="size-5" />
                English
                <ChevronDown className="size-4" />
              </div>
            </div>

            <p className="mt-6 text-[0.95rem] text-[#555]">
              (c) 2026 Envato Trademarks and brands are the property of their respective owners.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="focus-ring inline-flex h-[58px] w-full items-center justify-center gap-4 rounded-[3px] border border-[#8f8e8b] bg-white text-[1.15rem] font-semibold text-[#171717]"
    >
      <span className="inline-flex items-center justify-center">{icon}</span>
      {label}
    </button>
  );
}

function FieldBlock({
  label,
  helperAction,
  error,
  alert = false
}: {
  label: string;
  helperAction?: string;
  error?: string;
  alert?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[1rem] font-semibold text-[#222]">
        <span>{label}</span>
        {helperAction ? (
          <button type="button" className="focus-ring rounded-md text-[#4f4f4f] underline">
            {helperAction}
          </button>
        ) : (
          <span />
        )}
      </div>
      <div
        className={`flex h-[56px] items-center rounded-[2px] border px-4 ${
          alert ? "border-[#c51f5d] shadow-[inset_0_0_0_1px_#c51f5d]" : "border-[#b9b7b1]"
        }`}
      >
        <div className="flex-1" />
        {alert && <CircleAlert className="size-6 text-[#c51f5d]" />}
      </div>
      {error && <p className="mt-3 text-[0.98rem] text-[#c51f5d]">{error}</p>}
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
