import { Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/share/19Th6stqMg/', icon: Facebook },
    { label: 'Instagram', href: 'https://www.instagram.com/sigmahomes_india', icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/groups/25740060/', icon: Linkedin },
    { label: 'YouTube', href: '#', icon: Youtube },
  ];

  return (
    <footer className="bg-sigma-navy-950 text-sigma-ivory-200 border-t border-white/10">
      <div className="container-wide pt-16 pb-8">
        {/* Brand + Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-sigma-ivory-200/70 leading-relaxed max-w-sm mt-3">
              Building Dreams. Creating Wealth. Delivering Trust since 2001.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sigma-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/properties" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <span className="text-sm text-sigma-ivory-200/60">
                  <Link to="/careers" className="hover:text-white transition-colors duration-200">Careers</Link>
                  <span className="mx-1.5 text-sigma-ivory-200/40">&</span>
                  <Link to="/blogs" className="hover:text-white transition-colors duration-200">Blogs</Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Our Business Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sigma-amber-400 mb-4">Our Business</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-sigma-amber-500/60" />
                  Sigma Builders
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-sigma-amber-500/60" />
                  Sigma Homes
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-sigma-amber-500/60" />
                  Sigma Investments
                </Link>
              </li>
              <li>
                <Link to="/nri-services" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-sigma-amber-500/60" />
                  NRI Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Locations Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sigma-amber-400 mb-4">Popular Locations</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/locations/mansarovar-jaipur" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sigma-blue-400/60" />
                  Mansarovar
                </Link>
              </li>
              <li>
                <Link to="/locations/vaishali-nagar-jaipur" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sigma-blue-400/60" />
                  Vaishali Nagar
                </Link>
              </li>
              <li>
                <Link to="/locations/jagatpura-jaipur" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sigma-blue-400/60" />
                  Jagatpura
                </Link>
              </li>
              <li>
                <Link to="/locations/kalwar-road-jaipur" className="text-sm text-sigma-ivory-200/60 hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sigma-blue-400/60" />
                  Kalwar Road
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-b border-white/10 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sigma-ivory-200/40">
              Contact
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 mt-1 text-sm font-semibold">
              <a href="tel:+919829288341" className="text-white hover:text-sigma-amber-400 transition-colors flex items-center gap-2 text-base md:text-lg">
                <Phone className="h-4 w-4 text-sigma-amber-400 shrink-0" />
                +91 98292 88341
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="text-sigma-ivory-200/60 text-sm">Sales Helpline</span>
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
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-sigma-blue-700 hover:border-sigma-blue-600 transition-all duration-300"
              >
                <link.icon className="h-4.5 w-4.5 text-sigma-ivory-200/70" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal Block */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sigma-ivory-200/40">
          <p>© 2026 Sigma Homes India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
