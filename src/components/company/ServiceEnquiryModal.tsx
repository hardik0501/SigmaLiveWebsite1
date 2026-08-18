import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Briefcase } from 'lucide-react';
import { ServiceItem } from '@/types/company';
import { submitLead } from '@/services/leads';

interface ServiceEnquiryModalProps {
  service: ServiceItem | null;
  isOpen?: boolean;
  onClose: () => void;
}

export function ServiceEnquiryModal({ service, isOpen = true, onClose }: ServiceEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service && isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, isOpen, onClose]);

  if (!service || !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');

    try {
      await submitLead({
        leadType: 'consultation',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: `[Service Requested: ${service.name}] ${formData.message}`,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError('Failed to submit request.');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-sigma-graphite-950/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 p-6 md:p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-sigma-stone-400 hover:text-sigma-graphite-900 rounded-full hover:bg-sigma-stone-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-full bg-sigma-green-50 text-sigma-green-600 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-sigma-graphite-900">
                Service Consultation Requested
              </h3>
              <p className="text-sm text-sigma-stone-600 max-w-xs mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. Our specialist for{' '}
                <span className="font-semibold text-sigma-blue-700">{service.name}</span> will contact you shortly.
              </p>
            </div>
          ) : (
            <div>
              <span className="eyebrow text-sigma-blue-600">Service Consultation</span>
              <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1">
                Consult an Expert — {service.name}
              </h2>

              <div className="mt-4 p-3 bg-sigma-stone-100/80 border border-sigma-stone-200/80 rounded-2xl flex items-center gap-2 text-xs font-semibold text-sigma-graphite-900">
                <Briefcase className="h-4 w-4 text-sigma-blue-600 shrink-0" />
                <span>Service: {service.name}</span>
              </div>

              {error && (
                <div className="mt-3 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`e.g. Schedule a consultation regarding ${service.name.toLowerCase()}...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
