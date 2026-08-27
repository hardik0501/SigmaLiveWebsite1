import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'anukampa-sky-lounge',
    slug: 'anukampa-sky-lounge',
    name: 'Anukampa Sky Lounges',
    tagline: 'Premium 2 BHK Residences opposite Anukampa Platina',
    city: 'Jaipur',
    location: 'Mansarovar Extension, Jaipur',
    locality: 'Mansarovar Extension',
    address: 'Opposite Anukampa Platina, Iskcon Road, Mansarovar Extension, Jaipur, Rajasthan 302020',
    landParcel: '8 Bighas',
    propertyType: 'Apartments',
    configurations: ['2 BHK'],
    status: 'ready-to-move',
    priceFrom: 5009100,
    priceLabel: '₹50.09L – ₹64.25L*',
    priceIndicative: false,
    areaFrom: 849,
    areaTo: 1089,
    areaLabel: '849 – 1,089 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Premium 2 BHK apartments on Iskcon Road spread across an 8 Bigha land parcel, featuring Rajasthan’s largest operational clubhouse.',
    usp: '8 Bigha township opposite Anukampa Platina with 50,000 Sq.Ft. operational clubhouse & 550+ families shifted.',
    highlights: [
      'BSP: ₹5,900/- Per Sq.Ft.',
      'Township spread over 8 Bigha Land parcel',
      '50,000 Sq.Ft. Operational Clubhouse',
      '550+ Families already shifted (696 flats total)',
    ],
    featured: true,
    priority: 1,
    tags: ['Luxury', 'Investment', 'Ready to Move'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Experience Elevated Sky Residence Living',
      description: '🏡 Anukampa SkyLounges is a premium ready-to-move residential enclave positioned opposite Anukampa Platina on Iskcon Road, Mansarovar Extension. Boasting a vast 8 Bigha land parcel, it offers 2 BHK flats with private terraces and 3-side open layout options. The township features one of Rajasthan’s largest operational clubhouses spanning 50,000 Sq.Ft. and a massive 72,000 Sq.Ft. podium garden. Join a vibrant neighborhood with over 550+ families already living here.',
    },

    detailedHighlights: [
      {
        number: '550+',
        label: 'Families Shifted',
        description: 'Highly active community with 550+ families already residing in the complex.',
        image: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        number: '50,000 SQ.FT.',
        label: 'Operational Club',
        description: 'Rajasthan’s premier multi-level clubhouse featuring temperature pool, badminton and cafe lounges.',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        number: '72,000 SQ.FT.',
        label: 'Podium Garden',
        description: 'Vehicle-free elevated green gardens with senior citizen seating and walkways.',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],

    visualUsps: [
      {
        title: 'Iskcon Road Connectivity',
        description: 'Directly situated on a 200 ft. wide road opposite Anukampa Platina.',
        tag: 'Connectivity',
      },
      {
        title: '3-Side Open Flats',
        description: 'Maximum daylight, ventilation, and optional private terrace options.',
        tag: 'Design',
      },
    ],

    detailedConfigurations: [
      {
        type: '2 BHK Compact Sky',
        area: '849 Sq.Ft.',
        bedrooms: 2,
        bathrooms: 2,
        balconies: 1,
        price: '₹50.09 Lakhs*',
      },
      {
        type: '2 BHK Deluxe Sky',
        area: '950 Sq.Ft.',
        bedrooms: 2,
        bathrooms: 2,
        balconies: 2,
        price: '₹56.05 Lakhs*',
      },
      {
        type: '2 BHK Executive Sky',
        area: '1,089 Sq.Ft.',
        bedrooms: 2,
        bathrooms: 2,
        balconies: 2,
        price: '₹64.25 Lakhs*',
      },
    ],

    detailedPricing: {
      startingPrice: '₹50.09 Lakhs*',
      disclaimer: 'Calculated at BSP of ₹5,900/Sq.Ft. Parking and Corpus fund charges are not included in the flat base amount.',
    },

    groupedAmenities: [
      {
        category: 'CLUBHOUSE & ENTERTAINMENT',
        items: [
          { name: '50,000 Sq.Ft. Operational Club', description: 'Rajasthan’s largest residential clubhouse' },
          { name: 'Cafe Lounge & Elegant Reception', description: 'Lobby and leisure dining space' },
          { name: 'Kitty Party & Multi-Purpose Halls', description: 'Banquet facilities with 450+ capacity' },
          { name: 'Mini Theatre & E-Library', description: 'On-demand cinema and digital study hub' },
          { name: 'Guest Rooms (6+1)', description: 'Dedicated rooms for visitor boarding' },
        ],
      },
      {
        category: 'SPORTS & FITNESS',
        items: [
          { name: 'Gymnasium & Aerobics Zone', description: 'Equipped fitness and aerobic decks' },
          { name: 'Double-Height Badminton Court', description: 'Indoor courts for sports enthusiasts' },
          { name: 'Skating Rink & Cricket Court', description: 'Outdoor recreational sports zones' },
          { name: 'Yoga & Meditation Zone', description: 'Quiet space for wellness' },
        ],
      },
      {
        category: 'OUTDOOR & FAMILY',
        items: [
          { name: '72,000 Sq.Ft. Podium Garden', description: 'Lush green walkways and lawns' },
          { name: 'Infinity Pool & Kids Pool', description: 'Stunning elevated swimming pool facilities' },
          { name: 'Senior Citizen & Kids Play Area', description: 'Dedicated spaces for families' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/38772545/pexels-photo-38772545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Exterior Elevation', category: 'architecture' },
    ],

    floorPlanAssets: [
      { type: '2 BHK', title: '2 BHK Compact Sky', area: '849 Sq.Ft.', image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    ],

    specificationsData: [
      { category: 'STRUCTURE', items: ['Earthquake resistant RCC framed structure'] },
      { category: 'FLOORING', items: ['Vitrified tiles in living & dining', 'Anti-skid ceramic tiles in balcony'] },
      { category: 'KITCHEN', items: ['Granite platform with stainless steel sink'] },
      { category: 'DOORS & WINDOWS', items: ['Flush doors with laminates', 'UPVC/Aluminum windows'] },
    ],

    locationIntel: {
      address: 'Iskcon Road, Mansarovar Extension, Jaipur',
      locality: 'Mansarovar Extension',
      city: 'Jaipur',
      advantages: [
        { title: 'Iskcon Road Location', description: 'Positioned opposite Anukampa Platina on a 200 ft. wide arterial road.' },
        { title: 'Excellent Transit Links', description: 'Rapid access to Ajmer Road, Jaipur Ring Road, and Durgapura Station.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Jaipur International Airport', distance: 'Approx. 8.5 KM' },
        { category: 'CONNECTIVITY', name: 'Durgapura Railway Station', distance: 'Approx. 6.0 KM' },
        { category: 'SHOPPING', name: 'Mansarovar Commercial Corridor', distance: 'Approx. 1.5 KM' },
      ],
    },

    investmentContext: {
      title: 'Established Community Growth',
      description: 'Living in a township with 550+ active families ensures immediate social infrastructure and proven rental yields.',
      points: [
        'Ready-to-move status eliminates construction risk',
        'Large-scale township infrastructure',
        'High demand for rental units due to operational club',
      ],
      disclaimer: 'Investment figures and growth commentary are for market orientation.',
    },

    faqsData: [
      { question: 'What is the flat base cost structure?', answer: 'The flats are priced at ₹5,900 per Sq.Ft. Parking and Corpus fund charges are extra.' },
    ],
  },
  {
    id: 'govindam-paradise',
    slug: 'govindam-paradise',
    name: 'Govindam Paradise',
    tagline: 'Premium 2 & 3 BHK Apartments near Keshar Circle',
    city: 'Jaipur',
    location: 'Mansarovar Extension, Jaipur',
    locality: 'Mansarovar Extension',
    address: 'Near Keshar Circle, Mansarovar Extension, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK'],
    status: 'under-construction',
    priceFrom: 4443000,
    priceLabel: '₹44.43L – ₹72.92L*',
    priceIndicative: false,
    areaFrom: 850,
    areaTo: 1400,
    areaLabel: '850 – 1,400 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Govindam Paradise offers premium 2 & 3 BHK apartments near Keshar Circle, Mansarovar Extension featuring 18+ amenities and top connectivity.',
    usp: 'Premium 2 & 3 BHK flats near Keshar Circle and Muhana Mandi at ₹5,100 per Sq.Ft.',
    highlights: [
      'Basic Rate: ₹5,100/- Per Sq.Ft.',
      'Prime Location – Near Keshar Circle & Muhana Mandi',
      '2 BHK starts @ ₹44.43 Lakh (All Included)',
      '3 BHK starts @ ₹58.41 Lakh (All Included)',
    ],
    featured: true,
    priority: 2,
    tags: ['Family Home', 'First Home', 'Investment'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Premium Living near Keshar Circle',
      description: '🏡 Govindam Paradise brings premium 2 & 3 BHK apartments to one of Jaipur’s fastest-growing residential localities, near Keshar Circle in Mansarovar Extension. Spanning sizes from 850 Sq.Ft. to 1,400 Sq.Ft., these apartments offer luxury living, prime connectivity, and smart investment features. Pricing is structured transparently at a basic rate of ₹5,100/Sq.Ft. plus ₹80/Sq.Ft. corpus fund and ₹40,000 one-time electricity/transformer charge.',
    },

    detailedHighlights: [
      { number: '2 MINS', label: 'To Keshar Circle', description: 'Immediate connectivity to top schools, markets, and transit links.' },
      { number: '18+', label: 'Premium Amenities', description: 'Fully loaded with swimming pool, gym, banquet, and rooftop landscaped zones.' },
      { number: 'JDA', label: 'Approved Project', description: 'JDA approved with clear titles, eligible for 100% bank financing.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Premium', area: '850 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹44.43 Lakhs*' },
      { type: '2 BHK Premium', area: '880 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹45.98 Lakhs*' },
      { type: '2 BHK Premium', area: '900 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹47.02 Lakhs*' },
      { type: '2 BHK Premium', area: '925 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹48.31 Lakhs*' },
      { type: '2 BHK Premium', area: '950 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹49.61 Lakhs*' },
      { type: '2 BHK Premium', area: '960 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹50.12 Lakhs*' },
      { type: '2 BHK Premium', area: '975 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹50.90 Lakhs*' },
      { type: '3 BHK Premium', area: '1120 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹58.41 Lakhs*' },
      { type: '3 BHK Premium', area: '1200 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹62.56 Lakhs*' },
      { type: '3 BHK Premium', area: '1250 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹65.15 Lakhs*' },
      { type: '3 BHK Premium', area: '1320 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹68.77 Lakhs*' },
      { type: '3 BHK Premium', area: '1340 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹69.81 Lakhs*' },
      { type: '3 BHK Premium', area: '1400 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹72.92 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹44.43 Lakhs*',
      disclaimer: 'Calculated at base BSP of ₹5,100/Sq.Ft. Total cost includes ₹80/Sq.Ft. Corpus Fund and ₹40,000 one-time transformer charge. Registry fees extra.',
    },

    groupedAmenities: [
      {
        category: 'LIFESTYLE & HEALTH',
        items: [
          { name: 'Swimming Pool', description: 'Outdoor pool with splash deck' },
          { name: 'Fully Equipped Gym', description: 'Cardio & strength equipment zone' },
          { name: 'Yoga & Meditation', description: 'Serene deck for yoga practices' },
          { name: 'Club House & Banquet', description: 'Community gathering space and AC celebration hall' },
        ],
      },
      {
        category: 'OUTDOOR & RECREATION',
        items: [
          { name: 'Landscaped Garden', description: 'Lush green pathways and sitouts' },
          { name: 'Kids Play Arena', description: 'Outdoor slide and swing zone' },
          { name: 'Jogging Track', description: 'Paved boundary path for running' },
          { name: 'Indoor Games Area', description: 'Table tennis, carrom and chess room' },
        ],
      },
      {
        category: 'CONVENIENCES & SAFETY',
        items: [
          { name: 'Covered Parking & Lifts', description: 'Assigned parking bay and high-speed elevators' },
          { name: '24/7 Security & Water', description: 'Guarded gates, CCTV monitoring and continuous water supply' },
          { name: 'Premium Entrance Lobby', description: 'Double height waiting area' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Exterior View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Near Keshar Circle, Mansarovar Extension, Jaipur',
      locality: 'Mansarovar Extension',
      city: 'Jaipur',
      advantages: [
        { title: 'Prime Keshar Circle Address', description: 'Located just 2 minutes from Keshar Circle and Muhana Mandi.' },
        { title: 'Excellent Transit Connectivity', description: 'Direct access to Jaipur Ring Road, ISKCON Road, and NH8 Bypass.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Keshar Circle', distance: 'Approx. 2 Mins' },
        { category: 'SHOPPING', name: 'Muhana Mandi', distance: 'Approx. 2 Mins' },
        { category: 'HEALTHCARE', name: 'Mahatma Gandhi Hospital', distance: 'Approx. 12 Mins' },
      ],
    },

    faqsData: [
      { question: 'What is the starting total price?', answer: 'The total starting price for a 2 BHK (850 sq.ft.) is ₹44.43 Lakhs (all-inclusive basic, corpus, and transformer charges).' },
    ],
  },
  {
    id: 'arihant-dynasty',
    slug: 'arihant-dynasty',
    name: 'Arihant Dynasty',
    tagline: 'Premium Family Residences near Alpha School',
    city: 'Jaipur',
    location: 'Mansarovar, Jaipur',
    locality: 'Mansarovar',
    address: 'Near Alpha School, Patrakar Colony, Rampura Road, Mansarovar, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK'],
    status: 'under-construction',
    priceFrom: 2700000,
    priceLabel: '₹27.00L – ₹38.00L*',
    priceIndicative: false,
    areaFrom: 956,
    areaTo: 1350,
    areaLabel: '956 – 1,350 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Arihant Dynasty offers semi-furnished 2 & 3 BHK apartments near Alpha School, Patrakar Colony, Rampura Road in Mansarovar.',
    usp: 'Affordable luxury semi-furnished apartments near Alpha School & Patrakar Colony.',
    highlights: [
      '2 BHK (956 Sq.Ft.) @ ₹27 Lakh',
      '3 BHK (1350 Sq.Ft.) @ ₹38 Lakh',
      'Near Alpha School, Patrakar Colony',
      'Up to 90% Home Loan Facility Available',
    ],
    featured: true,
    priority: 3,
    tags: ['Family Home', 'Ready to Move', 'Investment'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Your Dream Home in Mansarovar',
      description: 'Welcome to Arihant Dynasty, a premium residential project by Sigma Builders & Developers. Ideally positioned near Alpha School in Mansarovar, Jaipur, this development features semi-furnished 2 & 3 BHK flats combining modern architecture, high-quality construction, and a peaceful neighborhood. Residents enjoy excellent connectivity to Patrakar Colony, Rampura Road markets, and the 200 ft bypass.',
    },

    detailedHighlights: [
      { number: 'LOAN', label: '90% Facility', description: 'Gated community with easy financial approvals and up to 90% loan availability.' },
      { number: 'FURNISHED', label: 'Semi-Furnished', description: 'Attractive prices including options for modular kitchen or interior consultation.' },
      { number: 'JDA', label: 'JDA Approved', description: 'JDA approved with clear titles, ensuring complete legal security.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Semi-Furnished', area: '956 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹27.00 Lakhs*' },
      { type: '3 BHK Semi-Furnished', area: '1,350 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹38.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹27.00 Lakhs*',
      disclaimer: 'Attractive pricing for semi-furnished units. GST and registration extra as applicable. Free modular kitchen or interior consultation included.',
    },

    groupedAmenities: [
      {
        category: 'LUXURY AMENITIES',
        items: [
          { name: 'Automatic Lift & Power Backup', description: 'High-speed automatic elevator' },
          { name: 'Rooftop Garden', description: 'Scenic green terrace deck' },
          { name: 'Fitness Zone / Open Gym', description: 'Well-equipped fitness area' },
          { name: 'Kids Play Area', description: 'Safe outdoor play arena' },
          { name: 'Vastu-Compliant Layouts', description: 'Optimized layouts for daylight and harmony' },
        ],
      },
      {
        category: 'CONVENIENCES',
        items: [
          { name: '24/7 Water & Reserved Parking', description: 'Borewell connection and dedicated parking bay' },
          { name: '24/7 Gated Security', description: 'Secure gated boundary wall' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Building Elevation', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Near Alpha School, Mansarovar, Jaipur',
      locality: 'Mansarovar',
      city: 'Jaipur',
      advantages: [
        { title: 'Near Alpha School', description: 'Walkable distance to Alpha School and nearby institutions.' },
        { title: 'Patrakar Colony Hub', description: 'Close proximity to Patrakar Colony and Rampura Road markets.' },
      ],
      nearbyPlaces: [
        { category: 'EDUCATION', name: 'Alpha School', distance: 'Walking Distance' },
        { category: 'CONNECTIVITY', name: 'Rampura Road Market', distance: 'Approx. 500 Meters' },
        { category: 'CONNECTIVITY', name: '200 ft Bypass', distance: 'Approx. 1.5 KM' },
      ],
    },

    faqsData: [
      { question: 'Is a home loan facility available?', answer: 'Yes, home loan facility up to 90% is available from leading national banks.' },
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
    tagline: 'Lucky Heights 4 – Premium Living Redefined',
    city: 'Jaipur',
    location: 'Vaishali Nagar, Jaipur',
    locality: 'Vaishali Nagar',
    address: 'Near Nursery Circle, Vaishali Extension, Jaipur, Rajasthan 302021',
    propertyType: 'Apartments',
    configurations: ['3 BHK', '4 BHK'],
    status: 'under-construction',
    priceFrom: 10617600,
    priceLabel: '₹1.06 Cr – ₹1.61 Cr*',
    priceIndicative: true,
    areaFrom: 1415.68,
    areaTo: 2150.10,
    areaLabel: '1,415.68 – 2,150.10 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Lucky Heights 4 offers 3 & 4 BHK luxury residences featuring premium stone top kitchen, JDA approvals, and beautiful rooftop gardens in Vaishali Nagar.',
    usp: 'Ek floor par 4 flats (2 of 3 BHK & 2 of 4 BHK), JDA approved with high-end connectivity.',
    highlights: [
      'Ek floor par 4 flats only (2 of 3 BHK & 2 of 4 BHK)',
      'Carpet Area: 1415.68 to 2150.10 Sq.Ft.',
      'RCC framed structure with Vastu compliant layouts',
      'Located 500m from Mall of Jaipur',
    ],
    featured: false,
    priority: 6,
    tags: ['Luxury', 'Family Home'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Premium Living Redefined',
      description: 'Lucky Heights 4 is an exclusive boutique residential building situated near Nursery Circle in Vaishali Extension. Designed for buyers who value privacy, low density, and high-end finishes with perfect connectivity.',
    },

    detailedHighlights: [
      { number: '4 FLATS', label: 'Per Floor Density', description: 'Boutique structure with only two 3 BHK & two 4 BHK units per floor.' },
      { number: 'VASTU', label: 'Compliant Layouts', description: 'Designed for harmony, positive energy, and cross-ventilation.' },
      { number: 'JDA', label: 'Approved Land', description: 'JDA approved with clear titles, ensuring complete legal security.' },
    ],

    detailedConfigurations: [
      { type: '3 BHK Luxury Flat', area: '1415.68 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹1.06 Cr*' },
      { type: '4 BHK Luxury Flat', area: '2150.10 Sq.Ft.', bedrooms: 4, bathrooms: 4, balconies: 3, price: '₹1.61 Cr*' },
    ],

    detailedPricing: {
      startingPrice: '₹1.06 Cr*',
      disclaimer: 'Calculated at a rate of ₹7,500 per sq.ft. Subject to final unit size and cost sheet details.',
    },

    groupedAmenities: [
      {
        category: 'PREMIUM SPECIFICATIONS',
        items: [
          { name: 'Modular Kitchen with Chimney', description: 'Contemporary layout with high-speed exhaust chimney' },
          { name: 'Stone Top Kitchen Platform', description: 'Premium granite/stone slab with under-counter basins' },
          { name: 'Triple Track Windows with Jali', description: 'UPVC windows with mosquito mesh slider track' },
          { name: 'Exhaust, Geyser & RO', description: 'Pre-installed wiring and plumbing provisions' },
          { name: 'Semi-Furnished Interiors', description: 'Premium woodwork wardrobes and basic installations' },
        ],
      },
      {
        category: 'SAFETY & GREEN FEATURES',
        items: [
          { name: 'Rain Water Harvesting', description: 'Eco-friendly ground recharge network' },
          { name: 'Fire Fighting System', description: 'Building-wide fire protection pipeline and alarms' },
          { name: 'Solar Energy for Common Areas', description: 'Grid-tied solar backup for building illumination' },
          { name: 'EV Charging Station', description: 'Dedicated electric vehicle charging slots' },
          { name: 'CCTV Surveillance & Parking', description: '24/7 lobby surveillance and secure covered parking slots' },
        ],
      },
      {
        category: 'RECREATION & COMMUNITY',
        items: [
          { name: 'Gazebo & Rooftop Garden', description: 'Scenic terrace deck with landscaping' },
          { name: 'Kids Play Area & Gardens', description: 'Safe slides and sandbox play zones' },
          { name: 'Temple & Indoor Games', description: 'Dedicated community temple and indoor games zone' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/8660084/pexels-photo-8660084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Facade View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Near Nursery Circle, Vaishali Extension, Jaipur',
      locality: 'Vaishali Nagar',
      city: 'Jaipur',
      advantages: [
        { title: 'Mall of Jaipur Connectivity', description: 'Situated just 500 meters from Mall of Jaipur with key retail hubs nearby.' },
        { title: 'Prime Vaishali Location', description: 'Easy walkability to Nursery Circle shopping centers and top food outlets.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Jaipur Railway Station', distance: '6.0 km' },
        { category: 'CONNECTIVITY', name: 'Sindhi Camp Bus Stand', distance: '7.0 km' },
        { category: 'SHOPPING', name: 'Mall of Jaipur', distance: '500 meters' },
        { category: 'SCHOOLS', name: 'Tagore International School', distance: '1.0 km' },
        { category: 'SCHOOLS', name: 'American Kids School', distance: '1.0 km' },
        { category: 'SCHOOLS', name: 'Alphabet School', distance: '2.0 km' },
        { category: 'HOSPITALS', name: 'Selby Hospital', distance: '1.0 km' },
        { category: 'HOSPITALS', name: 'Global Heart Hospital', distance: '700 meters' },
        { category: 'HOSPITALS', name: 'Tagore Hospital', distance: '4.5 km' },
        { category: 'HOSPITALS', name: 'Circuit Hospital', distance: '4.0 km' },
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
    tagline: 'Premium 2 & 3 BHK Residences in Jagatpura Education Hub',
    city: 'Jaipur',
    location: 'Jagatpura, Jaipur',
    locality: 'Jagatpura',
    address: 'Jagatpura Central Corridor, Near VIT College, Jaipur, Rajasthan 302017',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK'],
    status: 'new-launch',
    priceFrom: 4500000,
    priceLabel: '₹45.00L – ₹65.00L*',
    priceIndicative: false,
    areaFrom: 971,
    areaTo: 1516,
    areaLabel: '971 – 1,516 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Shivam Grand offers premium 2 & 3 BHK JDA & RERA approved apartments in Jagatpura, Jaipur starting from ₹45 Lakh.',
    usp: 'RERA & JDA approved premium flats with modular kitchen, false ceilings, and wardrobes.',
    highlights: [
      '2 BHK (971 - 1144 Sq.Ft.) @ ₹45 - 50 Lacs',
      '3 BHK (1220 - 1516 Sq.Ft.) @ ₹54 - 65 Lacs',
      'RERA & JDA Approved Property',
      '2 Wooden Wardrobes in Each Flat & False Ceiling',
    ],
    featured: false,
    priority: 8,
    tags: ['Family Home', 'End Use', 'Investment'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Connected Living in Jagatpura',
      description: 'Shivam Grand delivers premium 2 & 3 BHK apartments in Jagatpura, Jaipur. This JDA & RERA approved development offers highly ventilated layout configurations (971 to 1,516 Sq.Ft.) loaded with premium finishes including modular kitchens, false ceilings in halls/bedrooms, CERA brand fittings, and wooden wardrobes. The project boasts double lifts, reserved parking bays, AC pipe fittings, and up to 90% home loan approval.',
    },

    detailedHighlights: [
      { number: 'APPROVED', label: 'RERA & JDA', description: 'JDA approved with clear titles, eligible for up to 90% home loans.' },
      { number: 'PREMIUM', label: 'Semi-Furnished', description: 'Includes modular kitchens, double wardrobes, and false ceilings.' },
      { number: 'ROADS', label: '40 Ft Wide', description: 'Surrounded by 40 ft. wide front and back roads for seamless movement.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Premium Flat', area: '971 - 1,144 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹45.00 - 50.00 Lakhs*' },
      { type: '3 BHK Premium Flat', area: '1,220 - 1,516 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹54.00 - 65.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹45.00 Lakhs*',
      disclaimer: 'Attractive launch pricing. Booking amount only 10%. Home loan facility up to 90% available from national banks.',
    },

    groupedAmenities: [
      {
        category: 'APARTMENT INTERIORS',
        items: [
          { name: 'Modular Kitchen', description: 'Finished modern modular kitchen cabinet setup' },
          { name: '2 Wooden Wardrobes', description: 'Wardrobes installed in master and kids bedrooms' },
          { name: 'False Ceilings & CERA Fittings', description: 'Installed false ceilings and CERA sanitaryware' },
          { name: 'AC Pipe Fittings & Ventilation', description: 'Pre-installed copper piping and cross ventilation' },
        ],
      },
      {
        category: 'COMMUNITY INFRA',
        items: [
          { name: 'Double High-Speed Lifts', description: 'Automatic lifts with backup generators' },
          { name: 'Reserved Gated Parking', description: 'Dedicated parking spaces' },
          { name: 'Earthquake Resistant Structure', description: 'Robust RCC structure certified by engineers' },
          { name: '40 Ft Front & Back Roads', description: 'Wide access roads around the tower premises' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/8433082/pexels-photo-8433082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Lobby & Building Exterior', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Jagatpura, Jaipur',
      locality: 'Jagatpura',
      city: 'Jaipur',
      advantages: [
        { title: 'Jagatpura Education Belt', description: 'Near top institutions including VIT College and Jayshree Periwal School.' },
        { title: 'Local Infrastructure Connectivity', description: 'Easy access to D-Mart, Jeevan Rekha Hospital, Jaipur Airport, and Malls.' },
      ],
      nearbyPlaces: [
        { category: 'SHOPPING', name: 'D-Mart Jagatpura', distance: '1.3 km' },
        { category: 'EDUCATION', name: 'Jayshree Periwal Global School', distance: '2.0 km' },
        { category: 'EDUCATION', name: 'VIT College', distance: '2.0 km' },
        { category: 'HEALTHCARE', name: 'Jeevan Rekha Hospital', distance: '2.5 km' },
        { category: 'HEALTHCARE', name: 'Bombay Hospital', distance: '4.0 km' },
        { category: 'CONNECTIVITY', name: 'Jaipur International Airport', distance: '9.0 km' },
      ],
    },

    faqsData: [
      { question: 'What is the booking amount?', answer: 'The special launch booking amount is only 10% of the flat cost.' },
    ],
  },
  {
    id: 'narayan-vihar-villa-2',
    slug: 'narayan-vihar-villa-2',
    name: 'Narayan Vihar Villa 2',
    tagline: 'Luxury Duplex Villas in Narayan Vihar K Block',
    city: 'Jaipur',
    location: 'Narayan Vihar, K Block, Jaipur',
    locality: 'Narayan Vihar',
    address: 'K Block, Narayan Vihar, Jaipur, Rajasthan 302020',
    propertyType: 'Villas',
    configurations: ['4 BHK'],
    status: 'ready-to-move',
    priceFrom: 15000000,
    priceLabel: '₹1.50 Cr – ₹1.70 Cr*',
    priceIndicative: false,
    areaFrom: 90,
    areaTo: 114,
    areaLabel: '90 Gaj – 114 Gaj',
    heroImage: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Modern luxury villas in Narayan Vihar K Block, offering peaceful living, modern designs, and premium neighborhood connectivity.',
    usp: 'Premium 4 BHK villas in K Block near Bharat Mata Circle with modern design architecture.',
    highlights: [
      'Villa Sizes: 90 Gaj, 105 Gaj & 114 Gaj',
      'Price Starting @ ₹1.50 Crore to ₹1.70 Crore',
      'Prime Location – Narayan Vihar, K Block',
      'Modern Design in a Peaceful, Premium Neighborhood',
    ],
    featured: false,
    priority: 9,
    tags: ['Luxury', 'Family Home', 'Ready to Move'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Modern Luxury in a Peaceful Neighborhood',
      description: 'Welcome to Narayan Vihar Villa 2, a boutique enclave of modern luxury duplex villas situated in K Block, Narayan Vihar, Jaipur. Designed with peaceful living in mind, these premium villas offer spacious family-friendly layouts in three size options: 90 Gaj (₹1.50 Cr), 105 Gaj (₹1.60 Cr), and 114 Gaj (₹1.70 Cr). Featuring high-end finishes, modern design aesthetics, and a premium neighborhood feel.',
    },

    detailedHighlights: [
      { number: 'K BLOCK', label: 'Prime Location', description: 'Peaceful residential sector of Narayan Vihar with excellent local connectivity.' },
      { number: 'MODERN', label: 'Bespoke Design', description: 'Premium duplex architecture with open layouts and maximum cross ventilation.' },
      { number: 'JDA', label: 'Approved Plots', description: 'JDA approved plots with clear titles and bank loan approvals.' },
    ],

    detailedConfigurations: [
      { type: '90 Gaj Luxury Villa', area: '90 Gaj (810 Sq.Ft. Plot)', bedrooms: 4, bathrooms: 4, balconies: 3, price: '₹1.50 Cr*' },
      { type: '105 Gaj Luxury Villa', area: '105 Gaj (945 Sq.Ft. Plot)', bedrooms: 4, bathrooms: 4, balconies: 3, price: '₹1.60 Cr*' },
      { type: '114 Gaj Luxury Villa', area: '114 Gaj (1026 Sq.Ft. Plot)', bedrooms: 4, bathrooms: 4, balconies: 3, price: '₹1.70 Cr*' },
    ],

    detailedPricing: {
      startingPrice: '₹1.50 Crore*',
      disclaimer: 'Prices subject to change and final registration charges. Corner plots or premium views may have additional charges.',
    },

    groupedAmenities: [
      {
        category: 'VILLA HIGHLIGHTS',
        items: [
          { name: '4 Spacious Bedrooms', description: 'Bespoke bedroom layouts with attached washrooms' },
          { name: 'Modern Kitchen & Lobby', description: 'Granite counters and spacious entry lobbies' },
          { name: 'Private Balconies', description: 'Well-ventilated spaces offering natural daylight' },
        ],
      },
      {
        category: 'CONVENIENCES',
        items: [
          { name: 'Private Covered Parking', description: 'Reserved slots for cars and two-wheelers' },
          { name: 'Gated Security Layout', description: 'Peaceful and secure residential environment' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Villa Front View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Narayan Vihar K Block, Jaipur',
      locality: 'Narayan Vihar',
      city: 'Jaipur',
      advantages: [
        { title: 'Narayan Vihar K Block Hub', description: 'Quiet residential sector away from highway noise, yet highly accessible.' },
        { title: 'Local Infrastructure Connectivity', description: '1.5 KM from Naira Petrol Pump and Bharat Mata Circle.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Naira Petrol Pump', distance: '1.5 km' },
        { category: 'CONNECTIVITY', name: 'Bharat Mata Circle', distance: '1.5 km' },
      ],
    },

    faqsData: [
      { question: 'What are the available villa plot sizes?', answer: 'Villas are available in three sizes: 90 Gaj, 105 Gaj, and 114 Gaj.' },
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
  {
    id: 'dhawas-villa',
    slug: 'dhawas-villa',
    name: 'Dhawas Villa',
    tagline: 'Premium 4 BHK Duplex Villa in Vidhansabha Nagar',
    city: 'Jaipur',
    location: 'Narayan Vatika, Vidhansabha Nagar, Jaipur',
    locality: 'Vidhansabha Nagar',
    address: 'Narayan Vatika, Vidhansabha Nagar, Near Manas Hospital, Jaipur, Rajasthan 302021',
    propertyType: 'Villas',
    configurations: ['4 BHK'],
    status: 'ready-to-move',
    priceFrom: 14500000,
    priceLabel: '₹1.45 Cr*',
    priceIndicative: false,
    areaFrom: 999,
    areaTo: 1000,
    areaLabel: '111 Gaj (20 × 50 Plot)',
    heroImage: 'https://images.pexels.com/photos/3288184/pexels-photo-3288184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/3288184/pexels-photo-3288184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Premium 4 BHK duplex villa spanning 111 Gaj (20 × 50 plot) with West-facing Vastu compliance, private temple, and covered parking in Vidhansabha Nagar.',
    usp: '111 Gaj + 4 BHK + Duplex + Semi-Furnished + West Facing in prime location.',
    highlights: [
      'Premium 4 BHK Duplex (111 Gaj / 20 × 50 Plot)',
      'West facing with Vastu compliant layouts',
      'Beautiful Temple Space & cross ventilation',
      'Near Manas Hospital, Vidhansabha Nagar',
    ],
    featured: true,
    priority: 5,
    tags: ['Luxury', 'Villa', 'Ready to Move'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Premium Duplex Villa in Prime Location',
      description: 'Aisi property baar-baar nahi milti! Located in Narayan Vatika, Vidhansabha Nagar, this semi-furnished 4 BHK duplex villa is built on a spacious 20 × 50 plot (111 Gaj). Designed with Vastu-compliant West-facing entry, dedicated temple space, and generous ventilation, it offers the ultimate family home layout in a prime neighborhood.',
    },

    detailedHighlights: [
      { number: '111 GAJ', label: 'Spacious Plot size', description: 'Duplex layout built on a premium 20 × 50 land parcel.' },
      { number: 'WEST', label: 'Vastu Facing', description: 'West-facing entry with Vastu-compliant rooms and temple zone.' },
      { number: '4 BHK', label: 'Duplex Layout', description: 'Four spacious bedrooms with attached baths and open balconies.' },
    ],

    detailedConfigurations: [
      { type: '4 BHK Duplex Villa', area: '111 Gaj (999 Sq.Ft. Plot)', bedrooms: 4, bathrooms: 4, balconies: 2, price: '₹1.45 Cr*' },
    ],

    detailedPricing: {
      startingPrice: '₹1.45 Cr*',
      disclaimer: 'Serious Buyers ke liye Site Visit Available. Prices exclusive of registration fees.',
    },

    groupedAmenities: [
      {
        category: 'VILLA SPECIFICATIONS',
        items: [
          { name: '4 Spacious Bedrooms', description: 'Large bed chambers with excellent layout flow' },
          { name: 'Beautiful Temple Space', description: 'Dedicated pooja room configured inside the home' },
          { name: 'Semi-Furnished Setup', description: 'Fitted wardrobes, modular kitchen panels, and light fixtures' },
          { name: 'West Facing Vastu Entry', description: 'Vastu compliant design ensuring positive energy flow' },
        ],
      },
      {
        category: 'SPACE & VENTILATION',
        items: [
          { name: 'Excellent Cross Ventilation', description: 'Thoughtfully designed window placements' },
          { name: 'Natural Light', description: 'Sunlit living spaces and balconies throughout the day' },
          { name: 'Well-Ventilated Rooms', description: 'Tall windows for healthy fresh air circulation' },
          { name: 'Covered Parking Space', description: 'Private on-site car and bike parking bay' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/3288184/pexels-photo-3288184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Facade View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Narayan Vatika, Vidhansabha Nagar, Near Manas Hospital, Jaipur',
      locality: 'Vidhansabha Nagar',
      city: 'Jaipur',
      advantages: [
        { title: 'Near Manas Hospital', description: 'Minutes away from leading healthcare providers.' },
        { title: 'Narayan Vatika Hub', description: 'Prime residential enclave with excellent local road networks.' },
      ],
      nearbyPlaces: [
        { category: 'HOSPITALS', name: 'Manas Hospital', distance: 'Approx. 500 Meters' },
        { category: 'CONNECTIVITY', name: 'Main Road Extension', distance: '300 Meters' },
      ],
    },

    faqsData: [
      { question: 'Is the property RERA / JDA approved?', answer: 'Yes, this villa is JDA approved with clear titles, ideal for bank loan financing.' },
    ],
  },
  {
    id: 'sirsi-road-residences',
    slug: 'sirsi-road-residences',
    name: 'Sirsi Road Premium Residences',
    tagline: 'Quality-Constructed Spacious 3 BHK Flats on Sirsi Road',
    city: 'Jaipur',
    location: 'Sirsi Road, Jaipur',
    locality: 'Sirsi Road',
    address: 'Main Sirsi Road, Near Teoler High School, Jaipur, Rajasthan 302012',
    propertyType: 'Apartments',
    configurations: ['3 BHK'],
    status: 'under-construction',
    priceFrom: 6525000,
    priceLabel: 'Starting from ₹65.25L*',
    priceIndicative: true,
    areaFrom: 1450,
    areaTo: 1750,
    areaLabel: '1,450 – 1,750 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Spacious 3 BHK flats on Sirsi Road near Vaishali Nagar, offering quality construction, 3 washrooms, 3 balconies, and prime neighborhood connectivity.',
    usp: 'Only large 3 BHK layout in this budget with 3 bedrooms, 3 washrooms & 3 balconies.',
    highlights: [
      '3 Bedrooms | 3 Washrooms | 3 Balconies',
      'Price Starting @ ₹4,500 per Sq.Ft.',
      'Quality Construction & Modern Design',
      'Near Teoler School & 2 KM from Capital Galleria Mall',
    ],
    featured: false,
    priority: 8,
    tags: ['Family Home', 'Budget Luxury'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Spacious 3 BHK Flats on Sirsi Road',
      description: 'सभी के लिए शानदार 3 BHK फ्लैट्स — स्पेस, लोकेशन और बजट का परफेक्ट कॉम्बिनेशन! अब वैशाली नगर / सिरसी रोड क्षेत्र में पाएं इस बजट के एकमात्र बड़े 3 BHK फ्लैट्स, जहाँ मिलते हैं 3 बेडरूम, 3 वॉश रूम, 3 बालकनी (भरपूर रोशनी और खुला जीवन), आधुनिक डिजाइन और मजबूत कंस्ट्रक्शन क्वालिटी।',
    },

    detailedHighlights: [
      { number: '3 BHK', label: '3 Wash & 3 Balcony', description: 'Maximum open space and daylight layout with three side balconies.' },
      { number: '₹4,500', label: 'Rate per Sq.Ft.', description: 'Highly competitive pricing for premium quality construction.' },
      { number: '2 KM', label: 'From Capital Galleria', description: 'Rajasthan’s biggest mall and main lifestyle zone within a 5-minute drive.' },
    ],

    detailedConfigurations: [
      { type: '3 BHK Premium Flat', area: '1,450 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 3, price: '₹65.25 Lakhs*' },
      { type: '3 BHK Executive Flat', area: '1,750 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 3, price: '₹78.75 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹65.25 Lakhs*',
      disclaimer: 'Calculated at a rate of ₹4,500 per sq.ft. Subject to final unit sizes and layout selections.',
    },

    groupedAmenities: [
      {
        category: 'LAYOUT FEATURES',
        items: [
          { name: '3 Bedrooms & 3 Washrooms', description: 'Spacious private layouts for families' },
          { name: '3 Deep Balconies', description: 'Excellent daylight and panoramic natural air circulation' },
          { name: 'Spacious Kitchen Space', description: 'Granite workspace counters and cabinet setups' },
        ],
      },
      {
        category: 'LOCATION ADVANTAGES',
        items: [
          { name: '1 Min from Sirsi Road', description: 'Direct transit links and easy commuting' },
          { name: 'Near Teoler School', description: 'Walkable distance for children schooling' },
          { name: '3 Mins from Rangoli Garden', description: 'Proximity to Jaipur’s flagship premium townships' },
          { name: '5 Mins Core Services', description: 'Markets, retail banks, and colleges close by' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Facade View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Main Sirsi Road, Jaipur',
      locality: 'Sirsi Road',
      city: 'Jaipur',
      advantages: [
        { title: 'Prime Sirsi Connectivity', description: '1 minute drive to main highway, linking easily with Jaipur Bypass.' },
        { title: 'Education & Commercial Hub', description: 'Surrounded by top institutes like Teoler School and banks.' },
      ],
      nearbyPlaces: [
        { category: 'SCHOOLS', name: 'Teoler High School', distance: 'Approx. 200 Meters' },
        { category: 'SHOPPING', name: 'Capital Galleria Mall', distance: '2.0 km' },
        { category: 'TOWNSHIPS', name: 'Rangoli Garden Township', distance: '1.5 km' },
      ],
    },

    faqsData: [
      { question: 'What is the base pricing structure?', answer: 'The pricing starts from ₹4,500 per sq.ft. based on unit carpet areas.' },
    ],
  },
  {
    id: 'utsav-greens',
    slug: 'utsav-greens',
    name: 'Utsav Greens',
    tagline: 'Modern 2 & 3 BHK Luxury Apartments in Mansarovar',
    city: 'Jaipur',
    location: 'Mansarovar, Jaipur',
    locality: 'Mansarovar',
    address: 'Near Mahima Elanza, Mansarovar Extension, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK'],
    status: 'under-construction',
    priceFrom: 4378000,
    priceLabel: '₹43.78L – ₹65.00L*',
    priceIndicative: true,
    areaFrom: 970,
    areaTo: 1426,
    areaLabel: '970 – 1,426 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Utsav Greens offers premium 2 & 3 BHK luxury flats in Mansarovar, featuring modern designs, lift, parking, gym, and CCTV security near Mahima Elanza.',
    usp: 'Modern design 2 & 3 BHK luxury flats in a peaceful and secure Mansarovar community.',
    highlights: [
      '2 BHK (970 Sq.Ft.) @ ₹43.78 Lakh',
      '3 BHK (1283 - 1426 Sq.Ft.) @ ₹57 - 65 Lakh',
      'Ideally located in Mansarovar, near Mahima Elanza',
      'Modern Amenities: Gym, Kids Play Area, Lift & CCTV',
    ],
    featured: false,
    priority: 7,
    tags: ['Family Home', 'Budget Luxury'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Your Dream Home Awaits at Utsav Greens',
      description: 'Experience premium living with spacious 2 & 3 BHK luxury flats at Utsav Greens, ideally located in Mansarovar, just near Mahima Elanza. Offering the perfect blend of comfort, convenience, and value, this project features modern architecture, quality construction, and a secure peaceful community close to schools, hospitals, and markets.',
    },

    detailedHighlights: [
      { number: 'MANSAROVAR', label: 'Prime Location', description: 'Situated near Mahima Elanza with top connectivity to major city hubs.' },
      { number: 'AMENITIES', label: 'Fully Loaded', description: 'Features modern lift, CCTV surveillance, covered parking, gym, and kids play area.' },
      { number: 'VALUE', label: 'Best Price Point', description: 'Premium construction starting from just ₹43.78 Lakhs.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Luxury Apartment', area: '970 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹43.78 Lakhs*' },
      { type: '3 BHK Luxury Apartment', area: '1,283 - 1,426 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹57.00L - ₹65.00L*' },
    ],

    detailedPricing: {
      startingPrice: '₹43.78 Lakhs*',
      disclaimer: 'Prices subject to change and final cost sheet registration fees.',
    },

    groupedAmenities: [
      {
        category: 'MODERN AMENITIES',
        items: [
          { name: 'Fitness Gym Center', description: 'Equipped workout space' },
          { name: 'Kids Play Zone', description: 'Safe outdoor play equipment' },
          { name: 'Automatic Lift System', description: 'High-speed elevator access' },
          { name: 'Covered Parking Bay', description: 'Dedicated vehicle slots' },
        ],
      },
      {
        category: 'SAFETY & CONVENIENCE',
        items: [
          { name: 'CCTV Surveillance', description: '24/7 security monitoring' },
          { name: 'Secure Gated Entrance', description: 'Restricted community entry checks' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Facade View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Near Mahima Elanza, Mansarovar Extension, Jaipur',
      locality: 'Mansarovar',
      city: 'Jaipur',
      advantages: [
        { title: 'Mansarovar Extension Hub', description: 'Prime residential enclave near top shopping blocks.' },
        { title: 'Near Mahima Elanza', description: 'Well-known landmark location with walkable supermarkets.' },
      ],
      nearbyPlaces: [
        { category: 'SHOPPING', name: 'Mahima Elanza Markets', distance: 'Approx. 200 Meters' },
        { category: 'SCHOOLS', name: 'St. Wilfred School', distance: '1.5 km' },
      ],
    },

    faqsData: [
      { question: 'What security systems are installed?', answer: 'The community features 24/7 gated security with active CCTV surveillance.' },
    ],
  },
  {
    id: 'udayraj',
    slug: 'udayraj',
    name: 'Udayraj',
    tagline: 'Premium G+12 High-Rise Residences near Mansarovar',
    city: 'Jaipur',
    location: 'Rampura Road, Jaipur',
    locality: 'Rampura Road',
    address: 'Main Rampura Road, 200 Ft Road Junction, Jaipur, Rajasthan 302029',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '2.5 BHK'],
    status: 'new-launch',
    priceFrom: 3320000,
    priceLabel: '₹33.20L – ₹38.50L*',
    priceIndicative: false,
    areaFrom: 700,
    areaTo: 858,
    areaLabel: '700 – 858 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Udayraj offers 612 premium G+12 apartments near Mansarovar with 30+ lifestyle amenities, easy EMI financing, and great appreciation potential.',
    usp: 'High-rise luxury lifestyle near Mansarovar in this budget is extremely rare.',
    highlights: [
      '2 BHK (700 Sq.Ft.) @ ₹33.20 Lakh all included',
      '2.5 BHK (858 Sq.Ft.) @ ₹38.50 Lakh all included',
      'Only 5 KM from Jaipur Ring Road on Rampura Road (200 Ft Road)',
      'G+12 premium luxury living with 30+ lifestyle amenities',
    ],
    featured: true,
    priority: 4,
    tags: ['Luxury', 'Launch Offer', 'Investment'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Premium High-Rise Living Near Mansarovar',
      description: '🏡📍 Located on Rampura Road (200 Ft Road), just 5 km from the Jaipur Ring Road. Udayraj brings you a rare opportunity for G+12 high-rise luxury living near Mansarovar with a massive list of 30+ premium lifestyle amenities. Offers include 2 BHK (700 Sq. Ft.) and 2.5 BHK (858 Sq. Ft.) layouts starting from ₹33.20L with 100% bank loan approvals and easy EMIs.',
    },

    detailedHighlights: [
      { number: 'G+12', label: 'Luxury High-Rise', description: 'Tower architecture providing scenic views and well-ventilated spaces.' },
      { number: '30+', label: 'Amenities Offered', description: 'Fully loaded with premium lifestyle amenities for the entire family.' },
      { number: '5 KM', label: 'From Ring Road', description: 'Excellent connectivity on the fast-growing Rampura 200 Ft Road corridor.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Premium Flat', area: '700 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹33.20 Lakhs*' },
      { type: '2.5 BHK Executive Flat', area: '858 Sq.Ft.', bedrooms: 2.5, bathrooms: 2, balconies: 2, price: '₹38.50 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹33.20 Lakhs*',
      disclaimer: 'GST 1% extra. Additional charges: Parking ₹2L, Corpus Fund ₹1L. Limited units available.',
    },

    groupedAmenities: [
      {
        category: '30+ LIFESTYLE FEATURES',
        items: [
          { name: 'Fitness Gym & Club', description: 'Modern community clubhouse and health club' },
          { name: 'Swimming Pool', description: 'Premium pool for adults and children' },
          { name: 'Kids Play Zone', description: 'Safe slides and sandbox play park' },
          { name: 'Covered Car Parking', description: 'Assigned private parking bay slots' },
        ],
      },
      {
        category: 'SECURITY & INFRA',
        items: [
          { name: 'CCTV & Security', description: '24/7 lobby and common area monitoring' },
          { name: 'Power Backup & Lifts', description: 'High-speed automatic elevators with power backup systems' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Tower Facade', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Rampura Road, Jaipur',
      locality: 'Rampura Road',
      city: 'Jaipur',
      advantages: [
        { title: 'Mansarovar Proximity', description: 'Close proximity to Mansarovar prime markets, schools, and commercial complexes.' },
        { title: 'Ring Road Corridor', description: 'Just 5 km from Ring Road, ensuring high future capital appreciation.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'Jaipur Ring Road', distance: '5.0 km' },
        { category: 'CONNECTIVITY', name: 'Mansarovar Metro Station', distance: 'Approx. 15 Mins' },
      ],
    },

    faqsData: [
      { question: 'Is bank loan financing available?', answer: 'Yes, this project is eligible for 100% bank loan approval with easy EMIs.' },
    ],
  },
  {
    id: 'sunflower',
    slug: 'sunflower',
    name: 'Sunflower',
    tagline: 'Premium 2 & 3 BHK Spacious Flats with Patrakar Colony Address',
    city: 'Jaipur',
    location: 'Patrakar Colony, Mansarovar Extension, Jaipur',
    locality: 'Mansarovar',
    address: 'Near Mahima Elanza, Patrakar Colony, Mansarovar Extension, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK'],
    status: 'under-construction',
    priceFrom: 4041000,
    priceLabel: '₹40.41L – ₹55.50L*',
    priceIndicative: true,
    areaFrom: 868,
    areaTo: 1356,
    areaLabel: '868 – 1,356 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Sunflower offers premium 2 & 3 BHK spacious flats in Patrakar Colony, Mansarovar Extension, featuring biometric app security and rich club and rooftop amenities.',
    usp: 'Affordable luxury with biometric security app and rooftop garden and kitchen facilities.',
    highlights: [
      '2 BHK (868 - 1168 Sq.Ft.) starting from ₹40.41 Lakh',
      '3 BHK (1263 - 1356 Sq.Ft.) starting from ₹55.50 Lakh',
      'Ideally located in Patrakar Colony, Mansarovar Extension',
      'Smart Security: Biometric & Intercom Mobile App',
    ],
    featured: false,
    priority: 8,
    tags: ['Family Home', 'Smart Home', 'Budget Luxury'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Get Your New Address at Sunflower',
      description: 'Experience premium living with spacious 2 & 3 BHK luxury flats at Sunflower, ideally located in Patrakar Colony, Mansarovar Extension, near Mahima Elanza. Sunflower combines smart biometric app security, robust building quality, and modern lifestyle amenities (such as a clubhouse, air-conditioned gym, and rooftop kitchen & gazebo gardens) at an affordable luxury price point.',
    },

    detailedHighlights: [
      { number: 'SECURITY', label: 'Biometric & Intercom', description: 'Smart entry gates with intercom mobile application connectivity.' },
      { number: 'ROOFTOP', label: 'Garden & Kitchen', description: 'Scenic terrace deck with catering facilities for family gatherings.' },
      { number: 'ADDRESS', label: 'Patrakar Colony', description: 'Most sought-after, rapid-appreciation address in Mansarovar Extension.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Premium Flat', area: '868 - 1,168 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹40.41 Lakhs*' },
      { type: '3 BHK Premium Flat', area: '1,263 - 1,356 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹55.50 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹40.41 Lakhs*',
      disclaimer: 'Prices subject to changes. Contact sales office for custom payment sheets.',
    },

    groupedAmenities: [
      {
        category: 'AMENITIES & LIFESTYLE',
        items: [
          { name: 'Entrance Lobby & Waiting Area', description: 'Double height waiting lobby' },
          { name: 'Club House & Banquet Hall', description: 'Community gathering space' },
          { name: 'A.C. Gym & Yoga Studio', description: 'Equipped wellness studio' },
          { name: 'Indoor Games & Library', description: 'Recreation room and study room' },
          { name: 'Rooftop Garden & Kitchen', description: 'Terrace entertainment space' },
        ],
      },
      {
        category: 'SECURITY & CONVENIENCES',
        items: [
          { name: 'Biometric Security App', description: 'Smart smartphone integrated entry' },
          { name: 'High-Speed Lifts', description: 'Passenger elevators with backup power' },
          { name: 'Temple inside Premises', description: 'Private community temple' },
          { name: 'CCTV & Guards', description: '24/7 guarded security desk' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Building Facade', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Patrakar Colony, Mansarovar Extension, Jaipur',
      locality: 'Mansarovar',
      city: 'Jaipur',
      advantages: [
        { title: 'Patrakar Colony Address', description: 'Sought-after residential area near top institutions.' },
        { title: 'Near Mahima Elanza', description: 'Close proximity to prime local markets and supermarkets.' },
      ],
      nearbyPlaces: [
        { category: 'SHOPPING', name: 'Patrakar Colony Market', distance: 'Approx. 400 Meters' },
        { category: 'SCHOOLS', name: 'Neerja Modi School', distance: '2.5 km' },
      ],
    },

    faqsData: [
      { question: 'What security features are offered?', answer: 'The project features biometric entry locks and intercom app connectivity for residents.' },
    ],
  },
  {
    id: 'raghav-heights',
    slug: 'raghav-heights',
    name: 'Raghav Heights',
    tagline: 'Luxury 3 BHK Flats near New Sanganer Road',
    city: 'Jaipur',
    location: 'Mangyawas, Rajat Path, Mansarovar, Jaipur',
    locality: 'Mansarovar',
    address: 'Shiv Vihar C Block, Mangyawas, Rajat Path, Mansarovar, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['3 BHK'],
    status: 'under-construction',
    priceFrom: 7500000,
    priceLabel: 'Starting from ₹75.00L*',
    priceIndicative: true,
    areaFrom: 1550,
    areaTo: 1650,
    areaLabel: '1,550 – 1,650 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Raghav Heights offers premium 3 BHK luxury semi-furnished apartments in Mangyawas, Mansarovar with Bisalpur water connections and G+12 high-end amenities.',
    usp: 'Luxury 3 BHK flats near New Sanganer Road with dedicated Bisalpur water supply connection.',
    highlights: [
      'Luxury 3 BHK Flats (1550 - 1650 Sq.Ft.)',
      'Price Starting @ ₹75 Lakh (Semi-Furnished)',
      'Ideally located at Shiv Vihar C Block, Mangyawas',
      'Bisalpur Water Supply & dedicated Water Boring',
    ],
    featured: false,
    priority: 8,
    tags: ['Family Home', 'Luxury', 'RERA Approved'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Luxury Living Redefined at Raghav Heights',
      description: 'Raghav Heights by Sigma Homes offers exceptionally spacious 3 BHK luxury apartments (1550 - 1650 Sq.Ft.) in Shiv Vihar C Block, Mangyawas, Rajat Path, Mansarovar. Designed for premium family comfort, these semi-furnished flats are located near New Sanganer Road and feature a reliable Bisalpur water supply, G+12 architecture, and 15+ modern lifestyle amenities.',
    },

    detailedHighlights: [
      { number: 'BISALPUR', label: 'Water Supply', description: 'Equipped with municipal Bisalpur water supply and dedicated borewell backup.' },
      { number: 'SPACIOUS', label: '1650 Sq.Ft.', description: 'Generously proportioned rooms, large windows, and open balconies.' },
      { number: 'PRIME', label: 'Mansarovar Hub', description: 'Shiv Vihar C Block, Mangyawas location offering quick access to Rajat Path and New Sanganer Road.' },
    ],

    detailedConfigurations: [
      { type: '3 BHK Premium Flat', area: '1,550 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹75.00 Lakhs*' },
      { type: '3 BHK Executive Flat', area: '1,650 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 3, price: '₹80.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹75.00 Lakhs*',
      disclaimer: 'Semi-furnished base price. Taxes, registry charges, and GST are extra as applicable.',
    },

    groupedAmenities: [
      {
        category: 'AMENITIES & HEALTH',
        items: [
          { name: 'Electric Gym & Fitness', description: 'Fully equipped indoor fitness center' },
          { name: 'Yoga & Aerobics Area', description: 'Quiet community space for meditation and exercises' },
          { name: 'Jogging Track & Gardens', description: 'Outdoor walking trails and landscaped greens' },
          { name: 'Bonfire & Gazebo Arena', description: 'Terrace bonfire zone and wooden gazebo sitting spaces' },
        ],
      },
      {
        category: 'CONVENIENCES & GREEN',
        items: [
          { name: 'Bisalpur Water & Boring', description: 'Dual municipal and ground water extraction infrastructure' },
          { name: 'EV Car Charging Point', description: 'Dedicated electric vehicle charging docks' },
          { name: 'Banquet Hall & Bird Pavilion', description: 'Air-conditioned celebration hall and outdoor bird garden' },
          { name: 'Rooftop Garden & Deck', description: 'Lush green terrace spaces' },
          { name: 'Power Backup & Fire Safety', description: 'Common area generator backup and pipeline fire hydrants' },
        ],
      },
      {
        category: 'SECURITY SERVICES',
        items: [
          { name: 'CCTV Surveillance Room', description: '24/7 lobby and perimeter camera networks' },
          { name: 'Gated Security Guards', description: 'Professional guards managing check-ins' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Facade View', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Shiv Vihar C Block, Mangyawas, Rajat Path, Mansarovar, Jaipur',
      locality: 'Mansarovar',
      city: 'Jaipur',
      advantages: [
        { title: 'New Sanganer Road Connectivity', description: 'Rapid transit links via major local arterial roads.' },
        { title: 'Shiv Vihar Residential Belt', description: 'Quiet family-focused locality near Rajat Path commercial blocks.' },
      ],
      nearbyPlaces: [
        { category: 'CONNECTIVITY', name: 'New Sanganer Road', distance: 'Approx. 500 Meters' },
        { category: 'SHOPPING', name: 'Rajat Path Markets', distance: 'Approx. 800 Meters' },
      ],
    },

    faqsData: [
      { question: 'Is Bisalpur water connected to Raghav Heights?', answer: 'Yes, the building features active dual Bisalpur municipal connections and dedicated water boring backup.' },
    ],
  },
  {
    id: 'pratham',
    slug: 'pratham',
    name: 'Pratham',
    tagline: 'Ready to Shift Apartments in Mansarovar Extension',
    city: 'Jaipur',
    location: 'Mansarovar Extension, Jaipur',
    locality: 'Mansarovar',
    address: 'Mansarovar Extension, Near Rajat Path, Jaipur, Rajasthan 302020',
    propertyType: 'Apartments',
    configurations: ['2 BHK', '3 BHK'],
    status: 'ready-to-move',
    priceFrom: 4000000,
    priceLabel: 'Starting from ₹40.00L*',
    priceIndicative: true,
    areaFrom: 950,
    areaTo: 1450,
    areaLabel: '950 – 1,450 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Pratham offers ready to shift 2 & 3 BHK apartments in Mansarovar Extension starting at ₹40 Lakh, featuring complete clubhouse amenities and an active community with 180+ families shifted.',
    usp: 'Ready-to-shift apartments near Rajat Path with a vibrant active community of 180+ families.',
    highlights: [
      'Ready to Shift 2 & 3 BHK Apartments',
      'Starting from ₹40 Lakh (Raw units)',
      '1 km from New Sanganer Road & Rajat Path',
      'Vibrant community with 180+ families shifted',
    ],
    featured: false,
    priority: 8,
    tags: ['Ready to Move', 'Family Home', 'Budget Home'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Ready to Shift Homes at Pratham',
      description: '🏡 Experience instant settlement at Pratham, a premium ready-to-move apartment project in Mansarovar Extension, Jaipur. Spanning spacious configurations starting from ₹40L, this project offers ready keys for immediate possession. Enjoy a complete premium clubhouse lifestyle, a podium garden, and join a thriving neighborhood with over 180+ families already shifted.',
    },

    detailedHighlights: [
      { number: '180+', label: 'Families Shifted', description: 'Active, lively neighborhood with families already residing in the complex.' },
      { number: 'READY', label: 'To Shift', description: 'No construction delays, JDA approved, ready for immediate registration and possession.' },
      { number: '1 KM', label: 'From Rajat Path', description: 'Situated in a prime extension pocket near New Sanganer Road junctions.' },
    ],

    detailedConfigurations: [
      { type: '2 BHK Ready Apartment', area: '950 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹40.00 Lakhs*' },
      { type: '3 BHK Ready Apartment', area: '1,450 Sq.Ft.', bedrooms: 3, bathrooms: 3, balconies: 2, price: '₹55.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹40.00 Lakhs*',
      disclaimer: 'Base raw price. Registration, maintenance fees, and final unit choices subject to standard cost sheet.',
    },

    groupedAmenities: [
      {
        category: 'PREMIUM CLUBHOUSE',
        items: [
          { name: 'Gymnasium Center', description: 'Equipped workout fitness club' },
          { name: 'Community Hall', description: 'Indoor celebration and banquet space' },
          { name: 'Swimming Pool', description: 'Refreshed pool for adults and kids' },
          { name: 'Games Room & Yoga', description: 'Indoor billiards/table tennis and yoga deck' },
        ],
      },
      {
        category: 'OUTDOOR & LIFESTYLE',
        items: [
          { name: 'Kids Play Area', description: 'Outdoor swings and slide park' },
          { name: 'Podium Garden', description: 'Elevated green garden area' },
          { name: 'Temple inside Complex', description: 'Dedicated community temple space' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Building Facade', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Mansarovar Extension, Jaipur',
      locality: 'Mansarovar',
      city: 'Jaipur',
      advantages: [
        { title: 'New Sanganer Road Proximity', description: 'Situated just 1 km from New Sanganer Road and Rajat Path.' },
        { title: 'Top Schools Accessibility', description: 'Surrounded by top institutes like EIS, St. Anselm’s, and St. Wilfrid’s.' },
      ],
      nearbyPlaces: [
        { category: 'HOSPITALS', name: 'Dhanwantri Hospital', distance: '2.4 km' },
        { category: 'CONNECTIVITY', name: 'Mansarovar Metro Station', distance: '3.4 km' },
        { category: 'CONNECTIVITY', name: 'Jaipur Airport', distance: '8.5 km' },
      ],
    },

    faqsData: [
      { question: 'How many families currently live here?', answer: 'Over 180+ families have already shifted and are residing in Pratham.' },
    ],
  },
  {
    id: 'prangan',
    slug: 'prangan',
    name: 'Prangan',
    tagline: 'Budget-Friendly JDA Approved Flats at Muhana Mandi Gate No.1',
    city: 'Jaipur',
    location: 'Muhana Mandi Link Road, Jaipur',
    locality: 'Mansarovar',
    address: 'Muhana Mandi Gate No.1, Muhana–Sanganer Link Road, Jaipur, Rajasthan 302029',
    propertyType: 'Apartments',
    configurations: ['1 BHK', '2 BHK'],
    status: 'under-construction',
    priceFrom: 1400000,
    priceLabel: '₹14.00L – ₹25.00L*',
    priceIndicative: true,
    areaFrom: 650,
    areaTo: 850,
    areaLabel: '650 – 850 Sq.Ft.',
    heroImage: 'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    shortDescription: 'Prangan offers affordable 1 & 2 BHK flats on the Muhana-Sanganer Link Road at Gate No. 1, Muhana Mandi, featuring high-quality construction, JDA approval, and kids play area.',
    usp: 'Affordable JDA approved flats at Muhana Mandi Gate No. 1 with parking and community space.',
    highlights: [
      '1 BHK (650 Sq.Ft.) starting from ₹14 Lakh',
      '2 BHK (750 - 850 Sq.Ft.) starting from ₹25 Lakh',
      'JDA Approved Project with quality construction',
      'East & West Facing Units (Vastu compliant)',
    ],
    featured: false,
    priority: 8,
    tags: ['Budget Home', 'Investment'],
    approvalStatus: 'JDA Approved',
    developer: 'Sigma Group',

    overview: {
      title: 'Affordable Living at Prangan',
      description: '✨ Sigma Builders brings you a perfect budget-friendly housing solution at Prangan. Strategically located near Muhana Mandi Gate No. 1 along the Muhana–Sanganer Link Road, this project offers high-quality construction, JDA-approved land titles, and Vastu-compliant East/West facing units. Ideal for first-time buyers and rental-yield investors.',
    },

    detailedHighlights: [
      { number: 'BUDGET', label: 'Starts @ ₹14L', description: 'Highly budget-friendly pricing structures for premium JDA approved flats.' },
      { number: 'VASTU', label: 'East/West Facing', description: 'Vastu-compliant layouts offering optimum daylight and ventilation.' },
      { number: 'JDA', label: 'Approved Title', description: 'Fully approved JDA land with zero title complications, bank loan eligible.' },
    ],

    detailedConfigurations: [
      { type: '1 BHK Apartment', area: '650 Sq.Ft.', bedrooms: 1, bathrooms: 1, balconies: 1, price: '₹14.00 Lakhs*' },
      { type: '2 BHK Apartment', area: '750 - 850 Sq.Ft.', bedrooms: 2, bathrooms: 2, balconies: 1, price: '₹25.00 Lakhs*' },
    ],

    detailedPricing: {
      startingPrice: '₹14.00 Lakhs*',
      disclaimer: 'Prices subject to changes. Stamp duty and registry charges extra as per JDA guidelines.',
    },

    groupedAmenities: [
      {
        category: 'CONVENIENCES & BASIC INFRA',
        items: [
          { name: '24/7 Water & Power', description: 'Round the clock electricity and water storage' },
          { name: 'Covered Parking Area', description: 'Dedicated parking slots for all units' },
          { name: 'Boundary Wall & Security', description: 'Full gated security and perimeter wall' },
        ],
      },
      {
        category: 'COMMUNITY & OUTDOOR',
        items: [
          { name: 'Kids Play Zone', description: 'Dedicated children swings and play zone' },
          { name: 'Community Center', description: 'Common gathering space for residents' },
        ],
      },
    ],

    galleryImages: [
      { url: 'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Building Facade', category: 'architecture' },
    ],

    locationIntel: {
      address: 'Muhana Mandi Gate No.1, Muhana–Sanganer Link Road, Jaipur',
      locality: 'Mansarovar',
      city: 'Jaipur',
      advantages: [
        { title: 'Muhana Mandi Proximity', description: 'Situated within easy walking distance from Muhana Mandi Gate No. 1.' },
        { title: 'Excellent Transit Connectivity', description: 'Direct links to Mansarovar metro corridors, Sanganer, and Ring Road.' },
      ],
      nearbyPlaces: [
        { category: 'SHOPPING', name: 'Muhana Mandi', distance: 'Walking Distance' },
        { category: 'CONNECTIVITY', name: 'Ring Road Junction', distance: 'Approx. 4.0 km' },
      ],
    },

    faqsData: [
      { question: 'Is bank loan financing available?', answer: 'Yes, because it is JDA approved, you can easily secure bank loans from major financial institutions.' },
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
