import {
  FounderProfile,
  Leader,
  CareerStage,
  SuccessStory,
  ServiceItem,
} from '@/types/company';

export const founderData: FounderProfile = {
  name: 'Jitendra Kumar Sharma',
  title: 'Founder & Chairman',
  philosophyHindi: 'जन सेवा ही राष्ट्र सेवा है।',
  philosophyEnglish: 'Public Service is National Service.',
  portrait: '/images/Founder/HeroImage.jpeg',
  personalProfile: {
    name: 'Jitendra Kumar Sharma',
    placeOfBirth: 'Village Lakheri, Bansur, Alwar, Rajasthan',
    dateOfBirth: '1 February 1983',
    fatherName: 'Shri Krishnakant Sharma',
    motherName: 'Smt. Kamla Devi Sharma',
  },
  story:
    'Shri Jitendra Kumar Sharma founded Sigma Group with a foundational commitment to integrity, public service, and empowering families through property creation and business development. Rooted in the core philosophy that "Public Service is National Service," his journey spans real estate development, social service, media, youth empowerment, and public administration.',
  education: [
    { degree: 'B.Sc.', title: 'Bachelor of Science' },
    { degree: 'M.A.', title: 'Master of Arts' },
    { degree: 'B.Ed.', title: 'Bachelor of Education' },
  ],
  personalityTitles: [
    'Entrepreneur',
    'Public Servant',
    'Social Worker',
    'Life Coach',
    'National Thinker',
    'Media Entrepreneur',
    'Gau Sevak',
  ],
  responsibilities: [
    { title: 'District Minister', organization: 'Bharatiya Janata Party, Alwar District' },
    { title: 'State Co-Convener', organization: 'Beti Bachao, Beti Padhao, BJP Rajasthan' },
    { title: 'Division In-Charge (Bharatpur)', organization: 'Sports Cell, Rajasthan' },
    { title: 'BJP Assembly In-Charge', organization: 'Thanagazi and Behror Assembly Constituencies' },
    { title: 'Chairman', organization: 'Baba Garibnath Mela Committee' },
    { title: 'Chairman', organization: 'Village Development Committee' },
    { title: 'Convener', organization: 'Nav Yuvak Sangh, Bansur' },
    { title: 'Convener', organization: 'Pran Yuva Sena, Bansur' },
    { title: 'State General Secretary', organization: 'Parshuram International Organization' },
    { title: 'State President', organization: 'Gau Raksha Dal, Rajasthan' },
  ],
  socialServiceThemes: [
    'Poor and underprivileged families',
    'Labour communities',
    'Families of soldiers & martyred personnel',
    'Women and senior citizen welfare',
    'Rural society & social harmony',
  ],
  youthFocus: [
    'Skill Development & Entrepreneurship',
    'Self-Reliance & Professional Discipline',
    'Hard Work & National Development',
  ],
  businessFootprint: [
    'Real Estate and Residential Colony Development',
    'Industrial and Agricultural Land Development',
    'Road and Civil Construction',
    'Industrial Manpower and Labour Services',
  ],
  lifeMottoHindi: 'राष्ट्र देवो भव — यतो धर्मस्ततो जयः',
  lifeMottoEnglish: 'Revere the Nation as Divine — Where there is Truth & Righteousness, there is Victory.',
  inspirations: [
    'Swami Vivekananda',
    'Pandit Deendayal Upadhyaya',
    'Atal Bihari Vajpayee',
    'Narendra Modi',
    'Amit Shah',
    'Bhajan Lal Sharma',
  ],
  coreValues: [
    'Nation',
    'Service',
    'Discipline',
    'Culture',
    'Leadership',
    'Social Harmony',
    'Youth Empowerment',
    'Entrepreneurship',
  ],
  digitalPresence: {
    website: 'https://www.jitendrabansur.com',
    email: 'jitendbansur@gmail.com',
    facebook: 'https://facebook.com/JitendraSharmaBansur',
    twitter: 'https://twitter.com/JitendraBansur',
  },
};

export const leadersData: Leader[] = [
  {
    id: 'jitendra-kumar-sharma',
    slug: 'jitendra-kumar-sharma',
    name: 'Jitendra Kumar Sharma',
    designation: 'Founder & Chairman',
    category: 'CHAIRMAN',
    portrait: '/images/Founder/HeroImage.jpeg',
    shortBio: 'Founder of Sigma Group with over two decades of vision, leadership, and public service.',
    fullBio:
      'Shri Jitendra Kumar Sharma established Sigma Homes to deliver transparent property development, ethical real estate transactions, and sustainable community creation across Rajasthan and North India.',
    expertise: ['Corporate Vision', 'Land Acquisition', 'Strategic Growth', 'Public Relations'],
    journey: [
      { year: '2001', title: 'Founding of Sigma', description: 'Established Sigma Homes with a core ethos of Trust First.' },
      { year: '2010', title: 'Township Expansion', description: 'Pioneered master-planned residential colonies across Jaipur growth corridors.' },
      { year: '2020', title: 'Ecosystem Diversification', description: 'Expanded into commercial development, civil construction, and IT sales enablement.' },
    ],
    socialLinks: {
      facebook: 'https://facebook.com/JitendraSharmaBansur',
      twitter: 'https://twitter.com/JitendraBansur',
    },
    contactEmail: 'jitendbansur@gmail.com',
    featured: true,
  },
  {
    id: 'vikram-sharma',
    slug: 'vikram-sharma',
    name: 'Vikram Sharma',
    designation: 'Director — Sales & Expansion',
    category: 'DIRECTOR',
    portrait: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBio: 'Leading retail sales strategy, channel associate development, and new market expansion.',
    fullBio:
      'Vikram Sharma drives sales execution, managing a network of over 2,500 channel partners and ensuring customer-first relationship management for all Sigma developments.',
    expertise: ['Sales Strategy', 'Channel Partner Network', 'Customer Relations', 'Project Marketing'],
    journey: [
      { year: '2012', title: 'Joined Sigma', description: 'Started as Senior Sales Manager overseeing Mansarovar project sales.' },
      { year: '2018', title: 'Elevated to Director', description: 'Appointed Director of Sales overseeing all Jaipur portfolio launches.' },
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
    contactEmail: 'sales@sigmahomesindia.com',
    featured: true,
  },
  {
    id: 'anita-shekhawat',
    slug: 'anita-shekhawat',
    name: 'Anita Shekhawat',
    designation: 'Director — Customer Experience & Operations',
    category: 'DIRECTOR',
    portrait: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortBio: 'Overseeing legal documentation, bank loan tie-ups, and post-sales customer satisfaction.',
    fullBio:
      'Anita Shekhawat leads post-sales operations, legal compliance, and customer lifecycle management, ensuring transparent documentation and seamless bank loan processing.',
    expertise: ['Customer Experience', 'Legal Compliance', 'Bank Loan Tie-ups', 'CRM Operations'],
    journey: [
      { year: '2015', title: 'Head of Customer Relations', description: 'Streamlined documentation and legal disclosures for buyers.' },
      { year: '2021', title: 'Director Operations', description: 'Appointed to Board overseeing operations and legal compliance.' },
    ],
    contactEmail: 'support@sigmahomesindia.com',
    featured: true,
  },
];

export const careerStagesData: CareerStage[] = [
  {
    stageNumber: 1,
    stageCode: 'INTERN_MODEL',
    title: 'Intern Model',
    tagline: 'Learning, Market Exposure & Real Estate Fundamentals',
    description:
      'Gain hands-on orientation into real estate market research, customer interactions, site visit logistics, and project positioning.',
    highlights: [
      'Comprehensive mentorship by senior sales managers',
      'Real-world exposure to property listings and client tours',
      'Foundation training in real estate regulations and documentation',
    ],
    skillsLearned: ['Market Research', 'Customer Communication', 'Site Visit Coordination'],
  },
  {
    stageNumber: 2,
    stageCode: 'FRESHER_MODEL',
    title: 'Fresher Model',
    tagline: 'Structured Training & Client Acquisition Skills',
    description:
      'Transition into full-time customer advisory, learning lead management, sales closing techniques, and inventory consultation.',
    highlights: [
      'Structured digital CRM training and buyer intent qualification',
      'Direct participation in flagship project launches',
      'Performance-backed incentives and career milestone tracking',
    ],
    skillsLearned: ['Lead Qualification', 'Project Sales', 'CRM Systems'],
  },
  {
    stageNumber: 3,
    stageCode: 'SALARY_MODEL',
    title: 'Salary Model',
    tagline: 'Professional Stability & Independent Account Ownership',
    description:
      'Manage portfolio sales independently, building relationship networks with investors, buyers, and financial partners.',
    highlights: [
      'Guaranteed fixed salary tier supplemented by high performance commissions',
      'Ownership of specialized regional territories and property categories',
      'Direct handling of high-value luxury and commercial transactions',
    ],
    skillsLearned: ['Territory Management', 'Portfolio Advisory', 'Negotiation'],
  },
  {
    stageNumber: 4,
    stageCode: 'LEADERSHIP_MODEL',
    title: 'Leadership Model',
    tagline: 'Team Building, Mentorship & Managerial Growth',
    description:
      'Step into team leadership, guiding a cohort of sales associates, driving monthly target execution, and managing partner channels.',
    highlights: [
      'Mentorship responsibilities over incoming freshers and associates',
      'Strategy participation with senior management on project pricing and marketing',
      'Leadership development workshops and strategic management training',
    ],
    skillsLearned: ['Team Leadership', 'Sales Forecasting', 'Channel Partner Relations'],
  },
  {
    stageNumber: 5,
    stageCode: 'DIRECTOR_LEVEL',
    title: 'Director Level',
    tagline: 'Strategic Business Responsibility & Partnership Stake',
    description:
      'Achieve top executive leadership within the Sigma ecosystem, guiding new venture launches, market expansions, and corporate strategy.',
    highlights: [
      'Strategic input on corporate land acquisition and venture development',
      'Revenue share partnership opportunities on flagship project developments',
      'Representation of Sigma Group at national real estate leadership forums',
    ],
    skillsLearned: ['Corporate Strategy', 'Business Growth', 'Executive Governance'],
  },
];

export const successStoriesData: SuccessStory[] = [
  {
    id: 'rajesh-choudhary',
    slug: 'rajesh-choudhary',
    name: 'Rajesh Choudhary',
    portrait: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    startingPoint: 'Joined as a Sales Associate in 2018 without prior real estate experience',
    yearsWithSigma: '5+ Years',
    currentRole: 'Senior Associate Director — Mansarovar Zone',
    story:
      'Rajesh joined Sigma Group as a fresher looking for a meaningful career in Jaipur. Through rigorous mentorship under the Founder and continuous field training on site visits, he learned the art of transparent customer consultation. Over 5 years, he progressed through the Salary Model into senior leadership, today managing a team of 18 professionals across South Jaipur.',
    keyLessons: [
      'Trust with buyers is built through complete transparency, not pushy tactics.',
      'Consistency in daily customer follow-ups creates long-term referral business.',
    ],
    quote: 'Sigma gave me a platform where my hard work directly shaped my career trajectory into leadership.',
    featured: true,
  },
  {
    id: 'sunita-sharma',
    slug: 'sunita-sharma',
    name: 'Sunita Sharma',
    portrait: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    startingPoint: 'Work-from-Home Consultant seeking financial self-reliance',
    yearsWithSigma: '4 Years',
    currentRole: 'Channel Partner Development Lead',
    story:
      'Sunita began her journey with Sigma seeking a flexible career opportunity that allowed her to manage family commitments while earning independently. Starting through the associate onboarding model, she excelled in digital client consultation and today leads partner relations for over 300 women entrepreneurs.',
    keyLessons: [
      'Self-reliance comes from mastering product knowledge and active listening.',
      'Real estate offers equal opportunity for everyone willing to learn.',
    ],
    quote: 'At Sigma, growth is open to anyone who values integrity and continuous learning.',
    featured: true,
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'property-consulting',
    slug: 'property-consulting',
    name: 'Property Consulting',
    category: 'CONSULTING',
    iconName: 'Building2',
    tagline: 'Expert end-to-end guidance for residential & commercial property selection.',
    heroImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'Sigma Property Consulting provides independent, data-backed advisory to buyers seeking residential homes, villas, commercial spaces, or land in Jaipur and major North Indian corridors.',
    whatWeDo: [
      'In-depth buyer requirement analysis (budget, location, layout, timeline)',
      'Verified property shortlisting across RERA-approved developments',
      'Comparative pricing and location infrastructure evaluation',
      'Guided private site tours and legal document inspection',
    ],
    whoItsFor: [
      'First-time homebuyers looking for reliable, transparent guidance',
      'Families upgrading to luxury high-rise or villa residences',
      'Investors evaluating growth corridor potential',
    ],
    process: [
      { stepNumber: 1, title: 'Requirement Intake', description: 'We map your budget, location choices, and timeline.' },
      { stepNumber: 2, title: 'Verified Shortlisting', description: 'We select RERA-approved properties matching your criteria.' },
      { stepNumber: 3, title: 'Private Site Visits', description: 'Guided on-site inspections of layouts and amenities.' },
      { stepNumber: 4, title: 'Closing & Documentation', description: 'Assistance with cost sheets, agreements, and registration.' },
    ],
    benefits: [
      'Zero hidden brokerage fees on direct developer listings',
      'Complete legal transparency and RERA registration verification',
      'Dedicated relationship manager assigned to your journey',
    ],
    relatedServiceSlugs: ['investment-advisory', 'home-loan-assistance', 'legal-documentation'],
    featured: true,
  },
  {
    id: 'investment-advisory',
    slug: 'investment-advisory',
    name: 'Investment Advisory',
    category: 'INVESTMENT',
    iconName: 'TrendingUp',
    tagline: 'Strategic real estate portfolio planning & capital growth research.',
    heroImage: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'Our Investment Advisory division conducts rigorous location research, infrastructure trajectory mapping, and rental yield forecasting to help investors allocate capital intelligently.',
    whatWeDo: [
      'High-growth corridor evaluation (Ring Road, SEZ, 200 Ft Road)',
      'Pre-launch and early-stage project opportunity assessment',
      'Rental yield analysis and tenant demographic profiling',
      'Exit strategy planning and resale management',
    ],
    whoItsFor: [
      'HNI & NRI investors looking for capital preservation and growth',
      'Real estate portfolio investors diversifying across asset classes',
    ],
    process: [
      { stepNumber: 1, title: 'Portfolio Goal Analysis', description: 'Evaluating risk tolerance, yield vs capital growth targets.' },
      { stepNumber: 2, title: 'Corridor Research', description: 'Identifying emerging infrastructure routes and demand drivers.' },
      { stepNumber: 3, title: 'Asset Allocation', description: 'Recommending commercial, residential, or land investments.' },
    ],
    benefits: [
      'Data-driven market research backed by 25+ years of local experience',
      'Access to pre-launch pricing on verified Sigma Group projects',
    ],
    relatedServiceSlugs: ['property-consulting', 'commercial-real-estate', 'nri-services'],
    featured: true,
  },
  {
    id: 'commercial-real-estate',
    slug: 'commercial-real-estate',
    name: 'Commercial Real Estate',
    category: 'COMMERCIAL',
    iconName: 'Briefcase',
    tagline: 'Prime retail shops, office spaces & commercial investment assets.',
    heroImage: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'Sigma Commercial offers strategic retail storefronts, office suites, and commercial land along prime avenues like Queens Road, VT Road, and main highway feeder corridors.',
    whatWeDo: [
      'Retail shop and showroom leasing and sales',
      'Office space acquisition for IT, corporate, and healthcare tenants',
      'High-footfall commercial plot development',
    ],
    whoItsFor: ['Retail brands, corporate offices, and commercial rental yield investors.'],
    process: [
      { stepNumber: 1, title: 'Footfall & Locality Audit', description: 'Assessing catchment demographic and traffic counts.' },
      { stepNumber: 2, title: 'Unit Selection', description: 'Shortlisting high-visibility commercial inventory.' },
    ],
    benefits: ['High rental return potential', 'Prime main-road frontage locations'],
    relatedServiceSlugs: ['investment-advisory', 'property-consulting'],
    featured: true,
  },
  {
    id: 'nri-services',
    slug: 'nri-services',
    name: 'NRI Real Estate Services',
    category: 'NRI_SERVICES',
    iconName: 'Globe',
    tagline: 'End-to-end property consultation & remote management for NRI buyers.',
    heroImage: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'Tailored services for Non-Resident Indians seeking transparent property investments in India with virtual tours, digital documentation, and dedicated relationship managers.',
    whatWeDo: [
      'Virtual video walkthroughs and live interactive site tours',
      'FEMA compliance and NRE/NRO account transaction assistance',
      'Tenant placement and ongoing property maintenance',
    ],
    whoItsFor: ['NRIs residing in Gulf, USA, UK, Canada, and Australia.'],
    process: [
      { stepNumber: 1, title: 'Virtual Consultation', description: 'Video briefing on suitable projects and market dynamics.' },
      { stepNumber: 2, title: 'Digital Execution', description: 'Power of Attorney (POA) and online agreement support.' },
    ],
    benefits: ['Complete peace of mind for overseas investors', 'Dedicated NRI helpdesk'],
    relatedServiceSlugs: ['property-consulting', 'investment-advisory', 'property-management'],
    featured: true,
  },
  {
    id: 'home-loan-assistance',
    slug: 'home-loan-assistance',
    name: 'Home Loan & Financial Assistance',
    category: 'SERVICES',
    iconName: 'Landmark',
    tagline: 'Hassle-free loan processing with leading national banks.',
    heroImage: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'We partner with SBI, HDFC, ICICI, Axis Bank, and Bank of Baroda to secure optimal interest rates, maximum eligibility, and swift sanctioning for buyers.',
    whatWeDo: [
      'Eligibility assessment and loan tenure optimization',
      'Doorstep document collection and bank coordination',
      'Pre-approved project clearance acceleration',
    ],
    whoItsFor: ['Homebuyers seeking smooth home loan sanctioning.'],
    process: [
      { stepNumber: 1, title: 'Eligibility Check', description: 'Evaluating income and bank interest rates.' },
      { stepNumber: 2, title: 'Sanction & Disbursal', description: 'Coordinating bank legal checks and final disbursement.' },
    ],
    benefits: ['Tie-ups with all major national banks', 'Faster sanction timelines'],
    relatedServiceSlugs: ['property-consulting', 'legal-documentation'],
    featured: false,
  },
  {
    id: 'legal-documentation',
    slug: 'legal-documentation',
    name: 'Legal & Title Documentation',
    category: 'SERVICES',
    iconName: 'FileCheck',
    tagline: 'Complete title verification, sale deed registration & RERA disclosures.',
    heroImage: 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview:
      'Our in-house legal support team conducts thorough title searches, ensures JDA/RERA approvals, and handles complete sub-registrar office deed registration.',
    whatWeDo: [
      'Search report and title verification of land records',
      'Agreement for Sale & Sale Deed drafting',
      'Sub-Registrar office appointment and registry execution',
    ],
    whoItsFor: ['Property buyers requiring 100% legal safety.'],
    process: [
      { stepNumber: 1, title: 'Title Search', description: 'Verifying past ownership and non-encumbrance status.' },
      { stepNumber: 2, title: 'Registry Execution', description: 'Assisting at the Sub-Registrar office.' },
    ],
    benefits: ['Zero legal risk', 'Transparent documentation'],
    relatedServiceSlugs: ['property-consulting', 'home-loan-assistance'],
    featured: false,
  },
];
