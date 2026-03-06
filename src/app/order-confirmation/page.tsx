import React from 'react';
import Link from 'next/link';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';

export default function OrderConfirmationPage() {
  const orderNumber = 'KK' + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center py-16">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-14 h-14 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-deep-brown mb-2">Order Placed!</h1>
        <p className="text-gray-500 mb-6">Thank you for supporting Indian artisans. Your order is confirmed.</p>

        <div className="bg-white rounded-2xl p-6 mb-6 text-left space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Order Number</span>
            <span className="font-bold text-saffron-500">{orderNumber}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Estimated Delivery</span>
            <span className="font-medium">5-7 Business Days</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Payment Status</span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">Confirmed</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center">
            <Mail className="w-8 h-8 text-saffron-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Confirmation email sent to your inbox</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <Package className="w-8 h-8 text-saffron-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Your artisan has been notified</p>
          </div>
        </div>

        <div className="bg-saffron-50 rounded-xl p-4 mb-8 text-sm text-saffron-700">
          <p>🎨 <strong>Did you know?</strong> 85% of your payment goes directly to the artisan who made your product.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/account/orders" className="flex-1 bg-saffron-500 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-saffron-600 transition-colors">
            Track Order <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/shop" className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-full font-medium flex items-center justify-center hover:border-saffron-300 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
