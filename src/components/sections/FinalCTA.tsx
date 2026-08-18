import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { contact } from '@/data/navigation';

const bgImage = 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=900&w=1920';

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section id="final-cta" className="relative overflow-hidden bg-sigma-navy-950">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={bgImage}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-25"
          initial={{ scale: reduced ? 1 : 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduced ? 0.5 : 8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sigma-navy-950 via-sigma-navy-950/80 to-sigma-navy-950" />
      </div>

      <div className="relative z-10 container-content py-section md:py-30">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-eyebrow text-sigma-amber-400">Let's Talk</span>
            <h2 className="mt-5 text-display text-white text-balance">
              Let's Find Your Next Opportunity.
            </h2>
            <p className="mt-6 text-lg text-sigma-ivory-200/70 leading-relaxed max-w-xl mx-auto">
              Whether you're looking to buy, sell, invest or build your future with Sigma, our team is ready to help.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={`tel:${contact.salesHelplineRaw}`} variant="light" size="lg">
                Talk to Sigma
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#featured-projects" variant="outline-light" size="lg">
                Explore Properties
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href={`tel:${contact.salesHelplineRaw}`}
                className="flex items-center gap-2 text-sm text-sigma-ivory-200/60 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {contact.salesHelpline}
              </a>
              <span className="h-4 w-px bg-white/20" />
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                className="flex items-center gap-2 text-sm text-sigma-ivory-200/60 hover:text-sigma-green-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
