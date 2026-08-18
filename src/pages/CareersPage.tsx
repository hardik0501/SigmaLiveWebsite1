import React, { useState, useEffect } from 'react';
import { CareerJourneyTimeline } from '@/components/company/CareerJourneyTimeline';
import { CareerApplicationModal } from '@/components/company/CareerApplicationModal';
import { Link } from 'react-router-dom';
import { Users, Award, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function CareersPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  useEffect(() => {
    document.title = 'Careers at Sigma Homes | Build Your Growth Journey';
  }, []);

  const targetAudiences = [
    'Fresh Graduates & Young Professionals',
    'Work-from-Home Consultants & Women Entrepreneurs',
    'Experienced Realtors, Brokers & Channel Partners',
    'Sales, Civil Engineering & Marketing Specialists',
  ];

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        {/* Career Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow text-sigma-blue-600">Career & Leadership Ecosystem</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.08]">
            Your Beginning Doesn't Define Your Destination.
          </h1>
          <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
            Build skills, grow through experience, and develop into strategic leadership within the Sigma ecosystem.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-8 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/success-stories"
              className="px-6 py-3.5 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl font-semibold text-sm transition-colors"
            >
              View Transformation Stories
            </Link>
          </div>
        </div>

        {/* 5-Stage Career Progression Timeline */}
        <CareerJourneyTimeline />

        {/* Who Can Explore Opportunities */}
        <section className="py-16 md:py-24 bg-sigma-stone-100/60 rounded-3xl border border-sigma-stone-200/80 my-16 p-8 md:p-12">
          <div className="max-w-2xl mb-8">
            <span className="eyebrow text-sigma-blue-600">Inclusive Opportunity</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
              Who Can Explore Opportunities With Sigma?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {targetAudiences.map((aud, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-sigma-green-600 shrink-0" />
                <span className="text-sm font-bold text-sigma-graphite-900">{aud}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Apply CTA Banner */}
        <div className="p-10 bg-sigma-navy-950 text-white rounded-3xl text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <span className="eyebrow text-sigma-amber-400">Ready to Grow?</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
            Ready to Build Your Journey With Sigma?
          </h2>
          <p className="text-sm text-sigma-stone-300 max-w-md mx-auto">
            Submit your interest today and take the first step toward structured professional development.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setIsApplyOpen(true)}
              className="px-8 py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-sm shadow-xl transition-all"
            >
              Express Interest / Apply Now
            </button>
          </div>
        </div>
      </div>

      <CareerApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
