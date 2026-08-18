import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-sigma-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-[700px] h-[500px] bg-sigma-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-content relative z-10">
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-sigma-amber-400 text-xs font-bold backdrop-blur-md"
          >
            <ShieldCheck className="h-4 w-4" />
            Your Trusted Real Estate Partner Since 2001
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-serif font-bold text-white tracking-tight leading-[1.08]"
          >
            Building Dreams. <br />
            Creating Wealth. <br />
            <span className="text-sigma-amber-400">Delivering Trust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-xl text-sigma-stone-300 font-sans leading-relaxed max-w-2xl"
          >
            Sigma Homes India is an integrated real-estate organization built around residential development, investment advisory, commercial growth, and long-term customer relationships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a
              href="#timeline"
              className="px-7 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2 group"
            >
              Explore Our Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              to="/properties"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-sm backdrop-blur-md transition-all"
            >
              Explore Properties
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
