import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';

interface LocationsHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectMarket: (market: string) => void;
  selectedMarket: string;
}

export function LocationsHero({
  searchQuery,
  onSearchChange,
  onSelectMarket,
  selectedMarket,
}: LocationsHeroProps) {
  const markets = [
    { id: 'jaipur', label: 'Jaipur (Primary)', active: true },
    { id: 'noida', label: 'Noida (NCR)', active: false },
    { id: 'gurgaon', label: 'Gurgaon (NCR)', active: false },
    { id: 'dubai', label: 'Dubai (International)', active: false },
    { id: 'dholera', label: 'Dholera (Smart City)', active: false },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-sigma-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sigma-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-8 md:mb-12"
        >
          <span className="eyebrow text-sigma-amber-400">Hyperlocal Real Estate Intelligence</span>
          <h1 className="mt-3 text-display font-serif font-semibold text-white tracking-tight leading-[1.08]">
            Explore Real Estate <br className="hidden sm:inline" />
            by Location
          </h1>
          <p className="mt-4 text-base md:text-lg text-sigma-stone-300 font-sans max-w-2xl leading-relaxed">
            Discover properties, projects and real-estate opportunities across the locations where Sigma Homes operates and continues to grow.
          </p>
        </motion.div>

        {/* Market Selector & Locality Search Input */}
        <div className="bg-white/[0.03] backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 shadow-2xl space-y-4">
          <div className="flex flex-wrap gap-2 pb-3 border-b border-white/10">
            {markets.map((m) => (
              <button
                key={m.id}
                onClick={() => onSelectMarket(m.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedMarket === m.id
                    ? 'bg-sigma-amber-500 text-sigma-navy-950 shadow-md'
                    : 'bg-white/5 text-sigma-blue-100 hover:bg-white/10'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="relative flex items-center">
            <Search className="absolute left-4 h-4 w-4 text-sigma-blue-100/50 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by neighborhood, road, or locality (e.g., Mansarovar, Vaishali Nagar, Kalwar Road)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-white placeholder-sigma-blue-100/40 focus:outline-none focus:ring-2 focus:ring-sigma-amber-500 focus:bg-white/10 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
