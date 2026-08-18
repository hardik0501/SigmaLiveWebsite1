import React from 'react';
import { Project } from '@/types/project';
import { PropertyCard } from './PropertyCard';

interface PropertyGridProps {
  projects: Project[];
  onQuickView: (project: Project) => void;
  onEnquire: (project: Project) => void;
  viewMode: 'grid' | 'list';
}

export function PropertyGrid({
  projects,
  onQuickView,
  onEnquire,
  viewMode,
}: PropertyGridProps) {
  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {projects.map((project) => (
          <PropertyCard
            key={project.id}
            project={project}
            onQuickView={onQuickView}
            onEnquire={onEnquire}
            viewMode="list"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project) => (
        <PropertyCard
          key={project.id}
          project={project}
          onQuickView={onQuickView}
          onEnquire={onEnquire}
          viewMode="grid"
        />
      ))}
    </div>
  );
}
