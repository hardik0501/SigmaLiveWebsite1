import React from 'react';
import { IndianRupee, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectPricingSectionProps {
  project: Project;
  onRequestPrice: () => void;
}

export function ProjectPricingSection({ project, onRequestPrice }: ProjectPricingSectionProps) {
  const pricing = project.detailedPricing;
  if (!pricing) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Commercial Clarity</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Pricing & Cost Structure
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Transparent pricing guidelines backed by official cost sheets and no hidden surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Price Card */}
          <div className="lg:col-span-6 bg-sigma-blue-950 text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <IndianRupee className="h-48 w-48 text-white" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sigma-amber-400">
                Starting Price Point
              </span>
              <div className="text-3xl md:text-4xl font-bold font-serif text-white mt-1">
                {pricing.startingPrice}
              </div>
              {pricing.bsp && (
                <div className="mt-2 inline-block px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-sigma-stone-200">
                  Basic Sale Price (BSP): <span className="text-white font-bold">{pricing.bsp}</span>
                </div>
              )}
            </div>

            {pricing.paymentPlan && (
              <div className="p-4 bg-white/10 rounded-2xl border border-white/15">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-300">
                  Payment Plan Options
                </span>
                <p className="text-xs font-medium text-white mt-1 leading-relaxed">
                  {pricing.paymentPlan}
                </p>
              </div>
            )}

            <button
              onClick={onRequestPrice}
              className="w-full py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Request Detailed Official Cost Sheet
            </button>
          </div>

          {/* Additional Charges & Disclaimer Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            {pricing.additionalCharges && pricing.additionalCharges.length > 0 && (
              <div className="p-6 bg-sigma-stone-50 rounded-3xl border border-sigma-stone-200/80 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-sigma-graphite-900">
                  Standard Applicable Charges
                </h3>
                <div className="space-y-2.5">
                  {pricing.additionalCharges.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-semibold py-2 border-b border-sigma-stone-200/60 last:border-0">
                      <span className="text-sigma-stone-600 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sigma-blue-600" />
                        {item.label}
                      </span>
                      <span className="text-sigma-graphite-900 font-bold">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prominent Legal Disclaimer */}
            <div className="p-5 bg-sigma-stone-100 border border-sigma-stone-200/80 rounded-2xl flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-sigma-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-sigma-stone-600 font-medium leading-relaxed">
                {pricing.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
