import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useNavigate } from 'react-router-dom';

const bgImage = 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=900&w=1920';

export function FinalCTA() {
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  return (
    <section id="final-cta" className="relative overflow-hidden bg-slate-950 py-24 md:py-32 border-t border-white/10">
      {/* Background Image with Balanced Light Black Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={bgImage}
          alt="Jaipur Sigma Homes Luxury Real Estate"
          aria-hidden
          className="h-full w-full object-cover object-center"
          initial={{ scale: reduced ? 1 : 1.05 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduced ? 0.5 : 8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Light Black Overlay for Clean Visibility */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      </div>

      {/* Open Content Layout (No Box Container) */}
      <div className="relative z-10 container-content">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-lg mb-6">
              <Sparkles className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-amber-300">
                LET'S TALK
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5.5xl font-bold font-serif text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Your Next Property Could Be Closer Than You Think.
            </h2>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-sans max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Whether you're buying your first home, upgrading to a larger space, looking for luxury apartments in Jaipur, searching for a villa, exploring land or considering a commercial investment, the first step is simply a conversation.
            </p>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-amber-400 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Tell us what you're looking for. We'll help you find the options worth exploring.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/consultation')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Talk to Sigma</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('/properties')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Explore Properties</span>
              </button>
              <button
                onClick={() => navigate('/book-site-visit')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar className="h-4 w-4 text-amber-400" />
                <span>Book a Site Visit</span>
              </button>
            </div>
          </Reveal>

          {/* Contact Helpline & WhatsApp Strip */}
          <Reveal delay={0.35}>
            <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
              <a
                href="tel:+919829288341"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-black/45 border border-white/25 backdrop-blur-md text-white hover:border-amber-400 shadow-lg transition-colors font-bold text-sm sm:text-base"
              >
                <div className="h-8 w-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 98292 88341</span>
                <span className="text-white/30">|</span>
                <span className="text-white/80 text-xs sm:text-sm font-normal">Sales Helpline</span>
              </a>

              <a
                href="https://wa.me/919829288341"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                <span>WhatsApp Us →</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
