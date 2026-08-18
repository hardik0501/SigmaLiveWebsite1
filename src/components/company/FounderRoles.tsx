import React from 'react';
import { Landmark, Award } from 'lucide-react';
import { founderData } from '@/data/companyData';

export function FounderRoles() {
  const roles = founderData.responsibilities;

  return (
    <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Public Service & Governance</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Organizational Responsibilities
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Factual record of public, cultural, and community leadership positions held by Shri Jitendra Kumar Sharma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs flex items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-amber-600">
                  {role.title}
                </span>
                <h3 className="text-sm font-bold text-sigma-graphite-900 mt-0.5">{role.organization}</h3>
              </div>
              <div className="p-2 rounded-xl bg-sigma-stone-100 text-sigma-blue-700 shrink-0">
                <Landmark className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
