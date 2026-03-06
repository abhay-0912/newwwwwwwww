import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ArtisanCard from "@/components/ArtisanCard";
import { products, artisans, featuredCollections } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);
  const featuredArtisans = artisans.slice(0, 4);

  return (
    <>
      <HeroSection />

      {/* Featured Products */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-deep-brown">Featured Crafts</h2>
              <p className="text-gray-500 mt-1">Handpicked masterpieces from India&apos;s finest artisans</p>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center gap-2 text-saffron-500 font-medium hover:text-saffron-600 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/shop" className="inline-flex items-center gap-2 text-saffron-500 font-medium">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown mb-2 text-center">Shop by Collection</h2>
          <p className="text-gray-500 text-center mb-10">Explore India&apos;s diverse craft traditions by category</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredCollections.map((col) => (
              <Link key={col.id} href={`/collections/${col.id}`}>
                <div className="group relative bg-saffron-50 rounded-2xl p-6 hover:bg-saffron-100 transition-colors border border-saffron-100 hover:border-saffron-200">
                  <h3 className="font-bold text-deep-brown group-hover:text-saffron-600 transition-colors">{col.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{col.description}</p>
                  <div className="mt-3 text-xs text-saffron-500 font-medium">{col.productCount} products →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Artisans */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-deep-brown">Meet Our Artisans</h2>
              <p className="text-gray-500 mt-1">The skilled hands behind every masterpiece</p>
            </div>
            <Link href="/artisans" className="hidden sm:flex items-center gap-2 text-saffron-500 font-medium hover:text-saffron-600 transition-colors">
              All artisans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredArtisans.map((artisan, i) => (
              <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

