import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Layers, Maximize2, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { Project } from '@/types/project';
import { statusLabels, statusColors } from '@/data/projectsData';

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
      <div className="group relative flex flex-col md:flex-row bg-white rounded-2xl border border-sigma-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-sigma-blue-950/5 transition-all duration-500 ease-sigma">
        {/* Thumbnail */}
        <div className="relative md:w-80 h-56 md:h-auto overflow-hidden shrink-0">
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-104"
          />
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${
              statusColors[project.status]
            }`}
          >
            {statusLabels[project.status]}
          </span>
          <button
            onClick={() => onQuickView(project)}
            className="absolute bottom-4 right-4 p-2.5 bg-white/90 backdrop-blur-xs text-sigma-graphite-900 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            title="Quick View"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 text-xs font-medium text-sigma-stone-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-sigma-blue-600" />
                {project.location}
              </span>
              {project.approvalStatus && (
                <span className="px-2 py-0.5 rounded bg-sigma-stone-100 text-sigma-stone-600 text-[11px] font-semibold">
                  {project.approvalStatus}
                </span>
              )}
            </div>

            <Link to={`/projects/${project.slug}`}>
              <h3 className="mt-2 text-xl font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-800 transition-colors">
                {project.name}
              </h3>
            </Link>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-sigma-graphite-700">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-sigma-blue-600" />
                {project.propertyType}
              </span>
              <span className="text-sigma-stone-300">•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-sigma-blue-600" />
                {project.configurations.join(', ')}
              </span>
              <span className="text-sigma-stone-300">•</span>
              <span className="flex items-center gap-1.5">
                <Maximize2 className="h-3.5 w-3.5 text-sigma-blue-600" />
                {project.areaLabel}
              </span>
            </div>

            <p className="mt-3 text-sm text-sigma-stone-600 line-clamp-2 leading-relaxed">
              {project.usp}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-sigma-stone-200/60 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400">
                Price
              </span>
              <span className="text-base font-bold text-sigma-graphite-900">
                {project.priceLabel}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/919829288341?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-sigma-green-300/60 text-sigma-green-700 hover:bg-sigma-green-50 transition-colors"
                title="WhatsApp Us"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <button
                onClick={() => onEnquire(project)}
                className="px-4 py-2 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl text-xs font-semibold transition-colors"
              >
                Enquire
              </button>
              <Link
                to={`/projects/${project.slug}`}
                className="px-4 py-2 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 group/btn"
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
    <div className="group relative flex flex-col bg-white rounded-2xl border border-sigma-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-sigma-blue-950/5 transition-all duration-500 ease-sigma">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-sigma-stone-100">
        <img
          src={project.heroImage}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-104"
        />
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-xs ${
            statusColors[project.status]
          }`}
        >
          {statusLabels[project.status]}
        </span>

        <button
          onClick={() => onQuickView(project)}
          className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-xs text-sigma-graphite-900 rounded-xl text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white flex items-center gap-1.5"
        >
          <Eye className="h-3.5 w-3.5 text-sigma-blue-600" />
          Quick View
        </button>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-sigma-stone-500">
            <MapPin className="h-3.5 w-3.5 text-sigma-blue-600 shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          <Link to={`/projects/${project.slug}`}>
            <h3 className="mt-2 text-xl font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-800 transition-colors">
              {project.name}
            </h3>
          </Link>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold text-sigma-stone-600">
            <span className="flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-sigma-blue-500" />
              {project.propertyType}
            </span>
            <span className="text-sigma-stone-300">•</span>
            <span>{project.configurations.join(', ')}</span>
          </div>

          <div className="mt-2 text-xs font-medium text-sigma-stone-500 flex items-center gap-1">
            <Maximize2 className="h-3 w-3 text-sigma-stone-400" />
            {project.areaLabel}
          </div>

          <p className="mt-3 text-xs text-sigma-stone-600 leading-relaxed line-clamp-2">
            {project.usp}
          </p>
        </div>

        {/* Card Footer */}
        <div className="mt-6 pt-4 border-t border-sigma-stone-200/60 flex items-center justify-between gap-2">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
              Starting Price
            </span>
            <span className="text-sm font-bold text-sigma-graphite-900">
              {project.priceLabel}
            </span>
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-sigma-blue-700 group-hover:text-sigma-blue-900 transition-colors"
          >
            View Project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
