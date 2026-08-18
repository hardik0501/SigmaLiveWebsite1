import React from 'react';
import { X, RotateCcw } from 'lucide-react';
import { FilterState } from '@/types/project';
import { statusLabels } from '@/data/projectsData';

interface ActiveFiltersProps {
  filters: FilterState;
  onRemoveFilter: (key: keyof FilterState) => void;
  onClearAll: () => void;
}

export function ActiveFilters({ filters, onRemoveFilter, onClearAll }: ActiveFiltersProps) {
  const activeChips: { key: keyof FilterState; label: string }[] = [];

  if (filters.search) {
    activeChips.push({ key: 'search', label: `"${filters.search}"` });
  }
  if (filters.locality) {
    activeChips.push({ key: 'locality', label: filters.locality });
  }
  if (filters.propertyType) {
    activeChips.push({ key: 'propertyType', label: filters.propertyType });
  }
  if (filters.bhk) {
    activeChips.push({ key: 'bhk', label: filters.bhk });
  }
  if (filters.maxPrice > 0) {
    const formattedMax = (filters.maxPrice / 100000).toFixed(0) + 'L';
    activeChips.push({ key: 'maxPrice', label: `Up to ₹${formattedMax}` });
  }
  if (filters.status) {
    activeChips.push({ key: 'status', label: statusLabels[filters.status] || filters.status });
  }
  if (filters.intent) {
    activeChips.push({ key: 'intent', label: filters.intent });
  }

  if (activeChips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 py-3">
      <span className="text-xs font-semibold text-sigma-stone-500 uppercase tracking-wider mr-1">
        Active Filters:
      </span>
      {activeChips.map((chip) => (
        <span
          key={chip.key}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sigma-stone-300 rounded-lg text-xs font-medium text-sigma-graphite-800 shadow-xs"
        >
          {chip.label}
          <button
            onClick={() => onRemoveFilter(chip.key)}
            className="p-0.5 hover:bg-sigma-stone-100 rounded-md text-sigma-stone-500 hover:text-sigma-graphite-900 transition-colors"
            title={`Remove ${chip.label}`}
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}

      <button
        onClick={onClearAll}
        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-sigma-blue-600 hover:text-sigma-blue-800 hover:underline transition-colors"
      >
        <RotateCcw className="h-3 w-3" />
        Clear All
      </button>
    </div>
  );
}
