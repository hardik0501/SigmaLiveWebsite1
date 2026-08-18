import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, MapPin, CheckCircle } from 'lucide-react';
import { Project, EnquiryPayload } from '@/types/project';
import { submitLead } from '@/services/leads';

interface EnquiryModalProps {
  project: Project | null;
  isOpen?: boolean;
  onClose: () => void;
}

export function EnquiryModal({ project, isOpen = true, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState<Partial<EnquiryPayload>>({
    name: '',
    phone: '',
    whatsapp: '',
    preferredBhk: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project && isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, isOpen, onClose]);

  if (!project || !isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and valid contact phone number.');
      return;
    }
    setError('');

    try {
      await submitLead({
        leadType: 'property_enquiry',
        name: formData.name,
        phone: formData.phone,
        projectName: project.name,
        projectId: project.id,
        location: project.location,
        configuration: formData.preferredBhk,
        message: formData.message,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError('Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-sigma-graphite-950/60 backdrop-blur-xs"
        />

        {/* Modal Container */}
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
                Enquiry Submitted
              </h3>
              <p className="text-sm text-sigma-stone-600 max-w-xs mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. Our relationship manager for{' '}
                <span className="font-semibold text-sigma-blue-700">{project.name}</span> will contact you shortly.
              </p>
            </div>
          ) : (
            <div>
              <span className="eyebrow text-sigma-blue-600">Quick Property Enquiry</span>
              <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1">
                Request Details
              </h2>

              {/* Pre-populated Project Metadata Badge */}
              <div className="mt-4 p-3 bg-sigma-stone-100/80 border border-sigma-stone-200/80 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sigma-graphite-900">
                    <Building2 className="h-4 w-4 text-sigma-blue-600" />
                    {project.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-sigma-stone-500 mt-0.5">
                    <MapPin className="h-3 w-3 text-sigma-stone-400" />
                    {project.location}
                  </div>
                </div>
                <span className="text-xs font-bold text-sigma-blue-700 bg-white px-2.5 py-1 rounded-lg shadow-2xs">
                  {project.priceLabel}
                </span>
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
                      Preferred Layout
                    </label>
                    <select
                      value={formData.preferredBhk}
                      onChange={(e) => setFormData({ ...formData, preferredBhk: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                    >
                      <option value="">Any Layout</option>
                      {project.configurations.map((cfg) => (
                        <option key={cfg} value={cfg}>
                          {cfg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Specific Requirements / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Schedule a weekend site visit, request official cost sheet, or loan assistance."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
