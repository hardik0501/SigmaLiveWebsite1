import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Layers, Maximize2, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { Project } from '@/types/project';
import { statusLabels, statusColors } from '@/data/projectsData';

const badgeColors: Record<string, string> = {
  'ready-to-move': 'bg-emerald-600 text-white border-none shadow-md',
  'under-construction': 'bg-sigma-blue-600 text-white border-none shadow-md',
  'new-launch': 'bg-sigma-amber-500 text-sigma-navy-950 border-none shadow-md',
  'limited-inventory': 'bg-rose-600 text-white border-none shadow-md',
};

interface PropertyCardProps {
  project: Project;
  onQuickView: (project: Project) => void;
  onEnquire: (project: Project) => void;
  viewMode?: 'grid' | 'list';
}

export function PropertyCard({
  project,
  onQuickView,
  onEnquire,
  viewMode = 'grid',
}: PropertyCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi Sigma Homes, I am interested in ${project.name} in ${project.location}. Please share more details.`
  );

  if (viewMode === 'list') {
    return (
      <div className="group relative flex flex-col md:flex-row bg-white rounded-3xl border border-sigma-stone-200/60 overflow-hidden shadow-xs hover:shadow-[0_24px_48px_-15px_rgba(10,23,48,0.08)] hover:-translate-y-1 transition-all duration-500 ease-sigma">
        {/* Thumbnail */}
        <div className="relative md:w-80 h-56 md:h-auto overflow-hidden shrink-0 bg-sigma-stone-100">
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-104"
          />
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
              badgeColors[project.status] || 'bg-sigma-stone-600 text-white'
            }`}
          >
            {statusLabels[project.status]}
          </span>
          <button
            onClick={() => onQuickView(project)}
            className="absolute bottom-4 right-4 p-2.5 bg-white/90 backdrop-blur-md text-sigma-graphite-900 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-sigma-blue-700"
            title="Quick View"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 text-[10px] font-extrabold uppercase tracking-widest text-sigma-stone-500">
              <span className="flex items-center gap-1.5 text-sigma-blue-600">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {project.location}
              </span>
              {project.approvalStatus && (
                <span className="px-2 py-0.5 rounded bg-sigma-stone-100 border border-sigma-stone-200/60 text-sigma-stone-600 font-bold">
                  {project.approvalStatus}
                </span>
              )}
            </div>

            <Link to={`/projects/${project.slug}`}>
              <h3 className="mt-2.5 text-xl md:text-2xl font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-700 transition-colors leading-tight">
                {project.name}
              </h3>
            </Link>

            {/* Config details as chips */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-lg text-[11px] font-semibold text-sigma-graphite-700 flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5 text-sigma-blue-500 shrink-0" />
                {project.propertyType}
              </span>
              <span className="px-2.5 py-1 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-lg text-[11px] font-semibold text-sigma-graphite-700 flex items-center gap-1">
                <Layers className="h-3.5 w-3.5 text-sigma-blue-500 shrink-0" />
                {project.configurations.join(', ')}
              </span>
              <span className="px-2.5 py-1 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-lg text-[11px] font-semibold text-sigma-graphite-700 flex items-center gap-1">
                <Maximize2 className="h-3.5 w-3.5 text-sigma-blue-500 shrink-0" />
                {project.areaLabel}
              </span>
            </div>

            <p className="mt-3.5 text-xs text-sigma-stone-500 line-clamp-2 leading-relaxed">
              {project.usp}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-sigma-stone-200/60 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="block text-[9px] font-bold uppercase tracking-wider text-sigma-stone-400">
                Starting Price
              </span>
              <span className="text-base md:text-lg font-bold text-sigma-graphite-900 font-serif">
                {project.priceLabel}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/919829288341?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-sigma-green-300/60 text-sigma-green-700 hover:bg-sigma-green-50/50 hover:border-sigma-green-400 transition-colors"
                title="WhatsApp Us"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <button
                onClick={() => onEnquire(project)}
                className="px-4 py-2 bg-sigma-stone-50 border border-sigma-stone-200 hover:bg-sigma-stone-100 text-sigma-graphite-800 rounded-xl text-xs font-semibold transition-colors"
              >
                Enquire
              </button>
              <Link
                to={`/projects/${project.slug}`}
                className="px-4 py-2 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 group/btn"
              >
                View Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (Default)
  return (
    <div className="group relative flex flex-col bg-white rounded-3xl border border-sigma-stone-200/60 overflow-hidden shadow-xs hover:shadow-[0_24px_48px_-15px_rgba(10,23,48,0.08)] hover:-translate-y-1 transition-all duration-500 ease-sigma">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-sigma-stone-100">
        <img
          src={project.heroImage}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-104"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
            badgeColors[project.status] || 'bg-sigma-stone-600 text-white'
          }`}
        >
          {statusLabels[project.status]}
        </span>

        <button
          onClick={() => onQuickView(project)}
          className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-md text-sigma-graphite-900 rounded-xl text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white flex items-center gap-1.5 transform group-hover:translate-y-0 translate-y-1"
        >
          <Eye className="h-3.5 w-3.5 text-sigma-blue-600 animate-pulse" />
          Quick View
        </button>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-sigma-blue-600 mb-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          <Link to={`/projects/${project.slug}`}>
            <h3 className="text-xl font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-700 transition-colors leading-tight mb-3">
              {project.name}
            </h3>
          </Link>

          {/* Config details as chips */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-lg text-[11px] font-semibold text-sigma-graphite-700 flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-sigma-blue-500 shrink-0" />
              {project.propertyType}
            </span>
            <span className="px-2.5 py-1 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-lg text-[11px] font-semibold text-sigma-graphite-700 flex items-center gap-1">
              <Layers className="h-3.5 w-3.5 text-sigma-blue-500 shrink-0" />
              {project.configurations.join(', ')}
            </span>
            <span className="px-2.5 py-1 bg-sigma-stone-50 border border-sigma-stone-200/60 rounded-lg text-[11px] font-semibold text-sigma-graphite-700 flex items-center gap-1">
              <Maximize2 className="h-3.5 w-3.5 text-sigma-blue-500 shrink-0" />
              {project.areaLabel}
            </span>
          </div>

          <p className="text-xs text-sigma-stone-500 leading-relaxed line-clamp-2 mb-4">
            {project.usp}
          </p>
        </div>

        {/* Card Footer */}
        <div className="h-px bg-sigma-stone-200/60 my-4" />

        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-wider text-sigma-stone-400">
              Starting Price
            </span>
            <span className="text-sm md:text-base font-bold text-sigma-graphite-900 font-serif">
              {project.priceLabel}
            </span>
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="px-4.5 py-2 bg-sigma-stone-50 border border-sigma-stone-200 hover:border-sigma-blue-400 hover:bg-sigma-blue-50/50 text-sigma-blue-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 group/btn"
          >
            <span>Explore</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
