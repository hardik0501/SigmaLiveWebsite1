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

  if (service.id === 'property-consulting') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#090F1C] via-[#0D1627] to-[#060A12] text-white pb-20 relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sigma-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sigma-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container-content relative z-10">
            <div className="mb-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-100/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Services
              </Link>
            </div>

            <div className="max-w-4xl space-y-6">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-widest text-sm uppercase block">
                RESIDENTIAL ADVISORY
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.08]">
                Residential Property & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sigma-amber-400 to-amber-300">Advisory Services</span>
              </h1>

              <p className="text-lg md:text-xl text-sigma-blue-100/90 font-sans leading-relaxed max-w-3xl">
                End-to-end guidance for acquiring luxury apartments, independent villas, and JDA-approved plots across Jaipur’s top growth corridors.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-8 py-4 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-navy-950 rounded-xl font-bold text-base shadow-lg shadow-sigma-amber-500/10 transition-all duration-300"
                >
                  Talk to a Property Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-20 bg-white/[0.01] border-y border-white/5 relative z-10">
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">
                  SERVICE OVERVIEW
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
                  Better Decisions Begin With Better Guidance
                </h2>
                <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans pt-2">
                  Sigma Homes provides personalized, data-backed advisory to simplify your property search. From identifying verified residential projects along Queens Road, VT Road, and Ajmer Road to executing legal checks, we ensure a seamless buying experience.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-bold font-serif text-white mb-2">
                  What We Deliver
                </h3>

                <div className="space-y-4">
                  {[
                    { title: 'Apartment & Villa Selection', desc: 'Tailored shortlisting of 2, 3 & 4 BHK residences built for modern family living.' },
                    { title: 'JDA Plot Acquisition', desc: 'Verified, clear-title residential land parcels ideal for custom home building or capital growth.' },
                    { title: 'End-to-End Buyer Support', desc: 'Complete assistance across property visits, legal documentation, and home loan processing.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-white/[0.03] rounded-2xl border border-white/10 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-sigma-amber-400/10 flex items-center justify-center shrink-0 text-sigma-amber-400 font-bold text-sm">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white mb-1 font-serif">{item.title}</h4>
                        <p className="text-xs md:text-sm text-sigma-blue-100/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-white/[0.02] border-b border-white/10 relative z-10">
          <div className="container-content">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                How We Work
              </h2>
              <p className="text-base md:text-lg text-sigma-blue-100/80 leading-relaxed font-sans">
                A transparent step-by-step process designed to ensure clarity, compliance, and optimal results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Requirement Mapping', desc: 'Evaluating your budget, preferred location, space needs, and lifestyle goals.' },
                { step: '02', title: 'Unit & Plot Shortlisting', desc: 'Curating verified inventory with clear titles and optimal infrastructure connectivity.' },
                { step: '03', title: 'Site Visits & Due Diligence', desc: 'Guiding you through physical tours, builder credentials, and legal verification.' },
                { step: '04', title: 'Seamless Closing', desc: 'Handling agreements, registration, and paperwork for hassle-free ownership.' }
              ].map((item) => (
                <div key={item.step} className="p-8 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4 hover:border-white/10 transition-colors">
                  <span className="text-lg font-extrabold text-sigma-amber-400 block font-mono">{item.step}</span>
                  <h4 className="text-xl font-bold text-white font-serif">{item.title}</h4>
                  <p className="text-sm md:text-base text-sigma-blue-100/60 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Sigma Advantage Section */}
        <section className="py-20 bg-white/[0.01] relative z-10">
          <div className="container-content">
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">The Sigma Advantage</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Why Choose Sigma?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '100% Verified Titles', desc: 'Comprehensive legal checks on every property and land parcel.' },
                { title: 'Prime Road Frontage', desc: 'Properties located in high-growth corridors like Mansarovar, Vaishali Nagar, and Jagatpura.' },
                { title: 'Transparent Pricing', desc: 'Direct builder rates with zero hidden costs or surprises.' }
              ].map((benefit, idx) => (
                <div key={idx} className="p-8 bg-white/[0.03] rounded-3xl border border-white/5 space-y-4 hover:border-white/10 transition-colors">
                  <ShieldCheck className="h-7 w-7 text-sigma-amber-400" />
                  <h3 className="text-lg font-bold font-serif text-white leading-snug">{benefit.title}</h3>
                  <p className="text-sm text-sigma-blue-100/60 leading-relaxed font-sans">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-white/[0.02] border-t border-white/10 relative z-10">
            <div className="container-content">
              <div className="max-w-2xl mb-10">
                <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Complementary Solutions</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mt-1">
                  Related Services
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.slug}`}
                    className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                  >
                    <h3 className="text-base md:text-lg font-bold text-white font-serif">{rel.name}</h3>
                    <p className="text-xs md:text-sm text-sigma-blue-100/60 mt-2 line-clamp-2 leading-relaxed">{rel.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ServiceEnquiryModal
          service={service}
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
        />
      </div>
    );
  }

  if (service.id === 'investment-advisory') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#090F1C] via-[#0D1627] to-[#060A12] text-white pb-20 relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sigma-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sigma-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container-content relative z-10">
            <div className="mb-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-100/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Services
              </Link>
            </div>

            <div className="max-w-4xl space-y-6">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-widest text-sm uppercase block">
                REAL ESTATE ADVISORY
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.08]">
                Strategic Residential & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sigma-amber-400 to-amber-300">Land Wealth Creation</span>
              </h1>

              <p className="text-lg md:text-xl text-sigma-blue-100/90 font-sans leading-relaxed max-w-3xl">
                Maximize your capital returns with data-driven residential property insights and JDA plot selection across Jaipur's top growth corridors.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-8 py-4 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-navy-950 rounded-xl font-bold text-base shadow-lg shadow-sigma-amber-500/10 transition-all duration-300"
                >
                  Schedule an Advisory Call
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-20 bg-white/[0.01] border-y border-white/5 relative z-10">
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">
                  INVESTMENT ADVANTAGE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
                  Data-Backed Guidance for Maximum Growth
                </h2>
                <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans pt-2">
                  Navigating real estate investments requires local market knowledge, infrastructural foresight, and transparent asset evaluation. We help home buyers and private investors build secure, high-performing real estate portfolios tailored to their financial goals.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-bold font-serif text-white mb-2">
                  What We Deliver
                </h3>

                <div className="space-y-4">
                  {[
                    { title: 'High-Growth Corridor Mapping', desc: "Targeted investment strategies around Ring Road, Ajmer Road, and Jaipur's 200 Ft bypass belts." },
                    { title: 'Pre-Launch Access', desc: 'Early allocation and competitive pricing on verified residential projects by Sigma Group.' },
                    { title: 'Rental Income Yield Analysis', desc: 'In-depth tenant demographic profiling for properties near Sitapura IT hubs and educational zones.' },
                    { title: 'End-to-End Asset Management', desc: 'Full support across legal title verification, agreement execution, and resale management.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-white/[0.03] rounded-2xl border border-white/10 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-sigma-amber-400/10 flex items-center justify-center shrink-0 text-sigma-amber-400 font-bold text-sm">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white mb-1 font-serif">{item.title}</h4>
                        <p className="text-xs md:text-sm text-sigma-blue-100/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Pathways Section */}
        <section className="py-20 bg-white/[0.02] border-b border-white/10 relative z-10">
          <div className="container-content">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Curated Portfolios</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                Investment Pathways
              </h2>
              <p className="text-base md:text-lg text-sigma-blue-100/80 leading-relaxed font-sans">
                Select from our primary structural asset classes matching your target holding timelines and returns profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/5 space-y-6 hover:border-sigma-amber-500/30 transition-all duration-300 group">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-sigma-amber-500/10 text-sigma-amber-400 border border-sigma-amber-500/20 px-3 py-1 rounded-full w-fit block">Pathway 01</span>
                <h3 className="text-xl font-bold font-serif text-white">High-Yield Residential Apartments</h3>
                <div className="space-y-3 text-sm text-sigma-blue-100/70 leading-relaxed">
                  <p><strong>Focus:</strong> 2 & 3 BHK modern apartments in high-demand residential hubs.</p>
                  <p><strong>Locations:</strong> Mansarovar Extension, Jagatpura, and Vaishali Nagar.</p>
                  <p><strong>Target Outcome:</strong> Steady rental income paired with consistent capital appreciation.</p>
                </div>
              </div>

              <div className="p-8 bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/5 space-y-6 hover:border-sigma-amber-500/30 transition-all duration-300 group">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-sigma-amber-500/10 text-sigma-amber-400 border border-sigma-amber-500/20 px-3 py-1 rounded-full w-fit block">Pathway 02</span>
                <h3 className="text-xl font-bold font-serif text-white">High-Appreciation JDA Land Plots</h3>
                <div className="space-y-3 text-sm text-sigma-blue-100/70 leading-relaxed">
                  <p><strong>Focus:</strong> Clear-title residential plots in rapidly expanding infrastructure belts.</p>
                  <p><strong>Locations:</strong> Kalwar Road, Rampura 200 Ft Road, and Ajmer Road corridor.</p>
                  <p><strong>Target Outcome:</strong> High long-term land value growth and custom home building flexibility.</p>
                </div>
              </div>

              <div className="p-8 bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/5 space-y-6 hover:border-sigma-amber-500/30 transition-all duration-300 group">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-sigma-amber-500/10 text-sigma-amber-400 border border-sigma-amber-500/20 px-3 py-1 rounded-full w-fit block">Pathway 03</span>
                <h3 className="text-xl font-bold font-serif text-white">Exclusive Pre-Launch Opportunities</h3>
                <div className="space-y-3 text-sm text-sigma-blue-100/70 leading-relaxed">
                  <p><strong>Focus:</strong> Early-phase residential developments built for strategic investors.</p>
                  <p><strong>Locations:</strong> Prime Jaipur micro-markets.</p>
                  <p><strong>Target Outcome:</strong> Lower entry pricing with maximum value creation upon completion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Investment Process Section */}
        <section className="py-20 bg-white/[0.01] border-b border-white/5 relative z-10">
          <div className="container-content">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                3-Step Investment Process
              </h2>
              <p className="text-base md:text-lg text-sigma-blue-100/80 leading-relaxed font-sans">
                Our systematic transaction and compliance pipeline optimized for target returns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Goal Assessment', desc: 'Evaluating your investment horizon, risk preference, and return expectations (rental yield vs. capital growth).' },
                { step: '02', title: 'Corridor & Project Selection', desc: 'Shortlisting verified residential projects and plots backed by infrastructure expansion plans.' },
                { step: '03', title: 'Acquisition & Management', desc: 'Seamless legal checks, complete paperwork processing, and future resale or tenant sourcing support.' }
              ].map((item) => (
                <div key={item.step} className="p-8 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4 hover:border-white/10 transition-colors">
                  <span className="text-lg font-extrabold text-sigma-amber-400 block font-mono">{item.step}</span>
                  <h4 className="text-xl font-bold text-white font-serif">{item.title}</h4>
                  <p className="text-sm md:text-base text-sigma-blue-100/60 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-white/[0.02] relative z-10">
            <div className="container-content">
              <div className="max-w-2xl mb-10">
                <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Complementary Solutions</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mt-1">
                  Related Services
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.slug}`}
                    className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                  >
                    <h3 className="text-base md:text-lg font-bold text-white font-serif">{rel.name}</h3>
                    <p className="text-xs md:text-sm text-sigma-blue-100/60 mt-2 line-clamp-2 leading-relaxed">{rel.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ServiceEnquiryModal
          service={service}
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
        />
      </div>
    );
  }

  // Default Services detail template (Dark premium matching theme)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090F1C] via-[#0D1627] to-[#060A12] text-white pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sigma-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-sigma-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Service Hero */}
      <section className="relative pt-32 pb-20 md:pt-40">
        <div className="container-content relative z-10">
          <div className="mb-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-100/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>
          </div>

          <div className="max-w-4xl space-y-6">
            <span className="eyebrow text-sigma-amber-400 font-semibold tracking-widest text-sm uppercase block">
              {service.category}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-[1.08]">
              {service.name}
            </h1>

            <p className="text-lg md:text-xl text-sigma-blue-100/90 font-sans leading-relaxed max-w-3xl">
              {service.tagline}
            </p>

            <div className="pt-4">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-8 py-4 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-navy-950 rounded-xl font-bold text-base shadow-lg shadow-sigma-amber-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Briefcase className="h-5 w-5" />
                Talk to a {service.name} Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview & What We Do */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Service Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
                Better Decisions Begin With Better Guidance
              </h2>
              <p className="text-sm md:text-base text-sigma-blue-100/70 leading-relaxed font-sans pt-2">
                {service.overview}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold font-serif text-white mb-2">
                What We Deliver
              </h3>

              <div className="space-y-4">
                {service.whatWeDo.map((item, idx) => (
                  <div key={idx} className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-sigma-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-sigma-blue-100/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <section className="py-20 bg-white/[0.02] border-b border-white/10 relative z-10">
          <div className="container-content">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                How We Work
              </h2>
              <p className="text-base md:text-lg text-sigma-blue-100/80 leading-relaxed font-sans">
                A transparent step-by-step process designed to ensure clarity, compliance, and optimal results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div key={step.stepNumber} className="p-8 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4 hover:border-white/10 transition-colors">
                  <span className="text-lg font-extrabold text-sigma-amber-400 block font-mono">0{step.stepNumber}</span>
                  <h4 className="text-xl font-bold text-white font-serif">{step.title}</h4>
                  <p className="text-sm md:text-base text-sigma-blue-100/60 leading-relaxed font-sans">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-20 bg-white/[0.01] border-b border-white/5 relative z-10">
        <div className="container-content">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">The Sigma Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
              Why Choose Sigma for {service.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-white/[0.03] rounded-3xl border border-white/5 space-y-4 hover:border-white/10 transition-colors">
                <ShieldCheck className="h-7 w-7 text-sigma-amber-400" />
                <h3 className="text-base md:text-lg font-bold font-serif text-white leading-snug">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-white/[0.02] relative z-10">
          <div className="container-content">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow text-sigma-amber-400 font-semibold tracking-wider text-xs uppercase">Complementary Solutions</span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mt-1">
                Related Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                >
                  <h3 className="text-base md:text-lg font-bold text-white font-serif">{rel.name}</h3>
                  <p className="text-xs md:text-sm text-sigma-blue-100/60 mt-2 line-clamp-2 leading-relaxed">{rel.tagline}</p>
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
