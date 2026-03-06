'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, CreditCard, MapPin, Package, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const steps = [
  { id: 1, label: 'Address', icon: MapPin },
  { id: 2, label: 'Shipping', icon: Package },
  { id: 3, label: 'Payment', icon: CreditCard },
  { id: 4, label: 'Review', icon: CheckCircle },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { state } = useCart();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '', cardExpiry: '', cardCvv: '', cardName: '',
  });

  const shipping = state.total >= 999 ? 0 : 99;
  const tax = Math.round(state.total * 0.18);
  const grandTotal = state.total + shipping + tax;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/cart" className="hover:text-saffron-500">Cart</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">Checkout</span>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  currentStep > step.id ? 'bg-green-500 text-white' :
                  currentStep === step.id ? 'bg-saffron-500 text-white' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.id ? '✓' : step.id}
                </div>
                <span className={`text-xs mt-1 hidden sm:block ${currentStep === step.id ? 'text-saffron-500 font-medium' : 'text-gray-400'}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {/* Step 1: Address */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-deep-brown mb-6">Delivery Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'firstName', label: 'First Name', placeholder: 'Priya', col: 1 },
                      { name: 'lastName', label: 'Last Name', placeholder: 'Sharma', col: 1 },
                      { name: 'email', label: 'Email', placeholder: 'priya@example.com', col: 2 },
                      { name: 'phone', label: 'Phone', placeholder: '+91 98765 43210', col: 2 },
                      { name: 'address', label: 'Address', placeholder: '123, MG Road', col: 2 },
                      { name: 'city', label: 'City', placeholder: 'Mumbai', col: 1 },
                      { name: 'state', label: 'State', placeholder: 'Maharashtra', col: 1 },
                      { name: 'pincode', label: 'PIN Code', placeholder: '400001', col: 1 },
                    ].map(field => (
                      <div key={field.name} className={field.col === 2 ? 'col-span-2' : ''}>
                        <label className="text-sm font-medium text-gray-700 block mb-1">{field.label}</label>
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInput}
                          placeholder={field.placeholder}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-saffron-400 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-saffron-500 text-white py-4 rounded-full font-semibold mt-6 hover:bg-saffron-600 transition-colors"
                  >
                    Continue to Shipping
                  </button>
                </div>
              )}

              {/* Step 2: Shipping */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-deep-brown mb-6">Shipping Method</h2>
                  <div className="space-y-3">
                    {[
                      { id: 'standard', label: 'Standard Delivery', desc: '5-7 business days', price: 'Free above ₹999', icon: '📦' },
                      { id: 'express', label: 'Express Delivery', desc: '2-3 business days', price: '₹199', icon: '🚀' },
                      { id: 'overnight', label: 'Overnight Delivery', desc: 'Next business day', price: '₹499', icon: '⚡' },
                    ].map(method => (
                      <label key={method.id}
                        className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                          formData.shippingMethod === method.id ? 'border-saffron-500 bg-saffron-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input type="radio" name="shippingMethod" value={method.id}
                          checked={formData.shippingMethod === method.id}
                          onChange={handleInput} className="accent-saffron-500" />
                        <span className="text-2xl">{method.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">{method.label}</div>
                          <div className="text-sm text-gray-500">{method.desc}</div>
                        </div>
                        <div className="font-semibold text-saffron-500">{method.price}</div>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setCurrentStep(1)} className="flex-1 border border-gray-200 text-gray-600 py-4 rounded-full font-semibold hover:border-gray-300">Back</button>
                    <button onClick={() => setCurrentStep(3)} className="flex-1 bg-saffron-500 text-white py-4 rounded-full font-semibold hover:bg-saffron-600 transition-colors">Continue to Payment</button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-xl font-bold text-deep-brown mb-6">Payment Method</h2>
                  <div className="space-y-3 mb-6">
                    {[
                      { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                      { id: 'upi', label: 'UPI Payment', icon: '📱' },
                      { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                      { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                    ].map(method => (
                      <label key={method.id}
                        className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                          formData.paymentMethod === method.id ? 'border-saffron-500 bg-saffron-50' : 'border-gray-200'
                        }`}
                      >
                        <input type="radio" name="paymentMethod" value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handleInput} className="accent-saffron-500" />
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-medium">{method.label}</span>
                      </label>
                    ))}
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-3 p-4 bg-gray-50 rounded-xl">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Card Number</label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInput}
                          placeholder="1234 5678 9012 3456" maxLength={19}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm font-medium text-gray-700 block mb-1">Expiry</label>
                          <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleInput}
                            placeholder="MM/YY"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 block mb-1">CVV</label>
                          <input type="password" name="cardCvv" value={formData.cardCvv} onChange={handleInput}
                            placeholder="123" maxLength={3}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                        </div>
                      </div>
                    </div>
                  )}
                  {formData.paymentMethod === 'upi' && (
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <label className="text-sm font-medium text-gray-700 block mb-1">UPI ID</label>
                      <input type="text" placeholder="yourname@upi"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                    </div>
                  )}
                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setCurrentStep(2)} className="flex-1 border border-gray-200 text-gray-600 py-4 rounded-full font-semibold">Back</button>
                    <button onClick={() => setCurrentStep(4)} className="flex-1 bg-saffron-500 text-white py-4 rounded-full font-semibold hover:bg-saffron-600 transition-colors">Review Order</button>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-xl font-bold text-deep-brown mb-6">Review Your Order</h2>
                  <div className="space-y-3 mb-6">
                    {state.items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center text-2xl">🎨</div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{product.name}</div>
                          <div className="text-xs text-gray-500">Qty: {quantity}</div>
                        </div>
                        <div className="font-semibold text-saffron-500">₹{(product.price * quantity).toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-saffron-50 rounded-xl p-4 mb-6">
                    <div className="flex justify-between text-sm mb-2"><span>Subtotal</span><span>₹{state.total.toLocaleString()}</span></div>
                    <div className="flex justify-between text-sm mb-2"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
                    <div className="flex justify-between text-sm mb-2"><span>GST</span><span>₹{tax.toLocaleString()}</span></div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2"><span>Total</span><span className="text-saffron-500">₹{grandTotal.toLocaleString()}</span></div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setCurrentStep(3)} className="flex-1 border border-gray-200 text-gray-600 py-4 rounded-full font-semibold">Back</button>
                    <Link href="/order-confirmation" className="flex-1 bg-saffron-500 text-white py-4 rounded-full font-semibold text-center hover:bg-saffron-600 transition-colors">
                      Place Order ₹{grandTotal.toLocaleString()}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">
            <h3 className="font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
              {state.items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-sm">
                  <span className="text-gray-600 truncate flex-1">{product.name} x{quantity}</span>
                  <span className="font-medium ml-2">₹{(product.price * quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span>₹{state.total.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Shipping</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">GST</span><span>₹{tax.toLocaleString()}</span></div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span><span className="text-saffron-500">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs text-gray-500">
              <span>🔒</span>
              <span>Secured by 256-bit SSL encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
