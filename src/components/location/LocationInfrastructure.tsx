import React from 'react';
import { School, Stethoscope, ShoppingBag, Bus, MapPin } from 'lucide-react';
import { Location, InfrastructureItem } from '@/types/location';

interface LocationInfrastructureProps {
  location: Location;
}

const icons: Record<string, any> = {
  EDUCATION: School,
  HEALTHCARE: Stethoscope,
  SHOPPING: ShoppingBag,
  CONNECTIVITY: Bus,
  LIFESTYLE: MapPin,
};

export function LocationInfrastructure({ location }: LocationInfrastructureProps) {
  const infra = location.nearbyInfrastructure;
  if (!infra || infra.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Local Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Nearby Infrastructure & Amenities
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Schools, hospitals, shopping avenues, and transit hubs located in or near {location.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infra.map((item: InfrastructureItem, idx: number) => {
            const Icon = icons[item.category] || MapPin;
            return (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-sigma-stone-400">
                    {item.category}
                  </span>
                  <div className="p-1.5 rounded-lg bg-sigma-stone-100 text-sigma-blue-600">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-sigma-graphite-900 truncate">{item.name}</h3>
                <span className="text-xs font-semibold text-sigma-blue-700 block">{item.distance}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
