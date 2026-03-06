import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-deep-brown to-saffron-700 py-16 text-white text-center">
        <div className="text-5xl mb-4">💌</div>
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Info Cards */}
        <div className="space-y-6">
          {[
            {
              icon: Mail,
              title: 'Email Us',
              lines: ['hello@kalakriti.in', 'support@kalakriti.in'],
            },
            {
              icon: Phone,
              title: 'Call Us',
              lines: ['+91 98765 43210', 'Mon – Sat, 9 am – 6 pm IST'],
            },
            {
              icon: MapPin,
              title: 'Visit Us',
              lines: ['12, Craft Lane, Hauz Khas', 'New Delhi – 110016, India'],
            },
            {
              icon: Clock,
              title: 'Business Hours',
              lines: ['Monday – Saturday: 9 am – 6 pm', 'Sunday: Closed'],
            },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <div className="w-10 h-10 bg-saffron-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-saffron-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-sm text-gray-500">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-deep-brown mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Priya"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-saffron-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Sharma"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-saffron-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="priya@example.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-saffron-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-saffron-400 transition-colors text-gray-700">
                <option value="">Select a subject</option>
                <option>Order Enquiry</option>
                <option>Return / Refund</option>
                <option>Artisan Partnership</option>
                <option>Wholesale Enquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us how we can help…"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-saffron-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-saffron-500 text-white px-6 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
