import React from 'react';
import { TrendingUp, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Location } from '@/types/location';

interface LocationInvestmentProps {
  location: Location;
}

export function LocationInvestment({ location }: LocationInvestmentProps) {
  const inv = location.investmentContext;
  if (!inv) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Market Context</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            {inv.title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Evaluating long-term end-use fundamentals and market demand considerations in {location.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-sigma-graphite-800 leading-relaxed font-medium">
              {inv.description}
            </p>

            <div className="space-y-3">
              {inv.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
                  <CheckCircle2 className="h-5 w-5 text-sigma-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-sigma-graphite-900 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 bg-sigma-blue-950 text-white rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sigma-amber-400">
              <TrendingUp className="h-4 w-4" />
              Investment Perspective
            </div>

            <h3 className="text-xl font-bold font-serif text-white">
              Why Buyers Consider {location.name}
            </h3>

            <p className="text-xs text-sigma-stone-300 leading-relaxed">
              Connectivity infrastructure, civic amenities, and institutional employment hubs make {location.name} a high-priority discovery zone for home buyers and real estate investors.
            </p>

            <div className="pt-2 flex items-start gap-2 text-[10px] text-sigma-stone-300 border-t border-white/15">
              <ShieldAlert className="h-4 w-4 text-sigma-amber-400 shrink-0 mt-0.5" />
              <span>{inv.disclaimer}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
