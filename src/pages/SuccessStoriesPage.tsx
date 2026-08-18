import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { successStoriesData } from '@/data/companyData';
import { ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

export function SuccessStoriesPage() {
  useEffect(() => {
    document.title = 'Success Stories | Real People, Real Growth | Sigma Homes';
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Human Transformation Stories</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            Real People. Real Journeys. Real Growth.
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            Explore authentic transformation stories of team members and associates who built their careers within the Sigma Group ecosystem.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStoriesData.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-sigma-stone-200/80 p-6 md:p-8 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
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
    </div>
  );
}
