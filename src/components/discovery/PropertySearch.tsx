import React from 'react';
import { Search, MapPin, Home, IndianRupee, Layers, SlidersHorizontal } from 'lucide-react';
import { allLocalities, allPropertyTypes, allConfigurations } from '@/data/projectsData';
import { FilterState } from '@/types/project';

interface PropertySearchProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onToggleAdvanced: () => void;
  isAdvancedOpen: boolean;
  totalResults: number;
}

export function PropertySearch({
  filters,
  onFilterChange,
  onToggleAdvanced,
  isAdvancedOpen,
}: PropertySearchProps) {
  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl shadow-sigma-blue-950/5 border border-sigma-stone-200/80">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 items-center">
        {/* Search / Locality Input */}
        <div className="relative group">
          <label className="block text-[11px] font-bold tracking-wider uppercase text-sigma-stone-500 mb-1">
            Where?
          </label>
          <div className="relative flex items-center">
            <MapPin className="absolute left-3 h-4 w-4 text-sigma-blue-600 pointer-events-none" />
            <select
              value={filters.locality}
              onChange={(e) => onFilterChange({ locality: e.target.value })}
              className="w-full pl-9 pr-8 py-2.5 bg-sigma-stone-100/70 border border-sigma-stone-200 rounded-xl text-sm font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">All Locations</option>
              {allLocalities.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="relative group">
          <label className="block text-[11px] font-bold tracking-wider uppercase text-sigma-stone-500 mb-1">
            Property Type
          </label>
          <div className="relative flex items-center">
            <Home className="absolute left-3 h-4 w-4 text-sigma-blue-600 pointer-events-none" />
            <select
              value={filters.propertyType}
              onChange={(e) => onFilterChange({ propertyType: e.target.value })}
              className="w-full pl-9 pr-8 py-2.5 bg-sigma-stone-100/70 border border-sigma-stone-200 rounded-xl text-sm font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              {allPropertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Configuration Dropdown */}
        <div className="relative group">
          <label className="block text-[11px] font-bold tracking-wider uppercase text-sigma-stone-500 mb-1">
            Configuration
          </label>
          <div className="relative flex items-center">
            <Layers className="absolute left-3 h-4 w-4 text-sigma-blue-600 pointer-events-none" />
            <select
              value={filters.bhk}
              onChange={(e) => onFilterChange({ bhk: e.target.value })}
              className="w-full pl-9 pr-8 py-2.5 bg-sigma-stone-100/70 border border-sigma-stone-200 rounded-xl text-sm font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">Any BHK</option>
              {allConfigurations.map((bhk) => (
                <option key={bhk} value={bhk}>
                  {bhk}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Budget Max Selector */}
        <div className="relative group">
          <label className="block text-[11px] font-bold tracking-wider uppercase text-sigma-stone-500 mb-1">
            Budget (Max)
          </label>
          <div className="relative flex items-center">
            <IndianRupee className="absolute left-3 h-4 w-4 text-sigma-blue-600 pointer-events-none" />
            <select
              value={filters.maxPrice || ''}
              onChange={(e) => onFilterChange({ maxPrice: e.target.value ? Number(e.target.value) : 0 })}
              className="w-full pl-9 pr-8 py-2.5 bg-sigma-stone-100/70 border border-sigma-stone-200 rounded-xl text-sm font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">Any Budget</option>
              <option value="4500000">Up to ₹45 Lakhs</option>
              <option value="6000000">Up to ₹60 Lakhs</option>
              <option value="7500000">Up to ₹75 Lakhs</option>
              <option value="12000000">Up to ₹1.2 Crore</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-5 sm:pt-0">
          <button
            onClick={onToggleAdvanced}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-sigma-stone-300 text-sm font-semibold transition-all ${
              isAdvancedOpen
                ? 'bg-sigma-blue-50 text-sigma-blue-700 border-sigma-blue-400'
                : 'bg-white text-sigma-graphite-700 hover:bg-sigma-stone-100'
            }`}
            title="Toggle Advanced Filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden xl:inline">Filters</span>
          </button>
          <button
            onClick={() => {
              // Smooth scroll to results
              const el = document.getElementById('discovery-results');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sigma-blue-700 text-white font-semibold text-sm shadow-md hover:bg-sigma-blue-800 active:scale-[0.98] transition-all"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
