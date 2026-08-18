import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Building2, Layers, Maximize2, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';
import { statusLabels, statusColors } from '@/data/projectsData';

interface ProjectQuickViewProps {
  project: Project | null;
  onClose: () => void;
  onEnquire: (project: Project) => void;
}

export function ProjectQuickView({ project, onClose, onEnquire }: ProjectQuickViewProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Sigma Homes, I am interested in ${project.name} in ${project.location}. Please share more details.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-sigma-graphite-950/60 backdrop-blur-xs"
        />

        {/* Side Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Panel Header */}
          <div className="relative h-64 w-full overflow-hidden bg-sigma-stone-900 shrink-0">
            <img
              src={project.heroImage}
              alt={project.name}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950/80 via-transparent to-black/30" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-xs"
              title="Close Quick View"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 border ${
                  statusColors[project.status]
                }`}
              >
                {statusLabels[project.status]}
              </span>
              <h2 className="text-2xl font-bold font-serif text-white">{project.name}</h2>
              <div className="flex items-center gap-1.5 text-xs font-medium text-sigma-stone-300 mt-1">
                <MapPin className="h-3.5 w-3.5 text-sigma-amber-400" />
                {project.location}
              </div>
            </div>
          </div>

          {/* Panel Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Quick Specs Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-sigma-stone-100/70 border border-sigma-stone-200/80 rounded-2xl">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
                  Type
                </span>
                <span className="text-xs font-bold text-sigma-graphite-900 flex items-center gap-1 mt-0.5">
                  <Building2 className="h-3.5 w-3.5 text-sigma-blue-600" />
                  {project.propertyType}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
                  Layout
                </span>
                <span className="text-xs font-bold text-sigma-graphite-900 flex items-center gap-1 mt-0.5">
                  <Layers className="h-3.5 w-3.5 text-sigma-blue-600" />
                  {project.configurations.join(', ')}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400">
                  Area
                </span>
                <span className="text-xs font-bold text-sigma-graphite-900 flex items-center gap-1 mt-0.5">
                  <Maximize2 className="h-3.5 w-3.5 text-sigma-blue-600" />
                  {project.areaLabel}
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-4 bg-sigma-blue-50/60 border border-sigma-blue-200/60 rounded-2xl">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-sigma-blue-700">
                Pricing Structure
              </span>
              <div className="text-xl font-extrabold text-sigma-graphite-900 mt-0.5">
                {project.priceLabel}
              </div>
              <p className="text-[11px] text-sigma-stone-500 mt-1 leading-relaxed">
                *Indicative pricing. Final price and applicable charges are subject to the official cost sheet, taxes, government charges and project terms.
              </p>
            </div>

            {/* USP & Highlights */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-2">
                Project Position & Key USP
              </h3>
              <p className="text-sm text-sigma-graphite-800 leading-relaxed font-medium">
                {project.usp}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mt-4 mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-sigma-graphite-700 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-sigma-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="p-4 border-t border-sigma-stone-200 bg-white space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/919829288341?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl border border-sigma-green-400 text-sigma-green-700 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-sigma-green-50 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-sigma-green-600" />
                WhatsApp
              </a>
              <a
                href="tel:+919829288341"
                className="py-2.5 px-3 rounded-xl border border-sigma-stone-300 text-sigma-graphite-800 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-sigma-stone-100 transition-colors"
              >
                <Phone className="h-4 w-4 text-sigma-blue-600" />
                Call Sales
              </a>
            </div>

            <Link
              to={`/projects/${project.slug}`}
              onClick={onClose}
              className="w-full py-3 bg-sigma-blue-700 text-white rounded-xl font-bold text-sm shadow-md hover:bg-sigma-blue-800 transition-colors flex items-center justify-center gap-2 group"
            >
              View Full Project Page
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
