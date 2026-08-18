import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { locationsData } from '@/data/locationsData';

interface RelatedLocationsProps {
  currentSlug: string;
  relatedSlugs?: string[];
}

export function RelatedLocations({ currentSlug, relatedSlugs = [] }: RelatedLocationsProps) {
  const related = locationsData.filter(
    (loc) => loc.slug !== currentSlug && (relatedSlugs.includes(loc.slug) || relatedSlugs.length === 0)
  ).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-8">
          <span className="eyebrow text-sigma-blue-600">Internal SEO Discovery</span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Explore Nearby Locations in Jaipur
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((loc) => (
            <Link
              key={loc.id}
              to={`/locations/${loc.slug}`}
              className="group p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs hover:shadow-md hover:border-sigma-blue-300 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3 truncate">
                <div className="p-2 rounded-xl bg-sigma-stone-100 text-sigma-blue-600 group-hover:bg-sigma-blue-50 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="truncate">
                  <h3 className="text-xs font-bold text-sigma-graphite-900 group-hover:text-sigma-blue-800 transition-colors truncate">
                    {loc.name}
                  </h3>
                  <span className="text-[10px] text-sigma-stone-400 font-semibold">{loc.city}</span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-sigma-stone-400 group-hover:text-sigma-blue-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
