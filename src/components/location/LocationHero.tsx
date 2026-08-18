import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Search, ArrowRight, MessageCircle } from 'lucide-react';
import { Location } from '@/types/location';

interface LocationHeroProps {
  location: Location;
  projectCount: number;
  onEnquire: () => void;
}

export function LocationHero({ location, projectCount, onEnquire }: LocationHeroProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi Sigma Homes, I am interested in properties in ${location.name}, ${location.city}. Please share the available options.`
  );

  return (
    <section className="relative min-h-[70vh] flex items-end pt-32 pb-16 md:pb-20 bg-sigma-graphite-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={location.heroImage}
          alt={location.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/60 to-black/30" />
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      </div>

      <div className="container-content relative z-10 w-full">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-sigma-blue-700/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-sigma-blue-400/40">
              {location.city}, {location.state}
            </span>
            {projectCount > 0 && (
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-sigma-ivory-100 text-xs font-bold rounded-full border border-white/15">
                {projectCount} {projectCount === 1 ? 'Sigma Project' : 'Sigma Projects'}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.08]">
            Property in {location.name}
          </h1>

          <p className="text-base md:text-lg text-sigma-stone-200 font-sans leading-relaxed max-w-2xl pt-2">
            {location.shortDescription}
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href={`/properties?location=${encodeURIComponent(location.name)}`}
              className="px-6 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2 group"
            >
              <Search className="h-4 w-4" />
              Explore Properties in {location.name}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onEnquire}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-sm backdrop-blur-md transition-all"
            >
              Request Area Guide
            </button>

            <a
              href={`https://wa.me/919829288341?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 bg-sigma-green-600/90 hover:bg-sigma-green-600 text-white rounded-xl font-semibold text-sm backdrop-blur-md transition-all flex items-center gap-2"
              title="WhatsApp Concierge"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
