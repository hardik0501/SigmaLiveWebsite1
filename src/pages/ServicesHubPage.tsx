import React, { useState, useEffect } from 'react';
import { servicesData } from '@/data/companyData';
import { ServiceItem } from '@/types/company';
import { ServiceCard } from '@/components/company/ServiceCard';
import { ServiceEnquiryModal } from '@/components/company/ServiceEnquiryModal';
import { BusinessEcosystem } from '@/components/sections/BusinessEcosystem';

export function ServicesHubPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    document.title = 'Real Estate Services & Solutions | Sigma Homes India';
  }, []);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Integrated Ecosystem</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            More Than Property Sales.
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            From residential development and investment research to property management, commercial leasing, and legal title verification, Sigma Homes provides end-to-end real estate solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Business Divisions Section */}
      <BusinessEcosystem />

      <ServiceEnquiryModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
