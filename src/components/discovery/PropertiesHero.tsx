import React from 'react';
import { motion } from 'framer-motion';
import { PropertySearch } from './PropertySearch';
import { FilterState } from '@/types/project';

const categoryContent: Record<string, {
  eyebrow: string;
  heading: string;
  subheading: string;
  overview: string;
}> = {
  apartments: {
    eyebrow: 'Apartments Portfolio',
    heading: 'Modern Residential Apartments in Jaipur',
    subheading: 'Premium 2, 3 & 4 BHK Living Built for Comfort & Community',
    overview: 'Discover high-rise and low-density apartment residences designed for modern urban living. Featuring smart layouts, contemporary finishes, landscaped gardens, and modern amenities, our apartment projects offer vibrant community living across Jaipur’s key growth hubs.'
  },
  villas: {
    eyebrow: 'Luxury Villas',
    heading: 'Independent Luxury Villas in Jaipur',
    subheading: 'Private Living Spaces with Exclusive Amenities & Timeless Architecture',
    overview: 'Experience the ultimate in privacy and elevated living with independent luxury villas. Designed with modern architecture, Vastu-compliant layouts, private terrace space, and dedicated parking, these residences provide space and exclusivity for modern families.'
  },
  'plots & land': {
    eyebrow: 'Land & Plots',
    heading: 'Prime JDA-Approved Residential Plots',
    subheading: 'Build Your Custom Home or Secure High-Growth Land Investments',
    overview: 'Secure JDA-approved residential plots situated in rapidly developing residential corridors. Offering clear titles, wide road connectivity, and high appreciation potential, these land parcels are ideal for custom home building or long-term investment portfolios.'
  },
  commercial: {
    eyebrow: 'Commercial Properties',
    heading: 'Strategic Commercial Spaces in Jaipur',
    subheading: 'Retail Outlets, Office Spaces & High-Footfall Showrooms',
    overview: 'Position your business or grow your rental portfolio with commercial real estate in high-density corridors. Offering street visibility, ample customer parking, and high footfall counts, these spaces cater to modern retail brands, professional offices, and corporate hubs.'
  },
  farmhouses: {
    eyebrow: 'Farmhouses & Estates',
    heading: 'Private Farmhouses & Country Estates',
    subheading: 'Peaceful Weekend Retreats & Green Getaways Away from City Noise',
    overview: 'Retreat into nature with exclusive farmhouse properties and green land plots. Designed as second homes and weekend getaways, these properties feature lush private lawns, wide open spaces, and quiet surroundings for relaxation and family gatherings.'
  }
};

interface PropertiesHeroProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onToggleAdvanced: () => void;
  isAdvancedOpen: boolean;
  totalResults: number;
}

export function PropertiesHero({
  filters,
  onFilterChange,
  onToggleAdvanced,
  isAdvancedOpen,
  totalResults,
}: PropertiesHeroProps) {
  const activeType = filters.propertyType ? filters.propertyType.toLowerCase() : '';
  const content = categoryContent[activeType] || {
    eyebrow: 'Explore our portfolio',
    heading: 'Find a Property That Fits Your Life',
    subheading: '',
    overview: 'Explore homes, villas, land and commercial opportunities across Sigma’s growing real-estate portfolio in Jaipur and high-growth corridors.'
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-sigma-navy-950 text-white overflow-hidden">
      {/* Subtle Background Pattern & Glow */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sigma-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-8 md:mb-12"
        >
          <span className="eyebrow text-sigma-amber-400">{content.eyebrow}</span>
          <h1 className="mt-3 text-display font-serif font-semibold text-white tracking-tight leading-[1.08]">
            {content.heading}
          </h1>
          {content.subheading && (
            <p className="mt-3 text-sm md:text-base font-semibold text-sigma-amber-400/90 font-sans tracking-wide">
              {content.subheading}
            </p>
          )}
          <p className="mt-4 text-base md:text-lg text-sigma-stone-300 font-sans max-w-2xl leading-relaxed">
            {content.overview}
          </p>
        </motion.div>

        {/* Integrated Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <PropertySearch
            filters={filters}
            onFilterChange={onFilterChange}
            onToggleAdvanced={onToggleAdvanced}
            isAdvancedOpen={isAdvancedOpen}
            totalResults={totalResults}
          />
        </motion.div>
      </div>
    </section>
  );
}
