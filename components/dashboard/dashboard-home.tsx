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
  ExternalLink,
  Globe
} from "lucide-react";

const localImage = (name: string) => `/images/${name}.png`;

// Assets copied to public/images/
const monkeyImage = "/images/dashboard_monkey.png";
const carsImage = "/images/dashboard_cars.png";

const categories = [
  { name: "Figma Templates", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Graphics", image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Logos", image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Website Templates", image: "https://images.pexels.com/photos/4065140/pexels-photo-4065140.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "AI Images", image: "https://images.pexels.com/photos/3785931/pexels-photo-3785931.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

const topPicks = [
  { title: "SaaS Landing Pages", category: "Web Templates", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Minimal Logo Marks", category: "Logos", image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Startup Design System", category: "Figma Templates", image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "AI Portrait Collection", category: "AI Images", image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export function DashboardHome() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <DashboardTopbar />
      
      <main className="mx-auto w-full max-w-[1300px] px-6 py-10">
        <h1 className="font-body text-[2.2rem] font-bold tracking-[-0.04em] text-[#171717]">
          Welcome, Swaraj
        </h1>

        <section className="mt-10 grid gap-0 overflow-hidden rounded-[4px] border border-[#ece9df] lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-white p-10 lg:border-r lg:border-[#ece9df]">
            <div className="max-w-[340px]">
              <h2 className="text-[1.8rem] font-bold leading-[1.1] tracking-[-0.04em]">
                DesignGen: Studio-grade UI foundations at scale
              </h2>
              <p className="mt-4 text-[1.05rem] leading-7 text-[#4b4b4b]">
                Build faster with intelligent design tokens and auto-layout systems built for scale.
              </p>
            </div>
            <Link href="/products" className="mt-10 inline-flex h-11 w-[120px] items-center justify-center rounded-[3px] border border-[#222] text-[0.95rem] font-semibold hover:bg-gray-50">
              Learn more
            </Link>
          </div>

          <div className="relative aspect-[1.5/1] overflow-hidden lg:aspect-auto">
            <Image src={carsImage} alt="DesignGen" fill className="object-cover" />
          </div>

          <div className="relative aspect-[1.5/1] overflow-hidden lg:aspect-auto">
            <Image src={monkeyImage} alt="Nano Banana" fill className="object-cover" />
          </div>

          <div className="flex flex-col justify-between bg-white p-10">
            <div className="max-w-[340px]">
              <h2 className="text-[1.8rem] font-bold leading-[1.1] tracking-[-0.04em]">
                Create with Nano Banana 2
              </h2>
              <p className="mt-4 text-[1.05rem] leading-7 text-[#4b4b4b]">
                Generate and edit images with sharper detail and precise text rendering, powered by Google's latest image model.
              </p>
            </div>
            <Link href="/products" className="mt-10 inline-flex h-11 w-[120px] items-center justify-center rounded-[3px] border border-[#222] text-[0.95rem] font-semibold hover:bg-gray-50">
              Learn more
            </Link>
          </div>


        </section>

        <section className="mt-20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[1.55rem] font-bold tracking-[-0.02em]">Your Workspaces</h2>
              <p className="mt-1 text-[0.95rem] text-[#777]">Jump back into your recent Workspaces.</p>
            </div>
            <Link href="/products" className="text-[0.9rem] font-bold text-[#171717]">Show all</Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <WorkspaceCard type="create" />
            <WorkspaceCard type="project" title="Main Project" assets="0 assets" />
          </div>
        </section>

        <section className="mt-20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[1.55rem] font-bold tracking-[-0.02em]">Top categories</h2>
              <p className="mt-1 text-[0.95rem] text-[#777]">Discover the latest assets across our most-loved categories.</p>
            </div>
            <Link href="/products" className="text-[0.9rem] font-bold text-[#171717]">Show all</Link>
          </div>
          <div className="relative mt-8">
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {categories.map((cat) => (
                <Link key={cat.name} href="/products" className="flex-shrink-0 w-[170px] group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-[2px] bg-[#f4f4f4]">
                    <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="mt-3 text-[0.9rem] font-bold text-[#171717]">{cat.name}</h3>
                </Link>
              ))}
            </div>
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 size-10 flex items-center justify-center rounded-full bg-white border border-[#ece9df] shadow-md">
                <ChevronRight className="size-6" />
            </button>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <h2 className="text-[1.55rem] font-bold tracking-[-0.02em]">Top picks</h2>
            <p className="mt-1 text-[0.95rem] text-[#777]">Explore a selection of premium assets chosen just for you.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topPicks.map((pick) => (
              <Link key={pick.title} href="/products" className="relative aspect-[1.4/1] group cursor-pointer overflow-hidden rounded-[2px]">
                <Image src={pick.image} alt={pick.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[0.75rem] font-bold uppercase tracking-wider text-white/80">{pick.category}</span>
                  <h3 className="text-[1.1rem] font-bold text-white">{pick.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function WorkspaceCard({ type, title, assets }: { type: 'create' | 'project', title?: string, assets?: string }) {
  if (type === 'create') {
    return (
      <div className="group flex flex-col cursor-pointer">
        <div className="flex aspect-[1.3/1] items-center justify-center rounded-[2px] border-2 border-dashed border-[#ece9df] bg-[#fafafa] group-hover:bg-[#f5f5f5] transition-colors">
          <Plus className="size-8 text-[#999]" />
        </div>
        <div className="mt-4">
           <h3 className="text-[0.9rem] font-bold">Create new Workspace</h3>
           <p className="text-[0.85rem] text-[#777]">0 assets</p>
        </div>
      </div>
    );
  }
  return (
    <div className="group flex flex-col cursor-pointer">
      <div className="aspect-[1.3/1] rounded-[2px] bg-[#f0f0f0] group-hover:bg-[#e8e8e8] transition-colors" />
      <div className="mt-4">
         <h3 className="text-[0.9rem] font-bold">{title}</h3>
         <p className="text-[0.85rem] text-[#777]">{assets}</p>
      </div>
    </div>
  );
}

function DashboardTopbar() {
  return (
    <header className="border-b border-[#ece9df] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="focus-ring flex items-center gap-1.5 rounded-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#2EE59D"/>
              </svg>
              <span className="font-body text-[1.6rem] font-bold tracking-[-0.06em]">PixelForge</span>
            </Link>
            <nav className="hidden items-center gap-5 xl:flex">
              {["Figma Templates", "Graphics", "Logos", "Website Templates", "AI Images"].map((item) => (
                <button key={item} className="flex items-center gap-1 text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">
                  {item}
                  <ChevronDown className="size-3.5 text-[#888]" />
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center gap-6 mr-4">
              <Link href="/about" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">License</Link>
              <Link href="/about" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">Enterprise</Link>
              <Link href="/pricing" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717]">Pricing</Link>
            </div>
            <Link href="/products" className="hidden sm:inline-flex h-9 items-center justify-center rounded-[4px] bg-[#2EE59D] px-4 text-[0.88rem] font-bold text-[#171717]">
              Explore Collection
            </Link>
            <button className="p-2"><Moon className="size-5" /></button>
            <Link href="/" className="size-9 flex items-center justify-center rounded-full bg-[#3d3d3d] text-white text-[0.8rem] font-bold hover:brightness-110 transition">SL</Link>
          </div>
        </div>

        <div className="flex items-center gap-4 py-3">
           <div className="flex h-11 w-full max-w-[800px] items-center rounded-full border border-[#ece9df] bg-[#fbfbfb] px-4">
              <div className="flex items-center gap-2 pr-4 border-r border-[#ece9df]">
                <span className="text-[0.9rem] font-medium">All Items</span>
                <ChevronDown className="size-4" />
              </div>
              <Search className="ml-4 size-5 text-[#999]" />
              <input type="text" placeholder="Search" className="ml-3 flex-1 bg-transparent text-[0.95rem] outline-none" />
              <div className="flex items-center gap-3 pl-4">
                <ImageIcon className="size-4 text-[#999]" />
              </div>
           </div>
        </div>
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
            <p className="font-body text-[2.8rem] font-bold tracking-[-0.06em] text-[#171717]">PixelForge</p>
            <div className="mt-8 flex gap-5 text-[#171717]">
              {/* Social icons would go here */}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
             {/* Footer columns would go here */}
             <FooterColumn title="Discover" links={["About PixelForge", "Our Story", "Premium Studio Inventory", "Figma Templates", "Graphics", "Logos", "Website Templates", "AI Images", "Popular Designs"]} />
             <FooterColumn title="License & User Terms" links={["License Terms", "Terms & Conditions", "Privacy Policy", "Acceptable Use Policy", "Commercial License", "Cookies", "Support"]} />
             <FooterColumn title="Resources" links={["Design Guides", "Studio Blog", "UX Design", "Marketing", "Web Design", "Figma Tips", "Help Center"]} />
             <FooterColumn title="About" links={["Who We Are", "Our Vision", "Contact", "Authors", "Become an Author"]} />
          </div>
        </div>
        <div className="mt-20 border-t border-[#d9d1c7] pt-8 flex items-center justify-between">
           <div className="flex gap-6 text-[0.9rem] text-[#4b4b4b]">
              <span>PixelForge Studio</span>
              <span>PixelForge Learn</span>
              <span>PixelForge Create</span>
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
          <Link key={link} href="#" className="block text-[1rem] text-[#3b3b3b] hover:underline cursor-pointer">{link}</Link>
        ))}
      </div>
    </div>
  );
}
