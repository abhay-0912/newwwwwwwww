import React from 'react';
import { Heart, Award, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  const team = [
    { name: 'Arjun Mehta', role: 'Co-Founder & CEO', emoji: '👨‍💼', desc: 'Former Goldman Sachs, passionate about rural India' },
    { name: 'Priya Krishnan', role: 'Co-Founder & CTO', emoji: '👩‍💻', desc: 'Ex-Google engineer, built platforms for millions' },
    { name: 'Dr. Meenakshi Rao', role: 'Head of Artisan Relations', emoji: '👩‍🎨', desc: 'PhD in Indian Art History, 20 years in craft sector' },
    { name: 'Vikram Singh', role: 'Head of Operations', emoji: '👨‍🔧', desc: 'Supply chain expert, previously at Amazon India' },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-20 text-white text-center">
        <div className="text-5xl mb-4">🏺</div>
        <h1 className="text-5xl font-bold mb-4">About Kalakriti</h1>
        <p className="text-white/80 text-xl max-w-2xl mx-auto">
          A bridge between India&apos;s ancient craft traditions and the modern world
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-deep-brown mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Kalakriti (कलाकृति) was founded with a singular purpose: to ensure that India&apos;s 7 million traditional craftspeople can sustain their livelihoods while the world rediscovers the beauty of handmade Indian art.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Every purchase on our platform directly empowers an artisan family, preserves an ancient craft tradition, and brings a piece of India&apos;s living heritage to homes around the world.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Artisan First', desc: '85% revenue goes directly to craftspeople', color: 'text-red-500 bg-red-50' },
              { icon: Award, title: 'Authenticity', desc: 'Every product verified for genuine craftsmanship', color: 'text-saffron-500 bg-saffron-50' },
              { icon: Globe, title: 'Global Reach', desc: 'Connecting Indian crafts to 40+ countries', color: 'text-blue-500 bg-blue-50' },
              { icon: Users, title: 'Community', desc: 'Building a community of craft lovers and creators', color: 'text-green-500 bg-green-50' },
            ].map(v => (
              <div key={v.title} className="text-center">
                <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-saffron-500 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5,000+', label: 'Artisans Empowered' },
              { value: '₹2Cr+', label: 'Artisan Earnings' },
              { value: '28', label: 'States Covered' },
              { value: '150+', label: 'Craft Traditions' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-deep-brown text-center mb-10">The Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map(member => (
            <div key={member.name} className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <div className="text-5xl mb-3">{member.emoji}</div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{member.name}</h3>
              <div className="text-saffron-500 text-xs font-medium mb-2">{member.role}</div>
              <p className="text-xs text-gray-500">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
