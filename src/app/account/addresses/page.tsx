'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Plus, Edit, Trash2, ChevronRight } from 'lucide-react';

const defaultAddresses = [
  { id: '1', name: 'Home', recipient: 'Priya Sharma', address: '123, MG Road, Andheri West', city: 'Mumbai', state: 'Maharashtra', pincode: '400058', phone: '+91 98765 43210', isDefault: true },
  { id: '2', name: 'Office', recipient: 'Priya Sharma', address: '45, Nariman Point, Business District', city: 'Mumbai', state: 'Maharashtra', pincode: '400021', phone: '+91 98765 43210', isDefault: false },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(defaultAddresses);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/account" className="hover:text-saffron-500">Account</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">Addresses</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-deep-brown">Saved Addresses</h1>
          <button onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-saffron-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-saffron-600 transition-colors">
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Add New Address</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Full Name', 'Phone', 'Address Line', 'City', 'State', 'PIN Code'].map(field => (
                <div key={field} className={field === 'Address Line' ? 'col-span-2' : ''}>
                  <label className="text-xs font-medium text-gray-600 block mb-1">{field}</label>
                  <input type="text" placeholder={field}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-saffron-400" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowForm(false)} className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-full text-sm">Cancel</button>
              <button className="flex-1 bg-saffron-500 text-white py-2 rounded-full text-sm font-medium hover:bg-saffron-600">Save Address</button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {addresses.map(addr => (
            <div key={addr.id} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800">{addr.name}</span>
                      {addr.isDefault && <span className="bg-saffron-100 text-saffron-600 text-xs px-2 py-0.5 rounded-full">Default</span>}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{addr.recipient}</p>
                    <p className="text-sm text-gray-500">{addr.address}, {addr.city}, {addr.state} - {addr.pincode}</p>
                    <p className="text-sm text-gray-500">{addr.phone}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-saffron-500 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => setAddresses(prev => prev.filter(a => a.id !== addr.id))}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {!addr.isDefault && (
                <button onClick={() => setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === addr.id })))}
                  className="mt-3 text-xs text-saffron-500 hover:text-saffron-600 font-medium">
                  Set as Default
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
