import React from 'react';
import { Project } from '@/types/project';

interface ProjectHighlightsProps {
  project: Project;
}

export function ProjectHighlights({ project }: ProjectHighlightsProps) {
  const highlights = project.detailedHighlights;
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Key Project Highlights</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Built at Scale for Exceptional Living
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Discover the defining architectural metrics and physical benchmarks that set {project.name} apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl overflow-hidden shadow-2xs hover:shadow-xl hover:shadow-sigma-blue-950/5 transition-all duration-500"
            >
              {item.image && (
                <div className="h-48 w-full overflow-hidden bg-sigma-stone-200">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-3xl md:text-4xl font-black font-serif text-sigma-blue-700 tracking-tight">
                    {item.number}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-sigma-graphite-900">{item.label}</h3>
                  <p className="mt-2 text-xs md:text-sm text-sigma-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
