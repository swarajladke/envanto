"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Download, 
  Users, 
  Settings, 
  Search, 
  Bell, 
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Products', href: '/admin/products', icon: Package },
    { label: 'Downloads', href: '/admin/downloads', icon: Download },
    { label: 'Users', href: '/admin/users', icon: Users },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 shrink-0 rounded-lg bg-[#FFF700] flex items-center justify-center shadow-sm">
              <Package className="size-5 text-black" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 truncate">Admin Panel</span>
          </Link>
        </div>

        <div className="p-4">
          <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-4">Main Menu</p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                    active 
                      ? "bg-[#FFF700] text-black shadow-md translate-x-1" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon className={cn("size-4", active ? "text-black" : "text-gray-400")} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="size-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-8 backdrop-blur-md">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search analytics, products..." 
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-[#FFF700] focus:outline-none focus:ring-1 focus:ring-[#FFF700]"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors">
              <Bell className="size-5" />
              <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900">Swaraj Ladke</p>
                <p className="text-[10px] text-gray-500 font-medium">Administrator</p>
              </div>
              <div className="size-9 rounded-full bg-[#171717] flex items-center justify-center text-white text-xs font-bold ring-2 ring-gray-50 shadow-sm">
                SL
              </div>
            </div>
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
