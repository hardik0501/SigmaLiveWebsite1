import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Video, ShieldCheck, FileCheck, ArrowRight, Building2, CheckCircle2, DollarSign, HelpCircle, PhoneCall } from 'lucide-react';
import { UniversalLeadModal } from '@/components/conversion/UniversalLeadModal';
import { WorkingMarkets } from '@/components/sections/WorkingMarkets';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { projectsData } from '@/data/projectsData';

const nriFaqs = [
  {
    q: 'Can NRIs purchase residential and commercial properties in India without RBI approval?',
    a: 'Under general RBI permission & FEMA guidelines, NRIs and OCIs can purchase any residential or commercial property in India without prior approval. Agricultural land and plantation property require special permits.',
  },
  {
    q: 'Can property sales proceeds be repatriated back to an NRE account abroad?',
    a: 'Yes, up to USD 1 Million per financial year can be repatriated out of NRO accounts subject to tax compliance and Form 15CA/CB documentation.',
  },
  {
    q: 'Do I need a Power of Attorney (POA) if I cannot travel to India for registry?',
    a: 'Yes, our NRI legal desk assists with POA drafting and adjudication through Indian Embassies / Consulates for seamless registry execution.',
  },
  {
    q: 'How does Sigma handle property rental & tenant management for NRI owners?',
    a: 'Our property management vertical oversees tenant vetting, rental collection, lease renewals, property upkeep, and digital reporting directly to you.',
  },
];

export function NriServicesPage() {
  const [isNriModalOpen, setIsNriModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'NRI Real Estate Services & Investment Advisory | Sigma Homes India';
  }, []);

  const nriServices = [
    { title: 'Online Consultation', desc: 'Virtual briefings on verified developments & corridor growth.', icon: Globe },
    { title: 'Virtual Site Visit', desc: 'HD 4K video walkthroughs & live interactive site inspections.', icon: Video },
    { title: 'Legal & FEMA Clearance', desc: 'FEMA compliance & NRE/NRO transaction documentation.', icon: FileCheck },
    { title: 'Property Management', desc: 'Complete tenant placement, lease management & upkeep.', icon: ShieldCheck },
  ];

  const buyingSteps = [
    { num: '01', title: 'Virtual Corridor Briefing', desc: 'Interactive video consultation on market growth, pricing trends, and title clearance.' },
    { num: '02', title: '4K Live Site Inspection', desc: 'Guided live video tour of property, construction quality, and neighborhood infrastructure.' },
    { num: '03', title: 'Digital Agreement & Legal Audit', desc: 'FEMA-compliant agreement execution with NRE/NRO remittance verification.' },
    { num: '04', title: 'Key Handover & Management', desc: 'Possession management, tenant onboarding, and asset appreciation tracking.' },
  ];

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 md:pt-40">
      {/* 1. Global NRI Hero */}
      <div className="container-content">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="eyebrow text-sigma-blue-600">Global NRI Advisory Desk</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.08]">
            Manage Your Indian Property Portfolio With Absolute Transparency.
          </h1>
          <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
            Dedicated real-estate support for Non-Resident Indians (NRIs) and OCIs seeking verified properties, FEMA compliance, and property management in Jaipur.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsNriModalOpen(true)}
              className="px-7 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <PhoneCall className="h-4 w-4" />
              Book Confidential NRI Call
            </button>
            <Link
              to="/properties"
              className="px-6 py-3.5 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl font-semibold text-sm transition-colors"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>

        {/* 2. Key NRI Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {nriServices.map((s, idx) => (
            <div key={idx} className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-3 hover-lift border-line-trace">
              <s.icon className="h-6 w-6 text-sigma-blue-700 mb-2" />
              <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">{s.title}</h3>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. NRI Investment Advantage Banner */}
      <section className="py-16 bg-white border-y border-sigma-stone-200/60">
        <div className="container-content">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="eyebrow text-sigma-blue-600">The NRI Advantage</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Why Invest in Jaipur Property as an NRI?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="text-sigma-blue-700 font-bold text-lg font-serif">High Rental Yields</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">
                Expanding IT corridors and university hubs drive consistent 4-6% rental returns and capital growth.
              </p>
            </div>

            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="text-sigma-blue-700 font-bold text-lg font-serif">Currency Advantage</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">
                Strong foreign currency exchange rate against INR provides enhanced purchasing power for luxury assets.
              </p>
            </div>

            <div className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
              <div className="text-sigma-blue-700 font-bold text-lg font-serif">100% Legal Security</div>
              <p className="text-xs text-sigma-stone-600 leading-relaxed font-sans">
                RERA-registered projects with JDA clearances guarantee legal safety and hassle-free repatriation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Remote 4-Step Buying Process */}
      <section className="py-20 bg-sigma-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container-content relative z-10 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="eyebrow text-sigma-amber-400">Remote Acquisition Protocol</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
              Seamless 4-Step NRI Purchase Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyingSteps.map((step) => (
              <div key={step.num} className="p-6 bg-white/5 border border-white/15 rounded-2xl space-y-3 backdrop-blur-xs">
                <span className="text-2xl font-black font-mono text-sigma-amber-400 block">{step.num}</span>
                <h3 className="text-lg font-bold font-serif text-white">{step.title}</h3>
                <p className="text-xs text-sigma-stone-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Properties for NRI Investors */}
      <section className="py-16 md:py-24 bg-sigma-stone-100/70">
        <div className="container-content space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-sigma-blue-600">Curated Opportunities</span>
              <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
                Top Pick Properties for Global Investors
              </h2>
            </div>
            <Link to="/properties" className="text-xs font-bold uppercase tracking-wider text-sigma-blue-700 flex items-center gap-1.5">
              <span>View All Properties</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.slice(0, 3).map((p) => (
              <div key={p.id} className="bg-white rounded-2xl border border-sigma-stone-200/80 overflow-hidden shadow-xs hover-lift">
                <img src={p.heroImage} alt={p.name} className="h-48 w-full object-cover" />
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-blue-700 bg-sigma-blue-50 px-2.5 py-0.5 rounded">
                    {p.propertyType}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">{p.name}</h3>
                  <p className="text-xs text-sigma-stone-500">{p.locality}</p>
                  <div className="pt-3 border-t border-sigma-stone-200/60 flex items-center justify-between">
                    <span className="text-sm font-bold font-serif text-sigma-graphite-900">{p.priceLabel}</span>
                    <Link to={`/projects/${p.slug}`} className="text-xs font-bold text-sigma-blue-700">
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Active Working Markets */}
      <WorkingMarkets />

      {/* 7. NRI FAQs */}
      <section className="py-16 md:py-24 bg-white border-t border-sigma-stone-200/60">
        <div className="container-content max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="eyebrow text-sigma-blue-600">Legal & FEMA Guidance</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              NRI Real Estate FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nriFaqs.map((faq, i) => (
              <div key={i} className="p-6 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/80 space-y-2">
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
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCTA />

      <UniversalLeadModal
        isOpen={isNriModalOpen}
        onClose={() => setIsNriModalOpen(false)}
        leadType="nri"
        title="NRI Property Consultation"
      />
    </div>
  );
}
