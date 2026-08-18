import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, School, Stethoscope, ShoppingBag, Bus, ArrowRight } from 'lucide-react';
import { Project, NearbyPlace } from '@/types/project';
import { locationsData } from '@/data/locationsData';

interface ProjectLocationSectionProps {
  project: Project;
}

const categoryIcons: Record<string, any> = {
  EDUCATION: School,
  HEALTHCARE: Stethoscope,
  SHOPPING: ShoppingBag,
  CONNECTIVITY: Bus,
};

export function ProjectLocationSection({ project }: ProjectLocationSectionProps) {
  const intel = project.locationIntel;
  if (!intel) return null;

  // Find matching location slug
  const matchedLocation = locationsData.find(
    (l) => l.name.toLowerCase() === project.locality.toLowerCase()
  );
  const locationSlug = matchedLocation ? matchedLocation.slug : 'mansarovar-jaipur';

  return (
    <section id="location" className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow text-sigma-blue-600">Neighborhood Intelligence</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
              A Connected Address
            </h2>
            <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
              Strategic road connectivity, proximity to top schools, hospitals, and commercial hubs.
            </p>
          </div>

          <Link
            to={`/locations/${locationSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-700 hover:text-sigma-blue-900 transition-colors shrink-0"
          >
            Explore {project.locality} Area Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Location Address Card */}
          <div className="lg:col-span-5 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl p-6 md:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sigma-blue-700 uppercase tracking-wider mb-2">
                <MapPin className="h-4 w-4 text-sigma-blue-600" />
                Verified Project Address
              </div>
              <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">{project.name}</h3>
              <p className="text-xs text-sigma-stone-600 mt-1 leading-relaxed">{intel.address}</p>
            </div>

            {intel.advantages && intel.advantages.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-sigma-stone-200/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400">
                  Location Highlights
                </span>
                {intel.advantages.map((adv, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs font-bold text-sigma-graphite-900">{adv.title}</h4>
                    <p className="text-[11px] text-sigma-stone-500 mt-0.5">{adv.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(intel.address)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Navigation className="h-4 w-4" />
                Get Driving Directions
              </a>

              <Link
                to={`/locations/${locationSlug}`}
                className="py-3 px-4 bg-sigma-stone-200 hover:bg-sigma-stone-300 text-sigma-graphite-900 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                Area Guide
              </Link>
            </div>
          </div>

          {/* Categorized Nearby Places Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold font-serif text-sigma-graphite-900 mb-4">
              Nearby Infrastructure & Distances
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {intel.nearbyPlaces.map((place: NearbyPlace, idx: number) => {
                const Icon = categoryIcons[place.category] || MapPin;
                return (
                  <div key={idx} className="p-4 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-2xl flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white text-sigma-blue-600 shadow-2xs shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-sigma-stone-400 block">
                        {place.category}
                      </span>
                      <h4 className="text-xs font-bold text-sigma-graphite-900 truncate mt-0.5">{place.name}</h4>
                      <span className="text-xs font-semibold text-sigma-blue-700 block mt-1">{place.distance}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
