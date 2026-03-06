'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Star, ShoppingCart, MapPin } from 'lucide-react';
import { Product } from '@/data/mockData';
import { useCart } from '@/context/CartContext';

const productColors: Record<string, string> = {
  p1: 'from-blue-200 to-blue-400',
  p2: 'from-red-200 to-pink-400',
  p3: 'from-yellow-200 to-orange-400',
  p4: 'from-green-200 to-emerald-400',
  p5: 'from-purple-200 to-indigo-400',
  p6: 'from-yellow-200 to-amber-400',
  p7: 'from-orange-200 to-red-400',
  p8: 'from-teal-200 to-cyan-400',
  p9: 'from-gray-200 to-gray-400',
  p10: 'from-pink-200 to-rose-400',
  p11: 'from-lime-200 to-green-400',
  p12: 'from-amber-200 to-orange-400',
};

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${className}`}>
      <Link href={`/shop/${product.id}`}>
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <div className={`w-full h-full bg-gradient-to-br ${productColors[product.id] || 'from-saffron-100 to-saffron-300'} flex items-center justify-center`}>
            <span className="text-6xl opacity-70">
              {product.craftType === 'Pottery' ? '🏺' :
               product.craftType === 'Textiles' ? '🧣' :
               product.craftType === 'Metalwork' ? '🔨' :
               product.craftType === 'Painting' ? '🎨' :
               product.craftType === 'Woodwork' ? '🪵' : '🎁'}
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.badge && (
              <span className="bg-saffron-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {discount}% off
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
            onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          >
            <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>

          {/* Add to Cart overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full bg-white text-saffron-500 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-saffron-500 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              {addedToCart ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
            <MapPin className="w-3 h-3" />
            <span>{product.state}</span>
            <span className="mx-1">•</span>
            <span>{product.craftType}</span>
          </div>

          <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-saffron-500 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 mb-2">by {product.artisan}</p>

          <div className="flex items-center gap-1 mb-3">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-xs font-medium text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-saffron-500 text-lg">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
