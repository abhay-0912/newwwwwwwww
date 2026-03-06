'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const slides = [
  {
    title: "Handcrafted with",
    highlight: "Generations of Skill",
    subtitle: "Discover authentic Indian handicrafts directly from master artisans across India's 28 states",
    cta: "Explore Crafts",
    ctaLink: "/shop",
    secondaryCta: "Meet Artisans",
    secondaryLink: "/artisans",
    symbol: "ॐ",
    gradient: "from-saffron-500 via-terracotta-500 to-deep-brown",
  },
  {
    title: "Weaving Stories,",
    highlight: "Preserving Heritage",
    subtitle: "Each piece carries centuries of tradition, cultural wisdom, and artisan pride",
    cta: "Shop Textiles",
    ctaLink: "/shop?category=textiles",
    secondaryCta: "Read Stories",
    secondaryLink: "/blog",
    symbol: "✦",
    gradient: "from-deep-brown via-terracotta-600 to-saffron-600",
  },
  {
    title: "From Villages",
    highlight: "to Your Home",
    subtitle: "Support India's 7 million artisans by bringing their masterpieces into your world",
    cta: "Shop Now",
    ctaLink: "/shop",
    secondaryCta: "How It Works",
    secondaryLink: "/how-it-works",
    symbol: "🪔",
    gradient: "from-saffron-600 via-saffron-500 to-gold-400",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className={`relative min-h-screen bg-gradient-to-br ${slide.gradient} transition-all duration-1000 flex items-center overflow-hidden`}>
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }} />
        <div className="absolute top-10 right-10 text-white text-9xl opacity-20 font-serif">✦</div>
        <div className="absolute bottom-20 left-10 text-white text-7xl opacity-20 font-serif">❋</div>
      </div>

      {/* Indian pattern decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <div className="w-full h-full rounded-bl-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-8xl">{slide.symbol}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-tr-full bg-white/20" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              Supporting 7 Million+ Indian Artisans
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              {slide.title}
              <br />
              <span className="text-gold-400">{slide.highlight}</span>
            </h1>

            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center gap-2 bg-white text-saffron-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cream hover:scale-105 transition-all shadow-lg"
              >
                {slide.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={slide.secondaryLink}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all border border-white/30"
              >
                <Play className="w-5 h-5" />
                {slide.secondaryCta}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: '5,000+', label: 'Artisans' },
                { value: '20,000+', label: 'Products' },
                { value: '28', label: 'States' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - featured product showcase */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { emoji: '🏺', name: 'Blue Pottery', state: 'Rajasthan', price: '₹1,200', color: 'from-blue-100 to-blue-300' },
              { emoji: '🧣', name: 'Banarasi Silk', state: 'Uttar Pradesh', price: '₹8,500', color: 'from-red-100 to-pink-300' },
              { emoji: '🎨', name: 'Madhubani Art', state: 'Bihar', price: '₹3,200', color: 'from-green-100 to-emerald-300' },
              { emoji: '⚒️', name: 'Dhokra Art', state: 'Chhattisgarh', price: '₹2,400', color: 'from-yellow-100 to-amber-300' },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer ${i === 1 ? 'mt-8' : ''}`}
              >
                <span className="text-5xl mb-3">{item.emoji}</span>
                <div className="font-semibold text-gray-800 text-sm">{item.name}</div>
                <div className="text-gray-500 text-xs">{item.state}</div>
                <div className="font-bold text-saffron-500 mt-1">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 text-sm flex-col items-center gap-1 hidden md:flex">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </div>
  );
}
