import { ArrowRight, Globe } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowButton } from '@/components/ui/Button';
import { markets } from '@/data/site';

const marketImages: Record<string, string> = {
  jaipur: 'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  noida: 'https://images.pexels.com/photos/9432498/pexels-photo-9432498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  gurgaon: 'https://images.pexels.com/photos/17764447/pexels-photo-17764447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dubai: 'https://images.pexels.com/photos/15480429/pexels-photo-15480429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dholera: 'https://images.pexels.com/photos/17079478/pexels-photo-17079478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export function WorkingMarkets() {
  return (
    <section id="markets" className="py-section md:py-30 bg-sigma-stone-100">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Reach"
            title="Growing Across Markets"
            supporting="From our headquarters in Jaipur to future zones in Dubai and Dholera."
          />
          <Reveal delay={0.2}>
            <ArrowButton href="#markets">Explore Markets</ArrowButton>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" stagger={0.08}>
          {markets.map((market) => (
            <StaggerItem key={market.id}>
              <a
                href="#locations"
                className="group relative block overflow-hidden rounded-xl bg-sigma-graphite-900 h-[280px] md:h-[320px]"
              >
                <img
                  src={marketImages[market.id]}
                  alt={market.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-700 ease-sigma group-hover:scale-105 group-hover:opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sigma-graphite-950 via-sigma-graphite-950/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5">
                  <span className={`inline-flex w-fit px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider mb-3 shadow-md ${
                    market.type === 'Primary Market'
                      ? 'bg-sigma-blue-600 text-white'
                      : market.type === 'Working Zone'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-sigma-amber-500 text-sigma-navy-950'
                  }`}>
                    {market.type}
                  </span>
                  <h3 className="text-lg font-bold text-white">{market.name}</h3>
                  <p className="mt-1.5 text-xs text-white/80 leading-relaxed line-clamp-2">
                    {market.description}
                  </p>
                  <ArrowRight className="mt-3 h-4 w-4 text-sigma-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
