import React from 'react';
import { Package } from 'lucide-react';

const orders = [
  { id: 'KK100189', product: 'Blue Pottery Vase', buyer: 'Priya Sharma', buyerCity: 'Mumbai', date: 'Jan 20, 2024', amount: 1200, status: 'New', emoji: '🏺' },
  { id: 'KK100188', product: 'Blue Pottery Bowl', buyer: 'Rahul Kumar', buyerCity: 'Delhi', date: 'Jan 18, 2024', amount: 900, status: 'Processing', emoji: '🏺' },
  { id: 'KK100187', product: 'Pottery Set x3', buyer: 'Anita Patel', buyerCity: 'Bangalore', date: 'Jan 15, 2024', amount: 3600, status: 'Shipped', emoji: '🍵' },
  { id: 'KK100180', product: 'Blue Pottery Vase', buyer: 'Sundar Rajan', buyerCity: 'Chennai', date: 'Jan 10, 2024', amount: 1200, status: 'Delivered', emoji: '🏺' },
];

const statusColors: Record<string, string> = {
  New: 'bg-green-100 text-green-600',
  Processing: 'bg-yellow-100 text-yellow-600',
  Shipped: 'bg-blue-100 text-blue-600',
  Delivered: 'bg-gray-100 text-gray-600',
};

export default function ArtisanOrdersPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-deep-brown mb-6">Order Management</h1>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 bg-saffron-50 grid grid-cols-6 gap-2 text-xs font-bold text-gray-600 uppercase">
            <div className="col-span-2">Product &amp; Buyer</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Action</div>
          </div>
          {orders.map(order => (
            <div key={order.id} className="p-4 border-b border-gray-50 grid grid-cols-6 gap-2 items-center">
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-10 h-10 bg-saffron-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">{order.emoji}</div>
                <div>
                  <div className="font-medium text-sm">{order.product}</div>
                  <div className="text-xs text-gray-500">{order.buyer} • {order.buyerCity}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">{order.date}</div>
              <div className="font-bold text-saffron-500">₹{order.amount}</div>
              <div><span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>{order.status}</span></div>
              <div>
                {order.status === 'New' && (
                  <button className="text-xs bg-saffron-500 text-white px-3 py-1 rounded-full hover:bg-saffron-600">Accept</button>
                )}
                {order.status === 'Processing' && (
                  <button className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600">Mark Shipped</button>
                )}
                {order.status === 'Shipped' && (
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Package className="w-3 h-3" /> In Transit</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
