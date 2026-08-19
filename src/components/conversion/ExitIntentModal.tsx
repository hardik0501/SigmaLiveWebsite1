import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Phone, User, MessageSquare } from 'lucide-react';
import { submitLead } from '@/services/leads';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Price Sheets & Site Visits',
  });

  useEffect(() => {
    // Check if user already dismissed or converted this session
    const isDismissed = sessionStorage.getItem('sigma_exit_popup_dismissed') === 'true';
    if (isDismissed) return;

    let inactivityTimer: NodeJS.Timeout;

    const triggerModal = () => {
      if (!sessionStorage.getItem('sigma_exit_popup_dismissed')) {
        setIsOpen(true);
      }
    };

    // 1. Mouse Leave Top Exit Intent Listener
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        triggerModal();
      }
    };

    // 2. 60-Second Inactivity Listener
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        triggerModal();
      }, 60000); // 60 seconds
    };

    // Events to monitor for activity
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) => window.addEventListener(evt, resetInactivityTimer));
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial timer setup
    resetInactivityTimer();

    return () => {
      clearTimeout(inactivityTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      activityEvents.forEach((evt) => window.removeEventListener(evt, resetInactivityTimer));
    };
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('sigma_exit_popup_dismissed', 'true');
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');

    try {
      await submitLead({
        leadType: 'price_request',
        name: formData.name,
        phone: formData.phone,
        message: `[Exit Intent / Inactivity Popup] Requesting off-market Jaipur price sheet & consultation.`,
      });

      sessionStorage.setItem('sigma_exit_popup_dismissed', 'true');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 3000);
    } catch (err) {
      setError('Submission failed. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-sigma-graphite-950/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 p-6 md:p-8 border border-sigma-stone-200/80"
        >
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 text-sigma-stone-400 hover:text-sigma-graphite-900 rounded-full hover:bg-sigma-stone-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-full bg-sigma-green-50 text-sigma-green-600 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">
                VIP Access Requested
              </h3>
              <p className="text-sm text-sigma-stone-600 max-w-xs mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. Our relationship manager will send the latest Jaipur price sheets to <span className="font-semibold">{formData.phone}</span> via WhatsApp.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-sigma-amber-500/10 text-sigma-amber-800 border border-sigma-amber-400/40 text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-sigma-amber-600" />
                  Exclusive Offer
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-serif text-sigma-graphite-900">
                Before You Go! Get Jaipur’s Best Off-Market Deals
              </h2>

              <p className="mt-2 text-xs md:text-sm text-sigma-stone-600 leading-relaxed font-sans">
                Get instant access to private pre-launch price sheets, GST benefits breakdown, and zero-brokerage site visit slots.
              </p>

              {error && (
                <div className="mt-3 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="h-4 w-4 text-sigma-stone-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="h-4 w-4 text-sigma-stone-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    What are you looking for?
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                  >
                    <option value="Price Sheets & Site Visits">Price Sheets & Site Visit Booking</option>
                    <option value="Luxury Apartments">Luxury High-Rise Apartments</option>
                    <option value="Independent Villas">Independent Villas & Plots</option>
                    <option value="NRI Investment Consultation">NRI Investment Advisory</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Get Off-Market Price Sheet
                </button>
              </form>

              <div className="mt-3 text-center text-[11px] text-sigma-stone-400">
                100% Privacy Protected • Zero Spam Guarantee
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
