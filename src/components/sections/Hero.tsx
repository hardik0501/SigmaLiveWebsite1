import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const heroImage = 'https://images.pexels.com/photos/38505310/pexels-photo-38505310.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

export function Hero() {
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-sigma-navy-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Sigma Homes architectural landmark"
          className="h-full w-full object-cover"
          initial={{ scale: reduced ? 1 : 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduced ? 0.5 : 6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-sigma-navy-950 via-transparent to-sigma-navy-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide min-h-screen flex flex-col justify-center pt-28 pb-32 lg:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-sigma-amber-400 block"
          >
            Sigma Homes India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-display text-white text-shadow-soft"
          >
            Sigma Hai Toh<br />Sambhav Hai.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-lg md:text-xl text-sigma-ivory-200/90 font-medium leading-relaxed"
          >
            Building Dreams. Creating Wealth. Delivering Trust.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-3 text-sm md:text-base text-sigma-ivory-200/60"
          >
            Your Trusted Real Estate Partner Since 2001
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#featured-projects" variant="light" size="lg">
              Explore Properties
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button onClick={() => navigate('/book-site-visit')} variant="outline-light" size="lg">
              <Calendar className="h-4 w-4" />
              Book a Site Visit
            </Button>
            <Button onClick={() => navigate('/request-callback')} variant="outline-light" size="lg">
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-28 lg:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-sigma-ivory-200/40 uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-sigma-ivory-200/40 to-transparent" />
      </motion.div>
    </section>
  );
}
