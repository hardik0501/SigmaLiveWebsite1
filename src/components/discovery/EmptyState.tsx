import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import { Project } from '@/types/project';
import { PropertyCard } from './PropertyCard';

interface EmptyStateProps {
  onClearFilters: () => void;
  suggestedProjects: Project[];
  onQuickView: (project: Project) => void;
  onEnquire: (project: Project) => void;
}

export function EmptyState({
  onClearFilters,
  suggestedProjects,
  onQuickView,
  onEnquire,
}: EmptyStateProps) {
  return (
    <div className="py-16 space-y-12">
      <div className="max-w-md mx-auto text-center space-y-4 p-8 bg-white border border-sigma-stone-200/80 rounded-3xl shadow-xs">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-sigma-stone-100 flex items-center justify-center text-sigma-stone-500">
          <SearchX className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">
          No properties match your current search
        </h3>
        <p className="text-sm text-sigma-stone-500 leading-relaxed">
          Try widening your budget range, changing your target locality, or resetting active filters to discover available Sigma opportunities.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={onClearFilters}
            className="px-5 py-2.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-2"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Clear All Filters
          </button>
        </div>
      </div>

      {suggestedProjects.length > 0 && (
        <div className="pt-8 border-t border-sigma-stone-200/60">
          <h4 className="text-base font-bold font-serif text-sigma-graphite-900 mb-6 text-center">
            Explore Featured Sigma Opportunities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedProjects.map((project) => (
              <PropertyCard
                key={project.id}
                project={project}
                onQuickView={onQuickView}
                onEnquire={onEnquire}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
