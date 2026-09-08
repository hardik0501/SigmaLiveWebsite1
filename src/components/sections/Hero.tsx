import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const heroImage = 'https://images.pexels.com/photos/38505310/pexels-photo-38505310.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

export function Hero() {
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  return (
    <section id="top" className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden flex items-center bg-slate-950">
      {/* Background Image with Light Black Overlay for Clear Visibility */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImage}
          alt="Sigma Homes Jaipur Luxury Real Estate"
          className="h-full w-full object-cover object-center"
          initial={{ scale: reduced ? 1 : 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduced ? 0.5 : 5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Balanced Light Black Overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      {/* Open Content Layout (No Box Container) */}
      <div className="relative z-10 container-wide py-28 md:py-36 lg:py-40 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-lg mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-300">
              SIGMA HOMES JAIPUR
            </span>
          </motion.div>

          {/* Main Slogan / Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            Sigma Hai Toh Sambhav Hai.
          </motion.h1>

          {/* Sub-slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-wide text-amber-400 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]"
          >
            Building Homes. Creating Opportunities. Growing with Jaipur.
          </motion.p>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-3xl mx-auto font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            Sigma Homes has been assisting people to discover the right residence for them to live, invest and build their future for over 20 years. Whether it's a home you're thinking of, or an investment opportunity, we offer you our local knowledge, clear guidance and long-term expertise in real estate Jaipur.
          </motion.p>

          {/* Trust strip line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 border border-white/20 backdrop-blur-md shadow-lg text-xs sm:text-sm font-semibold text-white/90"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Your Trusted Real Estate Company in Jaipur Since 2001</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById('featured-projects');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Properties</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/book-site-visit')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4 text-amber-400" />
              <span>Book a Site Visit</span>
            </button>
            <button
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              <span>Talk to an Expert</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-white/60 uppercase tracking-widest font-mono font-bold">Scroll</span>
        <div className="h-7 w-px bg-gradient-to-b from-amber-400 to-transparent" />
      </motion.div>
    </section>
  );
}
