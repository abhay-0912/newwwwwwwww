import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-14 text-white text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-white/80">Last updated: January 2024</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <Link href="/faq" className="inline-flex items-center gap-1 text-saffron-500 text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to FAQ
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-gray-700 text-sm leading-relaxed">

          <p>
            Kalakriti (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">1. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number, shipping/billing address</li>
              <li><strong>Payment Information:</strong> Processed securely through third-party payment gateways; we do not store card details</li>
              <li><strong>Usage Data:</strong> Pages visited, products viewed, search queries, browser type, IP address</li>
              <li><strong>Account Information:</strong> Username, password (hashed), order history, wishlist</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Process and fulfil your orders</li>
              <li>Send transactional emails and order updates</li>
              <li>Personalise your shopping experience</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website, products, and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">3. Sharing Your Information</h2>
            <p>We do not sell your personal data. We may share it with:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Logistics Partners:</strong> To deliver your orders</li>
              <li><strong>Payment Processors:</strong> To complete transactions securely</li>
              <li><strong>Analytics Providers:</strong> To understand site usage (data is anonymised)</li>
              <li><strong>Legal Authorities:</strong> When required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">4. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and serve personalised content.
              You can control cookie preferences through your browser settings. Disabling cookies may affect some site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">5. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfil the purposes described in this policy, or as required by law. 
              You may request deletion of your account and associated data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">7. Security</h2>
            <p>
              We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your information.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-deep-brown mb-3">8. Contact Us</h2>
            <p>
              For privacy-related queries or to exercise your rights, contact our Data Protection Officer at{' '}
              <a href="mailto:privacy@kalakriti.in" className="text-saffron-500 hover:underline">privacy@kalakriti.in</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
