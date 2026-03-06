import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Truck, Package, Globe, Clock } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-14 text-white text-center">
        <div className="text-5xl mb-4">🚚</div>
        <h1 className="text-4xl font-bold mb-3">Shipping Policy</h1>
        <p className="text-white/80">Last updated: January 2024</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <Link href="/faq" className="inline-flex items-center gap-1 text-saffron-500 text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to FAQ
        </Link>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Truck, label: 'Free Shipping', sub: 'On orders ₹999+' },
            { icon: Clock, label: '5–7 Days', sub: 'Standard delivery' },
            { icon: Package, label: '2–3 Days', sub: 'Express delivery' },
            { icon: Globe, label: '40+ Countries', sub: 'International shipping' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-saffron-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon className="w-5 h-5 text-saffron-500" />
              </div>
              <div className="font-semibold text-sm text-gray-800">{label}</div>
              <div className="text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">1. Processing Time</h2>
            <p>
              Orders are processed within <strong>1–2 business days</strong> (excluding Sundays and public holidays). 
              Handcrafted-to-order items may require 3–5 additional days; this will be clearly indicated on the product page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">2. Domestic Shipping (India)</h2>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-saffron-50">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100">Method</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100">Delivery Time</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-100">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Standard', '5–7 business days', 'Free on orders ₹999+ / ₹79 below'],
                    ['Express', '2–3 business days', '₹149 flat'],
                    ['Same Day (Metro)', 'Same day', '₹249 flat (select cities)'],
                  ].map(([method, time, cost]) => (
                    <tr key={method} className="border-b border-gray-100">
                      <td className="p-3 border border-gray-100">{method}</td>
                      <td className="p-3 border border-gray-100">{time}</td>
                      <td className="p-3 border border-gray-100">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">3. International Shipping</h2>
            <p>
              We ship to 40+ countries worldwide. International shipping rates and estimated delivery times are calculated at checkout.
              Delivery typically takes <strong>10–15 business days</strong> depending on the destination country and customs clearance.
            </p>
            <p className="mt-3">
              <strong>Note:</strong> The buyer is responsible for any customs duties, taxes, or import fees levied by the destination country.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">4. Order Tracking</h2>
            <p>
              Once your order is dispatched, you will receive a shipping confirmation email and SMS containing a tracking number and a link to track your shipment in real time.
              You can also track your order via the <Link href="/track-order" className="text-saffron-500 hover:underline">Track Order</Link> page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">5. Packaging</h2>
            <p>
              We use eco-friendly, recycled packaging materials wherever possible. Fragile items are bubble-wrapped and double-boxed to ensure safe transit.
              Every package includes a handwritten note from the artisan.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">6. Lost or Delayed Shipments</h2>
            <p>
              If your order has not arrived within the estimated delivery window, please contact us at{' '}
              <a href="mailto:support@kalakriti.in" className="text-saffron-500 hover:underline">support@kalakriti.in</a>.
              We will investigate and, if necessary, reship or refund the order at no cost to you.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
