import React from 'react';
import { Calendar, Award, Building2, Globe } from 'lucide-react';

export function CompanyTimeline() {
  const milestones = [
    {
      year: '2001',
      title: 'Foundation of Sigma',
      description: 'Founded by Shri Jitendra Kumar Sharma with the foundational ethos "Trust First. Business Later."',
      icon: Calendar,
    },
    {
      year: '2010',
      title: 'Master Township Expansion',
      description: 'Pioneered residential colony developments and township expansion across South-West Jaipur.',
      icon: Building2,
    },
    {
      year: '2018',
      title: 'High-Rise & Commercial Launch',
      description: 'Expanded into high-rise luxury sky residences, commercial retail hubs, and digital customer advisory.',
      icon: Award,
    },
    {
      year: 'Today',
      title: '25+ Years of Trust & Expansion',
      description: 'Over 12,000+ happy families, 100+ completed projects, and expanding footprints across Jaipur and NCR.',
      icon: Globe,
    },
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            25+ Year Journey of Trust
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            For more than two decades, Sigma Homes has remained committed to building dreams, creating wealth, and securing families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl space-y-4 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-sigma-blue-700 text-white font-extrabold text-xs rounded-full shadow-2xs">
                    {m.year}
                  </span>
                  <m.icon className="h-5 w-5 text-sigma-blue-600" />
                </div>
                <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">{m.title}</h3>
                <p className="mt-2 text-xs text-sigma-stone-600 leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
