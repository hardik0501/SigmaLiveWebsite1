export interface MarketData {
  id: string;
  name: string;
  type: string;
  description: string;
}

export const markets: MarketData[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    type: 'Primary Market',
    description: 'Headquarters with the largest portfolio of residential and commercial projects.',
  },
  {
    id: 'noida',
    name: 'Noida',
    type: 'Working Zone',
    description: 'Expanding presence in the Delhi NCR real estate corridor.',
  },
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    type: 'Working Zone',
    description: 'Targeting premium residential and commercial opportunities.',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    type: 'Future Zone',
    description: 'International expansion for NRI clients and global investors.',
  },
  {
    id: 'dholera',
    name: 'Dholera',
    type: 'Future Zone',
    description: 'Smart city investment opportunities on the Delhi-Mumbai Industrial Corridor.',
  },
];

export interface CareerStep {
  step: string;
  title: string;
  description: string;
}

export const careerJourney: CareerStep[] = [
  {
    step: '01',
    title: 'Intern',
    description: 'Foundational training in real estate operations and market fundamentals.',
  },
  {
    step: '02',
    title: 'Fresher',
    description: 'Hands-on field experience with guided client interactions.',
  },
  {
    step: '03',
    title: 'Professional / Salary Model',
    description: 'Structured earning model with performance-linked growth.',
  },
  {
    step: '04',
    title: 'Leadership Model',
    description: 'Team ownership and strategic project responsibility.',
  },
  {
    step: '05',
    title: 'Director Level',
    description: 'Partnership role with business P&L and long-term equity participation.',
  },
];

export interface InsightCategory {
  id: string;
  label: string;
}

export const insightCategories: InsightCategory[] = [
  { id: 'property', label: 'Property' },
  { id: 'investment', label: 'Investment' },
  { id: 'locations', label: 'Locations' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'market-insights', label: 'Market Insights' },
  { id: 'video', label: 'Video' },
];

export interface StatData {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatData[] = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 12000, suffix: '+', label: 'Happy Customers' },
  { value: 100, suffix: '+', label: 'Successful Projects' },
  { value: 2500, suffix: '+', label: 'Channel Associates' },
];

export interface WhySigmaItem {
  title: string;
  description: string;
}

export const whySigmaItems: WhySigmaItem[] = [
  { title: '25+ Years of Industry Experience', description: 'Two and a half decades of deep market knowledge and delivery track record.' },
  { title: 'Verified & Trusted Projects', description: 'Every project is vetted for legal clarity and development quality.' },
  { title: 'Professional Sales Team', description: 'Trained relationship managers who understand both property and people.' },
  { title: 'Dedicated Relationship Managers', description: 'Single point of contact throughout your property journey.' },
  { title: 'Transparent Pricing', description: 'No hidden charges. Every cost is disclosed before you commit.' },
  { title: 'Legal Documentation Support', description: 'End-to-end assistance with agreements, registrations and compliance.' },
  { title: 'Leading Bank Loan Assistance', description: 'Partnerships with major banks for fast-track home loan processing.' },
  { title: 'Investment Research Team', description: 'Data-backed advisory on appreciation potential and rental yields.' },
  { title: 'After Sales Service', description: 'Support continues well beyond the handover of keys.' },
  { title: 'Strong Channel Partner Network', description: '2,500+ associates creating reach across every micro-market.' },
  { title: 'Technology Driven Process', description: 'Digital workflows for site visits, documentation and updates.' },
  { title: 'Customer First Approach', description: 'Every decision is measured against long-term client trust.' },
];
