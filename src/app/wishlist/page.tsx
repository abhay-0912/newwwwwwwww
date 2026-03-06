'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const [wishlistedIds, setWishlistedIds] = useState<string[]>(['p1', 'p4', 'p5', 'p8']);

  const wishlistedProducts = products.filter(p => wishlistedIds.includes(p.id));

  const removeFromWishlist = (id: string) => {
    setWishlistedIds(prev => prev.filter(i => i !== id));
  };

  if (wishlistedProducts.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
        <div className="text-center py-20">
          <Heart className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6">Save your favourite Indian handicrafts here</p>
          <Link href="/shop" className="bg-saffron-500 text-white px-8 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-deep-brown">My Wishlist ({wishlistedProducts.length})</h1>
          <button onClick={() => setWishlistedIds([])} className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1">
            <Trash2 className="w-4 h-4" /> Clear All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistedProducts.map(product => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 left-3 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center z-10 hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/cart" className="inline-flex items-center gap-2 bg-saffron-500 text-white px-8 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors">
            <ShoppingCart className="w-5 h-5" /> Move All to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
