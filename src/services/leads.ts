import { LeadPayload, LeadSubmissionResult, UtmParams, LeadType, LeadStatus } from '@/types/lead';

const SIGMA_WHATSAPP_NUMBER = '919829288341';
const SIGMA_PHONE_NUMBER = '+91 98292 88341';
const REMOTE_API_URL = 'https://api.restful-api.dev/objects/ff8081819ff5b11001a015bde90e4542';

const SEED_LEADS: LeadPayload[] = [
  {
    id: 'SIG-839201',
    leadType: 'site_visit',
    name: 'Rajesh Agarwal',
    phone: '+91 98290 12345',
    email: 'rajesh.agarwal@example.com',
    projectName: 'Anukampa Sky Lounge',
    projectId: 'anukampa-sky-lounge',
    location: 'Mansarovar Extension, Jaipur',
    configuration: '3 BHK High-Rise Apartment',
    preferredDate: '2026-08-20',
    preferredTime: 'Morning (10 AM - 1 PM)',
    message: 'Interested in touring corner 3 BHK unit on 8th floor.',
    sourcePage: '/projects/anukampa-sky-lounge',
    utmSource: 'google',
    utmMedium: 'cpc',
    utmCampaign: 'mansarovar_highrise',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: 'New',
  },
  {
    id: 'SIG-710492',
    leadType: 'price_request',
    name: 'Priya Sharma',
    phone: '+91 94140 67890',
    email: 'priya.s@example.com',
    projectName: 'Arihant Dynasty',
    projectId: 'arihant-dynasty',
    location: 'Mansarovar, Jaipur',
    configuration: '2 BHK Smart Apartment',
    message: 'Requesting breakdown of floor rise charges and GST benefits.',
    sourcePage: '/projects/arihant-dynasty',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    status: 'Contacted',
  },
  {
    id: 'SIG-559102',
    leadType: 'investment',
    name: 'Vikram Singh Shekhawat',
    phone: '+91 98291 98765',
    email: 'v.shekhawat@example.com',
    location: 'Jaipur Ring Road Corridor',
    budget: '₹80 Lakhs - ₹1.2 Crores',
    propertyType: 'Land & Plot Opportunities',
    message: 'Looking for 200 sq. yard plot near Ring Road junction for 3-year holding period.',
    sourcePage: '/investment',
    utmSource: 'facebook',
    utmMedium: 'social',
    utmCampaign: 'investment_corridor',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    status: 'In Progress',
  },
  {
    id: 'SIG-409182',
    leadType: 'nri',
    name: 'Dr. Amit Mehta',
    phone: '+1 408 555 0192',
    email: 'dramitmehta@example.com',
    location: 'Vaishali Nagar, Jaipur',
    budget: '₹1.5 Crores+',
    propertyType: 'Luxury Villa',
    message: 'NRI residing in San Jose, USA. Requesting virtual video site walkthrough for 4 BHK villa.',
    sourcePage: '/nri-services',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'New',
  },
  {
    id: 'SIG-391029',
    leadType: 'sell_property',
    name: 'Mahesh Khandelwal',
    phone: '+91 98293 44556',
    email: 'm.khandelwal@example.com',
    location: 'Kalwar Road, Jaipur',
    propertyType: 'Independent Villa',
    budget: '₹65 Lakhs',
    message: 'Want to sell my 3 BHK independent villa (1800 sq ft) constructed in 2021.',
    sourcePage: '/sell-property',
    createdAt: new Date(Date.now() - 3600000 * 36).toISOString(),
    status: 'Closed',
  },
];

/**
 * Get all stored leads with seed fallback
 */
export function getStoredLeads(): LeadPayload[] {
  try {
    const data = localStorage.getItem('sigma_leads');
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
    // Initialize seed data if empty
    localStorage.setItem('sigma_leads', JSON.stringify(SEED_LEADS));
    return SEED_LEADS;
  } catch (err) {
    console.warn('[Sigma Leads] Local storage read error:', err);
    return SEED_LEADS;
  }
}

/**
 * Fetch leads from Cloud API and merge locally across browsers/devices
 */
export async function syncLeadsFromCloud(): Promise<LeadPayload[]> {
  try {
    const res = await fetch(REMOTE_API_URL);
    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data.leads)) {
        const cloudLeads: LeadPayload[] = json.data.leads;
        const localLeads = getStoredLeads();

        // Merge cloud leads and local leads by ID
        const leadMap = new Map<string, LeadPayload>();
        [...SEED_LEADS, ...localLeads, ...cloudLeads].forEach((l) => {
          if (l.id) leadMap.set(l.id, l);
        });

        const merged = Array.from(leadMap.values()).sort(
          (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
        );

        localStorage.setItem('sigma_leads', JSON.stringify(merged));
        window.dispatchEvent(new CustomEvent('sigma-leads-updated', { detail: merged }));
        return merged;
      }
    }
  } catch (err) {
    console.warn('[Sigma Leads] Cloud sync read error:', err);
  }
  return getStoredLeads();
}

/**
 * Push updated leads array to Cloud API
 */
export async function syncLeadsToCloud(leads: LeadPayload[]): Promise<void> {
  try {
    await fetch(REMOTE_API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'sigma_leads',
        data: { leads },
      }),
    });
  } catch (err) {
    console.warn('[Sigma Leads] Cloud sync write error:', err);
  }
}

/**
 * Save leads array and dispatch reactive window event + cloud sync
 */
export function saveLeads(leads: LeadPayload[]): void {
  try {
    localStorage.setItem('sigma_leads', JSON.stringify(leads));
    window.dispatchEvent(new CustomEvent('sigma-leads-updated', { detail: leads }));
    // Asynchronously push to cloud API so other browsers get it
    syncLeadsToCloud(leads);
  } catch (err) {
    console.warn('[Sigma Leads] Local storage write error:', err);
  }
}

/**
 * Submit a new lead
 */
export async function submitLead(payload: LeadPayload): Promise<LeadSubmissionResult> {
  const referenceId = `SIG-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

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
    id: referenceId,
    status: 'New',
    createdAt: timestamp,
    sourceUrl: window.location.href,
    sourcePage: window.location.pathname,
    utmSource: payload.utmSource || savedUtm.utmSource,
    utmMedium: payload.utmMedium || savedUtm.utmMedium,
    utmCampaign: payload.utmCampaign || savedUtm.utmCampaign,
  };

  console.log('[Sigma Lead System] New Lead Created:', fullPayload);

  const existingLeads = getStoredLeads();
  const updatedLeads = [fullPayload, ...existingLeads];
  saveLeads(updatedLeads);

  return {
    success: true,
    referenceId,
    message: 'Your enquiry has been received by Sigma Group. A representative will contact you shortly.',
  };
}

/**
 * Update a lead's status tag
 */
export function updateLeadStatus(id: string, status: LeadStatus): void {
  const leads = getStoredLeads();
  const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
  saveLeads(updated);
}

/**
 * Delete a lead by ID
 */
export function deleteLead(id: string): void {
  const leads = getStoredLeads();
  const updated = leads.filter((l) => l.id !== id);
  saveLeads(updated);
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
 * Generate context-aware WhatsApp link
 */
export function generateWhatsAppLink(context: {
  type?: LeadType;
  projectName?: string;
  location?: string;
  message?: string;
}): string {
  let text = 'Hi Sigma Homes, I would like to inquire about real estate opportunities.';

  if (context.projectName) {
    text = `Hi Sigma Homes, I am interested in ${context.projectName}${
      context.location ? ` in ${context.location}` : ''
    }. Please share the price sheet and site visit details.`;
  } else if (context.type === 'investment') {
    text = 'Hi Sigma Homes, I would like to discuss real estate investment opportunities and corridor research.';
  } else if (context.type === 'nri') {
    text = 'Hi Sigma Homes, I am an NRI looking to explore property investment and virtual tour options in India.';
  } else if (context.type === 'sell_property') {
    text = 'Hi Sigma Homes, I would like to submit my property for evaluation and sales marketing.';
  } else if (context.location) {
    text = `Hi Sigma Homes, I am looking for properties in ${context.location}. Please share the available options.`;
  } else if (context.message) {
    text = context.message;
  }

  return `https://wa.me/${SIGMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
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
