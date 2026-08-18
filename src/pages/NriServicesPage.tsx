import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Video, ShieldCheck, FileCheck, ArrowRight, Building2 } from 'lucide-react';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';

export function NriServicesPage() {
  const [isNriModalOpen, setIsNriModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'NRI Real Estate Services | Sigma Homes India';
  }, []);

  const nriServices = [
    { title: 'Online Consultation', desc: 'Virtual briefings on verified developments & corridor growth.', icon: Globe },
    { title: 'Virtual Site Visit', desc: 'HD video walkthroughs & live interactive site inspections.', icon: Video },
    { title: 'Legal & FEMA Clearance', desc: 'FEMA compliance & NRE/NRO transaction documentation.', icon: FileCheck },
    { title: 'Property Management', desc: 'Complete tenant placement, lease management & upkeep.', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow text-sigma-blue-600">Global NRI Desk</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.08]">
            Manage Your Property in India, From Anywhere.
          </h1>
          <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
            Professional real-estate support for NRIs looking to explore, purchase, manage or invest in Indian property with complete transparency.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsNriModalOpen(true)}
              className="px-7 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              Book NRI Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/properties"
              className="px-6 py-3.5 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl font-semibold text-sm transition-colors"
            >
              Explore Properties
            </Link>
          </div>
        </div>

        {/* NRI Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {nriServices.map((s, idx) => (
            <div key={idx} className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-3">
              <s.icon className="h-6 w-6 text-sigma-blue-700 mb-2" />
              <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">{s.title}</h3>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <UniversalLeadModal
        isOpen={isNriModalOpen}
        onClose={() => setIsNriModalOpen(false)}
        leadType="nri"
        title="NRI Property Consultation"
      />
    </div>
  );
}
