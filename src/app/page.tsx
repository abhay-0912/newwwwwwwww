import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Truck, Award, Heart } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import ArtisanCard from '@/components/ArtisanCard';
import { products, artisans, blogPosts, indianStates, festivalCollections, featuredCollections } from '@/data/mockData';

const SectionHeader = ({ title, subtitle, center = false }: { title: string; subtitle?: string; center?: boolean }) => (
  <div className={`mb-10 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-3">
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`flex items-center gap-3 mt-4 ${center ? 'justify-center' : ''}`}>
      <div className="h-1 w-12 bg-saffron-500 rounded-full" />
      <span className="text-saffron-500 text-lg">✦</span>
      <div className="h-1 w-12 bg-saffron-500 rounded-full" />
    </div>
  </div>
);

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);
  const featuredArtisans = artisans.slice(0, 4);

  return (
    <div className="bg-cream">
      {/* Hero */}
      <HeroSection />

      {/* Trust Bar */}
      <div className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Authenticity Guaranteed', desc: 'Every product verified' },
              { icon: Award, title: 'Direct from Artisans', desc: 'Support craftspeople' },
              { icon: Truck, title: 'Pan India Delivery', desc: 'Free shipping ₹999+' },
              { icon: Heart, title: 'Cultural Preservation', desc: 'Every buy helps' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-saffron-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-saffron-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-800">{title}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <SectionHeader title="Explore Our Collections" subtitle="Curated selections of India's finest handicrafts" center />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredCollections.map((col, i) => (
            <Link key={col.id} href={`/collections/${col.id}`}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 || i === 5 ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className={`h-40 bg-gradient-to-br ${
                i === 0 ? 'from-blue-400 to-indigo-600' :
                i === 1 ? 'from-orange-400 to-red-500' :
                i === 2 ? 'from-purple-400 to-pink-500' :
                i === 3 ? 'from-yellow-400 to-amber-600' :
                i === 4 ? 'from-green-400 to-teal-600' :
                'from-rose-400 to-pink-600'
              } flex items-end p-4 group-hover:scale-105 transition-transform duration-300`}>
                <div>
                  <div className="font-bold text-white text-lg">{col.name}</div>
                  <div className="text-white/80 text-xs">{col.productCount} products</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader title="Master Artisan Picks" subtitle="Handselected treasures from our finest craftspeople" />
            <Link href="/shop" className="text-saffron-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Festival Collections */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <SectionHeader title="Festival Collections" subtitle="Celebrate India's rich festival traditions" center />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivalCollections.map((fest) => (
            <Link key={fest.id} href={`/festivals#${fest.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className={`h-48 bg-gradient-to-br ${
                fest.id === 'diwali' ? 'from-yellow-400 to-orange-500' :
                fest.id === 'holi' ? 'from-pink-400 to-purple-500' :
                fest.id === 'wedding' ? 'from-red-500 to-saffron-500' :
                'from-saffron-400 to-terracotta-500'
              } flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-125 transition-transform">
                  {fest.id === 'diwali' ? '🪔' : fest.id === 'holi' ? '🌈' : fest.id === 'wedding' ? '💍' : '🎊'}
                </span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-800 mb-1">{fest.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{fest.description}</p>
                <div className="mt-2 text-saffron-500 text-xs font-medium">{fest.productCount} products</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader title="Meet Our Artisans" subtitle="The skilled hands behind every masterpiece" />
            <Link href="/artisans" className="text-saffron-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              All Artisans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtisans.map((artisan, i) => (
              <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Traditions of India */}
      <section className="py-16 bg-deep-brown text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Traditions of India</h2>
            <p className="text-gray-300 text-lg">Explore India&apos;s rich craft heritage state by state</p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-1 w-12 bg-gold-400 rounded-full" />
              <span className="text-gold-400 text-lg">✦</span>
              <div className="h-1 w-12 bg-gold-400 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {indianStates.slice(0, 10).map((state) => (
              <Link key={state.id} href={`/traditions/${state.id}`}
                className="group bg-white/10 hover:bg-saffron-500 rounded-xl p-4 text-center transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-2">
                  {state.id === 'rajasthan' ? '🏰' :
                   state.id === 'uttar-pradesh' ? '🕌' :
                   state.id === 'kashmir' ? '❄️' :
                   state.id === 'gujarat' ? '🎠' :
                   state.id === 'west-bengal' ? '🪷' :
                   state.id === 'tamil-nadu' ? '🏛️' :
                   state.id === 'odisha' ? '🛕' :
                   state.id === 'kerala' ? '🌴' :
                   state.id === 'maharashtra' ? '🎨' : '🗺️'}
                </div>
                <div className="font-semibold text-sm mb-1">{state.name}</div>
                <div className="text-xs text-gray-400 group-hover:text-white/80 line-clamp-1">{state.crafts[0]}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/traditions" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Explore All States <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <SectionHeader title="Popular Products" subtitle="Bestsellers loved by our community" />
          <Link href="/shop" className="text-saffron-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(4, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Artisan Story Banner */}
      <section className="py-16 bg-gradient-to-r from-saffron-500 to-terracotta-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <div className="text-sm font-medium text-white/80 mb-3 uppercase tracking-wider">Our Mission</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Every Purchase Directly Supports an Artisan Family
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              When you buy from Kalakriti, 85% of every sale goes directly to the artisan. 
              We believe in fair trade, cultural preservation, and empowering India&apos;s 7 million traditional craftspeople.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: '85%', label: 'Goes to Artisan' },
                { value: '₹2Cr+', label: 'Artisan Earnings' },
                { value: '150+', label: 'Craft Types' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link href="/how-it-works" className="inline-flex items-center gap-2 bg-white text-saffron-500 px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors">
              How It Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {artisans.slice(4, 8).map((artisan, i) => (
              <div key={artisan.id} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                <div className="text-4xl mb-2">
                  {i === 0 ? '👩‍🎨' : i === 1 ? '👨‍🏭' : i === 2 ? '🧑‍🎨' : '👩‍🏭'}
                </div>
                <div className="font-semibold text-sm">{artisan.name}</div>
                <div className="text-white/70 text-xs">{artisan.specialty}</div>
                <div className="text-white/60 text-xs mt-1">{artisan.state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader title="Stories & Insights" subtitle="Dive deep into India's craft heritage" />
            <Link href="/blog" className="text-saffron-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              All Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Link key={post.id} href={`/blog/${post.slug}`}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className={`h-40 bg-gradient-to-br ${
                  i === 0 ? 'from-pink-300 to-red-400' :
                  i === 1 ? 'from-blue-300 to-indigo-400' :
                  'from-green-300 to-teal-400'
                } flex items-center justify-center text-5xl`}>
                  {i === 0 ? '🎨' : i === 1 ? '🧣' : '⚒️'}
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-saffron-500 uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-gray-800 mt-2 mb-2 group-hover:text-saffron-500 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="What Our Customers Say" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Priya Sharma', city: 'Mumbai', text: 'The Banarasi saree I ordered was absolutely stunning. The craftsmanship was impeccable and knowing it was made by a real artisan made it even more special.', rating: 5, product: 'Banarasi Silk Saree' },
              { name: 'Rajesh Kumar', city: 'Bangalore', text: 'I bought a Madhubani painting as a gift and the recipient was moved to tears. The packaging was perfect and delivery was quick.', rating: 5, product: 'Madhubani Painting' },
              { name: 'Anita Patel', city: 'Delhi', text: 'Kalakriti has the best collection of authentic Indian crafts online. I love reading about the artisans and the stories behind each craft.', rating: 5, product: 'Blue Pottery Set' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;{t.text}&quot;</p>
                <div className="text-xs text-saffron-500 mb-2">{t.product}</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-saffron-100 rounded-full flex items-center justify-center text-sm font-bold text-saffron-500">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
