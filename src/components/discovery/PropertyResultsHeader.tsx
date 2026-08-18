import React from 'react';
import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react';
import { FilterState, SortOption } from '@/types/project';
import { PropertySort } from './PropertySort';

interface PropertyResultsHeaderProps {
  filters: FilterState;
  totalCount: number;
  onSortChange: (sort: SortOption) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onOpenMobileFilters: () => void;
}

export function PropertyResultsHeader({
  filters,
  totalCount,
  onSortChange,
  viewMode,
  onViewModeChange,
  onOpenMobileFilters,
}: PropertyResultsHeaderProps) {
  // Construct dynamic context title
  let heading = 'All Properties in Jaipur';
  if (filters.locality && filters.bhk) {
    heading = `${filters.bhk} Properties in ${filters.locality}`;
  } else if (filters.locality) {
    heading = `Properties in ${filters.locality}`;
  } else if (filters.bhk) {
    heading = `${filters.bhk} Properties in Jaipur`;
  } else if (filters.propertyType) {
    heading = `${filters.propertyType} in Jaipur`;
  } else if (filters.search) {
    heading = `Results for "${filters.search}"`;
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-sigma-stone-200/80">
      <div>
        <h2 className="text-xl md:text-2xl font-bold font-serif text-sigma-graphite-900 tracking-tight">
          {heading}
        </h2>
        <p className="mt-0.5 text-xs md:text-sm font-medium text-sigma-stone-500">
          Showing <span className="font-bold text-sigma-blue-700">{totalCount}</span> {totalCount === 1 ? 'property' : 'properties'} available
        </p>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-3">
        {/* Mobile Filter Button */}
        <button
          onClick={onOpenMobileFilters}
          className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-white border border-sigma-stone-300 rounded-xl text-xs font-semibold text-sigma-graphite-800 shadow-xs"
        >
          <SlidersHorizontal className="h-4 w-4 text-sigma-blue-600" />
          Filter
        </button>

        {/* View Mode Toggle */}
        <div className="hidden sm:flex items-center p-1 bg-sigma-stone-100 border border-sigma-stone-200/80 rounded-xl">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-1.5 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-sigma-blue-700 shadow-xs'
                : 'text-sigma-stone-500 hover:text-sigma-graphite-900'
            }`}
            title="Grid View"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-1.5 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-white text-sigma-blue-700 shadow-xs'
                : 'text-sigma-stone-500 hover:text-sigma-graphite-900'
            }`}
            title="List View"
          >
            <List className="h-4 w-4" />
          </button>
        </div>

        {/* Sorting Dropdown */}
        <PropertySort value={filters.sort} onChange={onSortChange} />
      </div>
    </div>
  );
}
