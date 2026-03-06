'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, ChevronRight, Search } from 'lucide-react';

const orders = [
  { id: 'KK100123', product: 'Blue Pottery Vase', artisan: 'Ramesh Kumar', date: 'Jan 15, 2024', status: 'Delivered', amount: 1200, emoji: '🏺' },
  { id: 'KK100124', product: 'Banarasi Silk Saree', artisan: 'Meera Devi', date: 'Jan 20, 2024', status: 'In Transit', amount: 8500, emoji: '🧣' },
  { id: 'KK100125', product: 'Madhubani Painting', artisan: 'Sunita Devi', date: 'Feb 1, 2024', status: 'Processing', amount: 3200, emoji: '🎨' },
  { id: 'KK100126', product: 'Kashmiri Pashmina Shawl', artisan: 'Abdul Rashid', date: 'Feb 5, 2024', status: 'Delivered', amount: 12000, emoji: '🧤' },
  { id: 'KK100127', product: 'Channapatna Wooden Toy', artisan: 'Krishnamurthy', date: 'Feb 10, 2024', status: 'Cancelled', amount: 800, emoji: '🎠' },
];

const statusColors: Record<string, string> = {
  Delivered: 'bg-green-100 text-green-600',
  'In Transit': 'bg-blue-100 text-blue-600',
  Processing: 'bg-yellow-100 text-yellow-600',
  Cancelled: 'bg-red-100 text-red-600',
};

export default function OrdersPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const statuses = ['All', 'Processing', 'In Transit', 'Delivered', 'Cancelled'];

  const filtered = orders.filter(o =>
    (filter === 'All' || o.status === filter) &&
    (o.product.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/account" className="hover:text-saffron-500">Account</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">My Orders</span>
        </div>

        <h1 className="text-2xl font-bold text-deep-brown mb-6">My Orders</h1>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search orders..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-saffron-400" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {statuses.map(s => (
                <button key={s} onClick={() => setFilter(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    filter === s ? 'bg-saffron-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-saffron-50'
                  }`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map(order => (
            <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 bg-saffron-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                {order.emoji}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{order.product}</div>
                <div className="text-xs text-gray-500">by {order.artisan} • {order.date}</div>
                <div className="text-xs text-gray-400 mt-1">Order #{order.id}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-saffron-500 mb-1">₹{order.amount.toLocaleString()}</div>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
              </div>
              {order.status === 'In Transit' && (
                <Link href="/track-order" className="ml-2">
                  <Package className="w-5 h-5 text-saffron-500" />
                </Link>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No orders found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
