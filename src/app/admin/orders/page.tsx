'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const orders = [
  { id: 'KK100200', product: 'Banarasi Silk Saree', user: 'Priya S.', artisan: 'Meera Devi', amount: 8500, status: 'Processing', date: 'Jan 20' },
  { id: 'KK100199', product: 'Blue Pottery Vase', user: 'Rahul K.', artisan: 'Ramesh Kumar', amount: 1200, status: 'Shipped', date: 'Jan 18' },
  { id: 'KK100198', product: 'Madhubani Painting', user: 'Anita P.', artisan: 'Sunita Devi', amount: 3200, status: 'Delivered', date: 'Jan 15' },
  { id: 'KK100197', product: 'Pashmina Shawl', user: 'Suresh M.', artisan: 'Abdul Rashid', amount: 12000, status: 'New', date: 'Jan 20' },
  { id: 'KK100196', product: 'Dhokra Figurine', user: 'Kavitha N.', artisan: 'Suresh Baiga', amount: 2400, status: 'Delivered', date: 'Jan 12' },
  { id: 'KK100195', product: 'Warli Painting', user: 'Deepak R.', artisan: 'Jivan Soma', amount: 1800, status: 'Cancelled', date: 'Jan 10' },
];

const statusColors: Record<string, string> = {
  New: 'bg-green-100 text-green-600',
  Processing: 'bg-yellow-100 text-yellow-600',
  Shipped: 'bg-blue-100 text-blue-600',
  Delivered: 'bg-gray-100 text-gray-600',
  Cancelled: 'bg-red-100 text-red-600',
};

export default function AdminOrdersPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const statuses = ['All', 'New', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const filtered = orders.filter(o =>
    (statusFilter === 'All' || o.status === statusFilter) &&
    (o.product.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
            <p className="text-gray-500 text-sm">{orders.length} total orders</p>
          </div>
          <Link href="/admin" className="text-saffron-500 text-sm">← Admin Dashboard</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search orders..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {statuses.map(s => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${statusFilter === s ? 'bg-saffron-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {filtered.map(order => (
              <div key={order.id} className="p-4 flex items-center gap-3 hover:bg-gray-50 text-sm">
                <div className="font-mono text-xs text-gray-400 w-24 flex-shrink-0">{order.id}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{order.product}</div>
                  <div className="text-xs text-gray-500">{order.user} → {order.artisan}</div>
                </div>
                <div className="text-saffron-500 font-bold">₹{order.amount.toLocaleString()}</div>
                <div className="text-xs text-gray-400">{order.date}</div>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
