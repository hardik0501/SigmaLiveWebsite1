import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, Landmark, ArrowRight } from 'lucide-react';
import { Location } from '@/types/location';

interface LocationPropertyTypesProps {
  location: Location;
}

const icons: Record<string, any> = {
  Apartments: Building2,
  Villas: Home,
  'Plots & Land': Landmark,
  Commercial: Building2,
};

export function LocationPropertyTypes({ location }: LocationPropertyTypesProps) {
  const types = location.propertyTypes;
  if (!types || types.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Available Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            What Can You Find Here?
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Explore property offerings in {location.name} filtered by build style and layout footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type) => {
            const Icon = icons[type] || Building2;
            const targetUrl = `/properties?location=${encodeURIComponent(location.name)}&type=${encodeURIComponent(type)}`;

            return (
              <Link
                key={type}
                to={targetUrl}
                className="group p-6 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl hover:bg-sigma-blue-50/50 hover:border-sigma-blue-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-sigma-blue-700 shadow-2xs flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-900 transition-colors">
                    {type} in {location.name}
                  </h3>
                  <p className="mt-2 text-xs text-sigma-stone-600 leading-relaxed">
                    View verified {type.toLowerCase()} listings in {location.name}, {location.city}.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sigma-stone-200/60 flex items-center justify-between text-xs font-bold text-sigma-blue-700 group-hover:text-sigma-blue-900">
                  <span>Explore {type}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
