import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { submitLead } from '@/services/leads';

interface CareerApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CareerApplicationModal({ isOpen, onClose }: CareerApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Sales & Marketing',
    experience: 'Fresher',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your full name and valid phone number.');
      return;
    }
    setError('');

    try {
      await submitLead({
        leadType: 'career',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: `[Interest: ${formData.interest}] [Exp: ${formData.experience}] ${formData.message}`,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError('Failed to submit career application.');
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
                Application Received
              </h3>
              <p className="text-sm text-sigma-stone-600 max-w-xs mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. Our HR talent team will review your profile and contact you shortly.
              </p>
            </div>
          ) : (
            <div>
              <span className="eyebrow text-sigma-blue-600">Career Interest</span>
              <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1">
                Express Interest to Join Sigma
              </h2>

              {error && (
                <div className="mt-3 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Your Full Name *
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
                      Area of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                    >
                      <option value="Sales & Marketing">Sales & Marketing</option>
                      <option value="Construction & Engineering">Construction & Engineering</option>
                      <option value="Land Development">Land Development</option>
                      <option value="Customer Experience">Customer Experience</option>
                      <option value="Channel Associate">Channel Associate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Current Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                  >
                    <option value="Fresher">Fresher / Intern</option>
                    <option value="1-3 Years">1-3 Years Experience</option>
                    <option value="3-5 Years">3-5 Years Experience</option>
                    <option value="5+ Years">5+ Years (Managerial)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Brief Background / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your career goals or current background..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
