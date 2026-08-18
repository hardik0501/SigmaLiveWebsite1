import React from 'react';
import { MapPin, Building2, Layers, Bus } from 'lucide-react';
import { Location } from '@/types/location';

interface LocationSnapshotProps {
  location: Location;
  projectCount: number;
}

export function LocationSnapshot({ location, projectCount }: LocationSnapshotProps) {
  const mainRoad = location.connectivity[0]?.road || 'Major Arterial Road';

  return (
    <div className="relative z-20 -mt-8 container-content">
      <div className="bg-white rounded-2xl border border-sigma-stone-200 shadow-xl shadow-sigma-blue-950/5 p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-sigma-stone-200/80">
          <div className="pt-2 md:pt-0">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
              LOCATION
            </span>
            <div className="mt-1 text-sm md:text-base font-bold text-sigma-graphite-900 flex items-center gap-1.5 truncate">
              <MapPin className="h-4 w-4 text-sigma-blue-600 shrink-0" />
              <span>{location.name}, {location.city}</span>
            </div>
          </div>

          <div className="pt-2 md:pt-0 md:pl-6">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
              PROPERTY TYPES
            </span>
            <div className="mt-1 text-sm md:text-base font-bold text-sigma-graphite-900 flex items-center gap-1.5 truncate">
              <Layers className="h-4 w-4 text-sigma-blue-600 shrink-0" />
              <span>{location.propertyTypes.join(' · ')}</span>
            </div>
          </div>

          <div className="pt-2 md:pt-0 md:pl-6">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
              SIGMA PROJECTS
            </span>
            <div className="mt-1 text-sm md:text-base font-bold text-sigma-blue-700 flex items-center gap-1.5 truncate">
              <Building2 className="h-4 w-4 text-sigma-blue-600 shrink-0" />
              <span>{projectCount} {projectCount === 1 ? 'Project' : 'Projects'} Available</span>
            </div>
          </div>

          <div className="pt-2 md:pt-0 md:pl-6">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
              PRIMARY ROAD NETWORK
            </span>
            <div className="mt-1 text-sm md:text-base font-bold text-sigma-graphite-900 flex items-center gap-1.5 truncate">
              <Bus className="h-4 w-4 text-sigma-blue-600 shrink-0" />
              <span className="truncate">{mainRoad}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
