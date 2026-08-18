import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { successStoriesData } from '@/data/companyData';
import { ArrowLeft, SearchX, Quote, CheckCircle2 } from 'lucide-react';

export function SuccessStoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const story = useMemo(() => {
    return successStoriesData.find((s) => s.slug === slug || s.id === slug);
  }, [slug]);

  useEffect(() => {
    if (story) {
      document.title = `${story.name} — Success Story | Sigma Homes`;
    } else {
      document.title = 'Story Not Found | Sigma Homes';
    }
  }, [story]);

  if (!story) {
    return (
      <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-4 p-8 bg-white border border-sigma-stone-200/80 rounded-3xl shadow-sm">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-sigma-stone-100 flex items-center justify-center text-sigma-stone-500">
            <SearchX className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-sigma-graphite-900">
            Success Story Not Found
          </h1>
          <p className="text-xs text-sigma-stone-500 leading-relaxed">
            The transformation story you requested does not exist or has been updated.
          </p>
          <div className="pt-2">
            <Link
              to="/success-stories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              View All Success Stories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-28 pb-20">
      <div className="container-content max-w-4xl space-y-8">
        <Link
          to="/success-stories"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-stone-500 hover:text-sigma-graphite-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Success Stories
        </Link>

        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 p-8 md:p-12 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={story.portrait}
              alt={story.name}
              className="w-24 h-24 rounded-3xl object-cover border border-sigma-stone-200"
            />
            <div>
              <span className="px-3 py-1 bg-sigma-blue-100 text-sigma-blue-800 text-xs font-bold rounded-full">
                {story.yearsWithSigma} at Sigma Group
              </span>
              <h1 className="text-3xl font-bold font-serif text-sigma-graphite-900 mt-2">{story.name}</h1>
              <span className="text-sm font-bold text-sigma-blue-700 block mt-0.5">{story.currentRole}</span>
            </div>
          </div>

          <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Starting Point</span>
            <p className="text-sm font-semibold text-sigma-graphite-900 mt-1">{story.startingPoint}</p>
          </div>

          <div className="space-y-4 text-base text-sigma-graphite-800 leading-relaxed font-sans">
            <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900">The Transformation Story</h2>
            <p>{story.story}</p>
          </div>

          <div className="p-6 bg-sigma-blue-950 text-white rounded-3xl space-y-2 relative">
            <Quote className="h-6 w-6 text-sigma-amber-400 mb-1" />
            <p className="text-base font-bold italic text-white">"{story.quote}"</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold font-serif text-sigma-graphite-900">Key Career Lessons</h3>
            <div className="space-y-2">
              {story.keyLessons.map((lesson, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-sigma-stone-50 rounded-xl border border-sigma-stone-200/60">
                  <CheckCircle2 className="h-4 w-4 text-sigma-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-sigma-graphite-900">{lesson}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-sigma-stone-200/60 flex justify-between items-center">
            <Link
              to="/careers"
              className="px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
            >
              Explore Careers at Sigma
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
