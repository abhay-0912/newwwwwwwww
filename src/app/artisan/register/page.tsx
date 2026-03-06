'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Upload } from 'lucide-react';

const steps = ['Personal Info', 'Craft Details', 'Documents', 'Complete'];

export default function ArtisanRegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', village: '', state: '', experience: '',
    specialty: '', craftDescription: '', craftType: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-cream pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-14 h-14 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-deep-brown mb-3">Application Submitted!</h1>
          <p className="text-gray-500 mb-6">Thank you for applying. Our team will review your application and get back to you within 3-5 business days.</p>
          <Link href="/" className="bg-saffron-500 text-white px-8 py-3 rounded-full font-medium hover:bg-saffron-600 transition-colors">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-deep-brown">Become a Kalakriti Artisan</h1>
          <p className="text-gray-500 mt-2">Share your craft with the world and earn a fair income</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, i) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                  i < currentStep ? 'bg-green-500 text-white' : i === currentStep ? 'bg-saffron-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {i < currentStep ? '✓' : i + 1}
                </div>
                <span className="text-xs mt-1 hidden sm:block text-gray-500">{step}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-px mx-2 ${i < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {currentStep === 0 && (
            <div>
              <h2 className="text-xl font-bold text-deep-brown mb-6">Personal Information</h2>
              <div className="space-y-4">
                {[
                  { name: 'name', label: 'Full Name', placeholder: 'Ramesh Kumar' },
                  { name: 'email', label: 'Email Address', placeholder: 'ramesh@example.com' },
                  { name: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210' },
                  { name: 'village', label: 'Village / Town', placeholder: 'Jaipur' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="text-sm font-medium text-gray-700 block mb-1">{field.label}</label>
                    <input type="text" name={field.name} value={formData[field.name as keyof typeof formData]}
                      onChange={handleInput} placeholder={field.placeholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">State</label>
                  <select name="state" value={formData.state} onChange={handleInput}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-saffron-400">
                    <option value="">Select State</option>
                    {['Rajasthan', 'Uttar Pradesh', 'Gujarat', 'West Bengal', 'Tamil Nadu', 'Karnataka', 'Odisha', 'Jammu & Kashmir', 'Maharashtra', 'Bihar', 'Chhattisgarh', 'Punjab'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-deep-brown mb-6">Craft Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Craft Specialty</label>
                  <input type="text" name="specialty" value={formData.specialty} onChange={handleInput}
                    placeholder="e.g., Blue Pottery, Madhubani Painting"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Years of Experience</label>
                  <input type="number" name="experience" value={formData.experience} onChange={handleInput}
                    placeholder="15"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-saffron-400" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Describe Your Craft</label>
                  <textarea name="craftDescription" value={formData.craftDescription} onChange={handleInput}
                    placeholder="Tell us about your craft tradition, techniques, and what makes your work unique..."
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-saffron-400 resize-none" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-deep-brown mb-6">Upload Documents</h2>
              <div className="space-y-4">
                {['Government ID (Aadhaar/PAN)', 'Craft Certificate (if any)', 'Sample Product Photos'].map(doc => (
                  <div key={doc} className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-saffron-400 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-700">{doc}</div>
                    <div className="text-xs text-gray-400 mt-1">Click or drag to upload</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-8">
            {currentStep > 0 && (
              <button onClick={() => setCurrentStep(s => s - 1)}
                className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-full font-medium">
                Back
              </button>
            )}
            <button onClick={() => setCurrentStep(s => s + 1)}
              className="flex-1 bg-saffron-500 text-white py-3 rounded-full font-semibold hover:bg-saffron-600 transition-colors">
              {currentStep === 2 ? 'Submit Application' : 'Continue'}
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { emoji: '💰', title: '85% Revenue', desc: 'Goes directly to you' },
            { emoji: '🌍', title: 'Global Reach', desc: 'Sell worldwide' },
            { emoji: '📦', title: 'Free Logistics', desc: 'We handle shipping' },
          ].map(b => (
            <div key={b.title} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl mb-2">{b.emoji}</div>
              <div className="font-semibold text-sm text-gray-800">{b.title}</div>
              <div className="text-xs text-gray-500">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
