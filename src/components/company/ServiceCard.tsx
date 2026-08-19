import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Briefcase, Globe, Landmark, FileCheck } from 'lucide-react';
import { ServiceItem } from '@/types/company';

interface ServiceCardProps {
  service: ServiceItem;
}

const icons: Record<string, any> = {
  Building2,
  TrendingUp,
  Briefcase,
  Globe,
  Landmark,
  FileCheck,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.iconName] || Building2;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-sigma-stone-200/80 overflow-hidden p-6 md:p-8 shadow-xs hover:shadow-2xl hover:shadow-sigma-blue-950/10 transition-all duration-500 justify-between space-y-6"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-sigma-stone-100 text-sigma-blue-700 group-hover:bg-sigma-graphite-950 group-hover:text-sigma-amber-400 transition-all duration-300 flex items-center justify-center shadow-xs">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-sigma-stone-500 bg-sigma-stone-100 px-3 py-1 rounded-md border border-sigma-stone-200/60">
            {service.category}
          </span>
        </div>

        <h3 className="text-xl font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-800 transition-colors">
          {service.name}
        </h3>

        <p className="mt-2.5 text-xs text-sigma-stone-600 leading-relaxed line-clamp-3 font-sans">
          {service.tagline}
        </p>
      </div>

      <div className="pt-4 border-t border-sigma-stone-200/60 flex items-center justify-between">
        <span className="relative text-xs font-bold uppercase tracking-wider text-sigma-blue-700 group-hover:text-sigma-blue-900 transition-colors">
          <span>Explore Service</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sigma-blue-700 transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowRight className="h-4 w-4 text-sigma-blue-700 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
}
