import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { festivalCollections, products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

const festivalConfig: Record<string, { emoji: string; gradient: string; bg: string }> = {
  diwali:  { emoji: '🪔', gradient: 'from-yellow-400 to-orange-500', bg: 'bg-amber-50' },
  holi:    { emoji: '🌈', gradient: 'from-pink-400 to-purple-500',   bg: 'bg-pink-50' },
  wedding: { emoji: '💍', gradient: 'from-red-500 to-saffron-500',   bg: 'bg-red-50' },
  navratri:{ emoji: '🎊', gradient: 'from-saffron-400 to-terracotta-500', bg: 'bg-orange-50' },
};

export default function FestivalsPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-saffron-600 to-terracotta-500 py-20 text-white text-center">
        <div className="text-5xl mb-4">🎊</div>
        <h1 className="text-5xl font-bold mb-4">Festival Collections</h1>
        <p className="text-white/80 text-xl max-w-2xl mx-auto">
          Celebrate India&apos;s rich festivals with handcrafted gifts and decor from master artisans.
        </p>
      </div>

      {/* Collection Banners */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {festivalCollections.map((fest) => {
            const config = festivalConfig[fest.id] ?? { emoji: '🎉', gradient: 'from-gray-400 to-gray-600', bg: 'bg-gray-50' };
            return (
              <div
                key={fest.id}
                id={fest.id}
                className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className={`h-52 bg-gradient-to-br ${config.gradient} flex items-center justify-center`}>
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{config.emoji}</span>
                </div>
                <div className={`${config.bg} p-6`}>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">{fest.name}</h2>
                  <p className="text-sm text-gray-600 mb-3">{fest.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-saffron-500 text-sm font-medium">{fest.productCount} products</span>
                    <Link
                      href={`/shop?festival=${fest.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-saffron-500 transition-colors"
                    >
                      Shop Collection <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Festival Products */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-deep-brown mb-2">Festival Picks</h2>
              <p className="text-gray-500">Artisan picks perfect for gifting and celebrations</p>
            </div>
            <Link href="/shop" className="text-saffron-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gift Guide Banner */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-deep-brown to-saffron-700 rounded-3xl p-10 text-white text-center">
          <div className="text-4xl mb-4">🎁</div>
          <h2 className="text-3xl font-bold mb-3">Need Help Choosing a Gift?</h2>
          <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
            Our expert team can help you find the perfect handcrafted gift for any occasion. Share your budget and occasion and we&apos;ll curate a personalised selection.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-saffron-500 px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors"
          >
            Get Gift Recommendations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
