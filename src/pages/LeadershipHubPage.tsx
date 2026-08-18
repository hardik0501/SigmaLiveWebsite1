import React, { useState, useEffect } from 'react';
import { leadersData } from '@/data/companyData';
import { Leader } from '@/types/company';
import { LeaderCard } from '@/components/company/LeaderCard';
import { LeaderContactModal } from '@/components/company/LeaderContactModal';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';

export function LeadershipHubPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  useEffect(() => {
    document.title = 'Leadership Team | Sigma Homes India';
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Company Leadership</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            Meet the People Behind Sigma
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            A leadership team built around two decades of local real estate experience, transparent customer advisory, and long-term ecosystem growth.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {leadersData.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              onContact={(l) => setSelectedLeader(l)}
            />
          ))}
        </div>

        {/* Careers Callout */}
        <div className="mt-16 p-8 bg-sigma-navy-950 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-bold text-sigma-amber-400 uppercase tracking-wider">Career Journey</span>
            <h3 className="text-2xl font-bold font-serif text-white">Want to Build Your Journey With Sigma?</h3>
            <p className="text-xs text-sigma-stone-300">
              Explore our structured 5-stage career progression roadmap from intern to director level.
            </p>
          </div>
          <Link
            to="/careers"
            className="px-6 py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
          >
            Explore Careers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Leader Contact Modal */}
      <LeaderContactModal
        leader={selectedLeader}
        isOpen={Boolean(selectedLeader)}
        onClose={() => setSelectedLeader(null)}
      />
    </div>
  );
}
