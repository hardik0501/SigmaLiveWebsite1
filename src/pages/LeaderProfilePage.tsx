import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { leadersData } from '@/data/companyData';
import { Leader } from '@/types/company';
import { LeaderContactModal } from '@/components/company/LeaderContactModal';
import { ArrowLeft, SearchX, Mail, CheckCircle2, Calendar, Linkedin, Facebook, Twitter } from 'lucide-react';

export function LeaderProfilePage() {
  const { slug } = useParams<{ slug: string }>();

  const leader = useMemo(() => {
    return leadersData.find((l) => l.slug === slug || l.id === slug);
  }, [slug]);

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (leader) {
      document.title = `${leader.name} | ${leader.designation} | Sigma Homes`;
    } else {
      document.title = 'Leader Not Found | Sigma Homes';
    }
  }, [leader]);

  if (!leader) {
    return (
      <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-4 p-8 bg-white border border-sigma-stone-200/80 rounded-3xl shadow-sm">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-sigma-stone-100 flex items-center justify-center text-sigma-stone-500">
            <SearchX className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-sigma-graphite-900">
            Leader Profile Not Found
          </h1>
          <p className="text-xs text-sigma-stone-500 leading-relaxed">
            The leader profile you requested does not exist or has been updated.
          </p>
          <div className="pt-2">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              View Leadership Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-28 pb-20">
      <div className="container-content">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/leadership"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-stone-500 hover:text-sigma-graphite-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Leadership Directory
          </Link>
        </div>

        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl overflow-hidden p-6 md:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden bg-sigma-stone-900">
              <img src={leader.portrait} alt={leader.name} className="w-full h-full object-cover" />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 bg-sigma-blue-100 text-sigma-blue-800 text-xs font-bold rounded-full">
                {leader.designation}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900">
                {leader.name}
              </h1>

              <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
                {leader.fullBio}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sigma-stone-400 block mb-2">
                  Areas of Expertise
                </span>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((exp) => (
                    <span key={exp} className="px-3 py-1 bg-sigma-stone-100 rounded-xl text-xs font-bold text-sigma-graphite-900">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Connect with {leader.name}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        {leader.journey && leader.journey.length > 0 && (
          <div className="bg-white rounded-3xl border border-sigma-stone-200/80 p-6 md:p-10 space-y-6">
            <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900">
              Professional Journey at Sigma
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leader.journey.map((j, idx) => (
                <div key={idx} className="p-5 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-2xl space-y-2">
                  <span className="px-2.5 py-0.5 bg-sigma-blue-700 text-white text-[11px] font-bold rounded-md">
                    {j.year}
                  </span>
                  <h3 className="text-base font-bold font-serif text-sigma-graphite-900 pt-1">{j.title}</h3>
                  <p className="text-xs text-sigma-stone-600 leading-relaxed">{j.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <LeaderContactModal
        leader={leader}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
