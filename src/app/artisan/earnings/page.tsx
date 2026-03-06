import React from 'react';
import { TrendingUp, DollarSign, Calendar } from 'lucide-react';

const monthlyEarnings = [
  { month: 'Aug', amount: 18500 },
  { month: 'Sep', amount: 22000 },
  { month: 'Oct', amount: 19800 },
  { month: 'Nov', amount: 31000 },
  { month: 'Dec', amount: 42000 },
  { month: 'Jan', amount: 28500 },
];

const transactions = [
  { id: 'T001', product: 'Blue Pottery Vase', date: 'Jan 20', amount: 1020, status: 'Credited' },
  { id: 'T002', product: 'Blue Pottery Bowl x2', date: 'Jan 18', amount: 1530, status: 'Credited' },
  { id: 'T003', product: 'Pottery Set', date: 'Jan 15', amount: 3060, status: 'Pending' },
  { id: 'T004', product: 'Decorative Plate', date: 'Jan 10', amount: 552, status: 'Credited' },
];

const maxAmount = Math.max(...monthlyEarnings.map(e => e.amount));

export default function ArtisanEarningsPage() {
  const totalEarnings = monthlyEarnings.reduce((sum, m) => sum + m.amount, 0);

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-deep-brown mb-6">Earnings Overview</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Earnings', value: `₹${totalEarnings.toLocaleString()}`, sub: 'All time', icon: DollarSign },
            { label: 'This Month', value: '₹28,500', sub: '+12% from last month', icon: TrendingUp },
            { label: 'Pending Payout', value: '₹3,060', sub: 'Processing', icon: Calendar },
          ].map(card => (
            <div key={card.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <card.icon className="w-6 h-6 text-saffron-500" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{card.value}</div>
              <div className="text-sm text-gray-500">{card.label}</div>
              <div className="text-xs text-green-500 mt-1">{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-800 mb-4">Monthly Earnings</h2>
          <div className="flex items-end gap-3 h-32">
            {monthlyEarnings.map(entry => (
              <div key={entry.month} className="flex-1 flex flex-col items-center gap-1">
                <div className="text-xs text-gray-500">₹{(entry.amount / 1000).toFixed(0)}k</div>
                <div
                  className="w-full bg-saffron-500 rounded-t-lg hover:bg-saffron-600 transition-colors"
                  style={{ height: `${(entry.amount / maxAmount) * 100}px` }}
                />
                <div className="text-xs text-gray-500">{entry.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {transactions.map(tx => (
              <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-medium text-sm">{tx.product}</div>
                  <div className="text-xs text-gray-500">{tx.date} • {tx.id}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-500">+₹{tx.amount}</div>
                  <span className={`text-xs ${tx.status === 'Credited' ? 'text-green-500' : 'text-yellow-500'}`}>{tx.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Note: 15% platform fee already deducted. You receive 85% of product price.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
