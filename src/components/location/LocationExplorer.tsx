import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import { Location } from '@/types/location';
import { projectsData } from '@/data/projectsData';

interface LocationExplorerProps {
  locations: Location[];
}

export function LocationExplorer({ locations }: LocationExplorerProps) {
  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Jaipur Neighborhoods</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Explore Jaipur
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Find properties across Jaipur’s established neighborhoods, growth corridors and emerging investment destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {locations.map((loc, idx) => {
            const count = projectsData.filter(
              (p) => p.locality.toLowerCase() === loc.name.toLowerCase()
            ).length;

            return (
              <div
                key={loc.id}
                className="group relative flex flex-col bg-white rounded-3xl border border-sigma-stone-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:shadow-sigma-blue-950/5 transition-all duration-500"
              >
                <div className="relative h-52 w-full overflow-hidden bg-sigma-stone-900">
                  <img
                    src={loc.heroImage}
                    alt={loc.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-sigma group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md text-white rounded-full text-xs font-semibold border border-white/15">
                    {loc.city}
                  </span>
                  {count > 0 && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 bg-sigma-blue-700 text-white rounded-lg text-xs font-bold shadow-xs flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {count} {count === 1 ? 'Project' : 'Projects'}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold font-serif text-white">{loc.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-sigma-stone-600 leading-relaxed line-clamp-2">
                    {loc.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {loc.propertyTypes.map((pt) => (
                      <span key={pt} className="px-2.5 py-0.5 bg-sigma-stone-100 rounded-md text-[11px] font-semibold text-sigma-stone-600">
                        {pt}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-sigma-stone-200/60 flex items-center justify-between gap-2">
                    <Link
                      to={`/locations/${loc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-700 group-hover:text-sigma-blue-900 transition-colors"
                    >
                      Explore Area Guide
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to={`/properties?location=${encodeURIComponent(loc.name)}`}
                      className="text-xs font-semibold text-sigma-stone-500 hover:text-sigma-graphite-900 underline"
                    >
                      View Properties
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
