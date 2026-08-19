import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { successStoriesData } from '@/data/companyData';
import { CareerJourneyTimeline } from '@/components/company/CareerJourneyTimeline';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { ArrowRight, Quote, CheckCircle2, UserCheck, Award, Sparkles } from 'lucide-react';

export function SuccessStoriesPage() {
  useEffect(() => {
    document.title = 'Success Stories | Real People, Real Growth | Sigma Homes';
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 md:pt-40">
      {/* 1. Stories Hero */}
      <div className="container-content">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Human Transformation Spotlight</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            Real People. Real Journeys. Real Growth.
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            Explore authentic transformation stories of team members and associates who built their careers within the Sigma Group ecosystem.
          </p>
        </div>

        {/* 2. Key Growth Milestone Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xs mb-14">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Leadership Track</span>
            <span className="text-xl font-bold font-serif text-sigma-graphite-900">Meritocracy</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Interns Promoted</span>
            <span className="text-xl font-bold font-serif text-sigma-blue-700">60+ Associates</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Average Growth</span>
            <span className="text-xl font-bold font-serif text-sigma-green-700">3-5 Year Track</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Director Level</span>
            <span className="text-xl font-bold font-serif text-sigma-amber-600">Partnership</span>
          </div>
        </div>

        {/* 3. Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {successStoriesData.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-sigma-stone-200/80 p-6 md:p-8 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6 hover-lift border-line-trace"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={story.portrait}
                    alt={story.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-sigma-stone-200"
                  />
                  <div>
                    <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">{story.name}</h3>
                    <span className="text-xs font-bold text-sigma-blue-700 block">{story.currentRole}</span>
                    <span className="text-[11px] font-semibold text-sigma-stone-400 block">{story.yearsWithSigma} at Sigma</span>
                  </div>
                </div>

                <div className="p-4 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Starting Point</span>
                  <p className="text-xs font-medium text-sigma-graphite-800 mt-0.5">{story.startingPoint}</p>
                </div>

                <p className="text-xs md:text-sm text-sigma-stone-600 leading-relaxed font-sans">
                  {story.story}
                </p>

                <div className="p-4 bg-sigma-blue-50/60 border border-sigma-blue-200/60 rounded-2xl space-y-1">
                  <Quote className="h-4 w-4 text-sigma-blue-600 mb-1" />
                  <p className="text-xs font-bold text-sigma-graphite-900 italic">"{story.quote}"</p>
                </div>
              </div>

              <div className="pt-4 border-t border-sigma-stone-200/60">
                <Link
                  to={`/success-stories/${story.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-700 hover:text-sigma-blue-900 transition-colors"
                >
                  Read Full Transformation Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 5-Stage Progression Roadmap */}
      <CareerJourneyTimeline />

      {/* 5. Cultural Meritocracy Ethos */}
      <section className="py-16 bg-white border-y border-sigma-stone-200/60">
        <div className="container-content">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="eyebrow text-sigma-blue-600">The Sigma Difference</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Why People Build Long-Term Careers at Sigma
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="font-bold text-sigma-blue-700 text-lg font-serif">Clear Progression Path</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">No arbitrary glass ceilings. Clear targets for advancement to team lead and director.</p>
            </div>

            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="font-bold text-sigma-blue-700 text-lg font-serif">Comprehensive Training</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">Daily mentoring on legal land titles, customer psychology, and negotiation skills.</p>
            </div>

            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="font-bold text-sigma-blue-700 text-lg font-serif">Ecosystem Support</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">Full back-office support across legal clearance, digital marketing, and site transport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder Quote Banner */}
      <section className="py-20 bg-sigma-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container-content relative z-10 max-w-4xl space-y-6 text-center">
          <Quote className="h-8 w-8 text-sigma-amber-400 mx-auto opacity-80" />
          <blockquote className="font-serif text-2xl md:text-3xl italic text-white leading-snug">
            "When we invest in people, they build communities. Success is not measured by individual milestones, but by the leaders we empower."
          </blockquote>
          <span className="text-xs font-bold text-sigma-amber-400 uppercase tracking-widest block">
            — Jitendra Kumar Sharma, Founder & Chairman
          </span>
        </div>
      </section>

      {/* 7. Careers Callout Banner */}
      <div className="container-content py-16">
        <div className="p-8 bg-white border border-sigma-stone-200/80 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-bold text-sigma-blue-700 uppercase tracking-wider">Start Your Story</span>
            <h3 className="text-2xl font-bold font-serif text-sigma-graphite-900">Ready to Write Your Own Growth Story?</h3>
            <p className="text-xs text-sigma-stone-600 font-sans">
              Apply for open opportunities across sales advisory, engineering, and digital marketing.
            </p>
          </div>
          <Link
            to="/careers"
            className="px-6 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Explore Careers</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 8. Final CTA */}
      <FinalCTA />
    </div>
  );
}
