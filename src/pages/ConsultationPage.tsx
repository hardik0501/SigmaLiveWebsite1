import React, { useState, useEffect } from 'react';
import { submitLead } from '@/services/leads';
import { useNavigate } from 'react-router-dom';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export function ConsultationPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    objective: 'Buy a Home',
    location: 'Mansarovar',
    propertyType: 'Apartment',
    budget: '₹40L - ₹60L',
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    document.title = 'Property Advisory | Sigma Homes India';
  }, []);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      await submitLead({
        leadType: 'consultation',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        propertyType: formData.propertyType,
        budget: formData.budget,
        message: `[Objective: ${formData.objective}]`,
      });

      navigate('/thank-you?type=consultation');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content max-w-2xl">
        <div className="text-center mb-8 space-y-2">
          <span className="eyebrow text-sigma-blue-600">Property Advisory</span>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900">
            Expert Guidance for Your Next Home
          </h1>
          <p className="text-xs md:text-sm text-sigma-stone-600">
            Data-backed advisory to help you find, verify, and secure the right residential property in Jaipur.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all ${
                step >= s ? 'w-10 bg-sigma-blue-700' : 'w-4 bg-sigma-stone-300'
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 p-6 md:p-8 shadow-xl">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-sigma-graphite-900">Step 1: Your Primary Objective</h2>
              <div className="grid grid-cols-2 gap-3">
                {['Buy a Home', 'Investment', 'Sell Property', 'NRI Consultation'].map((obj) => (
                  <button
                    key={obj}
                    type="button"
                    onClick={() => setFormData({ ...formData, objective: obj })}
                    className={`p-4 rounded-2xl border text-left font-bold text-xs transition-all ${
                      formData.objective === obj
                        ? 'bg-sigma-blue-700 text-white border-sigma-blue-700 shadow-sm'
                        : 'bg-sigma-stone-50 border-sigma-stone-200 text-sigma-graphite-900 hover:bg-sigma-stone-100'
                    }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                Next Step <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-sigma-graphite-900">Step 2: Preferences & Budget</h2>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  Preferred Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold"
                >
                  <option value="Mansarovar">Mansarovar</option>
                  <option value="Mansarovar Extension">Mansarovar Extension</option>
                  <option value="Vaishali Nagar">Vaishali Nagar</option>
                  <option value="Kalwar Road">Kalwar Road</option>
                  <option value="Jagatpura">Jagatpura</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold"
                >
                  <option value="Under ₹40 Lakhs">Under ₹40 Lakhs</option>
                  <option value="₹40L - ₹60L">₹40L - ₹60L</option>
                  <option value="₹60L - ₹1 Crore">₹60L - ₹1 Crore</option>
                  <option value="₹1 Crore+">₹1 Crore+</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 py-3 bg-sigma-stone-200 hover:bg-sigma-stone-300 text-sigma-graphite-900 rounded-xl font-bold text-xs"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-2/3 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  Next Step <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold font-serif text-sigma-graphite-900">Step 3: Your Contact Information</h2>
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

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 py-3 bg-sigma-stone-200 hover:bg-sigma-stone-300 text-sigma-graphite-900 rounded-xl font-bold text-xs"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
                >
                  Request Recommendations
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
