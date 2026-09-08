import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, MessageCircle, Building2, Layers, Home, MapPin, Scale, Compass, 
  TrendingUp, Globe, Tag, MessageSquare, Award, FileText, ShieldCheck, Users, User, 
  Newspaper, BookOpen, HelpCircle, TreePine 
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { navItems, contact } from '@/data/navigation';

const megaMenuData: Record<string, {
  cards: { label: string; href: string; icon: any; colorClass: string }[];
  links: { label: string; href: string }[];
  featured: {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    href: string;
  };
}> = {
  Properties: {
    cards: [
      { label: 'Apartments', href: '/properties?type=Apartments', icon: Layers, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'Villas', href: '/properties?type=Villas', icon: Home, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
      { label: 'Plots & Land', href: '/properties?type=Plots+%26+Land', icon: MapPin, colorClass: 'bg-rose-500/10 text-rose-600' },
      { label: 'Farmhouses', href: '/properties?type=Farmhouses', icon: TreePine, colorClass: 'bg-green-500/10 text-green-600' },
      { label: 'Commercial', href: '/properties?type=Commercial', icon: Building2, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
    ],
    links: [
      { label: 'Mansarovar', href: '/locations/mansarovar-jaipur' },
      { label: 'Vaishali Nagar', href: '/locations/vaishali-nagar-jaipur' },
      { label: 'Jagatpura', href: '/locations/jagatpura-jaipur' },
      { label: 'Kalwar Road', href: '/locations/kalwar-road-jaipur' },
    ],
    featured: {
      image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Arihant Dynasty',
      description: 'Sky deck residences at Mansarovar, Jaipur.',
      buttonText: 'Explore Project',
      href: '/projects/arihant-dynasty',
    }
  },
  Investment: {
    cards: [
      { label: 'Investment Hub', href: '/investment', icon: TrendingUp, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'NRI Advisory', href: '/nri-services', icon: Globe, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
      { label: 'Sell Property', href: '/sell-property', icon: Tag, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
      { label: 'Property Advisory', href: '/consultation', icon: MessageSquare, colorClass: 'bg-rose-500/10 text-rose-600' },
    ],
    links: [
      { label: 'Tax Planning Desk', href: '/consultation' },
      { label: 'RERA Compliance Guide', href: '/about' },
      { label: 'NRI Advisory Guides', href: '/blogs' },
      { label: 'Property Evaluation FAQs', href: '/blogs' },
    ],
    featured: {
      image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'NRI Real Estate Desk',
      description: 'Customized portfolios & repatriation advisory.',
      buttonText: 'Connect Advisor',
      href: '/nri-services',
    }
  },
  Locations: {
    cards: [
      { label: 'All Locations', href: '/locations', icon: Compass, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
      { label: 'Mansarovar', href: '/locations/mansarovar-jaipur', icon: MapPin, colorClass: 'bg-rose-500/10 text-rose-600' },
      { label: 'Vaishali Nagar', href: '/locations/vaishali-nagar-jaipur', icon: MapPin, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'Jagatpura', href: '/locations/jagatpura-jaipur', icon: MapPin, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
      { label: 'Kalwar Road', href: '/locations/kalwar-road-jaipur', icon: MapPin, colorClass: 'bg-purple-500/10 text-purple-600' },
      { label: 'Noida (NCR)', href: '/locations/noida-ncr', icon: MapPin, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
      { label: 'Gurgaon (NCR)', href: '/locations/gurgaon-ncr', icon: MapPin, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'Dubai (Intl.)', href: '/locations/dubai-international', icon: MapPin, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
      { label: 'Dholera Smart City', href: '/locations/dholera-smart-city', icon: MapPin, colorClass: 'bg-rose-500/10 text-rose-600' },
    ],
    links: [
      { label: 'Mansarovar Ext.', href: '/locations/mansarovar-extension-jaipur' },
      { label: 'Kalwar Growth Corridor', href: '/locations/kalwar-road-jaipur' },
      { label: 'Noida Expressway', href: '/locations/noida-ncr' },
      { label: 'Gurgaon Golf Course Rd', href: '/locations/gurgaon-ncr' },
    ],
    featured: {
      image: 'https://images.pexels.com/photos/38505310/pexels-photo-38505310.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
      title: 'Growth Corridors',
      description: 'Detailed analysis of Jaipur micro-markets.',
      buttonText: 'Explore Locations Map',
      href: '/locations',
    }
  },
  Services: {
    cards: [
      { label: 'All Services', href: '/services', icon: Award, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
      { label: 'Property Consulting', href: '/services/property-consulting', icon: FileText, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'Investment Advisory', href: '/services/investment-advisory', icon: ShieldCheck, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
      { label: 'Commercial Advisory', href: '/services/commercial-real-estate', icon: Building2, colorClass: 'bg-rose-500/10 text-rose-600' },
    ],
    links: [
      { label: 'Property Valuation Desk', href: '/sell-property' },
      { label: 'Legal Due Diligence', href: '/about' },
      { label: 'Portfolio Allocation Desk', href: '/investment' },
      { label: 'Design & Engineering Advisory', href: '/services' },
    ],
    featured: {
      image: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Direct Sales Helpline',
      description: 'Connect immediately to schedule site tours or consults.',
      buttonText: 'Call Back Desk',
      href: '/request-callback',
    }
  },
  About: {
    cards: [
      { label: 'About Sigma Group', href: '/about', icon: Users, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
      { label: 'Founder Profile', href: '/founder', icon: User, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'Leadership Hub', href: '/leadership', icon: Award, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
      { label: 'Contact Us', href: '/contact', icon: Phone, colorClass: 'bg-rose-500/10 text-rose-600' },
    ],
    links: [
      { label: 'Sigma Careers Page', href: '/careers' },
      { label: 'Success & Growth Stories', href: '/success-stories' },
      { label: 'Corporate Vision & Values', href: '/about' },
      { label: 'CSR Initiatives', href: '/about' },
    ],
    featured: {
      image: 'https://images.pexels.com/photos/7736029/pexels-photo-7736029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Our Core Ethos',
      description: 'Building client relationships that last for generations.',
      buttonText: 'Read Vision Statement',
      href: '/about',
    }
  },
  Blogs: {
    cards: [
      { label: 'Market Insights', href: '/blogs', icon: Newspaper, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
      { label: 'Buyer Guides', href: '/blogs', icon: BookOpen, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'Investment FAQs', href: '/blogs', icon: HelpCircle, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
      { label: 'NRI Guides Desk', href: '/blogs', icon: Globe, colorClass: 'bg-rose-500/10 text-rose-600' },
    ],
    links: [
      { label: 'Jaipur Infrastructure Updates', href: '/blogs' },
      { label: 'Real Estate Legal Basics', href: '/blogs' },
      { label: 'Home Loan Planning Desk', href: '/blogs' },
      { label: 'Trending Locations Analysis', href: '/blogs' },
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      title: 'Mid-Year Market Report',
      description: 'Download the comprehensive 2026 Jaipur analysis.',
      buttonText: 'Read Analysis',
      href: '/blogs',
    }
  },
  Careers: {
    cards: [
      { label: 'Career Growth Model', href: '/careers', icon: TrendingUp, colorClass: 'bg-emerald-500/10 text-emerald-600' },
      { label: 'Success Stories', href: '/success-stories', icon: Users, colorClass: 'bg-sigma-blue-500/10 text-sigma-blue-600' },
      { label: 'Express Interest / Apply', href: '/careers', icon: FileText, colorClass: 'bg-sigma-amber-500/10 text-sigma-amber-600' },
    ],
    links: [
      { label: 'Sales Executive Roles', href: '/careers' },
      { label: 'Orientation Training Desk', href: '/careers' },
      { label: 'NRI Consultants Hub', href: '/careers' },
      { label: 'Agency Partnership Guides', href: '/careers' },
    ],
    featured: {
      image: 'https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Build With Sigma Group',
      description: 'Structured 5-stage meritocratic career timeline.',
      buttonText: 'View Career Model',
      href: '/careers',
    }
  }
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isTransparent = location.pathname === '/' && !scrolled && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-sigma ${
          isTransparent
            ? 'bg-transparent py-4'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5 shadow-sm'
        }`}
      >
        <div className="container-wide flex items-center justify-between gap-4 relative">
          <Logo variant={isTransparent ? 'light' : 'dark'} />

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-slate-700 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${contact.salesHelplineRaw}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                isTransparent ? 'text-white/90 hover:text-amber-300' : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              <Phone className="h-4 w-4 text-amber-400" />
              {contact.salesHelpline}
            </a>
            <Button
              href="/properties"
              variant={isTransparent ? 'outline-light' : 'primary'}
              size="sm"
            >
              Explore Properties
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-slate-900'}`} />
          </button>
        </div>

        {/* Centered Mega Menu Dropdown slot (positioned relative to viewport width) */}
        <div className="absolute top-full left-0 right-0 hidden lg:flex justify-center z-50 pointer-events-none pt-4">
          <AnimatePresence>
            {openDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto"
                onMouseEnter={() => setOpenDropdown(openDropdown)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* Mega Menu Frame */}
                <div className="w-[820px] rounded-3xl border border-sigma-stone-200 bg-white p-6 shadow-2xl shadow-sigma-blue-950/10 flex gap-6 text-left">
                  
                  {/* Left Content Column (70%) */}
                  <div className="w-[70%] flex flex-col justify-between">
                    {/* Large Cards Grid (top row) */}
                    <div>
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {megaMenuData[openDropdown]?.cards.map((card) => {
                          const CardIcon = card.icon;
                          return (
                            <Link
                              key={card.label}
                              to={card.href}
                              onClick={() => setOpenDropdown(null)}
                              className="flex flex-col items-center justify-center p-3 rounded-2xl border border-sigma-stone-100 bg-sigma-stone-50/50 hover:bg-white hover:border-sigma-blue-200 hover:shadow-md transition-all duration-300 group/card text-center"
                            >
                              <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover/card:scale-105 ${card.colorClass}`}>
                                <CardIcon className="h-5 w-5" />
                              </div>
                              <span className="text-[11px] font-bold text-sigma-graphite-800 group-hover/card:text-sigma-blue-700 transition-colors">
                                {card.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Horizontal divider */}
                    <div className="h-px bg-sigma-stone-200/60 w-full mb-5" />

                    {/* Bottom List Links Row */}
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-sigma-stone-400 block mb-3">
                        Insights & Hotspots
                      </span>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                        {megaMenuData[openDropdown]?.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => setOpenDropdown(null)}
                            className="text-xs font-semibold text-sigma-graphite-600 hover:text-sigma-blue-700 flex items-center gap-1.5 transition-colors group/link"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-sigma-stone-300 group-hover/link:bg-sigma-blue-500 transition-colors shrink-0" />
                            <span className="truncate">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle vertical divider line */}
                  <div className="w-px bg-sigma-stone-200 self-stretch" />

                  {/* Right Featured Column (30%) */}
                  <div className="w-[30%] flex flex-col justify-between">
                    {megaMenuData[openDropdown] && (
                      <Link
                        to={megaMenuData[openDropdown].featured.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group/feat flex flex-col h-full justify-between"
                      >
                        <div>
                          <div className="relative overflow-hidden rounded-2xl h-32 w-full bg-sigma-stone-100 border border-sigma-stone-200/50 mb-3 shadow-xs">
                            <img
                              src={megaMenuData[openDropdown].featured.image}
                              alt={megaMenuData[openDropdown].featured.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-700 ease-sigma group-hover/feat:scale-103"
                            />
                          </div>
                          <h4 className="text-sm font-bold font-serif text-sigma-graphite-900 group-hover/feat:text-sigma-blue-700 transition-colors">
                            {megaMenuData[openDropdown].featured.title}
                          </h4>
                          <p className="mt-1 text-[11px] text-sigma-stone-500 leading-relaxed line-clamp-2 font-sans">
                            {megaMenuData[openDropdown].featured.description}
                          </p>
                        </div>

                        <div className="mt-4 px-4 py-2 bg-sigma-blue-700 group-hover/feat:bg-sigma-blue-800 text-white rounded-xl text-[10px] font-bold tracking-wider uppercase transition-colors text-center w-full shadow-xs">
                          {megaMenuData[openDropdown].featured.buttonText}
                        </div>
                      </Link>
                    )}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-sigma-graphite-950/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-sigma-ivory-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-sigma-stone-200">
                <Logo />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
                  <X className="h-6 w-6 text-sigma-graphite-900" />
                </button>
              </div>
              <nav className="px-4 py-4">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-sigma-stone-200/60">
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3.5 px-2 text-base font-semibold text-sigma-graphite-900"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pb-3 pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 px-2 text-sm text-sigma-stone-500 hover:text-sigma-blue-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    to="/properties"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full py-3 bg-sigma-blue-700 text-white font-bold text-sm rounded-xl shadow-md"
                  >
                    Explore Properties
                  </Link>
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-sigma-green-600 border border-sigma-green-400/40 rounded-lg"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
