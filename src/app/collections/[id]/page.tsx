import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredCollections, products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

const gradients = [
  'from-blue-400 to-indigo-600',
  'from-orange-400 to-red-500',
  'from-purple-400 to-pink-500',
  'from-yellow-400 to-amber-600',
  'from-green-400 to-teal-600',
  'from-rose-400 to-pink-600',
];

export function generateStaticParams() {
  return featuredCollections.map((col) => ({ id: col.id }));
}

export default async function CollectionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idx = featuredCollections.findIndex((c) => c.id === id);
  if (idx === -1) notFound();

  const collection = featuredCollections[idx];
  const gradient = gradients[idx % gradients.length];

  // Show a subset of products as demo
  const collectionProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${gradient} py-20 text-white`}>
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/collections" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Collections
          </Link>
          <h1 className="text-5xl font-bold mb-3">{collection.name}</h1>
          <p className="text-white/80 text-xl max-w-xl mb-4">{collection.description}</p>
          <span className="text-white/60 text-sm">{collection.productCount} products</span>
        </div>
      </div>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-deep-brown">Products in this Collection</h2>
          <Link href="/shop" className="text-saffron-500 font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm">
            View Full Shop <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Related Collections */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-deep-brown mb-6">Explore More Collections</h2>
          <div className="flex flex-wrap gap-3">
            {featuredCollections
              .filter((c) => c.id !== id)
              .map((col, i) => (
                <Link
                  key={col.id}
                  href={`/collections/${col.id}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${gradients[(i + idx + 1) % gradients.length]} hover:opacity-90 transition-opacity`}
                >
                  {col.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
