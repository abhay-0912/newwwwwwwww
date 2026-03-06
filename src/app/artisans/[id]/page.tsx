'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, Package, MapPin, Award, ChevronRight } from 'lucide-react';
import { artisans, products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

export default function ArtisanProfilePage() {
  const { id } = useParams();
  const artisan = artisans.find(a => a.id === id);

  if (!artisan) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold mb-2">Artisan not found</h2>
          <Link href="/artisans" className="text-saffron-500">Back to Artisans</Link>
        </div>
      </div>
    );
  }

  const artisanProducts = products.filter(p => p.artisanId === artisan.id);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-saffron-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/artisans" className="hover:text-saffron-500">Artisans</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">{artisan.name}</span>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-saffron-200 to-terracotta-400 flex items-center justify-center text-6xl border-4 border-white/30">
              🧑‍🎨
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">Verified Artisan</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{artisan.name}</h1>
              <p className="text-saffron-200 text-xl mb-3">{artisan.specialty}</p>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>{artisan.village}, {artisan.state}</span>
              </div>
              <div className="flex gap-6 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold">{artisan.yearsOfExperience}</div>
                  <div className="text-white/70 text-xs">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{artisan.productCount}</div>
                  <div className="text-white/70 text-xs">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{artisan.rating}</div>
                  <div className="text-white/70 text-xs flex items-center gap-1"><Star className="w-3 h-3 fill-gold-400 text-gold-400" /> Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{artisan.totalSales.toLocaleString()}</div>
                  <div className="text-white/70 text-xs">Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold text-deep-brown mb-4 flex items-center gap-2">
              <span>👤</span> About {artisan.name}
            </h2>
            <p className="text-gray-600 leading-relaxed">{artisan.bio}</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold text-deep-brown mb-4 flex items-center gap-2">
              <span>📜</span> Tradition Story
            </h2>
            <p className="text-gray-600 leading-relaxed">{artisan.traditionStory}</p>
          </div>
          {artisanProducts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-deep-brown mb-4">Products by {artisan.name}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {artisanProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Craft Expertise</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-saffron-500" />
                <div>
                  <div className="font-medium text-sm">{artisan.specialty}</div>
                  <div className="text-xs text-gray-500">Primary Specialty</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-saffron-500" />
                <div>
                  <div className="font-medium text-sm">{artisan.productCount} Products</div>
                  <div className="text-xs text-gray-500">Available</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-gold-400" />
                <div>
                  <div className="font-medium text-sm">{artisan.rating}/5.0 Rating</div>
                  <div className="text-xs text-gray-500">{artisan.totalSales} happy customers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-saffron-50 rounded-2xl p-6">
            <h3 className="font-bold text-saffron-700 mb-2">Location</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-saffron-500" />
              <span>{artisan.village}, {artisan.state}, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
