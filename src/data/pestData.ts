export interface PestServicePricing {
  mainService: {
    from: number;
    unit: string;
    description: string;
  };
  additionalServices?: {
    name: string;
    from: number;
    description: string;
  }[];
}

export interface PestGuarantee {
  isOffered: boolean;
  duration?: string;
  conditions: string[];
  exclusions: string[];
}

export interface PestTreatmentInfo {
  preparation: string[];
  methodology: string[];
  aftercare: string[];
  productsUsed: {
    category: string;
    purpose: string;
  }[];
}

export interface PestData {
  id: string;
  name: string;
  scientificName: string;
  category: 'rodents' | 'insects' | 'birds' | 'wildlife';
  commonNames: string[];
  description: string;
  pricing?: PestServicePricing;
  guarantee?: PestGuarantee;
  treatmentInfo?: PestTreatmentInfo;
  identification: {
    size: string;
    color: string;
    distinguishingFeatures: string[];
    soundsMade: string[];
    droppings: string;
    tracks: string;
  };
  behavior: {
    activityTime: string;
    nestingHabits: string;
    feedingHabits: string;
    lifespan: string;
    reproductionRate: string;
  };
  habitat: {
    preferredEnvironment: string[];
    commonHidingSpots: string[];
    signsOfInfestation: string[];
  };
  risks: {
    healthRisks: string[];
    propertyDamage: string[];
    businessRisks: string[];
  };
  prevention: {
    environmentalChanges: string[];
    exclusionMethods: string[];
    cleaningTips: string[];
    landscapingTips: string[];
  };
  treatment: {
    professionalMethods: string[];
    timeline: string;
    preparation: string[];
    followUp: string;
  };
  londonSpecific: {
    commonBoroughs: string[];
    seasonalActivity: {
      spring: string;
      summer: string;
      autumn: string;
      winter: string;
    };
    propertyTypes: string[];
  };
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
  relatedPests: string[];
}

export const pests: PestData[] = [
  {
    id: "rats",
    name: "Rats",
    scientificName: "Rattus rattus & Rattus norvegicus",
    category: "rodents",
    commonNames: ["Brown rat", "Norway rat", "Sewer rat", "Black rat", "Roof rat"],
    description: "Discovering rats in your property can be one of the most distressing and urgent pest situations any London resident or business owner faces. The sight, sound, or smell of these persistent rodents triggers immediate anxiety about health risks, property damage, and the reputation of your home or business. At Pest Pro London, we understand that rats represent more than just a nuisance – they're a serious threat to your family's health, your property's integrity, and your peace of mind. Our BPCA-certified technicians have helped thousands of London residents and businesses eliminate rat infestations quickly and permanently, using advanced techniques specifically designed for London's unique urban environment where Victorian drainage systems, dense housing, and abundant food sources create ideal conditions for rat populations to thrive.",
    identification: {
      size: "Body: 20-25cm, Tail: 18-23cm",
      color: "Brown, grey, or black fur",
      distinguishingFeatures: [
        "Pointed snout with prominent whiskers",
        "Small ears relative to body size",
        "Thick, scaly tail shorter than body length",
        "Strong hind legs for jumping"
      ],
      soundsMade: ["Scratching in walls", "Squeaking", "Gnawing sounds", "Scurrying in ceilings"],
      droppings: "Dark, pellet-shaped, 12-18mm long, tapered ends",
      tracks: "Four-toed front feet, five-toed hind feet, tail drag marks"
    },
    behavior: {
      activityTime: "Primarily nocturnal, most active at dusk and dawn",
      nestingHabits: "Build nests in warm, hidden areas using shredded materials",
      feedingHabits: "Omnivorous, need 15-30g of food daily, prefer cereals",
      lifespan: "12-18 months in the wild",
      reproductionRate: "5-10 litters per year, 5-12 pups per litter"
    },
    habitat: {
      preferredEnvironment: ["Sewers", "Basements", "Gardens", "Compost heaps", "Near water sources"],
      commonHidingSpots: [
        "Under floorboards",
        "Behind kitchen appliances",
        "In wall cavities",
        "Loft spaces",
        "Garden sheds",
        "Drainage systems"
      ],
      signsOfInfestation: [
        "Droppings along walls",
        "Gnaw marks on wood/cables",
        "Grease marks on walls",
        "Footprints in dusty areas",
        "Ammonia-like smell",
        "Damaged food packaging"
      ]
    },
    risks: {
      healthRisks: [
        "Weil's disease (Leptospirosis)",
        "Salmonella",
        "Hantavirus",
        "E. coli",
        "Tuberculosis",
        "Parasites (fleas, mites)"
      ],
      propertyDamage: [
        "Electrical fires from gnawed wires",
        "Structural damage to buildings",
        "Contaminated food supplies",
        "Damaged insulation",
        "Burst water pipes"
      ],
      businessRisks: [
        "Health code violations",
        "Loss of reputation",
        "Contaminated stock",
        "Forced closure",
        "Legal liability"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Remove food sources",
        "Eliminate water access",
        "Clear clutter and debris",
        "Maintain clean premises"
      ],
      exclusionMethods: [
        "Seal holes larger than 20mm",
        "Install door sweeps",
        "Cover drains and vents",
        "Repair damaged brickwork"
      ],
      cleaningTips: [
        "Store food in sealed containers",
        "Clean up spills immediately",
        "Empty bins regularly",
        "Remove pet food at night"
      ],
      landscapingTips: [
        "Cut back overgrown vegetation",
        "Remove ivy from walls",
        "Clear garden debris",
        "Maintain 50cm gap from buildings"
      ]
    },
    treatment: {
      professionalMethods: [
        "Anticoagulant rodenticides",
        "Snap traps and live traps",
        "Tracking powder",
        "Proofing and exclusion",
        "Drain surveys and baiting"
      ],
      timeline: "Initial treatment 2-3 visits over 2-3 weeks",
      preparation: [
        "Clear access to affected areas",
        "Remove food sources",
        "Note all sighting locations",
        "Secure pets during treatment"
      ],
      followUp: "Monthly monitoring for 3 months recommended"
    },
    londonSpecific: {
      commonBoroughs: ["Westminster - particularly around restaurant districts where food waste attracts large populations", "Camden - Victorian terraces with connecting drainage systems create rat highways", "Tower Hamlets - historic warehouse conversions often have unsealed entry points", "Southwark - Thames-side properties face constant pressure from waterway populations", "Hackney - dense housing and garden-to-garden movement creates neighbourhood-wide issues", "Islington - converted period properties with shared walls and old drainage", "Lambeth - mix of residential and commercial creates year-round food sources", "Greenwich - riverside location combined with tourist food outlets increases activity"],
      seasonalActivity: {
        spring: "Peak breeding activity begins as temperatures warm. Pregnant females seek secure nesting sites in roof spaces and wall cavities. Outdoor populations expand rapidly, increasing pressure on neighbouring properties. Garden sheds and compost areas become primary targets.",
        summer: "Maximum reproduction with up to 10 litters possible. Young rats explore beyond nest sites, often discovered in unexpected locations. Restaurant and takeaway areas experience highest activity due to increased outdoor dining and food waste.",
        autumn: "Mass migration indoors as temperatures drop. Properties previously unaffected may suddenly experience infestations as outdoor food sources diminish. This is when most London residents first discover they have a rat problem.",
        winter: "Peak season for domestic infestations. Rats concentrate in heated areas like boiler cupboards, kitchen voids, and loft spaces. Property damage peaks as they gnaw materials for nesting and struggle to maintain body temperature."
      },
      propertyTypes: ["Victorian terraces with connecting cellars and shared drainage systems providing neighbourhood-wide access routes", "Restaurant basements where grease traps and food storage create ideal breeding environments", "Council estates with refuse areas and multiple entry points through aging infrastructure", "Thames-side properties facing constant reinvasion from waterway populations and tourist-generated food waste", "Georgian conversions where partition walls create hidden highways between flats", "New-build developments where construction gaps and utility access points weren't properly sealed", "Commercial kitchens in high-density areas where grease and food debris accumulate in hard-to-clean areas", "Student accommodation where irregular cleaning and food storage practices create perfect conditions"]
    },
    urgencyLevel: "high",
    relatedPests: ["mice", "squirrels"],
    pricing: {
      mainService: {
        from: 225,
        unit: "for 3 visits",
        description: "Comprehensive rat elimination program including survey, initial treatment, and two follow-up visits"
      },
      additionalServices: [
        {
          name: "Emergency next-day treatment",
          from: 50,
          description: "Priority response within 4 hours for urgent rat infestations"
        },
        {
          name: "Drainage survey and proofing",
          from: 150,
          description: "CCTV drain inspection and professional sealing of sewer entry points"
        },
        {
          name: "Commercial kitchen deep clean and treatment",
          from: 300,
          description: "Comprehensive sanitization and proofing for food service establishments"
        },
        {
          name: "Loft insulation removal due to contamination",
          from: 0,
          description: "Complete removal and replacement of contaminated insulation - quote depends on area size"
        }
      ]
    },
    guarantee: {
      isOffered: true,
      duration: "6 months from final treatment",
      conditions: [
        "All identified entry points must be sealed within 14 days of recommendation",
        "Property must remain accessible for all scheduled treatment visits",
        "Environmental modifications (removing food/water sources) must be implemented",
        "Drainage issues identified during survey must be addressed within 30 days",
        "Client must follow all preparation and aftercare instructions"
      ],
      exclusions: [
        "Does not cover infestations originating from neighboring properties or shared drainage systems",
        "Void if new structural defects allow re-entry from external sources",
        "Not applicable where ongoing construction or renovation creates new access points",
        "Does not cover damage caused by rats before or during treatment",
        "Guarantee void if recommended proofing works are not completed"
      ]
    },
    treatmentInfo: {
      preparation: [
        "Do not disturb rat signs - leave droppings and damage for technician assessment",
        "Map out all areas where rats have been seen or heard",
        "Check with neighbors about rat activity in adjacent properties",
        "Remove all accessible food sources including pet food and bird feed",
        "Clear areas around potential entry points for technician access",
        "Secure waste storage areas and repair damaged bins",
        "Remove garden debris and overgrown vegetation near building",
        "Ensure all family members and pets are away during treatment application"
      ],
      methodology: [
        "Comprehensive external and internal property survey including drainage inspection",
        "Identification of all entry points using specialized detection equipment",
        "Strategic placement of professional-grade rodenticide baits in secure bait boxes",
        "Treatment of sewer systems and drainage networks where rats originate",
        "Installation of monitoring stations to track population reduction",
        "Follow-up visits at 7-10 day intervals to assess effectiveness and replenish baits",
        "Removal and disposal of deceased rats from accessible areas",
        "Detailed proofing recommendations with prioritized action plan",
        "Final inspection and removal of all baiting equipment"
      ],
      aftercare: [
        "Do not move or tamper with bait stations during treatment period",
        "Maintain strict food hygiene and storage protocols for minimum 60 days",
        "Seal any new gaps or holes in building exterior immediately",
        "Keep vegetation trimmed back from building perimeter",
        "Install door sweeps and repair damaged door seals",
        "Maintain secure waste storage with tight-fitting lids",
        "Monitor drainage systems for signs of new rat activity",
        "Report any new rat signs immediately during guarantee period",
        "Implement all recommended proofing measures within specified timeframes"
      ],
      productsUsed: [
        {
          category: "Professional Anticoagulant Rodenticides",
          purpose: "High-strength baits specifically formulated for rat elimination under CRRU regulations"
        },
        {
          category: "Bromadiolone and Difenacoum formulations",
          purpose: "Multi-dose anticoagulants effective against rats resistant to warfarin-based products"
        },
        {
          category: "Heavy-duty tamper-resistant bait stations",
          purpose: "Secure deployment systems designed for outdoor use and rat-strength security"
        },
        {
          category: "Tracking powder for drainage systems",
          purpose: "Specialized formulations for treating sewer networks and inaccessible void spaces"
        },
        {
          category: "Electronic monitoring systems",
          purpose: "Digital tracking of bait consumption and rat activity patterns for treatment optimization"
        }
      ]
    }
  },
  {
    id: "mice",
    name: "Mice",
    scientificName: "Mus musculus",
    category: "rodents",
    commonNames: ["House mouse", "Field mouse", "Common mouse"],
    description: "The discovery of mice in your home can be surprisingly distressing - these small, seemingly harmless creatures actually pose significant health risks and can cause substantial property damage while reproducing at an alarming rate. At Pest Pro London, we understand that mice problems often start with subtle signs that gradually escalate into a serious infestation, leaving homeowners feeling overwhelmed and unsure where to turn. Despite their diminutive size, mice can contaminate far more food than they consume, spread dangerous diseases through their droppings and urine, and cause thousands of pounds in damage by gnawing through electrical cables, insulation, and structural materials. Our experienced technicians have helped countless London families eliminate mouse infestations permanently, understanding that what appears to be a minor problem can quickly become a major crisis if not addressed with professional expertise and proven elimination strategies.",
    identification: {
      size: "Body: 6-9cm, Tail: 7-10cm",
      color: "Light brown to grey fur, lighter underside",
      distinguishingFeatures: [
        "Large ears relative to body",
        "Pointed snout",
        "Small black eyes",
        "Tail as long as body"
      ],
      soundsMade: ["High-pitched squeaking", "Light scratching", "Rustling in walls"],
      droppings: "Small, dark, rice grain-sized, 3-6mm long",
      tracks: "Small footprints, 10mm or less"
    },
    behavior: {
      activityTime: "Nocturnal, most active just after dusk",
      nestingHabits: "Build nests close to food sources using soft materials",
      feedingHabits: "Eat 3-4g daily, prefer cereals and seeds",
      lifespan: "9-12 months indoors",
      reproductionRate: "5-10 litters per year, 4-8 pups per litter"
    },
    habitat: {
      preferredEnvironment: ["Kitchens", "Pantries", "Wall voids", "Under appliances"],
      commonHidingSpots: [
        "Behind kitchen cabinets",
        "Under sinks",
        "In airing cupboards",
        "Loft insulation",
        "Behind fridges"
      ],
      signsOfInfestation: [
        "Droppings near food",
        "Gnawed packets",
        "Grease marks",
        "Musty odor",
        "Shredded paper/fabric"
      ]
    },
    risks: {
      healthRisks: [
        "Salmonella",
        "Hantavirus",
        "Lymphocytic choriomeningitis",
        "Allergies from droppings"
      ],
      propertyDamage: [
        "Contaminated food",
        "Damaged packaging",
        "Gnawed furniture",
        "Electrical damage",
        "Nesting in appliances"
      ],
      businessRisks: [
        "Food contamination",
        "Failed inspections",
        "Customer complaints",
        "Stock damage"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Seal gaps larger than 5mm",
        "Remove nesting materials",
        "Reduce clutter",
        "Store food properly"
      ],
      exclusionMethods: [
        "Steel wool in gaps",
        "Mesh over vents",
        "Door brushes",
        "Seal pipe entries"
      ],
      cleaningTips: [
        "Vacuum regularly",
        "Clean under appliances",
        "Wipe surfaces daily",
        "Store dry goods in containers"
      ],
      landscapingTips: [
        "Clear compost heaps",
        "Remove bird feeders",
        "Trim grass short",
        "Remove ground cover"
      ]
    },
    treatment: {
      professionalMethods: [
        "Anticoagulant baits",
        "Snap traps",
        "Glue boards",
        "Ultrasonic devices",
        "Tracking dust"
      ],
      timeline: "2-3 visits over 2 weeks typically",
      preparation: [
        "Clear areas for access",
        "Remove alternative food",
        "Note activity areas",
        "Protect children/pets"
      ],
      followUp: "Check and rebait after 1 week, monitor for 1 month"
    },
    londonSpecific: {
      commonBoroughs: ["Kensington & Chelsea - luxury apartments where central heating creates ideal year-round conditions", "Westminster - high-density housing with abundant restaurant food sources nearby", "Camden - Victorian conversions with multiple entry points and connecting wall cavities", "Islington - period properties converted to flats sharing drainage and utility systems", "Hackney - mixed residential/commercial areas providing constant food sources", "Greenwich - historic buildings with original construction gaps and aging seals", "Lambeth - ground floor flats in converted houses particularly vulnerable to garden invasions", "Wandsworth - family homes with children create perfect conditions through food spillage"],
      seasonalActivity: {
        spring: "Breeding activity increases as temperatures warm and food becomes more abundant. Pregnant females seek warm, secure nesting sites in kitchen voids and airing cupboards. Garden population starts exploring into adjacent properties.",
        summer: "Peak breeding period with new litters appearing every 3 weeks. Young mice begin dispersing to find new territories, often discovered in bedrooms and living areas. Outdoor populations expand, increasing pressure on surrounding homes.",
        autumn: "Mass invasion season as outdoor temperatures drop and natural food sources diminish. Properties that never had mice suddenly experience infestations as populations seek warm indoor shelter for winter survival.",
        winter: "Maximum domestic activity as mice concentrate in heated areas like boiler cupboards, kitchen appliances, and roof spaces. Nesting activity peaks with shredded materials found throughout the property."
      },
      propertyTypes: ["Victorian conversions where partition walls create extensive runway systems between units", "Restaurant kitchens with warm conditions, food debris, and multiple hiding spots behind equipment", "Student accommodation where irregular cleaning and food storage habits create perfect breeding conditions", "Older flats in mansion blocks with communal areas and shared utilities providing access routes", "Ground floor properties with direct garden access through gaps under doors and utility penetrations", "Period houses converted to multiple occupancy with shared kitchens and poor housekeeping standards", "Properties near construction sites where disturbance drives mice to seek alternative accommodation", "Homes with pets where food bowls and spillage provide consistent food sources"]
    },
    urgencyLevel: "medium",
    relatedPests: ["rats"],
    pricing: {
      mainService: {
        from: 190,
        unit: "for 2 visits",
        description: "Complete mice elimination program including initial treatment and follow-up visit"
      },
      additionalServices: [
        {
          name: "Property proofing to prevent future access",
          from: 90,
          description: "Professional sealing of entry points using steel wool, mesh, and expanding foam"
        },
        {
          name: "Biocidal spray treatment for contaminated areas", 
          from: 110,
          description: "Disinfection of areas contaminated by mouse droppings and urine"
        },
        {
          name: "Loft insulation removal & replacement",
          from: 0,
          description: "Cost depends on loft size - call for quote. Includes safe removal, disinfection, and new insulation installation"
        }
      ]
    },
    guarantee: {
      isOffered: true,
      duration: "3 months from final treatment",
      conditions: [
        "Property preparation instructions must be followed completely before treatment",
        "All recommended aftercare measures must be implemented",
        "Access must be provided for all scheduled follow-up visits",
        "Any recommended proofing work must be completed within 30 days"
      ],
      exclusions: [
        "Does not cover future infestations from external sources",
        "Not applicable in flats, terraced houses, or multi-occupancy buildings where mice may spread from adjoining premises",
        "Void if new food sources are introduced or property conditions change",
        "Does not cover structural damage or dead mice in inaccessible areas"
      ]
    },
    treatmentInfo: {
      preparation: [
        "Leave any droppings or damage for technician inspection",
        "Keep a record of where mice have been seen",
        "Check if neighbours have reported mice problems",
        "Remove all accessible food sources including pet food",
        "Clean crumbs from under cooker and kitchen cabinets",
        "Do not feed wild birds during treatment period",
        "Do not put food scraps on compost heap",
        "Clear access routes to affected areas"
      ],
      methodology: [
        "Comprehensive property survey to identify entry points and activity areas",
        "Strategic placement of CRRU-approved rodenticide baits in tamper-resistant bait stations",
        "Treatment of wall cavities and void spaces where mice travel",
        "Multiple bait formulations used to overcome bait shyness",
        "Follow-up visit after 7-14 days to assess progress and replenish baits",
        "Final visit to remove all baiting stations and dispose of any deceased mice",
        "Post-treatment advice on prevention and proofing recommendations"
      ],
      aftercare: [
        "Do not disturb bait stations between visits",
        "Continue to restrict food sources for minimum 30 days",
        "Maintain high standards of hygiene and food storage",
        "Seal any new gaps or entry points immediately",
        "Store dry goods in metal or thick plastic containers",
        "Keep outdoor areas clear of food waste and fallen fruit",
        "Monitor for signs of new activity and report immediately",
        "Implement recommended proofing measures within 30 days"
      ],
      productsUsed: [
        {
          category: "Second Generation Anticoagulant Rodenticides (SGARs)",
          purpose: "Primary elimination of mouse colonies - professionally applied indoors only under CRRU stewardship"
        },
        {
          category: "Difenacoum-based rodenticide baits",
          purpose: "Effective against mice colonies with lower secondary poisoning risk"
        },
        {
          category: "Tamper-resistant bait stations",
          purpose: "Safe deployment of rodenticides protecting children, pets, and non-target species"
        },
        {
          category: "Tracking powder formulations",
          purpose: "Treatment of wall voids and inaccessible areas where conventional baits cannot be placed"
        }
      ]
    }
  },
  {
    id: "cockroaches",
    name: "Cockroaches",
    scientificName: "Blattella germanica & Periplaneta americana",
    category: "insects",
    commonNames: ["German cockroach", "American cockroach", "Oriental cockroach", "Brown-banded cockroach", "Common cockroach"],
    description: "Few pest sightings are as alarming as spotting a cockroach scurrying across your kitchen floor - it's a moment that makes your skin crawl and immediately raises concerns about hygiene and health. We completely understand the revulsion and panic that comes with discovering these resilient insects in your home or business. At Pest Pro London, we recognize that cockroaches represent one of the most serious pest threats, capable of contaminating food, spreading dangerous diseases, and multiplying rapidly in the warm, hidden spaces of London's buildings. These ancient survivors require immediate, professional intervention because home remedies simply cannot eliminate entire colonies hiding in wall voids and inaccessible areas.",
    identification: {
      size: "German cockroach: 12-15mm, American cockroach: 35-50mm, Oriental cockroach: 20-30mm, Brown-banded: 10-14mm",
      color: "German: light brown with dark stripes, American: reddish-brown, Oriental: dark brown to black, Brown-banded: brown with light bands",
      distinguishingFeatures: [
        "Distinctive flattened, oval body designed for hiding in cracks",
        "Long, thread-like antennae longer than half their body length",
        "Six spiny legs adapted for rapid movement on various surfaces",
        "Leathery forewings (tegmina) that may or may not cover functional hind wings",
        "Prominent compound eyes and chewing mouthparts",
        "Cerci (tail-like appendages) at rear of abdomen",
        "German cockroaches have two dark parallel stripes behind the head",
        "American cockroaches are the largest and can actually fly short distances"
      ],
      soundsMade: ["Distinctive clicking or chirping sounds during mating", "Rustling noise when disturbed from hiding spots", "Scratching sounds in wall voids during heavy infestations"],
      droppings: "Small, dark cylindrical pellets resembling ground coffee or black pepper, sticky brown smear marks on surfaces",
      tracks: "Greasy brown smear marks along walls, egg cases (oothecae) resembling small brown purses, shed skins near harboring areas"
    },
    behavior: {
      activityTime: "Strictly nocturnal, most active 2-4 hours after lights out, scatter immediately when lights turned on",
      nestingHabits: "Gregarious insects that aggregate in warm, moist, dark areas, prefer temperatures 25-30°C with high humidity",
      feedingHabits: "Omnivorous scavengers eating virtually anything organic - food scraps, grease, soap, glue, paper, fabric, and even other cockroaches",
      lifespan: "German: 100-200 days, American: 12-24 months, Oriental: 6-12 months",
      reproductionRate: "German females produce 4-8 egg cases containing 30-40 eggs each, American females produce 10+ cases with 14-16 eggs, exponential population growth"
    },
    habitat: {
      preferredEnvironment: [
        "Commercial kitchens and food preparation areas",
        "Warm bathrooms with consistent moisture",
        "Basements and cellars with heating systems",
        "Heating ducts and boiler rooms",
        "Drain systems and sewers",
        "Electrical equipment that generates heat",
        "Garbage storage and waste disposal areas"
      ],
      commonHidingSpots: [
        "Behind and under refrigerators and other appliances",
        "Inside electrical appliances (microwaves, toasters, coffee machines)",
        "Under sinks and around plumbing penetrations",
        "Inside cracks and crevices in walls, especially near heat sources",
        "Behind cookers and ovens where grease accumulates",
        "Electrical junction boxes and switch plates",
        "Inside cardboard boxes and packaging materials",
        "Void spaces behind tiles and under flooring",
        "Inside furniture joints and upholstered seams"
      ],
      signsOfInfestation: [
        "Live cockroaches seen during daylight hours (indicates severe infestation)",
        "Egg cases (oothecae) found in corners and crevices",
        "Dark fecal spots and smear marks on walls and surfaces",
        "Strong, distinctive musty or oily odor",
        "Shed skins and body parts near hiding areas",
        "Damage to food packaging and organic materials",
        "Grease marks and sticky residue on walls",
        "Dead cockroaches found in sticky traps or around treated areas"
      ]
    },
    risks: {
      healthRisks: [
        "Salmonella poisoning from contaminated food preparation surfaces",
        "E. coli infections leading to severe gastroenteritis",
        "Dysentery and other intestinal diseases",
        "Hepatitis A transmission through fecal contamination",
        "Severe allergies and asthma exacerbation from shed skins and droppings",
        "Food poisoning from bacterial contamination",
        "Childhood asthma development linked to cockroach allergens",
        "Respiratory complications in sensitive individuals"
      ],
      propertyDamage: [
        "Extensive food contamination requiring disposal",
        "Damage to fabrics, paper, and leather materials",
        "Permanent staining of surfaces from fecal matter",
        "Unpleasant odors permeating affected areas",
        "Damage to electrical equipment from nesting inside appliances",
        "Contamination of stored goods and packaging",
        "Reduced property value due to infestation history"
      ],
      businessRisks: [
        "Immediate health code violations and closure orders",
        "Catastrophic reputation damage and loss of customer trust",
        "Legal liability and potential lawsuits from affected customers",
        "Loss of food service licenses and permits",
        "Insurance claims and increased premiums",
        "Staff health issues and potential compensation claims",
        "Product recalls and regulatory enforcement action",
        "Complete business closure in severe cases"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Eliminate all moisture sources and fix leaking pipes immediately",
        "Maintain optimal ventilation to reduce humidity below 60%",
        "Remove all food debris and maintain pristine cleanliness",
        "Store all food in sealed, cockroach-proof containers",
        "Regular deep cleaning of all grease and organic residue",
        "Install dehumidifiers in moisture-prone areas",
        "Maintain optimal lighting to discourage settlement",
        "Regular pest monitoring and early detection systems"
      ],
      exclusionMethods: [
        "Seal all cracks and crevices with appropriate caulking materials",
        "Install brush strips and door sweeps on all external doors",
        "Screen all drains and install drain covers",
        "Seal all pipe penetrations and utility entry points",
        "Install fine mesh over air vents and ventilation openings",
        "Repair damaged building fabric immediately",
        "Use cockroach-proof materials in construction and renovation",
        "Regular inspection and maintenance of building envelope"
      ],
      cleaningTips: [
        "Daily deep cleaning of all food preparation and storage areas",
        "Remove all grease buildup from cooking surfaces and equipment",
        "Empty and clean bins nightly, using tight-fitting lids",
        "Clean behind and under all appliances weekly",
        "Steam clean floors and surfaces to eliminate pheromone trails",
        "Wash dishes immediately after use - never leave overnight",
        "Clean appliance motors and electrical areas monthly",
        "Vacuum all cracks and crevices where debris accumulates"
      ],
      landscapingTips: [
        "Remove all organic debris and refuse from around buildings",
        "Fix exterior drainage to prevent moisture accumulation",
        "Maintain building exterior to eliminate entry points",
        "Control exterior lighting to avoid attracting cockroaches",
        "Keep vegetation trimmed away from building walls",
        "Secure all outdoor waste storage areas",
        "Regular maintenance of external drainage systems",
        "Remove potential outdoor harboring sites"
      ]
    },
    treatment: {
      professionalMethods: [
        "Professional gel baits targeted to specific cockroach species",
        "Insect Growth Regulators (IGRs) to disrupt reproduction cycles",
        "Residual spray treatments for long-term protection",
        "Dust formulations for wall voids and inaccessible areas",
        "Monitoring stations for ongoing population assessment",
        "ULV fogging for severe infestations",
        "Crack and crevice injection treatments",
        "Integrated Pest Management (IPM) protocols"
      ],
      timeline: "Emergency response within 4 hours, initial treatment within 24 hours, typically requires 3-4 visits over 6-8 weeks for complete elimination",
      preparation: [
        "Complete deep cleaning of all affected areas",
        "Remove all clutter and unnecessary items",
        "Empty all cabinets and storage areas for inspection",
        "Fix all water leaks and moisture problems immediately",
        "Provide comprehensive access to all potential harboring areas",
        "Document all sighting locations with photographs",
        "Secure all food items in sealed containers",
        "Ensure adequate ventilation during treatment"
      ],
      followUp: "Weekly monitoring for first month, monthly inspections for 3-6 months, quarterly preventive maintenance recommended"
    },
    londonSpecific: {
      commonBoroughs: [
        "Tower Hamlets (dense housing and commercial food establishments)",
        "Newham (high-density residential areas and restaurants)",
        "Hackney (mixed commercial and residential with older building stock)",
        "Southwark (food markets and riverside properties)",
        "Westminster (high concentration of restaurants and hotels)",
        "Camden (student accommodation and food service areas)",
        "Lambeth (social housing and commercial kitchens)",
        "Brent (diverse food establishments and dense housing)"
      ],
      seasonalActivity: {
        spring: "Increased activity as temperatures rise and breeding accelerates",
        summer: "Peak breeding season with optimal conditions for rapid population growth",
        autumn: "Intensive indoor migration seeking warm environments for winter survival",
        winter: "Concentrated populations in heated buildings with continuous breeding cycles"
      },
      propertyTypes: [
        "Restaurant kitchens and commercial food preparation facilities",
        "High-rise tower blocks with central heating systems",
        "Food processing and packaging facilities",
        "Older apartment buildings with multiple utility penetrations",
        "Hotels and hospitality venues with 24-hour food service",
        "Student accommodation with shared kitchen facilities",
        "Care homes and institutional catering facilities",
        "Social housing with moisture and maintenance issues"
      ]
    },
    urgencyLevel: "emergency",
    relatedPests: ["ants", "silverfish", "german-cockroach"],
    pricing: {
      mainService: {
        from: 185,
        unit: "for 3 visits",
        description: "Complete cockroach elimination program including survey, initial treatment, and follow-up visits"
      },
      additionalServices: [
        {
          name: "Emergency 4-hour response",
          from: 75,
          description: "Priority next-day treatment for urgent commercial or residential infestations"
        },
        {
          name: "Commercial kitchen deep treatment",
          from: 350,
          description: "Comprehensive treatment for food service establishments including equipment dismantling"
        },
        {
          name: "ULV fogging for severe infestations",
          from: 150,
          description: "Ultra-low volume fogging treatment for wide-area coverage in severe cases"
        },
        {
          name: "Monthly monitoring and maintenance contract",
          from: 95,
          description: "Ongoing professional monitoring with bait station maintenance and reporting"
        }
      ]
    },
    guarantee: {
      isOffered: true,
      duration: "6 months from final treatment",
      conditions: [
        "All identified moisture sources must be eliminated within 7 days",
        "Property must be kept clean with daily removal of food debris",
        "All access points identified during survey must be sealed within 14 days", 
        "Client must maintain proper sanitation standards throughout treatment period",
        "Property must be accessible for all scheduled monitoring visits",
        "Any new structural defects allowing entry must be reported immediately"
      ],
      exclusions: [
        "Does not cover new infestations from neighboring properties in multi-unit buildings",
        "Void if recommended sanitation standards are not maintained",
        "Not applicable where ongoing moisture problems are not addressed",
        "Does not cover infestations in properties with structural disrepair",
        "Guarantee void if treatment areas are not kept accessible",
        "Excludes reintroduction via infested items brought into treated property"
      ]
    },
    treatmentInfo: {
      preparation: [
        "Complete deep cleaning of all food preparation and storage areas",
        "Remove all clutter and stored items from affected areas",
        "Empty all kitchen cabinets and bathroom storage for inspection access",
        "Fix all water leaks and moisture sources immediately",
        "Pull appliances away from walls to expose harboring areas",
        "Bag and remove all contaminated food items",
        "Document all sightings with time, date, and location photos",
        "Ensure all pets and food are secured during treatment"
      ],
      methodology: [
        "Comprehensive inspection using specialist detection equipment and monitoring",
        "Identification of species and population assessment for targeted treatment approach",
        "Strategic placement of professional gel baits in identified harboring areas",
        "Application of residual insecticides to cracks, crevices, and runway areas",
        "Dust treatments in wall voids and inaccessible spaces where liquids cannot reach",
        "Installation of Insect Growth Regulators (IGRs) to disrupt breeding cycles",
        "ULV fogging for severe infestations requiring immediate population reduction",
        "Monitoring station placement for ongoing population assessment and early detection",
        "Follow-up treatments at 14-21 day intervals targeting newly hatched populations"
      ],
      aftercare: [
        "Maintain strict cleanliness with daily removal of food debris and moisture",
        "Keep all bait stations undisturbed and report any tampering immediately",
        "Continue regular deep cleaning behind appliances and in hidden areas",
        "Monitor and report any new cockroach sightings during guarantee period",
        "Maintain proper food storage in sealed containers",
        "Ensure immediate repair of any new moisture sources or structural damage",
        "Regular replacement of monitoring station adhesive pads as directed",
        "Report any changes in property use or structural modifications"
      ],
      productsUsed: [
        {
          category: "Professional gel baits",
          purpose: "Species-specific attraction and elimination targeting German, American, and Oriental cockroaches"
        },
        {
          category: "Insect Growth Regulators (IGR)",
          purpose: "Disrupts molting and reproduction preventing immature cockroaches from reaching breeding age"
        },
        {
          category: "Residual pyrethroid insecticides",
          purpose: "Long-lasting barrier treatments for cracks, crevices, and cockroach highways"
        },
        {
          category: "Desiccant dust formulations",
          purpose: "Wall void treatments and areas where moisture resistance is required"
        },
        {
          category: "ULV fogging solutions",
          purpose: "Wide-area knockdown treatment for severe infestations requiring immediate population reduction"
        }
      ]
    }
  },
  {
    id: "bed-bugs",
    name: "Bed Bugs",
    scientificName: "Cimex lectularius",
    category: "insects",
    commonNames: ["Common bed bug", "House bug", "Wall louse", "Crimson rambler", "Heavy dragoon"],
    description: "Discovering bed bugs in your home can be incredibly distressing, and we understand the anxiety this brings. At Pest Pro London, we've helped thousands of London residents reclaim their peace of mind with our expert bed bug identification, treatment, and prevention services. These resilient parasitic insects belong to the family Cimicidae and are masters of hiding, feeding exclusively on blood while remaining largely undetected. Despite their small size, bed bugs can cause significant emotional distress and sleepless nights. The good news? With proper professional treatment, bed bug infestations can be completely eliminated.",
    identification: {
      size: "Adults: 4-7mm (apple seed size), Nymphs: 1-4.5mm, Eggs: 1mm (grain of salt)",
      color: "Unfed: light brown to mahogany, Fed: dark reddish-brown to deep brown, balloon-like when engorged",
      distinguishingFeatures: [
        "Flat, broad oval body (like a shield) when unfed",
        "Swollen, elongated body when recently fed",
        "Six legs with no wings - they cannot fly or jump",
        "Short, club-shaped antennae with four segments",
        "Beak-like feeding tube (proboscis) tucked under head",
        "Small compound eyes on sides of head",
        "Fine golden hairs covering body (visible under magnification)",
        "Distinctive sweet, musty almond-like odor when crushed"
      ],
      soundsMade: ["Generally silent", "Rare clicking sounds when moving in large groups", "Slight rustling in severe infestations"],
      droppings: "Dark brown to black spots (like ink stains), rusty or reddish stains on bedding, small blood smears",
      tracks: "Dark fecal spots along mattress seams, sweet musty odor in heavily infested rooms, shed skins (exoskeletons) near hiding spots"
    },
    behavior: {
      activityTime: "Primarily nocturnal, most active between 2-5 AM when CO2 levels peak, emerge 1-3 hours before dawn",
      nestingHabits: "Aggregate in tight cracks and crevices within 8 feet of sleeping areas, prefer wood and fabric over metal and plastic",
      feedingHabits: "Feed every 5-10 days for 3-12 minutes, can survive 12+ months without feeding, attracted to body heat and CO2",
      lifespan: "6-12 months under favorable conditions, up to 18 months in cooler temperatures",
      reproductionRate: "Females lay 1-7 eggs daily, 200-500 eggs in lifetime, eggs hatch in 6-10 days at room temperature"
    },
    habitat: {
      preferredEnvironment: [
        "Bedrooms and sleeping areas (primary)",
        "Hotels, hostels, and temporary accommodation",
        "Student accommodation and shared housing",
        "Public transport (buses, trains, aircraft)",
        "Cinemas, theatres, and waiting areas",
        "Offices with sleeping areas or rest rooms",
        "Any location where people remain stationary for extended periods"
      ],
      commonHidingSpots: [
        "Mattress seams, tags, and button tufts",
        "Box spring assemblies and bed frames",
        "Headboards attached to walls",
        "Bedside tables and furniture joints",
        "Upholstered chairs and sofas in bedrooms",
        "Drapery folds and curtain hems",
        "Behind loose wallpaper and wall-mounted pictures",
        "Electrical outlets and switch plates near beds",
        "Carpet edges and under loose carpet",
        "Books, clocks, and personal items near beds",
        "Cracks in walls, particularly behind beds",
        "Inside hollow bed posts and furniture legs"
      ],
      signsOfInfestation: [
        "Bite marks in lines or clusters (breakfast, lunch, dinner pattern)",
        "Dark brown or red spots on sheets and pillowcases",
        "Rusty bloodstains from crushed bugs on bedding",
        "Dark fecal spots on mattress seams and nearby surfaces",
        "Sweet, musty, coriander-like odor in heavily infested rooms",
        "Shed skins (molted exoskeletons) near hiding areas",
        "Live bugs visible during inspection",
        "Small, dark spots on walls near the bed",
        "Unexplained itchy welts, especially upon waking",
        "Small blood spots on pillowcases from scratched bites"
      ]
    },
    risks: {
      healthRisks: [
        "Allergic reactions ranging from mild to severe",
        "Secondary bacterial infections from excessive scratching",
        "Psychological distress, anxiety, and paranoia",
        "Sleep deprivation and insomnia",
        "Social isolation and embarrassment",
        "Potential anemia in severe infestations (rare)",
        "Asthma exacerbation from allergens",
        "Post-traumatic stress in sensitive individuals"
      ],
      propertyDamage: [
        "Permanent staining of mattresses, bedding, and upholstery",
        "Necessity to discard heavily infested furniture",
        "Damage to personal belongings during treatment",
        "Costs for specialized cleaning and laundering",
        "Potential damage to electronics during heat treatment",
        "Need for extensive redecoration in severe cases",
        "Reduced property value if infestation becomes known"
      ],
      businessRisks: [
        "Immediate threat to guest safety and comfort",
        "Devastating online reviews and reputation damage",
        "Legal liability for guest compensation",
        "Emergency room closures and lost revenue",
        "Potential lawsuits from affected guests",
        "Health department violations and fines",
        "Staff morale and productivity issues",
        "Increased insurance premiums",
        "Long-term customer loss and reduced bookings"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Install mattress and box spring encasements with certified bed bug-proof zippers",
        "Reduce bedroom clutter to eliminate hiding spots",
        "Use hard-sided luggage when traveling",
        "Keep beds away from walls and ensure bedding doesn't touch the floor",
        "Use light-colored sheets to spot bugs more easily",
        "Install bed bug interceptors under bed legs",
        "Seal cracks and crevices in walls, particularly around the bed area",
        "Choose metal bed frames over wooden ones when possible"
      ],
      exclusionMethods: [
        "Seal cracks and crevices with appropriate caulk",
        "Install door sweeps on bedroom doors",
        "Repair holes in walls and loose wallpaper",
        "Caulk gaps around baseboards and crown molding",
        "Seal penetrations around pipes and electrical conduits",
        "Use bed bug-proof mattress covers",
        "Install weatherstripping around windows",
        "Block gaps in flooring and wall junctions"
      ],
      cleaningTips: [
        "Vacuum mattress seams, bed frames, and surrounding areas weekly",
        "Wash bedding in hot water (60°C minimum) weekly",
        "Dry clothes and bedding on high heat for 30+ minutes",
        "Steam clean carpets, curtains, and upholstery regularly",
        "Declutter bedrooms to reduce hiding spots",
        "Inspect and clean second-hand furniture before bringing inside",
        "Use hard-surface flooring instead of carpets when possible",
        "Wash and heat-dry clothes immediately after travel"
      ],
      landscapingTips: [
        "Not applicable - bed bugs are strictly indoor pests that do not survive outdoors in the UK climate"
      ]
    },
    treatment: {
      professionalMethods: [
        "Whole-room heat treatments (most effective - 45-50°C for 4+ hours)",
        "Targeted steam treatments for immediate killing",
        "Professional-grade residual insecticides (multiple applications)",
        "Desiccant dusts (diatomaceous earth, silica gel) for long-term control",
        "Cold treatments (cryonite) for sensitive areas",
        "Mattress and furniture encasements as part of integrated approach",
        "Monitoring devices and interceptor traps",
        "Fumigation for severe infestations (rare)",
        "Insect growth regulators to disrupt breeding cycles",
        "Targeted crack and crevice treatments"
      ],
      timeline: "Initial assessment within 24 hours, first treatment within 48 hours, follow-up treatments at 2-3 week intervals, complete elimination typically achieved in 6-12 weeks",
      preparation: [
        "Wash all clothing and bedding in hot water (60°C) and dry on high heat",
        "Bag and seal cleaned items in bed bug-proof bags",
        "Remove all items from under and around beds",
        "Pull beds away from walls and remove bedding",
        "Vacuum all cracks, crevices, and hiding spots thoroughly",
        "Disassemble bed frames if requested by technician",
        "Ensure access to all areas around sleeping spaces",
        "Secure pets in untreated areas during service",
        "Document infestation areas with photos for technician reference"
      ],
      followUp: "Mandatory inspection 7-14 days after initial treatment, additional treatments as needed, final clearance inspection 4-6 weeks post-treatment, 6-month monitoring program available"
    },
    londonSpecific: {
      commonBoroughs: [
        "Westminster (high hotel density)",
        "Kensington & Chelsea (short-term rentals)",
        "Camden (student accommodation)",
        "Tower Hamlets (high-density housing)",
        "Islington (Victorian conversions)",
        "Hackney (shared accommodation)",
        "Southwark (tourist areas near attractions)",
        "Lambeth (transport hubs)"
      ],
      seasonalActivity: {
        spring: "Increased travel season brings new infestations from international visitors, peak university term brings student movement",
        summer: "Highest activity due to tourism peak, warmer temperatures accelerate breeding cycles, summer holidays create apartment-to-apartment spread",
        autumn: "University term restarts create major movement in student areas, return from summer holidays introduces new populations, pre-winter seeking of warm indoor environments",
        winter: "Indoor heating systems maintain optimal breeding temperatures, holiday travel continues introductions, concentration indoors increases contact and spread rates"
      },
      propertyTypes: [
        "Tourist hotels and boutique accommodations",
        "Student halls and shared houses",
        "Short-term rental properties (Airbnb)",
        "Victorian terraced houses converted to flats",
        "High-rise council and private housing estates",
        "Homeless shelters and temporary housing",
        "Backpacker hostels and budget accommodations",
        "Nursing homes and care facilities",
        "Transport accommodation (crew quarters)"
      ]
    },
    urgencyLevel: "emergency",
    relatedPests: ["fleas", "carpet-beetles", "booklice"],
    pricing: {
      mainService: {
        from: 450,
        unit: "for 2-3 treatments",
        description: "Complete bed bug elimination program including initial assessment, treatment, and follow-up services"
      },
      additionalServices: [
        {
          name: "Heat treatment (chemical-free)",
          from: 650,
          description: "Whole-room heat treatment reaching 45-50°C - most effective single-day solution"
        },
        {
          name: "Emergency next-day response",
          from: 100,
          description: "Priority assessment and initial treatment within 4 hours of contact"
        },
        {
          name: "Mattress and furniture encasements",
          from: 80,
          description: "Professional-grade bed bug proof covers for mattresses, box springs, and furniture"
        },
        {
          name: "Preparation service for elderly/disabled clients",
          from: 150,
          description: "Full preparation including washing, bagging, and furniture moving"
        }
      ]
    },
    guarantee: {
      isOffered: true,
      duration: "6 months from final treatment",
      conditions: [
        "All preparation instructions must be followed exactly prior to each treatment",
        "Client must complete required washing and heat-drying of all clothing and bedding",
        "All recommended mattress and furniture encasements must be installed",
        "Property must remain accessible for all scheduled treatment visits",
        "Client must not introduce new second-hand furniture during treatment period",
        "Any travel during treatment must be reported and precautions followed"
      ],
      exclusions: [
        "Does not cover new infestations introduced from external sources after treatment completion",
        "Void if preparation instructions are not followed completely before any treatment visit",
        "Not applicable if client introduces untreated second-hand furniture or clothing",
        "Does not cover bed bugs introduced through travel during active treatment",
        "Guarantee void if encasements are removed or damaged during treatment period",
        "Excludes infestations spreading from neighboring units in multi-occupancy buildings"
      ]
    },
    treatmentInfo: {
      preparation: [
        "Wash ALL clothing, bedding, and fabric items in 60°C water followed by 30+ minute high-heat drying",
        "Bag all cleaned items in clear plastic bags and seal tightly",
        "Remove all items from under beds, nightstands, and nearby furniture",
        "Disassemble bed frames if requested by technician",
        "Vacuum all mattress seams, bed frames, and surrounding areas thoroughly",
        "Pull beds and furniture away from walls to allow treatment access",
        "Remove all decorative items, clocks, and books from bedroom areas",
        "Ensure pets and family members are out of treatment areas during service",
        "Document infestation areas with photos for technician assessment"
      ],
      methodology: [
        "Comprehensive inspection using specialized detection equipment and trained dogs if available",
        "Targeted application of residual insecticides to all identified harboring areas",
        "Steam treatment of mattress seams, bed frames, and upholstered furniture",
        "Desiccant dust application in wall voids and inaccessible cracks",
        "Installation of monitoring devices to track treatment effectiveness",
        "Heat treatment option: raising room temperature to 45-50°C for 4+ hours",
        "Application of insect growth regulators to disrupt breeding cycles",
        "Follow-up treatments at 2-3 week intervals to target newly hatched nymphs",
        "Final inspection and clearance confirmation 4-6 weeks after last treatment"
      ],
      aftercare: [
        "Do not remove or wash mattress/furniture encasements for minimum 18 months",
        "Continue weekly washing of bedding in hot water and high-heat drying",
        "Maintain clutter-free environment around sleeping areas",
        "Use bed bug interceptors under bed legs as ongoing monitoring",
        "Inspect luggage and clothing after any travel",
        "Report any suspicious bites or signs immediately during guarantee period",
        "Avoid bringing second-hand furniture into home during guarantee period",
        "Continue weekly vacuuming of mattress seams and bed frames",
        "Replace interceptors every 3 months or when filled with debris"
      ],
      productsUsed: [
        {
          category: "Residual pyrethroid insecticides",
          purpose: "Long-lasting kill and repellent effects in treated areas with 8-12 week residual activity"
        },
        {
          category: "Diatomaceous earth and silica gel dusts",
          purpose: "Desiccant dusts for wall voids and areas where liquid sprays cannot reach"
        },
        {
          category: "Insect growth regulators (IGR)",
          purpose: "Disrupts molting and reproduction cycles preventing nymph development to adults"
        },
        {
          category: "Steam and heat treatment systems",
          purpose: "Chemical-free killing method reaching temperatures lethal to all bed bug life stages"
        },
        {
          category: "Monitoring and detection devices",
          purpose: "Passive and active monitors to confirm elimination and detect any surviving populations"
        }
      ]
    }
  },
  {
    id: "wasps",
    name: "Wasps",
    scientificName: "Vespula vulgaris & Vespula germanica",
    category: "insects",
    commonNames: ["Common wasp", "German wasp", "Yellow jacket", "European wasp", "Social wasp"],
    description: "Wasp problems can quickly escalate from a minor annoyance to a serious safety threat, especially for families with children or anyone with allergies. We understand the fear and urgency that comes with discovering a wasp nest on your property. At Pest Pro London, our experienced technicians provide rapid, safe wasp nest removal services across London, ensuring your family's safety while maintaining the ecological balance of your garden. These highly social insects become increasingly aggressive from late summer onwards, making professional intervention not just advisable, but essential for your safety.",
    identification: {
      size: "Workers: 12-17mm, Queens: 20-25mm, Drones: 13-15mm",
      color: "Bright yellow and black bands with distinctive narrow 'wasp waist', glossy appearance",
      distinguishingFeatures: [
        "Pronounced narrow waist (constriction between thorax and abdomen)",
        "Smooth, hairless body with glossy finish",
        "Bright yellow and black striped pattern",
        "Two pairs of clear wings with visible veins",
        "Yellow legs that dangle in flight",
        "Black antennae with slight club shape",
        "Triangular head with large compound eyes",
        "Powerful mandibles for chewing wood pulp"
      ],
      soundsMade: ["Distinctive angry buzzing when agitated", "Paper rustling sounds from nest construction", "High-pitched alarm pheromones when threatened"],
      droppings: "Not applicable - wasps do not leave visible droppings",
      tracks: "Grey papery nest material, wood shavings from fence posts and garden furniture, visible flight paths to and from nest"
    },
    behavior: {
      activityTime: "Diurnal (day-active), most active 10 AM to 4 PM in warm weather, reduced activity below 10°C",
      nestingHabits: "Build aerial paper nests from chewed wood pulp mixed with saliva, colonies can reach 10,000+ individuals by autumn",
      feedingHabits: "Adults feed on sugary substances (fruit, nectar), hunt insects to feed protein to larvae, increasingly attracted to sweet foods in late summer",
      lifespan: "Workers: 12-22 days, Queens: 12 months (overwinter), Drones: 2-3 weeks",
      reproductionRate: "Single queen can establish colony of 5,000-15,000 workers, peak numbers in August-September"
    },
    habitat: {
      preferredEnvironment: [
        "Loft spaces and roof cavities (most common in London)",
        "Garden sheds and outbuildings",
        "Wall cavities and air bricks",
        "Dense vegetation and hedgerows",
        "Underground cavities (occasionally)",
        "Garden decking and pergolas",
        "Compost bins and garden storage"
      ],
      commonHidingSpots: [
        "Roof eaves and soffit boards",
        "Behind fascia boards and guttering",
        "Inside cavity walls through air bricks",
        "Garden shed roofs and corners",
        "Dense privet hedges and shrubs",
        "Old bird boxes and garden furniture",
        "Underground in abandoned rodent burrows",
        "Behind external meter boxes",
        "Gaps in garden fencing and trellis"
      ],
      signsOfInfestation: [
        "High levels of wasp activity around specific area",
        "Visible grey papery nest (football to rugby ball sized)",
        "Clear flight paths with wasps entering/exiting same point",
        "Wood shavings around fence posts and garden furniture",
        "Aggressive wasp behavior when approached",
        "Multiple wasps in house (may indicate internal nest)",
        "Paper-like debris falling from eaves or roof areas",
        "Sweet smell from fermented fruit attracting large numbers"
      ]
    },
    risks: {
      healthRisks: [
        "Severe allergic reactions (anaphylaxis) requiring emergency medical attention",
        "Multiple sting syndrome - dangerous when attacked by multiple wasps",
        "Localised swelling, pain, and inflammation from single stings",
        "Secondary bacterial infections at sting sites",
        "Respiratory complications if stung in mouth or throat area",
        "Cardiac stress in elderly or vulnerable individuals",
        "Psychological trauma, especially in children",
        "Risk of falls when fleeing from wasps"
      ],
      propertyDamage: [
        "Structural damage to wood from nest construction",
        "Staining of building surfaces from nest material",
        "Damage to garden furniture from wood harvesting",
        "Contamination of loft insulation with nest debris",
        "Potential fire hazard if nests built near electrical equipment",
        "Garden damage from defensive territorial behavior",
        "Aesthetic damage to external building features"
      ],
      businessRisks: [
        "Immediate liability for customer and staff safety",
        "Forced closure of outdoor dining areas",
        "Event cancellations and lost revenue",
        "Worker compensation claims from staff stings",
        "Legal liability for not maintaining safe premises",
        "Insurance claims from customer injuries",
        "Reputation damage from wasp-related incidents",
        "Health and safety enforcement action"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Remove all fallen fruit from gardens immediately",
        "Secure all outdoor food sources and drinks",
        "Use tight-fitting lids on all external bins",
        "Install wasp-proof covers on outdoor eating areas",
        "Remove water sources like leaking taps and standing water",
        "Clear away pet food immediately after feeding",
        "Avoid wearing bright colors and floral patterns outdoors",
        "Inspect roof areas in early spring for early nest formation"
      ],
      exclusionMethods: [
        "Seal potential nesting sites in March-April before nest establishment",
        "Install fine mesh over air bricks and roof vents",
        "Block old nest sites as wasps may reuse locations",
        "Repair damaged roof tiles and fascia boards",
        "Seal gaps in outdoor buildings and structures",
        "Install wasp-proof screens on outdoor dining areas",
        "Use smooth materials that wasps cannot grip for construction",
        "Regular maintenance of building exteriors to eliminate entry points"
      ],
      cleaningTips: [
        "Clean barbecue areas immediately after use",
        "Remove all food debris from outdoor dining areas",
        "Empty outdoor bins daily during peak season",
        "Clean up sugary spills immediately",
        "Remove overripe fruit from trees and ground",
        "Cover food and drinks when eating outdoors",
        "Clean children's outdoor toys regularly",
        "Maintain compost bins with tight-fitting lids"
      ],
      landscapingTips: [
        "Remove rotting windfall fruit weekly during fruiting season",
        "Maintain compost bins properly to avoid sweet fermentation odors",
        "Fill in ground holes that could provide nesting sites",
        "Trim overhanging branches away from roof areas",
        "Choose plants that don't attract wasps (avoid highly scented flowers)",
        "Maintain short grass to eliminate ground-nesting opportunities",
        "Remove ivy and dense vegetation from building walls",
        "Install wasp-deterrent plants like mint and citronella"
      ]
    },
    treatment: {
      professionalMethods: [
        "Targeted insecticidal dust injection directly into nest entrance",
        "Professional foam treatments for aerial nests",
        "Complete nest removal once colony eliminated",
        "Residual spray treatments for repeat prevention",
        "Specialist access equipment for high or difficult locations",
        "Emergency next-day treatment for dangerous locations",
        "Heat treatment for nests in sensitive areas",
        "Environmentally sensitive treatments near water features"
      ],
      timeline: "Emergency next-day service available, nest elimination within 24-48 hours, complete removal after 2 weeks",
      preparation: [
        "Identify exact nest location and main entrance point",
        "Clear safe access route for technician",
        "Close all windows and doors to prevent indoor wasp entry",
        "Keep children and pets indoors during treatment",
        "Remove outdoor food sources and covering",
        "Ensure parking access for emergency equipment",
        "Have emergency contact details ready for severe allergy sufferers",
        "Clear area of garden furniture if nest is outdoor"
      ],
      followUp: "Safety check after 48 hours, nest removal appointment after 2 weeks, preventive advice for following season"
    },
    londonSpecific: {
      commonBoroughs: [
        "Richmond upon Thames (extensive green spaces)",
        "Bromley (suburban gardens with fruit trees)",
        "Barnet (mature gardens and parkland)",
        "Harrow (residential areas with large gardens)",
        "Sutton (suburban properties with outbuildings)",
        "Wandsworth (gardens backing onto commons)",
        "Kingston upon Thames (proximity to Richmond Park)",
        "Croydon (mix of urban and suburban environments)"
      ],
      seasonalActivity: {
        spring: "Queens emerge from hibernation (March-April), establish small nests in protected locations, low aggression levels",
        summer: "Rapid colony expansion (May-July), nest building peak, moderate wasp activity, focus on protein collection for larvae",
        autumn: "Peak aggression period (August-October), maximum colony size, desperate foraging for sweet foods, highest sting risk",
        winter: "Colony dies except new queens seeking hibernation sites, old nests remain visible but empty"
      },
      propertyTypes: [
        "Victorian and Edwardian houses with large roof spaces",
        "Suburban properties with gardens and outbuildings",
        "Schools with extensive grounds and outdoor dining",
        "Parks, gardens, and recreational facilities",
        "Pub gardens and outdoor dining establishments",
        "Golf courses and sports facilities",
        "Allotments and community gardens",
        "Care homes with garden areas"
      ]
    },
    urgencyLevel: "emergency",
    relatedPests: ["hornets", "bees", "yellow-jacket-wasps"],
    pricing: {
      mainService: {
        from: 85,
        unit: "per nest",
        description: "Complete wasp nest elimination including treatment and follow-up safety check"
      },
      additionalServices: [
        {
          name: "Additional nests on same property",
          from: 40,
          description: "Each additional nest treated during same visit at reduced rate"
        },
        {
          name: "Emergency same-day response",
          from: 35,
          description: "Priority treatment within 4 hours for dangerous or urgent situations"
        },
        {
          name: "High-access specialist equipment",
          from: 50,
          description: "Cherry picker or specialist access equipment for difficult locations"
        },
        {
          name: "Physical nest removal service",
          from: 45,
          description: "Complete nest removal 2-3 weeks after treatment when colony is dormant"
        }
      ]
    },
    guarantee: {
      isOffered: true,
      duration: "Remainder of current season (until October 31st)",
      conditions: [
        "Nest must be accessible for complete treatment application",
        "Property access must be maintained for follow-up safety check",
        "Client must follow safety instructions and keep area clear",
        "Weather conditions must allow safe treatment application",
        "Any structural changes affecting nest accessibility must be reported"
      ],
      exclusions: [
        "Does not cover new nests established after treatment date",
        "Not applicable for nests that cannot be fully accessed or treated",
        "Void if weather conditions prevent complete treatment application",
        "Does not guarantee against individual wasps from other distant nests",
        "Excludes nests discovered after treatment that were not visible during initial visit"
      ]
    },
    treatmentInfo: {
      preparation: [
        "Observe nest location from safe distance and note main entrance points",
        "Clear safe access route for technician avoiding wasp flight paths",
        "Close all windows and doors to prevent wasps entering house during treatment",
        "Keep children and pets indoors with doors locked during treatment period",
        "Remove outdoor furniture and covers from immediate nest area",
        "Ensure clear parking access for emergency equipment if required",
        "Have emergency contact details ready if anyone on property has severe allergies",
        "Do not attempt to treat nest yourself or disturb area before technician arrival"
      ],
      methodology: [
        "Professional assessment of nest location, size, and species identification",
        "Selection of appropriate treatment method based on nest accessibility and environmental factors",
        "Application of professional-grade insecticidal dust directly into nest entrance using specialist equipment",
        "Treatment of all identified entry/exit points to ensure complete colony exposure",
        "Residual spray application around nest area to eliminate returning forager wasps",
        "Documentation of treatment with safety instructions for 48-hour period following treatment",
        "Emergency contingency procedures in place for adverse reactions or weather changes",
        "Follow-up safety inspection within 48 hours to confirm nest elimination"
      ],
      aftercare: [
        "Avoid nest area completely for minimum 48 hours after treatment",
        "Do not attempt to remove nest yourself - dead wasps may still sting",
        "Keep windows and doors closed for 24 hours following treatment",
        "Report any unusual wasp activity or suspected new nests immediately",
        "Schedule nest removal appointment 2-3 weeks after treatment when safe",
        "Implement prevention measures before next season (March-April)",
        "Remove food sources and maintain clean outdoor areas through autumn",
        "Seal potential nesting sites identified during treatment before next spring"
      ],
      productsUsed: [
        {
          category: "Professional insecticidal dusts",
          purpose: "Rapid knockdown and residual killing effect for complete colony elimination"
        },
        {
          category: "Foam-based nest treatments",
          purpose: "Expansion treatment for aerial nests ensuring complete penetration of colony"
        },
        {
          category: "Residual pyrethroid sprays",
          purpose: "Perimeter treatment to eliminate returning forager wasps and prevent re-establishment"
        },
        {
          category: "Specialist injection equipment",
          purpose: "Safe, precise delivery of treatment directly into nest entrance from recommended distance"
        }
      ]
    }
  },
  {
    id: "ants",
    name: "Ants",
    scientificName: "Lasius niger & Monomorium pharaonis",
    category: "insects",
    commonNames: ["Black garden ant", "Pharaoh ant", "Ghost ant", "Pavement ant", "Argentine ant"],
    description: "An ant invasion can transform your peaceful home into a frustrating battleground, with endless trails of insects marching through your kitchen and contaminating your food. We understand how overwhelming it feels to discover ants have colonised your property - one day there are none, the next day there are thousands. At Pest Pro London, we specialise in permanent ant colony elimination, not just surface treatment. These highly organised social insects require professional intervention because their underground colonies can contain multiple queens and hundreds of thousands of workers, making complete eradication impossible without expert knowledge and targeted treatment methods.",
    identification: {
      size: "Garden ant workers: 3-5mm, Pharaoh workers: 1.5-2mm, Queens: 9-15mm, Flying ants: 6-8mm",
      color: "Black garden ants: dark brown to black, Pharaoh ants: light yellow to red, Ghost ants: pale yellow with dark head",
      distinguishingFeatures: [
        "Three distinct body segments (head, thorax, abdomen)",
        "Distinctive elbowed antennae with club-shaped ends",
        "Pronounced narrow waist between thorax and abdomen",
        "Six jointed legs with strong grip",
        "Compound eyes and powerful mandibles",
        "Reproductive ants have wings during swarming period",
        "Visible metapleural glands (species-specific identification)",
        "Segmented antennae with 11-12 segments"
      ],
      soundsMade: ["Generally silent to human ears", "Possible faint rustling in large infestations", "Chemical communication through pheromone trails"],
      droppings: "Microscopic and not visible to naked eye",
      tracks: "Visible pheromone trails on surfaces, small excavated soil mounds at nest entrances, tiny debris piles near entry points"
    },
    behavior: {
      activityTime: "Most active during daylight hours (diurnal), peak activity in warm weather above 15°C, reduced activity in cold conditions",
      nestingHabits: "Complex underground colonies with multiple chambers, satellite nests in wall voids, prefer moisture-rich environments near food sources",
      feedingHabits: "Omnivorous scavengers preferring sweet substances (honeydew, sugar), also collect proteins and fats, Pharaoh ants prefer meat and fats",
      lifespan: "Workers: 1-3 months, Soldiers: 3-6 months, Queens: up to 15 years, Males: 1-2 weeks after mating",
      reproductionRate: "Single queen produces 800-1,000 eggs per day, mature colonies contain 100,000-500,000 individuals, multiple nuptial flights per year"
    },
    habitat: {
      preferredEnvironment: [
        "Kitchen areas and food preparation zones",
        "Garden patios and paved areas",
        "Wall cavities and structural voids",
        "Heated buildings (Pharaoh ants)",
        "Moist areas around plumbing",
        "Window sills and door frames",
        "Electrical conduits and meter boxes"
      ],
      commonHidingSpots: [
        "Behind kitchen units and under appliances",
        "Along skirting boards and architraves",
        "Inside wall insulation and cavity walls",
        "Under patio slabs and block paving",
        "Plant pots and garden containers",
        "Electrical junction boxes and switch plates",
        "Behind bathroom tiles and around pipework",
        "Window frames and door thresholds",
        "Compost bins and garden storage areas"
      ],
      signsOfInfestation: [
        "Visible ant trails leading to food sources",
        "Small conical soil mounds in gardens or near buildings",
        "Live ants around sweet substances and food debris",
        "Flying ants during warm weather (May-September)",
        "Tiny holes in mortar joints and paving",
        "Sweet/musty odour from large Pharaoh ant colonies",
        "Damaged food packaging with tiny entry holes",
        "Fine soil particles on windowsills or doorways"
      ]
    },
    risks: {
      healthRisks: [
        "Food contamination from foraging through unsanitary areas",
        "Disease transmission risk in healthcare environments (Pharaoh ants)",
        "Bacterial contamination of food preparation surfaces",
        "Allergic reactions to ant bites (rare but possible)",
        "Asthma triggers from ant debris and body parts",
        "Cross-contamination between waste areas and kitchens",
        "Potential for wound infections in hospital settings"
      ],
      propertyDamage: [
        "Undermining of paved areas and pathways",
        "Damage to electrical equipment through moisture attraction",
        "Food spoilage and contamination costs",
        "Garden plant damage through aphid farming",
        "Structural issues from extensive excavation",
        "Damage to lawn areas from nest construction",
        "Contamination of stored goods and packaging"
      ],
      businessRisks: [
        "Serious food safety violations and enforcement action",
        "Customer complaints and reputation damage",
        "Product recalls due to contamination",
        "Particular risks in healthcare facilities from Pharaoh ants",
        "Lost revenue from closed food preparation areas",
        "Staff welfare issues in heavily infested workplaces",
        "Insurance claims from contaminated stock"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Eliminate all accessible food sources completely",
        "Fix plumbing leaks and moisture problems immediately",
        "Store all food in sealed, ant-proof containers",
        "Clean up spills and crumbs immediately after eating",
        "Remove pet food bowls after feeding times",
        "Install dehumidifiers in damp areas",
        "Trim vegetation away from building walls",
        "Maintain dry perimeters around building foundations"
      ],
      exclusionMethods: [
        "Seal all cracks and gaps with appropriate sealant",
        "Install door sweeps and weather stripping",
        "Use ant-proof barriers around building perimeters",
        "Caulk entry points around pipes and cables",
        "Repair damaged mortar joints in brickwork",
        "Install fine mesh over air vents and drains",
        "Apply ant-deterrent substances to key entry areas",
        "Regular maintenance of building exterior seals"
      ],
      cleaningTips: [
        "Wipe down all surfaces with ant-deterrent cleaners daily",
        "Clean pet food bowls immediately after use",
        "Vacuum floors daily, especially around food areas",
        "Empty bins daily and clean containers weekly",
        "Steam clean floors weekly to remove pheromone trails",
        "Store food in elevated, sealed containers",
        "Clean inside appliances regularly (toasters, microwaves)",
        "Wash dishes immediately after use"
      ],
      landscapingTips: [
        "Keep plants at least 30cm away from building walls",
        "Remove aphid-infested plants that attract ant farming",
        "Maintain a dry gravel or concrete perimeter strip",
        "Use ant-resistant mulch materials",
        "Regularly inspect and treat soil around foundations",
        "Remove fallen fruit and organic debris promptly",
        "Install ant barriers around tree bases",
        "Keep compost bins sealed and away from buildings"
      ]
    },
    treatment: {
      professionalMethods: [
        "Professional gel baits targeted to specific ant species",
        "Granular baits for outdoor colony treatment",
        "Residual spray treatments for perimeter protection",
        "Dust formulations for wall cavity applications",
        "Advanced colony elimination bait systems",
        "Targeted injection treatments for nest sites",
        "Integrated Pest Management (IPM) approaches",
        "Specialist Pharaoh ant elimination protocols"
      ],
      timeline: "Initial assessment within 24 hours, first treatment within 48 hours, colony elimination typically 2-6 weeks depending on species and colony size",
      preparation: [
        "Deep clean all surfaces to remove existing pheromone trails",
        "Remove all alternative food sources during treatment period",
        "Document and photograph all ant trail locations",
        "Clear access to all treatment areas including behind appliances",
        "Secure pets and children during professional application",
        "Identify and mark all suspected entry points",
        "Remove or cover food items in treatment areas",
        "Provide access to cavity walls and roof spaces if required"
      ],
      followUp: "Progress monitoring at 1-2 week intervals, bait station maintenance, final clearance inspection after 4-6 weeks, annual preventive service recommended"
    },
    londonSpecific: {
      commonBoroughs: [
        "All London boroughs affected by garden ants",
        "Camden (high density housing with Pharaoh ant issues)",
        "Tower Hamlets (hospitals and healthcare facilities)",
        "Westminster (commercial kitchens and restaurants)",
        "Kensington & Chelsea (period properties with structural entry points)",
        "Hackney (mixed residential and commercial areas)",
        "Southwark (riverside properties with moisture issues)",
        "Lambeth (social housing with heating systems favoring Pharaoh ants)"
      ],
      seasonalActivity: {
        spring: "Colony expansion begins with increased foraging activity, first appearance of scouts in homes",
        summer: "Peak activity period with flying ant days (typically July-August), maximum colony size and aggressive foraging",
        autumn: "Increased indoor invasions as outdoor temperatures drop, preparation for overwintering",
        winter: "Pharaoh ants remain active in heated buildings, garden ants largely dormant but may appear during warm spells"
      },
      propertyTypes: [
        "All residential property types affected",
        "Hospitals and healthcare facilities (particular Pharaoh ant risk)",
        "Ground floor flats with garden access",
        "Restaurant kitchens and food preparation areas",
        "Care homes and sheltered accommodation",
        "Schools with food service areas",
        "Office buildings with kitchen facilities",
        "Period properties with structural entry points"
      ]
    },
    urgencyLevel: "high",
    relatedPests: ["cockroaches", "silverfish", "pharaoh-ants"],
    pricing: {
      mainService: {
        from: 125,
        unit: "for colony elimination",
        description: "Complete ant colony elimination program including assessment, treatment, and follow-up monitoring"
      },
      additionalServices: [
        {
          name: "Pharaoh ant specialist treatment",
          from: 195,
          description: "Advanced 3-treatment program specifically for Pharaoh ant colonies in commercial settings"
        },
        {
          name: "External perimeter treatment",
          from: 85,
          description: "Protective barrier treatment around building exterior to prevent future invasions"
        },
        {
          name: "Flying ant emergency response",
          from: 65,
          description: "Rapid treatment during flying ant season for urgent situations"
        },
        {
          name: "Annual monitoring and maintenance",
          from: 150,
          description: "4 quarterly visits with bait station maintenance and early detection monitoring"
        }
      ]
    },
    guarantee: {
      isOffered: true,
      duration: "6 months from final treatment for garden ants, 12 months for Pharaoh ants",
      conditions: [
        "All food sources must be eliminated and proper sanitation maintained",
        "Identified entry points must be sealed within 14 days of treatment",
        "Property must remain accessible for monitoring and bait station maintenance",
        "Client must not disturb bait stations or treatment areas during active period",
        "Any structural changes or new moisture sources must be reported",
        "Different guarantee periods apply to different ant species"
      ],
      exclusions: [
        "Does not cover new colonies establishing from external sources",
        "Void if recommended sanitation standards are not maintained",
        "Not applicable where ongoing moisture or structural issues remain unaddressed",
        "Does not guarantee against individual foraging ants from distant colonies",
        "Excludes garden ant activity that does not enter property interior",
        "Flying ant swarms during natural seasonal events are not covered"
      ]
    },
    treatmentInfo: {
      preparation: [
        "Deep clean all surfaces to remove existing pheromone trails and food residues",
        "Remove all accessible food sources and store in sealed, ant-proof containers",
        "Document all ant trails with photographs showing entry and exit points",
        "Clear access to treatment areas including spaces behind appliances",
        "Fix any water leaks or moisture sources that attract ants",
        "Secure pets and children during treatment application",
        "Empty bins and clean thoroughly to remove attractants",
        "Provide access to external areas where outdoor colonies are suspected"
      ],
      methodology: [
        "Comprehensive species identification to determine appropriate treatment approach",
        "Location and mapping of colony sites using professional tracking techniques",
        "Strategic placement of species-specific gel baits along identified ant trails",
        "Application of granular baits for outdoor colony treatment and elimination",
        "Residual spray treatments around building perimeter and entry points",
        "Dust applications in wall cavities and inaccessible areas where appropriate",
        "Installation of monitoring stations for ongoing population assessment",
        "Different protocols for garden ants vs. Pharaoh ants requiring specialized approaches",
        "Follow-up treatments at scheduled intervals based on species biology and colony response"
      ],
      aftercare: [
        "Do not clean or disturb bait stations during active treatment period",
        "Maintain strict food storage and cleanliness standards throughout guarantee period",
        "Continue to seal any new cracks or entry points discovered",
        "Monitor bait station activity and report changes to technician",
        "Remove any dead ants with vacuum rather than cleaning sprays",
        "Report any new ant activity immediately during guarantee period",
        "Implement long-term prevention measures including moisture control",
        "Schedule annual preventive treatments to maintain protection"
      ],
      productsUsed: [
        {
          category: "Species-specific gel baits",
          purpose: "Targeted attraction and colony elimination for garden ants, Pharaoh ants, and other species"
        },
        {
          category: "Granular bait formulations",
          purpose: "Outdoor colony treatment and perimeter protection against reinvasion"
        },
        {
          category: "Residual insecticide sprays",
          purpose: "Barrier treatments around building perimeter and entry points"
        },
        {
          category: "Desiccant dusts",
          purpose: "Wall cavity treatments and areas where moisture resistance is required"
        },
        {
          category: "Monitoring and detection systems",
          purpose: "Ongoing population assessment and early detection of new activity"
        }
      ]
    }
  },
  {
    id: "spiders",
    name: "Spiders",
    scientificName: "Various species",
    category: "insects",
    commonNames: ["House spider", "False widow", "Cellar spider", "Garden spider", "Wolf spider", "Orb weaver"],
    description: "Spider phobia affects millions of people, and discovering webs throughout your home can trigger genuine fear and anxiety. While we understand that spiders are natural pest controllers, we also recognize when they become a problem that affects your comfort and peace of mind. At Pest Pro London, we provide sensitive, effective spider control that balances ecological responsibility with your family's wellbeing. Some London spiders, particularly the increasingly common false widow, can deliver medically significant bites, making professional identification and management essential for your safety.",
    identification: {
      size: "House spiders: 6-20mm body, False widows: 7-14mm, Garden spiders: 10-18mm, Cellar spiders: 2-10mm",
      color: "Typically brown, black, grey, or yellow-brown with various patterns and markings",
      distinguishingFeatures: [
        "Eight jointed legs attached to cephalothorax",
        "Two distinct body segments (cephalothorax and abdomen)",
        "Multiple eyes arranged in species-specific patterns (usually 8)",
        "Silk-producing spinnerets at rear of abdomen",
        "Pair of pedipalps near mouth (enlarged in males)",
        "Chelicerae (fangs) for venom injection",
        "Some species hairy (wolf spiders), others smooth (false widows)",
        "Distinctive web patterns vary by species"
      ],
      soundsMade: ["Generally silent", "Possible slight rustling when moving through webs", "Courtship vibrations on webs (not audible to humans)"],
      droppings: "Small dark spots below webs, white uric acid deposits mixed with prey remains",
      tracks: "Distinctive web patterns, silk draglines, egg sacs, molted exoskeletons, captured prey remains"
    },
    behavior: {
      activityTime: "Varies by species - house spiders mostly nocturnal, garden spiders diurnal, false widows active day and night",
      nestingHabits: "Solitary creatures, create species-specific webs or hunt actively without webs, retreat to crevices during day",
      feedingHabits: "Strictly carnivorous, feeding on flying insects, crawling insects, and other spiders",
      lifespan: "Most UK species: 1-2 years, some larger species up to 3 years, false widows up to 18 months",
      reproductionRate: "100-400 eggs per egg sac, multiple sacs per year, peak reproduction in autumn"
    },
    habitat: {
      preferredEnvironment: [
        "Dark, undisturbed corners and crevices",
        "Basements and cellars with stable conditions",
        "Loft spaces and storage areas",
        "Garden sheds and outbuildings",
        "Window frames and conservatories",
        "Behind furniture and appliances",
        "Garage spaces and storage areas"
      ],
      commonHidingSpots: [
        "Behind and under furniture, especially beds and wardrobes",
        "Window and door frames, particularly corners",
        "Ceiling corners and light fittings",
        "Under stairwells and in cupboards",
        "Behind radiators and heating pipes",
        "In garage corners and garden storage",
        "Between books and in storage boxes",
        "External meter boxes and garden features",
        "Brick crevices and cavity wall openings"
      ],
      signsOfInfestation: [
        "Multiple webs in various locations",
        "Live spiders spotted regularly",
        "Egg sacs attached to webs or hidden surfaces",
        "Dead insects caught in webs",
        "Spider droppings and silk residue",
        "Molted spider skins near hiding spots",
        "Bite marks on residents (false widow identification)",
        "Webs reformed quickly after removal"
      ]
    },
    risks: {
      healthRisks: [
        "False widow spider bites causing pain, swelling, and potential infection",
        "Allergic reactions to spider bites in sensitive individuals",
        "Secondary bacterial infections at bite sites",
        "Severe psychological distress and arachnophobia triggers",
        "Sleep disruption from fear of spider encounters",
        "Risk of falls when trying to escape from spiders",
        "Respiratory issues in individuals allergic to spider debris"
      ],
      propertyDamage: [
        "Extensive webbing creating unsightly appearance",
        "Staining from spider droppings on walls and surfaces",
        "Potential damage to stored items in infested areas",
        "Contamination of food storage areas",
        "Reduced property appeal for potential buyers/tenants"
      ],
      businessRisks: [
        "Customer complaints and negative reviews",
        "Staff welfare concerns affecting productivity",
        "Cleaning costs for web removal and maintenance",
        "Potential liability from customer spider bites",
        "Hygiene perception issues in food-related businesses",
        "Professional image concerns in office environments"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Reduce clutter in storage areas and basements",
        "Control humidity levels below 50% where possible",
        "Limit unnecessary outdoor lighting that attracts prey insects",
        "Seal entry points around windows and doors",
        "Remove spider food sources by controlling other insects",
        "Use cedar products as natural deterrents",
        "Install yellow or sodium lighting outdoors",
        "Maintain clean, well-ventilated spaces"
      ],
      exclusionMethods: [
        "Install brush seals under doors and around frames",
        "Seal cracks and crevices with appropriate filler",
        "Use fine mesh screens on windows and vents",
        "Install weatherstripping around windows and doors",
        "Block access points around pipes and cables",
        "Repair damaged window screens immediately",
        "Seal gaps in soffits and roof areas",
        "Use door sweeps on external doors"
      ],
      cleaningTips: [
        "Vacuum thoroughly including corners and crevices weekly",
        "Remove webs promptly using long-handled tools",
        "Dust regularly to remove spider eggs and debris",
        "Declutter storage areas and rotate stored items",
        "Steam clean carpets and upholstery periodically",
        "Clean window frames and sills regularly",
        "Vacuum under and behind furniture monthly",
        "Maintain clean garage and storage areas"
      ],
      landscapingTips: [
        "Trim vegetation away from building walls (minimum 50cm)",
        "Remove garden debris, woodpiles, and leaf litter",
        "Control outdoor lighting to reduce insect attraction",
        "Maintain tidy garden without excessive hiding spots",
        "Remove or relocate firewood away from buildings",
        "Clear ivy and dense vegetation from walls",
        "Prune overhanging tree branches",
        "Install gravel strips around building perimeters"
      ]
    },
    treatment: {
      professionalMethods: [
        "Targeted residual spray treatments for harboring areas",
        "Professional web removal and cleanup",
        "Dust applications in cavity walls and roof spaces",
        "Monitoring and identification of problem species",
        "Exclusion work to prevent re-entry",
        "Integrated pest management focusing on prey reduction",
        "Specialist false widow elimination protocols",
        "Safe removal and relocation when appropriate"
      ],
      timeline: "Initial assessment and first treatment within 48 hours, typically resolved with 1-2 treatments, ongoing monitoring for 6-8 weeks",
      preparation: [
        "Clear access to all treatment areas",
        "Note and photograph problem areas and spider types",
        "Remove clutter from affected areas",
        "Vacuum existing webs before treatment",
        "Secure pets during treatment application",
        "Identify specific species if possible for targeted treatment",
        "Clear storage areas for inspection",
        "Document bite incidents if false widows suspected"
      ],
      followUp: "Progress monitoring after 2 weeks, retreat if necessary after 4-6 weeks, seasonal prevention advice, annual inspection recommended"
    },
    londonSpecific: {
      commonBoroughs: [
        "All London boroughs affected by common house spiders",
        "Southern boroughs (Croydon, Bromley) with increasing false widow populations",
        "Richmond and outer London with garden spider prevalence",
        "Central London (Westminster, Camden) with cellar spider issues",
        "Thames-side boroughs with moisture-related spider problems",
        "Older housing stock areas (Islington, Hackney) with structural harboring",
        "Suburban areas (Harrow, Barnet) with seasonal garden spider invasions"
      ],
      seasonalActivity: {
        spring: "Mating season begins, increased spider movement and web-building activity",
        summer: "Garden species peak activity, outdoor spiders most visible, breeding period for most species",
        autumn: "Major indoor migration as spiders seek warmth, peak home invasion period, egg-laying season",
        winter: "Reduced activity but spiders remain in heated homes, false widows stay active indoors"
      },
      propertyTypes: [
        "Older Victorian and Edwardian properties with more hiding spots",
        "Garden sheds and outbuildings",
        "Garages and basement areas",
        "Properties with extensive storage areas",
        "Homes backing onto parks or green spaces",
        "Buildings with cavity walls and roof spaces",
        "Commercial premises with warehousing",
        "Schools and public buildings with storage areas"
      ]
    },
    urgencyLevel: "medium",
    relatedPests: ["silverfish", "moths", "false-widow-spiders"]
  },
  {
    id: "moths",
    name: "Moths",
    scientificName: "Tineola bisselliella & Plodia interpunctella",
    category: "insects",
    commonNames: ["Clothes moth", "Carpet moth", "Pantry moth", "Indian meal moth", "Common clothes moth", "Case-bearing clothes moth"],
    description: "Discovering holes in your favorite clothes or finding larvae in your food storage can be heartbreaking and costly. We understand the frustration of opening your wardrobe to find irreplaceable garments damaged, or discovering contaminated food in your pantry. At Pest Pro London, we provide comprehensive moth control that protects both your treasured textiles and food stores. These persistent pests can cause thousands of pounds of damage to natural fiber clothing, carpets, and stored food products, requiring immediate professional intervention to prevent total infestation of your home.",
    identification: {
      size: "Clothes moths: 6-8mm wingspan, Pantry moths: 8-10mm wingspan, Larvae: 10-12mm when mature",
      color: "Clothes moths: buff/golden brown, Pantry moths: grey-brown with distinctive patterns, Larvae: cream-white with brown heads",
      distinguishingFeatures: [
        "Narrow, fringed wings held roof-like over body when at rest",
        "Thread-like or feathery antennae (varies by species)",
        "Weak, fluttering flight pattern",
        "Pantry moths attracted to light sources",
        "Clothes moths avoid light and prefer dark areas",
        "Distinctive moth scales that rub off when handled",
        "Larvae have well-developed heads with strong mandibles",
        "Case-bearing moth larvae create portable silk cases"
      ],
      soundsMade: ["Generally silent", "Possible faint rustling of larvae in fabrics", "Paper-like sound when disturbed from hiding spots"],
      droppings: "Tiny dark specks (frass) near damaged materials, often mixed with silk webbing",
      tracks: "Silk webbing trails, portable larval cases, irregular holes in fabrics, damaged food packaging with webbing"
    },
    behavior: {
      activityTime: "Adults primarily nocturnal and crepuscular, larvae active continuously in favorable conditions",
      nestingHabits: "Females lay eggs directly on food source material, larvae pupate in crevices and corners",
      feedingHabits: "Adults rarely feed, larvae consume natural fibers (wool, silk, cotton) or stored food products",
      lifespan: "Adults: 2-4 weeks, Complete life cycle: 2-6 months depending on temperature and humidity",
      reproductionRate: "Females lay 40-100 eggs over lifetime, multiple generations per year in heated homes"
    },
    habitat: {
      preferredEnvironment: [
        "Wardrobes and clothing storage areas",
        "Carpeted areas, especially under furniture",
        "Pantries and food storage cupboards",
        "Dark, undisturbed areas with natural materials",
        "Museums, libraries, and archives",
        "Basements and storage rooms",
        "Attics with stored textiles"
      ],
      commonHidingSpots: [
        "Inside closets behind hanging clothes",
        "Under furniture and carpet edges",
        "Behind radiators and heating pipes",
        "Storage boxes containing woollen items",
        "Food cupboards and pantry areas",
        "Picture frames and artwork storage",
        "Upholstered furniture seams and crevices",
        "Curtain folds and fabric blinds",
        "Vintage clothing and textile collections"
      ],
      signsOfInfestation: [
        "Small irregular holes in wool, silk, or cotton fabrics",
        "Silken cases or cocoons in corners and crevices",
        "Adult moths flying in affected areas",
        "Webbing in food packages or containers",
        "Bare patches in natural fiber carpets and rugs",
        "Larvae crawling on walls or ceilings",
        "Fine dust or debris from damaged materials",
        "Musty odor in heavily infested storage areas"
      ]
    },
    risks: {
      healthRisks: [
        "Allergic reactions to moth scales and larval hairs",
        "Food contamination from pantry moth infestations",
        "Respiratory irritation from airborne particles",
        "Skin irritation from contact with infested materials",
        "Asthma triggers from moth debris and allergens"
      ],
      propertyDamage: [
        "Irreparable damage to expensive clothing and textiles",
        "Destruction of valuable carpets and rugs",
        "Spoilage of stored food products",
        "Damage to upholstered furniture",
        "Loss of irreplaceable vintage or antique textiles",
        "Contamination of entire wardrobes requiring professional cleaning",
        "Damage to natural fiber insulation materials"
      ],
      businessRisks: [
        "Significant stock losses in retail clothing businesses",
        "Devastating losses in museums and galleries",
        "Reputation damage for hotels and hospitality venues",
        "Food safety violations in restaurants and catering",
        "Insurance claims for damaged inventory",
        "Customer compensation costs",
        "Professional cleaning and replacement expenses"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Regular thorough cleaning and vacuuming of all areas",
        "Proper storage of clothing in sealed containers",
        "Maintain low humidity levels (below 50%)",
        "Use natural deterrents like cedar blocks and lavender",
        "Regular rotation and inspection of stored items",
        "Professional cleaning before long-term storage",
        "Install effective ventilation in storage areas",
        "Temperature control to disrupt breeding cycles"
      ],
      exclusionMethods: [
        "Store susceptible items in sealed, airtight containers",
        "Use moth-proof garment bags for valuable clothing",
        "Install fine mesh screens on windows and vents",
        "Seal gaps around doors and windows",
        "Use pheromone traps for early detection",
        "Professional-grade storage solutions for textiles",
        "Cedar-lined wardrobes and storage areas",
        "Regular inspection and monitoring protocols"
      ],
      cleaningTips: [
        "Vacuum all carpets, rugs, and upholstery weekly",
        "Clean clothing thoroughly before storage",
        "Wash susceptible items at 60°C when possible",
        "Freeze delicate items for 72 hours to kill eggs and larvae",
        "Steam clean carpets and upholstery regularly",
        "Clean and vacuum inside wardrobes monthly",
        "Brush and air clothes regularly during storage",
        "Professional dry cleaning for valuable or delicate items"
      ],
      landscapingTips: [
        "Not applicable - moths are primarily indoor pests in London climate",
        "Reduce outdoor lighting near windows to minimize attraction",
        "Keep bird nests away from buildings as they can harbor moths"
      ]
    },
    treatment: {
      professionalMethods: [
        "Species-specific pheromone trapping systems",
        "Targeted residual insecticide treatments",
        "Professional fumigation for severe infestations",
        "Heat treatment for textiles and storage areas",
        "Controlled freezing treatment for delicate items",
        "Insect Growth Regulator (IGR) applications",
        "Steam treatment for carpets and upholstery",
        "Comprehensive inspection and monitoring programs"
      ],
      timeline: "Initial assessment within 24 hours, first treatment within 48 hours, typically requires 2-3 treatments over 6-8 weeks, monitoring for 3-6 months",
      preparation: [
        "Empty and clean all affected storage areas",
        "Wash or dry clean all washable items",
        "Vacuum all carpets, furniture, and crevices thoroughly",
        "Bag and isolate heavily infested items",
        "Provide access to all storage areas and wardrobes",
        "Document all damaged items for insurance purposes",
        "Remove or cover food items during treatment",
        "Ensure adequate ventilation during treatment process"
      ],
      followUp: "Progress monitoring with pheromone traps for 3-6 months, follow-up inspections at regular intervals, prevention advice and seasonal monitoring"
    },
    londonSpecific: {
      commonBoroughs: [
        "Kensington & Chelsea (high concentration of valuable textiles and period properties)",
        "Westminster (museums, galleries, and commercial premises)",
        "Camden (vintage shops and older residential properties)",
        "Islington (Victorian properties with wool carpets)",
        "Richmond (suburban homes with extensive storage)",
        "Hampstead (older properties with natural fiber furnishings)",
        "Greenwich (historic properties and maritime museums)",
        "Southwark (period conversions with original features)"
      ],
      seasonalActivity: {
        spring: "Adults emerge from pupation and begin mating activities, increased moth sightings indoors",
        summer: "Peak breeding season with optimal temperature and humidity conditions",
        autumn: "Larvae feeding heavily in preparation for winter, maximum damage period",
        winter: "Continuous activity in heated homes, slower development but ongoing damage"
      },
      propertyTypes: [
        "Victorian and Edwardian period properties with wool carpets",
        "Museums, galleries, and historic buildings",
        "Vintage clothing shops and textile retailers",
        "Hotels and hospitality venues with natural fiber furnishings",
        "Private residences with extensive wardrobes",
        "Antique shops and auction houses",
        "Theaters and performance venues with costume collections",
        "Libraries and archives with fabric-bound materials"
      ]
    },
    urgencyLevel: "high",
    relatedPests: ["carpet-beetles", "silverfish", "booklice"]
  },
  {
    id: "fleas",
    name: "Fleas",
    scientificName: "Ctenocephalides felis & Ctenocephalides canis",
    category: "insects",
    commonNames: ["Cat flea", "Dog flea", "Human flea", "Oriental rat flea", "Sand flea"],
    description: "Few things are more frustrating than the persistent biting and jumping of fleas throughout your home, especially when they continue to appear even after treating your pets. We understand the exhaustion that comes with fighting an invisible enemy that seems to multiply overnight. At Pest Pro London, we break the flea lifecycle completely, not just treating the adults you can see. These resilient parasites can survive for months without feeding and can explode into massive populations within days, making professional intervention essential to end the cycle of biting and breeding in your home.",
    identification: {
      size: "Adults: 1.5-3.3mm, Cat fleas slightly larger than dog fleas, Larvae: 4-10mm when mature",
      color: "Dark reddish-brown to mahogany when fed, lighter brown when unfed, larvae cream-white with brown heads",
      distinguishingFeatures: [
        "Heavily compressed body flattened side-to-side for movement through fur",
        "Disproportionately large, powerful hind legs for jumping up to 150x body length",
        "Completely wingless with smooth, streamlined profile",
        "Backward-pointing bristles and spines for gripping host fur",
        "Piercing-sucking mouthparts designed for blood feeding",
        "Compound eyes and sensitive antennae for host detection",
        "Hard, shiny exoskeleton resistant to crushing",
        "Visible when jumping - distinctive arcing motion"
      ],
      soundsMade: ["Generally silent", "Possible faint clicking when jumping on hard surfaces", "Pets may scratch loudly due to flea irritation"],
      droppings: "Distinctive 'flea dirt' - small black specks that turn reddish-brown when moistened (digested blood)",
      tracks: "Flea dirt concentrated in pet sleeping areas, eggs appearing as tiny white specks in carpets, adult fleas visible jumping on socks and ankles"
    },
    behavior: {
      activityTime: "Most active when hosts are present, peak activity during warm weather, dormant during winter but revive quickly with heating",
      nestingHabits: "Adults live on hosts, females lay eggs in pet fur which fall into environment, larvae develop in carpets and soft furnishings",
      feedingHabits: "Adults require blood meals for reproduction, can survive 100+ days without feeding, feed multiple times daily when on host",
      lifespan: "Adults: 2-3 months on average, up to 12 months in favorable conditions, complete lifecycle: 14 days to 12 months depending on conditions",
      reproductionRate: "Females lay 40-50 eggs daily, up to 2,000 eggs in lifetime, exponential population growth in optimal conditions"
    },
    habitat: {
      preferredEnvironment: [
        "Pet bedding and sleeping areas (primary breeding sites)",
        "Carpeted areas throughout the home",
        "Upholstered furniture and soft furnishings",
        "Cracks between floorboards and under skirting",
        "Warm, humid areas with organic debris",
        "Vehicle interiors where pets travel",
        "Garden areas where pets rest"
      ],
      commonHidingSpots: [
        "Pet beds, blankets, and favorite resting spots",
        "Deep within carpet pile and underlay",
        "Gaps between floorboards and under furniture",
        "Upholstered furniture seams and cushions",
        "Curtains and fabric hangings at floor level",
        "Children's soft toys and play areas",
        "Vacuum cleaner bags and filters",
        "Car upholstery and floor mats",
        "Outdoor areas where pets spend time"
      ],
      signsOfInfestation: [
        "Pets scratching, licking, and chewing excessively",
        "Small red bites on human ankles and lower legs",
        "Dark specks ('flea dirt') in pet fur and bedding",
        "Tiny jumping insects visible on light-colored surfaces",
        "White flea eggs appearing as 'salt' in carpets",
        "Pets showing signs of anemia (pale gums) in severe cases",
        "Red, irritated skin on pets and humans",
        "Flea larvae visible as small worm-like creatures in carpets"
      ]
    },
    risks: {
      healthRisks: [
        "Severe allergic reactions and flea allergy dermatitis",
        "Secondary bacterial infections from excessive scratching",
        "Disease transmission including typhus and tapeworms",
        "Anemia in pets and small children from blood loss",
        "Psychological stress from persistent biting",
        "Sleep disruption from nighttime flea activity",
        "Skin irritation and scarring from repeated bites",
        "Risk of plague transmission in extreme cases (rare in UK)"
      ],
      propertyDamage: [
        "Limited direct property damage",
        "High costs for professional treatment and cleaning",
        "Potential need to dispose of heavily infested furniture",
        "Damage to carpets from excessive cleaning attempts",
        "Reduced property value during active infestations",
        "Staining from flea dirt on light-colored fabrics",
        "Pet damage to furnishings from excessive scratching"
      ],
      businessRisks: [
        "Serious guest complaints and negative reviews",
        "Staff welfare issues from persistent biting",
        "Reputation damage for accommodation providers",
        "Potential compensation claims from affected guests",
        "Health and safety concerns for employees",
        "Lost revenue from room closures during treatment",
        "Insurance claims and increased premiums",
        "Professional cleaning and replacement costs"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Maintain regular veterinary flea prevention for all pets",
        "Vacuum all carpeted areas daily during flea season",
        "Wash all pet bedding weekly at 60°C minimum",
        "Control indoor humidity levels below 50%",
        "Groom pets regularly to detect early flea presence",
        "Remove pet hair and organic debris promptly",
        "Inspect and treat new pets before introduction",
        "Maintain clean environment free from flea development sites"
      ],
      exclusionMethods: [
        "Treat all pets with veterinary-approved flea prevention",
        "Thoroughly inspect second-hand furniture before bringing indoors",
        "Seal gaps between floorboards where eggs can accumulate",
        "Use hard flooring instead of carpets in pet areas where possible",
        "Install dehumidifiers in areas prone to flea development",
        "Regular inspection of pet sleeping and play areas",
        "Quarantine new pets until flea-free status confirmed",
        "Professional cleaning of vehicles used for pet transport"
      ],
      cleaningTips: [
        "Vacuum daily during active infestations, focusing on pet areas",
        "Steam clean all carpets and upholstery monthly",
        "Wash all bedding, pet bedding, and soft furnishings at 60°C",
        "Dispose of vacuum bags immediately or freeze contents",
        "Clean pet grooming tools regularly and thoroughly",
        "Mop hard floors with flea-specific cleaning products",
        "Launder curtains and removable fabric items frequently",
        "Professional deep cleaning of heavily infested areas"
      ],
      landscapingTips: [
        "Keep grass areas short to reduce flea habitat",
        "Remove organic debris and leaf litter where fleas develop",
        "Control wildlife populations that may introduce fleas",
        "Create dry, well-drained areas where pets spend time",
        "Remove or control rodent populations",
        "Use beneficial nematodes in garden areas as biological control",
        "Install barriers to prevent wildlife access to pet areas",
        "Regular garden maintenance to reduce flea-friendly environments"
      ]
    },
    treatment: {
      professionalMethods: [
        "Multi-stage residual insecticide treatment program",
        "Insect Growth Regulator (IGR) applications to prevent development",
        "Professional fumigation for severe whole-house infestations",
        "Heat treatment for sensitive areas and valuable items",
        "Targeted spray treatments for specific harboring areas",
        "Integrated pest management combining multiple approaches",
        "Coordination with veterinary treatment for all pets",
        "Environmental management and habitat modification"
      ],
      timeline: "Initial treatment within 24 hours of contact, second treatment 14-21 days later to target emerging adults, complete elimination typically achieved within 4-6 weeks",
      preparation: [
        "Vacuum all carpets, furniture, and pet areas thoroughly",
        "Wash all bedding, clothing, and pet items at highest safe temperature",
        "Treat all pets with veterinary flea treatment simultaneously",
        "Clear floor areas of personal items and furniture where possible",
        "Secure pets in treated areas according to technician instructions",
        "Identify and document all areas where pets spend time",
        "Prepare for temporary pet relocation if required",
        "Remove or cover food items and pet food during treatment"
      ],
      followUp: "Mandatory follow-up treatment after 2-3 weeks to break the lifecycle, progress monitoring for 6-8 weeks, ongoing pet treatment coordination with veterinarian"
    },
    londonSpecific: {
      commonBoroughs: [
        "All London boroughs affected with pet ownership",
        "Residential areas with high pet populations",
        "Student accommodation areas allowing pets",
        "Ground floor flats with garden access",
        "Areas near parks where pets exercise",
        "Suburban boroughs with larger pet populations",
        "Social housing areas with pet-friendly policies",
        "Tourist accommodation accepting pets"
      ],
      seasonalActivity: {
        spring: "Flea activity increases with warmer temperatures, pet outdoor activity brings new flea exposure",
        summer: "Peak flea season with optimal breeding conditions, maximum outdoor flea populations",
        autumn: "Continued indoor activity as outdoor temperatures drop, fleas seeking indoor harboring",
        winter: "Survive and reproduce in heated homes, reduced outdoor activity but indoor infestations persist"
      },
      propertyTypes: [
        "Pet-friendly rental properties and housing",
        "Properties with gardens and outdoor pet access",
        "Student accommodation allowing pets",
        "Ground floor flats and houses with direct garden access",
        "Veterinary clinics and pet-related businesses",
        "Pet grooming and boarding facilities",
        "Properties previously occupied by pet owners",
        "Holiday rentals and accommodation accepting pets"
      ]
    },
    urgencyLevel: "emergency",
    relatedPests: ["bed-bugs", "mites", "ticks"]
  },
  {
    id: "foxes",
    name: "Foxes",
    scientificName: "Vulpes vulpes",
    category: "wildlife",
    commonNames: ["Urban fox", "Red fox"],
    description: "The haunting scream of urban foxes in the middle of the night can be deeply unsettling for London residents, and discovering evidence of fox activity in your garden - from scattered rubbish and strong musky odors to holes dug in prized lawns - can be frustrating and concerning, especially for families with small children or pets. At Pest Pro London, we understand the complex emotions that urban fox problems create - while these intelligent, adaptable animals are often admired for their resilience, they can cause significant stress when they establish territories in residential areas, creating noise disturbances, property damage, and potential safety concerns for beloved pets. Our wildlife management specialists recognize that foxes require a different approach than traditional pest control, balancing humane deterrence methods with effective long-term solutions that respect wildlife protection laws while addressing legitimate resident concerns. We've helped countless London families create fox-free environments that protect their gardens, pets, and peace of mind through professional habitat modification and proven deterrent systems.",
    identification: {
      size: "Body: 60-75cm, Tail: 40cm",
      color: "Reddish-brown fur, white chest, black legs",
      distinguishingFeatures: [
        "Bushy tail with white tip",
        "Pointed ears",
        "Dog-like appearance",
        "Slender snout"
      ],
      soundsMade: ["Screaming", "Barking", "Whimpering"],
      droppings: "Dark, twisted, 5-7cm, pointed ends",
      tracks: "Four-toed prints, 5cm long"
    },
    behavior: {
      activityTime: "Mainly nocturnal, some daytime activity",
      nestingHabits: "Den under sheds, in gardens",
      feedingHabits: "Opportunistic omnivores",
      lifespan: "2-3 years in urban areas",
      reproductionRate: "4-5 cubs per year"
    },
    habitat: {
      preferredEnvironment: ["Gardens", "Parks", "Railway embankments", "Cemeteries"],
      commonHidingSpots: [
        "Under sheds",
        "Dense vegetation",
        "Compost heaps",
        "Under decking",
        "Derelict buildings"
      ],
      signsOfInfestation: [
        "Strong musky smell",
        "Holes dug in lawn",
        "Overturned bins",
        "Droppings",
        "Worn paths",
        "Food remains"
      ]
    },
    risks: {
      healthRisks: [
        "Mange transmission to pets",
        "Toxocariasis (rare)",
        "Bite risk if cornered",
        "Parasite transmission"
      ],
      propertyDamage: [
        "Dig up lawns",
        "Damage fences",
        "Foul gardens",
        "Scatter rubbish",
        "Kill small pets"
      ],
      businessRisks: [
        "Disturb customers",
        "Hygiene concerns",
        "Damage to grounds"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Secure food sources",
        "Remove shelter options",
        "Install motion lights",
        "Use deterrents"
      ],
      exclusionMethods: [
        "Secure fencing (6ft+)",
        "Block access under sheds",
        "Protect chicken coops",
        "Secure compost bins"
      ],
      cleaningTips: [
        "Don't leave pet food out",
        "Secure bins",
        "Clear fallen fruit",
        "Remove food sources"
      ],
      landscapingTips: [
        "Clear overgrown areas",
        "Block den sites",
        "Remove cover",
        "Install prickly plants"
      ]
    },
    treatment: {
      professionalMethods: [
        "Deterrent installation",
        "Proofing work",
        "Den removal",
        "Repellent application",
        "Habitat modification"
      ],
      timeline: "Ongoing management approach",
      preparation: [
        "Identify den sites",
        "Remove food sources",
        "Clear access",
        "Secure pets"
      ],
      followUp: "Monitor and maintain deterrents"
    },
    londonSpecific: {
      commonBoroughs: ["Bromley - extensive suburban areas with large gardens providing ideal territory and abundant food sources", "Barnet - mixture of parkland and residential areas creating perfect fox habitat corridors", "Croydon - suburban sprawl with railway embankments and green spaces supporting large fox populations", "Richmond - Richmond Park and surrounding areas provide natural habitat adjacent to residential properties", "Harrow - hilltop location with extensive green belt areas and mature suburban gardens", "Wandsworth - combination of common land and family homes with gardens providing food and shelter", "Greenwich - parkland areas adjacent to residential developments create population pressure on gardens", "Enfield - extensive green spaces and suburban gardens near countryside provide ideal conditions"],
      seasonalActivity: {
        spring: "Cubs are born in underground dens, increasing territorial behavior and family group activity. Adult foxes become more aggressive in defending territory and may be more visible during daylight hours while hunting for their young.",
        summer: "Family groups are most active with cubs learning to hunt and explore. This is when garden damage peaks as young foxes practice foraging skills. Noise complaints increase as cubs are vocal and playful.",
        autumn: "Young foxes disperse to find new territories, often appearing in previously unaffected gardens. Competition for territory increases, leading to more aggressive behavior and increased scavenging in residential areas.",
        winter: "Mating season brings the most vocal activity with haunting screams throughout the night. Established pairs may dig new dens under sheds or in gardens. Food scarcity drives foxes to raid bins and pet food more aggressively."
      },
      propertyTypes: ["Suburban gardens with established shrubs and trees providing cover and potential den sites", "Properties adjacent to parks, commons, and green corridors that provide natural habitat access", "Large gardens with outbuildings like sheds, summerhouses, and decking that offer denning opportunities", "Golf courses and sports grounds providing open hunting areas adjacent to residential developments", "Railway embankments and transport corridors creating wildlife highways through urban areas", "Allotments and community gardens offering food sources and minimal human disturbance during night hours", "Cemetery grounds providing quiet, undisturbed areas with mature vegetation ideal for establishing territories", "Properties with chicken coops, rabbit hutches, or other small animals that attract fox attention as potential prey"]
    },
    urgencyLevel: "low",
    relatedPests: ["rats", "squirrels"]
  },
  {
    id: "squirrels",
    name: "Squirrels",
    scientificName: "Sciurus carolinensis",
    category: "wildlife",
    commonNames: ["Grey squirrel", "Tree rat"],
    description: "The sudden sound of scampering, scratching, and chattering in your loft space can be deeply unsettling, particularly when you realize these noises are caused by grey squirrels that have invaded your home. At Pest Pro London, we understand the unique challenges that squirrel infestations present - these intelligent, agile creatures can cause thousands of pounds worth of damage by chewing through electrical cables, destroying insulation, and creating fire hazards, all while being legally protected from cruel treatment methods. Unlike rats or mice, squirrels are large, strong, and persistent, capable of enlarging small entry points and returning repeatedly even after removal. Our specialists have extensive experience with humane squirrel control across London, understanding that these invasive North American species pose serious risks to both property safety and our native red squirrel populations, requiring swift professional intervention that balances effective removal with legal compliance and animal welfare considerations.",
    identification: {
      size: "Body: 25-30cm, Tail: 20-25cm",
      color: "Grey fur with white underside",
      distinguishingFeatures: [
        "Bushy tail",
        "Large eyes",
        "Prominent ears",
        "Strong hind legs",
        "Sharp claws"
      ],
      soundsMade: ["Chattering", "Scratching", "Running in loft"],
      droppings: "Rounded, 8-10mm, light brown",
      tracks: "Four toes front, five toes back"
    },
    behavior: {
      activityTime: "Diurnal, most active dawn and dusk",
      nestingHabits: "Build dreys in trees or attics",
      feedingHabits: "Nuts, seeds, bird eggs, bulbs",
      lifespan: "6-12 years",
      reproductionRate: "2 litters per year, 2-4 young"
    },
    habitat: {
      preferredEnvironment: ["Woodlands", "Parks", "Gardens", "Roof spaces"],
      commonHidingSpots: [
        "Loft spaces",
        "Wall cavities",
        "Tree canopy",
        "Roof eaves",
        "Chimneys"
      ],
      signsOfInfestation: [
        "Noise in loft",
        "Droppings",
        "Gnaw marks",
        "Nest materials",
        "Entry holes",
        "Stripped bark"
      ]
    },
    risks: {
      healthRisks: [
        "Disease transmission (rare)",
        "Parasite introduction",
        "Contamination from droppings"
      ],
      propertyDamage: [
        "Chewed electrical cables",
        "Damaged insulation",
        "Structural damage",
        "Water pipe damage",
        "Fire risk"
      ],
      businessRisks: [
        "Power outages",
        "Fire hazards",
        "Structural repairs",
        "Business disruption"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Remove food sources",
        "Trim tree branches",
        "Install baffles",
        "Protect bird feeders"
      ],
      exclusionMethods: [
        "Seal entry holes",
        "Install metal mesh",
        "Trim branches 3m from roof",
        "Cap chimneys"
      ],
      cleaningTips: [
        "Secure bird feeders",
        "Clear fallen nuts/fruits",
        "Protect bulbs",
        "Remove access routes"
      ],
      landscapingTips: [
        "Plant squirrel-resistant bulbs",
        "Use metal guards on trees",
        "Install barriers",
        "Choose appropriate plants"
      ]
    },
    treatment: {
      professionalMethods: [
        "Live trapping",
        "Proofing installation",
        "Deterrent systems",
        "One-way doors",
        "Spring traps (professionals only)"
      ],
      timeline: "2-4 weeks for removal and proofing",
      preparation: [
        "Identify all entry points",
        "Clear loft access",
        "Remove food sources",
        "Trim vegetation"
      ],
      followUp: "Check proofing after 1 month, maintain barriers"
    },
    londonSpecific: {
      commonBoroughs: ["Richmond - extensive parks and mature tree coverage provide ideal habitat and access routes to properties", "Hampstead - wooded areas and large Victorian houses with accessible roof spaces", "Wimbledon - combination of Common land and residential properties with suitable nesting sites", "Greenwich - historic parkland adjacent to period properties creates perfect conditions", "Kensington & Chelsea - garden squares and mature plane trees provide highway networks to expensive properties", "Camden - Regent's Park and Primrose Hill create population centers that spread to surrounding terraces", "Islington - Highgate Woods and mature street trees provide access to converted period houses", "Wandsworth - Clapham and Tooting Commons adjacent to family homes with bird feeders and gardens"],
      seasonalActivity: {
        spring: "First breeding season begins as temperatures warm and food becomes abundant. Pregnant females actively seek secure nesting sites in roof spaces, often causing initial property damage. Young squirrels become active and curious, exploring beyond nest sites.",
        summer: "Peak activity with second litter season creating maximum population pressure. Adult and juvenile squirrels are most active, causing extensive garden damage and property intrusion. Bird feeding stations experience heaviest raiding activity.",
        autumn: "Intensive food gathering and caching behavior as squirrels prepare for winter. This is prime invasion season as they seek dry, warm storage and nesting areas. Tree cutting and garden maintenance disturbs outdoor nests, driving them indoors.",
        winter: "Maximum property invasion as squirrels seek heated shelter in loft spaces and wall cavities. Cold weather drives them to remain indoors longer, causing sustained damage to insulation and cables while building substantial nest structures."
      },
      propertyTypes: ["Victorian and Edwardian houses with accessible roof lines and mature garden settings", "Properties adjacent to parks, commons, and wooded areas providing natural habitat corridors", "Houses with mature gardens containing nut trees, bird feeders, and fruit trees that attract populations", "Period conversions with original roof access points and multiple entry opportunities from shared garden areas", "Detached and semi-detached homes in leafy suburbs where tree canopy provides aerial access routes", "Properties with solar panels creating warm microclimates and potential nesting areas underneath installations", "Heritage buildings in conservation areas where tree preservation orders prevent proper vegetation management", "Family homes with children's play equipment and pet food sources creating attractive foraging opportunities"]
    },
    urgencyLevel: "medium",
    relatedPests: ["rats", "mice"]
  },
  {
    id: "pigeons",
    name: "Pigeons",
    scientificName: "Columba livia",
    category: "birds",
    commonNames: ["Feral pigeon", "City pigeon", "Flying rats"],
    description: "The sight of pigeons congregating on your building, leaving acidic droppings that stain and corrode surfaces, can be incredibly frustrating for any London property owner. At Pest Pro London, we understand the overwhelming nature of pigeon problems - these persistent birds multiply rapidly, create serious health hazards through their droppings, and can cause thousands of pounds in structural damage to buildings while being notoriously difficult to deter permanently. Often dismissed as just 'messy birds,' pigeons actually pose significant health risks through over 60 transmissible diseases, create slip hazards with their corrosive droppings, and cause substantial property damage to gutters, stonework, and roofing materials. Our experienced bird management specialists have helped countless London property owners - from residential buildings to commercial premises - implement effective, humane, and legal solutions that provide long-term relief from pigeon problems while protecting both property values and public health in compliance with wildlife protection legislation.",
    identification: {
      size: "32-37cm length, 64-72cm wingspan",
      color: "Grey with iridescent neck, varied patterns",
      distinguishingFeatures: [
        "Plump body",
        "Small head",
        "Reddish feet",
        "Cooing call",
        "Iridescent feathers"
      ],
      soundsMade: ["Cooing", "Wing clapping", "Bill clicking"],
      droppings: "White/green splatter, acidic",
      tracks: "Three toes forward, one back"
    },
    behavior: {
      activityTime: "Diurnal, roost at night",
      nestingHabits: "Simple nests on ledges, year-round breeding",
      feedingHabits: "Scavengers, human food waste",
      lifespan: "3-5 years urban",
      reproductionRate: "2 eggs, up to 6 broods annually"
    },
    habitat: {
      preferredEnvironment: ["Building ledges", "Bridges", "Train stations", "Balconies"],
      commonHidingSpots: [
        "Under bridges",
        "Building alcoves",
        "Roof spaces",
        "Derelict buildings",
        "Behind signage"
      ],
      signsOfInfestation: [
        "Heavy fouling",
        "Nesting materials",
        "Feathers",
        "Dead birds",
        "Noise complaints"
      ]
    },
    risks: {
      healthRisks: [
        "Histoplasmosis",
        "Cryptococcosis", 
        "Psittacosis",
        "Salmonella",
        "E. coli",
        "Bird mites"
      ],
      propertyDamage: [
        "Corrosive droppings",
        "Blocked gutters",
        "Damaged stonework",
        "Contaminated water tanks",
        "Slip hazards"
      ],
      businessRisks: [
        "Health violations",
        "Customer deterrent",
        "Staff health issues",
        "Cleaning costs",
        "Legal liability"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Remove food sources",
        "Eliminate water",
        "Block roosting sites",
        "Regular cleaning"
      ],
      exclusionMethods: [
        "Bird netting",
        "Spike systems",
        "Wire systems", 
        "Electric tracks",
        "Optical gels"
      ],
      cleaningTips: [
        "Don't feed birds",
        "Secure waste",
        "Clean spills promptly",
        "Remove nests legally"
      ],
      landscapingTips: [
        "Prune roosting trees",
        "Remove ledges",
        "Install slopes",
        "Design out perches"
      ]
    },
    treatment: {
      professionalMethods: [
        "Installation of deterrents",
        "Trapping programs",
        "Falconry",
        "Bioacoustic systems",
        "Population management"
      ],
      timeline: "Ongoing management required",
      preparation: [
        "Clean all fouling",
        "Survey all areas",
        "Plan access",
        "Consider regulations"
      ],
      followUp: "Regular maintenance of systems"
    },
    londonSpecific: {
      commonBoroughs: ["Westminster - tourist areas and historic buildings provide abundant food sources and roosting sites", "City of London - office buildings and construction sites create perfect nesting opportunities with minimal disturbance", "Camden - mix of commercial and residential areas with market food waste and building ledges", "Southwark - Thames-side developments and high-rise buildings offer ideal roosting conditions", "Tower Hamlets - Canary Wharf buildings and construction activity provide nesting sites and food sources", "Kensington & Chelsea - mansion blocks and period buildings with ornate ledges perfect for nesting", "Lambeth - railway infrastructure and mixed-use developments create ideal pigeon habitat", "Greenwich - historic buildings and Thames-side location provide traditional roosting sites"],
      seasonalActivity: {
        spring: "Primary breeding season begins with increased territorial behavior and nest building. Mated pairs become more aggressive in defending roosting sites. Property fouling intensifies as birds spend more time at nesting locations.",
        summer: "Peak breeding activity with multiple broods possible. Young birds fledge and join flocks, dramatically increasing local population density. Maximum fouling and damage to building surfaces occurs during this period.",
        autumn: "Newly independent young birds disperse to find territories, often discovering new building sites. Flocks consolidate around reliable food sources. Building damage assessment becomes apparent as summer growth impacts become visible.",
        winter: "Populations concentrate around heated buildings and consistent food sources like shopping areas and transport hubs. Cold weather drives birds to seek shelter in building cavities and covered areas, increasing indoor nesting attempts."
      },
      propertyTypes: ["Historic buildings with ornate stonework providing multiple ledges and nesting crevices perfect for pigeon colonies", "Railway stations and transport hubs offering shelter, warmth, and abundant food sources from passenger activity", "Thames bridges and infrastructure providing high, undisturbed roosting sites with easy access to water sources", "Commercial buildings with flat roofs, air conditioning units, and signage creating ideal nesting platforms", "Office blocks with ledges, balconies, and architectural features that substitute for natural cliff faces", "Retail properties with awnings, canopies, and entrance areas that provide shelter and proximity to food sources", "Residential mansion blocks and conversions with multiple access points and less frequent disturbance", "Industrial buildings and warehouses offering large, unguarded roof spaces ideal for establishing significant colonies"]
    },
    urgencyLevel: "medium",
    relatedPests: ["seagulls", "starlings"]
  },
  {
    id: "silverfish",
    name: "Silverfish",
    scientificName: "Lepisma saccharina",
    category: "insects",
    commonNames: ["Fish moth", "Carpet shark"],
    description: "Discovering silverfish in your home can be particularly unsettling - these alien-looking, fast-moving insects seem to appear from nowhere and disappear just as quickly, leaving you wondering where they're hiding and what damage they're causing to your precious belongings. At Pest Pro London, we understand the unique frustration that silverfish bring to homeowners who discover mysterious holes in clothing, damaged book pages, or strange yellow stains on wallpaper with no obvious explanation. These primitive insects are masters of concealment, thriving in the humid conditions common to London's older buildings, and they pose a serious threat to anything containing cellulose, starch, or protein - from your family photos and important documents to expensive clothing and treasured books. Our specialists have protected countless London homes from these destructive pests, understanding that while silverfish don't pose direct health risks, the sentimental and financial value of items they destroy can be irreplaceable, making professional elimination essential for preserving your property and peace of mind.",
    identification: {
      size: "12-19mm long",
      color: "Silver-grey, metallic appearance",
      distinguishingFeatures: [
        "Distinctive teardrop or carrot-shaped body that tapers from head to tail",
        "Three prominent tail filaments (cerci) extending from the rear abdomen",
        "Two long, thread-like antennae that are often longer than the body",
        "Completely wingless throughout their entire lifecycle",
        "Characteristic fish-like wiggling movement when running at high speed",
        "Flattened body perfectly adapted for hiding in thin cracks and crevices",
        "Metallic silver scales covering the body that create a shimmering appearance",
        "Small compound eyes positioned on the sides of the head"
      ],
      soundsMade: ["None"],
      droppings: "Small black pepper-like specs",
      tracks: "Irregular feeding marks on paper"
    },
    behavior: {
      activityTime: "Nocturnal, hide during day",
      nestingHabits: "No nests, hide in cracks",
      feedingHabits: "Starch, glue, paper, textiles",
      lifespan: "2-8 years",
      reproductionRate: "20-60 eggs per year"
    },
    habitat: {
      preferredEnvironment: ["Bathrooms", "Kitchens", "Basements", "Attics"],
      commonHidingSpots: [
        "Behind wallpaper",
        "Under bathtubs",
        "In bookcases",
        "Storage boxes",
        "Pipe lagging",
        "Window frames"
      ],
      signsOfInfestation: [
        "Live insects",
        "Yellow stains",
        "Feeding marks",
        "Small holes in fabric",
        "Scales/molted skins"
      ]
    },
    risks: {
      healthRisks: [
        "Allergens from scales",
        "Contamination of food",
        "No disease transmission"
      ],
      propertyDamage: [
        "Damaged books",
        "Holes in clothing",
        "Wallpaper damage",
        "Contaminated food",
        "Damaged documents"
      ],
      businessRisks: [
        "Archive damage",
        "Library losses",
        "Stock damage",
        "Customer complaints"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Reduce humidity below 50%",
        "Fix leaks",
        "Improve ventilation",
        "Use dehumidifiers"
      ],
      exclusionMethods: [
        "Seal cracks",
        "Caulk gaps",
        "Weather stripping",
        "Repair damaged areas"
      ],
      cleaningTips: [
        "Vacuum regularly",
        "Store items properly",
        "Remove old papers",
        "Clean up food debris"
      ],
      landscapingTips: [
        "Fix exterior moisture",
        "Clear gutters",
        "Improve drainage"
      ]
    },
    treatment: {
      professionalMethods: [
        "Residual insecticides",
        "Dust formulations",
        "Desiccant dusts",
        "IGR applications",
        "Monitoring traps"
      ],
      timeline: "2-3 treatments over 4-6 weeks",
      preparation: [
        "Reduce humidity",
        "Clear treatment areas",
        "Remove stored items",
        "Fix moisture sources"
      ],
      followUp: "Monitor with traps, maintain dry conditions"
    },
    londonSpecific: {
      commonBoroughs: ["Kensington & Chelsea - period mansion blocks with poor ventilation and high humidity levels", "Camden - Victorian terraces with original lime mortar creating perfect moisture conditions", "Westminster - historic buildings with inadequate modern ventilation systems", "Greenwich - heritage properties with traditional construction methods that retain moisture", "Islington - converted period houses where modern bathrooms create humidity issues", "Hackney - older social housing with ventilation problems and moisture accumulation", "Lambeth - ground floor flats in converted Victorian houses prone to rising damp", "Tower Hamlets - historic warehouse conversions with poor humidity control"],
      seasonalActivity: {
        spring: "Breeding activity increases as temperatures rise and humidity levels climb. Silverfish emerge from winter hiding spots to seek new food sources and mating opportunities. This is when property damage to stored items becomes most apparent.",
        summer: "Peak activity period as London's humid summer conditions create ideal breeding environments. High humidity from summer storms and poor ventilation in older properties leads to rapid population growth and increased damage to paper goods and textiles.",
        autumn: "Silverfish move deeper into heated areas of buildings as external temperatures drop. They concentrate around boiler rooms, airing cupboards, and heated bathrooms where winter humidity levels remain high due to poor ventilation.",
        winter: "Activity focuses on heated, humid areas like bathrooms, kitchens, and utility rooms. Silverfish cluster near radiators, hot water pipes, and in poorly ventilated areas where condensation creates ideal microenvironments for survival."
      },
      propertyTypes: ["Victorian properties with original lime mortar walls that naturally retain moisture and provide perfect hiding spots", "Basement flats with rising damp issues and poor natural ventilation creating year-round humidity problems", "Historic libraries and archives where temperature and humidity control is challenging in older buildings", "Art galleries and museums in heritage buildings struggling with conservation-grade environmental controls", "Period conversions where modern bathrooms have been added without adequate ventilation systems", "Ground floor flats in converted houses where natural moisture migration creates ongoing humidity issues", "Student accommodation in older buildings where poor maintenance and overcrowding exacerbate moisture problems", "Social housing in older tower blocks with concrete construction that promotes condensation issues"]
    },
    urgencyLevel: "low",
    relatedPests: ["booklice", "carpet beetles"]
  }
];