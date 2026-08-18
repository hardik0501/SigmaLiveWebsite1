import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortOption } from '@/types/project';

interface PropertySortProps {
  value: SortOption;
  onChange: (sort: SortOption) => void;
}

export function PropertySort({ value, onChange }: PropertySortProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-sigma-stone-500">
        Sort By:
      </span>
      <div className="relative inline-flex items-center">
        <ArrowUpDown className="absolute left-3 h-3.5 w-3.5 text-sigma-stone-400 pointer-events-none" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="pl-8 pr-8 py-2 bg-white border border-sigma-stone-300 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 shadow-xs appearance-none cursor-pointer"
        >
          <option value="recommended">Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="area-asc">Area: Small to Large</option>
          <option value="area-desc">Area: Large to Small</option>
          <option value="newest">Newest Launch</option>
        </select>
      </div>
    </div>
  );
}
