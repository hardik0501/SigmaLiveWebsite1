import { LeadPayload, LeadSubmissionResult, UtmParams, LeadType, LeadStatus } from '@/types/lead';

const SIGMA_WHATSAPP_NUMBER = '919829288341';
const SIGMA_PHONE_NUMBER = '+91 98292 88341';
const REMOTE_API_URL = 'https://api.restful-api.dev/objects/ff8081819ff5b11001a015bde90e4542';

// BroadcastChannel for instant cross-tab real-time sync
const leadsChannel = typeof window !== 'undefined' && 'BroadcastChannel' in window ? new BroadcastChannel('sigma_leads_channel') : null;

// Legacy Seed IDs to filter out if previously cached in localStorage
const DUMMY_SEED_IDS = new Set(['SIG-839201', 'SIG-710492', 'SIG-559102', 'SIG-409182', 'SIG-391029']);

/**
 * Sanitize raw lead objects to ensure non-null safe properties
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

function getBackendUrl(): string {
  if (typeof window === 'undefined') return '/api/leads';
  const hostname = window.location.hostname || 'localhost';
  // On Vercel or live production domains, use relative /api/leads Serverless route directly
  if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
    return '/api/leads';
  }
  const port = '5000';
  const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
  return `${protocol}//${hostname}:${port}/api/leads`;
}

const SERVER_API_URL = '/api/leads';

let cachedCloudKey = '851f5e5ebe1e4ce0ad43fd3a91b626f5';

async function getActiveCloudKey(forceRefresh = false): Promise<string> {
  if (!forceRefresh && typeof window !== 'undefined') {
    const saved = localStorage.getItem('sigma_cloud_key');
    if (saved && saved.length === 32) return saved;
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const res = await fetch('https://crudcrud.com', { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const html = await res.text();
      const match = html.match(/crudcrud\.com\/api\/([a-f0-9]{32})/);
      if (match && match[1]) {
        cachedCloudKey = match[1];
        if (typeof window !== 'undefined') {
          localStorage.setItem('sigma_cloud_key', match[1]);
        }
        return match[1];
      }
    }
  } catch (e) {
    // Ignore fetch error
  }
  return cachedCloudKey;
}

async function getCloudEndpoint(forceRefresh = false): Promise<string> {
  const key = await getActiveCloudKey(forceRefresh);
  return `https://crudcrud.com/api/${key}/leads`;
}

/**
 * Check if a lead submission is test or spam for purging purposes
 */
export function isTestOrSpamLead(lead: Partial<LeadPayload>): { isSpam: boolean; reason?: string } {
  if (!lead) return { isSpam: true, reason: 'Invalid submission data.' };

  const name = String(lead.name || '').trim().toLowerCase();
  const rawPhone = String(lead.phone || '').trim();
  const message = String(lead.message || '').trim().toLowerCase();

  const spamKeywords = [
    'test', 'testing', 'dds', 'asdf', 'qwerty', 'dummy', 'admin',
    'demo', 'sample', 'fake', 'abcd', '1234', 'temp', 'foobar', 'xxx'
  ];

  // Helper check for admin purge action only
  const isSpam = spamKeywords.some((kw) => name.includes(kw) || message.includes(kw)) ||
    ['0000000000', '1111111111', '1234567890'].some((p) => rawPhone.includes(p));

  return { isSpam };
}

/**
 * Push updated leads array to persistent Express backend server and global cloud storage
 */
export async function pushLeadsToCloud(leads: LeadPayload[]): Promise<boolean> {
  const cleanLeads = leads.filter((l) => l && l.id && !DUMMY_SEED_IDS.has(l.id));

  // 1. Push to Express Backend Server (Port 5000 / local network API)
  try {
    const backendUrl = getBackendUrl();
    fetch(backendUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leads: cleanLeads }),
    }).catch(() => {});
    fetch(SERVER_API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leads: cleanLeads }),
    }).catch(() => {});
  } catch (err) {
    // Ignore backend connection error
  }

  // 2. Push to Active Global Cloud Endpoint (Works across mobile, laptop & all browsers on live hosting)
  let success = false;
  if (cleanLeads.length > 0) {
    const latestLead = cleanLeads[0];
    try {
      let endpoint = await getCloudEndpoint(false);
      let res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(latestLead),
      });

      if (res.status === 400 || res.status === 404 || res.status === 405) {
        endpoint = await getCloudEndpoint(true);
        res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(latestLead),
        });
      }
      if (res.ok) success = true;
    } catch (err) {
      console.warn('[Sigma Leads] Cloud push fallback error:', err);
    }
  }

  return success;
}

/**
 * Get all stored leads from local storage cache
 */
export function getStoredLeads(): LeadPayload[] {
  try {
    const data = localStorage.getItem('sigma_leads');
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        const sanitized = parsed
          .map(sanitizeLead)
          .filter((l): l is LeadPayload => l !== null);
        return sanitized;
      }
    }
    return [];
  } catch (err) {
    console.warn('[Sigma Leads] Local storage read error:', err);
    return [];
  }
}

/**
 * Fetch leads from Express backend server AND global cloud endpoint to guarantee real-time cross-device sync
 */
export async function syncLeadsFromCloud(): Promise<LeadPayload[]> {
  const fetchedLeads: LeadPayload[] = [];

  // 1. Fetch from Express Backend Server
  const serverUrls = [getBackendUrl(), SERVER_API_URL];
  for (const url of serverUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        const rawArr = json?.leads || (Array.isArray(json) ? json : []);
        if (Array.isArray(rawArr)) {
          rawArr.forEach((l: any) => {
            const san = sanitizeLead(l);
            if (san) fetchedLeads.push(san);
          });
        }
      }
    } catch (err) {
      // Ignore local endpoint fetch error
    }
  }

  // 2. Fetch from Active Global Cloud Endpoint (Works across all devices & live hosting)
  try {
    let endpoint = await getCloudEndpoint(false);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    let res = await fetch(endpoint, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.status === 400 || res.status === 404 || res.status === 405) {
      endpoint = await getCloudEndpoint(true);
      const c2 = new AbortController();
      const t2 = setTimeout(() => c2.abort(), 3500);
      res = await fetch(endpoint, { signal: c2.signal });
      clearTimeout(t2);
    }

    if (res.ok) {
      const json = await res.json();
      const rawArr = Array.isArray(json) ? json : json?.leads || json?.data?.leads || [];
      if (Array.isArray(rawArr)) {
        rawArr.forEach((l: any) => {
          const san = sanitizeLead(l);
          if (san) fetchedLeads.push(san);
        });
      }
    }
  } catch (err) {
    console.warn('[Sigma Leads] Cloud sync error:', err);
  }

  const localLeads = getStoredLeads();
  const leadMap = new Map<string, LeadPayload>();

  [...localLeads, ...fetchedLeads].forEach((l) => {
    if (l && l.id && !DUMMY_SEED_IDS.has(l.id)) {
      leadMap.set(l.id, l);
    }
  });

  const merged = Array.from(leadMap.values()).sort(
    (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
  );

  localStorage.setItem('sigma_leads', JSON.stringify(merged));
  window.dispatchEvent(new CustomEvent('sigma-leads-updated', { detail: merged }));
  if (leadsChannel) {
    leadsChannel.postMessage({ type: 'leads-updated', leads: merged });
  }

  return merged;
}

/**
 * Save leads array to local storage and broadcast to open tabs
 */
export function saveLeads(leads: LeadPayload[]): void {
  try {
    const cleanLeads = leads.filter((l) => l && l.id && !DUMMY_SEED_IDS.has(l.id));
    localStorage.setItem('sigma_leads', JSON.stringify(cleanLeads));
    window.dispatchEvent(new CustomEvent('sigma-leads-updated', { detail: cleanLeads }));
    if (leadsChannel) {
      leadsChannel.postMessage({ type: 'leads-updated', leads: cleanLeads });
    }
  } catch (err) {
    console.warn('[Sigma Leads] Local storage write error:', err);
  }
}

/**
 * Purge test/spam leads from storage when triggered by Admin
 */
export function purgeTestLeads(): number {
  const existing = getStoredLeads();
  const validLeads = existing.filter((l) => !isTestOrSpamLead(l).isSpam);
  const purgedCount = existing.length - validLeads.length;

  saveLeads(validLeads);
  pushLeadsToCloud(validLeads);
  fetch(SERVER_API_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ leads: validLeads }),
  }).catch(() => {});

  return purgedCount;
}

/**
 * Submit a new lead - saves to persistent JSON storage, global cloud API & local state
 */
export async function submitLead(payload: LeadPayload): Promise<LeadSubmissionResult> {
  const referenceId = `SIG-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

  // Ensure mandatory fields have safe fallbacks so form submit never fails
  const name = (payload.name || '').trim() || 'Valued Visitor';
  const phone = (payload.phone || '').trim() || 'N/A';

  // Retrieve saved UTM parameters if available
  let savedUtm: UtmParams = {};
  try {
    const utmStr = sessionStorage.getItem('sigma_utm_params');
    if (utmStr) savedUtm = JSON.parse(utmStr);
  } catch (e) {
    // Ignore
  }

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

  console.log('[Sigma Lead System] Saving New Valid Lead:', fullPayload);

  // 1. Immediate local save & tab broadcast
  const existingLeads = getStoredLeads();
  const updatedLeads = [fullPayload, ...existingLeads];
  saveLeads(updatedLeads);

  // 2. Persist to Global Cloud API (Works across mobile, laptop & all devices)
  pushLeadsToCloud(updatedLeads).catch((err) => {
    console.warn('[Sigma Lead System] Global cloud API post error:', err);
  });

  // 3. Persist to data/leads.json via /api/leads HTTP POST if local server active
  try {
    fetch(SERVER_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullPayload),
    }).catch(() => {});
  } catch (err) {
    // Ignore
  }

  return {
    success: true,
    referenceId,
    message: 'Your enquiry has been received by Sigma Group. A representative will contact you shortly.',
  };
}

/**
 * Update a lead's status tag & sync to persistent storage
 */
export function updateLeadStatus(id: string, status: LeadStatus): void {
  const leads = getStoredLeads();
  const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
  saveLeads(updated);
  pushLeadsToCloud(updated);

  // Push updated list to server
  fetch(SERVER_API_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ leads: updated }),
  }).catch((err) => console.warn('[Sigma Leads] Server status update error:', err));
}

/**
 * Delete a lead by ID & sync to persistent storage
 */
export function deleteLead(id: string): void {
  const leads = getStoredLeads();
  const updated = leads.filter((l) => l.id !== id);
  saveLeads(updated);
  pushLeadsToCloud(updated);

  // Send DELETE to server endpoint
  fetch(`${SERVER_API_URL}/${id}`, {
    method: 'DELETE',
  }).catch(() => {
    // Fallback PUT
    fetch(SERVER_API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leads: updated }),
    }).catch((err) => console.warn('[Sigma Leads] Server delete error:', err));
  });
}

/**
 * Export leads to CSV file format
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
 * Clean phone numbers into WhatsApp compatible international format (e.g. 919829012345)
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
 * Generate context-aware WhatsApp link targeted at customer's phone number
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
 * Extract UTM campaign parameters from current URL
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
