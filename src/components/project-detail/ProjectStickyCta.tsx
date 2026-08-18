import React from 'react';
import { Calendar, Phone, MessageCircle, FileText } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectStickyCtaProps {
  project: Project;
  onBookSiteVisit: () => void;
  onRequestPrice: () => void;
  showSticky: boolean;
}

export function ProjectStickyCta({
  project,
  onBookSiteVisit,
  onRequestPrice,
  showSticky,
}: ProjectStickyCtaProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi Sigma Homes, I am interested in ${project.name} in ${project.location}. I would like to know more about the project.`
  );

  return (
    <>
      {/* Desktop Sticky Header Bar (appears after hero scroll) */}
      <div
        className={`hidden md:block fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-sigma-stone-200/80 py-3 shadow-md transition-all duration-300 ${
          showSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-content flex items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold font-serif text-sigma-graphite-900 leading-none">
              {project.name}
            </h3>
            <span className="text-xs font-semibold text-sigma-blue-700 mt-1 block">
              {project.priceLabel} · {project.location}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/919829288341?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-sigma-green-400 text-sigma-green-700 hover:bg-sigma-green-50 transition-colors"
              title="WhatsApp Us"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button
              onClick={onRequestPrice}
              className="px-4 py-2 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <FileText className="h-3.5 w-3.5" />
              Request Price
            </button>
            <button
              onClick={onBookSiteVisit}
              className="px-5 py-2 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-sigma-stone-200/90 p-3 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href="tel:+919829288341"
            className="flex flex-col items-center justify-center py-2 bg-sigma-stone-100 text-sigma-graphite-900 rounded-xl text-[11px] font-bold"
          >
            <Phone className="h-4 w-4 text-sigma-blue-600 mb-0.5" />
            Call
          </a>
          <a
            href={`https://wa.me/919829288341?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center py-2 bg-sigma-green-50 text-sigma-green-700 border border-sigma-green-300/60 rounded-xl text-[11px] font-bold"
          >
            <MessageCircle className="h-4 w-4 text-sigma-green-600 mb-0.5" />
            WhatsApp
          </a>
          <button
            onClick={onBookSiteVisit}
            className="flex flex-col items-center justify-center py-2 bg-sigma-blue-700 text-white rounded-xl text-[11px] font-bold shadow-xs"
          >
            <Calendar className="h-4 w-4 mb-0.5" />
            Site Visit
          </button>
        </div>
      </div>
    </>
  );
}
