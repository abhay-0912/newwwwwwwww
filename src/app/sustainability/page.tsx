import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Recycle, Heart, Sun } from 'lucide-react';

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-700 to-teal-600 py-20 text-white text-center">
        <div className="text-5xl mb-4">🌿</div>
        <h1 className="text-5xl font-bold mb-4">Our Commitment to Sustainability</h1>
        <p className="text-white/80 text-xl max-w-2xl mx-auto">
          Handcraft is inherently sustainable. We are committed to keeping it that way.
        </p>
      </div>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-deep-brown text-center mb-10">Our Four Sustainability Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Leaf,
              color: 'text-green-500 bg-green-50',
              title: 'Natural Materials',
              desc: 'We prioritise products made from natural, renewable, and locally sourced materials — clay, cotton, silk, brass, wood, and natural dyes — that minimise environmental impact.',
            },
            {
              icon: Recycle,
              color: 'text-blue-500 bg-blue-50',
              title: 'Zero-Waste Packaging',
              desc: 'All our packaging is made from recycled or biodegradable materials. We have eliminated single-use plastic from our supply chain and use seed paper, jute, and recycled cardboard.',
            },
            {
              icon: Heart,
              color: 'text-red-500 bg-red-50',
              title: 'Fair Trade & Ethical Sourcing',
              desc: 'We pay artisans fairly — a minimum of 85% of every sale. We conduct regular audits to ensure safe working conditions and prohibit child labour throughout our supply chain.',
            },
            {
              icon: Sun,
              color: 'text-yellow-500 bg-yellow-50',
              title: 'Carbon Footprint Reduction',
              desc: 'We are working towards carbon-neutral shipping by 2026. We offset 100% of air freight emissions through certified reforestation projects in India.',
            },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm flex gap-5">
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
      </section>

      {/* Impact Numbers */}
      <section className="bg-green-600 py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Environmental Impact in 2023</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '12,000+', label: 'kg of plastic avoided' },
              { value: '50,000+', label: 'trees saved via digital invoicing' },
              { value: '1,200', label: 'tonnes of CO₂ offset' },
              { value: '95%', label: 'packaging is recyclable' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices Detail */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-deep-brown text-center mb-10">How We Practice Sustainability</h2>

        {[
          {
            title: '🌱 Seed-Paper Thank-You Cards',
            body: 'Every package includes a thank-you card made from seed paper embedded with wildflower and herb seeds. Plant it, water it, and watch gratitude bloom.',
          },
          {
            title: '♻️ Artisan Waste Upcycling Programme',
            body: 'We partner with artisans to upcycle craft offcuts and waste materials into smaller gift items and accessories, ensuring nothing goes to landfill.',
          },
          {
            title: '🌊 Water Conservation Partnerships',
            body: 'Block printing and dyeing crafts consume significant water. We fund water recycling infrastructure in 12 artisan clusters across Rajasthan and Gujarat.',
          },
          {
            title: '🚲 Last-Mile Green Delivery',
            body: 'In select cities we partner with electric-vehicle and bicycle courier services for last-mile delivery, reducing urban emissions.',
          },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-saffron-50 py-12 text-center">
        <p className="text-gray-700 text-lg font-medium mb-4">Every purchase is a vote for a sustainable future.</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-saffron-500 text-white px-6 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors"
        >
          Shop Sustainably <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
