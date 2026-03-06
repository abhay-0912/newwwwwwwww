import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-cream">
      {/* Newsletter Section */}
      <div className="bg-saffron-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Join the Kalakriti Community</h3>
          <p className="text-orange-100 mb-6">Get stories of artisans, craft guides, and exclusive offers delivered to your inbox</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 outline-none text-sm"
            />
            <button type="submit" className="bg-deep-brown text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">क</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">Kalakriti</div>
                <div className="text-xs text-gold-400">कलाकृति</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting India&apos;s master artisans with the world. We celebrate the living traditions of Indian craftsmanship and help preserve cultural heritage for future generations.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['All Products', 'Textiles & Sarees', 'Pottery & Ceramics', 'Paintings & Art', 'Jewellery', 'Home Decor', 'Toys & Gifts'].map(item => (
                <li key={item}><Link href="/shop" className="hover:text-saffron-400 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: 'Our Artisans', href: '/artisans' },
                { label: 'Traditions of India', href: '/traditions' },
                { label: 'Festival Collections', href: '/festivals' },
                { label: 'Cultural Preservation', href: '/cultural-preservation' },
                { label: 'Sustainability', href: '/sustainability' },
                { label: 'Blog & Stories', href: '/blog' },
                { label: 'About Us', href: '/about' },
              ].map(item => (
                <li key={item.label}><Link href={item.href} className="hover:text-saffron-400 transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Help & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Help & Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Return Policy', href: '/return-policy' },
                { label: 'Shipping Policy', href: '/shipping-policy' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms' },
              ].map(item => (
                <li key={item.label}><Link href={item.href} className="hover:text-saffron-400 transition-colors">{item.label}</Link></li>
              ))}
            </ul>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-saffron-400" /><span>hello@kalakriti.in</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-saffron-400" /><span>+91 98765 43210</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-saffron-400" /><span>New Delhi, India</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2024 Kalakriti. Made with ❤️ for India&apos;s artisans.</p>
          <div className="flex items-center gap-4">
            <span>🔒 Secure Payments</span>
            <span>✓ Authentic Products</span>
            <span>📦 Pan India Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
