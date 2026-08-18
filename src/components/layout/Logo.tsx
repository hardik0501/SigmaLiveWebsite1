import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export function Logo({ className = '', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-sigma-graphite-900';
  const subColor = variant === 'light' ? 'text-sigma-ivory-200/70' : 'text-sigma-stone-500';
  const accentColor = variant === 'light' ? 'text-sigma-amber-400' : 'text-sigma-blue-600';

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Sigma Homes India — Home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-sigma-blue-700 transition-colors duration-300 group-hover:bg-sigma-blue-800">
        <Building2 className="h-5 w-5 text-white" strokeWidth={2.2} />
        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-bl-lg rounded-tr-lg bg-sigma-amber-500" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-base font-extrabold tracking-tight ${textColor}`}>
          SIGMA HOMES
        </span>
        <span className={`text-[0.625rem] font-semibold uppercase tracking-[0.2em] ${subColor}`}>
          India <span className={accentColor}>·</span> A Venture of Sigma Group
        </span>
      </span>
    </Link>
  );
}
