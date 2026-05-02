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
              {/* Play button overlay for video templates */}
              {product.category === 'video-templates' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                     <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent" />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-32 aspect-video shrink-0 overflow-hidden rounded-[4px] border-2 transition ${activeImage === img ? 'border-[#81d742]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
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
               <Link href="/confirmation" className="w-full flex items-center justify-center gap-2 h-14 rounded-[4px] bg-[#81d742] text-[1.1rem] font-bold text-[#171717] hover:brightness-105 transition">
                 <Download className="size-5" />
                 Download
               </Link>
               <button className="mt-3 w-full flex items-center justify-center gap-2 h-12 rounded-[4px] border border-[#dcdad4] bg-white text-[0.95rem] font-bold text-[#171717] hover:bg-gray-50 transition">
                 <BookmarkPlus className="size-5" />
                 Save to collection
               </button>

               <div className="mt-6 flex items-center gap-3 pt-6 border-t border-[#ece9df]">
                 <div className="size-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Author" fill className="object-cover" />
                 </div>
                 <div>
                    <p className="text-[0.8rem] text-[#777] font-medium">By</p>
                    <Link href="#" className="text-[0.95rem] font-bold hover:underline">ZORCreator</Link>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-[8px] p-6 shadow-sm border border-[#ece9df]">
               <h3 className="font-bold text-[1.05rem] mb-4">Item Specifications</h3>
               <div className="space-y-3">
                  <SpecRow label="Applications Supported" value="After Effects" />
                  <SpecRow label="Resolution" value="1920x1080" />
                  <SpecRow label="File Size" value="45.2 MB" />
                  <SpecRow label="Requires Plugins" value="No" />
               </div>
            </div>

            <div className="bg-[#fbfbfb] rounded-[8px] p-5 border border-[#ece9df] flex items-start gap-3">
               <Info className="size-5 text-[#777] shrink-0 mt-0.5" />
               <p className="text-[0.85rem] text-[#4b4b4b] leading-relaxed">
                 You are viewing a watermarked preview. Subscribe to download the full, high-resolution item with a commercial license.
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
