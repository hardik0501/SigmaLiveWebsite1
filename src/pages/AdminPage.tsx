import React, { useState, useEffect, useMemo, Component, ErrorInfo, ReactNode } from 'react';
import { LeadPayload, LeadType, LeadStatus } from '@/types/lead';
import {
  getStoredLeads,
  syncLeadsFromCloud,
  updateLeadStatus,
  deleteLead,
  exportLeadsToCsv,
  generateWhatsAppLink,
  purgeTestLeads,
} from '@/services/leads';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  LogOut,
  Search,
  Download,
  Phone,
  MessageCircle,
  Trash2,
  ExternalLink,
  RefreshCw,
  X,
  AlertTriangle,
  ShieldAlert,
  Radio,
  FileText,
  Building2,
  Calendar,
  Clock,
  Briefcase,
  MapPin,
  CheckCircle2,
  Inbox,
  Send,
} from 'lucide-react';

const ADMIN_USERNAME = 'SigmaHomes';
const ADMIN_PASS = 'Sigm@homes2026';
const AUTH_KEY = 'sigma_admin_auth';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class AdminErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Sigma Admin ErrorBoundary Caught]:', error, errorInfo);
  }

  private handleReset = () => {
    localStorage.removeItem('sigma_leads');
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-sigma-graphite-950 text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-sigma-navy-900 border border-white/10 rounded-3xl p-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold font-serif">Admin Portal Render Error</h2>
            <p className="text-xs text-sigma-stone-400">
              An unexpected error occurred. Click below to clear cache and reload cleanly.
            </p>
            <button
              onClick={this.handleReset}
              className="w-full py-3 bg-sigma-amber-500 hover:bg-sigma-amber-600 text-sigma-graphite-950 rounded-xl font-bold text-xs shadow-lg transition-colors"
            >
              Clear Cache & Reload Admin
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Map each leadType to category styling & labels
function getCategoryBadge(leadType?: string) {
  switch (leadType) {
    case 'site_visit':
      return { label: 'Site Visit Booking', color: 'bg-emerald-100 text-emerald-800 border-emerald-300', icon: '📍' };
    case 'price_request':
      return { label: 'Cost Sheet Request', color: 'bg-blue-100 text-blue-800 border-blue-300', icon: '💰' };
    case 'property_enquiry':
      return { label: 'Property Enquiry', color: 'bg-indigo-100 text-indigo-800 border-indigo-300', icon: '🏠' };
    case 'sell_property':
      return { label: 'Sell Property Listing', color: 'bg-amber-100 text-amber-900 border-amber-300', icon: '🏷️' };
    case 'callback':
      return { label: 'Callback Request', color: 'bg-purple-100 text-purple-800 border-purple-300', icon: '📞' };
    case 'career':
      return { label: 'Career Application', color: 'bg-teal-100 text-teal-800 border-teal-300', icon: '💼' };
    case 'service_enquiry':
      return { label: 'Service Consultation', color: 'bg-cyan-100 text-cyan-800 border-cyan-300', icon: '🛠️' };
    case 'leader_contact':
      return { label: 'Executive Contact', color: 'bg-violet-100 text-violet-800 border-violet-300', icon: '👔' };
    case 'location_enquiry':
      return { label: 'Location Guide Request', color: 'bg-sky-100 text-sky-800 border-sky-300', icon: '🗺️' };
    case 'consultation':
      return { label: 'Guided Consultation', color: 'bg-orange-100 text-orange-800 border-orange-300', icon: '💬' };
    case 'contact':
      return { label: 'Contact Us Message', color: 'bg-slate-100 text-slate-800 border-slate-300', icon: '✉️' };
    case 'investment':
      return { label: 'Investment Advisory', color: 'bg-rose-100 text-rose-800 border-rose-300', icon: '📈' };
    case 'nri':
      return { label: 'NRI Advisory', color: 'bg-pink-100 text-pink-800 border-pink-300', icon: '✈️' };
    default:
      return { label: 'General Enquiry', color: 'bg-gray-100 text-gray-800 border-gray-300', icon: '📝' };
  }
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Submissions', icon: '🌐' },
  { id: 'site_visit', label: 'Site Visits', icon: '📍' },
  { id: 'price_request', label: 'Cost Sheets', icon: '💰' },
  { id: 'property_enquiry', label: 'Property Enquiries', icon: '🏠' },
  { id: 'sell_property', label: 'Sell Property', icon: '🏷️' },
  { id: 'callback', label: 'Callback Requests', icon: '📞' },
  { id: 'career', label: 'Career Applications', icon: '💼' },
  { id: 'service_enquiry', label: 'Service Consultations', icon: '🛠️' },
  { id: 'leader_contact', label: 'Executive Contact', icon: '👔' },
  { id: 'location_enquiry', label: 'Location Guides', icon: '🗺️' },
  { id: 'consultation', label: 'Guided Consultations', icon: '💬' },
  { id: 'contact', label: 'Contact Messages', icon: '✉️' },
  { id: 'investment_nri', label: 'Investment & NRI', icon: '📈' },
];

function AdminPageContent() {
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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');
  const [activeDetailLead, setActiveDetailLead] = useState<LeadPayload | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>(new Date().toLocaleTimeString());

  // Load leads & listen for real-time updates
  const refreshLeads = async () => {
    setIsSyncing(true);
    setLeads(getStoredLeads());
    try {
      const synced = await syncLeadsFromCloud();
      if (Array.isArray(synced)) setLeads(synced);
    } catch (e) {
      console.warn('[Admin] Sync error:', e);
    } finally {
      setIsSyncing(false);
      setLastUpdated(new Date().toLocaleTimeString());
    }
  };

  useEffect(() => {
    document.title = 'Sigma Homes | Real-Time CRM Dashboard';
    if (isAuthenticated) {
      refreshLeads();

      // Setup BroadcastChannel for instant multi-tab real-time update
      let bc: BroadcastChannel | null = null;
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        bc = new BroadcastChannel('sigma_leads_channel');
        bc.onmessage = (event) => {
          if (event.data && event.data.type === 'leads-updated' && Array.isArray(event.data.leads)) {
            setLeads(event.data.leads);
            setLastUpdated(new Date().toLocaleTimeString());
          }
        };
      }

      // Poll cloud storage every 6 seconds for live multi-browser / multi-device sync
      const interval = setInterval(() => {
        syncLeadsFromCloud()
          .then((synced) => {
            if (Array.isArray(synced)) {
              setLeads(synced);
              setLastUpdated(new Date().toLocaleTimeString());
            }
          })
          .catch(() => {});
      }, 6000);

      const handleLeadsUpdated = (e: Event) => {
        if ('detail' in e && Array.isArray((e as CustomEvent).detail)) {
          setLeads((e as CustomEvent).detail);
        } else {
          setLeads(getStoredLeads());
        }
        setLastUpdated(new Date().toLocaleTimeString());
      };

      window.addEventListener('sigma-leads-updated', handleLeadsUpdated);
      window.addEventListener('storage', handleLeadsUpdated);

      return () => {
        if (bc) bc.close();
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
    const updated = getStoredLeads();
    setLeads(updated);
    if (activeDetailLead && activeDetailLead.id === id) {
      setActiveDetailLead({ ...activeDetailLead, status: newStatus });
    }
  };

  // Lead Delete
  const handleDeleteLead = (id: string) => {
    if (window.confirm('Are you sure you want to delete this form submission record?')) {
      deleteLead(id);
      const updated = getStoredLeads();
      setLeads(updated);
      if (activeDetailLead?.id === id) setActiveDetailLead(null);
    }
  };

  // Purge Spam / Test Leads
  const handlePurgeTestLeads = () => {
    const count = purgeTestLeads();
    const updated = getStoredLeads();
    setLeads(updated);
    alert(count > 0 ? `Successfully removed ${count} test/spam lead(s).` : 'No test/spam leads found.');
  };

  // Category counts map
  const categoryCounts = useMemo(() => {
    const safeLeads = Array.isArray(leads) ? leads : [];
    const counts: Record<string, number> = { all: safeLeads.length };

    CATEGORY_TABS.forEach((cat) => {
      if (cat.id === 'all') return;
      if (cat.id === 'investment_nri') {
        counts[cat.id] = safeLeads.filter((l) => l && (l.leadType === 'investment' || l.leadType === 'nri')).length;
      } else {
        counts[cat.id] = safeLeads.filter((l) => l && l.leadType === cat.id).length;
      }
    });

    return counts;
  }, [leads]);

  // Filtered & Sorted Leads Computation
  const filteredLeads = useMemo(() => {
    if (!Array.isArray(leads)) return [];
    return leads
      .filter((l) => {
        if (!l) return false;
        const nameStr = l.name || '';
        const phoneStr = l.phone || '';
        const emailStr = l.email || '';
        const projectStr = l.projectName || '';
        const locStr = l.location || '';
        const idStr = l.id || '';
        const msgStr = l.message || '';

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = nameStr.toLowerCase().includes(q);
          const matchPhone = phoneStr.toLowerCase().includes(q);
          const matchEmail = emailStr.toLowerCase().includes(q);
          const matchProject = projectStr.toLowerCase().includes(q);
          const matchLocation = locStr.toLowerCase().includes(q);
          const matchId = idStr.toLowerCase().includes(q);
          const matchMsg = msgStr.toLowerCase().includes(q);
          if (!matchName && !matchPhone && !matchEmail && !matchProject && !matchLocation && !matchId && !matchMsg) {
            return false;
          }
        }

        // Category Filter
        if (selectedCategory !== 'all') {
          if (selectedCategory === 'investment_nri') {
            if (l.leadType !== 'investment' && l.leadType !== 'nri') return false;
          } else if ((l.leadType || '') !== selectedCategory) {
            return false;
          }
        }

        // Status Filter
        if (selectedStatus !== 'all' && (l.status || 'New') !== selectedStatus) return false;

        // Timeframe Filter
        if (selectedTimeframe !== 'all' && l.createdAt) {
          const leadDate = new Date(l.createdAt).getTime();
          const now = Date.now();
          if (isNaN(leadDate)) return false;
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
          return new Date(b?.createdAt || 0).getTime() - new Date(a?.createdAt || 0).getTime();
        }
        if (sortBy === 'oldest') {
          return new Date(a?.createdAt || 0).getTime() - new Date(b?.createdAt || 0).getTime();
        }
        if (sortBy === 'name') {
          return (a?.name || '').localeCompare(b?.name || '');
        }
        return 0;
      });
  }, [leads, searchQuery, selectedCategory, selectedStatus, selectedTimeframe, sortBy]);

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
            <p className="text-xs text-sigma-stone-300">Real-Time Form Submissions & Enquiry Portal</p>
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
            Authorized Sigma Group Personnel Only
          </div>
        </div>
      </div>
    );
  }

  // LOGGED IN REAL-TIME CRM DASHBOARD
  return (
    <div className="min-h-screen bg-sigma-ivory-50 text-sigma-graphite-900 pt-0 pb-20">
      {/* Header Bar */}
      <div className="bg-sigma-graphite-950 text-white border-b border-white/10 py-4 mb-6 shadow-md">
        <div className="container-content flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sigma-amber-500 text-sigma-graphite-950 font-black text-xs flex items-center justify-center shadow-md">
              LIVE
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold font-serif text-white">Sigma Homes Form Fillup Dashboard</h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Real-Time Sync Active
                </span>
              </div>
              <p className="text-[11px] text-sigma-stone-400">
                All Website Forms • Real-Time Broadcast • Updated at {lastUpdated}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => exportLeadsToCsv(filteredLeads)}
              disabled={filteredLeads.length === 0}
              className={`px-4 py-2 bg-sigma-green-600 hover:bg-sigma-green-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5 ${
                filteredLeads.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Download className="h-3.5 w-3.5" />
              Export CSV ({filteredLeads.length})
            </button>

            <button
              onClick={handlePurgeTestLeads}
              className="px-3 py-2 bg-amber-600/80 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              title="Clean up test / dummy submissions"
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              Purge Test Leads
            </button>

            <button
              onClick={refreshLeads}
              disabled={isSyncing}
              className={`px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
                isSyncing ? 'opacity-70' : ''
              }`}
              title="Sync Lead Data"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              Sync
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

      <div className="container-content space-y-6">
        {/* Category Navigation Pills Bar */}
        <div className="bg-white p-3 rounded-2xl border border-sigma-stone-200/80 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sigma-stone-400 block px-2 mb-2">
            Select Form Category:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
            {CATEGORY_TABS.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-sigma-graphite-950 text-white border-sigma-graphite-950 shadow-sm scale-102'
                      : 'bg-sigma-stone-50 hover:bg-sigma-stone-100 text-sigma-stone-700 border-sigma-stone-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-extrabold ${
                      isActive ? 'bg-sigma-amber-500 text-sigma-graphite-950' : 'bg-sigma-stone-200 text-sigma-stone-800'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="p-4 bg-white rounded-2xl border border-sigma-stone-200/80 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative lg:col-span-2">
              <Search className="h-4 w-4 text-sigma-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search name, phone, email, project, location or message..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
              />
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 bg-sigma-stone-50 border border-sigma-stone-200 rounded-xl text-xs font-semibold text-sigma-graphite-900 focus:outline-none focus:ring-2 focus:ring-sigma-blue-500"
              >
                <option value="all">All CRM Statuses</option>
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
                <option value="today">Submitted Today</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lead Table or Empty State */}
        <div className="bg-white rounded-3xl border border-sigma-stone-200/80 shadow-xl overflow-hidden">
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-sigma-amber-50 text-sigma-amber-600 flex items-center justify-center border border-sigma-amber-200/60">
                <Inbox className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-serif text-sigma-graphite-900">
                  {leads.length === 0 ? 'No Form Submissions Yet' : 'No Submissions Match Filters'}
                </h3>
                <p className="text-xs text-sigma-stone-500 leading-relaxed">
                  {leads.length === 0
                    ? 'All forms filled on the website will instantly show up here in real time with complete details and form categories.'
                    : 'Try clearing search keywords or changing category tabs to see other submissions.'}
                </p>
              </div>
              {leads.length === 0 && (
                <div className="pt-2">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-sigma-blue-700 hover:bg-sigma-blue-800 text-white rounded-xl font-bold text-xs shadow-md transition-colors"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Open Main Website & Fill a Form
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse min-w-[950px]">
                <thead>
                  <tr className="border-b border-sigma-stone-200 bg-sigma-stone-50 text-[11px] font-bold uppercase tracking-wider text-sigma-stone-500">
                    <th className="p-4">Ref ID / Time</th>
                    <th className="p-4">Form Category</th>
                    <th className="p-4">Customer Info</th>
                    <th className="p-4">Target / Context</th>
                    <th className="p-4">CRM Status</th>
                    <th className="p-4 text-right">Quick Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sigma-stone-200/60 text-xs font-medium">
                  {filteredLeads.map((l) => {
                    const leadId = l.id || 'SIG-000000';
                    const leadName = l.name || 'Anonymous';
                    const leadPhone = l.phone || 'N/A';
                    const badge = getCategoryBadge(l.leadType);

                    const whatsappLink = generateWhatsAppLink({
                      targetPhone: leadPhone,
                      message: `Hi ${leadName}, following up regarding your ${badge.label} with Sigma Homes.`,
                    });
                    const statusColor =
                      l.status === 'Closed'
                        ? 'bg-gray-100 text-gray-700 border-gray-300'
                        : l.status === 'In Progress'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : l.status === 'Contacted'
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : 'bg-amber-50 text-amber-800 border-amber-300 font-bold';

                    return (
                      <tr key={leadId} className="hover:bg-sigma-stone-50/70 transition-colors">
                        {/* Ref ID / Time */}
                        <td className="p-4">
                          <span className="font-bold font-mono text-sigma-graphite-900 block">{leadId}</span>
                          <span className="text-[11px] text-sigma-stone-400 block mt-0.5">
                            {l.createdAt
                              ? new Date(l.createdAt).toLocaleString('en-IN', {
                                  dateStyle: 'short',
                                  timeStyle: 'short',
                                })
                              : 'N/A'}
                          </span>
                        </td>

                        {/* Form Category Badge */}
                        <td className="p-4">
                          <span
                            className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold inline-flex items-center gap-1.5 shadow-2xs ${badge.color}`}
                          >
                            <span>{badge.icon}</span>
                            <span>{badge.label}</span>
                          </span>
                        </td>

                        {/* Customer Info */}
                        <td className="p-4">
                          <span className="font-bold text-sigma-graphite-900 block text-sm">{leadName}</span>
                          <div className="flex flex-wrap items-center gap-2 mt-0.5">
                            <span className="text-sigma-stone-700 font-sans font-semibold">{leadPhone}</span>
                            {l.email && <span className="text-[11px] text-sigma-stone-500">({l.email})</span>}
                          </div>
                        </td>

                        {/* Target / Context */}
                        <td className="p-4">
                          <span className="font-bold text-sigma-graphite-900 block">
                            {l.projectName || l.location || 'General Website Enquiry'}
                          </span>
                          {l.configuration && (
                            <span className="text-[11px] text-sigma-stone-500 block">Config: {l.configuration}</span>
                          )}
                          {l.budget && (
                            <span className="text-[11px] text-sigma-stone-500 block">Budget: {l.budget}</span>
                          )}
                        </td>

                        {/* CRM Status */}
                        <td className="p-4">
                          <select
                            value={l.status || 'New'}
                            onChange={(e) => handleStatusChange(leadId, e.target.value as LeadStatus)}
                            className={`px-2.5 py-1 rounded-lg border text-[11px] focus:outline-none cursor-pointer ${statusColor}`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right space-x-1.5">
                          <button
                            onClick={() => setActiveDetailLead(l)}
                            className="px-2.5 py-1.5 bg-sigma-stone-100 hover:bg-sigma-stone-200 text-sigma-graphite-900 rounded-lg text-[11px] font-bold transition-colors inline-flex items-center gap-1"
                            title="View Full Submission Details"
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
                            href={`tel:${leadPhone.replace(/\s+/g, '')}`}
                            className="p-1.5 bg-sigma-blue-50 text-sigma-blue-700 hover:bg-sigma-blue-700 hover:text-white rounded-lg transition-colors inline-block"
                            title="Call Customer"
                          >
                            <Phone className="h-3.5 w-3.5" />
                          </a>

                          <button
                            onClick={() => handleDeleteLead(leadId)}
                            className="p-1.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors inline-block"
                            title="Delete Submission Record"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Form Submission Detail Modal */}
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

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`px-2.5 py-1 rounded-lg border text-xs font-bold inline-flex items-center gap-1.5 ${
                    getCategoryBadge(activeDetailLead.leadType).color
                  }`}
                >
                  <span>{getCategoryBadge(activeDetailLead.leadType).icon}</span>
                  <span>{getCategoryBadge(activeDetailLead.leadType).label}</span>
                </span>
                <span className="text-xs font-mono font-bold text-sigma-blue-700">
                  Ref: {activeDetailLead.id || 'SIG-000000'}
                </span>
              </div>

              <h2 className="text-2xl font-bold font-serif text-sigma-graphite-900">
                {activeDetailLead.name || 'Anonymous'}
              </h2>
              <p className="text-xs text-sigma-stone-500">
                Submitted on{' '}
                {activeDetailLead.createdAt ? new Date(activeDetailLead.createdAt).toLocaleString('en-IN') : 'N/A'}
              </p>
            </div>

            {/* Structured Fields Grid */}
            <div className="space-y-3 divide-y divide-sigma-stone-200/60 text-xs">
              <div className="pt-2 grid grid-cols-2 gap-3">
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Phone Number</span>
                  <span className="text-sigma-graphite-900 font-bold text-sm">{activeDetailLead.phone || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Email Address</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.email || 'Not Provided'}</span>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-3">
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Form Category</span>
                  <span className="text-sigma-blue-800 font-bold uppercase">{activeDetailLead.leadType}</span>
                </div>
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">CRM Status</span>
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

              {activeDetailLead.propertyType && (
                <div className="pt-2">
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Property Type</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.propertyType}</span>
                </div>
              )}

              {activeDetailLead.configuration && (
                <div className="pt-2">
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block font-sans">Configuration</span>
                  <span className="text-sigma-graphite-900 font-bold">{activeDetailLead.configuration}</span>
                </div>
              )}

              {activeDetailLead.preferredDate && (
                <div className="pt-2 grid grid-cols-2 gap-3">
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
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block mb-1">
                    Submitted Message / Form Details
                  </span>
                  <div className="p-3.5 bg-sigma-stone-50 rounded-xl border border-sigma-stone-200 text-sigma-graphite-900 leading-relaxed font-mono text-xs whitespace-pre-wrap">
                    {activeDetailLead.message}
                  </div>
                </div>
              )}

              <div className="pt-2 grid grid-cols-2 gap-3">
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">Submitted Page</span>
                  <span className="text-sigma-stone-700 font-mono text-[11px]">{activeDetailLead.sourcePage || '/'}</span>
                </div>
                <div>
                  <span className="text-sigma-stone-400 font-bold uppercase tracking-wider block">UTM Source / Campaign</span>
                  <span className="text-sigma-stone-700 font-mono text-[11px]">
                    {activeDetailLead.utmSource
                      ? `${activeDetailLead.utmSource} / ${activeDetailLead.utmCampaign || 'organic'}`
                      : 'Direct / Organic'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-sigma-stone-200 flex gap-2">
              <a
                href={generateWhatsAppLink({
                  targetPhone: activeDetailLead.phone,
                  message: `Hi ${activeDetailLead.name || 'Customer'}, following up regarding your ${
                    getCategoryBadge(activeDetailLead.leadType).label
                  } with Sigma Homes.`,
                })}
                target="_blank"
                rel="noreferrer"
                className="w-1/2 py-3 bg-sigma-green-600 hover:bg-sigma-green-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Customer
              </a>
              <a
                href={`tel:${(activeDetailLead.phone || '').replace(/\s+/g, '')}`}
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

export function AdminPage() {
  return (
    <AdminErrorBoundary>
      <AdminPageContent />
    </AdminErrorBoundary>
  );
}
