'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, artisans } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const normalised = query.trim().toLowerCase();

  const matchedProducts = useMemo(() => {
    if (!normalised) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(normalised) ||
        p.craftType.toLowerCase().includes(normalised) ||
        p.state.toLowerCase().includes(normalised) ||
        p.category.toLowerCase().includes(normalised) ||
        p.description.toLowerCase().includes(normalised)
    );
  }, [normalised]);

  const matchedArtisans = useMemo(() => {
    if (!normalised) return [];
    return artisans.filter(
      (a) =>
        a.name.toLowerCase().includes(normalised) ||
        a.specialty.toLowerCase().includes(normalised) ||
        a.state.toLowerCase().includes(normalised)
    );
  }, [normalised]);

  const total = matchedProducts.length + matchedArtisans.length;

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-deep-brown mb-4">
            {query ? `Search results for "${query}"` : 'Search'}
          </h1>
          {/* Search bar */}
          <form action="/search" method="get" className="flex gap-3 max-w-xl">
            <div className="flex-1 flex items-center border border-gray-200 rounded-full px-4 py-2 bg-gray-50 focus-within:border-saffron-400 transition-colors">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0 mr-2" />
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search crafts, artisans, traditions…"
                className="flex-1 text-sm outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-saffron-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-saffron-600 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {!query && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">Enter a keyword above to search for products, artisans, and crafts.</p>
          </div>
        )}

        {query && total === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No results found</h2>
            <p className="text-gray-500 mb-6">We couldn&apos;t find anything matching &quot;{query}&quot;. Try a different keyword.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Pottery', 'Saree', 'Painting', 'Jewellery', 'Brass'].map((suggestion) => (
                <Link
                  key={suggestion}
                  href={`/search?q=${suggestion.toLowerCase()}`}
                  className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200 hover:border-saffron-400 hover:text-saffron-500 transition-colors"
                >
                  {suggestion}
                </Link>
              ))}
            </div>
          </div>
        )}

        {query && total > 0 && (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600 text-sm">
                Found <span className="font-semibold text-gray-800">{total}</span> result{total !== 1 ? 's' : ''} for &quot;{query}&quot;
              </p>
              <button className="hidden md:inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-4 py-2 rounded-full hover:border-saffron-400 hover:text-saffron-500 transition-colors">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
            </div>

            {/* Products */}
            {matchedProducts.length > 0 && (
              <section className="mb-14">
                <h2 className="text-xl font-bold text-deep-brown mb-6">
                  Products <span className="text-gray-400 font-normal text-base">({matchedProducts.length})</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {matchedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}

            {/* Artisans */}
            {matchedArtisans.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-deep-brown mb-6">
                  Artisans <span className="text-gray-400 font-normal text-base">({matchedArtisans.length})</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {matchedArtisans.map((artisan) => (
                    <Link
                      key={artisan.id}
                      href={`/artisans/${artisan.id}`}
                      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-center"
                    >
                      <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">
                        👩‍🎨
                      </div>
                      <div className="font-semibold text-gray-800">{artisan.name}</div>
                      <div className="text-xs text-saffron-500 mt-1">{artisan.specialty}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{artisan.state}</div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
        <div className="text-gray-500">Loading search results…</div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
