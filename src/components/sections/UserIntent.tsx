import { motion } from 'framer-motion';
import { Home, Tag, TrendingUp, ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

const intents = [
  {
    icon: Home,
    title: 'Buy a Property',
    description: 'Find the right property for your lifestyle or investment.',
    cta: 'Explore Properties',
    href: '#featured-projects',
    image: 'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Tag,
    title: 'Sell Your Property',
    description: 'Connect your property with the right buyer through Sigma.',
    cta: 'Sell With Sigma',
    href: '#final-cta',
    image: 'https://images.pexels.com/photos/7736029/pexels-photo-7736029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: TrendingUp,
    title: 'Invest With Sigma',
    description: 'Explore real-estate opportunities with professional guidance.',
    cta: 'Explore Investment',
    href: '#ecosystem',
    image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export function UserIntent() {
  return (
    <section id="user-intent" className="py-section md:py-30 bg-sigma-ivory-50">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-16">
          <span className="eyebrow">How Can We Help</span>
          <h2 className="mt-4 text-h2 text-sigma-graphite-900 text-balance">
            How Can We Help You Today?
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intents.map((intent, i) => {
            const isWide = i === 0;
            return (
              <StaggerItem
                key={intent.title}
                className={isWide ? 'md:col-span-1' : ''}
              >
                <a
                  href={intent.href}
                  className="group relative block h-full overflow-hidden rounded-2xl bg-sigma-graphite-900"
                >
                  <div className="absolute inset-0">
                    <img
                      src={intent.image}
                      alt={intent.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-50 transition-all duration-700 ease-sigma group-hover:scale-105 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/40 to-transparent" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-8 min-h-[320px]">
                    <intent.icon className="h-7 w-7 text-sigma-amber-400 mb-4" strokeWidth={1.8} />
                    <h3 className="text-xl font-bold text-white">{intent.title}</h3>
                    <p className="mt-2 text-sm text-sigma-ivory-200/70 leading-relaxed">
                      {intent.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sigma-amber-400">
                      {intent.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
