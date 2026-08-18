import React, { useState, useMemo, useEffect } from 'react';
import { locationsData } from '@/data/locationsData';
import { LocationsHero } from '@/components/location/LocationsHero';
import { LocationExplorer } from '@/components/location/LocationExplorer';
import { Globe2, MapPin, ArrowRight } from 'lucide-react';

export function LocationsHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('jaipur');

  useEffect(() => {
    document.title = 'Real Estate Locations & Area Guides | Sigma Homes India';
  }, []);

  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return locationsData;
    const q = searchQuery.toLowerCase();
    return locationsData.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.shortDescription.toLowerCase().includes(q) ||
        loc.connectivity.some((c) => c.road.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const secondaryMarkets = [
    {
      id: 'noida',
      name: 'Noida (NCR)',
      status: 'Working Zone',
      description: 'Expanding presence in the Delhi NCR real estate corridor along Noida Expressway.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 'gurgaon',
      name: 'Gurgaon (NCR)',
      status: 'Working Zone',
      description: 'Targeting premium residential and commercial high-rise opportunities.',
      image: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 'dubai',
      name: 'Dubai (UAE)',
      status: 'Future Zone',
      description: 'International expansion for NRI clients and global real estate investors.',
      image: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 'dholera',
      name: 'Dholera (Gujarat)',
      status: 'Future Zone',
      description: 'Smart city land investment opportunities on the Delhi-Mumbai Industrial Corridor.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  ];

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900">
      {/* Locations Hub Hero */}
      <LocationsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedMarket={selectedMarket}
        onSelectMarket={setSelectedMarket}
      />

      {/* Primary Market: Jaipur Neighborhoods */}
      <LocationExplorer locations={filteredLocations} />

      {/* Secondary & Future Markets */}
      <section className="py-16 md:py-24 bg-white border-t border-sigma-stone-200/80">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow text-sigma-amber-600">Expansion Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
              National & International Markets
            </h2>
            <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
              Beyond Jaipur, Sigma Group is actively extending advisory services and project footprints across NCR and global hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryMarkets.map((m) => (
              <div
                key={m.id}
                className="group relative flex flex-col bg-sigma-stone-50 rounded-3xl border border-sigma-stone-200/80 overflow-hidden shadow-2xs p-6 justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sigma-amber-500/10 text-sigma-amber-700 border border-sigma-amber-200/50">
                      {m.status}
                    </span>
                    <Globe2 className="h-4 w-4 text-sigma-stone-400" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">{m.name}</h3>
                  <p className="mt-2 text-xs text-sigma-stone-600 leading-relaxed">{m.description}</p>
                </div>

                <div className="pt-4 border-t border-sigma-stone-200/60 flex items-center justify-between text-xs font-semibold text-sigma-stone-500">
                  <span>Inquire Opportunities</span>
                  <ArrowRight className="h-3.5 w-3.5 text-sigma-stone-400 group-hover:text-sigma-blue-700 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
