export type LeadType =
  | 'property_enquiry'
  | 'investment'
  | 'sell_property'
  | 'nri'
  | 'site_visit'
  | 'price_request'
  | 'callback'
  | 'consultation'
  | 'contact'
  | 'career'
  | 'service_enquiry'
  | 'leader_contact'
  | 'location_enquiry';

export type LeadStatus = 'New' | 'Contacted' | 'In Progress' | 'Closed';

export interface UtmParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

export interface LeadPayload {
  id?: string;
  leadType: LeadType;
  name: string;
  phone: string;
  email?: string;
  projectId?: string;
  projectName?: string;
  location?: string;
  propertyType?: string;
  budget?: string;
  configuration?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  sourcePage?: string;
  sourceUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  createdAt?: string;
  status?: LeadStatus;
}

export interface LeadSubmissionResult {
  success: boolean;
  referenceId: string;
  message: string;
}

export interface ProjectComparisonCriteria {
  label: string;
  key: string;
}
