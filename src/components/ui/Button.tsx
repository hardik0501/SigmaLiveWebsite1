import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-sigma-blue-700 text-white hover:bg-sigma-blue-800 shadow-sm',
  secondary: 'bg-transparent text-sigma-blue-700 border border-sigma-blue-200 hover:border-sigma-blue-400 hover:bg-sigma-blue-50',
  ghost: 'bg-transparent text-sigma-graphite-700 hover:text-sigma-blue-700 hover:bg-sigma-blue-50',
  light: 'bg-white text-sigma-blue-800 hover:bg-sigma-ivory-100 shadow-sm',
  'outline-light': 'bg-transparent text-white border border-white/40 hover:bg-white/10 backdrop-blur-sm',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', href, fullWidth, ...props }, ref) => {
    const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-sigma ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
      return (
        <a href={href} className={classes} ref={ref as never}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

interface ArrowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'dark' | 'light' | 'blue';
  className?: string;
}

export function ArrowButton({ children, href = '#', variant = 'blue', className = '' }: ArrowButtonProps) {
  const colorClass = {
    dark: 'text-sigma-graphite-900 hover:text-sigma-blue-700',
    light: 'text-white hover:text-sigma-ivory-200',
    blue: 'text-sigma-blue-700 hover:text-sigma-blue-900',
  }[variant];

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ease-sigma ${colorClass} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-sigma group-hover:translate-x-1" />
    </a>
  );
}
