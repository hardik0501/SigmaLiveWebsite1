import { useRef, useEffect, useState, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 28, className, as = 'div', once = true }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: '-80px 0px -80px 0px' });
  const reduced = useReducedMotion();

  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionTag
      ref={ref as never}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function Stagger({ children, className, stagger = 0.1 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 28 }: { children: ReactNode; className?: string; y?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function Counter({ value, suffix = '', duration = 2, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(value);
      return;
    }
    let frame: number;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}
