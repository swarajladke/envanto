"use client";

import React from 'react';
import { 
  Download, 
  Search, 
  Filter, 
  Calendar,
  ExternalLink,
  User,
  ArrowRight
} from 'lucide-react';

export default function AdminDownloads() {
  const downloads = [
    { id: 1, user: "Swaraj Ladke", email: "swaraj@example.com", product: "SaaS Dashboard UI Kit", category: "Figma Templates", date: "2026-05-03 09:12", status: "Completed", size: "24.5 MB" },
    { id: 2, user: "John Doe", email: "john@example.com", product: "Modern Mobile App", category: "Mobile App Kits", date: "2026-05-03 08:45", status: "Completed", size: "18.2 MB" },
    { id: 3, user: "Jane Smith", email: "jane@example.com", product: "Minimalist Portfolio", category: "Website Templates", date: "2026-05-03 07:30", status: "Failed", size: "12.1 MB" },
    { id: 4, user: "Alex Chen", email: "alex@example.com", product: "Corporate Logo Pack", category: "Logos", date: "2026-05-02 23:15", status: "Completed", size: "5.4 MB" },
    { id: 5, user: "Maria Garcia", email: "maria@example.com", product: "E-commerce System", category: "Web App Kits", date: "2026-05-02 21:04", status: "Completed", size: "42.8 MB" },
    { id: 6, user: "Helios User", email: "helios@example.com", product: "SaaS Landing Pages", category: "Web Templates", date: "2026-05-02 19:42", status: "Completed", size: "15.0 MB" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Download History</h1>
          <p className="text-gray-500">Monitor and audit all asset download activity on the platform.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <Calendar className="size-4" />
          Export Log
        </button>
      </div>

      {/* Stats Cards for Downloads */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Today's Downloads</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-gray-900">142</h3>
            <span className="text-xs font-bold text-green-600">+12% vs yesterday</span>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Success Rate</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-gray-900">98.4%</h3>
            <span className="text-xs font-bold text-gray-500">Global average</span>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Avg. File Size</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-gray-900">19.2 MB</h3>
            <span className="text-xs font-bold text-gray-500">Aggregated</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by user or product..." 
            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-[#FFF700] focus:outline-none focus:ring-1 focus:ring-[#FFF700]"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Filter className="size-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Downloads Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Date & Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {downloads.map((log) => (
              <tr key={log.id} className="group hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="size-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{log.user}</p>
                      <p className="text-xs text-gray-500">{log.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{log.product}</p>
                    <p className="text-xs text-gray-500">{log.category}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {log.date}
                </td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase ${
                    log.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  {log.size}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">Showing 6 of 12,842 downloads</p>
            <div className="flex gap-2">
              <button className="rounded border border-gray-200 bg-white px-3 py-1 text-xs font-medium hover:bg-gray-50">Prev</button>
              <button className="rounded border border-gray-200 bg-white px-3 py-1 text-xs font-medium hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
