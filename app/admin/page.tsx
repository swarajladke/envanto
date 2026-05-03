"use client";

import React from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Download, 
  Package, 
  Users,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { label: 'Total Downloads', value: '12,842', change: '+14.5%', trend: 'up', icon: Download },
    { label: 'Total Revenue', value: '$45,290', change: '+8.2%', trend: 'up', icon: DollarSign },
    { label: 'Active Assets', value: '482', change: '+24', trend: 'up', icon: Package },
    { label: 'Total Users', value: '8,201', change: '-2.1%', trend: 'down', icon: Users },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-gray-50 p-2 text-gray-600">
                <stat.icon className="size-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Downloads */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold">Recent Downloads</h2>
            <button className="text-sm font-medium text-[#EAB308] hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-gray-50 p-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded bg-gray-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i+10}/40/40`} alt="Product" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">SaaS UI Kit V2</p>
                    <p className="text-xs text-gray-500">Downloaded by swaraj_l</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Free</p>
                  <p className="text-xs text-gray-500">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Assets */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold">Popular Assets</h2>
            <button className="text-sm font-medium text-[#EAB308] hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-gray-50 p-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded bg-gray-100 overflow-hidden flex items-center justify-center">
                    <TrendingUp className="size-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Modern Dashboard Template</p>
                    <p className="text-xs text-gray-500">Web Templates • 2,103 downloads</p>
                  </div>
                </div>
                <div className="text-right text-green-600 font-bold">
                  $2,490
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
