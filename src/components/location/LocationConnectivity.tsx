import React from 'react';
import { Bus, Waypoints } from 'lucide-react';
import { Location } from '@/types/location';

interface LocationConnectivityProps {
  location: Location;
}

export function LocationConnectivity({ location }: LocationConnectivityProps) {
  const connectivity = location.connectivity;
  if (!connectivity || connectivity.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Arterial Networks</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Road Connectivity & Transit
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Verified expressways, feeder roads, and public transit links serving {location.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectivity.map((item, idx) => (
            <div key={idx} className="p-6 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white text-sigma-blue-600 shadow-2xs flex items-center justify-center">
                <Waypoints className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-sigma-graphite-900">{item.road}</h3>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
