import React, { useState, useEffect } from 'react';
import { submitLead, SIGMA_PHONE_NUMBER, generateWhatsAppLink } from '@/services/leads';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Building2, Send } from 'lucide-react';

export function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: 'Buy Property',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Contact Sigma Homes India | Sales & Inquiry Hub';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please fill in your name and phone number.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await submitLead({
        leadType: 'contact',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: `[Reason: ${formData.reason}] ${formData.message}`,
      });

      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        navigate('/thank-you?type=contact');
      }, 1500);
    } catch (err) {
      setLoading(false);
      setError('Form submission failed. Please try again or call us directly.');
    }
  };

  const whatsappUrl = generateWhatsAppLink({});

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="eyebrow text-sigma-blue-600">Central Communication Hub</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900">
            Let's Talk About Your Property Goals.
          </h1>
          <p className="text-base text-sigma-stone-600 leading-relaxed font-sans">
            Whether you are buying, selling, investing, or simply exploring options, Sigma Homes is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Office & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-sigma-blue-950 text-white rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-sigma-amber-400 uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
                Sigma Group Headquarters
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-white">Sigma Homes India</h3>
                <p className="text-xs text-sigma-stone-300 mt-1">Jaipur · Noida · Gurgaon</p>
              </div>

              <div className="pt-4 border-t border-white/15 space-y-3 text-xs">
                <a
                  href={`tel:${SIGMA_PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-white font-bold hover:text-sigma-amber-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-sigma-amber-400 shrink-0" />
                  Sales Helpline: {SIGMA_PHONE_NUMBER}
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sigma-green-400 font-bold hover:underline"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  Instant WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 md:p-8 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl space-y-4">
            <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900">
              Send an Enquiry
            </h2>

            {error && (
              <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    Reason for Contact
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                  >
                    <option value="Buy Property">Buy a Property</option>
                    <option value="Investment">Investment Advisory</option>
                    <option value="Sell Property">Sell Property</option>
                    <option value="NRI Consultation">NRI Services</option>
                    <option value="Book Site Visit">Book Site Visit</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  Message / Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
