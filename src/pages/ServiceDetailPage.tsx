import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '@/data/companyData';
import { ServiceItem } from '@/types/company';
import { ServiceProcess } from '@/components/company/ServiceProcess';
import { ServiceEnquiryModal } from '@/components/company/ServiceEnquiryModal';
import { ArrowLeft, SearchX, CheckCircle2, Users, ShieldCheck, Briefcase } from 'lucide-react';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const service = useMemo(() => {
    return servicesData.find((s) => s.slug === slug || s.id === slug);
  }, [slug]);

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | Real Estate Services | Sigma Homes`;
    } else {
      document.title = 'Service Not Found | Sigma Homes';
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-4 p-8 bg-white border border-sigma-stone-200/80 rounded-3xl shadow-sm">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-sigma-stone-100 flex items-center justify-center text-sigma-stone-500">
            <SearchX className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-sigma-graphite-900">
            Service Guide Not Found
          </h1>
          <p className="text-xs text-sigma-stone-500 leading-relaxed">
            The service guide you requested does not exist or has been updated.
          </p>
          <div className="pt-2">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Related Services
  const relatedServices = servicesData.filter(
    (s) => s.id !== service.id && service.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pb-20">
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-sigma-graphite-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/70 to-transparent" />
        </div>

        <div className="container-content relative z-10">
          <div className="mb-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-stone-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-sigma-blue-700 text-white text-xs font-bold rounded-full">
              {service.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
              {service.name}
            </h1>

            <p className="text-lg text-sigma-stone-200 font-sans leading-relaxed">
              {service.tagline}
            </p>

            <div className="pt-4">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-8 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Talk to a {service.name} Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview & What We Do */}
      <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="eyebrow text-sigma-blue-600">Service Overview</span>
              <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900">
                Better Decisions Begin With Better Guidance
              </h2>
              <p className="text-sm text-sigma-stone-600 leading-relaxed font-sans pt-2">
                {service.overview}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold font-serif text-sigma-graphite-900 mb-4">
                What We Deliver
              </h3>

              <div className="space-y-3">
                {service.whatWeDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-sigma-stone-50 rounded-2xl border border-sigma-stone-200/60">
                    <CheckCircle2 className="h-5 w-5 text-sigma-green-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-sigma-graphite-900 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ServiceProcess steps={service.process} />

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
        <div className="container-content">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow text-sigma-blue-600">The Sigma Advantage</span>
            <h2 className="text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
              Why Choose Sigma for {service.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-2xs space-y-2">
                <ShieldCheck className="h-6 w-6 text-sigma-blue-700 mb-2" />
                <h3 className="text-base font-bold font-serif text-sigma-graphite-900">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white border-b border-sigma-stone-200/60">
          <div className="container-content">
            <div className="max-w-2xl mb-8">
              <span className="eyebrow text-sigma-blue-600">Complementary Services</span>
              <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1">
                Related Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="p-5 bg-sigma-stone-50 border border-sigma-stone-200/80 rounded-2xl hover:bg-sigma-blue-50/60 transition-colors"
                >
                  <h3 className="text-base font-bold text-sigma-graphite-900">{rel.name}</h3>
                  <p className="text-xs text-sigma-stone-600 mt-1 line-clamp-2">{rel.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Modal */}
      <ServiceEnquiryModal
        service={service}
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
