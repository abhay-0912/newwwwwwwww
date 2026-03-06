import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredCollections } from '@/data/mockData';

const gradients = [
  'from-blue-400 to-indigo-600',
  'from-orange-400 to-red-500',
  'from-purple-400 to-pink-500',
  'from-yellow-400 to-amber-600',
  'from-green-400 to-teal-600',
  'from-rose-400 to-pink-600',
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-16 text-white text-center">
        <div className="text-5xl mb-4">🗂️</div>
        <h1 className="text-4xl font-bold mb-3">Featured Collections</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Curated selections of India&apos;s finest handcrafted products, grouped by tradition and style.
        </p>
      </div>

      {/* Collections Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCollections.map((col, i) => (
            <Link
              key={col.id}
              href={`/collections/${col.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div
                className={`h-48 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-end p-5 group-hover:scale-[1.02] transition-transform duration-300`}
              >
                <div>
                  <div className="font-bold text-white text-xl">{col.name}</div>
                  <div className="text-white/70 text-sm">{col.productCount} products</div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 mb-3">{col.description}</p>
                <span className="inline-flex items-center gap-1 text-saffron-500 text-sm font-medium group-hover:gap-2 transition-all">
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
