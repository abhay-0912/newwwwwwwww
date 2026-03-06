import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, ShoppingBag, Star, Truck } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discover Authentic Crafts',
    description:
      'Browse thousands of handcrafted products from verified artisans across 28 Indian states. Use filters by craft type, region, artisan, or price range to find exactly what you love.',
    emoji: '🔍',
  },
  {
    step: '02',
    icon: Star,
    title: 'Learn the Story Behind Each Craft',
    description:
      'Every product page tells the story of the artisan, the craft tradition, and the cultural significance. Watch short videos, read the artisan&apos;s journey, and understand why each piece is unique.',
    emoji: '📖',
  },
  {
    step: '03',
    icon: ShoppingBag,
    title: 'Place Your Order Securely',
    description:
      'Add items to your cart and check out using our secure payment gateway. We accept UPI, net banking, all major credit/debit cards, and international payment methods.',
    emoji: '🛒',
  },
  {
    step: '04',
    icon: Truck,
    title: 'We Handle the Rest',
    description:
      'Your order is packed with care using eco-friendly materials and shipped directly to your doorstep. Track your order in real time and receive a personalised note from the artisan.',
    emoji: '📦',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-20 text-white text-center">
        <div className="text-5xl mb-4">⚙️</div>
        <h1 className="text-5xl font-bold mb-4">How Kalakriti Works</h1>
        <p className="text-white/80 text-xl max-w-2xl mx-auto">
          From artisan workshop to your doorstep — a seamless journey that supports India&apos;s craft heritage.
        </p>
      </div>

      {/* Steps */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="space-y-12">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Illustration */}
              <div className="flex-1 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-saffron-100 to-saffron-200 rounded-3xl flex items-center justify-center text-8xl shadow-md">
                  {s.emoji}
                </div>
              </div>
              {/* Content */}
              <div className="flex-1">
                <div className="text-6xl font-bold text-saffron-100 leading-none mb-2">{s.step}</div>
                <h2 className="text-2xl font-bold text-deep-brown mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artisan Revenue Banner */}
      <section className="bg-saffron-500 py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">85% Goes Directly to the Artisan</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Unlike typical retail platforms, Kalakriti ensures that the majority of every sale reaches the artisan family who created the product.
            Our small platform fee covers logistics, payment processing, and quality assurance.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-8">
            {[
              { value: '85%', label: 'Artisan Earnings' },
              { value: '5,000+', label: 'Artisans on Platform' },
              { value: '₹2Cr+', label: 'Total Artisan Payouts' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-white text-saffron-500 px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors"
          >
            Start Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Artisan Onboarding */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-10 shadow-sm grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-5xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-deep-brown mb-3">Are You an Artisan?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Join thousands of craftspeople who are growing their income and sharing their art with the world.
              Registration is free, and our dedicated Artisan Relations team will guide you through every step.
            </p>
            <Link
              href="/artisan/register"
              className="inline-flex items-center gap-2 bg-saffron-500 text-white px-6 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors"
            >
              Join as an Artisan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '✅', label: 'Free Registration' },
              { emoji: '💰', label: '85% Revenue Share' },
              { emoji: '📸', label: 'Free Photography' },
              { emoji: '🚚', label: 'Logistics Support' },
            ].map((item) => (
              <div key={item.label} className="bg-saffron-50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-sm font-medium text-gray-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
