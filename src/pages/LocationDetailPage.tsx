import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { locationsData } from '@/data/locationsData';
import { projectsData } from '@/data/projectsData';
import { Project } from '@/types/project';

import { LocationBreadcrumbs } from '@/components/location/LocationBreadcrumbs';
import { LocationHero } from '@/components/location/LocationHero';
import { LocationSnapshot } from '@/components/location/LocationSnapshot';
import { LocationOverview } from '@/components/location/LocationOverview';
import { LocationConnectivity } from '@/components/location/LocationConnectivity';
import { LocationInfrastructure } from '@/components/location/LocationInfrastructure';
import { LocationPropertyTypes } from '@/components/location/LocationPropertyTypes';
import { LocationSigmaProjects } from '@/components/location/LocationSigmaProjects';
import { LocationInvestment } from '@/components/location/LocationInvestment';
import { LocationFaq } from '@/components/location/LocationFaq';
import { RelatedLocations } from '@/components/location/RelatedLocations';
import { LocationEnquiryModal } from '@/components/location/LocationEnquiryModal';
import { ProjectQuickView } from '@/components/discovery/ProjectQuickView';
import { EnquiryModal } from '@/components/discovery/EnquiryModal';

import { SearchX, ArrowLeft } from 'lucide-react';

export function LocationDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find location by slug or aliasSlugs
  const location = useMemo(() => {
    if (!slug) return null;
    const cleanSlug = slug.toLowerCase();
    return locationsData.find(
      (l) =>
        l.slug.toLowerCase() === cleanSlug ||
        l.aliasSlugs?.some((alias) => alias.toLowerCase() === cleanSlug) ||
        l.id.toLowerCase() === cleanSlug
    );
  }, [slug]);

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);
  const [enquiryProject, setEnquiryProject] = useState<Project | null>(null);

  // Derive projects in this location from projectsData
  const locationProjects = useMemo(() => {
    if (!location) return [];
    const locName = location.name.toLowerCase();
    return projectsData.filter(
      (p) =>
        p.locality.toLowerCase().includes(locName) ||
        p.location.toLowerCase().includes(locName)
    );
  }, [location]);

  // SEO Document Title
  useEffect(() => {
    if (location) {
      document.title = location.seo.title;
    } else {
      document.title = 'Location Not Found | Sigma Homes';
    }
  }, [location]);

  if (!location) {
    return (
      <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-4 p-8 bg-white border border-sigma-stone-200/80 rounded-3xl shadow-sm">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-sigma-stone-100 flex items-center justify-center text-sigma-stone-500">
            <SearchX className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold font-serif text-sigma-graphite-900">
            Location Not Found
          </h1>
          <p className="text-xs text-sigma-stone-500 leading-relaxed">
            The location URL you requested does not exist or has been updated. Explore our full directory of real estate locations in Jaipur and NCR.
          </p>
          <div className="pt-2">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Explore All Locations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pb-16 md:pb-0">
      {/* Accessible SEO Breadcrumbs */}
      <LocationBreadcrumbs city={location.city} locationName={location.name} />

      {/* Hero */}
      <LocationHero
        location={location}
        projectCount={locationProjects.length}
        onEnquire={() => setIsLocationModalOpen(true)}
      />

      {/* Information Strip Snapshot */}
      <LocationSnapshot
        location={location}
        projectCount={locationProjects.length}
      />

      {/* Neighborhood Overview & Advantages */}
      <LocationOverview location={location} />

      {/* Road Connectivity & Expressways */}
      <LocationConnectivity location={location} />

      {/* Local Infrastructure Grid */}
      <LocationInfrastructure location={location} />

      {/* Property Categories in Location */}
      <LocationPropertyTypes location={location} />

      {/* Filtered Sigma Projects Showcase */}
      <LocationSigmaProjects
        location={location}
        projects={locationProjects}
        onQuickView={(p) => setQuickViewProject(p)}
        onEnquire={(p) => setEnquiryProject(p)}
      />

      {/* Commercial & Investment Perspective */}
      <LocationInvestment location={location} />

      {/* FAQ Accordion */}
      <LocationFaq location={location} />

      {/* Nearby Internal SEO Locations */}
      <RelatedLocations
        currentSlug={location.slug}
        relatedSlugs={location.relatedLocationSlugs}
      />

      {/* Contextual Location Enquiry Modal */}
      <LocationEnquiryModal
        location={location}
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />

      {/* Quick View Modal */}
      <ProjectQuickView
        project={quickViewProject}
        onClose={() => setQuickViewProject(null)}
        onEnquire={(p) => setEnquiryProject(p)}
      />

      {/* Project Enquiry Modal */}
      <EnquiryModal
        project={enquiryProject}
        onClose={() => setEnquiryProject(null)}
      />
    </div>
  );
}
