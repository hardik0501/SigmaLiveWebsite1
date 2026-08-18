import React from 'react';
import { MapPin, Building2, Layers, Maximize2, IndianRupee, Trees } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectQuickFactsProps {
  project: Project;
}

export function ProjectQuickFacts({ project }: ProjectQuickFactsProps) {
  const facts = [
    {
      label: 'LOCATION',
      value: project.locality,
      icon: MapPin,
      show: Boolean(project.locality),
    },
    {
      label: 'PROPERTY TYPE',
      value: project.propertyType,
      icon: Building2,
      show: Boolean(project.propertyType),
    },
    {
      label: 'CONFIGURATIONS',
      value: project.configurations.join(', '),
      icon: Layers,
      show: project.configurations.length > 0,
    },
    {
      label: 'AREA RANGE',
      value: project.areaLabel,
      icon: Maximize2,
      show: Boolean(project.areaLabel),
    },
    {
      label: 'LAND PARCEL',
      value: project.landParcel,
      icon: Trees,
      show: Boolean(project.landParcel),
    },
    {
      label: 'STARTING PRICE',
      value: project.priceLabel,
      icon: IndianRupee,
      show: Boolean(project.priceLabel),
      highlight: true,
    },
  ].filter((f) => f.show);

  return (
    <div className="relative z-20 -mt-8 container-content">
      <div className="bg-white rounded-2xl border border-sigma-stone-200 shadow-xl shadow-sigma-blue-950/5 p-4 md:p-6">
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(facts.length, 6)} gap-4 divide-y md:divide-y-0 md:divide-x divide-sigma-stone-200/80`}>
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className={`pt-3 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
                  {fact.label}
                </span>
                <div className={`mt-1 text-sm md:text-base font-bold flex items-center gap-1.5 ${
                  fact.highlight ? 'text-sigma-blue-700' : 'text-sigma-graphite-900'
                }`}>
                  <Icon className="h-4 w-4 text-sigma-blue-600 shrink-0" />
                  <span className="truncate">{fact.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
