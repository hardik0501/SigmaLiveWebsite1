import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';
import { statusLabels, statusColors } from '@/data/projectsData';

interface ProjectHeroProps {
  project: Project;
  onBookSiteVisit: () => void;
  onRequestPrice: () => void;
}

export function ProjectHero({ project, onBookSiteVisit, onRequestPrice }: ProjectHeroProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi Sigma Homes, I am interested in ${project.name} in ${project.location}. I would like to know more about the project.`
  );

  return (
    <section className="relative min-h-[85vh] flex items-end pt-32 pb-16 md:pb-24 bg-sigma-graphite-950 text-white overflow-hidden">
      {/* Background Hero Image with Subtle Scale Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover opacity-85"
        />
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/60 to-black/30" />
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      </div>

      <div className="container-content relative z-10 w-full">
        <div className="max-w-3xl space-y-4">
          {/* Status Badge & Locality */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${
                statusColors[project.status]
              }`}
            >
              {statusLabels[project.status]}
            </span>
            {project.approvalStatus && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-sigma-ivory-100 backdrop-blur-md border border-white/15">
                {project.approvalStatus}
              </span>
            )}
            {project.developer && (
              <span className="text-xs font-semibold uppercase tracking-wider text-sigma-amber-400">
                by {project.developer}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.08]">
            {project.name}
          </h1>

          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-sigma-stone-300">
            <MapPin className="h-4 w-4 text-sigma-amber-400 shrink-0" />
            <span>{project.location}</span>
          </div>

          <p className="text-base md:text-lg text-sigma-stone-200 font-sans leading-relaxed max-w-2xl pt-2">
            {project.tagline || project.usp}
          </p>

          {/* Action Triggers */}
          <div className="pt-6 flex flex-wrap items-center gap-3 md:gap-4">
            <button
              onClick={onBookSiteVisit}
              className="px-6 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-xl shadow-sigma-blue-950/40 transition-all flex items-center gap-2 group"
            >
              <Calendar className="h-4 w-4" />
              Book a Site Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onRequestPrice}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-sm backdrop-blur-md transition-all"
            >
              Request Cost Sheet
            </button>

            <a
              href={`https://wa.me/919829288341?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 bg-sigma-green-600/90 hover:bg-sigma-green-600 text-white rounded-xl font-semibold text-sm backdrop-blur-md transition-all flex items-center gap-2"
              title="WhatsApp Project Concierge"
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
