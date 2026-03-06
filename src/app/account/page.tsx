import React from 'react';
import Link from 'next/link';
import { Package, MapPin, Settings, Heart, Star, ShoppingBag } from 'lucide-react';

export default function AccountPage() {
  const stats = [
    { label: 'Total Orders', value: '12', icon: Package, color: 'bg-saffron-50 text-saffron-500' },
    { label: 'Wishlist Items', value: '8', icon: Heart, color: 'bg-red-50 text-red-500' },
    { label: 'Reviews Given', value: '5', icon: Star, color: 'bg-gold-300 text-yellow-600' },
    { label: 'Saved Addresses', value: '2', icon: MapPin, color: 'bg-blue-50 text-blue-500' },
  ];
  const recentOrders = [
    { id: 'KK100123', product: 'Blue Pottery Vase', date: 'Jan 15, 2024', status: 'Delivered', amount: 1200 },
    { id: 'KK100124', product: 'Banarasi Silk Saree', date: 'Jan 20, 2024', status: 'In Transit', amount: 8500 },
    { id: 'KK100125', product: 'Madhubani Painting', date: 'Feb 1, 2024', status: 'Processing', amount: 3200 },
  ];
  const statusColors: Record<string, string> = {
    Delivered: 'bg-green-100 text-green-600',
    'In Transit': 'bg-blue-100 text-blue-600',
    Processing: 'bg-yellow-100 text-yellow-600',
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-deep-brown to-saffron-700 rounded-2xl p-6 text-white mb-8 flex items-center gap-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">👤</div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Priya!</h1>
            <p className="text-white/80 text-sm">Member since January 2024 • 12 orders</p>
          </div>
          <Link href="/account/settings" className="ml-auto bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Edit Profile
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-deep-brown">Recent Orders</h2>
              <Link href="/account/orders" className="text-saffron-500 text-sm hover:text-saffron-600">View All</Link>
            </div>
            <div className="space-y-3">
              {recentOrders.map(order => (
                <div key={order.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                  <ShoppingBag className="w-8 h-8 text-saffron-500 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-800">{order.product}</div>
                    <div className="text-xs text-gray-500">{order.id} • {order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-saffron-500 text-sm">₹{order.amount.toLocaleString()}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-deep-brown mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {[
                { href: '/account/orders', icon: Package, label: 'My Orders' },
                { href: '/account/addresses', icon: MapPin, label: 'Saved Addresses' },
                { href: '/wishlist', icon: Heart, label: 'Wishlist' },
                { href: '/account/settings', icon: Settings, label: 'Account Settings' },
              ].map(item => (
                <Link key={item.label} href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-saffron-50 transition-colors group">
                  <div className="w-9 h-9 bg-saffron-50 rounded-lg flex items-center justify-center group-hover:bg-saffron-100">
                    <item.icon className="w-4 h-4 text-saffron-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-saffron-500">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
