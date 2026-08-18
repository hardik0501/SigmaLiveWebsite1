import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '@/types/project';
import { ArrowRight, Check, X, MapPin, Building2, Layers, Maximize2 } from 'lucide-react';
import { statusLabels } from '@/data/projectsData';

interface ProjectCompareGridProps {
  projects: Project[];
  onRemoveProject: (id: string) => void;
  onEnquire: (project: Project) => void;
}

export function ProjectCompareGrid({ projects, onRemoveProject, onEnquire }: ProjectCompareGridProps) {
  if (projects.length === 0) {
    return (
      <div className="p-12 text-center bg-white border border-sigma-stone-200/80 rounded-3xl space-y-4">
        <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">No Projects Selected for Comparison</h3>
        <p className="text-xs text-sigma-stone-500 max-w-sm mx-auto">
          Explore properties and select 2 to 4 projects to compare their pricing, layout configurations, amenities, and location advantages side by side.
        </p>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
        >
          Explore Properties
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const criteria = [
    { label: 'Project Name', key: 'name' },
    { label: 'Locality & Address', key: 'location' },
    { label: 'Property Category', key: 'propertyType' },
    { label: 'Available BHK Layouts', key: 'configurations' },
    { label: 'Super Built-Up Area Range', key: 'areaLabel' },
    { label: 'Starting Price', key: 'priceLabel' },
    { label: 'Project Status', key: 'status' },
    { label: 'Key Highlights & USPs', key: 'highlights' },
    { label: 'Approval Status', key: 'approvalStatus' },
  ];

  return (
    <div className="overflow-x-auto no-scrollbar bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl">
      <table className="w-full min-w-[700px] text-left border-collapse">
        <thead>
          <tr className="border-b border-sigma-stone-200 bg-sigma-stone-50">
            <th className="p-4 md:p-6 w-1/4 text-xs font-bold uppercase tracking-wider text-sigma-stone-400">
              Comparison Criteria
            </th>
            {projects.map((p) => (
              <th key={p.id} className="p-4 md:p-6 w-1/4 align-top relative">
                <button
                  onClick={() => onRemoveProject(p.id)}
                  className="absolute top-4 right-4 p-1.5 text-sigma-stone-400 hover:text-red-600 rounded-full hover:bg-sigma-stone-100 transition-colors"
                  title="Remove from comparison"
                >
                  <X className="h-4 w-4" />
                </button>

                <img src={p.thumbnail} alt={p.name} className="w-full h-32 object-cover rounded-xl mb-3" />
                <h3 className="text-base font-bold font-serif text-sigma-graphite-900">{p.name}</h3>
                <span className="text-xs font-bold text-sigma-blue-700 block mt-0.5">{p.priceLabel}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-sigma-stone-200/60 text-xs">
          {criteria.map((c) => (
            <tr key={c.key} className="hover:bg-sigma-stone-50/50 transition-colors">
              <td className="p-4 md:p-6 font-bold text-sigma-graphite-900 bg-sigma-stone-50/40">
                {c.label}
              </td>
              {projects.map((p) => {
                let val: any = (p as any)[c.key];
                if (c.key === 'configurations' && Array.isArray(val)) val = val.join(', ');
                if (c.key === 'status') val = statusLabels[p.status] || p.status;
                if (c.key === 'highlights' && Array.isArray(val)) val = val.slice(0, 2).join(' · ');

                return (
                  <td key={p.id} className="p-4 md:p-6 text-sigma-stone-600 font-medium align-top">
                    {val || 'Information on Request'}
                  </td>
                );
              })}
            </tr>
          ))}

          {/* Action Row */}
          <tr className="bg-sigma-stone-50/80">
            <td className="p-4 md:p-6 font-bold text-sigma-graphite-900">Conversion Actions</td>
            {projects.map((p) => (
              <td key={p.id} className="p-4 md:p-6 space-y-2">
                <Link
                  to={`/projects/${p.slug}`}
                  className="w-full py-2 px-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                >
                  View Project
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <button
                  onClick={() => onEnquire(p)}
                  className="w-full py-2 px-3 bg-sigma-stone-200 hover:bg-sigma-stone-300 text-sigma-graphite-900 rounded-xl font-bold text-[11px] transition-colors"
                >
                  Request Cost Sheet
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
