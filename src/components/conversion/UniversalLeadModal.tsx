import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Building2, MapPin, Calendar, Clock, DollarSign } from 'lucide-react';
import { LeadPayload, LeadType } from '@/types/lead';
import { submitLead } from '@/services/leads';
import { useNavigate } from 'react-router-dom';

interface UniversalLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadType?: LeadType;
  title?: string;
  subtitle?: string;
  projectName?: string;
  projectId?: string;
  location?: string;
}

export function UniversalLeadModal({
  isOpen,
  onClose,
  leadType = 'property_enquiry',
  title,
  subtitle,
  projectName,
  projectId,
  location,
}: UniversalLeadModalProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<LeadPayload>>({
    name: '',
    phone: '',
    email: '',
    budget: '',
    configuration: '',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setError('Please provide your full name and valid contact phone number.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await submitLead({
        leadType,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        projectName,
        projectId,
        location,
        budget: formData.budget,
        configuration: formData.configuration,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
      });

      setLoading(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        onClose();
        navigate(`/thank-you?type=${leadType}`);
      }, 1500);
    } catch (err) {
      setLoading(false);
      setError('Form submission failed. Please try again or call us directly.');
    }
  };

  const modalTitle = title || (
    leadType === 'site_visit' ? 'Book a Private Site Tour' :
    leadType === 'price_request' ? 'Request Official Cost Sheet' :
    leadType === 'investment' ? 'Investment Consultation' :
    leadType === 'nri' ? 'NRI Property Consultation' :
    leadType === 'sell_property' ? 'Property Evaluation' :
    'Request Details'
  );

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
                Enquiry Submitted
              </h3>
              <p className="text-sm text-sigma-stone-600 max-w-xs mx-auto">
                Thank you, <span className="font-semibold">{formData.name}</span>. We are redirecting you to your confirmation details...
              </p>
            </div>
          ) : (
            <div>
              <span className="eyebrow text-sigma-blue-600">Sigma Direct Assistance</span>
              <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1">
                {modalTitle}
              </h2>

              {(projectName || location) && (
                <div className="mt-3 p-3 bg-sigma-stone-100/80 border border-sigma-stone-200/80 rounded-2xl flex items-center justify-between text-xs font-semibold text-sigma-graphite-900">
                  {projectName && (
                    <span className="flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-sigma-blue-600" />
                      {projectName}
                    </span>
                  )}
                  {location && (
                    <span className="flex items-center gap-1 text-sigma-stone-500">
                      <MapPin className="h-3 w-3 text-sigma-stone-400" />
                      {location}
                    </span>
                  )}
                </div>
              )}

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

                {leadType === 'site_visit' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                        Preferred Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Message / Requirement Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
