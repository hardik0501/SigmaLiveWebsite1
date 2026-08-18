import React from 'react';
import { Project } from '@/types/project';

interface ProjectOverviewSectionProps {
  project: Project;
}

export function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
  const overview = project.overview || {
    title: `A Place Designed Around Everyday Living`,
    description: project.shortDescription + ' ' + project.usp,
  };

  return (
    <section className="py-16 md:py-24 bg-sigma-ivory-50 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="eyebrow text-sigma-blue-600">The Project</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-tight">
              {overview.title}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sigma-graphite-800 text-base md:text-lg leading-relaxed font-sans">
            <p className="font-medium text-sigma-graphite-900">
              {overview.description}
            </p>

            {project.visualUsps && project.visualUsps.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {project.visualUsps.map((usp, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
                    {usp.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-amber-600 bg-sigma-amber-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                        {usp.tag}
                      </span>
                    )}
                    <h4 className="text-base font-bold font-serif text-sigma-graphite-900">{usp.title}</h4>
                    <p className="mt-1 text-xs text-sigma-stone-600 leading-relaxed">{usp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
