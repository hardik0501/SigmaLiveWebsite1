import React, { useState } from 'react';
import { Layers, BedDouble, Bath, Maximize2, IndianRupee, Check } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectConfigurationsProps {
  project: Project;
  onBookSiteVisit: () => void;
}

export function ProjectConfigurations({ project, onBookSiteVisit }: ProjectConfigurationsProps) {
  const configs = project.detailedConfigurations;
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!configs || configs.length === 0) return null;

  const selected = configs[selectedIndex];

  return (
    <section id="configurations" className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow text-sigma-blue-600">Available Residences</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Choose Your Home
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Explore meticulously planned spatial layouts tailored to your family size and lifestyle preferences.
          </p>
        </div>

        {/* Configuration Tabs / Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {configs.map((cfg, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`p-5 rounded-2xl text-left border transition-all ${
                selectedIndex === idx
                  ? 'bg-white border-sigma-blue-600 shadow-md ring-2 ring-sigma-blue-500/20'
                  : 'bg-white/70 hover:bg-white border-sigma-stone-200 text-sigma-graphite-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sigma-blue-700">
                  {cfg.type}
                </span>
                {selectedIndex === idx && (
                  <span className="h-5 w-5 rounded-full bg-sigma-blue-700 text-white flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </div>
              <div className="mt-3 text-xl font-bold font-serif text-sigma-graphite-900">{cfg.price}</div>
              <div className="mt-1 text-xs font-semibold text-sigma-stone-500 flex items-center gap-1">
                <Maximize2 className="h-3.5 w-3.5 text-sigma-blue-600" />
                {cfg.area}
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Active Configuration Card */}
        <div className="bg-white rounded-3xl border border-sigma-stone-200 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="eyebrow text-sigma-amber-600">Selected Layout</span>
                <h3 className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1">
                  {selected.type}
                </h3>
                <p className="text-sm text-sigma-stone-500 mt-1">
                  Optimal ventilation and efficient spatial utilization for comfortable daily living.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">Area</span>
                  <span className="text-sm font-bold text-sigma-graphite-900 flex items-center gap-1 mt-0.5">
                    <Maximize2 className="h-3.5 w-3.5 text-sigma-blue-600" />
                    {selected.area}
                  </span>
                </div>
                {selected.bedrooms && (
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">Bedrooms</span>
                    <span className="text-sm font-bold text-sigma-graphite-900 flex items-center gap-1 mt-0.5">
                      <BedDouble className="h-3.5 w-3.5 text-sigma-blue-600" />
                      {selected.bedrooms} Beds
                    </span>
                  </div>
                )}
                {selected.bathrooms && (
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">Bathrooms</span>
                    <span className="text-sm font-bold text-sigma-graphite-900 flex items-center gap-1 mt-0.5">
                      <Bath className="h-3.5 w-3.5 text-sigma-blue-600" />
                      {selected.bathrooms} Baths
                    </span>
                  </div>
                )}
                {selected.balconies && (
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">Balconies</span>
                    <span className="text-sm font-bold text-sigma-graphite-900 flex items-center gap-1 mt-0.5">
                      <Layers className="h-3.5 w-3.5 text-sigma-blue-600" />
                      {selected.balconies} Balconies
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400">Indicative Price</span>
                  <span className="text-2xl font-bold text-sigma-graphite-900">{selected.price}</span>
                </div>

                <button
                  onClick={onBookSiteVisit}
                  className="px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                >
                  Schedule Visit for {selected.type}
                </button>
              </div>
            </div>

            <div className="md:col-span-5 bg-sigma-stone-100 rounded-2xl p-6 border border-sigma-stone-200/80">
              <h4 className="text-sm font-bold uppercase tracking-wider text-sigma-graphite-900 mb-4">
                Configuration Comparison
              </h4>
              <div className="space-y-3">
                {configs.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer text-xs font-semibold transition-all ${
                      selectedIndex === i
                        ? 'bg-white border border-sigma-blue-300 text-sigma-blue-800 shadow-xs'
                        : 'bg-white/60 text-sigma-stone-600 hover:bg-white'
                    }`}
                  >
                    <span>{c.type}</span>
                    <span>{c.area}</span>
                    <span className="font-bold text-sigma-graphite-900">{c.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
