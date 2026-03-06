import React from 'react';
import Link from 'next/link';
import { Package, TrendingUp, ShoppingBag, Star, Plus } from 'lucide-react';

export default function ArtisanDashboardPage() {
  const stats = [
    { label: 'Total Earnings', value: '₹2,45,600', change: '+12%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Active Products', value: '48', change: '+3', icon: Package, color: 'text-saffron-500' },
    { label: 'Orders This Month', value: '23', change: '+8', icon: ShoppingBag, color: 'text-blue-500' },
    { label: 'Average Rating', value: '4.9', change: '+0.1', icon: Star, color: 'text-gold-400' },
  ];
  const recentOrders = [
    { id: 'KK100189', product: 'Blue Pottery Vase', buyer: 'Priya S.', date: 'Today', amount: 1200, status: 'New' },
    { id: 'KK100188', product: 'Blue Pottery Bowl', buyer: 'Rahul K.', date: 'Yesterday', amount: 900, status: 'Processing' },
    { id: 'KK100187', product: 'Pottery Set x3', buyer: 'Anita P.', date: 'Jan 18', amount: 3600, status: 'Shipped' },
  ];
  const statusColors: Record<string, string> = {
    New: 'bg-green-100 text-green-600',
    Processing: 'bg-yellow-100 text-yellow-600',
    Shipped: 'bg-blue-100 text-blue-600',
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-deep-brown">Artisan Dashboard</h1>
            <p className="text-gray-500 text-sm">Welcome back, Ramesh Kumar</p>
          </div>
          <Link href="/artisan/products" className="flex items-center gap-2 bg-saffron-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-saffron-600 transition-colors">
            <Plus className="w-4 h-4" /> Add Product
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <span className="text-xs text-green-500 font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800">Recent Orders</h2>
              <Link href="/artisan/orders" className="text-saffron-500 text-sm">View All</Link>
            </div>
            <div className="space-y-3">
              {recentOrders.map(order => (
                <div key={order.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-saffron-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">🏺</div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{order.product}</div>
                    <div className="text-xs text-gray-500">{order.buyer} • {order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-saffron-500 text-sm">₹{order.amount}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { href: '/artisan/products', label: 'Manage Products', icon: Package },
                  { href: '/artisan/orders', label: 'View Orders', icon: ShoppingBag },
                  { href: '/artisan/earnings', label: 'Earnings', icon: TrendingUp },
                ].map(item => (
                  <Link key={item.label} href={item.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-saffron-50 transition-colors">
                    <item.icon className="w-4 h-4 text-saffron-500" />
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-saffron-50 rounded-2xl p-4">
              <div className="text-saffron-600 font-bold mb-1">Profile Completion</div>
              <div className="text-3xl font-bold text-saffron-500 mb-1">85%</div>
              <div className="w-full bg-saffron-200 rounded-full h-2">
                <div className="bg-saffron-500 h-2 rounded-full" style={{ width: '85%' }} />
              </div>
              <p className="text-xs text-saffron-600 mt-2">Add more product photos to complete your profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
