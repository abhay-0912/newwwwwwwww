import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award, Globe } from 'lucide-react';
import { indianStates } from '@/data/mockData';

export default function CulturalPreservationPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-deep-brown to-terracotta-600 py-20 text-white text-center">
        <div className="text-5xl mb-4">🏺</div>
        <h1 className="text-5xl font-bold mb-4">Cultural Preservation</h1>
        <p className="text-white/80 text-xl max-w-2xl mx-auto">
          Safeguarding India&apos;s 5,000-year-old craft heritage — one artisan at a time.
        </p>
      </div>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-deep-brown mb-6">Why Cultural Preservation Matters</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          India is home to over 3,000 distinct craft traditions, many of which are now classified as endangered.
          Rapid industrialisation, changing consumer preferences, and the lack of economic viability have pushed thousands of master artisans to abandon their ancestral crafts.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Kalakriti, we believe that the best way to preserve a living art form is to make it economically viable.
          When an artisan earns a fair income from their craft, they have every reason to pass it on to the next generation.
        </p>
      </section>

      {/* Programme Cards */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-10">Our Preservation Programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                color: 'text-blue-500 bg-blue-50',
                title: 'Craft Documentation Project',
                desc: 'We are creating a comprehensive digital archive of endangered crafts — including video tutorials, oral histories, and step-by-step technique guides — freely available to future generations.',
              },
              {
                icon: Users,
                color: 'text-purple-500 bg-purple-50',
                title: 'Next-Generation Apprenticeships',
                desc: 'We fund apprenticeships that pair young people from artisan communities with master craftspeople, ensuring knowledge transfer to the next generation.',
              },
              {
                icon: Award,
                color: 'text-saffron-500 bg-saffron-50',
                title: 'GI Tag Facilitation',
                desc: 'We help artisan cooperatives apply for and maintain Geographical Indication (GI) tags, providing legal protection and market recognition for their craft traditions.',
              },
              {
                icon: Globe,
                color: 'text-green-500 bg-green-50',
                title: 'Global Craft Diplomacy',
                desc: 'We partner with Indian cultural organisations worldwide to showcase Indian crafts at exhibitions, festivals, and pop-ups, building global appreciation and demand.',
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex gap-5">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endangered Crafts */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-deep-brown text-center mb-4">Crafts We Are Helping Save</h2>
        <p className="text-center text-gray-500 mb-10">These rare art forms are at risk. Your purchase directly supports their survival.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'Bidriware', state: 'Karnataka', emoji: '🏺' },
            { name: 'Pattachitra', state: 'Odisha', emoji: '🖼️' },
            { name: 'Thanjavur Painting', state: 'Tamil Nadu', emoji: '🎨' },
            { name: 'Dhokra Casting', state: 'Chhattisgarh', emoji: '🔔' },
            { name: 'Rogan Art', state: 'Gujarat', emoji: '🌈' },
            { name: 'Chamba Rumal', state: 'Himachal Pradesh', emoji: '🧵' },
            { name: 'Toda Embroidery', state: 'Tamil Nadu', emoji: '🪡' },
            { name: 'Sanjhi Art', state: 'Uttar Pradesh', emoji: '✂️' },
          ].map((craft) => (
            <div key={craft.name} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-50">
              <div className="text-3xl mb-2">{craft.emoji}</div>
              <div className="font-semibold text-sm text-gray-800">{craft.name}</div>
              <div className="text-xs text-saffron-500 mt-1">{craft.state}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-saffron-500 text-white px-6 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors"
          >
            Shop These Crafts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Traditions Map */}
      <section className="bg-deep-brown py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Traditions State by State</h2>
          <p className="text-gray-300 mb-10">Each Indian state has its own unique craft heritage. Discover them all.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {indianStates.slice(0, 10).map((state) => (
              <Link
                key={state.id}
                href={`/traditions/${state.id}`}
                className="bg-white/10 hover:bg-saffron-500 rounded-xl p-3 text-center transition-all text-sm font-medium"
              >
                {state.name}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/traditions"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              View All States <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
