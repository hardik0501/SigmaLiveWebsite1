import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldAlert, ArrowRight, CheckCircle2, Search, HelpCircle, Building2, BarChart2 } from 'lucide-react';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';
import { WorkingMarkets } from '@/components/sections/WorkingMarkets';
import { FinalCTA } from '@/components/sections/FinalCTA';

const investmentFaqs = [
  {
    q: 'What is the projected capital appreciation in Jaipur’s major growth corridors?',
    a: 'Historically, prime growth corridors like Vaishali Nagar extension, Jagatpura, and Ajmer Road have shown 10% to 15% annual capital appreciation based on infrastructure deployment.',
  },
  {
    q: 'What property type offers the highest rental returns for investors?',
    a: 'Compact 2 & 3 BHK high-rise apartments near IT parks and educational institutions offer the highest rental yield (~4.5% - 6% annually) with consistent occupancy.',
  },
  {
    q: 'Are land and plot investments safer than under-construction projects?',
    a: 'JDA-approved township plots provide 100% land ownership and zero construction delay risk, making them an ideal conservative wealth preservation asset.',
  },
  {
    q: 'Does Sigma assist with resale and exiting investments after appreciation?',
    a: 'Yes, our dedicated resale and secondary market desk helps clients list, position, and liquidate assets to capture target ROI.',
  },
];

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
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 md:pt-40">
      <div className="container-content">
        {/* 1. Investment Hero */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow text-sigma-blue-600">Research-Led Advisory Desk</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.08]">
            Strategic Real Estate Wealth Creation.
          </h1>
          <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
            Explore high-yield property opportunities, corridor market research, and institutional investment solutions backed by two decades of local Jaipur experience.
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
              Explore High-Yield Projects
            </Link>
          </div>
        </div>

        {/* 2. Investment Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((s, idx) => (
            <div key={idx} className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-2 hover-lift border-line-trace">
              <TrendingUp className="h-6 w-6 text-sigma-blue-700 mb-2" />
              <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">{s.title}</h3>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. Corridor Growth Analysis */}
        <section className="p-8 md:p-12 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xs mb-16 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-sigma-blue-600">Corridor Intelligence</span>
              <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
                Jaipur Infrastructure Growth Drivers
              </h2>
            </div>
            <span className="px-3 py-1 bg-sigma-green-50 text-sigma-green-700 text-xs font-bold rounded-lg flex items-center gap-1">
              <BarChart2 className="h-3.5 w-3.5" />
              Data Verified 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60 space-y-2">
              <div className="text-sm font-bold text-sigma-graphite-900">Ring Road Economic Belt</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">
                6-lane ring road connectivity driving logistics, commercial warehousing, and residential township expansion.
              </p>
            </div>

            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60 space-y-2">
              <div className="text-sm font-bold text-sigma-graphite-900">IT & Education Hubs</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">
                Mahindra World City & Sitapura IT corridor driving high rental occupancy for 2 & 3 BHK luxury residences.
              </p>
            </div>

            <div className="p-5 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60 space-y-2">
              <div className="text-sm font-bold text-sigma-graphite-900">Airport Expansion Zone</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed">
                Terminal upgrades and luxury hospital hubs accelerating capital values in Jagatpura and Tonk Road corridors.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Investment Framework Process */}
        <section className="p-8 md:p-12 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl mb-16 space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow text-sigma-blue-600">Methodology</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
              5-Step Investment Execution Protocol
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
                <span className="text-xs font-extrabold text-sigma-blue-700 block font-mono">{step.num}</span>
                <h4 className="text-sm font-bold text-sigma-graphite-900 font-serif">{step.title}</h4>
                <p className="text-[11px] text-sigma-stone-500 font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 5. Active Market Corridors */}
      <WorkingMarkets />

      <div className="container-content">
        {/* 6. Legal Disclaimer Box */}
        <div className="p-6 bg-sigma-stone-200/60 border border-sigma-stone-300 rounded-3xl flex items-start gap-3 text-xs text-sigma-stone-700 leading-relaxed my-12">
          <ShieldAlert className="h-5 w-5 text-sigma-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-sigma-graphite-900 mb-0.5">Real Estate Investment Disclaimer:</strong>
            Real estate investments involve market, liquidity, and execution risks. Information provided on this website is for general informational purposes and should not be treated as a guarantee of returns or capital appreciation.
          </div>
        </div>

        {/* 7. Investment FAQs */}
        <section className="py-12 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="eyebrow text-sigma-blue-600">Investor FAQs</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Frequently Asked Investment Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentFaqs.map((faq, i) => (
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

      <UniversalLeadModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        leadType="investment"
        title="Schedule Investment Advisory"
      />
    </div>
  );
}
