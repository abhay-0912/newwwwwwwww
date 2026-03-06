'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, UserCheck, UserX } from 'lucide-react';

const users = [
  { id: 'u1', name: 'Priya Sharma', email: 'priya@example.com', city: 'Mumbai', orders: 12, spent: 45600, joined: 'Jan 2024', status: 'Active' },
  { id: 'u2', name: 'Rahul Kumar', email: 'rahul@example.com', city: 'Delhi', orders: 8, spent: 28900, joined: 'Dec 2023', status: 'Active' },
  { id: 'u3', name: 'Anita Patel', email: 'anita@example.com', city: 'Bangalore', orders: 5, spent: 18500, joined: 'Nov 2023', status: 'Active' },
  { id: 'u4', name: 'Suresh Mehta', email: 'suresh@example.com', city: 'Chennai', orders: 3, spent: 9200, joined: 'Jan 2024', status: 'Inactive' },
  { id: 'u5', name: 'Kavitha Nair', email: 'kavitha@example.com', city: 'Kochi', orders: 15, spent: 62000, joined: 'Sep 2023', status: 'Active' },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState('');
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
            <p className="text-gray-500 text-sm">{users.length} total users</p>
          </div>
          <Link href="/admin" className="text-saffron-500 text-sm">← Admin Dashboard</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search users..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none" />
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {filtered.map(user => (
              <div key={user.id} className="p-4 flex items-center gap-4 hover:bg-gray-50">
                <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center font-bold text-saffron-500 flex-shrink-0">
                  {user.name[0]}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-800">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email} • {user.city}</div>
                </div>
                <div className="text-center hidden sm:block">
                  <div className="font-bold text-sm">{user.orders}</div>
                  <div className="text-xs text-gray-400">Orders</div>
                </div>
                <div className="text-center hidden md:block">
                  <div className="font-bold text-sm text-saffron-500">₹{user.spent.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Total Spent</div>
                </div>
                <div className="text-xs text-gray-400">Since {user.joined}</div>
                <div className="flex items-center gap-1">
                  {user.status === 'Active'
                    ? <span className="flex items-center gap-1 text-xs text-green-600"><UserCheck className="w-3 h-3" /> Active</span>
                    : <span className="flex items-center gap-1 text-xs text-gray-400"><UserX className="w-3 h-3" /> Inactive</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
