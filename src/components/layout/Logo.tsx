import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo.jpg';

export function Logo({ className = '', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-sigma-graphite-900';
  const subColor = variant === 'light' ? 'text-sigma-ivory-200/80' : 'text-sigma-stone-500';
  const accentColor = variant === 'light' ? 'text-sigma-amber-400' : 'text-sigma-blue-600';

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Sigma Homes India — Home">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-0.5 shadow-md border border-sigma-stone-200/60 overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <img
          src={logoImg}
          alt="Sigma Homes Logo"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <span className="flex flex-col leading-none">
        <span className={`text-base font-extrabold tracking-tight ${textColor}`}>
          SIGMA HOMES
        </span>
        <span className={`text-[0.625rem] font-semibold uppercase tracking-[0.2em] ${subColor} mt-0.5`}>
          India <span className={accentColor}>·</span> A Venture of Sigma Group
        </span>
      </span>
    </Link>
  );
}
