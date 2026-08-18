import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Network } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { businessDivisions } from '@/data/businessDivisions';

export function BusinessEcosystem() {
  const [active, setActive] = useState(businessDivisions[0].id);
  const activeDivision = businessDivisions.find((d) => d.id === active)!;

  return (
    <section id="ecosystem" className="py-section md:py-30 bg-sigma-ivory-50 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container-content relative z-10">
        <SectionHeader
          eyebrow="Sigma Ecosystem"
          title="More Than Real Estate."
          supporting="An integrated ecosystem built around property, development, investment and long-term relationships."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Division selector */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              {businessDivisions.map((div, i) => (
                <Reveal key={div.id} delay={i * 0.08}>
                  <button
                    onClick={() => setActive(div.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ease-sigma ${
                      active === div.id
                        ? 'bg-sigma-blue-700 border-sigma-blue-700 text-white shadow-lg shadow-sigma-blue-950/10'
                        : 'bg-white border-sigma-stone-200 text-sigma-graphite-700 hover:border-sigma-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-bold text-sm">{div.name}</span>
                      <ArrowRight className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${active === div.id ? 'translate-x-1 text-sigma-amber-400' : 'text-sigma-stone-400'}`} />
                    </div>
                    <p className={`mt-1 text-xs ${active === div.id ? 'text-sigma-ivory-200/70' : 'text-sigma-stone-500'}`}>
                      {div.tagline}
                    </p>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Active division detail */}
          <div className="lg:col-span-8">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full p-8 md:p-10 rounded-2xl bg-white border border-sigma-stone-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sigma-blue-50">
                  <Network className="h-6 w-6 text-sigma-blue-700" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-sigma-graphite-900">{activeDivision.name}</h3>
                  <p className="text-sm text-sigma-stone-500">{activeDivision.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {activeDivision.services.map((service, i) => (
                  <div key={service} className="flex items-center gap-3 py-2 border-b border-sigma-stone-200/50">
                    <span className="text-sm font-bold text-sigma-blue-400 tabular-nums w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-sigma-graphite-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
