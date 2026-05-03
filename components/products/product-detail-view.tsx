"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BookmarkPlus,
  ChevronRight,
  Download,
  Info
} from "lucide-react";
import { getRelatedProducts } from "@/lib/data";
import type { Product } from "@/lib/types";

export function ProductDetailView({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const related = getRelatedProducts(product.id, product.category);

  return (
    <div className="min-h-screen bg-[#f8efe4] font-inter text-[#171717] pb-24">
      {/* Topbar / Breadcrumbs */}
      <div className="bg-white border-b border-[#ece9df] py-4 px-6">
        <div className="mx-auto max-w-[1400px] flex items-center gap-2 text-[0.85rem] font-medium text-[#777]">
          <Link href="/" className="hover:text-[#171717]">Home</Link>
          <ChevronRight className="size-3" />
          <Link href="/products" className="hover:text-[#171717] capitalize">{product.category.replace("-", " ")}</Link>
          <ChevronRight className="size-3" />
          <span className="text-[#171717] truncate max-w-[300px]">{product.title}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 mt-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_360px]">
          {/* Main Content (Left) */}
          <div>
            <h1 className="text-[2rem] font-bold leading-tight mb-6">{product.title}</h1>
            
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[8px] bg-black shadow-md">
              <Image
                src={activeImage}
                alt={`${product.title} preview`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-32 aspect-video shrink-0 overflow-hidden rounded-[4px] border-2 transition ${activeImage === img ? 'border-[#FFF700]' : 'border-transparent opacity-70 hover:opacity-100'}`}                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-[8px] p-8 shadow-sm border border-[#ece9df]">
              <h2 className="text-[1.2rem] font-bold mb-4">Item Details</h2>
              <div className="text-[0.95rem] text-[#4b4b4b] leading-relaxed space-y-4">
                <p>{product.description}</p>
                <p>{product.longDescription}</p>
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-[8px] p-6 shadow-sm border border-[#ece9df]">
               <Link href="/pricing" className="w-full flex items-center justify-center gap-2 h-14 rounded-[4px] bg-[#FFF700] text-[1.1rem] font-bold text-[#171717] hover:brightness-105 transition">
                 <Download className="size-5" />
                 Subscribe to download
               </Link>
               <button className="mt-3 w-full flex items-center justify-center gap-2 h-12 rounded-[4px] border border-[#dcdad4] bg-white text-[0.95rem] font-bold text-[#171717] hover:bg-gray-50 transition">
                 <BookmarkPlus className="size-5" />
                 Save to collection
               </button>

               <div className="mt-6 flex items-center gap-3 pt-6 border-t border-[#ece9df]">
                 <div className="size-10 rounded-full bg-[#171717] flex items-center justify-center p-2 relative overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                       <path d="M21.16 3.96C20.66 3.46 19.98 3.16 19.23 3.13C18.66 3.11 18.06 3.23 17.43 3.48C13.62 5.01 9.4 8.65 6.7 12.75C5.86 14.02 5.17 15.34 4.67 16.66C4.42 17.34 4.09 18.3 4.29 19.12C4.42 19.68 4.77 20.21 5.31 20.59C5.91 21.01 6.64 21.13 7.33 20.97C8.19 20.76 9.07 19.99 9.8 19.06C11.83 16.48 13.56 12.98 14.88 9.29C15.5 7.55 15.89 5.8 15.93 4.23C15.94 3.79 15.77 3.46 15.54 3.23C15.3 3 14.96 2.91 14.6 2.94C13.88 3.01 13.06 3.33 12.19 3.84C8.61 5.92 4.96 10.37 2.84 15.68C2.55 16.4 2.29 17.15 2.08 17.91C1.94 18.42 1.83 18.94 1.76 19.46L1.67 20.19L2.34 19.86C4.01 19.03 5.48 17.65 6.6 15.95C9.37 11.75 13.73 8.04 17.65 6.47C18.2 6.25 18.72 6.13 19.21 6.15C19.5 6.16 19.74 6.24 19.89 6.39C20.04 6.54 20.1 6.75 20.05 6.99C19.89 7.82 19.34 8.76 18.44 9.68C16.92 11.23 14.54 12.87 11.66 14.28L10.96 14.62L11.58 15.02C13.25 16.1 15.11 16.92 17.06 17.43C17.69 17.6 18.33 17.69 18.97 17.69C19.97 17.69 20.93 17.45 21.75 16.97C22.75 16.4 23.47 15.42 23.77 14.24C24.08 13 23.95 11.63 23.4 10.37C22.84 9.1 21.9 8.02 20.73 7.3C19.78 6.72 18.72 6.36 17.6 6.25C17.7 6.07 17.81 5.88 17.92 5.68C18.66 4.3 19.68 3.52 20.72 3.44C20.98 3.42 21.24 3.49 21.46 3.66L21.84 3.95L21.16 3.96Z" fill="#FFF700"/>
                    </svg>
                 </div>
                 <div>
                    <p className="text-[0.8rem] text-[#777] font-medium">By</p>
                    <Link href="#" className="text-[0.95rem] font-bold hover:underline">PixelForge Studio</Link>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-[8px] p-6 shadow-sm border border-[#ece9df]">
               <h3 className="font-bold text-[1.05rem] mb-4">Item Specifications</h3>
               <div className="space-y-3">
                  <SpecRow label="Category" value={product.category.replace("-", " ")} />
                  <SpecRow label="License" value={product.license} />
                  <SpecRow label="Version" value={product.changelog[0]?.version ?? "1.0"} />
                  <SpecRow label="Released" value={product.changelog[product.changelog.length - 1]?.date ?? "2025"} />
                  <SpecRow label="Support" value="Lifetime updates" />
               </div>
            </div>

            <div className="bg-[#fbfbfb] rounded-[8px] p-5 border border-[#ece9df] flex items-start gap-3">
               <Info className="size-5 text-[#777] shrink-0 mt-0.5" />
               <p className="text-[0.85rem] text-[#4b4b4b] leading-relaxed">
                 This is a premium high-fidelity asset. Once purchased, you will receive full access to the source files and commercial license for use in unlimited projects.
               </p>
            </div>
          </aside>
        </div>

        {/* More from author section */}
        {related.length > 0 && (
          <div className="mt-20">
             <h2 className="text-[1.5rem] font-bold mb-6">More from this author</h2>
             <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {related.slice(0, 4).map((item) => (
                 <Link key={item.id} href={`/products/${item.slug}`} className="group bg-white rounded-[8px] overflow-hidden border border-[#ece9df] hover:shadow-md transition">
                    <div className="relative aspect-[4/3]">
                       <Image src={item.images[0]} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-4">
                       <h3 className="font-bold text-[0.95rem] truncate">{item.title}</h3>
                       <p className="text-[0.85rem] text-[#777] mt-1 capitalize">{item.category.replace("-", " ")}</p>
                    </div>
                 </Link>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#ece9df] last:border-0 text-[0.9rem]">
      <span className="text-[#777] font-medium">{label}</span>
      <span className="font-bold text-[#171717] text-right">{value}</span>
    </div>
  );
}
