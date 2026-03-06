import React from 'react';
import ArtisanCard from '@/components/ArtisanCard';
import { artisans } from '@/data/mockData';

export default function ArtisansPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div className="text-5xl mb-4">🧑‍🎨</div>
          <h1 className="text-4xl font-bold mb-3">Meet Our Artisans</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            The skilled craftspeople behind every masterpiece. Each artisan carries forward centuries of tradition.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artisans.map((artisan, i) => (
            <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
