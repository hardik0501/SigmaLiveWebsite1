import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterState, Project, SortOption } from '@/types/project';
import { projectsData } from '@/data/projectsData';
import { PropertiesHero } from '@/components/discovery/PropertiesHero';
import { FilterPanel } from '@/components/discovery/FilterPanel';
import { FilterDrawer } from '@/components/discovery/FilterDrawer';
import { ActiveFilters } from '@/components/discovery/ActiveFilters';
import { PropertyResultsHeader } from '@/components/discovery/PropertyResultsHeader';
import { PropertyGrid } from '@/components/discovery/PropertyGrid';
import { EmptyState } from '@/components/discovery/EmptyState';
import { ProjectQuickView } from '@/components/discovery/ProjectQuickView';
import { EnquiryModal } from '@/components/discovery/EnquiryModal';
import { SelectedProjects } from '@/components/discovery/SelectedProjects';
import { RelatedDiscovery } from '@/components/discovery/RelatedDiscovery';

export function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filter state from URL search params
  const [filters, setFilters] = useState<FilterState>(() => ({
    search: searchParams.get('search') || '',
    locality: searchParams.get('location') || searchParams.get('locality') || '',
    propertyType: searchParams.get('type') || '',
    bhk: searchParams.get('bhk') || '',
    minPrice: Number(searchParams.get('minPrice')) || 0,
    maxPrice: Number(searchParams.get('maxPrice')) || 0,
    minArea: Number(searchParams.get('minArea')) || 0,
    maxArea: Number(searchParams.get('maxArea')) || 0,
    status: searchParams.get('status') || '',
    intent: searchParams.get('intent') || '',
    sort: (searchParams.get('sort') as SortOption) || 'recommended',
  }));

  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);
  const [enquiryProject, setEnquiryProject] = useState<Project | null>(null);

  // Synchronize state changes to URL search params
  useEffect(() => {
    const params: Record<string, string> = {};
    if (filters.search) params.search = filters.search;
    if (filters.locality) params.location = filters.locality;
    if (filters.propertyType) params.type = filters.propertyType;
    if (filters.bhk) params.bhk = filters.bhk;
    if (filters.minPrice > 0) params.minPrice = String(filters.minPrice);
    if (filters.maxPrice > 0) params.maxPrice = String(filters.maxPrice);
    if (filters.minArea > 0) params.minArea = String(filters.minArea);
    if (filters.maxArea > 0) params.maxArea = String(filters.maxArea);
    if (filters.status) params.status = filters.status;
    if (filters.intent) params.intent = filters.intent;
    if (filters.sort !== 'recommended') params.sort = filters.sort;

    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Document Title for SEO
  useEffect(() => {
    document.title = 'Properties | Sigma Homes India';
  }, []);

  const handleFilterChange = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const handleRemoveFilter = (key: keyof FilterState) => {
    setFilters((prev) => ({
      ...prev,
      [key]: key === 'sort' ? 'recommended' : key.includes('Price') || key.includes('Area') ? 0 : '',
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      locality: '',
      propertyType: '',
      bhk: '',
      minPrice: 0,
      maxPrice: 0,
      minArea: 0,
      maxArea: 0,
      status: '',
      intent: '',
      sort: 'recommended',
    });
  };

  // Filter & Sort Logic
  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project) => {
        // Keyword Search
        if (filters.search) {
          const q = filters.search.toLowerCase();
          const matchName = project.name.toLowerCase().includes(q);
          const matchLoc = project.location.toLowerCase().includes(q);
          const matchUsp = project.usp.toLowerCase().includes(q);
          if (!matchName && !matchLoc && !matchUsp) return false;
        }

        // Locality
        if (filters.locality && project.locality.toLowerCase() !== filters.locality.toLowerCase()) {
          return false;
        }

        // Property Type
        if (filters.propertyType && project.propertyType.toLowerCase() !== filters.propertyType.toLowerCase()) {
          return false;
        }

        // Configuration (BHK)
        if (filters.bhk && !project.configurations.includes(filters.bhk)) {
          return false;
        }

        // Status
        if (filters.status && project.status !== filters.status) {
          return false;
        }

        // Buyer Intent Tag
        if (filters.intent && !project.tags.includes(filters.intent as any)) {
          return false;
        }

        // Min / Max Price
        if (filters.minPrice > 0 && project.priceFrom < filters.minPrice) {
          return false;
        }
        if (filters.maxPrice > 0 && project.priceFrom > filters.maxPrice) {
          return false;
        }

        // Min / Max Area
        if (filters.minArea > 0 && project.areaFrom < filters.minArea) {
          return false;
        }
        if (filters.maxArea > 0 && (project.areaTo || project.areaFrom) > filters.maxArea) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sort === 'price-asc') return a.priceFrom - b.priceFrom;
        if (filters.sort === 'price-desc') return b.priceFrom - a.priceFrom;
        if (filters.sort === 'area-asc') return a.areaFrom - b.areaFrom;
        if (filters.sort === 'area-desc') return b.areaFrom - a.areaFrom;
        if (filters.sort === 'newest') return a.status === 'new-launch' ? -1 : 1;
        // Default recommended / priority
        return a.priority - b.priority;
      });
  }, [filters]);

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900">
      {/* Editorial Hero & Search Bar */}
      <PropertiesHero
        filters={filters}
        onFilterChange={handleFilterChange}
        onToggleAdvanced={() => setIsAdvancedOpen(!isAdvancedOpen)}
        isAdvancedOpen={isAdvancedOpen}
        totalResults={filteredProjects.length}
      />

      {/* Advanced Desktop Filter Accordion */}
      <FilterPanel
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        isOpen={isAdvancedOpen}
      />

      {/* Main Results Container */}
      <main id="discovery-results" className="container-content py-12 md:py-16 scroll-mt-24">
        {/* Selected / Featured Top Projects Section (visible when no heavy filter is active) */}
        {!filters.search && !filters.locality && !filters.propertyType && (
          <SelectedProjects
            projects={projectsData}
            onQuickView={(p) => setQuickViewProject(p)}
            onEnquire={(p) => setEnquiryProject(p)}
          />
        )}

        {/* Results Header Controls */}
        <PropertyResultsHeader
          filters={filters}
          totalCount={filteredProjects.length}
          onSortChange={(sort) => handleFilterChange({ sort })}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
        />

        {/* Active Filter Chips */}
        <ActiveFilters
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleResetFilters}
        />

        {/* Results Grid or Empty State */}
        <div className="mt-8">
          {filteredProjects.length > 0 ? (
            <PropertyGrid
              projects={filteredProjects}
              onQuickView={(p) => setQuickViewProject(p)}
              onEnquire={(p) => setEnquiryProject(p)}
              viewMode={viewMode}
            />
          ) : (
            <EmptyState
              onClearFilters={handleResetFilters}
              suggestedProjects={projectsData.slice(0, 3)}
              onQuickView={(p) => setQuickViewProject(p)}
              onEnquire={(p) => setEnquiryProject(p)}
            />
          )}
        </div>

        {/* Bottom Internal Discovery Links */}
        <RelatedDiscovery
          onSelectLocality={(locality) => handleFilterChange({ locality })}
          onSelectPropertyType={(propertyType) => handleFilterChange({ propertyType })}
        />
      </main>

      {/* Modals & Drawers */}
      <ProjectQuickView
        project={quickViewProject}
        onClose={() => setQuickViewProject(null)}
        onEnquire={(p) => setEnquiryProject(p)}
      />

      <EnquiryModal
        project={enquiryProject}
        onClose={() => setEnquiryProject(null)}
      />

      <FilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        totalResults={filteredProjects.length}
      />
    </div>
  );
}
