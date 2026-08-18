import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Search } from 'lucide-react';
import { FilterState } from '@/types/project';
import {
  allLocalities,
  allPropertyTypes,
  allConfigurations,
  statusLabels,
} from '@/data/projectsData';

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onReset: () => void;
  isOpen: boolean;
}

const buyerIntents = ['End Use', 'Investment', 'Luxury', 'First Home', 'Family Home'];

export function FilterPanel({
  filters,
  onFilterChange,
  onReset,
  isOpen,
}: FilterPanelProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border-b border-sigma-stone-200/80 overflow-hidden shadow-sm"
    >
      <div className="container-content py-6 md:py-8 space-y-6">
        <div className="flex items-center justify-between border-b border-sigma-stone-200/60 pb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sigma-graphite-900">
              Advanced Property Filters
            </h3>
          </div>
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs font-semibold text-sigma-blue-600 hover:text-sigma-blue-800 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Clear All Filters
          </button>
        </div>

        {/* Keywords Text Search */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
            Keyword Search
          </label>
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-sigma-stone-400" />
            <input
              type="text"
              placeholder="Search by project name, address, or amenity..."
              value={filters.search}
              onChange={(e) => onFilterChange({ search: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 bg-sigma-stone-100/60 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Locality Filter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
              Locality
            </label>
            <div className="space-y-1.5 max-h-40 overflow-y-auto pr-2 no-scrollbar">
              <button
                onClick={() => onFilterChange({ locality: '' })}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  !filters.locality
                    ? 'bg-sigma-blue-600 text-white'
                    : 'text-sigma-graphite-700 hover:bg-sigma-stone-100'
                }`}
              >
                All Localities
              </button>
              {allLocalities.map((loc) => (
                <button
                  key={loc}
                  onClick={() => onFilterChange({ locality: filters.locality === loc ? '' : loc })}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    filters.locality === loc
                      ? 'bg-sigma-blue-600 text-white font-semibold'
                      : 'text-sigma-graphite-700 hover:bg-sigma-stone-100'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type & BHK */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                Property Category
              </label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => onFilterChange({ propertyType: '' })}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                    !filters.propertyType
                      ? 'bg-sigma-blue-700 text-white'
                      : 'bg-sigma-stone-100 text-sigma-graphite-700 hover:bg-sigma-stone-200'
                  }`}
                >
                  All
                </button>
                {allPropertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      onFilterChange({ propertyType: filters.propertyType === type ? '' : type })
                    }
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      filters.propertyType === type
                        ? 'bg-sigma-blue-700 text-white font-semibold'
                        : 'bg-sigma-stone-100 text-sigma-graphite-700 hover:bg-sigma-stone-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                Configuration (BHK)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allConfigurations.map((bhk) => (
                  <button
                    key={bhk}
                    onClick={() =>
                      onFilterChange({ bhk: filters.bhk === bhk ? '' : bhk })
                    }
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                      filters.bhk === bhk
                        ? 'bg-sigma-blue-700 text-white'
                        : 'bg-sigma-stone-100 text-sigma-graphite-700 hover:bg-sigma-stone-200'
                    }`}
                  >
                    {bhk}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Range & Area Range */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                Budget Limit
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] text-sigma-stone-500 font-semibold block mb-0.5">Min Price</span>
                  <select
                    value={filters.minPrice || ''}
                    onChange={(e) => onFilterChange({ minPrice: Number(e.target.value) || 0 })}
                    className="w-full p-2 bg-sigma-stone-100 border border-sigma-stone-200 rounded-lg text-xs font-medium focus:outline-none"
                  >
                    <option value="0">Any Min</option>
                    <option value="3500000">₹35 Lakhs</option>
                    <option value="5000000">₹50 Lakhs</option>
                    <option value="7500000">₹75 Lakhs</option>
                  </select>
                </div>
                <div>
                  <span className="text-[10px] text-sigma-stone-500 font-semibold block mb-0.5">Max Price</span>
                  <select
                    value={filters.maxPrice || ''}
                    onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value) || 0 })}
                    className="w-full p-2 bg-sigma-stone-100 border border-sigma-stone-200 rounded-lg text-xs font-medium focus:outline-none"
                  >
                    <option value="0">Any Max</option>
                    <option value="5000000">₹50 Lakhs</option>
                    <option value="7000000">₹70 Lakhs</option>
                    <option value="10000000">₹1 Crore</option>
                    <option value="15000000">₹1.5 Crore</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                Area (Sq.Ft.)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min Sq.Ft."
                  value={filters.minArea || ''}
                  onChange={(e) => onFilterChange({ minArea: Number(e.target.value) || 0 })}
                  className="p-2 bg-sigma-stone-100 border border-sigma-stone-200 rounded-lg text-xs font-medium focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Max Sq.Ft."
                  value={filters.maxArea || ''}
                  onChange={(e) => onFilterChange({ maxArea: Number(e.target.value) || 0 })}
                  className="p-2 bg-sigma-stone-100 border border-sigma-stone-200 rounded-lg text-xs font-medium focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Project Status & Intent */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                Project Status
              </label>
              <div className="flex flex-wrap gap-1.5">
                {Object.entries(statusLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() =>
                      onFilterChange({ status: filters.status === key ? '' : key })
                    }
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      filters.status === key
                        ? 'bg-sigma-blue-700 text-white font-semibold'
                        : 'bg-sigma-stone-100 text-sigma-graphite-700 hover:bg-sigma-stone-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                Buyer Intent
              </label>
              <div className="flex flex-wrap gap-1.5">
                {buyerIntents.map((intent) => (
                  <button
                    key={intent}
                    onClick={() =>
                      onFilterChange({ intent: filters.intent === intent ? '' : intent })
                    }
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      filters.intent === intent
                        ? 'bg-sigma-amber-600 text-white font-semibold'
                        : 'bg-sigma-stone-100 text-sigma-graphite-700 hover:bg-sigma-stone-200'
                    }`}
                  >
                    {intent}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
