import React, { useState, useEffect } from 'react';
import { leadersData } from '@/data/companyData';
import { Leader } from '@/types/company';
import { LeaderCard } from '@/components/company/LeaderCard';
import { LeaderContactModal } from '@/components/company/LeaderContactModal';
import { CoreValues } from '@/components/company/CoreValues';
import { CompanyStats } from '@/components/company/CompanyStats';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, ShieldCheck, Award } from 'lucide-react';

export function LeadershipHubPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  useEffect(() => {
    document.title = 'Leadership Team | Sigma Homes India';
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 md:pt-40">
      {/* 1. Leadership Hero */}
      <div className="container-content">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Company Leadership & Governance</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            Guided by 25+ Years of Industry Leadership
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            A leadership team built around two decades of local real estate experience, transparent customer advisory, and long-term ecosystem growth.
          </p>
        </div>

        {/* 2. Key Governance Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          <div className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sigma-amber-500/10 text-sigma-amber-700 flex items-center justify-center font-bold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-sigma-graphite-900">Meritocratic Culture</h4>
              <p className="text-[11px] text-sigma-stone-500">Fresher to Director roadmap</p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sigma-blue-500/10 text-sigma-blue-700 flex items-center justify-center font-bold">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-sigma-graphite-900">Executive Access</h4>
              <p className="text-[11px] text-sigma-stone-500">Direct leadership consultations</p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-sigma-stone-200/80 flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sigma-green-500/10 text-sigma-green-700 flex items-center justify-center font-bold">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-sigma-graphite-900">25+ Years Legacy</h4>
              <p className="text-[11px] text-sigma-stone-500">12,000+ satisfied families</p>
            </div>
          </div>
        </div>

        {/* 3. Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {leadersData.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              onContact={(l) => setSelectedLeader(l)}
            />
          ))}
        </div>
      </div>

      {/* 4. Verified Company Metrics */}
      <CompanyStats />

      {/* 5. Core Operational Values */}
      <CoreValues />

      {/* 6. Founder Vision Section Callout */}
      <section className="py-20 bg-sigma-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container-content relative z-10 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="eyebrow text-sigma-amber-400">Founder & Chairman</span>
            <h2 className="text-3xl font-bold font-serif text-white">
              Jitendra Kumar Sharma — Founder Vision
            </h2>
            <p className="text-xs text-sigma-stone-300 leading-relaxed font-sans max-w-xl">
              "Jan Seva Hi Rashtra Seva Hai" — Public Service is National Service. Explore the vision driving Sigma Group since 2001.
            </p>
          </div>
          <Link
            to="/founder"
            className="px-6 py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-xs shadow-xl transition-all shrink-0 flex items-center gap-2"
          >
            <span>Read Founder Biography</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 7. Careers Roadmap Callout */}
      <div className="container-content py-16">
        <div className="p-8 bg-white border border-sigma-stone-200/80 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-bold text-sigma-blue-700 uppercase tracking-wider">Career Growth</span>
            <h3 className="text-2xl font-bold font-serif text-sigma-graphite-900">Want to Build Your Leadership Journey With Sigma?</h3>
            <p className="text-xs text-sigma-stone-600 font-sans">
              Explore our structured 5-stage career progression roadmap from intern to director level.
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

      {/* Leader Contact Modal */}
      <LeaderContactModal
        leader={selectedLeader}
        isOpen={Boolean(selectedLeader)}
        onClose={() => setSelectedLeader(null)}
      />
    </div>
  );
}
