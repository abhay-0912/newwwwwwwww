'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, User, ChevronRight, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/mockData';

const blogColors = [
  'from-pink-300 to-red-400',
  'from-blue-300 to-indigo-400',
  'from-green-300 to-teal-400',
  'from-orange-300 to-red-400',
  'from-purple-300 to-pink-400',
  'from-yellow-300 to-orange-400',
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = postIndex !== -1 ? blogPosts[postIndex] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <h2 className="text-2xl font-bold mb-2">Post not found</h2>
          <Link href="/blog" className="text-saffron-500">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-saffron-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-saffron-500">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 truncate">{post.title}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        {/* Hero Image */}
        <div className={`h-72 rounded-2xl bg-gradient-to-br ${blogColors[postIndex % blogColors.length]} flex items-center justify-center text-8xl mb-8`}>
          {postIndex === 0 ? '🎨' : postIndex === 1 ? '🧣' : postIndex === 2 ? '⚒️' : postIndex === 3 ? '🖌️' : '🌿'}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="bg-saffron-50 text-saffron-600 px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
          <div className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</div>
          <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime} min read</div>
        </div>

        <h1 className="text-4xl font-bold text-deep-brown mb-6">{post.title}</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">{post.excerpt}</p>

        {/* Content */}
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed text-lg">{post.content}</p>
          <p className="text-gray-600 leading-relaxed mt-4">
            India&apos;s traditional crafts represent a living heritage that has been passed down through generations. Each piece tells a story of skill, culture, and community. When we support these artisans, we help preserve this heritage for future generations.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The artisans who create these masterpieces spend years, sometimes decades, mastering their craft. Their dedication to quality and tradition is what makes each piece unique and valuable.
          </p>
        </div>

        {/* Back button */}
        <div className="mt-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-saffron-500 font-medium hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-deep-brown mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((rPost, i) => (
              <Link key={rPost.id} href={`/blog/${rPost.slug}`}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className={`h-32 bg-gradient-to-br ${blogColors[i % blogColors.length]} flex items-center justify-center text-4xl`}>
                  {i === 0 ? '🎨' : i === 1 ? '🧣' : '⚒️'}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-gray-800 group-hover:text-saffron-500 line-clamp-2">{rPost.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
