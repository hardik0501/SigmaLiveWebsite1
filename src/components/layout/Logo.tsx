import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo.jpg';

export function Logo({ className = '', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-sigma-graphite-900';
  const subColor = variant === 'light' ? 'text-sigma-ivory-200/80' : 'text-sigma-stone-500';
  const accentColor = variant === 'light' ? 'text-sigma-amber-400' : 'text-sigma-blue-600';

  return (
    <Link to="/" className={`group inline-flex items-center gap-3.5 ${className}`} aria-label="Sigma Homes India — Home">
      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-md border border-sigma-stone-200/80 overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <img
          src={logoImg}
          alt="Sigma Homes Logo"
          className="h-full w-full object-contain rounded-lg"
        />
      </div>
      <span className="flex flex-col justify-center">
        <span className={`text-lg sm:text-xl font-black tracking-tight leading-none ${textColor}`}>
          SIGMA HOMES
        </span>
        <span className={`text-[0.68rem] sm:text-[0.75rem] font-semibold uppercase tracking-wider ${subColor} mt-1 leading-none`}>
          India <span className={accentColor}>·</span> A Venture by Jitendra Kumar Sharma
        </span>
      </span>
    </Link>
  );
}
