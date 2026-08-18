import React, { useState } from 'react';
import { Maximize2, FileText, Download } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectFloorPlansProps {
  project: Project;
  onBookSiteVisit: () => void;
}

export function ProjectFloorPlans({ project, onBookSiteVisit }: ProjectFloorPlansProps) {
  const plans = project.floorPlanAssets;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow text-sigma-blue-600">Architectural Planning</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Floor Plans & Layouts
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Engineered room dimensions and structural layouts designed for maximum space efficiency.
          </p>
        </div>

        {plans && plans.length > 0 ? (
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {plans.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedIndex === idx
                      ? 'bg-sigma-blue-700 text-white shadow-md'
                      : 'bg-white text-sigma-graphite-800 hover:bg-sigma-stone-200/60'
                  }`}
                >
                  {p.type} ({p.area})
                </button>
              ))}
            </div>

            {/* Active Floor Plan Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-sigma-stone-200 shadow-xs flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 h-80 bg-sigma-stone-100 rounded-2xl overflow-hidden relative border border-sigma-stone-200/60">
                <img
                  src={plans[selectedIndex].image}
                  alt={plans[selectedIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <span className="eyebrow text-sigma-amber-600">{plans[selectedIndex].type} Layout</span>
                <h3 className="text-2xl font-bold font-serif text-sigma-graphite-900">
                  {plans[selectedIndex].title}
                </h3>
                <p className="text-sm font-semibold text-sigma-blue-700">
                  Total Built-up Area: {plans[selectedIndex].area}
                </p>
                <p className="text-xs text-sigma-stone-500 leading-relaxed">
                  Vastu-compliant entry, spacious balcony access, and cross-ventilation designed to optimize natural sunlight.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={onBookSiteVisit}
                    className="px-5 py-2.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    Request Full CAD Floor Plan PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Fallback when floor plan images are unsupplied */
          <div className="p-8 md:p-12 bg-white rounded-3xl border border-sigma-stone-200 text-center space-y-4 max-w-xl mx-auto">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-sigma-stone-100 text-sigma-blue-600 flex items-center justify-center">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">
              Floor Plans Available on Request
            </h3>
            <p className="text-xs text-sigma-stone-500 max-w-md mx-auto leading-relaxed">
              Official architectural CAD layouts, room dimensions, and structural blueprints for {project.name} are available through our sales office.
            </p>
            <button
              onClick={onBookSiteVisit}
              className="px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              Request Floor Plan PDF Sheet
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
