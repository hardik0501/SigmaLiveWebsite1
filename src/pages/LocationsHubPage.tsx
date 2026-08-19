import React, { useState, useMemo, useEffect } from 'react';
import { locationsData } from '@/data/locationsData';
import { LocationsHero } from '@/components/location/LocationsHero';
import { LocationExplorer } from '@/components/location/LocationExplorer';
import { WorkingMarkets } from '@/components/sections/WorkingMarkets';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Globe2, MapPin, ArrowRight, Building2, Landmark, HelpCircle, Navigation } from 'lucide-react';

const locationFaqs = [
  {
    q: 'Which is the fastest appreciating residential locality in Jaipur right now?',
    a: 'Mansarovar Extension and Jagatpura near Jaipur International Airport are experiencing the fastest capital growth due to new 200ft sector roads and IT hub developments.',
  },
  {
    q: 'Are properties in Vaishali Nagar and Ajmer Road JDA & RERA approved?',
    a: 'Yes, all residential townships and high-rise apartments featured by Sigma Homes carry 100% legal JDA approval and RERA registration.',
  },
  {
    q: 'What infrastructure projects are driving real estate prices along Kalwar Road?',
    a: 'The 6-lane Ring Road interchange and expanded feeder corridors connect Kalwar Road directly to Ajmer Highway and Mahindra World City.',
  },
  {
    q: 'Can Sigma assist with physical site visits across all Jaipur corridors?',
    a: 'Yes, we provide free chauffeured site visits from anywhere in Jaipur, as well as 4K virtual drone tours for outstation buyers.',
  },
];

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
      {/* 1. Locations Hub Hero */}
      <LocationsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedMarket={selectedMarket}
        onSelectMarket={setSelectedMarket}
      />

      {/* 2. Key Location Stats */}
      <div className="container-content py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xs">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Primary City</span>
            <span className="text-xl font-bold font-serif text-sigma-graphite-900">Jaipur, RJ</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Active Corridors</span>
            <span className="text-xl font-bold font-serif text-sigma-blue-700">6 Key Neighborhoods</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Title Standard</span>
            <span className="text-xl font-bold font-serif text-sigma-green-700">100% JDA/RERA</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Upcoming Hubs</span>
            <span className="text-xl font-bold font-serif text-sigma-amber-600">NCR & Dubai</span>
          </div>
        </div>
      </div>

      {/* 3. Primary Market: Interactive Split-Screen Neighborhoods */}
      <LocationExplorer locations={filteredLocations} />

      {/* 4. Infrastructure Highlights Banner */}
      <section className="py-16 bg-white border-y border-sigma-stone-200/60">
        <div className="container-content">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="eyebrow text-sigma-blue-600">Infrastructure Catalyst</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Jaipur Growth Infrastructure Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="flex items-center gap-2 text-sigma-blue-700 font-bold text-base font-serif">
                <Navigation className="h-5 w-5" />
                6-Lane Jaipur Ring Road
              </div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">
                Connecting Ajmer Road, Tonk Road, and Agra Road, reducing transit times and unlocking township land parcels.
              </p>
            </div>

            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="flex items-center gap-2 text-sigma-blue-700 font-bold text-base font-serif">
                <Building2 className="h-5 w-5" />
                Mahindra World City SEZ
              </div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">
                Multi-product 3,000-acre economic zone employing over 50,000 IT and manufacturing professionals.
              </p>
            </div>

            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="flex items-center gap-2 text-sigma-blue-700 font-bold text-base font-serif">
                <Landmark className="h-5 w-5" />
                Airport & Metro Phase 2
              </div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">
                Proposed North-South Metro corridor extending from Sitapura to Ambabari via Jaipur International Airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Secondary & Future Markets */}
      <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-t border-sigma-stone-200/80">
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
                className="group relative flex flex-col bg-white rounded-3xl border border-sigma-stone-200/80 overflow-hidden shadow-2xs p-6 justify-between space-y-4 hover-lift border-line-trace"
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

      {/* 6. Active Working Markets Section */}
      <WorkingMarkets />

      {/* 7. Location FAQs */}
      <section className="py-16 md:py-24 bg-white border-t border-sigma-stone-200/60">
        <div className="container-content max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="eyebrow text-sigma-blue-600">Corridor Clarifications</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Jaipur Neighborhood FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locationFaqs.map((faq, i) => (
              <div key={i} className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-sigma-blue-700 font-bold text-sm">
                  <HelpCircle className="h-4 w-4 shrink-0" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCTA />
    </div>
  );
}
