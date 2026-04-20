"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AudioLines,
  Camera,
  Check,
  ChevronDown,
  CircleUser,
  Clapperboard,
  Globe,
  ImageIcon,
  MonitorPlay,
  Music,
  PaintbrushVertical,
  Search,
  ShieldCheck,
  Sparkles,
  SquarePlay,
  WandSparkles
} from "lucide-react";

type PricingPlan = {
  name: string;
  price: string;
  priceSuffix: string;
  intro: string;
  cta: string;
  features: string[];
  seatLabel?: string;
  enterprise?: boolean;
};

const individualPlans: PricingPlan[] = [
  {
    name: "Core",
    price: "$16.50",
    priceSuffix: "/month",
    intro: "From",
    cta: "Select",
    features: [
      "Unlimited downloads of 27+ million creative assets",
      "Stock Video and Photos",
      "Video Templates",
      "Music and Sound Effects",
      "Design Templates",
      "Graphics and 3D",
      "Fonts and add-ons",
      "10 AI generations per month across our AI toolkit",
      "Lifetime commercial license for all creative assets and AI generations"
    ]
  },
  {
    name: "Plus",
    price: "$39",
    priceSuffix: "/month",
    intro: "From",
    cta: "Select",
    features: [
      "Everything in Core",
      "100 AI generations per month across our AI toolkit",
      "AI image generation and editing",
      "AI video generation and editing",
      "AI voice over",
      "AI music and sound effects generation",
      "AI graphics and mockup generation"
    ]
  },
  {
    name: "Ultimate",
    price: "$109",
    priceSuffix: "/month",
    intro: "From",
    cta: "Select",
    features: [
      "Everything in Plus",
      "Unlimited AI generations per month across our AI toolkit"
    ]
  }
];

const teamPlans: PricingPlan[] = [
  {
    name: "Team",
    price: "$29",
    priceSuffix: "/month",
    intro: "From",
    cta: "Select",
    seatLabel: "1 editor",
    features: [
      "Unlimited downloads of 27+ million creative assets",
      "Stock Video and Photos",
      "Video Templates",
      "Music and Sound Effects",
      "Design Templates",
      "Graphics and 3D",
      "Fonts and add-ons",
      "10 AI generations per editor each month",
      "Workspace sharing for small creative teams"
    ]
  },
  {
    name: "Teams Plus",
    price: "$74",
    priceSuffix: "/month",
    intro: "From",
    cta: "Select",
    seatLabel: "3 editors",
    features: [
      "Everything in Team",
      "100 AI generations per editor each month",
      "AI image generation and editing",
      "AI video generation and editing",
      "AI voice over",
      "AI music and sound effects generation",
      "AI graphics and mockup generation",
      "Shared billing and permissions"
    ]
  },
  {
    name: "Ultimate",
    price: "$109",
    priceSuffix: "/month",
    intro: "From",
    cta: "Select",
    seatLabel: "1 editor",
    features: [
      "Everything in Teams Plus",
      "Unlimited AI generations per editor",
      "Priority access to premium AI models",
      "Advanced approval workflows"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    intro: "Talk to sales",
    cta: "Contact sales",
    enterprise: true,
    features: [
      "Custom downloads and AI generation allowances",
      "Advanced user management and approval flows",
      "Multiple workspaces and team structures",
      "Single sign-on and enhanced security",
      "Dedicated onboarding and success support"
    ]
  }
];

const aiModels = [
  "OpenAI",
  "Luma AI",
  "Veo",
  "Nano Banana",
  "Seedream",
  "KlingAI",
  "ElevenLabs",
  "Flux",
  "Minimax"
];

const lovedRows = [
  {
    title: "The broadest range of creative assets",
    items: ["Video", "Audio", "Photos", "Graphics", "Fonts", "Presentations", "and more"],
    icon: Check
  },
  {
    title: "Templates for all your tools",
    items: ["Adobe Creative Cloud", "Canva", "Affinity", "DaVinci Resolve", "Final Cut Pro", "Blender"],
    icon: Check
  },
  {
    title: "Powerful generative AI stack",
    items: ["ImageGen", "ImageEdit", "VideoGen", "MusicGen", "VoiceGen", "GraphicsGen"],
    icon: Check
  },
  {
    title: "Powered by leading AI models",
    items: ["OpenAI", "Luma AI", "Veo", "Nano Banana", "KlingAI", "ElevenLabs", "Flux", "Minimax"],
    icon: Check
  }
];

const faqs = [
  "What is Envato?",
  "Do any limits apply to downloads?",
  "How does licensing work?",
  "When can I cancel or upgrade my subscription?",
  "Can I get support for specific items?",
  "Can you use an Envato subscription to download assets from Envato Market?",
  "Are AI tools available for Enterprise?",
  "How are generations counted?",
  "What AI models are available?",
  "Which plan should I choose?"
];

const footerColumns = [
  {
    title: "Discover",
    links: ["About Envato", "Our Pricing & Plans", "Teams & Enterprise Plans", "Stock Video", "Video Templates", "Royalty-Free Music", "Stock Photos", "Fonts", "Popular Searches"]
  },
  {
    title: "License & User Terms",
    links: ["License Terms", "Terms & Conditions", "Privacy Policy", "Acceptable Use Policy", "Fair Use Policy", "Cookies", "Do not sell or share my personal information", "Cookie Settings"]
  },
  {
    title: "Resources",
    links: ["Discover Tuts+", "Video & Music", "Design", "Marketing", "Web Design", "Explore Blog", "Help", "Help Center", "Become an Affiliate"]
  },
  {
    title: "About Us",
    links: ["Who We Are", "Hey AI, learn about Envato", "Our Products", "Our Purpose", "Join Our Team", "Company Blog", "Authors", "Become an Author", "Author Sign In", "Author Help Center"]
  }
];

const navCategories = [
  "Gen AI",
  "Video Templates",
  "Stock Video",
  "Audio",
  "Graphics",
  "Design Templates",
  "More"
];

export function PricingPageView() {
  const [planView, setPlanView] = useState<"individual" | "teams">("individual");
  const plans = planView === "individual" ? individualPlans : teamPlans;

  return (
    <div className="min-h-screen bg-[#f8efe4] text-[#171717]">
      <header className="border-b border-[#e8e4dc] bg-[#f8efe4]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link href="/" className="focus-ring rounded-md">
                <span className="font-body text-[2rem] font-bold tracking-[-0.06em] text-[#171717]">envato</span>
              </Link>
              <nav className="hidden items-center gap-5 xl:flex">
                {navCategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="focus-ring inline-flex items-center gap-1 rounded-md text-[0.95rem] font-medium text-[#3b3b3b]"
                  >
                    {item}
                    <ChevronDown className="size-4" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="hidden items-center gap-5 xl:flex">
              <Link href="/search?q=license" className="focus-ring rounded-md text-[0.95rem] font-medium text-[#2f2f2f]">
                License
              </Link>
              <Link href="/search?q=enterprise" className="focus-ring rounded-md text-[0.95rem] font-medium text-[#2f2f2f]">
                Enterprise
              </Link>
              <Link href="/pricing" className="focus-ring rounded-md text-[0.95rem] font-medium text-[#2f2f2f]">
                Pricing
              </Link>
              <Link
                href="/pricing"
                className="focus-ring inline-flex h-12 min-w-[214px] items-center justify-center whitespace-nowrap rounded-lg bg-[#8CF45D] px-6 text-base font-semibold text-[#171717]"
              >
                Get unlimited downloads
              </Link>
              <CircleUser className="size-7 text-[#171717]" />
            </div>
          </div>

          <div className="mt-4 hidden justify-center lg:flex">
            <div className="flex h-[58px] w-full max-w-[1240px] items-center rounded-full border border-[#d7d3cc] bg-white px-6 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
              <button type="button" className="focus-ring inline-flex items-center gap-2 rounded-md text-base font-medium text-[#2d2d2d]">
                All Items
                <ChevronDown className="size-4" />
              </button>
              <div className="mx-5 h-8 w-px bg-[#ddd7cf]" />
              <Search className="size-5 text-[#525252]" />
              <input
                readOnly
                value="Search"
                className="ml-3 flex-1 bg-transparent text-base text-[#8a8a8a] outline-none"
                aria-label="Search"
              />
              <div className="flex items-center gap-4 text-[#222]">
                <Music className="size-5" />
                <ImageIcon className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-[#f8efe4] pb-0 pt-12 md:pt-14">
        <section className="mx-auto w-full max-w-[1320px] px-6">
          <h1 className="mx-auto max-w-[980px] text-center font-body text-[clamp(2.3rem,4.6vw,3.9rem)] font-bold leading-[0.96] tracking-[-0.07em] text-[#171717]">
            Unlimited creativity, all in one place
          </h1>

          <div className="mt-8 flex justify-center md:mt-10">
            <div className="inline-flex rounded-full border border-[#bfb8ae] bg-white p-2 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <button
                type="button"
                onClick={() => setPlanView("individual")}
                className={`focus-ring inline-flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold transition ${
                  planView === "individual" ? "bg-[#171717] text-white" : "text-[#6a6a6a]"
                }`}
              >
                <CircleUser className="size-5" />
                Individual
              </button>
              <button
                type="button"
                onClick={() => setPlanView("teams")}
                className={`focus-ring inline-flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold transition ${
                  planView === "teams" ? "bg-[#171717] text-white" : "text-[#6a6a6a]"
                }`}
              >
                <Sparkles className="size-5" />
                Teams & Enterprise
              </button>
            </div>
          </div>

          <div className={`mt-12 grid items-start gap-7 ${planView === "teams" ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}>
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2px] border border-[#cfc8bf] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] ${
                  planView === "teams" ? "min-h-[650px]" : "min-h-[680px]"
                }`}
              >
                <h2 className="text-[2rem] font-bold tracking-[-0.05em] text-[#171717]">{plan.name}</h2>
                {plan.seatLabel ? (
                  <div className="mt-5 inline-flex items-center gap-3 rounded-md border border-[#ddd6ce] px-3 py-2 text-sm font-medium text-[#3b3b3b]">
                    <button type="button" className="focus-ring inline-flex h-6 w-6 items-center justify-center rounded border border-[#d1c8bd]">
                      -
                    </button>
                    <span>{plan.seatLabel}</span>
                    <button type="button" className="focus-ring inline-flex h-6 w-6 items-center justify-center rounded border border-[#d1c8bd]">
                      +
                    </button>
                  </div>
                ) : null}
                <p className="mt-4 text-[1.1rem] text-[#2f2f2f]">{plan.intro}</p>
                <p className="mt-1 flex items-end gap-1">
                  <span className="text-[3.3rem] font-bold tracking-[-0.06em] text-[#171717]">{plan.price}</span>
                  {plan.priceSuffix ? <span className="mb-3 text-[1.35rem] text-[#2f2f2f]">{plan.priceSuffix}</span> : null}
                </p>

                <button
                  type="button"
                  className="focus-ring mt-8 inline-flex h-14 w-full items-center justify-center rounded-md bg-[#8CF45D] text-lg font-semibold text-[#171717]"
                >
                  {plan.cta}
                </button>

                <div className="mt-8">
                  <h3 className="text-[1.1rem] font-semibold text-[#171717]">Includes:</h3>
                  <ul className="mt-5 space-y-4 text-[1rem] leading-7 text-[#232323]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2f2f2f]">
                          <Check className="size-4" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-[1rem] text-[#555]">
            {planView === "individual"
              ? "Price in US Dollars, excludes local tax. Subject to Envato's User Terms, including our Fair Use Policy."
              : "Pricing shown in US Dollars. Team allowances scale by seats and enterprise plans are tailored with Envato's sales team."}
          </p>

          <section className="mx-auto mt-16 max-w-5xl text-center">
            <h2 className="text-[2.2rem] font-bold tracking-[-0.05em] text-[#171717]">Powered by leading AI models</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[1.2rem] font-semibold text-[#171717]">
              {aiModels.map((model) => (
                <span key={model}>{model}</span>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-xl rounded-[6px] border border-[#cfc8bf] bg-white px-8 py-8 text-center text-[1.15rem] font-medium text-[#2c2c2c]">
              Students save 30% on the Core Plan.
              <Link href="/search?q=student" className="ml-3 font-semibold underline">
                Learn more
              </Link>
            </div>
          </section>
        </section>

        <section className="mt-20 rounded-t-[34px] bg-white px-0 py-20">
          <div className="mx-auto w-full max-w-[1320px] px-6">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-body text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.06em] text-[#171717]">
                Loved by millions of creative pros globally
              </h2>
              <p className="mt-3 text-[1.5rem] font-medium tracking-[-0.03em] text-[#262626]">
                From independent freelancers to the world&apos;s biggest brands
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-6xl space-y-10">
              {lovedRows.map((row) => (
                <div key={row.title} className="grid gap-5 lg:grid-cols-[1.2fr_1.8fr] lg:items-center">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1d1d1d]">
                      <row.icon className="size-4" />
                    </div>
                    <p className="text-[1.15rem] font-medium text-[#222]">{row.title}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[1.1rem] text-[#232323]">
                    {row.items.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        {iconForItem(item)}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <section className="mx-auto mt-20 max-w-5xl">
              <h2 className="text-center font-body text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.05em] text-[#171717]">
                Easy and secure payment
              </h2>
              <div className="mt-10 grid gap-12 md:grid-cols-2">
                <div className="text-center">
                  <p className="text-[1.1rem] font-semibold text-[#171717]">Trusted payment methods</p>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    {["VISA", "Mastercard", "PayPal", "AmEx", "Apple Pay"].map((item) => (
                      <span key={item} className="rounded-[6px] border border-[#d8d8d8] bg-white px-4 py-2 text-sm font-semibold text-[#2f2f2f]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[1.1rem] font-semibold text-[#171717]">Secure payments</p>
                  <p className="mx-auto mt-4 max-w-md text-[1.2rem] leading-8 text-[#343434]">
                    Processed in a Level 1 PCI compliant environment.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-20 grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <h2 className="font-body text-[clamp(2rem,4vw,3.15rem)] font-bold tracking-[-0.05em] text-[#171717]">
                  FAQs
                </h2>
              </div>
              <div className="divide-y divide-[#e8e4dc] border-t border-[#e8e4dc]">
                {faqs.map((faq) => (
                  <button
                    key={faq}
                    type="button"
                    className="focus-ring flex w-full items-center justify-between py-6 text-left text-[1.15rem] font-medium text-[#171717]"
                  >
                    <span>{faq}</span>
                    <ChevronDown className="size-5" />
                  </button>
                ))}
              </div>
            </section>

            <p className="mt-14 text-center text-sm text-[#757575]">
              All logos are owned by their respective owners and are used for informational purposes only. No affiliation or endorsement is implied.
            </p>
          </div>
        </section>

        <footer className="mt-16 bg-[#f8efe4] py-14">
          <div className="mx-auto w-full max-w-[1320px] px-6">
            <div className="grid gap-12 xl:grid-cols-[1.1fr_2.4fr]">
              <div>
                <p className="font-body text-[3rem] font-bold tracking-[-0.06em] text-[#171717]">envato</p>
                <div className="mt-4 flex gap-4 text-[#171717]">
                  {["ig", "tt", "fb", "yt", "rd", "pi", "x"].map((item) => (
                    <span key={item} className="text-lg font-semibold uppercase">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-8 max-w-md text-[1.2rem] leading-8 text-[#2f2f2f]">
                  Yes to creative inspo in your inbox. Fresh tutorials, trends, tools and no boring bits.
                </p>
                <div className="mt-6 flex max-w-md items-center rounded-[6px] border border-[#cfc8bf] bg-white px-4 py-3">
                  <input
                    readOnly
                    value="Your email"
                    aria-label="Your email"
                    className="flex-1 bg-transparent text-[1.1rem] text-[#8d8d8d] outline-none"
                  />
                  <span className="text-xl font-semibold text-[#171717]">^</span>
                </div>
                <p className="mt-3 text-[1rem] text-[#585858]">Unsubscribe any time. Privacy Policy.</p>
              </div>

              <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="text-[1.2rem] font-semibold text-[#171717]">{column.title}</h3>
                    <div className="mt-5 space-y-3">
                      {column.links.map((link) => (
                        <p key={link} className="text-[1.1rem] leading-7 text-[#2f2f2f]">
                          {link}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-[#d9d1c7] pt-8">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-[1.1rem] text-[#2f2f2f]">
                  {["Envato Market", "Envato Tuts+", "Placeit by Envato", "Mixkit", "All Products", "Sitemap"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[1.1rem] text-[#171717]">
                  <Globe className="size-5" />
                  English
                  <ChevronDown className="size-4" />
                </div>
              </div>
              <p className="mt-6 text-[1rem] text-[#555]">
                (c) 2026 Envato Trademarks and brands are the property of their respective owners.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function iconForItem(item: string) {
  const baseClass = "size-5";

  if (item === "Video" || item === "Video Templates") return <Clapperboard className={baseClass} />;
  if (item === "Audio") return <AudioLines className={baseClass} />;
  if (item === "Photos" || item === "Stock Photos") return <Camera className={baseClass} />;
  if (item === "Graphics") return <PaintbrushVertical className={baseClass} />;
  if (item === "Fonts") return <WandSparkles className={baseClass} />;
  if (item === "Presentations") return <MonitorPlay className={baseClass} />;
  if (item === "Adobe Creative Cloud" || item === "Canva" || item === "Affinity") return <SquarePlay className={baseClass} />;
  if (item === "DaVinci Resolve" || item === "Final Cut Pro" || item === "Blender") return <MonitorPlay className={baseClass} />;
  if (item === "ImageGen" || item === "ImageEdit") return <ImageIcon className={baseClass} />;
  if (item === "VideoGen") return <Clapperboard className={baseClass} />;
  if (item === "MusicGen") return <Music className={baseClass} />;
  if (item === "VoiceGen") return <AudioLines className={baseClass} />;
  if (item === "GraphicsGen") return <PaintbrushVertical className={baseClass} />;
  if (item === "OpenAI" || item === "Luma AI" || item === "Veo" || item === "Nano Banana" || item === "KlingAI" || item === "ElevenLabs" || item === "Flux" || item === "Minimax") {
    return <Sparkles className={baseClass} />;
  }

  return <ShieldCheck className={baseClass} />;
}
