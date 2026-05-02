"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  Search, 
  Music, 
  Image as ImageIcon, 
  Moon, 
  Plus,
  ChevronRight,
  ArrowRight,
  MonitorPlay,
  AudioLines,
  Clapperboard,
  PaintbrushVertical,
  WandSparkles,
  Box,
  Layout,
  Camera,
  Globe,
  CircleUser,
  Sparkles,
  Zap,
  ZapIcon
} from "lucide-react";

const pexelsImage = (id: string, width = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const categories = [
  { name: "AI Tools", label: "Create with our", image: pexelsImage("3861958") },
  { name: "Video Templates", count: "160,000+", image: pexelsImage("2582818") },
  { name: "Stock Photos", count: "9.2M+", image: pexelsImage("1770809") },
  { name: "Royalty-Free Music", count: "150,000+", image: pexelsImage("1105666") },
  { name: "Sound Effects", count: "600,000+", image: pexelsImage("3783471") },
  { name: "Graphic Templates", count: "210,000+", image: pexelsImage("3184311") },
  { name: "Fonts", count: "40,000+", image: pexelsImage("164005") },
  { name: "Graphics", count: "1,000,000+", image: pexelsImage("1037992") },
  { name: "3D", count: "130,000+", image: pexelsImage("3785931") },
  { name: "Add-ons", count: "11,000+", image: pexelsImage("1457842") },
  { name: "Presentation Templates", count: "24,000+", image: pexelsImage("3182812") },
  { name: "All Categories", count: "20 titles", image: pexelsImage("3184339") },
];

const aiTools = [
  { name: "VideoGen", image: pexelsImage("2510428") },
  { name: "ImageGen", image: pexelsImage("3826678") },
  { name: "ImageEdit", image: pexelsImage("3184311") },
  { name: "VideoEdit", image: pexelsImage("2582818") },
  { name: "MusicGen", image: pexelsImage("1105666") },
  { name: "GraphicsGen", image: pexelsImage("1037992") },
  { name: "MockupGen", image: pexelsImage("3182812") },
  { name: "SoundGen", image: pexelsImage("3783471") },
];

export function ElementsHome() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] text-[#171717]">
      <HomeTopbar />
      
      <main className="mx-auto w-full max-w-[1300px] px-6 py-8">
        {/* Hero Section */}
        <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="relative overflow-hidden rounded-[8px] bg-[#111] p-10 text-white min-h-[440px] flex flex-col justify-center">
            <div className="absolute inset-0 opacity-40">
                <Image src={pexelsImage("3861958", 1200)} alt="Hero" fill className="object-cover" />
            </div>
            <div className="relative z-10 max-w-xl">
              <h1 className="font-body text-[3.8rem] font-bold leading-[0.95] tracking-[-0.05em]">
                Unlimited creativity, all in one place
              </h1>
              <p className="mt-6 text-[1.4rem] font-medium text-white/90">
                Create with AI tools, and unlimited stock, fonts, videos, music, templates & more.
              </p>
              
              <div className="mt-8 flex h-16 w-full max-w-[840px] items-center rounded-[8px] bg-white px-4 shadow-xl">
                 <div className="flex items-center gap-2 pr-4 border-r border-gray-300 cursor-pointer hover:text-black text-black">
                   <span className="text-[1rem] font-bold">All Items</span>
                   <ChevronDown className="size-4 text-gray-500" />
                 </div>
                 <Search className="ml-4 size-6 text-[#999]" />
                 <input type="text" placeholder="Search templates, music, videos & more" className="ml-3 flex-1 bg-transparent text-[1.1rem] text-black outline-none placeholder:text-gray-500" />
                 <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                   <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition text-black">
                     <AudioLines className="size-5 text-[#81d742]" />
                     <span className="text-[0.9rem] font-bold hidden sm:inline">Sounds like</span>
                   </button>
                   <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition text-black">
                     <ImageIcon className="size-5 text-[#81d742]" />
                     <span className="text-[0.9rem] font-bold hidden sm:inline">Looks like</span>
                   </button>
                 </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-[8px] border border-[#ece9df] bg-white p-8">
            <span className="text-sm font-medium text-[#777]">From</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-[2.4rem] font-bold tracking-tight">$16.50</span>
              <span className="text-[1.1rem] text-[#777]">/month</span>
            </div>
            <ul className="mt-6 space-y-4 text-[0.95rem] text-[#333]">
              <li className="flex gap-3">
                <div className="size-5 shrink-0 rounded-full bg-[#e3fadb] flex items-center justify-center">
                    <div className="size-2 rounded-full bg-[#2a6813]" />
                </div>
                <span>Unlimited downloads of 27+ million creative assets</span>
              </li>
              <li className="flex gap-3">
                <div className="size-5 shrink-0 rounded-full bg-[#e3fadb] flex items-center justify-center">
                    <div className="size-2 rounded-full bg-[#2a6813]" />
                </div>
                <span>All tools, fonts, music, videos</span>
              </li>
              <li className="flex gap-3">
                <div className="size-5 shrink-0 rounded-full bg-[#e3fadb] flex items-center justify-center">
                    <div className="size-2 rounded-full bg-[#2a6813]" />
                </div>
                <span>Lifetime commercial license</span>
              </li>
            </ul>
            <Link href="/pricing" className="mt-8 flex w-full h-12 bg-[#8CF45D] items-center justify-center rounded-[4px] font-bold text-[#171717]">
              Get unlimited downloads
            </Link>
          </div>
        </section>

        {/* Category Grid */}
        <section className="mt-16">
          <h2 className="text-[1.8rem] font-bold tracking-[-0.03em]">Every type of asset, for any type of project</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {categories.map((cat, i) => (
              <Link key={i} href="/products" className={`group relative aspect-[0.95/1] overflow-hidden rounded-[12px] border border-[#ece9df] bg-white cursor-pointer shadow-sm hover:shadow-md transition-shadow ${i === 0 || i === 5 || i === 8 ? 'lg:col-span-2 lg:aspect-auto' : ''}`}>
                <div className="p-5 pb-0">
                  {cat.label && <span className="text-[0.85rem] font-bold text-[#777]">{cat.label}</span>}
                  <h3 className="text-[1.3rem] font-bold leading-tight">{cat.name}</h3>
                  {cat.count && <p className="text-[0.85rem] text-[#777]">{cat.count}</p>}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[70%] p-4 pt-0">
                  <div className="relative h-full w-full overflow-hidden rounded-[8px]">
                    <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="mt-24">
          <h2 className="text-[1.8rem] font-bold tracking-[-0.03em]">Suite of AI tools</h2>
          <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
            {aiTools.map((tool, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-[8px] cursor-pointer">
                <Image src={tool.image} alt={tool.name} fill className="object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-md">
                   <Sparkles className="size-4 text-white" />
                   <span className="text-[0.85rem] font-bold text-white uppercase tracking-wider">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-32">
          <h2 className="text-[1.8rem] font-bold tracking-[-0.03em] mb-10">Why creatives choose ZOR?</h2>
          <div className="space-y-6">
            <BenefitBanner 
              title="Every category, covered" 
              description="Make your best work yet with a comprehensive library of high-quality, creative assets - from audio, photos, graphics, templates, and more have constant game artists." 
              image={pexelsImage("3184339")}
              color="bg-[#132d18]"
              textColor="text-white"
            />
            <BenefitBanner 
              title="Suite of AI tools" 
              description="Access to simple, but powerful, AI tools across the platform, powered by the latest models. Focus on the creative part of your creative flow." 
              image={pexelsImage("3826678")}
              color="bg-white border border-[#ece9df]"
              textColor="text-[#171717]"
            />
            <BenefitBanner 
              title="Unlimited asset downloads" 
              description="Get all the assets you'll ever need in one great-value subscription. No hidden costs, just simple and clear subscription." 
              image={pexelsImage("1287145")}
              color="bg-white border border-[#ece9df]"
              textColor="text-[#171717]"
              hasCta
            />
          </div>
        </section>

        {/* Brand Trust */}
        <section className="mt-32 text-center pb-20">
           <h2 className="text-[1.1rem] font-bold text-[#777] uppercase tracking-[0.1em]">Trusted by top brands</h2>
           <div className="mt-10 flex flex-wrap justify-center items-center gap-x-16 gap-y-10 grayscale opacity-60">
              <span className="text-2xl font-bold">Google</span>
              <span className="text-2xl font-serif font-bold italic">KPMG</span>
              <span className="text-2xl font-sans font-black">ADOBE</span>
              <span className="text-2xl font-mono uppercase font-bold">Adidas</span>
              <span className="text-2xl font-bold tracking-widest">PEPSICO</span>
              <span className="text-2xl font-serif">L&apos;OREAL</span>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function BenefitBanner({ title, description, image, color, textColor, hasCta = false }: any) {
  return (
    <div className={`overflow-hidden rounded-[12px] lg:grid lg:grid-cols-[1fr_360px] ${color}`}>
      <div className="p-10 flex flex-col justify-center">
        <h3 className={`text-[2rem] font-bold tracking-tight ${textColor}`}>{title}</h3>
        <p className={`mt-4 text-[1.1rem] leading-7 max-w-xl ${textColor === 'text-white' ? 'text-white/80' : 'text-[#4b4b4b]'}`}>
          {description}
        </p>
        {hasCta && (
          <button className="mt-8 self-start bg-[#8CF45D] px-6 py-3 rounded-[4px] font-bold text-[#171717]">
            Get unlimited downloads
          </button>
        )}
      </div>
      <div className="relative aspect-[1.6/1] lg:aspect-auto">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}

function HomeTopbar() {
  return (
    <header className="border-b border-[#ece9df] bg-white sticky top-0 z-50">
      <div className="mx-auto w-full max-w-[1300px] px-6">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="focus-ring flex items-center gap-1.5 rounded-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#8CF45D"/>
              </svg>
              <span className="font-body text-[1.6rem] font-bold tracking-[-0.06em]">ZOR</span>
            </Link>
            <nav className="hidden items-center gap-5 xl:flex">
              {["Gen AI", "Video Templates", "Stock Video", "Audio", "Graphics", "More"].map((item) => (
                <button key={item} className="flex items-center gap-1 text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">
                  {item}
                  <ChevronDown className="size-3.5 text-[#888]" />
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center gap-6 mr-4">
              <Link href="/license" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">License</Link>
              <Link href="/enterprise" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">Enterprise</Link>
              <Link href="/pricing" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">Pricing</Link>
            </div>
            <Link href="/pricing" className="hidden sm:inline-flex h-9 items-center justify-center rounded-[4px] bg-[#8CF45D] px-4 text-[0.88rem] font-bold text-[#171717]">
              Get unlimited downloads
            </Link>
            <button className="p-2"><Moon className="size-5" /></button>
            <Link href="/signin" className="text-[0.9rem] font-bold">Sign In</Link>
          </div>
        </div>

        {/* Removed redundant topbar search to match exact ZOR layout */}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f8efe4] border-t border-[#e8e4dc] px-8 py-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.4fr]">
          <div>
            <p className="font-body text-[2.8rem] font-bold tracking-[-0.06em] text-[#171717]">ZOR</p>
            <div className="mt-8 flex gap-5 text-[#171717]">
               {/* Newsletter placeholder */}
               <div className="flex flex-col gap-2">
                 <p className="text-[1rem] font-bold text-[#171717]">Yes to creative inspo in your inbox.</p>
                 <div className="flex gap-2">
                    <input type="text" placeholder="Your email" className="h-11 px-4 border border-[#cfc8bf] rounded-[4px] bg-white w-64 outline-none" />
                    <button className="h-11 px-6 bg-[#171717] text-white rounded-[4px] font-bold">Sign up</button>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
             <FooterColumn title="Discover" links={["About ZOR", "Our Pricing & Plans", "Teams & Enterprise Plans", "Stock Video", "Video Templates", "Royalty-Free Music", "Stock Photos", "Fonts", "Popular Searches"]} />
             <FooterColumn title="License & User Terms" links={["License Terms", "Terms & Conditions", "Privacy Policy", "Acceptable Use Policy", "Fair Use Policy", "Cookies", "Cookie Settings"]} />
             <FooterColumn title="Resources" links={["Discover Tuts+", "Video & Music", "Design", "Marketing", "Web Design", "Explore Blog", "Help Center", "Become an Affiliate"]} />
             <FooterColumn title="About Us" links={["Who We Are", "Our Purpose", "Join Our Team", "Company Blog", "Authors", "Become an Author", "Author Help Center"]} />
          </div>
        </div>
        <div className="mt-20 border-t border-[#d9d1c7] pt-8 flex items-center justify-between">
           <div className="flex gap-6 text-[0.9rem] text-[#4b4b4b]">
              <span>ZOR Market</span>
              <span>ZOR Learn</span>
              <span>ZOR Create</span>
              <span>Mixkit</span>
              <span>All Products</span>
              <span>Sitemap</span>
           </div>
           <div className="flex items-center gap-2 text-[0.95rem] font-medium">
              <Globe className="size-5" />
              English
              <ChevronDown className="size-4" />
           </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div>
      <h3 className="text-[1.05rem] font-bold text-[#171717]">{title}</h3>
      <div className="mt-6 space-y-3">
        {links.map(link => (
          <p key={link} className="text-[1rem] text-[#3b3b3b] hover:underline cursor-pointer">{link}</p>
        ))}
      </div>
    </div>
  );
}
