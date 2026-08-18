import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface LocationBreadcrumbsProps {
  city: string;
  locationName: string;
}

export function LocationBreadcrumbs({ city, locationName }: LocationBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-sigma-navy-950/80 backdrop-blur-md text-sigma-stone-300 text-xs font-semibold border-b border-white/10">
      <div className="container-content flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
          <Home className="h-3.5 w-3.5" />
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-sigma-stone-500 shrink-0" />
        <Link to="/locations" className="hover:text-white transition-colors">
          Locations
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-sigma-stone-500 shrink-0" />
        <span className="text-sigma-stone-400">{city}</span>
        <ChevronRight className="h-3.5 w-3.5 text-sigma-stone-500 shrink-0" />
        <span className="text-sigma-amber-400 truncate font-bold">{locationName}</span>
      </div>
    </nav>
  );
}
