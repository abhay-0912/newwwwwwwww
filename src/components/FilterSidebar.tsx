'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface FilterSidebarProps {
  onFilterChange?: (filters: Record<string, string[]>) => void;
  className?: string;
}

const filterSections = [
  {
    id: 'state',
    label: 'State / Region',
    options: ['Rajasthan', 'Uttar Pradesh', 'Gujarat', 'West Bengal', 'Tamil Nadu', 'Karnataka', 'Odisha', 'Jammu & Kashmir', 'Maharashtra', 'Andhra Pradesh', 'Bihar', 'Chhattisgarh', 'Punjab'],
  },
  {
    id: 'craftType',
    label: 'Craft Type',
    options: ['Pottery', 'Textiles', 'Metalwork', 'Painting', 'Woodwork', 'Jewellery', 'Leather Work', 'Stone Carving', 'Embroidery'],
  },
  {
    id: 'category',
    label: 'Category',
    options: ['Home Decor', 'Clothing', 'Art & Collectibles', 'Jewellery', 'Toys & Games', 'Accessories'],
  },
  {
    id: 'badge',
    label: 'Certification',
    options: ['GI Tagged', 'Handmade Certified', 'Tribal Certified', 'Eco-Friendly', 'Cultural Heritage'],
  },
  {
    id: 'material',
    label: 'Material',
    options: ['Silk', 'Cotton', 'Brass', 'Wood', 'Clay', 'Stone', 'Silver', 'Natural Dyes'],
  },
];

export default function FilterSidebar({ onFilterChange, className = '' }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['state', 'craftType']);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [minRating, setMinRating] = useState(0);

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleFilter = (sectionId: string, option: string) => {
    const current = selectedFilters[sectionId] || [];
    const updated = current.includes(option)
      ? current.filter(o => o !== option)
      : [...current, option];
    const newFilters = { ...selectedFilters, [sectionId]: updated };
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearAll = () => {
    setSelectedFilters({});
    setPriceRange([0, 20000]);
    setMinRating(0);
    onFilterChange?.({});
  };

  const totalSelected = Object.values(selectedFilters).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Filters</h3>
        {totalSelected > 0 && (
          <button onClick={clearAll} className="text-sm text-saffron-500 flex items-center gap-1 hover:text-saffron-600">
            <X className="w-3 h-3" />
            Clear all ({totalSelected})
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="p-4 border-b border-gray-100">
        <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
        <input
          type="range"
          min={0}
          max={20000}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full accent-saffron-500"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="p-4 border-b border-gray-100">
        <h4 className="font-medium text-gray-700 mb-3">Minimum Rating</h4>
        <div className="flex gap-2">
          {[4, 4.5, 4.8].map(rating => (
            <button
              key={rating}
              onClick={() => setMinRating(rating === minRating ? 0 : rating)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition-colors ${
                minRating === rating
                  ? 'bg-saffron-500 text-white border-saffron-500'
                  : 'border-gray-200 text-gray-600 hover:border-saffron-300'
              }`}
            >
              ⭐ {rating}+
            </button>
          ))}
        </div>
      </div>

      {/* Filter Sections */}
      {filterSections.map((section) => (
        <div key={section.id} className="border-b border-gray-100 last:border-0">
          <button
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            onClick={() => toggleSection(section.id)}
          >
            <span className="font-medium text-gray-700 text-sm">{section.label}</span>
            {expandedSections.includes(section.id) ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {expandedSections.includes(section.id) && (
            <div className="px-4 pb-4 space-y-2">
              {section.options.map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={(selectedFilters[section.id] || []).includes(option)}
                    onChange={() => toggleFilter(section.id, option)}
                    className="w-4 h-4 rounded text-saffron-500 accent-saffron-500"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
