'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Bell, Shield, User, LogOut } from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    orderUpdates: true, promotions: false, artisanStories: true, newsletter: true,
  });
  const [profile, setProfile] = useState({ name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 98765 43210' });

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/account" className="hover:text-saffron-500">Account</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">Settings</span>
        </div>

        <h1 className="text-2xl font-bold text-deep-brown mb-6">Account Settings</h1>

        <div className="space-y-4">
          {/* Profile */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-saffron-500" />
              <h2 className="font-bold text-gray-800">Profile Information</h2>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center text-3xl">👤</div>
              <button className="text-sm text-saffron-500 font-medium hover:text-saffron-600">Change Photo</button>
            </div>
            <div className="grid gap-3">
              {[
                { label: 'Full Name', field: 'name' as const },
                { label: 'Email Address', field: 'email' as const },
                { label: 'Phone Number', field: 'phone' as const },
              ].map(item => (
                <div key={item.field}>
                  <label className="text-xs font-medium text-gray-600 block mb-1">{item.label}</label>
                  <input type="text" value={profile[item.field]}
                    onChange={e => setProfile(p => ({ ...p, [item.field]: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                </div>
              ))}
              <button className="bg-saffron-500 text-white py-2 rounded-full text-sm font-medium hover:bg-saffron-600 transition-colors mt-2">
                Save Changes
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-saffron-500" />
              <h2 className="font-bold text-gray-800">Notification Preferences</h2>
            </div>
            <div className="space-y-3">
              {Object.entries(notifications).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <button
                    onClick={() => setNotifications(p => ({ ...p, [key]: !val }))}
                    className={`relative w-11 h-6 rounded-full transition-colors ${val ? 'bg-saffron-500' : 'bg-gray-200'}`}
                  >
                    <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${val ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-saffron-500" />
              <h2 className="font-bold text-gray-800">Security</h2>
            </div>
            <div className="space-y-2">
              <Link href="/auth/reset-password" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">Change Password</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Logout */}
          <button className="w-full bg-red-50 text-red-500 py-4 rounded-2xl font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
