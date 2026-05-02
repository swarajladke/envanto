import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Download, ShieldCheck, Sparkles, Store, Zap, Search, Image as ImageIcon } from "lucide-react";
import { products } from "@/lib/data";

const pexelsImage = (id: string, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const localImage = (name: string) => `/images/${name}.png`;

const topBenefits = [
  {
    title: "Every category covered",
    description:
      "Take your projects from great to groundbreaking with the broadest range of categories, all in one place.",
    icon: Store
  },
  {
    title: "Enjoy unlimited downloads",
    description:
      "Explore new styles, test different possibilities, and play around freely with no restrictions or extra costs.",
    icon: Download
  },
  {
    title: "Lifetime commercial license",
    description:
      "Ongoing commercial licenses mean more peace of mind. Any registered uses for your downloads are covered.",
    icon: ShieldCheck
  }
];

const middleBenefits = [
  {
    title: "Everything in one place",
    description:
      "With the broadest range of asset categories all in a single subscription, you can cut production costs and deliver work faster.",
    icon: Store
  },
  {
    title: "Millions of quality assets",
    description:
      "If you can imagine it, we've probably got it. With millions of assets and constant additions, you'll have what you need to create the extraordinary.",
    icon: Sparkles
  },
  {
    title: "Quality, artist-created assets",
    description:
      "Transform your projects with assets from talented artists around the world that add authenticity, personality, and originality.",
    icon: Zap
  },
  {
    title: "Cancel any time",
    description:
      "Plans change and life happens. Relax knowing that canceling your subscription is quick and hassle-free.",
    icon: Download
  }
];

const faqs = [
  "What's included with each template?",
  "Do templates work with multiple apps?",
  "How do updates and downloads work?",
  "Can I cancel or upgrade any time?"
];

const templateCards = [
  { title: "Openers", product: products[0], image: localImage("vfx_openers"), alt: "Openers template" },
  {
    title: "Product Promos",
    product: products[1],
    image: localImage("vfx_promos"),
    alt: "Product promos template"
  },
  {
    title: "Titles",
    product: products[2],
    image: localImage("vfx_titles"),
    alt: "Titles template"
  },
  {
    title: "Video Displays",
    product: products[3],
    image: localImage("vfx_video"),
    alt: "Video displays template"
  },
  {
    title: "Logo Stings",
    product: products[4],
    image: localImage("vfx_logo"),
    alt: "Logo stings template"
  },
  {
    title: "Broadcast Packages",
    product: products[8],
    image: pexelsImage("2582818"),
    alt: "Broadcast packages template"
  }
];

const creativeCards = [
  {
    title: "Stock Video",
    product: products[1],
    image: pexelsImage("853168"),
    alt: "Skydiver or extreme sports"
  },
  {
    title: "Video Templates",
    product: products[4],
    image: pexelsImage("3183150"),
    alt: "Abstract patterns"
  },
  {
    title: "Stock Photos",
    product: products[3],
    image: pexelsImage("1386604"),
    alt: "Creative portrait"
  },
  {
    title: "Royalty-Free Music",
    product: products[10],
    image: pexelsImage("164745"),
    alt: "Musician playing guitar"
  },
  {
    title: "Sound Effects",
    product: products[11],
    image: pexelsImage("3370381"),
    alt: "Color powder explosion"
  },
  {
    title: "Graphic Templates",
    product: products[6],
    image: pexelsImage("1989823"),
    alt: "Abstract 3D blocks"
  },
  {
    title: "Fonts",
    product: products[9],
    image: pexelsImage("3826678"),
    alt: "Creative typography"
  },
  {
    title: "Graphics",
    product: products[5],
    image: pexelsImage("1037992"),
    alt: "Colorful fluid texture"
  }
];

const heroLeft = [
  {
    key: "hero-left-1",
    image: localImage("hero_left_1"),
    alt: "FO typography",
    className:
      "left-[2%] top-[68px] z-10 h-[108px] w-[76px] sm:left-[3%] sm:top-[72px] sm:h-[148px] sm:w-[102px] lg:left-[4%] lg:top-[86px] lg:h-[216px] lg:w-[114px]"
  },
  {
    key: "hero-left-2",
    image: localImage("hero_left_2"),
    alt: "Abstract purple fluid",
    className:
      "left-[14%] top-[46px] z-20 h-[126px] w-[86px] sm:left-[12%] sm:top-[44px] sm:h-[182px] sm:w-[120px] lg:left-[12%] lg:top-[54px] lg:h-[252px] lg:w-[138px]"
  },
  {
    key: "hero-left-3",
    image: localImage("hero_left_3"),
    alt: "What typography",
    className:
      "left-[28%] top-[28px] z-30 hidden h-[142px] w-[96px] sm:block sm:h-[190px] sm:w-[134px] lg:left-[22%] lg:top-[36px] lg:h-[286px] lg:w-[158px]"
  }
];

const heroCenter = {
  image: localImage("hero_center"),
  alt: "Play button minimalist"
};

const heroRight = [
  {
    key: "hero-right-1",
    image: localImage("hero_right_1"),
    alt: "Glass architecture",
    className:
      "right-[24%] top-[28px] z-20 hidden h-[142px] w-[96px] sm:block sm:h-[190px] sm:w-[134px] lg:right-[18%] lg:top-[36px] lg:h-[286px] lg:w-[158px]"
  },
  {
    key: "hero-right-2",
    image: localImage("hero_right_2"),
    alt: "Blue and yellow abstract",
    className:
      "right-[10%] top-[46px] z-10 h-[126px] w-[86px] sm:right-[8%] sm:top-[44px] sm:h-[182px] sm:w-[120px] lg:right-[8%] lg:top-[54px] lg:h-[252px] lg:w-[128px]"
  },
  {
    key: "hero-right-3",
    image: localImage("hero_right_3"),
    alt: "Black and white grunge",
    className:
      "right-[1%] top-[68px] z-0 h-[108px] w-[76px] sm:right-[2%] sm:top-[72px] sm:h-[148px] sm:w-[98px] lg:right-[3%] lg:top-[86px] lg:h-[216px] lg:w-[104px]"
  }
];

const creatorSpotlightImage = {
  image: pexelsImage("762020"),
  alt: "Smiling woman in office"
};

export function ZORStyleLanding() {
  return (
    <div className="bg-white pt-[76px] text-[#171717]">
      <section className="border-b border-[#ecebe7] bg-white">
        <div className="container-shell pt-12 sm:pt-14 lg:pt-16">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="font-body text-[clamp(2.35rem,4.7vw,4.05rem)] font-bold leading-[0.98] tracking-[-0.06em] text-[#171717]">
              Unlimited After Effects Templates
            </h1>
            <p className="mx-auto mt-4 max-w-4xl text-[clamp(1.02rem,1.75vw,1.65rem)] font-medium tracking-[-0.035em] text-[#1f1f1f]">
              Studio-quality visuals, motion graphics, titles, transitions, and more.
            </p>
            <Link
              href="/products"
              className="focus-ring mt-6 inline-flex h-10 items-center justify-center rounded-[4px] bg-[#8CF45D] px-6 text-[0.95rem] font-semibold text-[#171717] transition hover:brightness-95"
            >
              Start creating
            </Link>
          </div>

          <div className="relative mx-auto mt-6 h-[180px] max-w-[1180px] overflow-hidden sm:mt-7 sm:h-[250px] lg:h-[322px]">
            <div className="absolute inset-x-0 top-[138px] h-px bg-[#efeee9] sm:top-[188px] lg:top-[238px]" />

            {heroLeft.map((item) => (
              <div
                key={item.key}
                className={`absolute overflow-hidden border border-[#ece7df] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.06)] ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100px, 188px"
                />
              </div>
            ))}

            <div className="absolute left-1/2 top-0 z-40 h-[172px] w-[238px] -translate-x-1/2 overflow-hidden border border-[#202020] bg-[#111] shadow-[0_22px_55px_rgba(0,0,0,0.16)] sm:h-[246px] sm:w-[390px] lg:h-[322px] lg:w-[700px]">
              <Image
                src={heroCenter.image}
                alt={heroCenter.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 238px, (max-width: 1024px) 390px, 700px"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_34%,rgba(0,0,0,0.18)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,transparent_0%,transparent_16%,rgba(0,0,0,0.14)_48%,rgba(0,0,0,0.36)_100%)]" />
              <div className="absolute inset-y-[10%] left-[5%] w-px bg-white/35" />
              <div className="absolute inset-y-[14%] right-[5%] w-px bg-white/20" />
              <div className="absolute left-[5%] right-[5%] top-[11%] h-px bg-white/35" />
              <div className="absolute bottom-[11%] left-[8%] right-[8%] h-px bg-white/20" />
              <div className="absolute left-[9%] top-[8%] text-[11px] font-medium uppercase tracking-[0.24em] text-white/75">
                ISO 100
              </div>
              <div className="absolute bottom-[8%] left-[9%] text-[11px] font-medium uppercase tracking-[0.24em] text-white/75">
                F4.0
              </div>
              <div className="absolute bottom-[8%] right-[8%] text-[11px] font-medium uppercase tracking-[0.24em] text-white/75">
                AF AUTO
              </div>
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70" />
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85" />
            </div>

            {heroRight.map((item) => (
              <div
                key={item.key}
                className={`absolute overflow-hidden border border-[#ece7df] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.06)] ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100px, 176px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-8 sm:py-10">
        <div className="container-shell">
          <div className="rounded-[26px] bg-[#f8efe4] px-6 py-10 sm:px-10 sm:py-14">
            <h2 className="text-center font-body text-[clamp(1.8rem,3vw,3rem)] font-bold tracking-[-0.04em] text-[#171717]">
              Your one-stop creative asset destination
            </h2>
            <div className="mt-9 grid gap-8 lg:grid-cols-3">
              {topBenefits.map((item) => (
                <article key={item.title} className="flex gap-4">
                  <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8CF45D] text-[#171717]">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.55rem] font-bold tracking-[-0.04em] text-[#171717]">{item.title}</h3>
                    <p className="mt-2 text-lg leading-8 text-[#373737]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="templates" className="py-10 sm:py-14">
        <div className="container-shell">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-4xl font-body text-[clamp(2rem,4vw,3.65rem)] font-bold tracking-[-0.05em] text-[#171717]">
              High-impact, fully customizable templates for superior VFX
            </h2>
            <Link
              href="/products"
              className="focus-ring inline-flex h-12 items-center justify-center self-start rounded-lg bg-[#1c1c1c] px-6 text-base font-semibold text-white transition hover:bg-black"
            >
              Explore all templates
            </Link>
          </div>

          <div className="grid gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
            {templateCards.map((item) => (
              <Link key={item.title} href={`/products/${item.product.slug}`} className="focus-ring block">
                <article className="group">
                  <div className="relative aspect-[1.18/1] overflow-hidden rounded-[2px] bg-[#f4f4f4]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-3 text-[1.05rem] font-semibold tracking-[-0.03em] text-[#171717] sm:text-[1.2rem]">
                    {item.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container-shell">
          <div className="rounded-[26px] bg-[#f8efe4] px-6 py-10 sm:px-10 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <h2 className="max-w-4xl font-body text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.05em] text-[#171717]">
                  ZOR. The must-have subscription for any creative.
                </h2>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {middleBenefits.map((item) => (
                    <article key={item.title} className="flex gap-4">
                      <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8CF45D] text-[#171717]">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-[1.05rem] font-bold tracking-[-0.03em] text-[#171717] sm:text-[1.2rem]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-[#383838] sm:text-lg sm:leading-8">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="focus-ring mt-10 inline-flex h-14 items-center justify-center rounded-xl bg-[#8CF45D] px-8 text-lg font-semibold text-[#171717] transition hover:brightness-95"
                >
                  Start creating
                </Link>
              </div>

              <div className="mx-auto w-full max-w-[420px]">
                <div className="relative aspect-square overflow-hidden rounded-full bg-white">
                  <Image
                    src={creatorSpotlightImage.image}
                    alt={creatorSpotlightImage.alt}
                    fill
                    className="object-cover"
                    sizes="420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="pb-8 pt-12 sm:pb-12 sm:pt-16">
        <div className="container-shell">
          <div className="mb-8 text-center sm:mb-12">
            <p className="text-[1.05rem] font-medium tracking-[0.02em] text-[#171717]">Trusted by top brands</p>
            <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-8 opacity-60 grayscale filter sm:gap-14">
              <span className="font-display text-xl font-bold tracking-tight">Google</span>
              <span className="font-serif text-xl font-bold italic">KPMG</span>
              <span className="font-sans text-xl font-black tracking-tighter">L&apos;OREAL</span>
              <span className="font-mono text-xl font-bold uppercase">Adidas</span>
              <span className="font-display text-xl font-semibold tracking-widest">Tencent</span>
              <span className="font-serif text-xl">Deloitte</span>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-body text-[clamp(2rem,4vw,3.55rem)] font-bold tracking-[-0.05em] text-[#171717]">
                We&apos;ve got your creativity covered
              </h2>
              <p className="mt-2 max-w-3xl text-lg text-[#383838]">
                Access all the creative assets you&apos;ll ever need, with one great-value subscription.
              </p>
            </div>
            <Link
              href="/products"
              className="focus-ring inline-flex h-12 items-center justify-center self-start rounded-lg bg-[#1c1c1c] px-6 text-base font-semibold text-white transition hover:bg-black"
            >
              Explore all categories
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {creativeCards.map((item) => (
              <Link key={item.title} href={`/products/${item.product.slug}`} className="focus-ring block">
                <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e4e4e4] bg-white transition-shadow hover:shadow-md">
                  <h3 className="px-4 py-3 text-[1.1rem] font-bold tracking-[-0.02em] text-[#171717]">{item.title}</h3>
                  <div className="relative mx-3 mb-3 aspect-square overflow-hidden rounded-[6px] bg-[#f4f4f4]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container-shell max-w-3xl">
          <h2 className="font-body text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.05em] text-[#171717]">
            Still have Qs
          </h2>
          <div className="mt-6 divide-y divide-[#e8e5df] border-b border-t border-[#e8e5df]">
            {faqs.map((item) => (
              <button
                type="button"
                key={item}
                className="focus-ring flex w-full items-center justify-between py-5 text-left text-[1.05rem] font-semibold tracking-[-0.03em] text-[#171717]"
              >
                <span>{item}</span>
                <ChevronDown className="size-5 text-[#171717]" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 pt-8 sm:pb-16">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[26px] bg-[#f8efe4] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="px-8 py-10 sm:px-12 sm:py-14">
              <p className="font-body text-[2.1rem] font-bold tracking-[-0.05em] text-[#171717]">ZOR</p>
              <h2 className="mt-7 max-w-xl font-body text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.06em] text-[#171717]">
                Let&apos;s create something extraordinary.
              </h2>
              <Link
                href="/products"
                className="focus-ring mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-[#8CF45D] px-8 text-lg font-semibold text-[#171717] transition hover:brightness-95"
              >
                Start creating
              </Link>
            </div>
            <div className="relative min-h-[260px]">
              <Image src={pexelsImage("796606")} alt="Pink balloons" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
