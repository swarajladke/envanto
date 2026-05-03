"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  ExternalLink,
  Upload,
  X,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { products } from '@/lib/data';

export default function AdminProducts() {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Assets</h1>
          <p className="text-gray-500">View, edit, and upload new digital assets to your store.</p>
        </div>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 rounded-lg bg-[#FFF700] px-4 py-2 text-sm font-bold text-black shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Plus className="size-4" />
          Add New Asset
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products by name, ID, or category..." 
            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-[#FFF700] focus:outline-none focus:ring-1 focus:ring-[#FFF700]"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Filter className="size-4" />
            Filter
          </button>
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 outline-none hover:bg-gray-50">
            <option>All Categories</option>
            <option>Figma Templates</option>
            <option>Website Templates</option>
            <option>Graphics</option>
            <option>Logos</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Downloads</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="group hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-lg bg-gray-100 overflow-hidden relative">
                      <img src={product.images[0]} alt={product.title} className="object-cover fill" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{product.title}</p>
                      <p className="text-xs text-gray-500">ID: {product.id.slice(0, 8)}...</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-bold uppercase text-gray-600">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {product.price === 0 ? 'Free' : `$${product.price}`}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-[#EAB308]" style={{ width: '65%' }} />
                    </div>
                    <span className="text-xs font-medium text-gray-600">1.2k</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                      <Edit className="size-4" />
                    </button>
                    <button className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600">
                      <Trash2 className="size-4" />
                    </button>
                    <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                      <MoreVertical className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upload Modal Overlay */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Upload New Asset</h2>
                <p className="text-sm text-gray-500">Fill in the details below to add a new product to the store.</p>
              </div>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-gray-700">Product Title</label>
                  <input type="text" placeholder="e.g. Modern SaaS Dashboard" className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-[#FFF700] focus:ring-1 focus:ring-[#FFF700]" />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700">Category</label>
                  <select className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-[#FFF700] focus:ring-1 focus:ring-[#FFF700]">
                    <option>Figma Templates</option>
                    <option>Website Templates</option>
                    <option>Graphics</option>
                    <option>Logos</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700">Price ($)</label>
                  <input type="number" placeholder="0 for Free" className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-[#FFF700] focus:ring-1 focus:ring-[#FFF700]" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-gray-700">Cover Image</label>
                  <div className="mt-1.5 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100">
                    <ImageIcon className="mb-2 size-6 text-gray-400" />
                    <span className="text-xs text-gray-500">Click to upload JPG/PNG</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700">Asset File</label>
                  <div className="mt-1.5 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100">
                    <Upload className="mb-2 size-6 text-gray-400" />
                    <span className="text-xs text-gray-500">Upload .ZIP or .FIG file</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button 
                onClick={() => setShowUploadModal(false)}
                className="rounded-lg px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="rounded-lg bg-[#FFF700] px-8 py-2.5 text-sm font-bold text-black shadow-lg">
                Publish Asset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
