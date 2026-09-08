import { Phone, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/share/19Th6stqMg/', icon: Facebook },
    { label: 'Instagram', href: 'https://www.instagram.com/sigmahomes_india', icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/groups/25740060/', icon: Linkedin },
    { label: 'YouTube', href: 'https://www.youtube.com/@SIGMAHOMESJAIPUR', icon: Youtube },
  ];

  return (
    <footer className="bg-[#FAF7F2] text-slate-800 border-t border-amber-200/60">
      <div className="container-wide pt-16 pb-10">
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Column 1: Brand & Founder Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <div className="mt-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-800 block">
                INDIA · A VENTURE BY JITENDRA KUMAR SHARMA
              </span>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">
                Building Dreams. Creating Wealth. Delivering Trust Since 2001.
              </p>
            </div>

            {/* Quick Helpline in Brand Box */}
            <div className="pt-2">
              <a
                href="tel:+919829288341"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-white hover:bg-amber-50 px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-amber-700" />
                <span>+91 98292 88341 · Sales Helpline</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/properties" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-blue-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Business */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800 mb-4">
              Our Business
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services/builders-developers" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Sigma Builders & Developers
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Sigma Homes
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Sigma Investments
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-property" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Sigma Commercial
                </Link>
              </li>
              <li>
                <Link to="/nri-services" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Sigma NRI Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Property Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800 mb-4">
              Property Categories
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm mb-6">
              <li>
                <Link to="/properties?type=apartments" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/properties?type=villas" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=plots-land" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Plots & Land
                </Link>
              </li>
              <li>
                <Link to="/properties?type=farmhouses" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Farmhouses
                </Link>
              </li>
              <li>
                <Link to="/properties?type=commercial" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Commercial Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Popular Locations & Our Markets */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800 mb-4">
              Popular Locations
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm mb-5">
              <li>
                <Link to="/locations/mansarovar-jaipur" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Mansarovar
                </Link>
              </li>
              <li>
                <Link to="/locations/vaishali-nagar-jaipur" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Vaishali Nagar
                </Link>
              </li>
              <li>
                <Link to="/locations/jagatpura-jaipur" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Jagatpura
                </Link>
              </li>
              <li>
                <Link to="/locations/kalwar-road-jaipur" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Kalwar Road
                </Link>
              </li>
              <li>
                <Link to="/locations/mansarovar-extension-jaipur" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Mansarovar Extension
                </Link>
              </li>
              <li>
                <Link to="/locations/jhotwara-jaipur" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Jhotwara
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800 mb-2 mt-5">
              Our Markets
            </h3>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
              <Link to="/locations" className="hover:text-blue-700 transition-colors">Jaipur</Link> ·
              <Link to="/locations/noida-ncr" className="hover:text-blue-700 transition-colors">Noida</Link> ·
              <Link to="/locations/gurgaon-ncr" className="hover:text-blue-700 transition-colors">Gurgaon</Link> ·
              <Link to="/locations/dubai-international" className="hover:text-blue-700 transition-colors">Dubai</Link> ·
              <Link to="/locations/dholera-smart-city" className="hover:text-blue-700 transition-colors">Dholera</Link>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-b border-slate-200 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              CONTACT
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 mt-1">
              <a
                href="tel:+919829288341"
                className="text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-2 text-base md:text-lg font-bold"
              >
                <Phone className="h-4 w-4 text-amber-700 shrink-0" />
                +91 98292 88341
              </a>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-slate-600 text-xs sm:text-sm font-semibold">
                Sales Helpline
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 hover:bg-blue-700 hover:text-white text-slate-700 hover:border-blue-700 transition-all duration-300 shadow-2xs"
              >
                <link.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal Block & Designer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Sigma Homes India · All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-5">
            <Link to="/contact" className="hover:text-blue-700 transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">|</span>
            <Link to="/contact" className="hover:text-blue-700 transition-colors">Terms & Conditions</Link>
            <span className="text-slate-300">|</span>
            <span className="text-slate-400">
              Designed by{' '}
              <a
                href="mailto:Hardikgothwal0501@gmail.com"
                className="font-extrabold text-slate-700 hover:text-blue-700 transition-colors"
                title="Contact: Hardikgothwal0501@gmail.com"
              >
                HG
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
