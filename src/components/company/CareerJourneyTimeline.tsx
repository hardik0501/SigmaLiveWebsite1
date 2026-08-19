import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { careerStagesData } from '@/data/companyData';

export function CareerJourneyTimeline() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Career Architecture</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Your Journey With Sigma
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            A structured 5-stage career progression roadmap designed to cultivate expertise, sales leadership, and executive ownership.
          </p>
        </div>

        {/* Horizontal Progress Timeline Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pb-6">
          {careerStagesData.map((stage, idx) => (
            <button
              key={stage.stageCode}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                activeStage === idx
                  ? 'bg-sigma-graphite-950 border-sigma-graphite-950 text-white shadow-lg scale-102'
                  : 'bg-sigma-stone-50 border-sigma-stone-200 text-sigma-graphite-800 hover:bg-sigma-stone-100'
              }`}
            >
              <span className={`text-[10px] font-mono font-black tracking-widest block ${activeStage === idx ? 'text-sigma-amber-400' : 'text-sigma-stone-400'}`}>
                STAGE 0{stage.stageNumber}
              </span>
              <h3 className="text-xs md:text-sm font-bold font-serif mt-1 truncate">{stage.title}</h3>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Panel */}
        {careerStagesData[activeStage] && (
          <div className="mt-6 p-6 md:p-10 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xs">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3.5 py-1 bg-sigma-amber-500/10 text-sigma-amber-800 border border-sigma-amber-400/40 text-xs font-bold rounded-full inline-block">
                Stage 0{careerStagesData[activeStage].stageNumber} — {careerStagesData[activeStage].title}
              </span>
              <h3 className="text-2xl font-bold font-serif text-sigma-graphite-900 leading-snug">
                {careerStagesData[activeStage].tagline}
              </h3>
              <p className="text-xs md:text-sm text-sigma-stone-600 leading-relaxed font-sans">
                {careerStagesData[activeStage].description}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sigma-stone-500">
                Key Development Deliverables
              </h4>
              <div className="space-y-2.5">
                {careerStagesData[activeStage].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 bg-white rounded-xl border border-sigma-stone-200/60 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-sigma-green-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-sigma-graphite-900 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-sigma-stone-400">Core Competencies:</span>
                {careerStagesData[activeStage].skillsLearned.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-sigma-stone-200/80 text-sigma-graphite-900 rounded-lg text-[11px] font-bold border border-sigma-stone-300/60">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
