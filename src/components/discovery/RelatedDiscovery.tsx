import React from 'react';
import { MapPin, Building2, ChevronRight } from 'lucide-react';
import { allLocalities, allPropertyTypes } from '@/data/projectsData';

interface RelatedDiscoveryProps {
  onSelectLocality: (loc: string) => void;
  onSelectPropertyType: (type: string) => void;
}

export function RelatedDiscovery({
  onSelectLocality,
  onSelectPropertyType,
}: RelatedDiscoveryProps) {
  return (
    <section className="mt-20 pt-12 border-t border-sigma-stone-200/80">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Explore by Location */}
        <div className="p-6 md:p-8 bg-white border border-sigma-stone-200/70 rounded-3xl shadow-2xs">
          <div className="flex items-center gap-2.5 mb-4 text-sigma-blue-700">
            <MapPin className="h-5 w-5" />
            <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">
              Explore Properties by Location
            </h3>
          </div>
          <p className="text-xs text-sigma-stone-500 mb-6">
            Discover verified residential and commercial opportunities in Jaipur’s premier neighborhoods.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {allLocalities.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  onSelectLocality(loc);
                  const el = document.getElementById('discovery-results');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-between p-3 rounded-xl bg-sigma-stone-50 hover:bg-sigma-blue-50 border border-sigma-stone-200/60 hover:border-sigma-blue-200 transition-all text-left"
              >
                <span className="text-xs font-semibold text-sigma-graphite-800 group-hover:text-sigma-blue-800 truncate">
                  {loc}
                </span>
                <ChevronRight className="h-3.5 w-3.5 text-sigma-stone-400 group-hover:text-sigma-blue-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Explore by Property Type */}
        <div className="p-6 md:p-8 bg-white border border-sigma-stone-200/70 rounded-3xl shadow-2xs">
          <div className="flex items-center gap-2.5 mb-4 text-sigma-blue-700">
            <Building2 className="h-5 w-5" />
            <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">
              Explore by Property Category
            </h3>
          </div>
          <p className="text-xs text-sigma-stone-500 mb-6">
            Browse homes categorized by build style, spatial scale, and land usage.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {allPropertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  onSelectPropertyType(type);
                  const el = document.getElementById('discovery-results');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-between p-3 rounded-xl bg-sigma-stone-50 hover:bg-sigma-blue-50 border border-sigma-stone-200/60 hover:border-sigma-blue-200 transition-all text-left"
              >
                <span className="text-xs font-semibold text-sigma-graphite-800 group-hover:text-sigma-blue-800 truncate">
                  {type}
                </span>
                <ChevronRight className="h-3.5 w-3.5 text-sigma-stone-400 group-hover:text-sigma-blue-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
