'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, Heart, Share2, ChevronRight, Package, Shield, Award, Minus, Plus, MapPin } from 'lucide-react';
import { products, artisans } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

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

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold mb-2">Product not found</h2>
          <Link href="/shop" className="text-saffron-500">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const artisan = artisans.find(a => a.id === product.artisanId);
  const relatedProducts = products.filter(p => p.id !== product.id && (p.craftType === product.craftType || p.state === product.state)).slice(0, 4);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-saffron-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-saffron-500">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className={`w-full h-96 rounded-2xl bg-gradient-to-br ${productColors[product.id] || 'from-saffron-100 to-saffron-300'} flex items-center justify-center mb-4`}>
              <span className="text-9xl">
                {product.craftType === 'Pottery' ? '🏺' :
                 product.craftType === 'Textiles' ? '🧣' :
                 product.craftType === 'Metalwork' ? '⚒️' :
                 product.craftType === 'Painting' ? '🎨' :
                 product.craftType === 'Woodwork' ? '🪵' : '🎁'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1,2,3,4].map(i => (
                <div key={i} className={`h-20 rounded-xl bg-gradient-to-br ${productColors[product.id] || 'from-saffron-100 to-saffron-200'} ${i === 1 ? 'opacity-100' : 'opacity-50'} cursor-pointer hover:opacity-100 transition-opacity`} />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            {/* Badge */}
            <div className="flex gap-2 mb-3">
              <span className="bg-saffron-500 text-white text-xs px-3 py-1 rounded-full">{product.badge}</span>
              {discount > 0 && <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">{discount}% off</span>}
            </div>

            <h1 className="text-3xl font-bold text-deep-brown mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-saffron-500" />
              <span className="text-gray-600 text-sm">{product.state} • {product.craftType}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-gray-200 fill-gray-200'}`} />
                ))}
              </div>
              <span className="font-medium text-gray-700">{product.rating}</span>
              <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
              <span className="text-4xl font-bold text-saffron-500">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
              )}
              {discount > 0 && <span className="text-green-500 font-medium">Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>}
            </div>

            {/* Artisan */}
            {artisan && (
              <Link href={`/artisans/${artisan.id}`} className="flex items-center gap-3 mb-6 p-4 bg-saffron-50 rounded-xl hover:bg-saffron-100 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-200 to-terracotta-400 rounded-full flex items-center justify-center text-2xl">🧑‍🎨</div>
                <div>
                  <div className="text-xs text-gray-500">Crafted by</div>
                  <div className="font-semibold text-gray-800">{artisan.name}</div>
                  <div className="text-xs text-saffron-500">{artisan.village}, {artisan.state} • {artisan.yearsOfExperience} years experience</div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </Link>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-saffron-500 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-saffron-600 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-14 h-14 rounded-full border flex items-center justify-center transition-colors ${
                  isWishlisted ? 'bg-red-50 border-red-200' : 'border-gray-200 hover:border-saffron-300'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
              <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:border-saffron-300 transition-colors">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: Shield, text: 'Authentic & Certified' },
                { icon: Package, text: 'Secure Packaging' },
                { icon: Award, text: 'Quality Assured' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-xl text-center">
                  <Icon className="w-5 h-5 text-saffron-500" />
                  <span className="text-xs text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-6 border-b border-gray-200 mb-8">
            {['description', 'craft-story', 'materials', 'reviews'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-saffron-500 border-b-2 border-saffron-500'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
              <h3 className="font-semibold text-gray-800 mb-2">Cultural Significance</h3>
              <p className="text-gray-600 leading-relaxed">{product.culturalSignificance}</p>
            </div>
          )}
          {activeTab === 'craft-story' && (
            <div>
              <p className="text-gray-600 leading-relaxed">{product.craftStory}</p>
            </div>
          )}
          {activeTab === 'materials' && (
            <div className="flex flex-wrap gap-3">
              {product.materials.map(m => (
                <span key={m} className="bg-saffron-50 text-saffron-600 px-4 py-2 rounded-full text-sm font-medium">{m}</span>
              ))}
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <div className="text-center py-8 text-gray-500">
                <Star className="w-12 h-12 mx-auto mb-3 text-gold-400" />
                <div className="text-4xl font-bold text-gray-800 mb-1">{product.rating}</div>
                <div className="text-sm">Based on {product.reviews} reviews</div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-deep-brown mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
