import React, { useState, useEffect } from 'react';
import { projectsData } from '@/data/projectsData';
import { submitLead } from '@/services/leads';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Building2 } from 'lucide-react';

export function BookSiteVisitPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectId: projectsData[0]?.id || '',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Book Site Visit | Sigma Homes India';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    const selectedProj = projectsData.find((p) => p.id === formData.projectId);

    try {
      await submitLead({
        leadType: 'site_visit',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        projectId: formData.projectId,
        projectName: selectedProj?.name,
        location: selectedProj?.location,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
      });

      setLoading(false);
      navigate('/thank-you?type=site_visit');
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-32 pb-20 md:pt-40">
      <div className="container-content max-w-xl">
        <div className="text-center mb-8 space-y-2">
          <span className="eyebrow text-sigma-blue-600">VIP Site Tour</span>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900">
            Experience the Property in Person
          </h1>
          <p className="text-xs md:text-sm text-sigma-stone-600">
            Choose a convenient date and let Sigma Homes coordinate your site visit.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                Select Project *
              </label>
              <select
                value={formData.projectId}
                onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-semibold"
              >
                {projectsData.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.location})
                  </option>
                ))}
              </select>
            </div>

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
                  className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-500 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-sm font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors disabled:opacity-50"
            >
              {loading ? 'Scheduling...' : 'Book Private Site Visit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
