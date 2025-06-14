export interface ServiceArea {
  id: string;
  name: string;
  postcode: string;
  region: 'central' | 'north' | 'south' | 'east' | 'west';
  responseTime: string;
  population: number;
  description: string;
  commonPests: string[];
  localChallenges: string[];
  serviceHighlights: string[];
  averageCallouts: number;
  successRate: string;
  testimonialCount: number;
  keyAreas: string[];
  emergencyAvailable: boolean;
  pricing: {
    residential: string;
    commercial: string;
    emergency: string;
  };
  facts: string[];
}

export const londonRegions = [
  { id: 'central', name: 'Central London', color: '#DC2626' },
  { id: 'north', name: 'North London', color: '#2563EB' },
  { id: 'south', name: 'South London', color: '#16A34A' },
  { id: 'east', name: 'East London', color: '#EA580C' },
  { id: 'west', name: 'West London', color: '#9333EA' }
];

export const serviceAreas: ServiceArea[] = [
  // CENTRAL LONDON
  {
    id: 'westminster',
    name: 'Westminster',
    postcode: 'SW1, W1',
    region: 'central',
    responseTime: '45 minutes',
    population: 261000,
    description: 'Central London\'s premier borough including Parliament, Buckingham Palace, and major commercial districts requiring discreet, professional pest control.',
    commonPests: ['Rats', 'Mice', 'Cockroaches', 'Bed bugs', 'Ants'],
    localChallenges: [
      'Historic building constraints',
      'High-profile client discretion required',
      'Dense urban environment',
      'Tourist area hygiene standards',
      'Government building security protocols'
    ],
    serviceHighlights: [
      'VIP discretion guaranteed',
      'Historic building specialists',
      'Government contract approved',
      '24/7 emergency response',
      'Multilingual technicians available'
    ],
    averageCallouts: 450,
    successRate: '98%',
    testimonialCount: 127,
    keyAreas: ['Mayfair', 'Belgravia', 'Pimlico', 'Marylebone', 'Fitzrovia'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £179',
      commercial: 'From £299',
      emergency: 'From £249'
    },
    facts: [
      'Home to 10 Downing Street and Parliament',
      'Highest concentration of luxury hotels in London',
      'Victorian sewers create unique rodent challenges',
      'Strictest pest control regulations in UK'
    ]
  },
  {
    id: 'camden',
    name: 'Camden',
    postcode: 'NW1, NW3, NW5, NW6, NW8',
    region: 'central',
    responseTime: '60 minutes',
    population: 270000,
    description: 'Diverse borough from Regent\'s Park to Camden Market, with varied pest control needs across residential and commercial properties.',
    commonPests: ['Rats', 'Mice', 'Wasps', 'Ants', 'Flies'],
    localChallenges: [
      'Market area food waste attraction',
      'Canal-side moisture issues',
      'Mixed residential/commercial zones',
      'Tourist area cleanliness standards',
      'Historic conservation areas'
    ],
    serviceHighlights: [
      'Market specialist experience',
      'Canal-side property expertise',
      'Student accommodation services',
      'Restaurant chain contracts',
      'Weekend emergency coverage'
    ],
    averageCallouts: 380,
    successRate: '96%',
    testimonialCount: 94,
    keyAreas: ['Camden Town', 'Primrose Hill', 'Hampstead', 'Kings Cross', 'Bloomsbury'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £159',
      commercial: 'From £249',
      emergency: 'From £199'
    },
    facts: [
      'Camden Market attracts 28 million visitors annually',
      'Regent\'s Canal creates unique pest corridors',
      'Home to major railway termini',
      'Significant student population requires specialized services'
    ]
  },

  // NORTH LONDON
  {
    id: 'hackney',
    name: 'Hackney',
    postcode: 'E5, E8, E9, N1, N16',
    region: 'north',
    responseTime: '75 minutes',
    population: 281000,
    description: 'Rapidly gentrifying area with mix of Victorian housing, modern developments, and thriving food scene requiring comprehensive pest management.',
    commonPests: ['Rats', 'Mice', 'Cockroaches', 'Bed bugs', 'Ants'],
    localChallenges: [
      'Victorian housing pest entry points',
      'Rapid development construction sites',
      'High-density living conditions',
      'Restaurant district pest pressure',
      'Social housing maintenance issues'
    ],
    serviceHighlights: [
      'Victorian property specialists',
      'New development pest-proofing',
      'Restaurant industry expertise',
      'Social housing contracts',
      'Rapid response guarantee'
    ],
    averageCallouts: 420,
    successRate: '94%',
    testimonialCount: 156,
    keyAreas: ['Shoreditch', 'Dalston', 'Hackney Wick', 'London Fields', 'Stoke Newington'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £149',
      commercial: 'From £229',
      emergency: 'From £189'
    },
    facts: [
      'Fastest growing food scene in London',
      'Olympic Park legacy development ongoing',
      'Highest concentration of Victorian terraces',
      'Major tech startup hub requiring commercial services'
    ]
  },
  {
    id: 'islington',
    name: 'Islington',
    postcode: 'N1, N4, N5, N7, N19',
    region: 'north',
    responseTime: '65 minutes',
    population: 239000,
    description: 'Affluent residential area with Georgian terraces, modern apartments, and Upper Street\'s dining scene requiring premium pest control services.',
    commonPests: ['Mice', 'Rats', 'Wasps', 'Ants', 'Moths'],
    localChallenges: [
      'Georgian building preservation requirements',
      'High property values demand discretion',
      'Restaurant strip pest management',
      'Garden square maintenance',
      'Basement flat moisture issues'
    ],
    serviceHighlights: [
      'Heritage building expertise',
      'Discreet premium service',
      'Restaurant chain partnerships',
      'Garden pest management',
      'Basement specialist treatments'
    ],
    averageCallouts: 290,
    successRate: '97%',
    testimonialCount: 89,
    keyAreas: ['Angel', 'Highbury', 'Canonbury', 'Barnsbury', 'Holloway'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £169',
      commercial: 'From £259',
      emergency: 'From £209'
    },
    facts: [
      'Highest concentration of Georgian terraces in London',
      'Upper Street has 200+ restaurants and bars',
      'Arsenal FC stadium creates event-day challenges',
      'Premium property market demands highest standards'
    ]
  },

  // SOUTH LONDON
  {
    id: 'southwark',
    name: 'Southwark',
    postcode: 'SE1, SE15, SE16, SE17, SE22',
    region: 'south',
    responseTime: '70 minutes',
    population: 318000,
    description: 'Historic borough spanning from London Bridge to Dulwich, including major tourist attractions and diverse residential areas.',
    commonPests: ['Rats', 'Mice', 'Cockroaches', 'Wasps', 'Flies'],
    localChallenges: [
      'Thames-side moisture and pest corridors',
      'Tourist attraction hygiene standards',
      'Market area food waste issues',
      'Mixed housing density challenges',
      'Historic building constraints'
    ],
    serviceHighlights: [
      'Thames-side property expertise',
      'Tourist venue specialists',
      'Market area experience',
      'Historic building approved',
      'Borough Market contracts'
    ],
    averageCallouts: 395,
    successRate: '95%',
    testimonialCount: 112,
    keyAreas: ['London Bridge', 'Borough', 'Bermondsey', 'Peckham', 'Dulwich'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £149',
      commercial: 'From £239',
      emergency: 'From £189'
    },
    facts: [
      'Borough Market is London\'s oldest food market',
      'Thames creates unique pest migration patterns',
      'Shard and London Bridge station major landmarks',
      'Significant regeneration creating new pest challenges'
    ]
  },
  {
    id: 'lambeth',
    name: 'Lambeth',
    postcode: 'SE1, SE11, SE24, SE27, SW2, SW4, SW8, SW9',
    region: 'south',
    responseTime: '80 minutes',
    population: 326000,
    description: 'Diverse borough from Waterloo to Brixton, including major transport hubs and varied residential communities requiring flexible pest solutions.',
    commonPests: ['Rats', 'Mice', 'Cockroaches', 'Ants', 'Bed bugs'],
    localChallenges: [
      'Major transport hub pest pressure',
      'High-density housing estates',
      'Market area pest attraction',
      'Thames flood plain moisture',
      'Diverse community communication needs'
    ],
    serviceHighlights: [
      'Transport hub specialists',
      'Estate management contracts',
      'Market area expertise',
      'Multilingual service team',
      'Community outreach programs'
    ],
    averageCallouts: 445,
    successRate: '93%',
    testimonialCount: 134,
    keyAreas: ['Waterloo', 'Vauxhall', 'Brixton', 'Clapham', 'Streatham'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £139',
      commercial: 'From £219',
      emergency: 'From £179'
    },
    facts: [
      'Waterloo is Europe\'s busiest railway station',
      'Brixton Market cultural and food hub',
      'Thames creates moisture-related pest issues',
      'Significant social housing requires specialized approach'
    ]
  },

  // EAST LONDON
  {
    id: 'tower-hamlets',
    name: 'Tower Hamlets',
    postcode: 'E1, E2, E3, E14',
    region: 'east',
    responseTime: '85 minutes',
    population: 324000,
    description: 'Historic East End to modern Canary Wharf, with diverse communities and major financial district requiring specialized pest management.',
    commonPests: ['Rats', 'Mice', 'Cockroaches', 'Bed bugs', 'Ants'],
    localChallenges: [
      'Historic dock area pest corridors',
      'High-rise building access issues',
      'Dense population pest pressure',
      'Financial district hygiene standards',
      'Multicultural community needs'
    ],
    serviceHighlights: [
      'High-rise building specialists',
      'Financial district approved',
      'Historic dock expertise',
      'Multilingual technicians',
      'Corporate contract experience'
    ],
    averageCallouts: 520,
    successRate: '92%',
    testimonialCount: 178,
    keyAreas: ['Canary Wharf', 'Whitechapel', 'Bethnal Green', 'Bow', 'Poplar'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £139',
      commercial: 'From £279',
      emergency: 'From £179'
    },
    facts: [
      'Canary Wharf is major European financial center',
      'Historic docks create unique pest migration routes',
      'Most ethnically diverse borough in UK',
      'Olympic Park legacy continues development'
    ]
  },
  {
    id: 'newham',
    name: 'Newham',
    postcode: 'E6, E7, E12, E13, E15, E16',
    region: 'east',
    responseTime: '90 minutes',
    population: 353000,
    description: 'Olympic legacy borough with major regeneration, diverse communities, and London City Airport requiring comprehensive pest services.',
    commonPests: ['Rats', 'Mice', 'Cockroaches', 'Flies', 'Ants'],
    localChallenges: [
      'Major regeneration construction sites',
      'Airport hygiene requirements',
      'High-density housing developments',
      'Industrial area pest pressure',
      'Diverse community communication'
    ],
    serviceHighlights: [
      'Olympic Park maintenance contracts',
      'Airport approved services',
      'Construction site specialists',
      'Industrial pest management',
      'Community partnership programs'
    ],
    averageCallouts: 485,
    successRate: '91%',
    testimonialCount: 142,
    keyAreas: ['Stratford', 'West Ham', 'East Ham', 'Forest Gate', 'Canning Town'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £129',
      commercial: 'From £199',
      emergency: 'From £169'
    },
    facts: [
      'Olympic Park and venues major landmarks',
      'London City Airport requires specialized services',
      'Fastest growing population in London',
      'Major Crossrail development hub'
    ]
  },

  // WEST LONDON
  {
    id: 'hammersmith-fulham',
    name: 'Hammersmith & Fulham',
    postcode: 'SW6, W6, W12, W14',
    region: 'west',
    responseTime: '55 minutes',
    population: 185000,
    description: 'Affluent riverside borough with Victorian terraces, modern developments, and major sports venues requiring premium pest control.',
    commonPests: ['Mice', 'Rats', 'Wasps', 'Ants', 'Moths'],
    localChallenges: [
      'Thames-side moisture issues',
      'High property values demand discretion',
      'Sports venue event management',
      'Victorian terrace pest entry points',
      'Riverside development challenges'
    ],
    serviceHighlights: [
      'Riverside property specialists',
      'Premium discreet service',
      'Sports venue contracts',
      'Victorian building expertise',
      'Event day rapid response'
    ],
    averageCallouts: 245,
    successRate: '97%',
    testimonialCount: 73,
    keyAreas: ['Hammersmith', 'Fulham', 'Shepherds Bush', 'White City', 'Barons Court'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £169',
      commercial: 'From £269',
      emergency: 'From £209'
    },
    facts: [
      'Chelsea FC and QPR stadiums major venues',
      'Thames creates unique pest corridors',
      'Westfield shopping center major commercial hub',
      'High concentration of media companies'
    ]
  },
  {
    id: 'kensington-chelsea',
    name: 'Kensington & Chelsea',
    postcode: 'SW3, SW5, SW7, SW10, W8, W10, W11',
    region: 'west',
    responseTime: '50 minutes',
    population: 156000,
    description: 'London\'s most exclusive borough with luxury properties, world-class museums, and high-end retail requiring ultra-premium pest services.',
    commonPests: ['Mice', 'Moths', 'Wasps', 'Ants', 'Silverfish'],
    localChallenges: [
      'Ultra-high property values',
      'Celebrity and VIP discretion',
      'Historic building preservation',
      'Luxury retail standards',
      'Museum-quality pest prevention'
    ],
    serviceHighlights: [
      'Ultra-premium VIP service',
      'Museum-approved treatments',
      'Celebrity client discretion',
      'Historic building specialists',
      'Luxury retail partnerships'
    ],
    averageCallouts: 180,
    successRate: '99%',
    testimonialCount: 67,
    keyAreas: ['Knightsbridge', 'Chelsea', 'South Kensington', 'Notting Hill', 'Holland Park'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £199',
      commercial: 'From £349',
      emergency: 'From £279'
    },
    facts: [
      'Most expensive real estate in UK',
      'Home to Harrods, V&A, Natural History Museum',
      'Royal Borough with special requirements',
      'Notting Hill Carnival creates seasonal challenges'
    ]
  },

  // Additional key boroughs
  {
    id: 'greenwich',
    name: 'Greenwich',
    postcode: 'SE3, SE7, SE8, SE9, SE10, SE18',
    region: 'south',
    responseTime: '85 minutes',
    population: 287000,
    description: 'Historic maritime borough with Royal Observatory, major university, and diverse residential areas from riverside to suburban.',
    commonPests: ['Rats', 'Mice', 'Wasps', 'Ants', 'Flies'],
    localChallenges: [
      'Thames maritime pest corridors',
      'Historic building constraints',
      'University campus management',
      'Tourist attraction standards',
      'Mixed urban-suburban environment'
    ],
    serviceHighlights: [
      'Maritime heritage expertise',
      'University campus contracts',
      'Tourist venue specialists',
      'Historic building approved',
      'Suburban pest management'
    ],
    averageCallouts: 315,
    successRate: '94%',
    testimonialCount: 98,
    keyAreas: ['Greenwich', 'Blackheath', 'Eltham', 'Woolwich', 'Charlton'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £149',
      commercial: 'From £229',
      emergency: 'From £189'
    },
    facts: [
      'Home to Prime Meridian and Royal Observatory',
      'University of Greenwich major institution',
      'Thames Barrier creates unique environment',
      'UNESCO World Heritage Site requirements'
    ]
  },
  {
    id: 'wandsworth',
    name: 'Wandsworth',
    postcode: 'SW11, SW12, SW15, SW17, SW18, SW19',
    region: 'south',
    responseTime: '75 minutes',
    population: 329000,
    description: 'Large residential borough with Clapham Junction, Wimbledon tennis, and diverse communities requiring comprehensive pest solutions.',
    commonPests: ['Rats', 'Mice', 'Wasps', 'Ants', 'Flies'],
    localChallenges: [
      'Major transport hub pest pressure',
      'Tennis championship event management',
      'Large residential estate maintenance',
      'Common land pest management',
      'Diverse housing types'
    ],
    serviceHighlights: [
      'Transport hub specialists',
      'Event venue experience',
      'Estate management contracts',
      'Common land expertise',
      'Residential community focus'
    ],
    averageCallouts: 385,
    successRate: '95%',
    testimonialCount: 124,
    keyAreas: ['Clapham', 'Battersea', 'Wimbledon', 'Putney', 'Tooting'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £149',
      commercial: 'From £239',
      emergency: 'From £189'
    },
    facts: [
      'Clapham Junction is Britain\'s busiest railway station',
      'Wimbledon Championships create seasonal demands',
      'Largest London borough by population',
      'Battersea Power Station major redevelopment'
    ]
  },
  {
    id: 'richmond',
    name: 'Richmond upon Thames',
    postcode: 'SW13, SW14, SW15, TW1, TW2, TW9, TW10',
    region: 'west',
    responseTime: '70 minutes',
    population: 198000,
    description: 'Affluent riverside borough with Richmond Park, Kew Gardens, and premium residential areas requiring specialized pest management.',
    commonPests: ['Wasps', 'Ants', 'Mice', 'Moths', 'Flies'],
    localChallenges: [
      'Royal Park pest management',
      'Thames-side property issues',
      'High-value residential discretion',
      'Tourist attraction standards',
      'Garden pest specialization'
    ],
    serviceHighlights: [
      'Royal Park approved services',
      'Premium residential focus',
      'Garden pest specialists',
      'Tourist venue experience',
      'Eco-friendly emphasis'
    ],
    averageCallouts: 220,
    successRate: '96%',
    testimonialCount: 81,
    keyAreas: ['Richmond', 'Kew', 'Twickenham', 'Barnes', 'Mortlake'],
    emergencyAvailable: true,
    pricing: {
      residential: 'From £159',
      commercial: 'From £249',
      emergency: 'From £199'
    },
    facts: [
      'Richmond Park largest Royal Park in London',
      'Kew Gardens UNESCO World Heritage Site',
      'Twickenham home of rugby union',
      'Thames Path creates unique pest corridors'
    ]
  }
];

export const getServiceAreasByRegion = (region: string): ServiceArea[] => {
  return serviceAreas.filter(area => area.region === region);
};

export const getServiceAreaById = (id: string): ServiceArea | undefined => {
  return serviceAreas.find(area => area.id === id);
};

export const getAllServiceAreas = (): ServiceArea[] => {
  return serviceAreas;
}; 