import { Link } from 'react-router-dom';

export function Logo({ className = '', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-sigma-graphite-900';
  const subColor = variant === 'light' ? 'text-sigma-ivory-200/90' : 'text-sigma-stone-600';
  const accentColor = variant === 'light' ? 'text-sigma-amber-400' : 'text-sigma-blue-600';

  return (
    <Link to="/" className={`group inline-flex items-center gap-3.5 ${className}`} aria-label="Sigma Homes India — Home">
      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-md border border-slate-200/90 overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <img
          src="/MainLogo.png"
          alt="Sigma Homes Logo"
          className="h-full w-full object-contain rounded-full"
        />
      </div>
      <span className="flex flex-col justify-center">
        <span className={`text-xl sm:text-2xl font-black tracking-tight leading-none ${textColor}`}>
          SIGMA HOMES
        </span>
        <span className={`text-[0.72rem] sm:text-[0.8rem] font-semibold uppercase tracking-wider ${subColor} mt-1 leading-none`}>
          India <span className={accentColor}>·</span> A Venture by Jitendra Sharma
        </span>
      </span>
    </Link>
  );
}
