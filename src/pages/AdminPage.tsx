import React, { useState, useEffect, useMemo } from 'react';
import { LeadPayload, LeadType, LeadStatus } from '@/types/lead';
import {
  getStoredLeads,
  syncLeadsFromCloud,
  updateLeadStatus,
  deleteLead,
  exportLeadsToCsv,
  generateWhatsAppLink,
  SIGMA_PHONE_NUMBER,
} from '@/services/leads';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  LogOut,
  Search,
  Filter,
  Download,
  Phone,
  MessageCircle,
  Trash2,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Clock,
  TrendingUp,
  Building2,
  Globe,
  Tag,
  ShieldCheck,
  RefreshCw,
  ChevronRight,
  X,
} from 'lucide-react';

const ADMIN_USERNAME = 'SigmaHomes';
const ADMIN_PASS = 'Sigm@homes2026';
const AUTH_KEY = 'sigma_admin_auth';

export function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  });
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // CRM Leads State
  const [leads, setLeads] = useState<LeadPayload[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');
  const [activeDetailLead, setActiveDetailLead] = useState<LeadPayload | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // Load leads & listen for real-time updates
  const refreshLeads = async () => {
    setIsSyncing(true);
    // Load local first for immediate response
    setLeads(getStoredLeads());
    // Then fetch and merge cloud leads across devices/browsers
    const synced = await syncLeadsFromCloud();
    setLeads(synced);
    setIsSyncing(false);
  };

  useEffect(() => {
    document.title = 'Sigma Homes | Admin Lead Management CRM';
    if (isAuthenticated) {
      refreshLeads();
      // Poll cloud API every 8 seconds for live multi-browser / multi-device sync
      const interval = setInterval(() => {
        syncLeadsFromCloud().then((synced) => setLeads(synced));
      }, 8000);

      const handleLeadsUpdated = (e: Event) => {
        if ('detail' in e) {
          setLeads((e as CustomEvent).detail);
        } else {
          refreshLeads();
        }
      };

      window.addEventListener('sigma-leads-updated', handleLeadsUpdated);
      window.addEventListener('storage', handleLeadsUpdated);

      return () => {
        clearInterval(interval);
        window.removeEventListener('sigma-leads-updated', handleLeadsUpdated);
        window.removeEventListener('storage', handleLeadsUpdated);
      };
    }
  }, [isAuthenticated]);

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput.trim() === ADMIN_USERNAME && passwordInput === ADMIN_PASS) {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setLoginError('');
      refreshLeads();
    } else {
      setLoginError('Invalid Username or Password. Please try again.');
    }
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  // Lead Status Change
  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    updateLeadStatus(id, newStatus);
    refreshLeads();
    if (activeDetailLead && activeDetailLead.id === id) {
      setActiveDetailLead({ ...activeDetailLead, status: newStatus });
    }
  };

  // Lead Delete
  const handleDeleteLead = (id: string) => {
    if (window.confirm('Are you sure you want to delete this enquiry record?')) {
      deleteLead(id);
      refreshLeads();
      if (activeDetailLead?.id === id) setActiveDetailLead(null);
    }
  };

  // Filtered & Sorted Leads Computation
  const filteredLeads = useMemo(() => {
    return leads
      .filter((l) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = l.name.toLowerCase().includes(q);
          const matchPhone = l.phone.toLowerCase().includes(q);
          const matchEmail = l.email?.toLowerCase().includes(q) || false;
          const matchProject = l.projectName?.toLowerCase().includes(q) || false;
          const matchLocation = l.location?.toLowerCase().includes(q) || false;
          const matchId = l.id?.toLowerCase().includes(q) || false;
          if (!matchName && !matchPhone && !matchEmail && !matchProject && !matchLocation && !matchId) {
            return false;
          }
        }

        // Type Filter
        if (selectedType !== 'all' && l.leadType !== selectedType) return false;

        // Status Filter
        if (selectedStatus !== 'all' && (l.status || 'New') !== selectedStatus) return false;

        // Timeframe Filter
        if (selectedTimeframe !== 'all' && l.createdAt) {
          const leadDate = new Date(l.createdAt).getTime();
          const now = Date.now();
          if (selectedTimeframe === 'today') {
            const startOfToday = new Date().setHours(0, 0, 0, 0);
            if (leadDate < startOfToday) return false;
          } else if (selectedTimeframe === '7days') {
            if (now - leadDate > 7 * 86400000) return false;
          } else if (selectedTimeframe === '30days') {
            if (now - leadDate > 30 * 86400000) return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        }
        if (sortBy === 'oldest') {
          return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [leads, searchQuery, selectedType, selectedStatus, selectedTimeframe, sortBy]);

  // Metric Stats Summary
  const stats = useMemo(() => {
    const total = leads.length;
    const startOfToday = new Date().setHours(0, 0, 0, 0);
    const todayCount = leads.filter((l) => l.createdAt && new Date(l.createdAt).getTime() >= startOfToday).length;
    const siteVisits = leads.filter((l) => l.leadType === 'site_visit').length;
    const priceRequests = leads.filter((l) => l.leadType === 'price_request').length;
    const investments = leads.filter((l) => l.leadType === 'investment' || l.leadType === 'nri').length;
    const sellSubmissions = leads.filter((l) => l.leadType === 'sell_property').length;

    return { total, todayCount, siteVisits, priceRequests, investments, sellSubmissions };
  }, [leads]);

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sigma-graphite-950 text-white flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        <div className="w-full max-w-md bg-sigma-navy-900/90 border border-white/15 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative z-10 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-sigma-amber-500/10 border border-sigma-amber-400/30 text-sigma-amber-400 flex items-center justify-center">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="text-2xl font-bold font-serif text-white">Sigma Group CRM</h1>
            <p className="text-xs text-sigma-stone-300">Enter administrator credentials to access the lead management system.</p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-semibold rounded-xl text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-400 mb-1.5">
                Username
              </label>
              <div className="relative">
                <User className="h-4 w-4 text-sigma-stone-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Enter admin username"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-sigma-graphite-950/80 border border-white/15 rounded-xl text-sm font-medium text-white placeholder:text-sigma-stone-500 focus:outline-none focus:ring-2 focus:ring-sigma-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sigma-stone-400 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="h-4 w-4 text-sigma-stone-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter admin password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-sigma-graphite-950/80 border border-white/15 rounded-xl text-sm font-medium text-white placeholder:text-sigma-stone-500 focus:outline-none focus:ring-2 focus:ring-sigma-amber-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-sigma-stone-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-sm shadow-xl transition-all"
            >
              Sign In to CRM Portal
            </button>
          </form>

          <div className="text-center pt-2 text-[11px] text-sigma-stone-500">
            Authorized Sigma Homes Personnel Only
          </div>
        </div>
      </div>
    );
  }

  // LOGGED IN CRM DASHBOARD
  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-0 pb-20">
      {/* Top Admin Navigation Bar */}
      <div className="bg-sigma-graphite-950 text-white border-b border-white/10 py-4 mb-8">
        <div className="container-content flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sigma-amber-500 text-sigma-graphite-950 font-black text-sm flex items-center justify-center">
              CRM
            </div>
            <div>
              <h1 className="text-lg font-bold font-serif text-white">Sigma Homes Lead Management Engine</h1>
              <p className="text-[11px] text-sigma-stone-400">Live Customer Enquiries & Multi-Device Lead Sync</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => exportLeadsToCsv(filteredLeads)}
              className="px-4 py-2 bg-sigma-green-600 hover:bg-sigma-green-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              Export CSV ({filteredLeads.length})
            </button>

            <button
              onClick={refreshLeads}
              disabled={isSyncing}
              className={`p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors ${
                isSyncing ? 'animate-spin opacity-70' : ''
              }`}
              title="Sync Cloud Leads"
            >
              <RefreshCw className="h-4 w-4" />
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <LogOut className="h-3.5 w-3.5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container-content">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-stone-400 block">Total Leads</span>
            <span className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1 block">{stats.total}</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-amber-600 block">Today's Leads</span>
            <span className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1 block">{stats.todayCount}</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-blue-600 block">Site Visits</span>
            <span className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1 block">{stats.siteVisits}</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sigma-green-600 block">Cost Sheet Requests</span>
            <span className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1 block">{stats.priceRequests}</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 block">Investment & NRI</span>
            <span className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1 block">{stats.investments}</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block">Seller Submissions</span>
            <span className="text-2xl font-bold font-serif text-sigma-graphite-900 mt-1 block">{stats.sellSubmissions}</span>
          </div>
        </div>

        {/* Filter & Control Bar */}
        <div className="p-4 md:p-6 bg-white rounded-3xl border border-sigma-stone-200/80 shadow-sm mb-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search Input */}
            <div className="relative lg:col-span-2">
              <Search className="h-4 w-4 text-sigma-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search name, phone, email, project or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
              />
            </div>

            {/* Lead Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
              >
                <option value="all">All Lead Types</option>
                <option value="site_visit">Site Visit Requests</option>
                <option value="price_request">Cost Sheet Requests</option>
                <option value="investment">Investment Advisory</option>
                <option value="nri">NRI Consultation</option>
                <option value="sell_property">Sell Property</option>
                <option value="callback">Callback Requests</option>
                <option value="consultation">Guided Consultation</option>
                <option value="contact">Contact Page Enquiry</option>
                <option value="career">Career Interest</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="New">Status: New</option>
                <option value="Contacted">Status: Contacted</option>
                <option value="In Progress">Status: In Progress</option>
                <option value="Closed">Status: Closed</option>
              </select>
            </div>

            {/* Timeframe Filter */}
            <div>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="w-full px-3 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lead Records Table */}
        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl overflow-hidden">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-sigma-stone-200 bg-sigma-stone-50 text-[11px] font-bold uppercase tracking-wider text-sigma-stone-500">
                  <th className="p-4">Ref ID / Time</th>
                  <th className="p-4">Customer Details</th>
                  <th className="p-4">Intent / Type</th>
                  <th className="p-4">Target Project / Location</th>
                  <th className="p-4">CRM Status</th>
                  <th className="p-4 text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sigma-stone-200/60 text-xs font-medium">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-sigma-stone-500">
                      No enquiries matching current search and filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((l) => {
                    const whatsappLink = generateWhatsAppLink({ message: `Hi ${l.name}, following up regarding your enquiry with Sigma Homes.` });
                    const statusColor =
                      l.status === 'Closed'
                        ? 'bg-gray-100 text-gray-700 border-gray-300'
                        : l.status === 'In Progress'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : l.status === 'Contacted'
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : 'bg-amber-50 text-amber-800 border-amber-300 font-bold';

                    return (
                      <tr key={l.id} className="hover:bg-sigma-stone-50/70 transition-colors">
                        <td className="p-4">
                          <span className="font-bold text-sigma-graphite-900 block">{l.id}</span>
                          <span className="text-[11px] text-sigma-stone-400 block mt-0.5">
                            {l.createdAt ? new Date(l.createdAt).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }) : 'N/A'}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className="font-bold text-sigma-graphite-900 block text-sm">{l.name}</span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-sigma-stone-600 font-sans">{l.phone}</span>
                            {l.email && <span className="text-[11px] text-sigma-stone-400">({l.email})</span>}
                          </div>
                        </td>

                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-sigma-stone-100 border border-sigma-stone-200 text-sigma-blue-800 rounded-lg text-[11px] font-bold uppercase tracking-wider inline-block">
                            {l.leadType.replace('_', ' ')}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className="font-bold text-sigma-graphite-900 block">
                            {l.projectName || l.location || 'General Inquiry'}
                          </span>
                          {l.configuration && (
                            <span className="text-[11px] text-sigma-stone-500 block">{l.configuration}</span>
                          )}
                        </td>

                        <td className="p-4">
                          <select
                            value={l.status || 'New'}
                            onChange={(e) => handleStatusChange(l.id || '', e.target.value as LeadStatus)}
                            className={`px-2.5 py-1 rounded-lg border text-[11px] focus:outline-none ${statusColor}`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>

                        <td className="p-4 text-right space-x-1.5">
                          <button
                            onClick={() => setActiveDetailLead(l)}
                            className="px-2.5 py-1.5 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-lg text-[11px] font-bold transition-colors inline-flex items-center gap-1"
                            title="View Full Metadata"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Details
                          </button>

                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 bg-sigma-green-50 text-sigma-green-600 hover:bg-sigma-green-600 hover:text-white rounded-lg transition-colors inline-block"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                          </a>

                          <a
                            href={`tel:${l.phone.replace(/\s+/g, '')}`}
                            className="p-1.5 bg-sigma-blue-50 text-sigma-blue-700 hover:bg-sigma-blue-700 hover:text-white rounded-lg transition-colors inline-block"
                            title="Call Customer"
                          >
                            <Phone className="h-3.5 w-3.5" />
                          </a>

                          <button
                            onClick={() => handleDeleteLead(l.id || '')}
                            className="p-1.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors inline-block"
                            title="Delete Lead"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lead Full Detail Modal */}
      {activeDetailLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setActiveDetailLead(null)}
            className="absolute inset-0 bg-sigma-graphite-950/60 backdrop-blur-xs"
          />

          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 md:p-8 z-10 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveDetailLead(null)}
              className="absolute top-5 right-5 p-2 text-sigma-stone-400 hover:text-sigma-graphite-900 rounded-full hover:bg-sigma-stone-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-sigma-blue-700 uppercase tracking-wider">
                Ref: {activeDetailLead.id}
              </span>
              <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900">
                {activeDetailLead.name}
              </h2>
              <p className="text-xs text-sigma-stone-500">
                Submitted on {activeDetailLead.createdAt ? new Date(activeDetailLead.createdAt).toLocaleString('en-IN') : 'N/A'}
              </p>
            </div>

            <div className="space-y-3 divide-y divide-sigma-stone-200/60 text-xs">
              <div className="pt-2 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Phone Number</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.phone}</span>
                </div>
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Email Address</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.email || 'Not Provided'}</span>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Lead Type</span>
                  <span className="text-sigma-blue-800 font-bold uppercase">{activeDetailLead.leadType}</span>
                </div>
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Status</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.status || 'New'}</span>
                </div>
              </div>

              {activeDetailLead.projectName && (
                <div className="pt-2">
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Project Name</span>
                  <span className="text-sigma-graphite-900 font-bold text-sm">{activeDetailLead.projectName}</span>
                </div>
              )}

              {activeDetailLead.location && (
                <div className="pt-2">
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Location / Locality</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.location}</span>
                </div>
              )}

              {activeDetailLead.budget && (
                <div className="pt-2">
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Budget / Expected Price</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.budget}</span>
                </div>
              )}

              {activeDetailLead.preferredDate && (
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Preferred Date</span>
                    <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.preferredDate}</span>
                  </div>
                  <div>
                    <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Preferred Time</span>
                    <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.preferredTime}</span>
                  </div>
                </div>
              )}

              {activeDetailLead.message && (
                <div className="pt-2">
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block mb-1">Message / Requirements</span>
                  <div className="p-3 bg-sigma-stone-50 rounded-xl border border-sigma-stone-200 text-sigma-graphite-900 leading-relaxed font-mono text-[11px]">
                    {activeDetailLead.message}
                  </div>
                </div>
              )}

              <div className="pt-2 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Source Page</span>
                  <span className="text-sigma-stone-700">{activeDetailLead.sourcePage || '/'}</span>
                </div>
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">UTM Source / Campaign</span>
                  <span className="text-sigma-stone-700">
                    {activeDetailLead.utmSource ? `${activeDetailLead.utmSource} / ${activeDetailLead.utmCampaign || 'organic'}` : 'Direct / Organic'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sigma-stone-200 flex gap-2">
              <a
                href={generateWhatsAppLink({ message: `Hi ${activeDetailLead.name}, following up regarding your enquiry with Sigma Homes.` })}
                target="_blank"
                rel="noreferrer"
                className="w-1/2 py-3 bg-sigma-green-600 hover:bg-sigma-green-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Customer
              </a>
              <a
                href={`tel:${activeDetailLead.phone.replace(/\s+/g, '')}`}
                className="w-1/2 py-3 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="h-4 w-4" />
                Call Customer
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
