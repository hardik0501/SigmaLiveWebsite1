import React, { useState, useEffect } from 'react';
import { submitLead } from '@/services/leads';
import { useNavigate } from 'react-router-dom';
import { Tag, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export function SellPropertyPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'Apartment',
    expectedPrice: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Sell Your Property | Sigma Homes India';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location) {
      setError('Please provide your name, phone number, and property location.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await submitLead({
        leadType: 'sell_property',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        propertyType: formData.propertyType,
        budget: formData.expectedPrice,
        message: formData.message,
      });

      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        navigate('/thank-you?type=sell_property');
      }, 1500);
    } catch (err) {
      setLoading(false);
      setError('Form submission failed. Please try again or call us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow text-sigma-blue-600">Property Resale & Advisory</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-sigma-graphite-900 tracking-tight leading-[1.08]">
              Thinking About Selling Your Property?
            </h1>
            <p className="text-base md:text-lg text-sigma-stone-600 font-sans leading-relaxed">
              Connect with Sigma Homes for professional property evaluation, marketing exposure, and closing support across Jaipur and NCR.
            </p>

            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sigma-stone-400">Our Seller Capabilities</h3>
              {[
                'Professional market valuation & catchment pricing research',
                'Exposure to 2,500+ verified channel partners & buyer network',
                'Transparent legal documentation & registry execution support',
              ].map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
                  <CheckCircle2 className="h-4 w-4 text-sigma-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-sigma-graphite-900">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-6 p-6 md:p-8 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl space-y-4">
            <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900">
              Request Property Evaluation
            </h2>
            <p className="text-xs text-sigma-stone-500">
              Fill in your property details and our resale team will contact you.
            </p>

            {error && (
              <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  Owner Name *
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
                    Property Location / Locality *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mansarovar, Jaipur"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                  >
                    <option value="Apartment">Apartment / Flat</option>
                    <option value="Villa">Villa / House</option>
                    <option value="Plot & Land">Plot & Land</option>
                    <option value="Commercial">Commercial Property</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                    Expected Price
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹60 Lakhs"
                    value={formData.expectedPrice}
                    onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  Property Description / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter area size, floor number, age of property, or specific requirements..."
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
                {loading ? 'Submitting...' : 'Submit Property for Evaluation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
