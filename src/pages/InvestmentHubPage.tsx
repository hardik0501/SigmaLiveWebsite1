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
    { title: 'High-Yield Residences', desc: 'Curated 2 & 3 BHK apartments in demand hubs like Jagatpura and Mansarovar for consistent rental income.' },
    { title: 'Strategic Land & Plots', desc: 'JDA-approved plots near major growth infrastructure (Ring Road, Ajmer Road) for maximum long-term capital growth.' },
    { title: 'Pre-Launch Opportunities', desc: 'Exclusive early-stage residential launches offering early pricing advantage and higher return potential.' },
    { title: 'NRI Property Advisory', desc: 'End-to-end portfolio management, documentation, and resale assistance tailored for non-resident investors.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090F1C] via-[#0D1627] to-[#060A12] text-white pt-32 md:pt-40 relative overflow-hidden">
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sigma-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sigma-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-sigma-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-content relative z-10">
        {/* 1. Investment Hero */}
        <div className="max-w-4xl mb-20 space-y-6">
          <span className="eyebrow text-sigma-amber-400 font-semibold tracking-widest text-sm uppercase block">REAL ESTATE ADVISORY</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.05]">
            Strategic Property & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sigma-amber-400 to-amber-300">Wealth Creation</span>
          </h1>
          <p className="text-lg md:text-xl text-sigma-blue-100/90 font-sans leading-relaxed max-w-3xl">
            Explore high-appreciation residential projects and JDA plots across Jaipur’s top growth corridors, backed by over 20 years of local expertise.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-4 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-navy-950 rounded-xl font-bold text-base shadow-lg shadow-sigma-amber-500/10 transition-all duration-300 flex items-center gap-2"
            >
              Talk to an Investment Advisor
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/properties?intent=Investment"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-xl font-bold text-base transition-all duration-300 flex items-center gap-2"
            >
              <Search className="h-5 w-5 text-sigma-amber-400" />
              Explore High-Yield Projects
            </Link>
          </div>
        </div>

        {/* 2. Investment Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {solutions.map((s, idx) => (
            <div key={idx} className="p-8 bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/10 hover:border-sigma-amber-500/30 hover:bg-white/[0.07] shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <span className="absolute top-6 right-6 text-2xl font-mono font-extrabold text-sigma-amber-400/20 group-hover:text-sigma-amber-400/40 transition-colors">0{idx + 1}</span>
              <div className="h-12 w-12 rounded-2xl bg-sigma-amber-400/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-sigma-amber-400" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-3">{s.title}</h3>
              <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. Corridor Growth Analysis */}
        <section className="p-8 md:p-12 bg-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl mb-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Corridor Intelligence</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-2">
                Jaipur Infrastructure Growth Drivers
              </h2>
            </div>
            <span className="px-4 py-1.5 bg-sigma-amber-400/10 text-sigma-amber-400 text-xs font-bold rounded-lg flex items-center gap-1.5 border border-sigma-amber-400/20 w-fit">
              <BarChart2 className="h-4 w-4" />
              Data Verified 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
              <div className="text-base font-bold text-white font-serif flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sigma-amber-400" />
                Ring Road Corridor
              </div>
              <p className="text-sm md:text-base text-sigma-blue-100/75 leading-relaxed">
                High-speed connectivity driving rapid land appreciation and new township projects.
              </p>
            </div>

            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
              <div className="text-base font-bold text-white font-serif flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sigma-amber-400" />
                Education & IT Hubs
              </div>
              <p className="text-sm md:text-base text-sigma-blue-100/75 leading-relaxed">
                High rental occupancy driven by proximity to Sitapura and Mahindra World City.
              </p>
            </div>

            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
              <div className="text-base font-bold text-white font-serif flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sigma-amber-400" />
                Airport Extension Belt
              </div>
              <p className="text-sm md:text-base text-sigma-blue-100/75 leading-relaxed">
                Rising property value across Jagatpura and Tonk Road due to upgraded infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Investment Framework Process */}
        <section className="p-8 md:p-12 bg-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl mb-24 space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-2">
              5-Step Investment Execution Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Understand Goals', desc: 'Assess risk tolerance, liquidity & investment horizon.' },
              { num: '02', title: 'Study the Market', desc: 'Evaluate macro-infrastructure developments & corridor pricing trends.' },
              { num: '03', title: 'Evaluate Assets', desc: 'Execute multi-level RERA legal verification & official cost sheet analysis.' },
              { num: '04', title: 'Build Strategy', desc: 'Optimize asset allocation targets between rental yield vs capital growth.' },
              { num: '05', title: 'Support Execution', desc: 'Provide continuous property management assistance & resale desk access.' },
            ].map((step) => (
              <div key={step.num} className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                <span className="text-base font-extrabold text-sigma-amber-400 block font-mono">{step.num}</span>
                <h4 className="text-base font-bold text-white font-serif">{step.title}</h4>
                <p className="text-xs md:text-sm text-sigma-blue-100/60 leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 5. Active Market Corridors */}
      <WorkingMarkets />

      <div className="container-content">
        {/* 6. Legal Disclaimer Box */}
        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl flex items-start gap-4 text-sm text-sigma-blue-100/70 leading-relaxed my-16 max-w-4xl mx-auto">
          <ShieldAlert className="h-6 w-6 text-sigma-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-white mb-1 text-base">Real Estate Investment Disclaimer:</strong>
            Real estate investments involve market, liquidity, and execution risks. Information provided on this website is for general informational purposes and should not be treated as a guarantee of returns or capital appreciation.
          </div>
        </div>

        {/* 7. Investment FAQs */}
        <section className="py-16 max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Investor FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
              Frequently Asked Investment Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentFaqs.map((faq, i) => (
              <div key={i} className="p-8 bg-white/[0.02] rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-3 text-white font-bold text-base md:text-lg">
                  <HelpCircle className="h-5 w-5 text-sigma-amber-400 shrink-0 mt-0.5" />
                  <h3>{faq.q}</h3>
                </div>
                <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans pl-8">
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
