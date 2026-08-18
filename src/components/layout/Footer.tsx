import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { footerNav, contact, socialLinks } from '@/data/navigation';

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Footer() {
  return (
    <footer className="bg-sigma-navy-950 text-sigma-ivory-200">
      <div className="container-wide pt-20 pb-10">
        {/* Top: brand + statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" />
            <div className="space-y-2">
              <p className="text-2xl font-bold text-white tracking-tight">
                "Sigma Hai Toh Sambhav Hai."
              </p>
              <p className="text-sm text-sigma-ivory-200/60">
                Building Dreams. Creating Wealth. Delivering Trust.
              </p>
            </div>
            <p className="text-sm text-sigma-ivory-200/50 max-w-sm leading-relaxed">
              Your trusted real estate partner since 2001. An integrated property ecosystem spanning development, sales, investment and management.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-eyebrow text-sigma-amber-400 mb-5">Navigation</h3>
            <ul className="space-y-3">
              {footerNav.main.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-sigma-ivory-200/70 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-eyebrow text-sigma-amber-400 mb-5">Business</h3>
            <ul className="space-y-3">
              {footerNav.business.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-sigma-ivory-200/70 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-eyebrow text-sigma-amber-400 mb-5">Markets</h3>
            <ul className="space-y-3">
              {footerNav.markets.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-sigma-ivory-200/70 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle: contact + social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <h3 className="text-eyebrow text-sigma-amber-400">Contact</h3>
            <a href={`tel:${contact.salesHelplineRaw}`} className="flex items-center gap-3 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <Phone className="h-4 w-4 text-sigma-amber-400" />
              </span>
              <span className="text-lg font-semibold text-white group-hover:text-sigma-amber-400 transition-colors">
                {contact.salesHelpline}
              </span>
            </a>
            <p className="text-sm text-sigma-ivory-200/50">Sales Helpline</p>
          </div>

          <div className="flex md:justify-end items-start gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 hover:bg-sigma-blue-700 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5 text-sigma-ivory-200/70" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sigma-ivory-200/40">
            © {new Date().getFullYear()} Sigma Homes India · Sigma Builders & Developers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-sigma-ivory-200/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-sigma-ivory-200/40 hover:text-white transition-colors">Terms</a>
            <a href="#top" className="flex items-center gap-1 text-xs text-sigma-ivory-200/40 hover:text-white transition-colors">
              Back to top <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
