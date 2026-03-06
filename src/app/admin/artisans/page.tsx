'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, CheckCircle, XCircle, Eye } from 'lucide-react';
import { artisans } from '@/data/mockData';

export default function AdminArtisansPage() {
  const [search, setSearch] = useState('');
  const filtered = artisans.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Artisan Management</h1>
            <p className="text-gray-500 text-sm">{artisans.length} total artisans</p>
          </div>
          <Link href="/admin" className="text-saffron-500 text-sm">← Admin Dashboard</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search artisans..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-saffron-400" />
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {filtered.map(artisan => (
              <div key={artisan.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-200 to-terracotta-400 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🧑‍🎨</div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-800">{artisan.name}</div>
                  <div className="text-xs text-gray-500">{artisan.specialty} • {artisan.village}, {artisan.state}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-sm">{artisan.productCount}</div>
                  <div className="text-xs text-gray-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-sm">{artisan.totalSales.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Sales</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-sm">⭐ {artisan.rating}</div>
                  <div className="text-xs text-gray-400">Rating</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <CheckCircle className="w-3 h-3" /> Verified
                </div>
                <div className="flex gap-2">
                  <Link href={`/artisans/${artisan.id}`} className="p-1.5 text-gray-400 hover:text-blue-500">
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button className="text-xs bg-red-50 text-red-500 px-2 py-1 rounded hover:bg-red-100">
                    <XCircle className="w-3 h-3 inline" /> Suspend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
