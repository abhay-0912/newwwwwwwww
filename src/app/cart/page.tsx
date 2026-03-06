'use client';

import React from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { state, removeItem, updateQuantity } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
        <div className="text-center py-20">
          <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Discover beautiful Indian handicrafts to add to your collection</p>
          <Link href="/shop" className="bg-saffron-500 text-white px-8 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const shipping = state.total >= 999 ? 0 : 99;
  const tax = Math.round(state.total * 0.18);
  const grandTotal = state.total + shipping + tax;

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-deep-brown mb-8">Shopping Cart ({state.itemCount} items)</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map(({ product, quantity }) => {
              const colors: Record<string, string> = {
                p1: 'from-blue-200 to-blue-400', p2: 'from-red-200 to-pink-400',
                p3: 'from-yellow-200 to-orange-400', p4: 'from-green-200 to-emerald-400',
                p5: 'from-purple-200 to-indigo-400', p6: 'from-yellow-200 to-amber-400',
                p7: 'from-orange-200 to-red-400', p8: 'from-teal-200 to-cyan-400',
              };
              return (
                <div key={product.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm">
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${colors[product.id] || 'from-saffron-100 to-saffron-200'} flex items-center justify-center text-3xl flex-shrink-0`}>
                    {product.craftType === 'Pottery' ? '🏺' : product.craftType === 'Textiles' ? '🧣' : product.craftType === 'Metalwork' ? '⚒️' : product.craftType === 'Painting' ? '🎨' : '🎁'}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-xs text-gray-500">by {product.artisan} • {product.state}</p>
                        <p className="text-xs text-saffron-500 mt-1">{product.badge}</p>
                      </div>
                      <button onClick={() => removeItem(product.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-saffron-500">₹{(product.price * quantity).toLocaleString()}</div>
                        <div className="text-xs text-gray-400">₹{product.price.toLocaleString()} each</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-deep-brown mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({state.itemCount} items)</span>
                  <span>₹{state.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-500 font-medium' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST (18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-saffron-500">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>
              {shipping === 0 && (
                <div className="bg-green-50 text-green-600 text-xs p-3 rounded-lg mb-4">
                  🎉 You get FREE shipping on this order!
                </div>
              )}
              {shipping > 0 && (
                <div className="bg-blue-50 text-blue-600 text-xs p-3 rounded-lg mb-4">
                  Add ₹{(999 - state.total).toLocaleString()} more for FREE shipping
                </div>
              )}
              <Link href="/checkout" className="w-full bg-saffron-500 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-saffron-600 transition-colors">
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/shop" className="w-full mt-3 border border-gray-200 text-gray-600 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:border-saffron-300 transition-colors text-sm">
                Continue Shopping
              </Link>

              {/* Coupon Code */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-medium text-gray-700 mb-2">Have a coupon?</p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code" className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-saffron-300" />
                  <button className="bg-deep-brown text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
