import { BoroughData, londonBoroughs } from './boroughData';

export interface BoroughServiceArea extends BoroughData {
  // Service-specific data
  serviceHighlights: string[];
  averageCallouts: number;
  successRate: string;
  testimonialCount: number;
  emergencyAvailable: boolean;
  pricing: {
    residential: string;
    commercial: string;
    emergency: string;
  };
  region: 'central' | 'north' | 'south' | 'east' | 'west';
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

// Region mapping for London boroughs
const boroughRegionMapping: Record<string, 'central' | 'north' | 'south' | 'east' | 'west'> = {
  'westminster': 'central',
  'city-of-london': 'central',
  'camden': 'central',
  'kensington-and-chelsea': 'central',
  'islington': 'north',
  'hackney': 'north',
  'haringey': 'north',
  'barnet': 'north',
  'enfield': 'north',
  'waltham-forest': 'north',
  'redbridge': 'north',
  'havering': 'north',
  'tower-hamlets': 'east',
  'newham': 'east',
  'barking-and-dagenham': 'east',
  'bexley': 'east',
  'greenwich': 'south',
  'lewisham': 'south',
  'southwark': 'south',
  'lambeth': 'south',
  'wandsworth': 'south',
  'merton': 'south',
  'sutton': 'south',
  'croydon': 'south',
  'bromley': 'south',
  'hammersmith-and-fulham': 'west',
  'ealing': 'west',
  'hounslow': 'west',
  'richmond-upon-thames': 'west',
  'kingston-upon-thames': 'west',
  'hillingdon': 'west',
  'harrow': 'west',
  'brent': 'west'
};

// Pricing tiers based on borough affluence and complexity
const getPricingTier = (borough: BoroughData): BoroughServiceArea['pricing'] => {
  // Premium boroughs (highest property values, complex requirements)
  const premiumBoroughs = ['kensington-and-chelsea', 'westminster', 'city-of-london', 'richmond-upon-thames'];
  
  // High-tier boroughs (affluent, good transport links)
  const highTierBoroughs = ['camden', 'islington', 'hammersmith-and-fulham', 'wandsworth', 'bromley', 'barnet'];
  
  // Standard tier boroughs (mixed demographics, standard complexity)
  const standardBoroughs = ['hackney', 'southwark', 'lambeth', 'greenwich', 'lewisham', 'merton', 'sutton', 'ealing', 'hounslow', 'haringey', 'waltham-forest', 'redbridge', 'brent', 'harrow', 'croydon'];
  
  // Economy tier boroughs (outer London, higher density issues)
  const economyBoroughs = ['tower-hamlets', 'newham', 'barking-and-dagenham', 'bexley', 'enfield', 'havering', 'hillingdon', 'kingston-upon-thames'];

  if (premiumBoroughs.includes(borough.id)) {
    return {
      residential: 'From £199',
      commercial: 'From £349',
      emergency: 'From £279'
    };
  } else if (highTierBoroughs.includes(borough.id)) {
    return {
      residential: 'From £169',
      commercial: 'From £259',
      emergency: 'From £209'
    };
  } else if (standardBoroughs.includes(borough.id)) {
    return {
      residential: 'From £149',
      commercial: 'From £229',
      emergency: 'From £189'
    };
  } else {
    return {
      residential: 'From £129',
      commercial: 'From £199',
      emergency: 'From £169'
    };
  }
};

// Generate service highlights based on borough characteristics
const generateServiceHighlights = (borough: BoroughData): string[] => {
  const highlights: string[] = [];
  
  // Base highlights for all boroughs
  highlights.push('Fully licensed and insured');
  highlights.push('Same-day appointments available');
  highlights.push('Local area expertise');
  
  // Special highlights based on borough characteristics
  if (borough.specialFactors.some(factor => factor.toLowerCase().includes('historic'))) {
    highlights.push('Historic building specialists');
  }
  
  if (borough.specialFactors.some(factor => factor.toLowerCase().includes('river') || factor.toLowerCase().includes('thames'))) {
    highlights.push('Riverside property expertise');
  }
  
  if (borough.specialFactors.some(factor => factor.toLowerCase().includes('tourist') || factor.toLowerCase().includes('market'))) {
    highlights.push('Commercial venue specialists');
  }
  
  if (borough.specialFactors.some(factor => factor.toLowerCase().includes('green') || factor.toLowerCase().includes('park'))) {
    highlights.push('Garden and outdoor pest management');
  }
  
  if (borough.housingTypes.includes('Council estates') || borough.housingTypes.includes('High-rise blocks')) {
    highlights.push('Multi-occupancy building expertise');
  }
  
  if (borough.housingTypes.includes('Victorian terraces') || borough.housingTypes.includes('Georgian terraces')) {
    highlights.push('Period property specialists');
  }
  
  // Add discretion for affluent areas
  if (['kensington-and-chelsea', 'westminster', 'richmond-upon-thames', 'city-of-london'].includes(borough.id)) {
    highlights.push('Discreet VIP service');
  }
  
  return highlights.slice(0, 6); // Limit to 6 highlights
};

// Generate SEO-optimized content
const generateSEOContent = (borough: BoroughData): {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
} => {
  const seoTitle = `Pest Control ${borough.name} | Professional Pest Removal Services`;
  
  const seoDescription = `Professional pest control services in ${borough.name}. ${borough.responseTime} response time. Experts in ${borough.commonPests.slice(0, 3).join(', ')} removal. Call 077 2704 9304 for same-day service.`;
  
  const seoKeywords = [
    `pest control ${borough.name.toLowerCase()}`,
    `${borough.name.toLowerCase()} pest removal`,
    `${borough.name.toLowerCase()} exterminator`,
    ...borough.commonPests.map(pest => `${pest.toLowerCase()} removal ${borough.name.toLowerCase()}`),
    ...borough.postcodes.map(postcode => `pest control ${postcode}`),
    ...borough.neighborhoods.slice(0, 3).map(area => `pest control ${area.toLowerCase()}`)
  ];
  
  return { seoTitle, seoDescription, seoKeywords };
};

// Convert borough data to service area format
export const boroughServiceAreas: BoroughServiceArea[] = londonBoroughs.map(borough => {
  const region = boroughRegionMapping[borough.id];
  const pricing = getPricingTier(borough);
  const serviceHighlights = generateServiceHighlights(borough);
  const seoContent = generateSEOContent(borough);
  
  // Calculate average callouts based on population and pest pressure
  const baseCallouts = Math.floor(parseInt(borough.population.replace(/,/g, '')) * 0.001);
  const pestPressureMultiplier = borough.commonPests.length / 5;
  const averageCallouts = Math.floor(baseCallouts * pestPressureMultiplier);
  
  // Calculate success rate (higher for less challenging areas)
  const challengeScore = borough.localChallenges.length;
  const successRate = challengeScore > 4 ? '91%' : challengeScore > 2 ? '94%' : '97%';
  
  // Calculate testimonial count based on population
  const populationNum = parseInt(borough.population.replace(/,/g, ''));
  const testimonialCount = Math.floor((populationNum / 10000) * (Math.random() * 0.5 + 0.5));
  
  return {
    ...borough,
    region,
    serviceHighlights,
    averageCallouts,
    successRate,
    testimonialCount,
    emergencyAvailable: true,
    pricing,
    ...seoContent
  };
});

// Regional organization
export const londonRegions = [
  { id: 'central', name: 'Central London', color: '#DC2626' },
  { id: 'north', name: 'North London', color: '#2563EB' },
  { id: 'south', name: 'South London', color: '#16A34A' },
  { id: 'east', name: 'East London', color: '#EA580C' },
  { id: 'west', name: 'West London', color: '#9333EA' }
];

// Utility functions
export const getBoroughServiceAreasByRegion = (region: string): BoroughServiceArea[] => {
  return boroughServiceAreas.filter(area => area.region === region);
};

export const getBoroughServiceAreaById = (id: string): BoroughServiceArea | undefined => {
  return boroughServiceAreas.find(area => area.id === id);
};

export const getAllBoroughServiceAreas = (): BoroughServiceArea[] => {
  return boroughServiceAreas;
};

export const getBoroughServiceAreaByPostcode = (postcode: string): BoroughServiceArea | undefined => {
  return boroughServiceAreas.find(area => 
    area.postcodes.some(pc => pc.toLowerCase() === postcode.toLowerCase())
  );
};

export const searchBoroughServiceAreas = (query: string): BoroughServiceArea[] => {
  const searchTerm = query.toLowerCase();
  return boroughServiceAreas.filter(area => 
    area.name.toLowerCase().includes(searchTerm) ||
    area.neighborhoods.some(neighborhood => neighborhood.toLowerCase().includes(searchTerm)) ||
    area.postcodes.some(postcode => postcode.toLowerCase().includes(searchTerm))
  );
};