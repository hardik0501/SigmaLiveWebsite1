import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export function VisionMission() {
  const missionPoints = [
    'Deliver transparent property solutions.',
    'Help customers create long-term wealth.',
    'Develop premium residential communities.',
    'Build innovative commercial spaces.',
    'Empower channel partners.',
    'Promote ethical real estate practices.',
    'Deliver outstanding customer experiences.',
    'Lead India’s digital real estate transformation.',
  ];

  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Vision Box */}
          <div className="lg:col-span-5 p-8 bg-sigma-blue-950 text-white rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sigma-amber-400">
              <Compass className="h-4 w-4" />
              Our Vision
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white leading-tight">
              To Become India’s Most Trusted Real Estate Company
            </h2>
            <p className="text-sm text-sigma-stone-300 leading-relaxed pt-2">
              "To become India’s most trusted, technology-driven and customer-centric real estate company by creating sustainable developments, intelligent investment opportunities and lifelong customer relationships."
            </p>
          </div>

          {/* Mission Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="eyebrow text-sigma-blue-600">Our Purpose</span>
              <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
                Our Mission
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {missionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
                  <CheckCircle2 className="h-4 w-4 text-sigma-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-sigma-graphite-900 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
