import { ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { propertyTypes } from '@/data/propertyTypes';

export function PropertyTypes() {
  return (
    <section id="property-types" className="py-section md:py-30 bg-sigma-stone-100">
      <div className="container-content">
        <SectionHeader
          eyebrow="Browse by Category"
          title="Explore By Property Type"
          className="mb-14"
        />

        <Stagger className="flex gap-4 overflow-x-auto no-scrollbar pb-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 md:overflow-visible" stagger={0.08}>
          {propertyTypes.map((type) => (
            <StaggerItem key={type.id} className="flex-shrink-0 w-[280px] md:w-auto">
              <a
                href="#featured-projects"
                className="group relative block overflow-hidden rounded-2xl bg-sigma-graphite-900 h-[340px]"
              >
                <img
                  src={type.image}
                  alt={type.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-65 transition-all duration-700 ease-sigma group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white">{type.name}</h3>
                  <p className="mt-1.5 text-xs text-sigma-ivory-200/60 leading-relaxed">
                    {type.description}
                  </p>
                  <ArrowRight className="mt-4 h-5 w-5 text-sigma-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
