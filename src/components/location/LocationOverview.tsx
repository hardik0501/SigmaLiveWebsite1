import React from 'react';
import { Location } from '@/types/location';

interface LocationOverviewProps {
  location: Location;
}

export function LocationOverview({ location }: LocationOverviewProps) {
  return (
    <section className="py-16 md:py-24 bg-sigma-ivory-50 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="eyebrow text-sigma-blue-600">Neighborhood Profile</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-tight">
              About {location.name}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sigma-graphite-800 text-base md:text-lg leading-relaxed font-sans">
            <p className="font-medium text-sigma-graphite-900">
              {location.overview.description}
            </p>

            {location.advantages && location.advantages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {location.advantages.map((adv, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
                    <h3 className="text-base font-bold font-serif text-sigma-graphite-900">{adv.title}</h3>
                    <p className="mt-1 text-xs text-sigma-stone-600 leading-relaxed">{adv.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
