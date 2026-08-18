import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'anukampa-sky-lounge',
    slug: 'anukampa-sky-lounge',
    name: 'Anukampa Sky Lounge',
    tagline: '8 Bigha Sky Residence Township with 50,000 Sq.Ft. Grand Club',
    city: 'Jaipur',
    location: 'Kesar Chauraha, Arjun Marg, Mansarovar Extension, Jaipur',
    locality: 'Mansarovar Extension',
    address: 'Kesar Chauraha, Arjun Marg, Mansarovar Extension, Near Hotel Hyatt Regency, Jaipur, Rajasthan 302020',
    landParcel: '8 Bighas',
    propertyType: 'Apartments',
    configurations: ['3 BHK', '4 BHK'],
    status: 'new-launch',
    priceFrom: 5368000,
    priceLabel: 'BSP ₹5,900/Sq.Ft. · Starting ₹53.68L*',
    priceIndicative: true,
    areaFrom: 910,
    areaTo: 1650,
    areaLabel: '910 – 1,650 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Large-format sky residence township with expansive 50,000 Sq.Ft. club and 72,000 Sq.Ft. podium garden.',
    usp: '8 Bigha land parcel with 50,000 Sq.Ft. Grand Club and 72,000 Sq.Ft. Podium Garden near Hyatt Regency.',
    highlights: [
      '8 Bighas grand land parcel',
      '50,000 Sq.Ft. Grand Club House',
      '72,000 Sq.Ft. Podium Garden & sports deck',
      'Near Hotel Hyatt Regency',
    ],
    featured: true,
    priority: 1,
    tags: ['Luxury', 'Investment', 'End Use'],
    approvalStatus: 'RERA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'A New Paradigm of Sky Residence Community',
      description: 'Anukampa Sky Lounge is a flagship 8 Bigha residential enclave positioned at Kesar Chauraha, Mansarovar Extension. Designed around open green spaces, active sports infrastructure, and luxury club amenities, it brings high-rise community living to Jaipur’s fastest appreciating residential corridor.',
    },

    detailedHighlights: [
      {
        number: '8 BIGHAS',
        label: 'Grand Land Parcel',
        description: 'A contiguous master-planned enclave providing expansive open space and vehicular separation.',
        image: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        number: '50,000 SQ.FT.',
        label: 'Grand Club House',
        description: 'Multi-level sports, wellness, and social hub featuring indoor games, temperature-controlled pool, and banquet facilities.',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        number: '72,000 SQ.FT.',
        label: 'Podium Garden',
        description: 'Elevated vehicle-free green landscape with walking tracks, serene water bodies, and outdoor seating gazebos.',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],

    visualUsps: [
      {
        title: 'Sports & Active Lifestyle Hub',
        description: 'Includes full-size tennis court, half basketball court, cricket practice pitch, and kids play park.',
        tag: 'Sports First',
      },
      {
        title: 'Strategic Mansarovar Extension Location',
        description: 'Situated at Kesar Chauraha on Arjun Marg, directly adjacent to Hotel Hyatt Regency.',
        tag: 'Connectivity',
      },
      {
        title: 'High Rental & Capital Appreciation',
        description: 'High-density employment corridor proximity ensures strong long-term yields for investors.',
        tag: 'Investment Potential',
      },
    ],

    detailedConfigurations: [
      {
        type: '3 BHK Sky Apartment',
        area: '910 – 1,280 Sq.Ft.',
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        price: '₹53.68 Lakhs*',
      },
      {
        type: '4 BHK Luxury Suite',
        area: '1,450 – 1,650 Sq.Ft.',
        bedrooms: 4,
        bathrooms: 4,
        balconies: 3,
        price: '₹85.00 Lakhs*',
      },
    ],

    detailedPricing: {
      bsp: '₹5,900 / Sq.Ft.',
      startingPrice: '₹53.68 Lakhs*',
      additionalCharges: [
        { label: 'Covered Basement Parking', amount: '₹2,00,000' },
        { label: 'Society Interest-Free Maintenance', amount: '₹155 / Sq.Ft.' },
        { label: 'LPG Pipeline Infrastructure Charge', amount: '₹25,000' },
      ],
      paymentPlan: 'Construction Linked Payment Plan (CLP) / Special Bank Subvention Available',
      disclaimer: 'Starting price is indicative and subject to unit selection, applicable taxes, government charges and final official cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'LIFESTYLE & RECREATION',
        items: [
          { name: '50,000 Sq.Ft. Grand Club House', description: 'Multi-story social and indoor sports facility' },
          { name: '72,000 Sq.Ft. Elevated Podium Garden', description: 'Vehicle-free green park' },
          { name: 'Swimming Pool & Splash Deck', description: 'Adult pool with kids wading section' },
        ],
      },
      {
        category: 'SPORTS & FITNESS',
        items: [
          { name: 'Cricket Practice Pitch', description: 'Enclosed net practice zone' },
          { name: 'Basketball & Badminton Courts', description: 'Outdoor court setup' },
          { name: 'Fully Equipped Fitness Center', description: 'Cardio & strength equipment' },
        ],
      },
      {
        category: 'SECURITY & CONVENIENCE',
        items: [
          { name: '3-Tier RFID Security', description: 'CCTV surveillance & guarded gates' },
          { name: 'Multi-Level Basement Parking', description: 'Designated parking bays' },
          { name: 'High-Speed Elevators', description: 'Automatic stretcher-compatible lifts' },
        ],
      },
    ],

    lifestyleFeature: {
      title: '50,000 SQ.FT. GRAND CLUB & PODIUM PARK',
      subtitle: 'REDEFINING RESIDENTIAL COMMUNITY LIVING IN JAIPUR',
      description: 'Experience an unparalleled lifestyle centered around active recreation, green landscapes, and dedicated sports zones built for multi-generational families.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      stats: [
        { value: '50K', label: 'Sq.Ft. Club' },
        { value: '72K', label: 'Sq.Ft. Park' },
        { value: '8', label: 'Bigha Parcel' },
      ],
    },

    galleryImages: [
      { url: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Exterior Tower Elevation', category: 'architecture' },
      { url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Living Lounge Interiors', category: 'interiors' },
      { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Podium Garden Walkway', category: 'amenities' },
      { url: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Master Bedroom Suite', category: 'interiors' },
    ],

    floorPlanAssets: [
      { type: '3 BHK', title: '3 BHK Premium Sky Residence', area: '1,280 Sq.Ft.', image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
      { type: '4 BHK', title: '4 BHK Grand Sky Suite', area: '1,650 Sq.Ft.', image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],

    specificationsData: [
      { category: 'STRUCTURE', items: ['Earthquake resistant RCC framed structure certified by structural engineers'] },
      { category: 'FLOORING', items: ['Vitrified tiles in living, dining & bedrooms', 'Anti-skid ceramic tiles in balcony & bathrooms'] },
      { category: 'KITCHEN', items: ['Granite counter top with stainless steel sink', 'Provision for RO water purifier & exhaust fan'] },
      { category: 'DOORS & WINDOWS', items: ['Flush doors with veneer finish', 'UPVC / Aluminum sliding windows with mosquito mesh'] },
    ],

    locationIntel: {
      address: 'Kesar Chauraha, Arjun Marg, Mansarovar Extension, Jaipur',
      locality: 'Mansarovar Extension',
      city: 'Jaipur',
      advantages: [
        { title: 'Prime Kesar Chauraha Address', description: 'Direct frontage on Arjun Marg near Hyatt Regency.' },
        { title: 'Metro & Ring Road Proximity', description: 'Quick access to Vande Mataram Circle & Mansarovar Metro Station.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Hyatt Regency', distance: 'Approx. 200 Meters' },
        { category: 'CONNECTIVITY', name: 'Mansarovar Metro Station', distance: 'Approx. 3.5 KM' },
        { category: 'EDUCATION', name: 'St. Wilfred College', distance: 'Approx. 1.2 KM' },
        { category: 'HEALTHCARE', name: 'Apex Hospital', distance: 'Approx. 2.5 KM' },
        { category: 'SHOPPING', name: 'City Park Mansarovar', distance: 'Approx. 2.0 KM' },
      ],
    },

    investmentContext: {
      title: 'Strategic Corridor Capital Appreciation Potential',
      description: 'Mansarovar Extension has developed into Jaipur’s premier high-rise residential growth belt, benefiting from rapid infrastructure investments, hospitality additions like Hyatt Regency, and continuous demand from corporate professionals.',
      points: [
        'High rental liquidity due to nearby educational & commercial nodes',
        'Proven capital growth trajectory along the Arjun Marg corridor',
        'Master-planned neighborhood infrastructure with wide arterial roads',
      ],
      disclaimer: 'Investment figures and growth commentary are for market orientation and do not constitute a guarantee of future returns.',
    },

    faqsData: [
      { question: 'Where is Anukampa Sky Lounge located?', answer: 'The project is situated at Kesar Chauraha, Arjun Marg, Mansarovar Extension, near Hotel Hyatt Regency, Jaipur.' },
      { question: 'What configurations are available?', answer: 'Anukampa Sky Lounge offers premium 3 BHK and 4 BHK sky residences ranging from 910 to 1,650 Sq.Ft.' },
      { question: 'What is the starting price?', answer: 'The indicative starting price is ₹53.68 Lakhs* at a BSP of ₹5,900/Sq.Ft.' },
      { question: 'Is the project approved by regulatory authorities?', answer: 'Yes, Anukampa Sky Lounge is RERA approved and legally vetted.' },
    ],
  },
  {
    id: 'govindam-paradise',
    slug: 'govindam-paradise',
    name: 'Govindam Paradise',
    tagline: 'Family-Oriented Residential Enclave at Keshar Circle',
    city: 'Jaipur',
    location: 'Mansarovar Extension, Jaipur',
    locality: 'Mansarovar Extension',
    address: 'Keshar Circle, Mansarovar Extension, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK'],
    status: 'under-construction',
    priceFrom: 4443000,
    priceLabel: 'Starting from ₹44.43L*',
    priceIndicative: true,
    areaFrom: 850,
    areaTo: 1350,
    areaLabel: '850 – 1,350 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Family-oriented apartment community situated near Keshar Circle featuring central courtyard garden.',
    usp: 'Landscaped central courtyard with water features and family amenities near Keshar Circle.',
    highlights: [
      'Prime location near Keshar Circle',
      'Landscaped central courtyard & green walkway',
      'Kids play zone & community hall',
      '24/7 multi-tier security',
    ],
    featured: true,
    priority: 2,
    tags: ['Family Home', 'First Home', 'End Use'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Thoughtfully Planned Homes for Modern Families',
      description: 'Govindam Paradise is designed around family wellness and everyday convenience. Located near Keshar Circle in Mansarovar Extension, it offers efficient 2 & 3 BHK floor plans surrounded by landscaped courtyards and dedicated play spaces.',
    },

    detailedHighlights: [
      {
        number: 'KESHAR CIRCLE',
        label: 'Prime Connectivity Node',
        description: 'Direct access to main feeder roads linking VT Road and Ajmer Expressway.',
      },
      {
        number: 'CENTRAL PARK',
        label: 'Landscaped Courtyard',
        description: 'A serene green courtyard featuring water fountains and walking tracks.',
      },
    ],

    visualUsps: [
      { title: 'Family-Centric Community', description: 'Secure gated environment tailored for children and senior citizens.' },
      { title: 'Affordable Luxury Pricing', description: 'Competitive price point starting from ₹44.43L* for premium quality construction.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Compact', area: '850 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹44.43 Lakhs*' },
      { type: '3 BHK Deluxe', area: '1,350 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹58.50 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹44.43 Lakhs*',
      disclaimer: 'Starting price is indicative. Final costs are subject to unit selection and official cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'FAMILY & RECREATION',
        items: [
          { name: 'Central Courtyard Garden', description: 'Landscaped green area' },
          { name: 'Kids Play Zone', description: 'Safe outdoor play equipment' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Exterior View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Keshar Circle, Mansarovar Extension, Jaipur',
      locality: 'Mansarovar Extension',
      city: 'Jaipur',
      advantages: [
        { title: 'Keshar Circle Proximity', description: 'Seamless access to local markets and transit lines.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Keshar Circle', distance: 'Approx. 100 Meters' },
        { category: 'SHOPPING', name: 'VT Road Retail Belt', distance: 'Approx. 1.5 KM' },
      ],
    },

    faqsData: [
      { question: 'What is the starting price at Govindam Paradise?', answer: 'Prices start from ₹44.43 Lakhs* for a 2 BHK configuration.' },
      { question: 'Is the project JDA approved?', answer: 'Yes, Govindam Paradise holds valid JDA approval.' },
    ],
  },
  {
    id: 'arihant-dynasty',
    slug: 'arihant-dynasty',
    name: 'Arihant Dynasty',
    tagline: 'Premium Family Residences with Rooftop Sky Deck',
    city: 'Jaipur',
    location: 'Mansarovar, Jaipur',
    locality: 'Mansarovar',
    address: 'Mansarovar Main Corridor, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    status: 'under-construction',
    priceFrom: 4500000,
    priceLabel: 'Starting from ₹45.00L*',
    priceIndicative: true,
    areaFrom: 1100,
    areaTo: 1850,
    areaLabel: '1,100 – 1,850 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Practical semi-furnished family residences in the heart of Mansarovar.',
    usp: 'Rooftop sky deck with panoramic city views and established residential ecosystem.',
    highlights: [
      'Rooftop Sky Deck with lounge space',
      'Practical family-centric layout options',
      'Semi-furnished luxury units',
      'Instant connectivity to VT Road & Mansarovar Metro',
    ],
    featured: true,
    priority: 3,
    tags: ['Family Home', 'End Use'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Established Mansarovar Living',
      description: 'Arihant Dynasty offers semi-furnished luxury apartments in Mansarovar. Designed for practical family living, the project features a panoramic rooftop sky deck, spacious rooms, and rapid access to schools and metro transit.',
    },

    detailedHighlights: [
      { number: 'SKY DECK', label: 'Rooftop Terrace', description: 'Community sky deck for relaxation and city views.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Premium', area: '1,100 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹45.00 Lakhs*' },
      { type: '3 BHK Luxury', area: '1,550 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹62.00 Lakhs*' },
      { type: '4 BHK Grand Suite', area: '1,850 Sq.Ft.', bedrooms: 4, bathrooms: 4, balconies: 3, price: '₹88.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹45.00 Lakhs*',
      disclaimer: 'Indicative pricing subject to official cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'AMENITIES',
        items: [
          { name: 'Rooftop Sky Deck', description: 'Panoramic outdoor terrace' },
          { name: 'Fitness Gym', description: 'Modern gym equipment' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Building Elevation', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Mansarovar Main Corridor, Jaipur',
      locality: 'Mansarovar',
      city: 'Jaipur',
      advantages: [
        { title: 'Established Ecosystem', description: 'Surrounded by top schools, hospitals, and metro access.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Mansarovar Metro', distance: 'Approx. 1.5 KM' },
        { category: 'EDUCATION', name: 'Mahaveer School', distance: 'Approx. 800 Meters' },
      ],
    },

    faqsData: [
      { question: 'What is the location of Arihant Dynasty?', answer: 'The project is located in Mansarovar, Jaipur with direct access to VT Road.' },
    ],
  },
  {
    id: 'kanhaiya-kunj',
    slug: 'kanhaiya-kunj',
    name: 'Kanhaiya Kunj',
    tagline: 'Gated Township of Independent Duplex Villas on Kalwar Road',
    city: 'Jaipur',
    location: 'Kalwar Road, Jaipur',
    locality: 'Kalwar Road',
    address: 'Kalwar Road Main Township Sector, Jaipur, Rajasthan 302012',
    propertyType: 'Villas',
    configurations: ['3 BHK', '4 BHK', '5 BHK'],
    status: 'ready-to-move',
    priceFrom: 6500000,
    priceLabel: 'Starting from ₹65.00L*',
    priceIndicative: true,
    areaFrom: 1600,
    areaTo: 2400,
    areaLabel: '1,600 – 2,400 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Independent duplex villas in a secure gated township on Kalwar Road.',
    usp: 'Vastu-compliant design with private parking and established community environment.',
    highlights: [
      'Independent duplex villas',
      '100% Vastu-compliant layout',
      'Gated township with boundary wall',
      'Wide internal paved roads',
    ],
    featured: false,
    priority: 4,
    tags: ['Family Home', 'Luxury', 'End Use'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Private Villa Living in a Secure Gated Enclave',
      description: 'Kanhaiya Kunj offers independent duplex villas along Kalwar Road. Built with Vastu compliance and private parking, these homes provide multi-generational families with independence, security, and open space.',
    },

    detailedHighlights: [
      { number: 'DUPLEX', label: 'Independent Structure', description: 'Private multi-story villa layouts with personal porch and roof rights.' },
    ],

    detailedConfigurations: [
      { type: '3 BHK Duplex Villa', area: '1,600 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹65.00 Lakhs*' },
      { type: '4 BHK Luxury Villa', area: '2,000 Sq.Ft.', bedrooms: 4, bathrooms: 4, balconies: 2, price: '₹82.00 Lakhs*' },
      { type: '5 BHK Grand Villa', area: '2,400 Sq.Ft.', bedrooms: 5, bathrooms: 5, balconies: 3, price: '₹1.05 Cr*' },
    ],

    detailedPricing: {
      startingPrice: '₹65.00 Lakhs*',
      disclaimer: 'Indicative villa pricing subject to plot size and official cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'TOWNSHIP FEATURES',
        items: [
          { name: 'Gated Boundary Wall', description: 'Secured township entrance' },
          { name: 'Private Car Parking', description: 'Covered porch space for 2 cars' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Villa Elevation', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Kalwar Road Township Sector, Jaipur',
      locality: 'Kalwar Road',
      city: 'Jaipur',
      advantages: [
        { title: 'Rapid Growth Belt', description: 'Kalwar Road offers fast transit to Jhotwara and Jaipur Junction.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Jhotwara Flyover', distance: 'Approx. 4.0 KM' },
      ],
    },

    faqsData: [
      { question: 'Are these independent villas?', answer: 'Yes, Kanhaiya Kunj consists of independent duplex villas with private roof rights.' },
    ],
  },
  {
    id: 'jb-prime-ii',
    slug: 'jb-prime-ii',
    name: 'JB Prime II',
    tagline: 'Ready Residential Apartments with Smart Home Features in Gokulpura',
    city: 'Jaipur',
    location: 'Gokulpura, Kalwar Road, Jhotwara, Jaipur',
    locality: 'Gokulpura',
    address: 'Gokulpura, Kalwar Road, Jhotwara Corridor, Jaipur, Rajasthan 302012',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    status: 'under-construction',
    priceFrom: 3850000,
    priceLabel: 'Starting from ₹38.50L*',
    priceIndicative: true,
    areaFrom: 920,
    areaTo: 1480,
    areaLabel: '920 – 1,480 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Modern ready-to-move homes with smart home automation in Gokulpura.',
    usp: 'Gated community equipped with smart home features and excellent Jhotwara road access.',
    highlights: [
      'Smart home automation features',
      'Gokulpura / Kalwar Road junction',
      'Covered basement parking',
      'Modern modular kitchen setup',
    ],
    featured: false,
    priority: 5,
    tags: ['First Home', 'End Use'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Smart Automation Meets Everyday Comfort',
      description: 'JB Prime II brings smart home technology to affordable residential apartments in Gokulpura, Jhotwara. Pre-installed smart automation, modular kitchens, and gated security make it an ideal first home.',
    },

    detailedHighlights: [
      { number: 'SMART', label: 'Home Automation', description: 'Mobile app controlled lighting and security locks.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Smart', area: '920 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹38.50 Lakhs*' },
      { type: '3 BHK Smart', area: '1,250 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹51.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹38.50 Lakhs*',
      disclaimer: 'Indicative starting price subject to cost sheet terms.',
    },

    groupedAmenities: [
      {
        category: 'TECH & SECURITY',
        items: [
          { name: 'Smart Lock & Automation', description: 'Digital door locks' },
          { name: 'Basement Parking', description: 'Covered vehicle space' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Apartment Exterior', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Gokulpura, Kalwar Road, Jaipur',
      locality: 'Gokulpura',
      city: 'Jaipur',
      advantages: [
        { title: 'Gokulpura Junction Location', description: 'Direct access to Jhotwara industrial & market nodes.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Jhotwara Industrial Area', distance: 'Approx. 2.0 KM' },
      ],
    },

    faqsData: [
      { question: 'Does JB Prime II include smart automation?', answer: 'Yes, apartments feature pre-installed smart lock and lighting automation controls.' },
    ],
  },
  {
    id: 'lucky-heights-4',
    slug: 'lucky-heights-4',
    name: 'Lucky Heights 4',
    tagline: 'Low-Density Boutique Residences near Nursery Circle',
    city: 'Jaipur',
    location: 'Acharya Vinoba Bhave Nagar, Nursery Circle, Jaipur',
    locality: 'Acharya Vinoba Bhave Nagar',
    address: 'Acharya Vinoba Bhave Nagar, Near Nursery Circle, Vaishali Extension, Jaipur, Rajasthan 302021',
    propertyType: 'Apartments',
    configurations: ['3 BHK', '4 BHK'],
    status: 'under-construction',
    priceFrom: 5800000,
    priceLabel: 'Starting from ₹58.00L*',
    priceIndicative: true,
    areaFrom: 1350,
    areaTo: 1950,
    areaLabel: '1,350 – 1,950 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Low-density boutique apartment residence in a sought-after address near Nursery Circle.',
    usp: 'Low-density layout with premium specs near Nursery Circle, Vaishali extension.',
    highlights: [
      'Nursery Circle prime address',
      'Boutique low-density structure',
      'High-speed automatic elevators',
      'Granite & wooden flooring finishes',
    ],
    featured: false,
    priority: 6,
    tags: ['Luxury', 'Family Home'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Refined Low-Density Urban Living',
      description: 'Lucky Heights 4 is an exclusive boutique residential building situated near Nursery Circle in Acharya Vinoba Bhave Nagar. Designed for buyers who value privacy, low density, and high-end finishes in Vaishali Extension.',
    },

    detailedHighlights: [
      { number: 'LOW DENSITY', label: 'Boutique Residence', description: 'Limited units per floor ensuring peaceful, private living.' },
    ],

    detailedConfigurations: [
      { type: '3 BHK Boutique', area: '1,350 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹58.00 Lakhs*' },
      { type: '4 BHK Executive', area: '1,950 Sq.Ft.', bedrooms: 4, bathrooms: 4, balconies: 3, price: '₹84.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹58.00 Lakhs*',
      disclaimer: 'Indicative price subject to unit availability and cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'BOUTIQUE FEATURES',
        items: [
          { name: 'Low-Density Floor Layout', description: 'Fewer neighbors per landing' },
          { name: 'Automatic Elevator', description: 'High-speed lift access' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Facade View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Acharya Vinoba Bhave Nagar, Near Nursery Circle, Jaipur',
      locality: 'Acharya Vinoba Bhave Nagar',
      city: 'Jaipur',
      advantages: [
        { title: 'Nursery Circle Address', description: 'Walker-friendly address near Vaishali Nagar commercial hubs.' },
      ],
      nearbyPlaces: [
        { category: 'SHOPPING', name: 'Nursery Circle Market', distance: 'Approx. 300 Meters' },
      ],
    },

    faqsData: [
      { question: 'Where is Lucky Heights 4 situated?', answer: 'The project is in Acharya Vinoba Bhave Nagar, right near Nursery Circle, Jaipur.' },
    ],
  },
  {
    id: 'rampura-road-premium-residences',
    slug: 'rampura-road-premium-residences',
    name: 'Rampura Road Premium Residences',
    tagline: 'High-Rise Community on 200 Ft Road Growth Corridor',
    city: 'Jaipur',
    location: 'Rampura Road / 200 Ft Road, Jaipur',
    locality: 'Rampura Road',
    address: 'Rampura Road, 200 Ft Express Corridor, Jaipur, Rajasthan 302029',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '2.5 BHK', '3 BHK'],
    status: 'new-launch',
    priceFrom: 3600000,
    priceLabel: 'Starting from ₹36.00L*',
    priceIndicative: true,
    areaFrom: 820,
    areaTo: 1250,
    areaLabel: '820 – 1,250 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/18615216/pexels-photo-18615216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/18615216/pexels-photo-18615216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Emerging high-rise community along the 200 Ft growth corridor.',
    usp: 'High-rise residence situated on a rapid appreciation 200 Ft Road corridor.',
    highlights: [
      'Positioned directly on 200 Ft Road',
      'High appreciation potential',
      'Rooftop jogging track & gazebo',
      'EV vehicle charging stations',
    ],
    featured: false,
    priority: 7,
    tags: ['Investment', 'First Home'],
    approvalStatus: 'RERA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'High-Growth Expressway Living',
      description: 'Situated on the 200 Ft Rampura Road corridor, this high-rise project offers modern 2 & 3 BHK residences tailored for first-time buyers and investment portfolios seeking strong capital growth.',
    },

    detailedHighlights: [
      { number: '200 FT ROAD', label: 'Express Corridor', description: 'Frontage along Jaipur’s major arterial ring corridor.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Compact', area: '820 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹36.00 Lakhs*' },
      { type: '2.5 BHK Smart', area: '1,050 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 2, price: '₹44.00 Lakhs*' },
      { type: '3 BHK High-Rise', area: '1,250 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹53.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹36.00 Lakhs*',
      disclaimer: 'Indicative launching pricing subject to RERA terms.',
    },

    groupedAmenities: [
      {
        category: 'MODERN UTILITIES',
        items: [
          { name: 'Rooftop Jogging Track', description: 'Elevated walking track' },
          { name: 'EV Vehicle Charging Stations', description: 'Green mobility support' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/18615216/pexels-photo-18615216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'High Rise View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Rampura Road, 200 Ft Road, Jaipur',
      locality: 'Rampura Road',
      city: 'Jaipur',
      advantages: [
        { title: '200 Ft Corridor', description: 'Direct express connectivity to Ajmer Expressway and Ring Road.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Ajmer Expressway Highway', distance: 'Approx. 1.8 KM' },
      ],
    },

    faqsData: [
      { question: 'What is the starting price on Rampura Road?', answer: 'Pre-launch pricing starts from ₹36.00 Lakhs* for 2 BHK configurations.' },
    ],
  },
  {
    id: 'shivam-grand',
    slug: 'shivam-grand',
    name: 'Shivam Grand',
    tagline: 'Premium 3 BHK Residences in Jagatpura Education Hub',
    city: 'Jaipur',
    location: 'Jagatpura, Jaipur',
    locality: 'Jagatpura',
    address: 'Jagatpura Central Corridor, Near SKIT University, Jaipur, Rajasthan 302017',
    propertyType: 'Apartments',
    configurations: ['3 BHK'],
    status: 'new-launch',
    priceFrom: 5200000,
    priceLabel: 'Starting from ₹52.00L*',
    priceIndicative: true,
    areaFrom: 1280,
    areaTo: 1650,
    areaLabel: '1,280 – 1,650 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Spacious 3 BHK apartments in the educational & healthcare district of Jagatpura.',
    usp: 'Grand double-height lobby with swift access to universities and hospitals.',
    highlights: [
      'Near SKIT University & Bombay Hospital',
      'Double-height entrance lobby',
      'Resident clubhouse & indoor games',
      '3-tier RFID access control',
    ],
    featured: false,
    priority: 8,
    tags: ['Family Home', 'End Use'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Connected Living in Jagatpura',
      description: 'Shivam Grand delivers premium 3 BHK apartments in Jagatpura near SKIT University and Bombay Hospital. Featuring a double-height entrance lobby and RFID security, it offers luxury tailored for academics and healthcare professionals.',
    },

    detailedHighlights: [
      { number: 'JAGATPURA', label: 'Education & Health Hub', description: 'Surrounded by top universities and medical centers.' },
    ],

    detailedConfigurations: [
      { type: '3 BHK Executive', area: '1,280 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹52.00 Lakhs*' },
      { type: '3 BHK Grand Suite', area: '1,650 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 3, price: '₹68.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹52.00 Lakhs*',
      disclaimer: 'Indicative pricing subject to cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'RESIDENCES',
        items: [
          { name: 'Double-Height Entrance Lobby', description: 'Grand reception area' },
          { name: 'Clubhouse & Indoor Games', description: 'Social recreation space' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Lobby & Building Exterior', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Jagatpura Central Corridor, Jaipur',
      locality: 'Jagatpura',
      city: 'Jaipur',
      advantages: [
        { title: 'Jagatpura Node', description: 'Close proximity to SKIT, JNU, and Bombay Hospital.' },
      ],
      nearbyPlaces: [
        { category: 'EDUCATION', name: 'SKIT University', distance: 'Approx. 500 Meters' },
        { category: 'HEALTHCARE', name: 'Bombay Hospital', distance: 'Approx. 1.2 KM' },
      ],
    },

    faqsData: [
      { question: 'Where is Shivam Grand located?', answer: 'The project is located in Jagatpura, Jaipur near SKIT University.' },
    ],
  },
  {
    id: 'narayan-vihar-villa-2',
    slug: 'narayan-vihar-villa-2',
    name: 'Narayan Vihar Villa 2',
    tagline: 'Park-Facing Luxury Villas with Private Terrace & Lawn',
    city: 'Jaipur',
    location: 'Narayan Vihar, Jaipur',
    locality: 'Narayan Vihar',
    address: 'Block B, Central Park Facing Plot, Narayan Vihar, Jaipur, Rajasthan 302020',
    propertyType: 'Villas',
    configurations: ['4 BHK', '5 BHK'],
    status: 'ready-to-move',
    priceFrom: 11000000,
    priceLabel: 'Starting from ₹1.10 Cr*',
    priceIndicative: true,
    areaFrom: 2200,
    areaTo: 3400,
    areaLabel: '2,200 – 3,400 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Exclusive park-facing luxury villas built for ultimate privacy and grandeur.',
    usp: 'Park-facing luxury villas featuring optional private plunge pool and expansive terrace.',
    highlights: [
      'Directly facing community central park',
      'Private terrace & landscaped lawn',
      'Imported marble flooring options',
      'Pre-installed solar power backup',
    ],
    featured: false,
    priority: 9,
    tags: ['Luxury', 'Family Home'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Uncompromised Luxury & Park-Facing Privacy',
      description: 'Narayan Vihar Villa 2 is a limited collection of bespoke park-facing luxury villas. Offering up to 3,400 Sq.Ft. of living space, private terrace gardens, and Italian marble finishes, it represents ultra-premium residential living.',
    },

    detailedHighlights: [
      { number: 'PARK FACING', label: 'Green Views', description: 'Direct frontage facing Narayan Vihar central park.' },
    ],

    detailedConfigurations: [
      { type: '4 BHK Luxury Villa', area: '2,200 Sq.Ft.', bedrooms: 4, bathrooms: 4, balconies: 3, price: '₹1.10 Cr*' },
      { type: '5 BHK Grand Villa', area: '3,400 Sq.Ft.', bedrooms: 5, bathrooms: 5, balconies: 4, price: '₹1.65 Cr*' },
    ],

    detailedPricing: {
      startingPrice: '₹1.10 Crore*',
      disclaimer: 'Villa prices are indicative and vary based on corner plot location and custom fittings.',
    },

    groupedAmenities: [
      {
        category: 'LUXURY SPECIFICATIONS',
        items: [
          { name: 'Private Terrace Garden', description: 'Rooftop gazebo setup' },
          { name: 'Solar Backup System', description: 'Pre-installed solar panels' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Villa Front View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Narayan Vihar Block B, Jaipur',
      locality: 'Narayan Vihar',
      city: 'Jaipur',
      advantages: [
        { title: 'Narayan Vihar Prime Belt', description: 'High-end residential neighborhood near Gopalpura Bypass.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Gopalpura Bypass Junction', distance: 'Approx. 1.2 KM' },
      ],
    },

    faqsData: [
      { question: 'Are these villas park facing?', answer: 'Yes, Narayan Vihar Villa 2 offers direct frontage facing the neighborhood central park.' },
    ],
  },
  {
    id: 'vaishali-nagar-3-bhk',
    slug: 'vaishali-nagar-3-bhk',
    name: 'Vaishali Nagar 3 BHK',
    tagline: 'Expansive 3 BHK Ready Homes on Prime 80 Ft Road',
    city: 'Jaipur',
    location: '80 Ft Road, Vaishali Nagar, Jaipur',
    locality: 'Vaishali Nagar',
    address: '80 Ft Road, Vaishali Nagar Commercial & Residential Hub, Jaipur, Rajasthan 302021',
    propertyType: 'Apartments',
    configurations: ['3 BHK'],
    status: 'ready-to-move',
    priceFrom: 6200000,
    priceLabel: 'Starting from ₹62.00L*',
    priceIndicative: true,
    areaFrom: 1450,
    areaTo: 1800,
    areaLabel: '1,450 – 1,800 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/38505310/pexels-photo-38505310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/38505310/pexels-photo-38505310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Generous 3 BHK apartments in Vaishali Nagar’s prime commercial and residential strip.',
    usp: 'Prime 80 Ft Road address combining expansive room dimensions and walkability.',
    highlights: [
      'Located on 80 Ft Road Vaishali Nagar',
      'Spacious 3 BHK floor plans',
      'Ready to occupy with immediate possession',
      'Minutes from top retail & dining hubs',
    ],
    featured: false,
    priority: 10,
    tags: ['Family Home', 'Luxury', 'End Use'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Immediate Possession in Prime Vaishali Nagar',
      description: 'Located on the popular 80 Ft Road in Vaishali Nagar, these ready-to-move 3 BHK apartments combine large spatial footprints (up to 1,800 Sq.Ft.) with immediate possession in Jaipur’s most sought-after lifestyle market.',
    },

    detailedHighlights: [
      { number: '80 FT ROAD', label: 'Prime Location', description: 'Walking distance to top restaurants, retail banks, and schools.' },
    ],

    detailedConfigurations: [
      { type: '3 BHK Spacious', area: '1,450 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹62.00 Lakhs*' },
      { type: '3 BHK Grand Layout', area: '1,800 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 3, price: '₹76.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹62.00 Lakhs*',
      disclaimer: 'Indicative ready-to-move price subject to cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'READY CONVENIENCE',
        items: [
          { name: 'Covered Parking Bay', description: 'Reserved parking spot' },
          { name: '24/7 Power Backup', description: 'Common area generator backup' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/38505310/pexels-photo-38505310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Building Facade', category: 'architecture' },
    ],

    locationIntel: {
      address: '80 Ft Road, Vaishali Nagar, Jaipur',
      locality: 'Vaishali Nagar',
      city: 'Jaipur',
      advantages: [
        { title: 'Vaishali Nagar Core', description: 'Immediate access to Queens Road, Amrapali Circle, and National Highway.' },
      ],
      nearbyPlaces: [
        { category: 'SHOPPING', name: 'Amrapali Circle Retail Market', distance: 'Approx. 600 Meters' },
      ],
    },

    faqsData: [
      { question: 'Are these homes ready to move?', answer: 'Yes, Vaishali Nagar 3 BHK features ready-to-move apartments with immediate possession.' },
    ],
  },
];

export const allLocalities = Array.from(new Set(projectsData.map((p) => p.locality))).sort();

export const allPropertyTypes = Array.from(new Set(projectsData.map((p) => p.propertyType))).sort();

export const allConfigurations = Array.from(
  new Set(projectsData.flatMap((p) => p.configurations))
).sort();

export const statusLabels: Record<string, string> = {
  'ready-to-move': 'Ready to Move',
  'under-construction': 'Under Construction',
  'new-launch': 'New Launch',
  'limited-inventory': 'Limited Inventory',
};

export const statusColors: Record<string, string> = {
  'ready-to-move': 'bg-sigma-green-500/10 text-sigma-green-700 border-sigma-green-200/50',
  'under-construction': 'bg-sigma-blue-500/10 text-sigma-blue-700 border-sigma-blue-200/50',
  'new-launch': 'bg-sigma-amber-500/10 text-sigma-amber-700 border-sigma-amber-200/50',
  'limited-inventory': 'bg-red-500/10 text-red-700 border-red-200/50',
};
