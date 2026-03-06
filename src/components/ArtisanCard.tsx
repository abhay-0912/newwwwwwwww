import React from 'react';
import Link from 'next/link';
import { Star, Package, MapPin } from 'lucide-react';
import { Artisan } from '@/data/mockData';

const artisanColors = [
  'from-orange-200 to-red-300',
  'from-blue-200 to-indigo-300',
  'from-green-200 to-teal-300',
  'from-purple-200 to-pink-300',
  'from-yellow-200 to-orange-300',
  'from-teal-200 to-cyan-300',
  'from-rose-200 to-pink-300',
  'from-amber-200 to-yellow-300',
];

interface ArtisanCardProps {
  artisan: Artisan;
  index?: number;
}

export default function ArtisanCard({ artisan, index = 0 }: ArtisanCardProps) {
  const colorClass = artisanColors[index % artisanColors.length];

  return (
    <Link href={`/artisans/${artisan.id}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center p-6">
        {/* Photo */}
        <div className="relative mx-auto mb-4">
          <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${colorClass} mx-auto flex items-center justify-center text-4xl shadow-lg`}>
            {artisan.specialty.includes('Weav') ? '🧵' :
             artisan.specialty.includes('Paint') ? '🎨' :
             artisan.specialty.includes('Cast') || artisan.specialty.includes('Metal') ? '⚒️' :
             artisan.specialty.includes('Toy') ? '🎠' :
             artisan.specialty.includes('Pottery') ? '🏺' : '🖐️'}
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-saffron-500 transition-colors">{artisan.name}</h3>
        <p className="text-saffron-500 text-sm font-medium mb-2">{artisan.specialty}</p>

        <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-3">
          <MapPin className="w-3 h-3" />
          <span>{artisan.village}, {artisan.state}</span>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            <span className="font-medium">{artisan.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Package className="w-4 h-4" />
            <span>{artisan.productCount} products</span>
          </div>
        </div>

        <div className="bg-saffron-50 rounded-lg px-3 py-2 text-xs text-gray-600">
          <span className="font-medium text-saffron-600">{artisan.yearsOfExperience} years</span> of traditional craft
        </div>
      </div>
    </Link>
  );
}
