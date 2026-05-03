"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  Search, 
  Check,
  Plus,
  ChevronRight,
  Globe,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const pexelsImage = (id: string, width = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const fanImages = [
  pexelsImage("2693212"),    // Bold abstract neon art
  pexelsImage("1910236"),    // Colorful creative design
  pexelsImage("3052727"),    // Vibrant lights/motion
  pexelsImage("1191710"),    // Fashion/portrait — center hero
  pexelsImage("2832382"),    // Colorful paint splash
  pexelsImage("1762851"),    // Neon city / creative
  pexelsImage("2747901"),    // Abstract colorful texture
];

const templates = [
  { name: "Landing Page", image: "/images/landing.png" },
  { name: "Dashboard / Admin", image: "/images/dashboard.png" },
  { name: "E-commerce", image: "/images/ecommerce.png" },
  { name: "SaaS / Web App", image: "/images/saas.png" },
  { name: "Mobile App UI", image: "/images/mobile.png" },
  { name: "Portfolio", image: "/images/portfolio.png" },
  { name: "Blog / Content", image: "/images/blog.png" },
  { name: "Authentication", image: "/images/auth.png" },
  { name: "Component-Based UI", image: "/images/components.png" },
  { name: "Landing + Dashboard Hybrid", image: "/images/hybrid.png" },
  { name: "One Page UI", image: "/images/onepage.png" },
  { name: "Multi Page UI", image: "/images/multipage.png" },
  { name: "Dark Theme UI", image: "/images/dark.png" },
  { name: "Minimalist UI", image: "/images/minimal.png" },
  { name: "Material Design UI", image: pexelsImage("196644") },
  { name: "Glassmorphism UI", image: "/images/glass.png" },
  { name: "Neumorphism UI", image: "/images/neumorphic.png" },
  { name: "Data Visualization UI", image: "/images/dataviz.png" },
  { name: "Social Media UI", image: pexelsImage("2510428") },
  { name: "Streaming / Media UI", image: pexelsImage("3052727") },
];

const categories = [
  { name: "Figma Templates", image: pexelsImage("3183150") },
  { name: "Graphics", image: pexelsImage("1037992") },
  { name: "Logos", image: pexelsImage("4348401") },
  { name: "Website Templates", image: pexelsImage("4065140") },
  { name: "AI Images", image: pexelsImage("3785931") },
  { name: "Mobile App Kits", image: pexelsImage("1910236") },
  { name: "Fonts & Typography", image: pexelsImage("1762851") },
  { name: "Presentation Kits", image: pexelsImage("3183183") },
];

export function TemplateLanding() {
  return (
    <div className="min-h-screen bg-white text-[#171717] font-inter">
      <header className="flex h-[76px] items-center justify-between px-8 border-b border-[#ece9df] bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2.5 focus-ring rounded-md group">
          <div className="size-9 rounded-full bg-[#171717] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#FFF700"/>
             </svg>
          </div>
           <span className="font-inter text-[1.6rem] font-bold tracking-[-0.06em]">PixelForge</span>
        </Link>
        <div className="flex items-center gap-5">
           <Link href="/signin" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717] transition">
             Sign in
           </Link>
           <Link href="/signup" className="text-[0.92rem] font-medium text-[#4b433d] hover:text-[#171717] transition">
             Sign up
           </Link>
           <Link href="/products" className="h-[46px] px-6 flex items-center justify-center rounded-full bg-[#FFF700] text-[0.88rem] font-bold text-[#171717] hover:brightness-105 transition">
             Explore Collection
           </Link>
        </div>
      </header>

      <main>
        <section className="mesh-subtle pt-20 text-center">
          <div className="mx-auto max-w-[1200px] px-6">
            <h1 className="font-inter text-[3.2rem] md:text-[4.2rem] font-bold leading-tight tracking-[-0.03em] text-black">
              Premium UI Kits & Website Templates
            </h1>
            <p className="mt-6 text-[1.3rem] md:text-[1.6rem] font-medium text-[#4b433d] max-w-4xl mx-auto leading-relaxed opacity-90">
              Exquisite Figma kits, landing pages, and dashboard systems for world-class products.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="inline-flex h-[64px] items-center justify-center rounded-full bg-[#FFF700] px-14 text-[1.1rem] font-bold text-black shadow-xl shadow-yellow-400/20 hover:scale-105 transition-all">
                Browse Collection
              </Link>
              <Link href="/pricing" className="inline-flex h-[64px] items-center justify-center rounded-full bg-white border border-[#ece9df] px-10 text-[1.1rem] font-bold text-black hover:bg-gray-50 transition-all">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="pb-32 mt-16" style={{ background: 'linear-gradient(to bottom, transparent 50%, #f8efe4 50%)' }}>
            {/* Split Hero Banner — Restored Exact Version */}
            <div className="relative w-full max-w-[1200px] mx-auto px-6">
              <div className="relative h-[340px] w-full overflow-hidden rounded-[32px] shadow-2xl bg-[#171717] flex border border-white/10">
                {/* Text Half */}
                <div className="w-1/2 flex flex-col justify-center px-16 z-10 text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-1 w-10 bg-[#FFF700] rounded-full" />
                    <span className="text-[#FFF700] text-[0.85rem] font-bold uppercase tracking-[0.2em]">Premium Assets</span>
                  </div>
                  <h2 className="text-white text-[2.5rem] font-bold leading-[1.1] mb-6">
                    Elevate your <span className="text-[#FFF700]">creative</span> workflow.
                  </h2>
                  <p className="text-white/60 text-[1rem] leading-relaxed max-w-[380px]">
                    Access curated templates, graphics, and UI kits designed to help your projects stand out.
                  </p>
                </div>

                {/* Image Half */}
                <div className="w-1/2 relative">
                  <Image 
                    src={pexelsImage("3052727", 1200)} 
                    alt="Creative Showcase" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="bg-[#f8efe4] border-b border-[#e8e4dc] pb-12 pt-12">
          <div className="mx-auto max-w-[1100px] px-6">
            <h2 className="text-center text-[1.5rem] font-bold tracking-tight mb-10">Your premium destination for high-end digital assets</h2>
            <div className="grid gap-10 md:grid-cols-3">
              <FeatureItem 
                title="Every category covered" 
                desc="From Figma kits to custom logos, we have it all. Professional templates, graphics, and AI assets."
              />
              <FeatureItem 
                title="High-quality curation" 
                desc="Start with our high-quality selections and find the perfect assets as your projects grow."
              />
              <FeatureItem 
                title="Lifetime commercial license" 
                desc="All assets come with a commercial license for peace of mind. Your projects are covered forever."
              />
            </div>
          </div>
        </section>

        {/* Template Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-[1.8rem] font-bold tracking-tight">Exquisite UI foundations for world-class digital experiences</h2>
               <Link href="/products" className="bg-[#171717] inline-flex justify-center items-center text-white px-6 py-3 rounded-full text-[0.9rem] font-bold">Explore all templates</Link>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {templates.slice(0, 9).map((t, i) => (
                <Link 
                  href="/products" 
                  key={i} 
                  className={cn(
                    "group cursor-pointer card-transition",
                    i === 0 ? "lg:col-span-2" : ""
                  )}
                >
                  <div className={cn(
                    "relative overflow-hidden rounded-[32px] bg-[#f4f4f4] border border-[#ece9df] shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 card-transition",
                    i === 0 ? "aspect-[2/1]" : "aspect-[1.3/1]"
                  )}>
                    <Image src={t.image} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  </div>
                  <div className="mt-6 flex items-center justify-between px-2">
                    <div>
                      <h3 className="text-[1.3rem] font-bold tracking-tight">{t.name}</h3>
                      <p className="text-[0.95rem] text-[#777] mt-1 font-medium">Professional Template</p>
                    </div>
                    <div className="size-11 rounded-full border border-[#ece9df] flex items-center justify-center bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                      <ChevronRight className="size-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-[#f8efe4] py-24">
          <div className="mx-auto max-w-[1200px] px-6">
             <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
                <div>
                   <h2 className="text-[2.2rem] font-bold leading-tight mb-12">PixelForge. The premium studio inventory for visionaries.</h2>
                   <div className="grid gap-8 sm:grid-cols-2">
                      <PointItem title="Handcrafted Quality" desc="Every asset is meticulously designed for professional use. No generic filler, only top-tier foundations." />
                      <PointItem title="Modern Design Systems" desc="Complete Figma kits with auto-layout, design tokens, and comprehensive variant coverage." />
                      <PointItem title="Clean Implementation" desc="Our website templates are built with performance and developer experience in mind." />
                      <PointItem title="Built for Creatives" desc="A curated library designed to help you build faster and better." />
                   </div>
                   <Link href="/products" className="mt-12 inline-flex h-12 items-center justify-center rounded-full bg-[#FFF700] px-10 text-[1rem] font-bold text-[#171717] hover:brightness-105 transition">
                      View All Products
                   </Link>
                </div>
                <div className="relative aspect-square">
                   <div className="relative h-full w-full overflow-hidden rounded-full border-[12px] border-white shadow-2xl">
                      <Image src="https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Creative User" fill className="object-cover" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Trusted Bar */}
        <section className="py-12 border-b border-[#ece9df]">
           <p className="text-center text-[0.9rem] font-bold text-[#777] uppercase tracking-widest mb-8">Trusted by top brands</p>
           <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
              {["Google", "Microsoft", "Adobe", "Netflix", "Spotify"].map(b => (
                <span key={b} className="text-xl font-bold">{b}</span>
              ))}
           </div>
        </section>

        {/* Category Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex items-center justify-between mb-12">
               <div>
                  <h2 className="text-[1.8rem] font-bold tracking-tight">We&apos;ve got your creativity covered</h2>
                  <p className="mt-2 text-[#4b4b4b]">Discover the latest assets across our most-loved categories.</p>
               </div>
               <Link href="/products" className="bg-[#171717] inline-flex justify-center items-center text-white px-6 py-3 rounded-full text-[0.9rem] font-bold">Explore all categories</Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
               {categories.map((cat, i) => (
                 <Link key={i} href="/products" className="group flex flex-col glass-premium rounded-[32px] p-7 card-transition border-none hover:shadow-2xl hover:-translate-y-2">
                    <h3 className="text-[1.3rem] font-bold mb-6 tracking-tight">{cat.name}</h3>
                    <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#f4f4f4] shadow-inner">
                       <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                    </div>
                 </Link>
               ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#fbfbfb]">
           <div className="mx-auto max-w-[800px] px-6">
              <h2 className="text-center text-[2.2rem] font-bold mb-12">Still have questions?</h2>
              <div className="space-y-4">
                 <FaqItem question="What is PixelForge Elements?" />
                 <FaqItem question="What can I use the assets for?" />
                 <FaqItem question="How do I access my downloads?" />
                 <FaqItem question="Do you support individual license requests?" />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
           <div className="mx-auto max-w-[1200px] px-6">
              <div className="relative overflow-hidden rounded-[16px] bg-[#f8efe4] p-16 flex flex-col md:flex-row items-center justify-between">
                 <div className="relative z-10 max-w-lg text-center md:text-left">
                    <div className="mb-6 flex items-center justify-center md:justify-start gap-2">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#FFF700"/>
                       </svg>
                       <span className="font-inter text-[2rem] font-bold tracking-tight">PixelForge</span>
                    </div>
                    <h2 className="text-[3rem] font-bold leading-tight tracking-tight">Let&apos;s build something extraordinary.</h2>
                    <Link href="/products" className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-[#FFF700] px-10 text-[1rem] font-bold text-[#171717] hover:brightness-105 transition">
                       Explore Products
                    </Link>
                 </div>
                 <div className="absolute right-0 top-0 h-full w-[45%] hidden md:block">
                    <Image src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Creative Design" fill className="object-cover" />
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="size-8 shrink-0 rounded-full bg-[#FFF700] flex items-center justify-center">
        <Check className="size-5 text-white" />
      </div>
      <div>
        <h3 className="text-[1.1rem] font-bold">{title}</h3>
        <p className="mt-2 text-[0.95rem] text-[#4b4b4b] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function PointItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
         <div className="size-7 rounded-full bg-[#FFF700] flex items-center justify-center">
            <Check className="size-4 text-white" />
         </div>
         <h3 className="text-[1.05rem] font-bold">{title}</h3>
      </div>
      <p className="text-[0.95rem] text-[#4b4b4b] leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ question }: { question: string }) {
  return (
    <div className="flex items-center justify-between p-6 glass-premium rounded-[20px] cursor-pointer hover:border-[#FFF700] border border-[#ece9df] transition-all hover:pl-8 group">
       <span className="text-[1.1rem] font-bold group-hover:text-black transition-colors">{question}</span>
       <div className="size-9 rounded-full border border-[#ece9df] flex items-center justify-center bg-white group-hover:border-[#FFF700] transition-colors">
          <ChevronDown className="size-5 text-[#999] group-hover:text-black transition-colors" />
       </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f8efe4] border-t border-[#e8e4dc] px-8 py-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.85rem] font-medium text-[#4b4b4b]">
           <Link href="/about" className="hover:text-[#171717]">About PixelForge</Link>
           <Link href="/pricing" className="hover:text-[#171717]">Plans & Pricing</Link>
           <Link href="#" className="hover:text-[#171717]">License Terms</Link>
           <Link href="#" className="hover:text-[#171717]">Terms & Conditions</Link>
           <Link href="#" className="hover:text-[#171717]">Privacy Policy</Link>
           <Link href="#" className="hover:text-[#171717]">Cookies</Link>
           <Link href="#" className="hover:text-[#171717]">Help</Link>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-[#d9d1c7] pt-8">
           <div className="flex gap-6 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#FFF700" />
              </svg>
              <p className="text-[0.8rem] text-[#777]">(c) 2026 PixelForge Trademarks and brands are the property of their respective owners.</p>
           </div>
           <div className="flex items-center gap-2 text-[0.9rem] font-medium">
              <Globe className="size-4" />
              English
              <ChevronDown className="size-3" />
           </div>
        </div>
      </div>
    </footer>
  );
}
