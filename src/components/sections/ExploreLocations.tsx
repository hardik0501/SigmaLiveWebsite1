import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { locations } from '@/data/locations';

export function ExploreLocations() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((l) => l.id === activeId)!;

  return (
    <section id="locations" className="py-section md:py-30 bg-sigma-ivory-50">
      <div className="container-content">
        <SectionHeader
          eyebrow="Explore by Location"
          title="Find Your Place in Jaipur"
          supporting="Explore properties through the neighborhoods and growth corridors that matter."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Location list */}
          <div className="lg:col-span-5">
            <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              {locations.map((loc, i) => (
                <Reveal key={loc.id} delay={i * 0.05}>
                  <button
                    onClick={() => setActiveId(loc.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 ease-sigma flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal ${
                      activeId === loc.id
                        ? 'bg-sigma-blue-700 border-sigma-blue-700 text-white'
                        : 'bg-white border-sigma-stone-200 text-sigma-graphite-700 hover:border-sigma-blue-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <MapPin className={`h-4 w-4 ${activeId === loc.id ? 'text-sigma-amber-400' : 'text-sigma-blue-500'}`} />
                      <span className="font-semibold text-sm">{loc.name}</span>
                    </span>
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${activeId === loc.id ? 'translate-x-1 text-sigma-amber-400' : 'text-sigma-stone-400'}`} />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Active location detail */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl bg-sigma-graphite-900 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full"
                >
                  <img
                    src={active.image}
                    alt={active.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/30 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10 min-h-[400px]">
                    <span className="text-eyebrow text-sigma-amber-400">{active.area}</span>
                    <h3 className="mt-3 text-3xl font-bold text-white">{active.name}</h3>
                    <p className="mt-3 max-w-md text-sm text-sigma-ivory-200/70 leading-relaxed">
                      {active.description}
                    </p>
                    <Link
                      to={`/locations/${active.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 rounded-lg px-5 py-2.5 hover:bg-white/10 transition-colors duration-300 w-fit"
                    >
                      Explore {active.name} Guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
