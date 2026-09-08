import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Compass, Building, Globe, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const jaipurLocations = [
  {
    id: 'mansarovar-extension',
    name: 'Mansarovar Extension',
    slug: 'mansarovar-extension-jaipur',
    tag: 'Expanding Corridor',
    description: 'Expanding corridor with modern residential communities, Keshar Circle connectivity, and exceptional commercial infrastructure.',
    image: 'https://images.pexels.com/photos/9432498/pexels-photo-9432498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '8+ Projects',
  },
  {
    id: 'vaishali-nagar',
    name: 'Vaishali Nagar',
    slug: 'vaishali-nagar-jaipur',
    tag: 'Premium Lifestyle',
    description: 'Jaipur’s premier luxury residential neighborhood with high-street shopping, upscale dining, and top educational institutions.',
    image: 'https://images.pexels.com/photos/17833253/pexels-photo-17833253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '5+ Projects',
  },
  {
    id: 'south-west-jaipur',
    name: 'South-West Jaipur',
    slug: 'mansarovar-jaipur',
    tag: 'Strategic Belt',
    description: 'Fast-developing residential belt with robust connectivity to Ring Road, Ajmer Road, and Jaipur International Airport.',
    image: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '12+ Projects',
  },
  {
    id: 'mansarovar',
    name: 'Mansarovar',
    slug: 'mansarovar-jaipur',
    tag: 'Established Hub',
    description: 'One of Asia’s largest planned residential hubs with metro connectivity, City Park, and comprehensive civic infrastructure.',
    image: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '10+ Projects',
  },
  {
    id: 'kalwar-road',
    name: 'Kalwar Road',
    slug: 'kalwar-road-jaipur',
    tag: 'Growth Corridor',
    description: 'Emerging growth corridor with great affordability, rapid appreciation, and continuous township developments.',
    image: 'https://images.pexels.com/photos/15480429/pexels-photo-15480429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '6+ Projects',
  },
  {
    id: 'gokulpura',
    name: 'Gokulpura',
    slug: 'gokulpura-jaipur',
    tag: 'Residential Hub',
    description: 'Peaceful residential cluster with smooth road connectivity to central Jaipur markets and nearby business centers.',
    image: 'https://images.pexels.com/photos/8171870/pexels-photo-8171870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '4+ Projects',
  },
  {
    id: 'jhotwara',
    name: 'Jhotwara',
    slug: 'jhotwara-jaipur',
    tag: 'North-West Jaipur',
    description: 'Established residential & commercial belt with growing demand for modern 2 & 3 BHK family apartments.',
    image: 'https://images.pexels.com/photos/16010068/pexels-photo-16010068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '5+ Projects',
  },
  {
    id: 'rampura-road',
    name: 'Rampura Road',
    slug: 'rampura-road-jaipur',
    tag: 'High Appreciation',
    description: 'High-appreciation potential corridor attracting new landmark high-rise projects and investment town planning.',
    image: 'https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '4+ Projects',
  },
  {
    id: 'jagatpura',
    name: 'Jagatpura',
    slug: 'jagatpura-jaipur',
    tag: 'Institutional & IT',
    description: 'Fast-developing residential zone near Jaipur Airport, Bombay Hospital, railway junction, and education hubs.',
    image: 'https://images.pexels.com/photos/11861957/pexels-photo-11861957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '7+ Projects',
  },
  {
    id: 'narayan-vihar',
    name: 'Narayan Vihar',
    slug: 'narayan-vihar-jaipur',
    tag: 'Plotted & Villas',
    description: 'Prime residential enclave known for luxury independent duplex villas, peaceful lanes, and seamless Gopalpura bypass access.',
    image: 'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '5+ Projects',
  },
  {
    id: 'acharya-vinoba-bhave-nagar',
    name: 'Acharya Vinoba Bhave Nagar',
    slug: 'acharya-vinoba-bhave-nagar-jaipur',
    tag: 'Planned Sector',
    description: 'Planned residential sector with wide tree-lined avenues, municipal water connections, and close proximity to Mansarovar.',
    image: 'https://images.pexels.com/photos/38113341/pexels-photo-38113341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    propertiesCount: '3+ Projects',
  },
];

export function ExploreLocations() {
  const [activeId, setActiveId] = useState(jaipurLocations[0].id);
  const active = jaipurLocations.find((l) => l.id === activeId) || jaipurLocations[0];

  return (
    <section id="locations" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-content">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
            EXPLORE BY LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold font-serif text-slate-900 leading-tight">
            Find Your Place in Jaipur.
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
            Jaipur is growing, and so are the opportunities to own a home here. From established neighborhoods to emerging growth corridors, choose a location that matches the way you want to live and invest.
          </p>
        </Reveal>

        {/* Interactive Location Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location Selector Chips & List */}
          <div className="lg:col-span-5 flex flex-col gap-2 max-h-[520px] overflow-y-auto pr-1 no-scrollbar">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Explore properties across:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {jaipurLocations.map((loc) => {
                const isActive = activeId === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveId(loc.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-blue-50/90 border-blue-300 text-blue-950 shadow-sm font-bold translate-x-1'
                        : 'bg-[#F8FAFC] border-slate-200 text-slate-700 hover:bg-white hover:border-blue-200'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <MapPin className={`h-4 w-4 shrink-0 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                      <span className="text-xs sm:text-sm truncate">{loc.name}</span>
                    </span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                      isActive ? 'bg-blue-200/70 text-blue-900' : 'bg-slate-200/60 text-slate-600'
                    }`}>
                      {loc.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Location Card Preview - Clear Crisp Background Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 min-h-[520px] shadow-2xl border border-slate-200 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-full flex flex-col justify-between p-6 sm:p-8 min-h-[520px]"
                >
                  {/* Photo with Full Clarity */}
                  <img
                    src={active.image}
                    alt={active.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/95 text-slate-900 border border-white shadow-md backdrop-blur-md">
                      {active.tag}
                    </span>
                    <span className="text-xs font-bold text-amber-900 bg-amber-100/95 px-3.5 py-1.5 rounded-full border border-amber-300 shadow-md backdrop-blur-md">
                      {active.propertiesCount}
                    </span>
                  </div>

                  {/* Bottom Frosted Glass Card for Sharp Readability */}
                  <div className="relative z-10 pt-16">
                    <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-2xl">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 block mb-1">
                        JAIPUR NEIGHBORHOOD GUIDE
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                        {active.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl font-normal">
                        {active.description}
                      </p>

                      <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          to={`/locations/${active.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl px-5 py-2.5 transition-colors duration-300 shadow-md shadow-blue-700/20 group"
                        >
                          <span>Explore {active.name} Guide</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                          to={`/properties?search=${encodeURIComponent(active.name)}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-blue-700 bg-slate-100 hover:bg-slate-200 rounded-xl px-4 py-2.5 transition-colors duration-300"
                        >
                          <span>View Properties</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Beyond Jaipur Callout Banner */}
        <Reveal delay={0.2} className="mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-[#EEF5FF] via-[#FFFDF5] to-[#F0FDF4] border border-blue-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 block mb-1">
                  EXPANDING HORIZONS
                </span>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed max-w-2xl font-sans">
                  Looking beyond Jaipur? Sigma Homes also has a growing presence in <strong className="text-blue-900 font-bold">Noida, Gurgaon, Dubai and Dholera</strong>, helping buyers and investors explore opportunities across multiple markets.
                </p>
              </div>
            </div>

            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl px-5 py-3 transition-all shrink-0 shadow-xs group"
            >
              <span>Explore All Markets</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-blue-700" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
