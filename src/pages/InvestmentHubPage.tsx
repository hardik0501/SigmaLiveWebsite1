import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldAlert, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';

export function InvestmentHubPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    document.title = 'Real Estate Investment & Corridor Research | Sigma Homes';
  }, []);

  const solutions = [
    { title: 'Residential Investment', desc: 'Pre-launch & high-rise apartments with strong end-user demand.' },
    { title: 'Commercial Investment', desc: 'High-visibility main-road retail storefronts & office suites.' },
    { title: 'Land & Plot Opportunities', desc: 'Strategic land parcels along active infrastructure ring corridors.' },
    { title: 'Rental Yield Consulting', desc: 'Institutional tenant profiling near IT hubs & universities.' },
  ];

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        {/* Investment Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow text-sigma-blue-600">Research-Led Advisory</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.08]">
            Build Your Real Estate Portfolio With Confidence.
          </h1>
          <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
            Explore property opportunities, market insights and investment solutions backed by two decades of local real estate experience.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-7 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              Talk to an Investment Advisor
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/properties?intent=Investment"
              className="px-6 py-3.5 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl font-semibold text-sm transition-colors flex items-center gap-1.5"
            >
              <Search className="h-4 w-4 text-sigma-blue-600" />
              Explore Investment Projects
            </Link>
          </div>
        </div>

        {/* Investment Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((s, idx) => (
            <div key={idx} className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-2">
              <TrendingUp className="h-6 w-6 text-sigma-blue-700 mb-2" />
              <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">{s.title}</h3>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Investment Framework Process */}
        <section className="p-8 md:p-12 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl mb-16 space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow text-sigma-blue-600">Framework</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
              Conceptual Investment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Understand Goals', desc: 'Assess risk tolerance, liquidity & horizon.' },
              { num: '02', title: 'Study the Market', desc: 'Evaluate infrastructure corridors.' },
              { num: '03', title: 'Evaluate Assets', desc: 'RERA legal verification & cost sheets.' },
              { num: '04', title: 'Build Strategy', desc: 'Allocation between yield vs capital growth.' },
              { num: '05', title: 'Support Execution', desc: 'Ongoing property & resale assistance.' },
            ].map((step) => (
              <div key={step.num} className="p-4 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60 space-y-1">
                <span className="text-xs font-extrabold text-sigma-blue-700 block">{step.num}</span>
                <h4 className="text-sm font-bold text-sigma-graphite-900">{step.title}</h4>
                <p className="text-[11px] text-sigma-stone-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Disclaimer Box */}
        <div className="p-6 bg-sigma-stone-200/60 border border-sigma-stone-300 rounded-3xl flex items-start gap-3 text-xs text-sigma-stone-700 leading-relaxed mb-16">
          <ShieldAlert className="h-5 w-5 text-sigma-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-sigma-graphite-900 mb-0.5">Real Estate Investment Disclaimer:</strong>
            Real estate investments involve market, liquidity, and execution risks. Information provided on this website is for general informational purposes and should not be treated as a guarantee of returns or capital appreciation.
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-10 bg-sigma-navy-950 text-white rounded-3xl text-center space-y-4 shadow-xl">
          <h2 className="text-3xl font-bold font-serif text-white">Schedule Your Investment Consultation</h2>
          <p className="text-xs text-sigma-stone-300 max-w-md mx-auto">
            Discuss your portfolio goals with a dedicated Sigma Homes advisor today.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-sm shadow-xl transition-all"
            >
              Request Investment Advisory
            </button>
          </div>
        </div>
      </div>

      <UniversalLeadModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        leadType="investment"
        title="Schedule Investment Advisory"
      />
    </div>
  );
}
