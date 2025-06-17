export interface Pest {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
  urgency: 'low' | 'medium' | 'high';
  responseTime: string;
  successRate: string;
  healthRisks: string[];
  propertyDamage: string[];
  signs: string[];
  prevention: string[];
  treatment: string;
  seasonality: string;
  commonAreas: string[];
  price: string;
  facts: string[];
}

export const pestCategories = [
  { id: 'rodents', name: 'Rodents', icon: '🐀', description: 'Rats, mice, and other rodent infestations' },
  { id: 'insects', name: 'Insects', icon: '🐛', description: 'Cockroaches, ants, beetles, and flying insects' },
  { id: 'bed-bugs', name: 'Bed Bugs', icon: '🛏️', description: 'Blood-feeding parasites in bedrooms and furniture' },
  { id: 'wasps-bees', name: 'Wasps & Bees', icon: '🐝', description: 'Stinging insects and nest removal' },
  { id: 'moths-flies', name: 'Moths & Flies', icon: '🦟', description: 'Flying pests and fabric-damaging moths' },
  { id: 'spiders', name: 'Spiders', icon: '🕷️', description: 'House spiders and web-building species' },
  { id: 'fleas-mites', name: 'Fleas & Mites', icon: '🔬', description: 'Pet parasites and microscopic pests' }
];

export const pests: Pest[] = [
  // RODENTS
  {
    id: 'rats',
    name: 'Rats',
    category: 'rodents',
    icon: '🐀',
    description: 'Brown rats and black rats are London\'s most serious pest problem, causing extensive property damage and health risks.',
    riskLevel: 'high',
    urgency: 'high',
    responseTime: '2-4 hours',
    successRate: '95%',
    healthRisks: [
      'Weil\'s disease (Leptospirosis)',
      'Salmonella food poisoning',
      'Hantavirus pulmonary syndrome',
      'Rat-bite fever',
      'Plague (rare but possible)'
    ],
    propertyDamage: [
      'Electrical wire damage causing fire risk',
      'Structural damage to insulation',
      'Contamination of food supplies',
      'Damage to wooden structures'
    ],
    signs: [
      'Droppings (12-18mm long, dark brown)',
      'Gnaw marks on wood, plastic, cables',
      'Scratching sounds in walls/ceilings',
      'Grease marks along walls',
      'Strong ammonia-like odor',
      'Footprints in dusty areas'
    ],
    prevention: [
      'Seal holes larger than 6mm',
      'Remove food sources and water',
      'Trim vegetation away from buildings',
      'Install door sweeps and screens',
      'Regular cleaning and maintenance'
    ],
    treatment: 'Professional baiting systems with rodenticides, followed by proofing and monitoring',
    seasonality: 'Year-round, peak activity in autumn/winter',
    commonAreas: ['Kitchens', 'Basements', 'Lofts', 'Gardens', 'Commercial kitchens'],
    price: 'From £149',
    facts: [
      'Can squeeze through gaps as small as 15mm',
      'Reproduce rapidly - one pair can produce 2,000 offspring per year',
      'Excellent climbers and swimmers',
      'Can jump up to 77cm horizontally'
    ]
  },
  {
    id: 'mice',
    name: 'Mice',
    category: 'rodents',
    icon: '🐭',
    description: 'House mice are smaller but equally problematic, contaminating food and spreading disease throughout London properties.',
    riskLevel: 'medium',
    urgency: 'medium',
    responseTime: '4-6 hours',
    successRate: '92%',
    healthRisks: [
      'Salmonella contamination',
      'Lymphocytic choriomeningitis',
      'Allergic reactions from droppings',
      'Asthma triggers'
    ],
    propertyDamage: [
      'Food contamination',
      'Fabric and paper damage',
      'Minor electrical damage',
      'Insulation contamination'
    ],
    signs: [
      'Small droppings (3-6mm, pointed ends)',
      'Nibble marks on food packaging',
      'Scratching sounds at night',
      'Small footprints',
      'Musky odor in enclosed spaces'
    ],
    prevention: [
      'Seal cracks and holes with steel wool',
      'Store food in sealed containers',
      'Remove nesting materials',
      'Maintain clean environment'
    ],
    treatment: 'Targeted baiting and trapping systems with follow-up monitoring',
    seasonality: 'Year-round, increased indoor activity in winter',
    commonAreas: ['Kitchens', 'Pantries', 'Wardrobes', 'Loft spaces', 'Garages'],
    price: 'From £129',
    facts: [
      'Can fit through holes as small as 6mm',
      'Produce 40-100 droppings per day',
      'Excellent jumpers and climbers',
      'Gestation period of only 19-21 days'
    ]
  },

  // INSECTS
  {
    id: 'cockroaches',
    name: 'Cockroaches',
    category: 'insects',
    icon: '🪳',
    description: 'German and Oriental cockroaches are increasing 23% annually in London, thriving in warm, humid environments.',
    riskLevel: 'high',
    urgency: 'high',
    responseTime: 'Next day',
    successRate: '92%',
    healthRisks: [
      'Spread 33 different bacteria including E.coli',
      'Salmonella and Staphylococcus transmission',
      'Severe asthma triggers',
      'Allergic reactions',
      'Gastroenteritis'
    ],
    propertyDamage: [
      'Food contamination',
      'Staining from fecal matter',
      'Unpleasant odors',
      'Reputation damage for businesses'
    ],
    signs: [
      'Live insects (especially at night)',
      'Dark brown/black droppings',
      'Sweet, musty odor',
      'Egg cases (oothecae)',
      'Brown staining on surfaces'
    ],
    prevention: [
      'Eliminate moisture sources',
      'Seal cracks and crevices',
      'Remove food debris',
      'Fix leaking pipes',
      'Regular deep cleaning'
    ],
    treatment: 'Professional gel baiting and residual spraying with integrated pest management',
    seasonality: 'Year-round, prefer warm conditions 20-30°C',
    commonAreas: ['Kitchens', 'Bathrooms', 'Boiler rooms', 'Restaurants', 'Hotels'],
    price: 'From £179',
    facts: [
      'Can survive a month without food',
      'Hold their breath for 40 minutes',
      'Can live a week without their head',
      'Extremely rapid reproduction rate'
    ]
  },
  {
    id: 'ants',
    name: 'Ants',
    category: 'insects',
    icon: '🐜',
    description: 'Multiple ant species including Garden ants, Pharaoh ants, and Ghost ants form massive colonies across London.',
    riskLevel: 'medium',
    urgency: 'medium',
    responseTime: '24 hours',
    successRate: '90%',
    healthRisks: [
      'Food contamination',
      'Pharaoh ants spread hospital infections',
      'Allergic reactions to bites',
      'Secondary infections from scratching'
    ],
    propertyDamage: [
      'Structural damage to foundations',
      'Garden and lawn damage',
      'Electrical equipment interference',
      'Food supply contamination'
    ],
    signs: [
      'Ant trails leading to food sources',
      'Small piles of soil/debris',
      'Live ants in kitchen areas',
      'Sweet/musty odors',
      'Winged ants during mating season'
    ],
    prevention: [
      'Remove food sources and spills',
      'Seal entry points',
      'Fix moisture problems',
      'Trim vegetation from buildings',
      'Regular cleaning routines'
    ],
    treatment: 'Professional baiting systems targeting entire colonies with delayed-action insecticides',
    seasonality: 'Active March-October, peak summer months',
    commonAreas: ['Kitchens', 'Gardens', 'Patios', 'Foundations', 'Hospitals'],
    price: 'From £139',
    facts: [
      'Can lift 50 times their body weight',
      'Colonies can contain millions of individuals',
      'Leave pheromone trails for navigation',
      'Some species farm aphids for food'
    ]
  },

  // BED BUGS
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    category: 'bed-bugs',
    icon: '🛏️',
    description: 'Blood-feeding parasites experiencing a major resurgence in London hotels and residential properties.',
    riskLevel: 'high',
    urgency: 'high',
    responseTime: '24 hours',
    successRate: '98%',
    healthRisks: [
      'Itchy, inflamed bite marks',
      'Severe sleep disruption',
      'Secondary skin infections',
      'Psychological distress',
      'Allergic reactions (rare)'
    ],
    propertyDamage: [
      'Staining of mattresses and furniture',
      'Unpleasant sweet, musty odor',
      'Reputation damage for hotels',
      'Expensive furniture replacement'
    ],
    signs: [
      'Red, itchy bite marks in lines',
      'Blood spots on sheets',
      'Dark/rust stains on mattresses',
      'Sweet, musty odor in bedrooms',
      'Live bugs in mattress seams',
      'Small brown/black spots (fecal stains)'
    ],
    prevention: [
      'Inspect second-hand furniture',
      'Check hotel rooms when traveling',
      'Vacuum regularly around beds',
      'Use protective mattress covers',
      'Reduce bedroom clutter'
    ],
    treatment: 'Professional heat treatment or targeted insecticide application with follow-up inspections',
    seasonality: 'Year-round, slightly more active in warmer months',
    commonAreas: ['Bedrooms', 'Hotels', 'Hostels', 'Furniture', 'Public transport'],
    price: 'From £299',
    facts: [
      'Can survive up to a year without feeding',
      'Feed exclusively on human blood',
      'Excellent hitchhikers via luggage',
      'Require professional treatment for elimination'
    ]
  },

  // WASPS & BEES
  {
    id: 'wasps',
    name: 'Wasps',
    category: 'wasps-bees',
    icon: '🐝',
    description: 'Common and German wasps become aggressive in late summer, posing serious sting risks around London properties.',
    riskLevel: 'high',
    urgency: 'high',
    responseTime: '2 hours emergency',
    successRate: '100%',
    healthRisks: [
      'Painful stings with venom injection',
      'Severe allergic reactions (anaphylaxis)',
      'Multiple stings from single wasp',
      'Secondary infections from scratching',
      'Potential fatalities in allergic individuals'
    ],
    propertyDamage: [
      'Structural damage from nest building',
      'Staining from nest materials',
      'Garden fruit damage',
      'Outdoor activity disruption'
    ],
    signs: [
      'Increased wasp activity around property',
      'Visible nest in eaves/trees',
      'Chewed wood pulp (nest material)',
      'Wasps entering/exiting specific areas',
      'Aggressive behavior near nest sites'
    ],
    prevention: [
      'Seal potential nesting sites',
      'Remove food sources (fallen fruit)',
      'Cover food and drinks outdoors',
      'Install wasp traps early season',
      'Regular property inspections'
    ],
    treatment: 'Professional nest treatment with specialized equipment and protective gear',
    seasonality: 'Peak activity June-September, most aggressive August-September',
    commonAreas: ['Roof eaves', 'Garden sheds', 'Trees', 'Wall cavities', 'Outdoor dining areas'],
    price: 'From £159',
    facts: [
      'Can sting multiple times without dying',
      'Nests can contain up to 15,000 wasps',
      'Become more aggressive as food becomes scarce',
      'Essential for ecosystem pest control'
    ]
  },
  {
    id: 'bees',
    name: 'Bees',
    category: 'wasps-bees',
    icon: '🐝',
    description: 'Honey bees and bumblebees occasionally require relocation when nesting in inappropriate locations.',
    riskLevel: 'low',
    urgency: 'low',
    responseTime: '24-48 hours',
    successRate: '95%',
    healthRisks: [
      'Single sting capability (honey bees)',
      'Allergic reactions possible',
      'Swarm intimidation factor',
      'Multiple stings from disturbed colonies'
    ],
    propertyDamage: [
      'Honey and wax staining',
      'Structural damage from large colonies',
      'Attraction of other pests to honey',
      'Property access issues'
    ],
    signs: [
      'Increased bee activity',
      'Visible swarms or clusters',
      'Honey/wax deposits',
      'Buzzing sounds in walls',
      'Bees entering building cavities'
    ],
    prevention: [
      'Seal potential nesting cavities',
      'Remove attractant flowering plants near buildings',
      'Install bee-proof vents',
      'Regular property maintenance'
    ],
    treatment: 'Professional relocation to suitable habitat (preferred) or targeted treatment if necessary',
    seasonality: 'Active March-October, swarming April-July',
    commonAreas: ['Wall cavities', 'Roof spaces', 'Trees', 'Chimneys', 'Garden areas'],
    price: 'From £199 (relocation preferred)',
    facts: [
      'Critical pollinators for ecosystem',
      'Honey bees die after stinging',
      'Can travel up to 5 miles for food',
      'Relocation preferred over extermination'
    ]
  },

  // MOTHS & FLIES
  {
    id: 'clothes-moths',
    name: 'Clothes Moths',
    category: 'moths-flies',
    icon: '🦋',
    description: 'Webbing clothes moths and case-bearing clothes moths cause extensive damage to natural fiber clothing and furnishings.',
    riskLevel: 'medium',
    urgency: 'medium',
    responseTime: '48 hours',
    successRate: '94%',
    healthRisks: [
      'Minimal direct health risks',
      'Allergic reactions to moth scales',
      'Respiratory irritation (sensitive individuals)'
    ],
    propertyDamage: [
      'Expensive clothing damage',
      'Carpet and rug destruction',
      'Curtain and upholstery holes',
      'Irreplaceable textile damage'
    ],
    signs: [
      'Small holes in natural fiber clothing',
      'Adult moths flying around wardrobes',
      'Silky webbing on fabrics',
      'Small caterpillars in clothing',
      'Shed skins and fecal pellets'
    ],
    prevention: [
      'Regular vacuuming of wardrobes',
      'Cedar blocks and lavender sachets',
      'Proper clothing storage',
      'Temperature control',
      'Regular inspection of stored items'
    ],
    treatment: 'Targeted insecticide treatment combined with pheromone monitoring and prevention advice',
    seasonality: 'Year-round indoors, peak activity spring/summer',
    commonAreas: ['Wardrobes', 'Bedrooms', 'Storage areas', 'Museums', 'Historic buildings'],
    price: 'From £169',
    facts: [
      'Only larvae cause damage, not adults',
      'Prefer natural fibers like wool and silk',
      'Can remain dormant for months',
      'Attracted to soiled clothing'
    ]
  },
  {
    id: 'flies',
    name: 'Flies',
    category: 'moths-flies',
    icon: '🪰',
    description: 'House flies, fruit flies, and drain flies spread disease and contaminate food in London properties.',
    riskLevel: 'medium',
    urgency: 'medium',
    responseTime: '24 hours',
    successRate: '88%',
    healthRisks: [
      'Disease transmission (over 100 pathogens)',
      'Food contamination',
      'Salmonella and E.coli spread',
      'Dysentery and typhoid transmission'
    ],
    propertyDamage: [
      'Food spoilage and contamination',
      'Reputation damage for food businesses',
      'Unpleasant odors and staining',
      'Customer complaints and health violations'
    ],
    signs: [
      'Adult flies around food/waste areas',
      'Maggots in organic matter',
      'Dark spots (fly specks) on surfaces',
      'Increased activity around bins',
      'Buzzing sounds'
    ],
    prevention: [
      'Proper waste management',
      'Install fly screens',
      'Eliminate breeding sites',
      'Regular cleaning of drains',
      'Food storage in sealed containers'
    ],
    treatment: 'Integrated approach using traps, residual sprays, and breeding site elimination',
    seasonality: 'Peak activity summer months, some species year-round',
    commonAreas: ['Kitchens', 'Restaurants', 'Waste areas', 'Bathrooms', 'Food processing'],
    price: 'From £149',
    facts: [
      'Can lay up to 500 eggs at once',
      'Complete life cycle in 7-10 days',
      'Taste with their feet',
      'Can carry pathogens on body and in gut'
    ]
  },

  // SPIDERS
  {
    id: 'house-spiders',
    name: 'House Spiders',
    category: 'spiders',
    icon: '🕷️',
    description: 'Common house spiders and giant house spiders create webs and can cause arachnophobia in London residents.',
    riskLevel: 'low',
    urgency: 'low',
    responseTime: '48 hours',
    successRate: '92%',
    healthRisks: [
      'Minimal health risks in UK',
      'Rare allergic reactions to bites',
      'Psychological distress (arachnophobia)',
      'Minor skin irritation from bites'
    ],
    propertyDamage: [
      'Unsightly webs in corners',
      'Staining from web debris',
      'Customer complaints in businesses',
      'Aesthetic property issues'
    ],
    signs: [
      'Visible webs in corners and crevices',
      'Live spiders in bathrooms/basements',
      'Shed skins from molting',
      'Small flying insects caught in webs',
      'Spider egg sacs'
    ],
    prevention: [
      'Regular vacuuming of webs',
      'Reduce other insect populations',
      'Seal cracks and entry points',
      'Reduce moisture and humidity',
      'Remove outdoor vegetation near buildings'
    ],
    treatment: 'Targeted residual spraying and web removal with ongoing monitoring',
    seasonality: 'Most visible autumn when seeking mates, present year-round',
    commonAreas: ['Bathrooms', 'Basements', 'Garages', 'Sheds', 'Window frames'],
    price: 'From £129',
    facts: [
      'Beneficial predators of other pests',
      'UK has no dangerous spider species',
      'Can live for several years',
      'Males often die after mating'
    ]
  },

  // FLEAS & MITES
  {
    id: 'fleas',
    name: 'Fleas',
    category: 'fleas-mites',
    icon: '🔬',
    description: 'Cat fleas and dog fleas infest carpets and furniture, biting humans and pets in London homes.',
    riskLevel: 'medium',
    urgency: 'medium',
    responseTime: '24 hours',
    successRate: '94%',
    healthRisks: [
      'Itchy, inflamed bite marks',
      'Allergic reactions in sensitive individuals',
      'Secondary infections from scratching',
      'Disease transmission (rare in UK)',
      'Pet health issues'
    ],
    propertyDamage: [
      'Carpet and furniture infestation',
      'Pet discomfort and health issues',
      'Difficult to eliminate without treatment',
      'Rapid population growth'
    ],
    signs: [
      'Pets scratching excessively',
      'Small jumping insects on pets/carpets',
      'Bite marks on ankles and legs',
      'Black specks (flea dirt) in pet bedding',
      'Increased activity in warm areas'
    ],
    prevention: [
      'Regular pet flea treatments',
      'Frequent vacuuming of carpets',
      'Wash pet bedding regularly',
      'Professional carpet cleaning',
      'Treat all pets simultaneously'
    ],
    treatment: 'Comprehensive treatment of property and pets with residual insecticides and growth regulators',
    seasonality: 'Year-round indoors, peak activity summer months',
    commonAreas: ['Carpeted areas', 'Pet bedding', 'Upholstered furniture', 'Cracks in flooring'],
    price: 'From £179',
    facts: [
      'Can jump 150 times their body length',
      'Eggs can remain dormant for months',
      'Adult fleas represent only 5% of population',
      'Require warm-blooded host to survive'
    ]
  },

  // Additional pests to reach 20+
  {
    id: 'carpet-beetles',
    name: 'Carpet Beetles',
    category: 'insects',
    icon: '🪲',
    description: 'Varied carpet beetles and furniture carpet beetles damage natural fiber furnishings and clothing.',
    riskLevel: 'medium',
    urgency: 'low',
    responseTime: '48 hours',
    successRate: '91%',
    healthRisks: [
      'Skin irritation from larvae hairs',
      'Allergic reactions (dermatitis)',
      'Respiratory irritation'
    ],
    propertyDamage: [
      'Carpet and rug damage',
      'Clothing holes',
      'Upholstery destruction',
      'Museum specimen damage'
    ],
    signs: [
      'Small round holes in fabrics',
      'Shed larval skins',
      'Adult beetles near windows',
      'Larvae in dark areas'
    ],
    prevention: [
      'Regular vacuuming',
      'Proper storage of woolens',
      'Seal cracks and crevices',
      'Remove bird nests'
    ],
    treatment: 'Targeted insecticide application and source elimination',
    seasonality: 'Adults active spring/summer, larvae year-round',
    commonAreas: ['Carpets', 'Wardrobes', 'Museums', 'Attics'],
    price: 'From £159',
    facts: [
      'Larvae cause all the damage',
      'Can feed on dead insects',
      'Attracted to natural light',
      'Complete development takes 1-3 years'
    ]
  },
  {
    id: 'silverfish',
    name: 'Silverfish',
    category: 'insects',
    icon: '🐟',
    description: 'Primitive wingless insects that damage books, wallpaper, and starchy materials in damp London properties.',
    riskLevel: 'low',
    urgency: 'low',
    responseTime: '48 hours',
    successRate: '89%',
    healthRisks: [
      'No direct health risks',
      'Contamination of food products',
      'Allergic reactions (rare)'
    ],
    propertyDamage: [
      'Book and paper damage',
      'Wallpaper destruction',
      'Fabric holes',
      'Photograph damage'
    ],
    signs: [
      'Silver, fish-like insects',
      'Yellow stains on materials',
      'Small holes in paper/fabric',
      'Shed skins'
    ],
    prevention: [
      'Reduce humidity levels',
      'Seal cracks and crevices',
      'Remove paper clutter',
      'Use dehumidifiers'
    ],
    treatment: 'Residual insecticide treatment and moisture control',
    seasonality: 'Year-round, prefer warm humid conditions',
    commonAreas: ['Bathrooms', 'Kitchens', 'Basements', 'Libraries'],
    price: 'From £139',
    facts: [
      'Can live up to 8 years',
      'Survive without food for months',
      'Prefer temperatures 22-27°C',
      'Ancient insects, 400 million years old'
    ]
  },
  {
    id: 'woodworm',
    name: 'Woodworm',
    category: 'insects',
    icon: '🪵',
    description: 'Common furniture beetle larvae that bore through wooden structures, causing serious structural damage.',
    riskLevel: 'high',
    urgency: 'medium',
    responseTime: '48 hours',
    successRate: '96%',
    healthRisks: [
      'No direct health risks',
      'Dust from boring can cause respiratory irritation'
    ],
    propertyDamage: [
      'Serious structural timber damage',
      'Furniture destruction',
      'Flooring damage',
      'Expensive repair costs'
    ],
    signs: [
      'Small round holes in wood (1-2mm)',
      'Fine powdery dust (frass)',
      'Weak or damaged timber',
      'Adult beetles (May-August)'
    ],
    prevention: [
      'Maintain low humidity',
      'Treat timber with preservatives',
      'Regular inspections',
      'Proper ventilation'
    ],
    treatment: 'Professional timber treatment with specialized insecticides and wood preservatives',
    seasonality: 'Adults emerge May-August, larvae active year-round',
    commonAreas: ['Roof timbers', 'Floorboards', 'Furniture', 'Structural beams'],
    price: 'From £299',
    facts: [
      'Larvae can take 2-5 years to develop',
      'Prefer softwoods and sapwood',
      'Can seriously weaken structures',
      'Treatment requires specialist knowledge'
    ]
  },
  {
    id: 'cluster-flies',
    name: 'Cluster Flies',
    category: 'moths-flies',
    icon: '🪰',
    description: 'Large flies that cluster in roof spaces and wall cavities during winter months in London properties.',
    riskLevel: 'low',
    urgency: 'low',
    responseTime: '48 hours',
    successRate: '87%',
    healthRisks: [
      'No significant health risks',
      'Nuisance factor',
      'Unpleasant odors when disturbed'
    ],
    propertyDamage: [
      'Staining from large numbers',
      'Unpleasant odors',
      'Customer complaints',
      'Aesthetic issues'
    ],
    signs: [
      'Large numbers of sluggish flies',
      'Clustering around windows',
      'Sweet, sickly smell',
      'Activity on warm winter days'
    ],
    prevention: [
      'Seal entry points in autumn',
      'Install fly screens',
      'Remove from clustering sites',
      'Improve ventilation'
    ],
    treatment: 'Residual insecticide treatment and physical exclusion methods',
    seasonality: 'Cluster in autumn/winter, active spring/summer',
    commonAreas: ['Roof spaces', 'Wall cavities', 'Windows', 'Conservatories'],
    price: 'From £149',
    facts: [
      'Parasites of earthworms in larval stage',
      'Can live several months without food',
      'Attracted to south-facing buildings',
      'Hibernate in large clusters'
    ]
  },
  {
    id: 'booklice',
    name: 'Booklice',
    category: 'insects',
    icon: '📚',
    description: 'Tiny insects that feed on mold and fungi in damp conditions, often found in books and papers.',
    riskLevel: 'low',
    urgency: 'low',
    responseTime: '48 hours',
    successRate: '93%',
    healthRisks: [
      'No direct health risks',
      'Indicator of moisture problems',
      'Potential mold exposure'
    ],
    propertyDamage: [
      'Book and paper damage',
      'Wallpaper damage',
      'Mold growth indication',
      'Storage material contamination'
    ],
    signs: [
      'Tiny crawling insects',
      'Damage to books/papers',
      'Presence in damp areas',
      'Mold growth nearby'
    ],
    prevention: [
      'Control humidity levels',
      'Improve ventilation',
      'Remove moldy materials',
      'Use dehumidifiers'
    ],
    treatment: 'Moisture control and targeted insecticide treatment',
    seasonality: 'Year-round in heated buildings',
    commonAreas: ['Libraries', 'Storage rooms', 'Basements', 'Bathrooms'],
    price: 'From £129',
    facts: [
      'Feed on microscopic mold and fungi',
      'Thrive in humidity above 75%',
      'Very small (1-2mm long)',
      'Indicator species for moisture problems'
    ]
  }
];

export const getPestsByCategory = (category: string): Pest[] => {
  return pests.filter(pest => pest.category === category);
};

export const getPestById = (id: string): Pest | undefined => {
  return pests.find(pest => pest.id === id);
}; 