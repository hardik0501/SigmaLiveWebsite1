import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { founderData } from '@/data/companyData';

export function FounderHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-sigma-graphite-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-sigma-stone-900">
              <img
                src={founderData.portrait}
                alt={founderData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sigma-amber-400">
                  {founderData.title}
                </span>
                <h2 className="text-2xl font-bold font-serif text-white mt-0.5">{founderData.name}</h2>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="eyebrow text-sigma-amber-400">The Vision Behind Sigma</span>

            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight leading-[1.1]">
              {founderData.name}
            </h1>

            <div className="flex flex-wrap gap-2 pt-1">
              {founderData.personalityTitles.map((t) => (
                <span key={t} className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-sigma-stone-200">
                  {t}
                </span>
              ))}
            </div>

            {/* Life Philosophy Quote Box */}
            <div className="p-6 bg-sigma-navy-900/90 border border-sigma-amber-400/30 rounded-3xl space-y-2 relative">
              <Quote className="h-8 w-8 text-sigma-amber-400/40 absolute top-4 right-4" />
              <div className="text-2xl md:text-3xl font-extrabold font-serif text-sigma-amber-400">
                "{founderData.philosophyHindi}"
              </div>
              <p className="text-sm font-semibold text-sigma-stone-300">
                English: "{founderData.philosophyEnglish}"
              </p>
            </div>

            <p className="text-sm md:text-base text-sigma-stone-300 leading-relaxed font-sans">
              {founderData.story}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#biography"
                className="px-6 py-3 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl text-xs font-bold shadow-lg transition-colors flex items-center gap-1.5"
              >
                Explore His Journey
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={founderData.digitalPresence.website}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold backdrop-blur-md transition-colors"
              >
                Visit Personal Website
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
