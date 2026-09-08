import { ArrowRight, Building, Home, LandPlot, Trees, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { propertyTypes } from '@/data/propertyTypes';

const categoryIcons: Record<string, typeof Building> = {
  apartments: Building,
  villas: Home,
  'plots-land': LandPlot,
  farmhouses: Trees,
  commercial: Briefcase,
};

const pastelTints = [
  'from-blue-50/70 to-white',
  'from-amber-50/70 to-white',
  'from-emerald-50/70 to-white',
  'from-purple-50/70 to-white',
  'from-rose-50/70 to-white',
];

export function PropertyTypes() {
  return (
    <section id="property-types" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-amber-200/40">
      <div className="container-content">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-14">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-700 block mb-2">
            ASSET PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold font-serif text-slate-900 leading-tight">
            One City. Different Ways to Own Real Estate.
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
            Not everyone is looking for the same property. Some want a family apartment. Some dream of a private villa. Others want land, a farmhouse or a commercial space with investment potential.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-blue-700 font-bold">
            Whatever your goal, explore a property category that fits your next move.
          </p>
        </Reveal>

        {/* 5 Property Category Cards */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" stagger={0.08}>
          {propertyTypes.map((type, idx) => {
            const Icon = categoryIcons[type.id] || Building;
            const indexStr = String(idx + 1).padStart(2, '0');
            const tint = pastelTints[idx % pastelTints.length];

            return (
              <StaggerItem
                key={type.id}
                className={idx === 0 || idx === 1 ? 'lg:col-span-1' : ''}
              >
                <Link
                  to={`/properties?type=${type.id}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 h-[440px]"
                >
                  {/* Top Image Preview */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={type.image}
                      alt={type.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                    {/* Top Bar with Number & Icon */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-white/95 text-blue-700 flex items-center justify-center shadow-md">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-800 bg-white/90 px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                        {indexStr}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content Card */}
                  <div className={`p-6 flex flex-col flex-1 justify-between bg-gradient-to-b ${tint}`}>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-700 block mb-1">
                        {type.name}
                      </span>
                      <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {type.heading}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {type.description}
                      </p>
                    </div>

                    <div>
                      <div className="h-px bg-slate-200/70 my-3.5" />

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-700 group-hover:text-blue-900 transition-colors">
                          {type.cta}
                        </span>
                        <div className="h-8 w-8 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
