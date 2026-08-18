export interface FounderPersonalProfile {
  name: string;
  placeOfBirth: string;
  dateOfBirth: string;
  fatherName: string;
  motherName: string;
}

export interface FounderEducationItem {
  degree: string;
  title: string;
  institution?: string;
}

export interface FounderOrganizationalRole {
  title: string;
  organization: string;
  scope?: string;
}

export interface FounderSocialLinks {
  website?: string;
  email?: string;
  facebook?: string;
  twitter?: string;
}

export interface FounderProfile {
  name: string;
  title: string;
  philosophyHindi: string;
  philosophyEnglish: string;
  portrait: string;
  personalProfile: FounderPersonalProfile;
  story: string;
  education: FounderEducationItem[];
  personalityTitles: string[];
  responsibilities: FounderOrganizationalRole[];
  socialServiceThemes: string[];
  youthFocus: string[];
  businessFootprint: string[];
  lifeMottoHindi: string;
  lifeMottoEnglish: string;
  inspirations: string[];
  coreValues: string[];
  digitalPresence: FounderSocialLinks;
}

export interface LeaderJourneyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface LeaderSocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface Leader {
  id: string;
  slug: string;
  name: string;
  designation: string;
  category: 'CHAIRMAN' | 'DIRECTOR' | 'PARTNER' | 'LEAD';
  portrait: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  journey: LeaderJourneyMilestone[];
  socialLinks?: LeaderSocialLinks;
  contactEmail?: string;
  featured?: boolean;
}

export interface CareerStage {
  stageNumber: number;
  stageCode: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  skillsLearned: string[];
}

export interface SuccessStory {
  id: string;
  slug: string;
  name: string;
  portrait: string;
  startingPoint: string;
  yearsWithSigma: string;
  currentRole: string;
  story: string;
  keyLessons: string[];
  quote: string;
  featured?: boolean;
}

export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: 'DEVELOPMENT' | 'CONSULTING' | 'INVESTMENT' | 'PROPERTY_MANAGEMENT' | 'COMMERCIAL' | 'NRI_SERVICES' | 'CONSTRUCTION' | 'SERVICES';
  iconName: string;
  tagline: string;
  heroImage: string;
  overview: string;
  whatWeDo: string[];
  whoItsFor: string[];
  process: ServiceProcessStep[];
  benefits: string[];
  relatedServiceSlugs: string[];
  featured?: boolean;
}
