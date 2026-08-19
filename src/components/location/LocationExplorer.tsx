import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Location } from '@/types/location';
import { projectsData } from '@/data/projectsData';

interface LocationExplorerProps {
  locations: Location[];
}

export function LocationExplorer({ locations }: LocationExplorerProps) {
  const [selectedLocId, setSelectedLocId] = useState<string>(locations[0]?.id || '');
  const activeLocation = locations.find((l) => l.id === selectedLocId) || locations[0];

  const activeProjectCount = activeLocation
    ? projectsData.filter((p) => p.locality.toLowerCase() === activeLocation.name.toLowerCase()).length
    : 0;

  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Jaipur Neighborhoods</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Explore Jaipur Corridors
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Find properties across Jaipur’s established residential hubs, growth corridors, and emerging investment destinations.
          </p>
        </div>

        {/* Interactive Desktop Split Screen Showcase */}
        {activeLocation && (
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 bg-white rounded-3xl border border-sigma-stone-200/80 p-4 shadow-xl overflow-hidden mb-12">
            {/* Left Preview Image Panel */}
            <div className="lg:col-span-7 relative min-h-[460px] rounded-2xl overflow-hidden bg-sigma-graphite-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLocation.id}
                  src={activeLocation.heroImage}
                  alt={activeLocation.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/30 to-transparent" />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                    {activeLocation.city}
                  </span>
                  {activeProjectCount > 0 && (
                    <span className="px-3 py-1 bg-sigma-blue-600 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" />
                      {activeProjectCount} Available Projects
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-sigma-amber-400">
                    Spotlight Neighborhood
                  </span>
                  <h3 className="text-3xl font-bold font-serif text-white">{activeLocation.name}</h3>
                  <p className="text-sm text-sigma-stone-200 leading-relaxed max-w-xl">
                    {activeLocation.shortDescription}
                  </p>

                  <div className="pt-3 flex items-center gap-3">
                    <Link
                      to={`/locations/${activeLocation.slug}`}
                      className="px-5 py-2.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-2 group"
                    >
                      <span>Explore Area Guide</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to={`/properties?location=${encodeURIComponent(activeLocation.name)}`}
                      className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-bold backdrop-blur-xs transition-colors"
                    >
                      View Properties
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Selection List */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-2 p-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400 px-4 mb-1">
                Select Locality to Preview:
              </span>
              {locations.map((loc) => {
                const isSelected = loc.id === activeLocation.id;
                const count = projectsData.filter(
                  (p) => p.locality.toLowerCase() === loc.name.toLowerCase()
                ).length;

                return (
                  <button
                    key={loc.id}
                    onMouseEnter={() => setSelectedLocId(loc.id)}
                    onClick={() => setSelectedLocId(loc.id)}
                    className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-sigma-graphite-950 text-white border-sigma-graphite-950 shadow-md translate-x-1'
                        : 'bg-sigma-stone-50 hover:bg-sigma-stone-100 text-sigma-graphite-900 border-sigma-stone-200/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isSelected ? 'bg-sigma-amber-500 text-sigma-graphite-950' : 'bg-sigma-stone-200 text-sigma-stone-700'
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm font-serif">{loc.name}</h4>
                        <span className={`text-xs ${isSelected ? 'text-sigma-stone-300' : 'text-sigma-stone-500'}`}>
                          {loc.city} • {loc.propertyTypes.slice(0, 2).join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {count > 0 && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            isSelected ? 'bg-white/20 text-sigma-amber-300' : 'bg-sigma-stone-200 text-sigma-stone-700'
                          }`}
                        >
                          {count} {count === 1 ? 'Project' : 'Projects'}
                        </span>
                      )}
                      <ChevronRight className={`h-4 w-4 ${isSelected ? 'text-sigma-amber-400' : 'text-sigma-stone-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile / Tablet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {locations.map((loc) => {
            const count = projectsData.filter(
              (p) => p.locality.toLowerCase() === loc.name.toLowerCase()
            ).length;

            return (
              <div
                key={loc.id}
                className="group relative flex flex-col bg-white rounded-3xl border border-sigma-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500"
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
