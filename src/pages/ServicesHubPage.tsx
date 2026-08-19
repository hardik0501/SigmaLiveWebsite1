import React, { useState, useEffect } from 'react';
import { servicesData } from '@/data/companyData';
import { ServiceItem } from '@/types/company';
import { ServiceCard } from '@/components/company/ServiceCard';
import { ServiceEnquiryModal } from '@/components/company/ServiceEnquiryModal';
import { ServiceProcess } from '@/components/company/ServiceProcess';
import { BusinessEcosystem } from '@/components/sections/BusinessEcosystem';
import { WorkingMarkets } from '@/components/sections/WorkingMarkets';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { CheckCircle2, Shield, HelpCircle, Phone } from 'lucide-react';

const serviceFaqs = [
  {
    q: 'Does Sigma Group provide legal title & JDA verification before project launch?',
    a: 'Yes, all residential townships and commercial projects marketed or developed by Sigma undergo 100% legal title clearance, RERA registration, and JDA approval audit.',
  },
  {
    q: 'Can NRIs get virtual video site walkthroughs and digital documentation?',
    a: 'Absolutely. We offer 4K video walkthroughs, live drone footage, digital agreement signing, and designated NRI relationship desk support.',
  },
  {
    q: 'What is the minimum holding period for Ring Road land investment corridors?',
    a: 'We recommend a 3 to 5-year investment horizon for strategic Jaipur corridors to maximize capital appreciation.',
  },
  {
    q: 'Do you offer property resale & buyer placement services for existing owners?',
    a: 'Yes, our Sell Property & Resale vertical assists property owners with market valuation, buyer positioning, and seamless closing.',
  },
];

export function ServicesHubPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    document.title = 'Real Estate Services & Solutions | Sigma Homes India';
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 md:pt-40">
      {/* 1. Services Hero */}
      <div className="container-content">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Integrated Real Estate Ecosystem</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            End-to-End Property & Investment Services
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            From residential development and investment research to property management, commercial leasing, and legal title verification, Sigma Homes provides complete real estate solutions.
          </p>
        </div>

        {/* 2. Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xs mb-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Experience</span>
            <span className="text-2xl font-bold font-serif text-sigma-graphite-900">25+ Years</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Title Verification</span>
            <span className="text-2xl font-bold font-serif text-sigma-green-700">100% RERA/JDA</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Consulted Clients</span>
            <span className="text-2xl font-bold font-serif text-sigma-blue-700">12,000+</span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Active Corridors</span>
            <span className="text-2xl font-bold font-serif text-sigma-amber-600">6 Key Hubs</span>
          </div>
        </div>

        {/* 3. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* 4. Structured Service Execution Process */}
      <ServiceProcess />

      {/* 5. Business Ecosystem Divisions */}
      <BusinessEcosystem />

      {/* 6. Active Market Corridors */}
      <WorkingMarkets />

      {/* 7. Service FAQs */}
      <section className="py-16 md:py-24 bg-white border-t border-sigma-stone-200/60">
        <div className="container-content max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="eyebrow text-sigma-blue-600">Client Clarifications</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
              Frequently Asked Service Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceFaqs.map((faq, i) => (
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

      <ServiceEnquiryModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
