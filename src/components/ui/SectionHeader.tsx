import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  supporting?: string;
  align?: 'left' | 'center';
  variant?: 'dark' | 'light';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  supporting,
  align = 'left',
  variant = 'dark',
  className = '',
}: SectionHeaderProps) {
  const isLight = variant === 'light';
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`text-eyebrow uppercase ${isLight ? 'text-sigma-amber-400' : 'text-sigma-blue-600'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-h2 ${isLight ? 'text-white' : 'text-sigma-graphite-900'} text-balance`}>
        {title}
      </h2>
      {supporting && (
        <p className={`text-base md:text-lg leading-relaxed ${isLight ? 'text-sigma-ivory-200/80' : 'text-sigma-graphite-700/70'}`}>
          {supporting}
        </p>
      )}
    </Reveal>
  );
}
