import React from 'react';
import { Project } from '@/types/project';
import { PropertyCard } from './PropertyCard';

interface SelectedProjectsProps {
  projects: Project[];
  onQuickView: (project: Project) => void;
  onEnquire: (project: Project) => void;
}

export function SelectedProjects({ projects, onQuickView, onEnquire }: SelectedProjectsProps) {
  const featured = projects.filter((p) => p.featured);
  if (featured.length === 0) return null;

  const primary = featured[0];
  const secondary = featured.slice(1, 3);

  return (
    <section className="py-10 bg-sigma-stone-100/60 rounded-3xl p-6 md:p-8 mb-12 border border-sigma-stone-200/60">
      <div className="max-w-2xl mb-8">
        <span className="eyebrow text-sigma-blue-600">Handpicked Portfolio</span>
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
          Selected Sigma Projects
        </h2>
        <p className="mt-2 text-sm text-sigma-stone-600 font-medium">
          Explore a curated selection of premier residential and investment opportunities across our highest-demand corridors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PropertyCard
            project={primary}
            onQuickView={onQuickView}
            onEnquire={onEnquire}
            viewMode="list"
          />
        </div>
        <div className="space-y-6">
          {secondary.map((proj) => (
            <PropertyCard
              key={proj.id}
              project={proj}
              onQuickView={onQuickView}
              onEnquire={onEnquire}
              viewMode="grid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
