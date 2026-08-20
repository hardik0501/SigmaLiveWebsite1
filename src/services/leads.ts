import { LeadPayload, LeadSubmissionResult, UtmParams, LeadType, LeadStatus } from '@/types/lead';

const SIGMA_WHATSAPP_NUMBER = '919829288341';
const SIGMA_PHONE_NUMBER = '+91 98292 88341';

// ─── Backend API Configuration ───────────────────────────────────────────────
const BACKEND_BASE_URL = 'https://sigmabackend-psi.vercel.app';
const API_LEADS_URL = `${BACKEND_BASE_URL}/api/leads.js`;

// BroadcastChannel for instant cross-tab sync
const leadsChannel =
  typeof window !== 'undefined' && 'BroadcastChannel' in window
    ? new BroadcastChannel('sigma_leads_channel')
    : null;

// Legacy seed IDs to filter out
const DUMMY_SEED_IDS = new Set([
  'SIG-839201',
  'SIG-710492',
  'SIG-559102',
  'SIG-409182',
  'SIG-391029',
]);

/**
 * Sanitize raw lead objects to ensure safe properties
 */
export function sanitizeLead(l: any): LeadPayload | null {
  if (!l || typeof l !== 'object') return null;
  const leadId = String(l.id || `SIG-${Math.floor(100000 + Math.random() * 900000)}`);
  if (DUMMY_SEED_IDS.has(leadId)) return null;

  return {
    ...l,
    id: leadId,
    name: String(l.name || 'Anonymous'),
    phone: String(l.phone || 'N/A'),
    email: l.email ? String(l.email) : undefined,
    projectName: l.projectName ? String(l.projectName) : undefined,
    projectId: l.projectId ? String(l.projectId) : undefined,
    location: l.location ? String(l.location) : undefined,
    configuration: l.configuration ? String(l.configuration) : undefined,
    preferredDate: l.preferredDate ? String(l.preferredDate) : undefined,
    preferredTime: l.preferredTime ? String(l.preferredTime) : undefined,
    message: l.message ? String(l.message) : undefined,
    sourcePage: l.sourcePage ? String(l.sourcePage) : '/',
    utmSource: l.utmSource ? String(l.utmSource) : undefined,
    utmMedium: l.utmMedium ? String(l.utmMedium) : undefined,
    utmCampaign: l.utmCampaign ? String(l.utmCampaign) : undefined,
    leadType: (l.leadType as LeadType) || 'contact',
    status: (l.status as LeadStatus) || 'New',
    createdAt: l.createdAt ? String(l.createdAt) : new Date().toISOString(),
  };
}

/**
 * Check if a lead is test/spam
 */
export function isTestOrSpamLead(lead: Partial<LeadPayload>): { isSpam: boolean; reason?: string } {
  if (!lead) return { isSpam: true, reason: 'Invalid submission data.' };

  const name = String(lead.name || '').trim().toLowerCase();
  const rawPhone = String(lead.phone || '').trim();
  const message = String(lead.message || '').trim().toLowerCase();

  const spamKeywords = [
    'test', 'testing', 'dds', 'asdf', 'qwerty', 'dummy', 'admin',
    'demo', 'sample', 'fake', 'abcd', '1234', 'temp', 'foobar', 'xxx',
  ];

  const isSpam =
    spamKeywords.some((kw) => name.includes(kw) || message.includes(kw)) ||
    ['0000000000', '1111111111', '1234567890'].some((p) => rawPhone.includes(p));

  return { isSpam };
}

// ─── LOCAL CACHE (read-through only, backend is source of truth) ─────────────

function getCachedLeads(): LeadPayload[] {
  try {
    const data = localStorage.getItem('sigma_leads');
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed.map(sanitizeLead).filter((l): l is LeadPayload => l !== null);
      }
    }
  } catch {}
  return [];
}

function setCachedLeads(leads: LeadPayload[]): void {
  try {
    localStorage.setItem('sigma_leads', JSON.stringify(leads));
  } catch {}
}

function broadcastLeads(leads: LeadPayload[]): void {
  window.dispatchEvent(new CustomEvent('sigma-leads-updated', { detail: leads }));
  if (leadsChannel) {
    leadsChannel.postMessage({ type: 'leads-updated', leads });
  }
}

// ─── BACKEND API CALLS (Single Source of Truth) ──────────────────────────────

/**
 * Fetch all leads from the Vercel backend. Falls back to local cache if offline.
 */
export async function syncLeadsFromCloud(): Promise<LeadPayload[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(API_LEADS_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      const rawArr = json?.leads || (Array.isArray(json) ? json : []);
      if (Array.isArray(rawArr)) {
        const leads = rawArr
          .map(sanitizeLead)
          .filter((l): l is LeadPayload => l !== null)
          .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());

        setCachedLeads(leads);
        broadcastLeads(leads);
        return leads;
      }
    }
  } catch (err) {
    console.warn('[Sigma Leads] Backend fetch failed, using local cache:', err);
  }

  // Offline fallback: return local cache
  return getCachedLeads();
}

/**
 * Get stored leads (from local cache). Use syncLeadsFromCloud() for fresh data.
 */
export function getStoredLeads(): LeadPayload[] {
  return getCachedLeads();
}

/**
 * Submit a new lead to the backend
 */
export async function submitLead(payload: LeadPayload): Promise<LeadSubmissionResult> {
  const referenceId = `SIG-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

  const name = (payload.name || '').trim() || 'Valued Visitor';
  const phone = (payload.phone || '').trim() || 'N/A';

  // Retrieve saved UTM parameters if available
  let savedUtm: UtmParams = {};
  try {
    const utmStr = sessionStorage.getItem('sigma_utm_params');
    if (utmStr) savedUtm = JSON.parse(utmStr);
  } catch {}

  const fullPayload: LeadPayload = {
    ...payload,
    name,
    phone,
    id: referenceId,
    status: 'New',
    createdAt: timestamp,
    sourceUrl: window.location.href,
    sourcePage: window.location.pathname,
    utmSource: payload.utmSource || savedUtm.utmSource,
    utmMedium: payload.utmMedium || savedUtm.utmMedium,
    utmCampaign: payload.utmCampaign || savedUtm.utmCampaign,
  };

  console.log('[Sigma Lead System] Submitting lead to backend:', fullPayload);

  // Optimistic local update
  const existing = getCachedLeads();
  const updated = [fullPayload, ...existing];
  setCachedLeads(updated);
  broadcastLeads(updated);

  // POST to backend (source of truth)
  try {
    const res = await fetch(API_LEADS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullPayload),
    });
    if (res.ok) {
      const json = await res.json();
      if (json.leads && Array.isArray(json.leads)) {
        const serverLeads = json.leads
          .map(sanitizeLead)
          .filter((l: LeadPayload | null): l is LeadPayload => l !== null);
        setCachedLeads(serverLeads);
        broadcastLeads(serverLeads);
      }
    }
  } catch (err) {
    console.warn('[Sigma Lead System] Backend POST failed:', err);
  }

  return {
    success: true,
    referenceId,
    message: 'Your enquiry has been received by Sigma Group. A representative will contact you shortly.',
  };
}

/**
 * Push full leads array to backend (bulk replace)
 */
export async function pushLeadsToCloud(leads: LeadPayload[]): Promise<boolean> {
  const cleanLeads = leads.filter((l) => l && l.id && !DUMMY_SEED_IDS.has(l.id));
  try {
    const res = await fetch(API_LEADS_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leads: cleanLeads }),
    });
    if (res.ok) {
      setCachedLeads(cleanLeads);
      broadcastLeads(cleanLeads);
      return true;
    }
  } catch (err) {
    console.warn('[Sigma Leads] Backend PUT failed:', err);
  }
  return false;
}

/**
 * Save leads to local cache and broadcast (used for optimistic updates)
 */
export function saveLeads(leads: LeadPayload[]): void {
  const cleanLeads = leads.filter((l) => l && l.id && !DUMMY_SEED_IDS.has(l.id));
  setCachedLeads(cleanLeads);
  broadcastLeads(cleanLeads);
}

/**
 * Update a lead's status and sync to backend
 */
export async function updateLeadStatus(id: string, status: LeadStatus): Promise<void> {
  // Optimistic local update
  const leads = getCachedLeads();
  const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
  setCachedLeads(updated);
  broadcastLeads(updated);

  // Sync full list to backend
  await pushLeadsToCloud(updated);
}

/**
 * Delete a lead by ID from the backend and local cache
 */
export async function deleteLead(id: string): Promise<LeadPayload[]> {
  // Optimistic local delete
  const leads = getCachedLeads();
  const filtered = leads.filter((l) => l.id !== id);
  setCachedLeads(filtered);
  broadcastLeads(filtered);

  // DELETE from backend (query param format)
  try {
    const res = await fetch(`${API_LEADS_URL}?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      const json = await res.json();
      if (json.leads && Array.isArray(json.leads)) {
        const serverLeads = json.leads
          .map(sanitizeLead)
          .filter((l: LeadPayload | null): l is LeadPayload => l !== null);
        setCachedLeads(serverLeads);
        broadcastLeads(serverLeads);
        return serverLeads;
      }
    }
  } catch (err) {
    console.warn('[Sigma Leads] Backend DELETE failed:', err);
    // Fallback: PUT the filtered list
    await pushLeadsToCloud(filtered);
  }

  return filtered;
}

/**
 * Purge test/spam leads from backend
 */
export async function purgeTestLeads(): Promise<number> {
  const existing = getCachedLeads();
  const validLeads = existing.filter((l) => !isTestOrSpamLead(l).isSpam);
  const purgedCount = existing.length - validLeads.length;

  setCachedLeads(validLeads);
  broadcastLeads(validLeads);
  await pushLeadsToCloud(validLeads);

  return purgedCount;
}

/**
 * Export leads to CSV
 */
export function exportLeadsToCsv(leads: LeadPayload[]): void {
  if (leads.length === 0) return;

  const headers = [
    'Reference ID',
    'Date & Time',
    'Status',
    'Lead Type',
    'Name',
    'Phone',
    'Email',
    'Project Name',
    'Location',
    'Property Type',
    'Budget',
    'Configuration',
    'Preferred Date',
    'Preferred Time',
    'Message',
    'Source Page',
    'UTM Source',
    'UTM Campaign',
  ];

  const escapeCsv = (val: string | undefined) => {
    if (!val) return '""';
    const cleanStr = String(val).replace(/"/g, '""');
    return `"${cleanStr}"`;
  };

  const rows = leads.map((l) => [
    escapeCsv(l.id),
    escapeCsv(l.createdAt ? new Date(l.createdAt).toLocaleString('en-IN') : ''),
    escapeCsv(l.status || 'New'),
    escapeCsv(l.leadType),
    escapeCsv(l.name),
    escapeCsv(l.phone),
    escapeCsv(l.email),
    escapeCsv(l.projectName),
    escapeCsv(l.location),
    escapeCsv(l.propertyType),
    escapeCsv(l.budget),
    escapeCsv(l.configuration),
    escapeCsv(l.preferredDate),
    escapeCsv(l.preferredTime),
    escapeCsv(l.message),
    escapeCsv(l.sourcePage),
    escapeCsv(l.utmSource),
    escapeCsv(l.utmCampaign),
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `sigma_leads_export_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Clean phone numbers into WhatsApp compatible format
 */
export function formatPhoneForWhatsApp(phone?: string): string {
  if (!phone) return '';
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    digits = '91' + digits;
  }
  return digits;
}

/**
 * Generate WhatsApp link
 */
export function generateWhatsAppLink(context: {
  targetPhone?: string;
  type?: LeadType;
  projectName?: string;
  location?: string;
  message?: string;
}): string {
  let text = 'Hi, following up regarding your enquiry with Sigma Homes.';

  if (context.projectName) {
    text = `Hi, following up regarding your interest in ${context.projectName}${
      context.location ? ` in ${context.location}` : ''
    } with Sigma Homes.`;
  } else if (context.type === 'investment') {
    text = 'Hi, following up regarding your real estate investment advisory request with Sigma Homes.';
  } else if (context.type === 'nri') {
    text = 'Hi, following up regarding your NRI property enquiry with Sigma Homes.';
  } else if (context.type === 'sell_property') {
    text = 'Hi, following up regarding your property submission with Sigma Homes.';
  } else if (context.message) {
    text = context.message;
  }

  const rawPhone = context.targetPhone ? formatPhoneForWhatsApp(context.targetPhone) : SIGMA_WHATSAPP_NUMBER;
  const phone = rawPhone || SIGMA_WHATSAPP_NUMBER;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Extract UTM campaign parameters from URL
 */
export function getUtmParams(): UtmParams {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utmSource: urlParams.get('utm_source') || undefined,
    utmMedium: urlParams.get('utm_medium') || undefined,
    utmCampaign: urlParams.get('utm_campaign') || undefined,
    utmTerm: urlParams.get('utm_term') || undefined,
    utmContent: urlParams.get('utm_content') || undefined,
  };
}

export { SIGMA_WHATSAPP_NUMBER, SIGMA_PHONE_NUMBER };
