export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  {
    label: 'Properties',
    href: '/properties',
    children: [
      { label: 'Apartments', href: '/properties?type=Apartments' },
      { label: 'Villas', href: '/properties?type=Villas' },
      { label: 'Plots & Land', href: '/properties?type=Plots+%26+Land' },
      { label: 'Farmhouses', href: '/properties?type=Farmhouses' },
      { label: 'Commercial', href: '/properties?type=Commercial' },
    ],
  },
  {
    label: 'Investment',
    href: '/investment',
    children: [
      { label: 'Investment Hub', href: '/investment' },
      { label: 'NRI Real Estate Services', href: '/nri-services' },
      { label: 'Sell Your Property', href: '/sell-property' },
      { label: 'Property Advisory', href: '/consultation' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'Explore All Locations', href: '/locations' },
      { label: 'Mansarovar', href: '/locations/mansarovar-jaipur' },
      { label: 'Mansarovar Extension', href: '/locations/mansarovar-extension-jaipur' },
      { label: 'Vaishali Nagar', href: '/locations/vaishali-nagar-jaipur' },
      { label: 'Kalwar Road', href: '/locations/kalwar-road-jaipur' },
      { label: 'Jagatpura', href: '/locations/jagatpura-jaipur' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Real Estate Services', href: '/services' },
      { label: 'Property Consulting', href: '/services/property-consulting' },
      { label: 'Investment Advisory', href: '/services/investment-advisory' },
      { label: 'Commercial Real Estate', href: '/services/commercial-real-estate' },
      { label: 'NRI Services', href: '/nri-services' },
      { label: 'Sell Property', href: '/sell-property' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Sigma Group', href: '/about' },
      { label: 'Founder & Chairman', href: '/founder' },
      { label: 'Leadership Team', href: '/leadership' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    label: 'Blogs',
    href: '/blogs',
    children: [
      { label: 'All Market Insights', href: '/blogs' },
      { label: 'Market Trends', href: '/blogs' },
      { label: 'NRI Advisory Guides', href: '/blogs' },
      { label: 'Buyer & Legal Guides', href: '/blogs' },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
    children: [
      { label: 'Career Growth Model', href: '/careers' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Express Interest / Apply', href: '/careers' },
    ],
  },
];

export const footerNav = {
  main: [
    { label: 'Properties', href: '/properties' },
    { label: 'Projects', href: '/projects' },
    { label: 'Locations', href: '/locations' },
    { label: 'Investment Advisory', href: '/investment' },
    { label: 'NRI Services', href: '/nri-services' },
    { label: 'Sell Property', href: '/sell-property' },
    { label: 'Compare Projects', href: '/compare' },
    { label: 'Services', href: '/services' },
    { label: 'About Sigma', href: '/about' },
    { label: 'Founder Biography', href: '/founder' },
    { label: 'Leadership Team', href: '/leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  business: [
    { label: 'Sigma Builders & Developers', href: '/services' },
    { label: 'Sigma Homes', href: '/properties' },
    { label: 'Sigma Investments', href: '/investment' },
    { label: 'Sigma Commercial', href: '/services/commercial-real-estate' },
    { label: 'Sigma NRI Services', href: '/nri-services' },
  ],
  markets: [
    { label: 'Jaipur (Mansarovar)', href: '/locations/mansarovar-jaipur' },
    { label: 'Vaishali Nagar', href: '/locations/vaishali-nagar-jaipur' },
    { label: 'Kalwar Road', href: '/locations/kalwar-road-jaipur' },
    { label: 'Noida (NCR)', href: '/locations' },
    { label: 'Gurgaon (NCR)', href: '/locations' },
  ],
};

export const contact = {
  salesHelpline: '+91 98292 88341',
  salesHelplineRaw: '+919829288341',
  whatsapp: '919829288341',
};

export const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
] as const;
