'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Orders & Shipping',
    items: [
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 5–7 business days across India. Express delivery (2–3 days) is available in select cities. International orders typically arrive in 10–15 business days.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free standard shipping on all orders above ₹999. Orders below ₹999 attract a flat shipping fee of ₹79.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely. Once your order is dispatched you will receive an email and SMS with a tracking link. You can also use the Track Order page on our website.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship to 40+ countries. International shipping rates and delivery timelines are calculated at checkout based on destination.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 15 days of delivery for most items. Products must be unused, in original packaging, and accompanied by proof of purchase. Customised items are non-returnable.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'Log in to your account, go to Orders, select the item you wish to return, and follow the on-screen instructions. Our team will arrange a free pickup.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5–7 business days of receiving and inspecting the returned item. The amount is credited to your original payment method.',
      },
    ],
  },
  {
    category: 'Products & Authenticity',
    items: [
      {
        q: 'Are all products handmade?',
        a: 'Yes. Every product on Kalakriti is handcrafted by verified artisans using traditional techniques. We conduct in-person quality checks before listing any product.',
      },
      {
        q: 'What does "GI Tagged" mean?',
        a: 'Geographical Indication (GI) tags are official certifications that authenticate a product\'s origin. GI-tagged crafts are legally protected and recognised for their cultural significance.',
      },
      {
        q: 'Can I request customisation?',
        a: 'Many artisans on our platform accept custom orders. Look for the "Request Custom Order" button on artisan profile pages, or contact us and we\'ll connect you with the right craftsperson.',
      },
    ],
  },
  {
    category: 'Artisans & Partnerships',
    items: [
      {
        q: 'How can I become an artisan on Kalakriti?',
        a: 'Visit our Artisan Registration page and fill in the application form. Our team reviews each application within 5 business days and will get in touch for a verification call.',
      },
      {
        q: 'What percentage of sales do artisans receive?',
        a: 'Artisans earn a minimum of 85% of every sale. Kalakriti retains only a small platform fee to cover logistics, payment processing, and marketing.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-800 font-medium hover:bg-saffron-50 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-4 h-4 text-saffron-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-saffron-50/30">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-16 text-white text-center">
        <div className="text-5xl mb-4">❓</div>
        <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Find quick answers to the most common questions about Kalakriti.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="text-xl font-bold text-deep-brown mb-5">{section.category}</h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        <div className="bg-saffron-50 rounded-2xl p-6 text-center">
          <p className="text-gray-700 font-medium mb-2">Still have questions?</p>
          <p className="text-sm text-gray-500 mb-4">
            Our support team is available Monday – Saturday, 9 am – 6 pm IST.
          </p>
          <a
            href="/contact"
            className="inline-block bg-saffron-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-saffron-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
