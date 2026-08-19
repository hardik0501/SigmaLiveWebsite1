import { ArrowRight } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { propertyTypes } from '@/data/propertyTypes';

export function PropertyTypes() {
  return (
    <section id="property-types" className="py-section md:py-28 bg-white border-y border-sigma-stone-200/60">
      <div className="container-content">
        <SectionHeader
          eyebrow="Asset Portfolio"
          title="Explore By Property Category"
          supporting="Discover residential, land, and commercial spaces tailored for home seekers & investors."
          className="mb-12"
        />

        <Stagger className="flex gap-4 overflow-x-auto no-scrollbar pb-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 md:overflow-visible" stagger={0.08}>
          {propertyTypes.map((type, idx) => {
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <StaggerItem key={type.id} className="flex-shrink-0 w-[280px] md:w-auto">
                <a
                  href="#featured-projects"
                  className="group relative block overflow-hidden rounded-2xl bg-sigma-graphite-950 h-[380px] border border-white/10 shadow-lg"
                >
                  <img
                    src={type.image}
                    alt={type.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 ease-sigma group-hover:scale-105 group-hover:opacity-65"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/40 to-transparent" />
                  
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <span className="text-xs font-black font-mono tracking-widest text-sigma-amber-400 opacity-90 group-hover:translate-x-1 transition-transform duration-300">
                      {indexStr}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold font-serif text-white group-hover:text-sigma-amber-300 transition-colors">
                        {type.name}
                      </h3>
                      <p className="mt-2 text-xs text-sigma-stone-300 leading-relaxed line-clamp-2">
                        {type.description}
                      </p>
                      
                      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sigma-amber-400 group-hover:text-white transition-colors">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
