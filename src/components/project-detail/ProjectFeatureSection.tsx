import React from 'react';
import { Project } from '@/types/project';

interface ProjectFeatureSectionProps {
  project: Project;
}

export function ProjectFeatureSection({ project }: ProjectFeatureSectionProps) {
  const feat = project.lifestyleFeature;
  if (!feat) return null;

  return (
    <section className="py-20 md:py-28 bg-sigma-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow text-sigma-amber-400">{feat.subtitle}</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              {feat.title}
            </h2>
            <p className="text-sigma-stone-300 text-base md:text-lg leading-relaxed">
              {feat.description}
            </p>

            {feat.stats && feat.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
                {feat.stats.map((st, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-extrabold font-serif text-sigma-amber-400">
                      {st.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-sigma-stone-300 mt-1">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src={feat.image}
                alt={feat.title}
                className="w-full h-[400px] md:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
