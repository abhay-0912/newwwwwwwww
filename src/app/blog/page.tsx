import React from 'react';
import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/mockData';

const blogColors = [
  'from-pink-300 to-red-400',
  'from-blue-300 to-indigo-400',
  'from-green-300 to-teal-400',
  'from-orange-300 to-red-400',
  'from-purple-300 to-pink-400',
  'from-yellow-300 to-orange-400',
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div className="text-5xl mb-4">📖</div>
          <h1 className="text-4xl font-bold mb-3">Stories & Insights</h1>
          <p className="text-white/80 text-lg">Artisan stories, craft guides, and cultural explorations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all grid md:grid-cols-2">
            <div className={`h-64 md:h-auto bg-gradient-to-br ${blogColors[0]} flex items-center justify-center text-7xl`}>
              🎨
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-medium text-saffron-500 uppercase tracking-wider mb-2">{featured.category} • Featured</span>
              <h2 className="text-2xl font-bold text-deep-brown mb-3 group-hover:text-saffron-500 transition-colors">{featured.title}</h2>
              <p className="text-gray-500 mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1"><User className="w-4 h-4" />{featured.author}</div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime} min read</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className={`h-44 bg-gradient-to-br ${blogColors[(i + 1) % blogColors.length]} flex items-center justify-center text-5xl`}>
                {i === 0 ? '🧣' : i === 1 ? '⚒️' : i === 2 ? '🖌️' : i === 3 ? '🌿' : '🎊'}
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-saffron-500 uppercase tracking-wider">{post.category}</span>
                <h3 className="font-bold text-gray-800 mt-2 mb-2 group-hover:text-saffron-500 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <div className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</div>
                  <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
