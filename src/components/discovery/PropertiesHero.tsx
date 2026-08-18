import React from 'react';
import { motion } from 'framer-motion';
import { PropertySearch } from './PropertySearch';
import { FilterState } from '@/types/project';

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
          <span className="eyebrow text-sigma-amber-400">Sigma Discovery Platform</span>
          <h1 className="mt-3 text-display font-serif font-semibold text-white tracking-tight leading-[1.08]">
            Find a Property <br className="hidden sm:inline" />
            That Fits Your Life
          </h1>
          <p className="mt-4 text-base md:text-lg text-sigma-stone-300 font-sans max-w-2xl leading-relaxed">
            Explore homes, villas, land and commercial opportunities across Sigma’s growing real-estate portfolio in Jaipur and high-growth corridors.
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
