import React from 'react';
import { ServiceProcessStep } from '@/types/company';

interface ServiceProcessProps {
  steps: ServiceProcessStep[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Methodology</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            How We Work
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            A transparent step-by-step process designed to ensure clarity, compliance, and optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.stepNumber} className="p-6 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl space-y-3 relative">
              <span className="w-8 h-8 rounded-xl bg-sigma-blue-700 text-white font-extrabold text-xs flex items-center justify-center">
                0{step.stepNumber}
              </span>
              <h3 className="text-base font-bold font-serif text-sigma-graphite-900">{step.title}</h3>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
