'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState<'buyer' | 'artisan'>('buyer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-cream pt-20 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-saffron-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">क</span>
          </div>
          <h1 className="text-2xl font-bold text-deep-brown">Join Kalakriti</h1>
          <p className="text-gray-500 mt-1">Create your account to explore Indian crafts</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Account Type Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {(['buyer', 'artisan'] as const).map(type => (
              <button
                key={type}
                onClick={() => setAccountType(type)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  accountType === type ? 'bg-white text-saffron-500 shadow-sm' : 'text-gray-500'
                }`}
              >
                {type === 'buyer' ? '🛍️ Buyer' : '🧑‍🎨 Artisan'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="Priya Sharma"
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-saffron-400" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-saffron-400" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={e => setFormData(p => ({ ...p, password: e.target.value }))}
                  placeholder="Min 8 characters"
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm outline-none focus:border-saffron-400" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="password" value={formData.confirmPassword} onChange={e => setFormData(p => ({ ...p, confirmPassword: e.target.value }))}
                  placeholder="Repeat your password"
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-saffron-400" />
              </div>
            </div>
            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-saffron-500" />
              <span>I agree to the <Link href="/terms" className="text-saffron-500">Terms of Service</Link> and <Link href="/privacy-policy" className="text-saffron-500">Privacy Policy</Link></span>
            </label>
            <button type="submit" disabled={loading}
              className="w-full bg-saffron-500 text-white py-3 rounded-full font-semibold hover:bg-saffron-600 transition-colors disabled:opacity-70">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-saffron-500 font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
