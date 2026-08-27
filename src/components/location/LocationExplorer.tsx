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
    <section className="py-16 md:py-24 bg-white/[0.01] border-y border-white/5 relative z-10">
      <div className="container-content">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Jaipur Neighborhoods</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
            Explore Jaipur Corridors
          </h2>
          <p className="text-base md:text-lg text-sigma-blue-100/80 leading-relaxed font-sans">
            Find properties across Jaipur’s established residential hubs, growth corridors, and emerging investment destinations.
          </p>
        </div>

        {/* Interactive Desktop Split Screen Showcase */}
        {activeLocation && (
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10 p-5 shadow-2xl overflow-hidden mb-12">
            {/* Left Preview Image Panel */}
            <div className="lg:col-span-7 relative min-h-[480px] rounded-2xl overflow-hidden bg-[#0A1222]">
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C] via-transparent to-transparent" />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/15">
                    {activeLocation.city}
                  </span>
                  {activeProjectCount > 0 && (
                    <span className="px-3.5 py-1.5 bg-sigma-amber-500 text-sigma-navy-950 rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" />
                      {activeProjectCount} Available Projects
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-sigma-amber-400">
                    Spotlight Neighborhood
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-white">{activeLocation.name}</h3>
                  <p className="text-base text-sigma-blue-100/90 leading-relaxed max-w-xl font-sans">
                    {activeLocation.shortDescription}
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <Link
                      to={`/locations/${activeLocation.slug}`}
                      className="px-6 py-3 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-navy-950 rounded-xl text-xs font-extrabold shadow-md transition-all flex items-center gap-2 group"
                    >
                      <span>Explore Area Guide</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to={`/properties?location=${encodeURIComponent(activeLocation.name)}`}
                      className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-xl text-xs font-bold transition-all"
                    >
                      View Properties
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Selection List */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-2 p-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sigma-blue-100/40 px-4 mb-2">
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
                        ? 'bg-white/5 text-white border-white/20 shadow-lg translate-x-1'
                        : 'bg-white/[0.01] hover:bg-white/[0.04] text-sigma-blue-100/80 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isSelected ? 'bg-sigma-amber-500 text-sigma-graphite-950' : 'bg-white/5 text-sigma-blue-100/60'
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm font-serif">{loc.name}</h4>
                        <span className={`text-xs ${isSelected ? 'text-sigma-blue-100/60' : 'text-sigma-blue-100/40'}`}>
                          {loc.city} • {loc.propertyTypes.slice(0, 2).join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {count > 0 && (
                        <span
                          className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                            isSelected ? 'bg-white/10 text-sigma-amber-300' : 'bg-white/5 text-sigma-blue-100/60'
                          }`}
                        >
                          {count} {count === 1 ? 'Project' : 'Projects'}
                        </span>
                      )}
                      <ChevronRight className={`h-4 w-4 ${isSelected ? 'text-sigma-amber-400' : 'text-sigma-blue-100/40'}`} />
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
                className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-lg hover:border-sigma-amber-500/20 transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden bg-[#0A1222]">
                  <img
                    src={loc.heroImage}
                    alt={loc.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 ease-sigma group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3.5 py-1 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-semibold border border-white/15">
                    {loc.city}
                  </span>
                  {count > 0 && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 bg-sigma-amber-500 text-sigma-navy-950 rounded-lg text-xs font-extrabold shadow-md flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5" />
                      {count} {count === 1 ? 'Project' : 'Projects'}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold font-serif text-white">{loc.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-sigma-blue-100/70 leading-relaxed font-sans line-clamp-2">
                    {loc.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {loc.propertyTypes.map((pt) => (
                      <span key={pt} className="px-2.5 py-0.5 bg-white/5 rounded-md text-[11px] font-semibold text-sigma-blue-100/60 border border-white/5">
                        {pt}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <Link
                      to={`/locations/${loc.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-sigma-amber-400 hover:text-sigma-amber-300 transition-colors"
                    >
                      Explore Area Guide
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to={`/properties?location=${encodeURIComponent(loc.name)}`}
                      className="text-xs font-semibold text-sigma-blue-100/60 hover:text-white underline"
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
