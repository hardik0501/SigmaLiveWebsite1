import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building, CheckCircle2, Home, TrendingUp, Briefcase, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { businessDivisions } from '@/data/businessDivisions';

const divisionIcons: Record<string, typeof Building> = {
  'builders-developers': Building,
  'sigma-homes': Home,
  'sigma-investments': TrendingUp,
  'sigma-commercial': Briefcase,
  'sigma-nri-services': Globe,
};

const divisionLinks: Record<string, string> = {
  'builders-developers': '/services/builders-developers',
  'sigma-homes': '/properties',
  'sigma-investments': '/investment',
  'sigma-commercial': '/services/commercial-property',
  'sigma-nri-services': '/nri-services',
};

export function BusinessEcosystem() {
  const [activeId, setActiveId] = useState(businessDivisions[0].id);
  const activeDivision = businessDivisions.find((d) => d.id === activeId) || businessDivisions[0];
  const ActiveIcon = divisionIcons[activeDivision.id] || Building;

  return (
    <section id="ecosystem" className="py-20 md:py-30 bg-[#FAF7F2] border-b border-amber-200/40 relative overflow-hidden">
      <div className="container-content relative z-10">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-14">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
            SIGMA ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold font-serif text-slate-900 leading-tight">
            More Than a Real Estate Company.
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
            Real estate doesn't end with buying a property. It is about development, investment, advisory, business spaces and creating relationships that last.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-blue-700 font-bold">
            The Sigma ecosystem brings these capabilities together under one roof.
          </p>
        </Reveal>

        {/* Interactive Ecosystem Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Division Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {businessDivisions.map((div) => {
              const Icon = divisionIcons[div.id] || Building;
              const isActive = activeId === div.id;

              return (
                <button
                  key={div.id}
                  onClick={() => setActiveId(div.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isActive
                      ? 'bg-blue-700 border-blue-700 text-white shadow-lg shadow-blue-700/20 translate-x-1'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white text-blue-700' : 'bg-blue-50 text-blue-700'
                    }`}>
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <h4 className={`text-xs sm:text-sm font-bold tracking-wide ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {div.name}
                      </h4>
                      <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                        {div.tagline}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? 'text-amber-300 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Division Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <ActiveIcon className="h-44 w-44 text-blue-900" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDivision.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
                      Business Division
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                    {activeDivision.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                    {activeDivision.tagline}
                  </p>

                  <div className="h-px bg-slate-200/80 my-6" />

                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-4">
                    Key Offerings & Capabilities:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activeDivision.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      to={divisionLinks[activeDivision.id] || '/services'}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-md shadow-blue-700/20 group"
                    >
                      <span>Learn More About This Division</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to="/consultation"
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      Speak with a Specialist →
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
