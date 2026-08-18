import { LeadPayload, LeadSubmissionResult, UtmParams, LeadType } from '@/types/lead';

const SIGMA_WHATSAPP_NUMBER = '919829288341';
const SIGMA_PHONE_NUMBER = '+91 98292 88341';

/**
 * Universal lead submission processor
 */
export async function submitLead(payload: LeadPayload): Promise<LeadSubmissionResult> {
  const referenceId = `SIG-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

  const fullPayload: LeadPayload = {
    ...payload,
    id: referenceId,
    createdAt: timestamp,
    sourceUrl: window.location.href,
    sourcePage: window.location.pathname,
  };

  // Log payload for future CRM / Webhook integration
  console.log('[Sigma Lead System] Lead Submitted:', fullPayload);

  // Persist locally for user session reference
  try {
    const existing = JSON.parse(localStorage.getItem('sigma_leads') || '[]');
    existing.push(fullPayload);
    localStorage.setItem('sigma_leads', JSON.stringify(existing));
  } catch (err) {
    console.warn('[Sigma Lead System] Local storage write warning:', err);
  }

  return {
    success: true,
    referenceId,
    message: 'Your enquiry has been received by Sigma Group. A representative will contact you shortly.',
  };
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
