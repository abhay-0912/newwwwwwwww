'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Edit, Trash2, Eye, CheckCircle, XCircle } from 'lucide-react';
import { products } from '@/data/mockData';

export default function AdminProductsPage() {
  const [search, setSearch] = useState('');
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
            <p className="text-gray-500 text-sm">{products.length} total products</p>
          </div>
          <Link href="/admin" className="text-saffron-500 text-sm">← Admin Dashboard</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-saffron-400" />
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {filtered.map(product => (
              <div key={product.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                <div className="w-12 h-12 bg-saffron-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {product.craftType === 'Pottery' ? '🏺' : product.craftType === 'Textiles' ? '🧣' : product.craftType === 'Metalwork' ? '⚒️' : '🎨'}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-800">{product.name}</div>
                  <div className="text-xs text-gray-500">{product.artisan} • {product.state} • {product.craftType}</div>
                </div>
                <div className="text-saffron-500 font-bold">₹{product.price.toLocaleString()}</div>
                <div>
                  {product.inStock
                    ? <span className="flex items-center gap-1 text-xs text-green-600"><CheckCircle className="w-3 h-3" /> In Stock</span>
                    : <span className="flex items-center gap-1 text-xs text-red-500"><XCircle className="w-3 h-3" /> Out of Stock</span>
                  }
                </div>
                <div className="text-xs bg-saffron-50 text-saffron-600 px-2 py-1 rounded-full">{product.badge}</div>
                <div className="flex gap-2">
                  <Link href={`/shop/${product.id}`} className="p-1.5 text-gray-400 hover:text-blue-500"><Eye className="w-4 h-4" /></Link>
                  <button className="p-1.5 text-gray-400 hover:text-saffron-500"><Edit className="w-4 h-4" /></button>
                  <button className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
