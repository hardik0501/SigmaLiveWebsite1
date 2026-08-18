import React, { useState, useEffect } from 'react';
import { submitLead } from '@/services/leads';
import { useNavigate } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

export function RequestCallbackPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'Immediate Callback',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Request Callback | Sigma Homes India';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    try {
      await submitLead({
        leadType: 'callback',
        name: formData.name,
        phone: formData.phone,
        preferredTime: formData.preferredTime,
        message: formData.message,
      });

      setLoading(false);
      navigate('/thank-you?type=callback');
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content max-w-md">
        <div className="text-center mb-8 space-y-2">
          <span className="eyebrow text-sigma-blue-600">Instant Advisory</span>
          <h1 className="text-3xl font-bold font-serif text-sigma-graphite-900">
            We'll Call You Back
          </h1>
          <p className="text-xs text-sigma-stone-600">
            Leave your phone number and a relationship manager will call you back.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium"
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
                className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                Preferred Callback Time
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-semibold"
              >
                <option value="Immediate Callback">Immediate Callback (Next 15 mins)</option>
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <PhoneCall className="h-4 w-4" />
              {loading ? 'Requesting...' : 'Request Callback'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
