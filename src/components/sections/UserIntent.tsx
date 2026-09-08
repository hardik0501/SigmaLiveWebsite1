import { Home, Tag, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';

const quickActions = [
  {
    icon: Home,
    tag: 'BUY A PROPERTY',
    title: 'Your Next Home Starts With the Right Address.',
    description: 'Looking for a home that fits your lifestyle, budget and future plans? Explore carefully selected apartments, villas and residential properties across Jaipur.',
    cta: 'Explore Properties',
    link: '/properties',
    image: 'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Residential & Luxury',
    pastelBg: 'from-blue-50/60 to-white',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    iconColor: 'bg-blue-600 text-white',
    accentHover: 'group-hover:border-blue-300',
  },
  {
    icon: Tag,
    tag: 'SELL YOUR PROPERTY',
    title: 'Have a Property to Sell? Let the Right Buyers Find It.',
    description: 'Get professional assistance to present, market and sell your property with a smoother, more transparent experience from enquiry to closure.',
    cta: 'Sell With Sigma',
    link: '/sell-property',
    image: 'https://images.pexels.com/photos/7736029/pexels-photo-7736029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Fast & Transparent',
    pastelBg: 'from-amber-50/60 to-white',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    iconColor: 'bg-amber-600 text-white',
    accentHover: 'group-hover:border-amber-300',
  },
  {
    icon: TrendingUp,
    tag: 'INVEST WITH SIGMA',
    title: 'Invest in Property With a Bigger Picture in Mind.',
    description: 'Real estate is more than bricks and walls. Location, infrastructure, demand and future growth all matter. Our team helps you discover opportunities that make sense for your investment goals.',
    cta: 'Explore Investment',
    link: '/investment',
    image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'High ROI & Growth',
    pastelBg: 'from-emerald-50/60 to-white',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    iconColor: 'bg-emerald-600 text-white',
    accentHover: 'group-hover:border-emerald-300',
  },
];

export function UserIntent() {
  return (
    <section id="quick-action" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-amber-200/40">
      <div className="container-content">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-amber-700 block mb-2">
            QUICK ACTION SECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
            How Can Sigma Support Your Journey?
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Choose how you wish to engage with Jaipur's most trusted real estate ecosystem.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <StaggerItem key={action.tag}>
                <Link
                  to={action.link}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 min-h-[440px] ${action.accentHover}`}
                >
                  {/* Top Image Preview */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={action.image}
                      alt={action.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                    {/* Floating Icon & Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className={`h-11 w-11 rounded-2xl flex items-center justify-center shadow-md ${action.iconColor}`}>
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border shadow-xs ${action.badgeColor}`}>
                        {action.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className={`p-6 sm:p-7 flex flex-col flex-1 justify-between bg-gradient-to-b ${action.pastelBg}`}>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-700 mb-1.5 block">
                        {action.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {action.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {action.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 group-hover:text-blue-900 transition-colors">
                        {action.cta}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
