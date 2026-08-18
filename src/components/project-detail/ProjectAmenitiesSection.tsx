import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectAmenitiesSectionProps {
  project: Project;
}

export function ProjectAmenitiesSection({ project }: ProjectAmenitiesSectionProps) {
  const groups = project.groupedAmenities;
  if (!groups || groups.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Thoughtful Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Amenities & Facilities
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Categorized amenities engineered for safety, active health, and multi-generational comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {groups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-sigma-stone-200/80 shadow-2xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sigma-blue-700 border-b border-sigma-stone-200/60 pb-3 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-sigma-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-sigma-graphite-900">{item.name}</h4>
                      {item.description && (
                        <p className="text-xs text-sigma-stone-500 mt-0.5">{item.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
