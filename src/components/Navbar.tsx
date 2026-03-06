'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop', children: [
    { label: 'All Products', href: '/shop' },
    { label: 'Textiles', href: '/shop?category=textiles' },
    { label: 'Pottery & Ceramics', href: '/shop?category=pottery' },
    { label: 'Paintings & Art', href: '/shop?category=paintings' },
    { label: 'Jewellery', href: '/shop?category=jewellery' },
    { label: 'Home Decor', href: '/shop?category=home-decor' },
  ]},
  { label: 'Collections', href: '/collections' },
  { label: 'Artisans', href: '/artisans' },
  { label: 'Traditions', href: '/traditions' },
  { label: 'Festivals', href: '/festivals' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className="bg-deep-brown text-cream text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>🪔 Authentic Indian Handicrafts | Direct from Artisans</span>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/track-order" className="hover:text-gold-400 transition-colors">Track Order</Link>
            <span>|</span>
            <Link href="/artisan/register" className="hover:text-gold-400 transition-colors">Become an Artisan</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">क</span>
            </div>
            <div>
              <div className="font-bold text-xl text-deep-brown leading-none">Kalakriti</div>
              <div className="text-xs text-saffron-500 leading-none">कलाकृति</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-saffron-500 transition-colors"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-100 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-saffron-50 hover:text-saffron-500 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className={`hidden md:flex items-center transition-all duration-300 ${isSearchOpen ? 'w-48' : 'w-auto'}`}>
              {isSearchOpen ? (
                <form action="/search" method="get" className="flex items-center border border-gray-200 rounded-full px-3 py-1">
                  <input
                    type="text"
                    name="q"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search crafts..."
                    className="text-sm outline-none w-32"
                    autoFocus
                  />
                  <button type="button" onClick={() => setIsSearchOpen(false)}>
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-saffron-500 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            <Link href="/wishlist" className="p-2 text-gray-600 hover:text-saffron-500 transition-colors hidden sm:block">
              <Heart className="w-5 h-5" />
            </Link>

            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-saffron-500 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-saffron-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {state.itemCount}
                </span>
              )}
            </Link>

            <Link href="/account" className="p-2 text-gray-600 hover:text-saffron-500 transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </Link>

            <Link href="/auth/login" className="hidden lg:block bg-saffron-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-saffron-600 transition-colors ml-2">
              Sign In
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-saffron-50 hover:text-saffron-500 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex gap-2">
              <Link href="/auth/login" className="flex-1 bg-saffron-500 text-white text-center py-2 rounded-lg text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Link>
              <Link href="/auth/register" className="flex-1 border border-saffron-500 text-saffron-500 text-center py-2 rounded-lg text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
