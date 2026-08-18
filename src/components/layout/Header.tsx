import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { navItems, contact } from '@/data/navigation';

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
            : 'bg-sigma-ivory-50/95 backdrop-blur-md border-b border-sigma-stone-200/60 py-2.5 shadow-sm'
        }`}
      >
        <div className="container-wide flex items-center justify-between gap-4">
          <Logo variant={isTransparent ? 'light' : 'dark'} />

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-sigma-graphite-700 hover:text-sigma-blue-700'
                  }`}
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="w-56 rounded-xl border border-sigma-stone-200 bg-white p-2 shadow-lg shadow-sigma-blue-950/5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-sigma-graphite-700 hover:bg-sigma-blue-50 hover:text-sigma-blue-700 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${contact.salesHelplineRaw}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-sigma-graphite-700 hover:text-sigma-blue-700'
              }`}
            >
              <Phone className="h-4 w-4" />
              {contact.salesHelpline}
            </a>
            <Button href="/properties" variant={isTransparent ? 'outline-light' : 'primary'} size="sm">
              Explore Properties
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-sigma-graphite-900'}`} />
          </button>
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
