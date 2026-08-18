import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Check } from 'lucide-react';
import { FilterState } from '@/types/project';
import {
  allLocalities,
  allPropertyTypes,
  allConfigurations,
  statusLabels,
} from '@/data/projectsData';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onReset: () => void;
  totalResults: number;
}

const buyerIntents = ['End Use', 'Investment', 'Luxury', 'First Home', 'Family Home'];

export function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onReset,
  totalResults,
}: FilterDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-sigma-graphite-950/50 backdrop-blur-xs"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-sigma-stone-200">
              <h2 className="text-base font-bold text-sigma-graphite-900">Filter Properties</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={onReset}
                  className="text-xs font-semibold text-sigma-blue-600 flex items-center gap-1"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset
                </button>
                <button
                  onClick={onClose}
                  className="p-1 text-sigma-graphite-700 hover:text-sigma-graphite-900 rounded-lg hover:bg-sigma-stone-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Scrollable Filters */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {/* Search input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                  Keyword Search
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mansarovar, Villa, Anukampa"
                  value={filters.search}
                  onChange={(e) => onFilterChange({ search: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-sigma-stone-100 border border-sigma-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                />
              </div>

              {/* Locality */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                  Location / Locality
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onFilterChange({ locality: '' })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      !filters.locality
                        ? 'bg-sigma-blue-700 text-white'
                        : 'bg-sigma-stone-100 text-sigma-graphite-800'
                    }`}
                  >
                    All
                  </button>
                  {allLocalities.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => onFilterChange({ locality: filters.locality === loc ? '' : loc })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                        filters.locality === loc
                          ? 'bg-sigma-blue-700 text-white font-semibold'
                          : 'bg-sigma-stone-100 text-sigma-graphite-800'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                  Property Type
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onFilterChange({ propertyType: '' })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      !filters.propertyType
                        ? 'bg-sigma-blue-700 text-white'
                        : 'bg-sigma-stone-100 text-sigma-graphite-800'
                    }`}
                  >
                    All Types
                  </button>
                  {allPropertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => onFilterChange({ propertyType: filters.propertyType === type ? '' : type })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                        filters.propertyType === type
                          ? 'bg-sigma-blue-700 text-white font-semibold'
                          : 'bg-sigma-stone-100 text-sigma-graphite-800'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Configuration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                  Configuration (BHK)
                </label>
                <div className="flex flex-wrap gap-2">
                  {allConfigurations.map((bhk) => (
                    <button
                      key={bhk}
                      onClick={() => onFilterChange({ bhk: filters.bhk === bhk ? '' : bhk })}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
                        filters.bhk === bhk
                          ? 'bg-sigma-blue-700 text-white'
                          : 'bg-sigma-stone-100 text-sigma-graphite-800'
                      }`}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                  Status
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(statusLabels).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => onFilterChange({ status: filters.status === key ? '' : key })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                        filters.status === key
                          ? 'bg-sigma-blue-700 text-white font-semibold'
                          : 'bg-sigma-stone-100 text-sigma-graphite-800'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buyer Intent */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                  Buyer Intent
                </label>
                <div className="flex flex-wrap gap-2">
                  {buyerIntents.map((intent) => (
                    <button
                      key={intent}
                      onClick={() => onFilterChange({ intent: filters.intent === intent ? '' : intent })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                        filters.intent === intent
                          ? 'bg-sigma-amber-600 text-white font-semibold'
                          : 'bg-sigma-stone-100 text-sigma-graphite-800'
                      }`}
                    >
                      {intent}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Apply Action */}
            <div className="p-4 border-t border-sigma-stone-200 bg-sigma-stone-50">
              <button
                onClick={onClose}
                className="w-full py-3 bg-sigma-blue-700 text-white rounded-xl font-bold text-sm shadow-md hover:bg-sigma-blue-800 transition-colors flex items-center justify-center gap-2"
              >
                <Check className="h-4 w-4" />
                Show {totalResults} {totalResults === 1 ? 'Property' : 'Properties'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
