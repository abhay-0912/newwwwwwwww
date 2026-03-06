'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirm && password.length >= 8) setDone(true);
  };

  return (
    <div className="min-h-screen bg-cream pt-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {!done ? (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-saffron-500" />
                </div>
                <h1 className="text-2xl font-bold text-deep-brown">Reset Password</h1>
                <p className="text-gray-500 text-sm mt-1">Enter your new password below</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                      placeholder="Min 8 characters" minLength={8}
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm outline-none focus:border-saffron-400" />
                    <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)}
                      placeholder="Repeat new password"
                      className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-colors ${
                        confirm && confirm !== password ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-saffron-400'
                      }`} />
                  </div>
                  {confirm && confirm !== password && <p className="text-red-500 text-xs mt-1">Passwords do not match</p>}
                </div>
                <button type="submit" className="w-full bg-saffron-500 text-white py-3 rounded-full font-semibold hover:bg-saffron-600 transition-colors">
                  Reset Password
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-deep-brown mb-2">Password Reset!</h2>
              <p className="text-gray-500 text-sm mb-6">Your password has been successfully updated.</p>
              <Link href="/auth/login" className="bg-saffron-500 text-white px-8 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors">
                Sign In Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
