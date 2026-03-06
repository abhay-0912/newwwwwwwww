'use client';

import React, { useState } from 'react';
import { Package, CheckCircle, Truck, Home } from 'lucide-react';

const trackingSteps = [
  { id: 1, icon: CheckCircle, label: 'Order Confirmed', desc: 'Your order has been confirmed', date: 'Jan 15, 2024', done: true },
  { id: 2, icon: Package, label: 'Crafting Started', desc: 'The artisan has started crafting your order', date: 'Jan 16, 2024', done: true },
  { id: 3, icon: Package, label: 'Quality Check', desc: 'Product passed quality inspection', date: 'Jan 18, 2024', done: true },
  { id: 4, icon: Truck, label: 'Shipped', desc: 'Your order is on its way', date: 'Jan 19, 2024', done: false },
  { id: 5, icon: Home, label: 'Delivered', desc: 'Delivered to your address', date: 'Expected Jan 22', done: false },
];

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [tracked, setTracked] = useState(false);

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-deep-brown mb-2 text-center">Track Your Order</h1>
        <p className="text-gray-500 text-center mb-8">Enter your order number to track your crafted product</p>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              value={orderNumber}
              onChange={e => setOrderNumber(e.target.value)}
              placeholder="Enter order number (e.g., KK123456)"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-saffron-400"
            />
            <button
              onClick={() => setTracked(true)}
              className="bg-saffron-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-saffron-600 transition-colors"
            >
              Track
            </button>
          </div>
        </div>

        {tracked && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div>
                <h2 className="font-bold text-gray-800">Order #{orderNumber || 'KK123456'}</h2>
                <p className="text-sm text-gray-500">Placed on Jan 15, 2024</p>
              </div>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">In Transit</span>
            </div>

            <div className="space-y-6">
              {trackingSteps.map((step, index) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.done ? 'bg-green-500' : 'bg-gray-200'}`}>
                      <step.icon className={`w-5 h-5 ${step.done ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    {index < trackingSteps.length - 1 && (
                      <div className={`w-px flex-1 mt-2 ${step.done ? 'bg-green-500' : 'bg-gray-200'}`} style={{ minHeight: '24px' }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className={`font-medium ${step.done ? 'text-gray-800' : 'text-gray-400'}`}>{step.label}</div>
                    <div className={`text-sm ${step.done ? 'text-gray-500' : 'text-gray-300'}`}>{step.desc}</div>
                    <div className={`text-xs mt-1 ${step.done ? 'text-saffron-500' : 'text-gray-300'}`}>{step.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
