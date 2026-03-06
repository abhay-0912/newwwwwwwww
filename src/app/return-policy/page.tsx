import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-14 text-white text-center">
        <div className="text-5xl mb-4">🔄</div>
        <h1 className="text-4xl font-bold mb-3">Return & Refund Policy</h1>
        <p className="text-white/80">Last updated: January 2024</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <Link href="/faq" className="inline-flex items-center gap-1 text-saffron-500 text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to FAQ
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">1. Return Eligibility</h2>
            <p>
              We accept returns within <strong>15 days</strong> of the delivery date. To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Unused and in its original condition</li>
              <li>In the original packaging with all tags attached</li>
              <li>Accompanied by proof of purchase (order confirmation email or invoice)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">2. Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Customised or personalised products</li>
              <li>Perishable items</li>
              <li>Downloadable digital products</li>
              <li>Items explicitly marked as &quot;Final Sale&quot;</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">3. How to Initiate a Return</h2>
            <ol className="list-decimal list-inside space-y-2 mt-3">
              <li>Log in to your Kalakriti account and navigate to <strong>My Orders</strong>.</li>
              <li>Select the order containing the item you wish to return.</li>
              <li>Click <strong>Request Return</strong> and choose a reason.</li>
              <li>Our team will review your request within <strong>24 hours</strong> and schedule a free pickup.</li>
            </ol>
            <p className="mt-3">
              Alternatively, email us at <a href="mailto:returns@kalakriti.in" className="text-saffron-500 hover:underline">returns@kalakriti.in</a> with your order ID and reason for return.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">4. Refund Process</h2>
            <p>
              Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund.
            </p>
            <p className="mt-3">
              Approved refunds are processed within <strong>5–7 business days</strong> and credited to your original payment method. Bank transfer timelines may vary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">5. Damaged or Incorrect Items</h2>
            <p>
              If you receive a damaged, defective, or incorrect item, please contact us within <strong>48 hours</strong> of delivery with photographs. We will arrange a free replacement or full refund at no extra cost.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">6. Contact</h2>
            <p>
              For return-related queries, reach us at{' '}
              <a href="mailto:returns@kalakriti.in" className="text-saffron-500 hover:underline">returns@kalakriti.in</a>{' '}
              or call <strong>+91 98765 43210</strong> (Mon–Sat, 9 am–6 pm IST).
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
