'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { indianStates, products, artisans } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';
import ArtisanCard from '@/components/ArtisanCard';

export default function StateCulturePage() {
  const { state: stateId } = useParams();
  const stateData = indianStates.find(s => s.id === stateId);

  if (!stateData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-bold mb-2">State not found</h2>
          <Link href="/traditions" className="text-saffron-500">Back to Traditions</Link>
        </div>
      </div>
    );
  }

  const stateProducts = products.filter(p => p.state === stateData.name);
  const stateArtisans = artisans.filter(a => a.state === stateData.name);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-saffron-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/traditions" className="hover:text-saffron-500">Traditions</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">{stateData.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-3">{stateData.name}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{stateData.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Famous For */}
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold text-deep-brown mb-3">Famous For</h2>
            <p className="text-gray-600">{stateData.famousFor}</p>
          </div>

          {/* Crafts */}
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold text-deep-brown mb-4">Traditional Crafts</h2>
            <div className="flex flex-wrap gap-2">
              {stateData.crafts.map(craft => (
                <span key={craft} className="bg-saffron-50 text-saffron-600 px-4 py-2 rounded-full text-sm font-medium">
                  {craft}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          {stateProducts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-deep-brown mb-4">Crafts from {stateData.name}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {stateProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Artisans */}
          {stateArtisans.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-deep-brown mb-4">Artisans from {stateData.name}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {stateArtisans.map((artisan, i) => (
                  <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-bold text-deep-brown mb-4">Festivals</h3>
            <div className="space-y-2">
              {stateData.festivals.map(festival => (
                <div key={festival} className="flex items-center gap-2 text-gray-600">
                  <span className="text-saffron-500">🎊</span>
                  <span className="text-sm">{festival}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-saffron-50 rounded-2xl p-6">
            <h3 className="font-bold text-saffron-700 mb-2">Region</h3>
            <p className="text-gray-600 text-sm">{stateData.region} India</p>
          </div>
          <Link href={`/shop?state=${stateData.name}`}
            className="block bg-saffron-500 text-white text-center py-3 rounded-xl font-medium hover:bg-saffron-600 transition-colors">
            Shop {stateData.name} Crafts
          </Link>
        </div>
      </div>
    </div>
  );
}
