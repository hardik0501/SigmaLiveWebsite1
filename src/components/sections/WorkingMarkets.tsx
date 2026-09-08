import { ArrowRight, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { markets } from '@/data/site';

const marketImages: Record<string, string> = {
  jaipur: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  noida: '/images/locations/noida.jpg',
  gurgaon: '/images/locations/gurgaon.jpg',
  dubai: '/images/locations/dubai.jpg',
  dholera: '/images/locations/dholera.jpg',
};

const slugMap: Record<string, string> = {
  jaipur: '/locations',
  noida: '/locations/noida-ncr',
  gurgaon: '/locations/gurgaon-ncr',
  dubai: '/locations/dubai-international',
  dholera: '/locations/dholera-smart-city',
};

const marketBadgeStyles: Record<string, string> = {
  'PRIMARY MARKET': 'bg-amber-100 text-amber-900 border-amber-300',
  'GROWING MARKET': 'bg-blue-100 text-blue-900 border-blue-300',
  'INTERNATIONAL MARKET': 'bg-purple-100 text-purple-900 border-purple-300',
  'EMERGING MARKET': 'bg-emerald-100 text-emerald-900 border-emerald-300',
};

export function WorkingMarkets() {
  return (
    <section id="markets" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-amber-200/40">
      <div className="container-content">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <Reveal className="max-w-3xl">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
              GROWING ACROSS MARKETS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold font-serif text-slate-900 leading-tight">
              From Jaipur to Emerging Real Estate Markets.
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
              Jaipur remains at the heart of our journey, but opportunities don't stop at one city. Sigma is building its presence across locations where infrastructure, economic activity and long-term development are creating new possibilities for homeowners and investors.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="shrink-0">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-700/20 group"
            >
              <span>Explore Our Markets</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* 5 Markets Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5" stagger={0.08}>
          {markets.map((market) => (
            <StaggerItem key={market.id}>
              <Link
                to={slugMap[market.id] || '/locations'}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 h-[380px]"
              >
                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={marketImages[market.id] || marketImages.jaipur}
                    alt={market.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border shadow-xs ${
                      marketBadgeStyles[market.type] || 'bg-slate-100 text-slate-800 border-slate-300'
                    }`}>
                      {market.type}
                    </span>
                  </div>
                </div>

                {/* Bottom Content Card */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-gradient-to-b from-white to-[#F9FBFD]">
                  <div>
                    <div className="flex items-center gap-1.5 text-blue-700 mb-1">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-blue-700 transition-colors">
                        {market.name}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {market.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                    <span>Explore Market</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
