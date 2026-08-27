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
    <div className="min-h-screen bg-gradient-to-b from-[#090F1C] via-[#0D1627] to-[#060A12] text-white overflow-hidden">
      {/* 1. Locations Hub Hero */}
      <LocationsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedMarket={selectedMarket}
        onSelectMarket={setSelectedMarket}
      />

      {/* 2. Key Location Stats */}
      <div className="container-content py-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10 shadow-lg">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-amber-400 block mb-1">Primary City</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-white">Jaipur, RJ</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-amber-400 block mb-1">Active Corridors</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-white">6 Key Zones</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-amber-400 block mb-1">Title Standard</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-white">100% JDA/RERA</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-amber-400 block mb-1">Upcoming Hubs</span>
            <span className="text-xl md:text-2xl font-bold font-serif text-white">NCR & Dubai</span>
          </div>
        </div>
      </div>

      {/* 3. Primary Market: Interactive Split-Screen Neighborhoods */}
      <LocationExplorer locations={filteredLocations} />

      {/* 4. Infrastructure Highlights Banner */}
      <section className="py-20 bg-white/[0.01] border-y border-white/10 relative">
        <div className="container-content">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Infrastructure Catalyst</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
              Jaipur Growth Infrastructure Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-bold text-lg font-serif">
                <Navigation className="h-5 w-5 text-sigma-amber-400" />
                6-Lane Jaipur Ring Road
              </div>
              <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans">
                Connecting Ajmer Road, Tonk Road, and Agra Road, reducing transit times and unlocking township land parcels.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-bold text-lg font-serif">
                <Building2 className="h-5 w-5 text-sigma-amber-400" />
                Mahindra World City SEZ
              </div>
              <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans">
                Multi-product 3,000-acre economic zone employing over 50,000 IT and manufacturing professionals.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-2.5 text-white font-bold text-lg font-serif">
                <Landmark className="h-5 w-5 text-sigma-amber-400" />
                Airport & Metro Phase 2
              </div>
              <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans">
                Proposed North-South Metro corridor extending from Sitapura to Ambabari via Jaipur International Airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Secondary & Future Markets */}
      <section className="py-20 md:py-24 bg-white/[0.02] border-t border-white/10 relative">
        <div className="container-content">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Expansion Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
              National & International Markets
            </h2>
            <p className="text-base md:text-lg text-sigma-blue-100/80 leading-relaxed font-sans">
              Beyond Jaipur, Sigma Group is actively extending advisory services and project footprints across NCR and global hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryMarkets.map((m) => (
              <div
                key={m.id}
                className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden shadow-lg p-8 justify-between space-y-6 hover:border-sigma-amber-500/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sigma-amber-500/10 text-sigma-amber-400 border border-sigma-amber-500/20">
                      {m.status}
                    </span>
                    <Globe2 className="h-4 w-4 text-sigma-blue-100/30" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">{m.name}</h3>
                  <p className="mt-3 text-sm md:text-base text-sigma-blue-100/70 leading-relaxed">{m.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs md:text-sm font-semibold text-sigma-blue-100/60">
                  <span>Inquire Opportunities</span>
                  <ArrowRight className="h-4 w-4 text-sigma-blue-100/40 group-hover:text-sigma-amber-400 transition-colors group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Active Working Markets Section */}
      <WorkingMarkets />

      {/* 7. Location FAQs */}
      <section className="py-20 md:py-24 bg-white/[0.01] border-t border-white/10">
        <div className="container-content max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Corridor Clarifications</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
              Jaipur Neighborhood FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locationFaqs.map((faq, i) => (
              <div key={i} className="p-8 bg-white/[0.02] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-3 text-white font-bold text-base md:text-lg">
                  <HelpCircle className="h-5 w-5 text-sigma-amber-400 shrink-0 mt-0.5" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="text-sm md:text-base text-sigma-blue-100/75 leading-relaxed font-sans pl-8">
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
