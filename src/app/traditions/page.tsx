import React from 'react';
import Link from 'next/link';
import { indianStates } from '@/data/mockData';

const stateEmojis: Record<string, string> = {
  'rajasthan': '🏰', 'uttar-pradesh': '🕌', 'kashmir': '❄️', 'gujarat': '🎠',
  'west-bengal': '🪷', 'tamil-nadu': '🏛️', 'odisha': '🛕', 'kerala': '🌴',
  'maharashtra': '🎨', 'karnataka': '🪷',
};

export default function TraditionsPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div className="text-5xl mb-4">🗺️</div>
          <h1 className="text-4xl font-bold mb-3">Traditions of India</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore India&apos;s rich tapestry of crafts, cultures, and traditions from all states
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* India Map Placeholder */}
        <div className="bg-white rounded-2xl p-8 mb-12 text-center shadow-sm">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-bold text-deep-brown mb-2">Explore India&apos;s Craft Map</h2>
          <p className="text-gray-500 mb-6">Click on a state to discover its unique craft traditions</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {indianStates.map(state => (
              <Link
                key={state.id}
                href={`/traditions/${state.id}`}
                className="group bg-saffron-50 hover:bg-saffron-500 rounded-xl p-4 text-center transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stateEmojis[state.id] || '🗺️'}</div>
                <div className="font-semibold text-sm text-gray-800 group-hover:text-white">{state.name}</div>
                <div className="text-xs text-gray-500 group-hover:text-white/80 mt-1">{state.crafts[0]}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Regions */}
        <h2 className="text-2xl font-bold text-deep-brown mb-6">Explore by Region</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['North', 'South', 'East', 'West'].map(region => {
            const regionStates = indianStates.filter(s => s.region === region);
            return (
              <div key={region} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-saffron-500 mb-4">{region} India</h3>
                <div className="space-y-3">
                  {regionStates.map(state => (
                    <Link key={state.id} href={`/traditions/${state.id}`}
                      className="flex items-start gap-3 hover:bg-saffron-50 p-2 rounded-lg transition-colors">
                      <span className="text-2xl">{stateEmojis[state.id] || '🗺️'}</span>
                      <div>
                        <div className="font-medium text-gray-800">{state.name}</div>
                        <div className="text-xs text-gray-500">{state.crafts.slice(0, 3).join(' • ')}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Famous Crafts Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-deep-brown mb-6">India&apos;s Most Famous Crafts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Banarasi Silk', state: 'Uttar Pradesh', emoji: '🧣', color: 'from-red-200 to-pink-300' },
              { name: 'Blue Pottery', state: 'Rajasthan', emoji: '🏺', color: 'from-blue-200 to-indigo-300' },
              { name: 'Pashmina', state: 'Kashmir', emoji: '🧤', color: 'from-purple-200 to-indigo-300' },
              { name: 'Madhubani', state: 'Bihar', emoji: '🎨', color: 'from-green-200 to-emerald-300' },
              { name: 'Pattachitra', state: 'Odisha', emoji: '📜', color: 'from-teal-200 to-cyan-300' },
              { name: 'Dhokra', state: 'Chhattisgarh', emoji: '⚒️', color: 'from-yellow-200 to-amber-300' },
              { name: 'Kanjivaram', state: 'Tamil Nadu', emoji: '👘', color: 'from-orange-200 to-red-300' },
              { name: 'Channapatna', state: 'Karnataka', emoji: '🎠', color: 'from-lime-200 to-green-300' },
            ].map((craft) => (
              <div key={craft.name} className={`bg-gradient-to-br ${craft.color} rounded-xl p-4 text-center`}>
                <span className="text-4xl block mb-2">{craft.emoji}</span>
                <div className="font-semibold text-gray-800 text-sm">{craft.name}</div>
                <div className="text-xs text-gray-600">{craft.state}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
