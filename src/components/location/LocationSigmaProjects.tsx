import React from 'react';
import { Project } from '@/types/project';
import { PropertyCard } from '@/components/discovery/PropertyCard';
import { Location } from '@/types/location';

interface LocationSigmaProjectsProps {
  location: Location;
  projects: Project[];
  onQuickView: (project: Project) => void;
  onEnquire: (project: Project) => void;
}

export function LocationSigmaProjects({
  location,
  projects,
  onQuickView,
  onEnquire,
}: LocationSigmaProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section id="sigma-projects" className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Sigma Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Sigma Projects in {location.name}
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Explore verified residential and investment projects developed by Sigma Group in {location.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <PropertyCard
              key={project.id}
              project={project}
              onQuickView={onQuickView}
              onEnquire={onEnquire}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
