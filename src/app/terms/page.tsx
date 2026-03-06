import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-14 text-white text-center">
        <div className="text-5xl mb-4">📋</div>
        <h1 className="text-4xl font-bold mb-3">Terms &amp; Conditions</h1>
        <p className="text-white/80">Last updated: January 2024</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <Link href="/faq" className="inline-flex items-center gap-1 text-saffron-500 text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to FAQ
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-gray-700 text-sm leading-relaxed">

          <p>
            Please read these Terms &amp; Conditions carefully before using the Kalakriti website or placing an order.
            By accessing our platform you agree to be bound by these terms.
          </p>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">1. Acceptance of Terms</h2>
            <p>
              By using this website you confirm that you are at least 18 years of age (or have parental consent) and accept these Terms &amp; Conditions in full.
              If you do not agree, please discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">2. Account Registration</h2>
            <p>
              You may browse the site without an account. To place an order you must register and provide accurate information.
              You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">3. Products &amp; Pricing</h2>
            <p>
              All prices are displayed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.
              We reserve the right to change prices at any time. Product images are representative; minor variations in handcrafted items are natural and not defects.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">4. Orders &amp; Payment</h2>
            <p>
              An order confirmation email constitutes acceptance of your order. We reserve the right to cancel any order due to stock unavailability, pricing errors, or suspected fraud.
              Payment must be completed in full at the time of ordering through our supported payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and design — is the intellectual property of Kalakriti or its content licensors.
              You may not reproduce, distribute, or create derivative works without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">6. Limitation of Liability</h2>
            <p>
              Kalakriti shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.
              Our total liability for any claim shall not exceed the amount paid for the specific order giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">7. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">8. Changes to Terms</h2>
            <p>
              We may update these terms periodically. Continued use of the website after changes constitutes your acceptance of the revised terms.
              We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">9. Contact</h2>
            <p>
              For questions regarding these terms, please contact us at{' '}
              <a href="mailto:legal@kalakriti.in" className="text-saffron-500 hover:underline">legal@kalakriti.in</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
