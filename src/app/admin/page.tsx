import React from 'react';
import Link from 'next/link';
import { Users, Package, ShoppingBag, TrendingUp, AlertCircle } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Users', value: '12,456', change: '+245 this month', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Active Artisans', value: '5,230', change: '+89 pending', icon: Users, color: 'text-saffron-500', bg: 'bg-saffron-50' },
    { label: 'Total Products', value: '24,890', change: '+120 this week', icon: Package, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Monthly Revenue', value: '₹45.2L', change: '+18% vs last month', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50' },
    { label: 'Orders Today', value: '384', change: '23 pending', icon: ShoppingBag, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Pending Reviews', value: '56', change: '12 flagged', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50' },
  ];
  const recentOrders = [
    { id: 'KK100200', product: 'Banarasi Silk Saree', user: 'Priya S.', artisan: 'Meera Devi', amount: 8500, status: 'Processing' },
    { id: 'KK100199', product: 'Blue Pottery Vase', user: 'Rahul K.', artisan: 'Ramesh Kumar', amount: 1200, status: 'Shipped' },
    { id: 'KK100198', product: 'Madhubani Painting', user: 'Anita P.', artisan: 'Sunita Devi', amount: 3200, status: 'Delivered' },
    { id: 'KK100197', product: 'Pashmina Shawl', user: 'Suresh M.', artisan: 'Abdul Rashid', amount: 12000, status: 'New' },
  ];
  const statusColors: Record<string, string> = {
    New: 'bg-green-100 text-green-600',
    Processing: 'bg-yellow-100 text-yellow-600',
    Shipped: 'bg-blue-100 text-blue-600',
    Delivered: 'bg-gray-100 text-gray-600',
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-deep-brown to-gray-800 rounded-2xl p-6 text-white mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-white/70 text-sm">Kalakriti Platform Management</p>
          </div>
          <div className="flex gap-3">
            {[
              { href: '/admin/artisans', label: 'Artisans' },
              { href: '/admin/products', label: 'Products' },
              { href: '/admin/orders', label: 'Orders' },
              { href: '/admin/users', label: 'Users' },
            ].map(link => (
              <Link key={link.label} href={link.href}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-800">Recent Orders</h2>
            <Link href="/admin/orders" className="text-saffron-500 text-sm">View All</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentOrders.map(order => (
              <div key={order.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                <div className="w-10 h-10 bg-saffron-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">🎨</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{order.product}</div>
                  <div className="text-xs text-gray-500">{order.user} → Artisan: {order.artisan}</div>
                </div>
                <div className="text-saffron-500 font-bold">₹{order.amount.toLocaleString()}</div>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
                <div className="text-xs text-gray-400">{order.id}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Avg Order Value', value: '₹2,840', emoji: '📊' },
            { label: 'Customer Retention', value: '68%', emoji: '🔄' },
            { label: 'Artisan Satisfaction', value: '4.8/5', emoji: '⭐' },
            { label: 'GI Tagged Products', value: '1,240', emoji: '🏷️' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{s.emoji}</div>
              <div className="font-bold text-gray-800">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
