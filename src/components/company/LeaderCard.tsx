import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { Leader } from '@/types/company';

interface LeaderCardProps {
  leader: Leader;
  onContact: (leader: Leader) => void;
}

export function LeaderCard({ leader, onContact }: LeaderCardProps) {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-sigma-stone-200/80 overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-sigma-blue-950/10 transition-all duration-500">
      <div className="relative h-80 w-full overflow-hidden bg-sigma-stone-900">
        <img
          src={leader.portrait}
          alt={leader.name}
          loading="lazy"
          className="w-full h-full object-cover object-top opacity-95 transition-transform duration-700 ease-sigma group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950/80 via-sigma-graphite-950/20 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-sigma-amber-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/15">
          {leader.designation}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold font-serif text-sigma-graphite-900 group-hover:text-sigma-blue-800 transition-colors">
            {leader.name}
          </h3>
          <p className="mt-2 text-xs text-sigma-stone-600 leading-relaxed line-clamp-2">
            {leader.shortBio}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {leader.expertise.map((exp) => (
              <span key={exp} className="px-2.5 py-0.5 bg-sigma-stone-100 border border-sigma-stone-200/60 rounded-md text-[10px] font-semibold text-sigma-stone-600">
                {exp}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-sigma-stone-200/60 flex items-center justify-between gap-2">
          <Link
            to={`/leadership/${leader.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sigma-blue-700 group-hover:text-sigma-blue-900 transition-colors"
          >
            <span>View Profile</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>

          <button
            onClick={() => onContact(leader)}
            className="p-2 rounded-xl bg-sigma-stone-100 text-sigma-graphite-800 hover:bg-sigma-blue-700 hover:text-white transition-all shadow-xs"
            title={`Connect with ${leader.name}`}
          >
            <Mail className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
