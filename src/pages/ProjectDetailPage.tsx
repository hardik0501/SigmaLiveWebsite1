import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import { Project } from '@/types/project';
import { ProjectHero } from '@/components/project-detail/ProjectHero';
import { ProjectQuickFacts } from '@/components/project-detail/ProjectQuickFacts';
import { ProjectOverviewSection } from '@/components/project-detail/ProjectOverviewSection';
import { ProjectHighlights } from '@/components/project-detail/ProjectHighlights';
import { ProjectConfigurations } from '@/components/project-detail/ProjectConfigurations';
import { ProjectPricingSection } from '@/components/project-detail/ProjectPricingSection';
import { ProjectAmenitiesSection } from '@/components/project-detail/ProjectAmenitiesSection';
import { ProjectFeatureSection } from '@/components/project-detail/ProjectFeatureSection';
import { ProjectGallery } from '@/components/project-detail/ProjectGallery';
import { ProjectFloorPlans } from '@/components/project-detail/ProjectFloorPlans';
import { ProjectLocationSection } from '@/components/project-detail/ProjectLocationSection';
import { ProjectEmiCalculator } from '@/components/project-detail/ProjectEmiCalculator';
import { ProjectTrustFaq } from '@/components/project-detail/ProjectTrustFaq';
import { ProjectStickyCta } from '@/components/project-detail/ProjectStickyCta';
import { SiteVisitModal } from '@/components/project-detail/SiteVisitModal';
import { EnquiryModal } from '@/components/discovery/EnquiryModal';
import { PropertyCard } from '@/components/discovery/PropertyCard';
import { ProjectQuickView } from '@/components/discovery/ProjectQuickView';
import { ArrowLeft, SearchX, Calendar, ArrowRight } from 'lucide-react';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo(() => {
    return projectsData.find((p) => p.slug === slug || p.id === slug);
  }, [slug]);

  const [showSticky, setShowSticky] = useState(false);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isPriceRequestOpen, setIsPriceRequestOpen] = useState(false);
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);

  // Scroll detection for sticky header bar
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO document title
  useEffect(() => {
    if (project) {
      document.title = `${project.name} | ${project.locality} | Sigma Homes`;
    } else {
      document.title = 'Project Not Found | Sigma Homes';
    }
  }, [project]);

  // Related Projects (same locality or category)
  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return projectsData
      .filter((p) => p.id !== project.id && (p.locality === project.locality || p.propertyType === project.propertyType))
      .slice(0, 3);
  }, [project]);

  // 404 Project Not Found Handler
  if (!project) {
    return (
      <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-4 p-8 bg-white border border-sigma-stone-200/80 rounded-3xl shadow-sm">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-sigma-stone-100 flex items-center justify-center text-sigma-stone-500">
            <SearchX className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-sigma-graphite-900">
            Project Not Found
          </h1>
          <p className="text-xs text-sigma-stone-500 leading-relaxed">
            The project URL you requested does not exist or has been updated. Explore our full portfolio of residential and commercial properties.
          </p>
          <div className="pt-2">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              View All Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pb-20 md:pb-0">
      {/* Dynamic Project Hero */}
      <ProjectHero
        project={project}
        onBookSiteVisit={() => setIsSiteVisitOpen(true)}
        onRequestPrice={() => setIsPriceRequestOpen(true)}
      />

      {/* Dynamic Quick Facts Bar */}
      <ProjectQuickFacts project={project} />

      {/* Editorial Overview Section */}
      <ProjectOverviewSection project={project} />

      {/* Visual Highlights */}
      <ProjectHighlights project={project} />

      {/* Available Configurations & Comparison */}
      <ProjectConfigurations
        project={project}
        onBookSiteVisit={() => setIsSiteVisitOpen(true)}
      />

      {/* Pricing & Commercial Structure */}
      <ProjectPricingSection
        project={project}
        onRequestPrice={() => setIsPriceRequestOpen(true)}
      />

      {/* Categorized Amenities */}
      <ProjectAmenitiesSection project={project} />

      {/* Flagship Lifestyle Feature */}
      <ProjectFeatureSection project={project} />

      {/* Photo Gallery & Lightbox */}
      <ProjectGallery project={project} />

      {/* Floor Plans Viewer */}
      <ProjectFloorPlans
        project={project}
        onBookSiteVisit={() => setIsSiteVisitOpen(true)}
      />

      {/* Neighborhood & Location Intelligence */}
      <ProjectLocationSection project={project} />

      {/* Interactive Home Loan EMI Calculator */}
      <ProjectEmiCalculator project={project} />

      {/* RERA Approvals & Project FAQs */}
      <ProjectTrustFaq project={project} />

      {/* Related Properties */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-sigma-stone-100/60 border-b border-sigma-stone-200/60">
          <div className="container-content">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="eyebrow text-sigma-blue-600">Similar Portfolio</span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-sigma-graphite-900 mt-1">
                  You May Also Like
                </h2>
              </div>
              <Link
                to={`/properties?location=${encodeURIComponent(project.locality)}`}
                className="text-xs font-bold text-sigma-blue-700 hover:text-sigma-blue-900 transition-colors flex items-center gap-1"
              >
                Explore More in {project.locality}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <PropertyCard
                  key={p.id}
                  project={p}
                  onQuickView={(target) => setQuickViewProject(target)}
                  onEnquire={(target) => setIsPriceRequestOpen(true)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing Call To Action Section */}
      <section className="py-20 bg-sigma-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container-content relative z-10 max-w-2xl space-y-4">
          <span className="eyebrow text-sigma-amber-400">Ready to Experience It?</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
            Schedule Your Private Site Tour
          </h2>
          <p className="text-sm text-sigma-stone-300 leading-relaxed">
            See the space, inspect the location, and understand why {project.name} is the ideal home for your family.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => setIsSiteVisitOpen(true)}
              className="px-8 py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book a Site Visit
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Bar & Mobile Action Footer */}
      <ProjectStickyCta
        project={project}
        onBookSiteVisit={() => setIsSiteVisitOpen(true)}
        onRequestPrice={() => setIsPriceRequestOpen(true)}
        showSticky={showSticky}
      />

      {/* Site Visit Modal */}
      <SiteVisitModal
        project={project}
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
      />

      {/* Price Request Modal */}
      <EnquiryModal
        project={project}
        isOpen={isPriceRequestOpen}
        onClose={() => setIsPriceRequestOpen(false)}
      />

      {/* Quick View Modal for Related Projects */}
      <ProjectQuickView
        project={quickViewProject}
        onClose={() => setQuickViewProject(null)}
        onEnquire={() => setIsPriceRequestOpen(true)}
      />
    </div>
  );
}
