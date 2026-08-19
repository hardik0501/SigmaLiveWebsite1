import React, { useState, useEffect } from 'react';
import { CareerJourneyTimeline } from '@/components/company/CareerJourneyTimeline';
import { CareerApplicationModal } from '@/components/company/CareerApplicationModal';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Link } from 'react-router-dom';
import { Users, Award, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, HelpCircle } from 'lucide-react';

const careerFaqs = [
  {
    q: 'Do I need prior real estate sales experience to apply at Sigma?',
    a: 'No, prior real estate experience is not required for entry-level Stage 01 advisory roles. We provide comprehensive 30-day structured orientation, legal training, and mentorship.',
  },
  {
    q: 'What is the performance evaluation process for career progression?',
    a: 'Progressions are meritocratic based on client satisfaction, revenue contributions, and ethical advisory practices reviewed quarterly.',
  },
  {
    q: 'Are work-from-home or flexible advisory roles available?',
    a: 'Yes, we offer flexible channel consultancy and remote investment advisory roles tailored for homemakers, professionals, and independent realtors.',
  },
  {
    q: 'How long does it typically take to transition from Manager to Director level?',
    a: 'Dedicated professionals within the Sigma ecosystem historically progress to partnership or director ownership within 3 to 5 years.',
  },
];

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
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 md:pt-40">
      {/* 1. Career Hero */}
      <div className="container-content">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="eyebrow text-sigma-blue-600">Meritocratic Career Ecosystem</span>
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

        {/* 2. Key Employee Benefits & Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-2 hover-lift border-line-trace">
            <Award className="h-6 w-6 text-sigma-blue-700 mb-1" />
            <h3 className="text-base font-bold font-serif text-sigma-graphite-900">Meritocracy First</h3>
            <p className="text-xs text-sigma-stone-600 font-sans leading-relaxed">Transparent evaluation based on value creation, not tenure.</p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-2 hover-lift border-line-trace">
            <Users className="h-6 w-6 text-sigma-blue-700 mb-1" />
            <h3 className="text-base font-bold font-serif text-sigma-graphite-900">Direct Executive Mentorship</h3>
            <p className="text-xs text-sigma-stone-600 font-sans leading-relaxed">Direct guidance from senior leaders and founder visionaries.</p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-2 hover-lift border-line-trace">
            <ShieldCheck className="h-6 w-6 text-sigma-blue-700 mb-1" />
            <h3 className="text-base font-bold font-serif text-sigma-graphite-900">Uncapped Earnings</h3>
            <p className="text-xs text-sigma-stone-600 font-sans leading-relaxed">Industry-leading performance incentives & equity ownership tracks.</p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-2 hover-lift border-line-trace">
            <HeartHandshake className="h-6 w-6 text-sigma-blue-700 mb-1" />
            <h3 className="text-base font-bold font-serif text-sigma-graphite-900">Inclusive Environment</h3>
            <p className="text-xs text-sigma-stone-600 font-sans leading-relaxed">Flexible tracks for homemakers, consultants, and full-time professionals.</p>
          </div>
        </div>

        {/* 3. 5-Stage Career Progression Timeline */}
        <CareerJourneyTimeline />

        {/* 4. Target Audiences & Opportunities */}
        <section className="py-16 md:py-24 bg-white rounded-3xl border border-sigma-stone-200/80 my-16 p-8 md:p-12 shadow-xs">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="eyebrow text-sigma-blue-600">Inclusive Growth</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Who Can Explore Opportunities With Sigma?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {targetAudiences.map((aud, idx) => (
              <div key={idx} className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-sigma-green-600 shrink-0" />
                <span className="text-sm font-bold text-sigma-graphite-900">{aud}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Transformation Stories Callout */}
        <section className="p-8 md:p-12 bg-sigma-graphite-950 text-white rounded-3xl mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="eyebrow text-sigma-amber-400">Proven Growth Journeys</span>
              <h2 className="text-3xl font-bold font-serif text-white">
                From Day One Trainee to Director Partner
              </h2>
              <p className="text-xs text-sigma-stone-300 max-w-xl leading-relaxed">
                Discover inspiring real-life stories of individuals who started their careers at Sigma and built long-term leadership.
              </p>
            </div>
            <Link
              to="/success-stories"
              className="px-6 py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-xs shadow-xl transition-all shrink-0 flex items-center gap-2"
            >
              <span>Explore Success Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 6. Workplace Culture */}
        <section className="py-12 bg-white rounded-3xl border border-sigma-stone-200/80 p-8 mb-16">
          <div className="max-w-2xl mb-6 space-y-2">
            <span className="eyebrow text-sigma-blue-600">Workplace Ethos</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Our Core Cultural Pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
              <h4 className="font-bold text-sm font-serif text-sigma-graphite-900 mb-1">Ethical Customer Advisory</h4>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">Client trust always supersedes short-term transaction targets.</p>
            </div>

            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
              <h4 className="font-bold text-sm font-serif text-sigma-graphite-900 mb-1">Continuous Skill Building</h4>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">Weekly workshops on legal titles, market research, and negotiation.</p>
            </div>

            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
              <h4 className="font-bold text-sm font-serif text-sigma-graphite-900 mb-1">Entrepreneurial Ownership</h4>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">Encouraging leaders to build independent business verticals within Sigma.</p>
            </div>
          </div>
        </section>

        {/* 7. Career FAQs */}
        <section className="py-12 max-w-4xl mx-auto space-y-8 mb-16">
          <div className="text-center space-y-2">
            <span className="eyebrow text-sigma-blue-600">Applicant FAQs</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Frequently Asked Career Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerFaqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-sigma-stone-200/80 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-sigma-blue-700 font-bold text-sm">
                  <HelpCircle className="h-4 w-4 shrink-0" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 8. Final CTA */}
      <FinalCTA />

      <CareerApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}
