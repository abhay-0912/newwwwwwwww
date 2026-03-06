'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

const myProducts = [
  { id: 'p1', name: 'Blue Pottery Vase', price: 1200, stock: 15, status: 'Active', sales: 89, emoji: '🏺' },
  { id: 'p9', name: 'Blue Pottery Bowl', price: 900, stock: 8, status: 'Active', sales: 45, emoji: '🏺' },
  { id: 'p13', name: 'Pottery Tea Set', price: 2800, stock: 3, status: 'Low Stock', sales: 23, emoji: '🍵' },
  { id: 'p14', name: 'Decorative Plate', price: 650, stock: 0, status: 'Out of Stock', sales: 67, emoji: '🍽️' },
];

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-600',
  'Low Stock': 'bg-yellow-100 text-yellow-600',
  'Out of Stock': 'bg-red-100 text-red-600',
};

export default function ArtisanProductsPage() {
  const [products, setProducts] = useState(myProducts);

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-deep-brown">My Products</h1>
            <p className="text-gray-500 text-sm">{products.length} products listed</p>
          </div>
          <button className="flex items-center gap-2 bg-saffron-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-saffron-600 transition-colors">
            <Plus className="w-4 h-4" /> Add New Product
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 grid grid-cols-6 gap-4 text-xs font-semibold text-gray-500 uppercase">
            <div className="col-span-2">Product</div>
            <div>Price</div>
            <div>Stock</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          {products.map(product => (
            <div key={product.id} className="p-4 border-b border-gray-50 grid grid-cols-6 gap-4 items-center hover:bg-gray-50 transition-colors">
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-10 h-10 bg-saffron-50 rounded-lg flex items-center justify-center text-2xl">{product.emoji}</div>
                <div>
                  <div className="font-medium text-sm text-gray-800">{product.name}</div>
                  <div className="text-xs text-gray-500">{product.sales} sales</div>
                </div>
              </div>
              <div className="font-semibold text-saffron-500">₹{product.price}</div>
              <div className={`text-sm font-medium ${product.stock === 0 ? 'text-red-500' : product.stock < 5 ? 'text-yellow-500' : 'text-gray-700'}`}>
                {product.stock}
              </div>
              <div>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[product.status]}`}>{product.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/shop/${product.id}`} className="p-1.5 text-gray-400 hover:text-blue-500 transition-colors">
                  <Eye className="w-4 h-4" />
                </Link>
                <button className="p-1.5 text-gray-400 hover:text-saffron-500 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => setProducts(p => p.filter(pr => pr.id !== product.id))}
                  className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
