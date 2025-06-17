export interface PestData {
  id: string;
  name: string;
  scientificName: string;
  category: 'rodents' | 'insects' | 'birds' | 'wildlife';
  commonNames: string[];
  description: string;
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
    description: "Rats are one of the most common pest problems in London, thriving in both residential and commercial properties. They pose serious health risks and can cause significant property damage.",
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
      commonBoroughs: ["Westminster", "Camden", "Tower Hamlets", "Southwark", "Hackney"],
      seasonalActivity: {
        spring: "Increased outdoor activity, seeking food for young",
        summer: "Peak breeding season, garden invasions common",
        autumn: "Moving indoors for warmth and shelter",
        winter: "Highest home invasion rates, seeking warmth"
      },
      propertyTypes: ["Victorian terraces", "Restaurant basements", "Council estates", "Thames-side properties"]
    },
    urgencyLevel: "high",
    relatedPests: ["mice", "squirrels"]
  },
  {
    id: "mice",
    name: "Mice",
    scientificName: "Mus musculus",
    category: "rodents",
    commonNames: ["House mouse", "Field mouse", "Common mouse"],
    description: "Mice are smaller than rats but equally problematic, capable of squeezing through tiny gaps and breeding rapidly indoors. They're particularly common in London homes during autumn and winter.",
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
      commonBoroughs: ["Kensington & Chelsea", "Westminster", "Camden", "Islington"],
      seasonalActivity: {
        spring: "Outdoor breeding increases",
        summer: "Garden and shed activity",
        autumn: "Mass indoor migration",
        winter: "Peak indoor infestations"
      },
      propertyTypes: ["Victorian conversions", "Restaurant kitchens", "Student accommodation", "Older flats"]
    },
    urgencyLevel: "medium",
    relatedPests: ["rats"]
  },
  {
    id: "cockroaches",
    name: "Cockroaches",
    scientificName: "Blattella germanica & Periplaneta americana",
    category: "insects",
    commonNames: ["German cockroach", "American cockroach", "Oriental cockroach"],
    description: "Cockroaches are resilient insects that thrive in warm, humid environments. In London, they're commonly found in commercial kitchens, older apartment buildings, and properties with central heating.",
    identification: {
      size: "German: 12-15mm, American: 35-40mm, Oriental: 20-25mm",
      color: "Light brown to dark brown/black",
      distinguishingFeatures: [
        "Flattened oval body",
        "Long antennae",
        "Six legs with spines",
        "Some species have wings"
      ],
      soundsMade: ["Clicking sounds", "Rustling when disturbed"],
      droppings: "Small, dark, cylindrical or round pellets",
      tracks: "Brown staining, egg cases (oothecae)"
    },
    behavior: {
      activityTime: "Nocturnal, hide during day",
      nestingHabits: "Aggregate in warm, moist areas",
      feedingHabits: "Omnivorous scavengers, eat anything organic",
      lifespan: "German: 100-200 days, American: up to 2 years",
      reproductionRate: "German: 4-8 oothecae, 30-40 eggs each"
    },
    habitat: {
      preferredEnvironment: ["Kitchens", "Bathrooms", "Basements", "Heating ducts", "Drains"],
      commonHidingSpots: [
        "Behind refrigerators",
        "Under sinks",
        "Inside appliances",
        "Cracks in walls",
        "Behind cookers",
        "Electrical boxes"
      ],
      signsOfInfestation: [
        "Live/dead insects",
        "Egg cases",
        "Fecal spots",
        "Musty odor",
        "Shed skins",
        "Smear marks"
      ]
    },
    risks: {
      healthRisks: [
        "Salmonella",
        "E. coli",
        "Dysentery",
        "Gastroenteritis",
        "Allergies and asthma",
        "Food poisoning"
      ],
      propertyDamage: [
        "Food contamination",
        "Damage to paper/fabric",
        "Staining of surfaces",
        "Unpleasant odors"
      ],
      businessRisks: [
        "Health code violations",
        "Immediate closure risk",
        "Reputation damage",
        "Loss of customers",
        "Legal action"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Reduce moisture",
        "Fix leaking pipes",
        "Improve ventilation",
        "Regular deep cleaning"
      ],
      exclusionMethods: [
        "Seal cracks and crevices",
        "Install door sweeps",
        "Screen drains",
        "Seal pipe penetrations"
      ],
      cleaningTips: [
        "Clean daily",
        "Remove grease buildup",
        "Empty bins nightly",
        "Clean appliance motors"
      ],
      landscapingTips: [
        "Remove debris",
        "Fix exterior cracks",
        "Maintain drains",
        "Control exterior lighting"
      ]
    },
    treatment: {
      professionalMethods: [
        "Gel baits",
        "Insect growth regulators",
        "Residual sprays",
        "Dust formulations",
        "Monitoring traps",
        "ULV fogging"
      ],
      timeline: "3-4 visits over 6-8 weeks for heavy infestations",
      preparation: [
        "Deep clean all areas",
        "Remove clutter",
        "Empty cabinets",
        "Fix water leaks"
      ],
      followUp: "Monthly monitoring for 3-6 months"
    },
    londonSpecific: {
      commonBoroughs: ["Tower Hamlets", "Newham", "Hackney", "Southwark", "Westminster"],
      seasonalActivity: {
        spring: "Increased activity as temperatures rise",
        summer: "Peak breeding and activity",
        autumn: "Seeking warm indoor areas",
        winter: "Concentrated in heated buildings"
      },
      propertyTypes: ["Restaurant kitchens", "Tower blocks", "Food processing", "Older apartments"]
    },
    urgencyLevel: "high",
    relatedPests: ["ants", "silverfish"]
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
    relatedPests: ["fleas", "carpet-beetles", "booklice"]
  },
  {
    id: "wasps",
    name: "Wasps",
    scientificName: "Vespula vulgaris & Vespula germanica",
    category: "insects",
    commonNames: ["Common wasp", "German wasp", "Yellow jacket"],
    description: "Wasps are social insects that become particularly troublesome in late summer. In London, they nest in gardens, lofts, and wall cavities, becoming aggressive when their nests are threatened.",
    identification: {
      size: "Workers: 12-17mm, Queens: 20mm",
      color: "Bright yellow and black stripes",
      distinguishingFeatures: [
        "Distinctive waist",
        "Smooth body (not fuzzy)",
        "Two pairs of wings",
        "Yellow legs",
        "Black antennae"
      ],
      soundsMade: ["Buzzing", "Paper rustling from nest"],
      droppings: "Not applicable",
      tracks: "Paper-like nest material"
    },
    behavior: {
      activityTime: "Diurnal, most active in warm weather",
      nestingHabits: "Build paper nests from chewed wood pulp",
      feedingHabits: "Sweet foods, protein for larvae",
      lifespan: "Workers: 12-22 days, Queens: 1 year",
      reproductionRate: "One queen can produce 5,000-10,000 workers"
    },
    habitat: {
      preferredEnvironment: ["Gardens", "Lofts", "Sheds", "Wall cavities", "Trees"],
      commonHidingSpots: [
        "Roof spaces",
        "Under eaves",
        "Garden sheds",
        "Compost bins",
        "Bird boxes",
        "Underground burrows"
      ],
      signsOfInfestation: [
        "High wasp activity",
        "Visible nest",
        "Flight paths to entry point",
        "Chewed wood",
        "Aggressive behavior"
      ]
    },
    risks: {
      healthRisks: [
        "Painful stings",
        "Allergic reactions",
        "Anaphylaxis risk",
        "Multiple stings",
        "Secondary infections"
      ],
      propertyDamage: [
        "Wood damage for nesting",
        "Staining from nests",
        "Structural concerns with large nests"
      ],
      businessRisks: [
        "Customer safety",
        "Outdoor dining disruption",
        "Event cancellations",
        "Staff injuries",
        "Liability issues"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Remove food sources",
        "Cover bins tightly",
        "Clean up fallen fruit",
        "Avoid bright colors"
      ],
      exclusionMethods: [
        "Seal entry points in spring",
        "Install fly screens",
        "Block old nest sites",
        "Maintain building exterior"
      ],
      cleaningTips: [
        "Clean BBQ areas",
        "Remove sugary spills",
        "Empty bins regularly",
        "Cover food outdoors"
      ],
      landscapingTips: [
        "Remove rotting fruit",
        "Maintain compost properly",
        "Fill ground holes",
        "Trim overhanging branches"
      ]
    },
    treatment: {
      professionalMethods: [
        "Insecticide dust",
        "Foam treatments",
        "Nest removal",
        "Residual sprays",
        "Trapping programs"
      ],
      timeline: "Usually resolved in one visit",
      preparation: [
        "Identify nest location",
        "Clear access route",
        "Close windows",
        "Keep people away"
      ],
      followUp: "Check after 48 hours, remove nest after 2 weeks"
    },
    londonSpecific: {
      commonBoroughs: ["Richmond", "Bromley", "Barnet", "Harrow", "Sutton"],
      seasonalActivity: {
        spring: "Queens emerge, establish nests",
        summer: "Colony growth, increasing activity",
        autumn: "Peak aggression, seeking sweet foods",
        winter: "All die except new queens"
      },
      propertyTypes: ["Suburban houses", "Garden sheds", "Schools", "Parks", "Beer gardens"]
    },
    urgencyLevel: "high",
    relatedPests: ["hornets", "bees"]
  },
  {
    id: "ants",
    name: "Ants",
    scientificName: "Lasius niger & Monomorium pharaonis",
    category: "insects",
    commonNames: ["Black garden ant", "Pharaoh ant", "Ghost ant"],
    description: "Ants are social insects that can quickly become a nuisance when they invade properties searching for food. Pharaoh ants are particularly problematic in London's heated buildings.",
    identification: {
      size: "Workers: 2-5mm, Queens: 9-15mm",
      color: "Black, brown, or yellowish",
      distinguishingFeatures: [
        "Three body segments",
        "Elbowed antennae",
        "Narrow waist",
        "Six legs",
        "Some species have wings"
      ],
      soundsMade: ["None audible to humans"],
      droppings: "Not visible",
      tracks: "Visible trails, small dirt mounds"
    },
    behavior: {
      activityTime: "Active during warm weather",
      nestingHabits: "Underground colonies or in wall voids",
      feedingHabits: "Sweet substances, proteins, grease",
      lifespan: "Workers: 1-3 months, Queens: up to 15 years",
      reproductionRate: "Thousands of eggs per queen annually"
    },
    habitat: {
      preferredEnvironment: ["Kitchens", "Gardens", "Under paving", "Wall cavities"],
      commonHidingSpots: [
        "Under kitchen units",
        "Behind skirting boards",
        "In wall insulation",
        "Under patios",
        "Plant pots",
        "Electrical boxes"
      ],
      signsOfInfestation: [
        "Ant trails",
        "Small dirt mounds",
        "Ants around food",
        "Flying ants in summer",
        "Nest entrances"
      ]
    },
    risks: {
      healthRisks: [
        "Food contamination",
        "Pharaoh ants in hospitals",
        "Allergic reactions (rare)",
        "Disease transmission risk"
      ],
      propertyDamage: [
        "Undermining paving",
        "Electrical equipment damage",
        "Food spoilage",
        "Garden damage"
      ],
      businessRisks: [
        "Food safety violations",
        "Customer complaints",
        "Product contamination",
        "Healthcare facility risks"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Eliminate food sources",
        "Fix water leaks",
        "Seal food containers",
        "Clean up spills"
      ],
      exclusionMethods: [
        "Seal cracks and gaps",
        "Use ant barriers",
        "Caulk entry points",
        "Install door sweeps"
      ],
      cleaningTips: [
        "Wipe surfaces daily",
        "Clean pet bowls",
        "Vacuum regularly",
        "Empty bins daily"
      ],
      landscapingTips: [
        "Keep plants away from walls",
        "Remove aphid-infested plants",
        "Maintain dry perimeter",
        "Use ant-resistant mulch"
      ]
    },
    treatment: {
      professionalMethods: [
        "Gel baits",
        "Granular baits",
        "Residual sprays",
        "Dust formulations",
        "Colony elimination systems"
      ],
      timeline: "2-4 weeks for colony elimination",
      preparation: [
        "Clean all surfaces",
        "Remove alternative food",
        "Note trail locations",
        "Clear treatment areas"
      ],
      followUp: "Monitor for 2-4 weeks, retreat if necessary"
    },
    londonSpecific: {
      commonBoroughs: ["All London boroughs affected", "Pharaoh ants in Camden", "Tower Hamlets hospitals"],
      seasonalActivity: {
        spring: "Colony expansion begins",
        summer: "Peak activity, flying ant day",
        autumn: "Increased indoor invasions",
        winter: "Pharaoh ants active indoors"
      },
      propertyTypes: ["All property types", "Hospitals for Pharaoh ants", "Ground floor flats", "Restaurants"]
    },
    urgencyLevel: "medium",
    relatedPests: ["cockroaches", "silverfish"]
  },
  {
    id: "spiders",
    name: "Spiders",
    scientificName: "Various species",
    category: "insects",
    commonNames: ["House spider", "False widow", "Cellar spider", "Garden spider"],
    description: "While most UK spiders are harmless, some species like false widows can cause concern. Spiders are beneficial predators but become pests when they invade homes in large numbers.",
    identification: {
      size: "Body: 3-15mm depending on species",
      color: "Brown, black, grey, some with markings",
      distinguishingFeatures: [
        "Eight legs",
        "Two body segments",
        "Multiple eyes (usually 8)",
        "Spinnerets at rear",
        "Some hairy, some smooth"
      ],
      soundsMade: ["None"],
      droppings: "Small dark spots below webs",
      tracks: "Webs in corners and crevices"
    },
    behavior: {
      activityTime: "Various, some nocturnal, some diurnal",
      nestingHabits: "Solitary, create webs or hunt actively",
      feedingHabits: "Carnivorous, eat insects",
      lifespan: "1-2 years typically",
      reproductionRate: "100-400 eggs per egg sac"
    },
    habitat: {
      preferredEnvironment: ["Dark corners", "Basements", "Attics", "Gardens", "Sheds"],
      commonHidingSpots: [
        "Behind furniture",
        "Window frames",
        "Ceiling corners",
        "Under eaves",
        "Garages",
        "Cupboards"
      ],
      signsOfInfestation: [
        "Multiple webs",
        "Live spiders",
        "Egg sacs",
        "Dead insects in webs",
        "Spider droppings"
      ]
    },
    risks: {
      healthRisks: [
        "False widow bites",
        "Allergic reactions",
        "Secondary infections",
        "Psychological distress"
      ],
      propertyDamage: [
        "Unsightly webs",
        "Staining from droppings"
      ],
      businessRisks: [
        "Customer complaints",
        "Staff concerns",
        "Cleaning costs"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Reduce clutter",
        "Control humidity",
        "Limit outdoor lighting",
        "Seal entry points"
      ],
      exclusionMethods: [
        "Install door sweeps",
        "Seal cracks",
        "Use window screens",
        "Weather stripping"
      ],
      cleaningTips: [
        "Regular vacuuming",
        "Remove webs promptly",
        "Dust regularly",
        "Declutter storage areas"
      ],
      landscapingTips: [
        "Trim vegetation from walls",
        "Remove debris",
        "Control outdoor lighting",
        "Maintain tidy garden"
      ]
    },
    treatment: {
      professionalMethods: [
        "Residual sprays",
        "Web removal",
        "Dust applications",
        "Monitoring",
        "Exclusion work"
      ],
      timeline: "Usually 1-2 treatments",
      preparation: [
        "Clear treatment areas",
        "Note problem areas",
        "Remove clutter",
        "Vacuum existing webs"
      ],
      followUp: "Monitor and retreat if needed after 4 weeks"
    },
    londonSpecific: {
      commonBoroughs: ["All boroughs", "False widows increasing across London"],
      seasonalActivity: {
        spring: "Mating season begins",
        summer: "Garden species active",
        autumn: "Move indoors for warmth",
        winter: "Reduced activity"
      },
      propertyTypes: ["Older properties", "Garden sheds", "Garages", "Basements"]
    },
    urgencyLevel: "low",
    relatedPests: ["silverfish", "moths"]
  },
  {
    id: "moths",
    name: "Moths",
    scientificName: "Tineola bisselliella & Plodia interpunctella",
    category: "insects",
    commonNames: ["Clothes moth", "Carpet moth", "Pantry moth", "Indian meal moth"],
    description: "Moths can cause significant damage to natural fibers and stored food products. London's older properties with wool carpets and vintage clothing are particularly susceptible.",
    identification: {
      size: "Adults: 6-8mm (clothes), 8-10mm (pantry)",
      color: "Buff/golden (clothes), grey-brown (pantry)",
      distinguishingFeatures: [
        "Narrow wings when folded",
        "Feathery antennae",
        "Weak fliers",
        "Attracted to light (pantry)",
        "Avoid light (clothes)"
      ],
      soundsMade: ["None"],
      droppings: "Not visible",
      tracks: "Larvae cases, webbing, damaged materials"
    },
    behavior: {
      activityTime: "Adults mainly nocturnal",
      nestingHabits: "Lay eggs on food source",
      feedingHabits: "Larvae eat natural fibers or stored food",
      lifespan: "Adults: 2-4 weeks, Full cycle: 2-4 months",
      reproductionRate: "40-50 eggs per female"
    },
    habitat: {
      preferredEnvironment: ["Wardrobes", "Carpeted areas", "Pantries", "Dark undisturbed areas"],
      commonHidingSpots: [
        "Closets",
        "Under furniture",
        "Carpet edges",
        "Storage boxes",
        "Behind radiators",
        "Food cupboards"
      ],
      signsOfInfestation: [
        "Damaged fabrics",
        "Larvae cases",
        "Adult moths",
        "Webbing in food",
        "Bare patches in carpet"
      ]
    },
    risks: {
      healthRisks: [
        "Allergic reactions to larvae",
        "Food contamination",
        "Respiratory irritation"
      ],
      propertyDamage: [
        "Ruined clothing",
        "Damaged carpets",
        "Spoiled food",
        "Furniture damage",
        "Irreplaceable textiles"
      ],
      businessRisks: [
        "Stock damage",
        "Museum/gallery losses",
        "Hotel reputation",
        "Retail losses"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Regular cleaning",
        "Proper storage",
        "Control humidity",
        "Cedar products"
      ],
      exclusionMethods: [
        "Sealed storage",
        "Moth-proof bags",
        "Screen windows",
        "Door seals"
      ],
      cleaningTips: [
        "Vacuum regularly",
        "Clean before storage",
        "Wash at high temps",
        "Freeze susceptible items"
      ],
      landscapingTips: [
        "Not applicable"
      ]
    },
    treatment: {
      professionalMethods: [
        "Pheromone traps",
        "Residual sprays",
        "Fumigation",
        "Heat treatment",
        "Freezing",
        "IGR applications"
      ],
      timeline: "2-3 treatments over 6-8 weeks",
      preparation: [
        "Empty affected areas",
        "Wash/dry clean items",
        "Vacuum thoroughly",
        "Bag infested items"
      ],
      followUp: "Monitor with traps for 3 months"
    },
    londonSpecific: {
      commonBoroughs: ["Kensington & Chelsea", "Westminster", "Camden", "Islington"],
      seasonalActivity: {
        spring: "Adults emerge and mate",
        summer: "Peak breeding season",
        autumn: "Larvae feeding heavily",
        winter: "Heated homes allow activity"
      },
      propertyTypes: ["Period properties", "Museums", "Vintage shops", "Hotels"]
    },
    urgencyLevel: "medium",
    relatedPests: ["carpet beetles", "silverfish"]
  },
  {
    id: "fleas",
    name: "Fleas",
    scientificName: "Ctenocephalides felis & Ctenocephalides canis",
    category: "insects",
    commonNames: ["Cat flea", "Dog flea", "Human flea"],
    description: "Fleas are parasitic insects that feed on blood. In London, they're commonly brought in by pets or from previous tenants. They can survive without a host for months.",
    identification: {
      size: "Adults: 1-3mm",
      color: "Dark brown to reddish-brown",
      distinguishingFeatures: [
        "Flattened body side to side",
        "Large hind legs for jumping",
        "No wings",
        "Backward-pointing bristles"
      ],
      soundsMade: ["None"],
      droppings: "Black specks that turn red when wet",
      tracks: "Flea dirt in pet bedding"
    },
    behavior: {
      activityTime: "Active when host present",
      nestingHabits: "Eggs laid in host environment",
      feedingHabits: "Blood meals every few days",
      lifespan: "Adults: 2-3 months",
      reproductionRate: "40-50 eggs per day"
    },
    habitat: {
      preferredEnvironment: ["Pet bedding", "Carpets", "Upholstery", "Cracks in floors"],
      commonHidingSpots: [
        "Pet sleeping areas",
        "Under furniture",
        "Carpet fibers",
        "Between floorboards",
        "Soft furnishings"
      ],
      signsOfInfestation: [
        "Pets scratching",
        "Bites on ankles",
        "Jumping insects",
        "Flea dirt",
        "Red bite marks"
      ]
    },
    risks: {
      healthRisks: [
        "Allergic reactions",
        "Secondary infections",
        "Disease transmission",
        "Anemia in pets",
        "Tapeworms"
      ],
      propertyDamage: [
        "None direct",
        "Treatment costs",
        "Furniture disposal"
      ],
      businessRisks: [
        "Guest complaints",
        "Staff bites",
        "Reputation damage",
        "Compensation claims"
      ]
    },
    prevention: {
      environmentalChanges: [
        "Regular pet treatment",
        "Vacuum frequently",
        "Wash pet bedding",
        "Control humidity"
      ],
      exclusionMethods: [
        "Treat pets preventatively",
        "Inspect second-hand furniture",
        "Seal floor gaps"
      ],
      cleaningTips: [
        "Vacuum daily during outbreak",
        "Steam clean carpets",
        "Wash bedding at 60°C",
        "Dispose of vacuum bags"
      ],
      landscapingTips: [
        "Keep grass short",
        "Remove wildlife harbors",
        "Control rodents"
      ]
    },
    treatment: {
      professionalMethods: [
        "Residual insecticides",
        "IGR applications",
        "Fumigation",
        "Heat treatment",
        "Targeted sprays"
      ],
      timeline: "2 treatments 2-3 weeks apart",
      preparation: [
        "Vacuum thoroughly",
        "Wash all bedding",
        "Treat pets",
        "Clear floor areas"
      ],
      followUp: "Re-treat after 2-3 weeks to break cycle"
    },
    londonSpecific: {
      commonBoroughs: ["All boroughs with pet populations"],
      seasonalActivity: {
        spring: "Activity increases",
        summer: "Peak season",
        autumn: "Still active indoors",
        winter: "Survive in heated homes"
      },
      propertyTypes: ["Pet-friendly rentals", "Properties with gardens", "Student accommodation"]
    },
    urgencyLevel: "high",
    relatedPests: ["bed-bugs", "mites"]
  },
  {
    id: "foxes",
    name: "Foxes",
    scientificName: "Vulpes vulpes",
    category: "wildlife",
    commonNames: ["Urban fox", "Red fox"],
    description: "Urban foxes have adapted well to London life. While not pests in the traditional sense, they can cause problems with noise, mess, and property damage.",
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
      commonBoroughs: ["Bromley", "Barnet", "Croydon", "Richmond", "Harrow"],
      seasonalActivity: {
        spring: "Cubs born, increased activity",
        summer: "Family groups active",
        autumn: "Young disperse",
        winter: "Mating season (noisy)"
      },
      propertyTypes: ["Suburban gardens", "Parks", "Golf courses", "Large gardens"]
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
    description: "Grey squirrels are invasive species in the UK that can cause significant damage when they enter roof spaces. They're protected from cruel treatment but can be controlled humanely.",
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
      commonBoroughs: ["All boroughs with mature trees", "Richmond", "Hampstead", "Wimbledon"],
      seasonalActivity: {
        spring: "First litter born",
        summer: "Second litter, high activity",
        autumn: "Food gathering, nest building",
        winter: "Seek warm shelter in lofts"
      },
      propertyTypes: ["Victorian houses", "Properties near parks", "Houses with mature gardens"]
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
    description: "Feral pigeons are descendants of domestic pigeons and have adapted perfectly to urban life. They cause significant problems with fouling and can transmit diseases.",
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
      commonBoroughs: ["Westminster", "City of London", "Camden", "Southwark", "Tower Hamlets"],
      seasonalActivity: {
        spring: "Increased breeding",
        summer: "Peak populations",
        autumn: "Young birds fledge",
        winter: "Concentrated at food sources"
      },
      propertyTypes: ["Historic buildings", "Train stations", "Bridges", "Commercial buildings"]
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
    description: "Silverfish are primitive insects that thrive in damp conditions. They're common in London's older properties and can damage paper, textiles, and wallpaper.",
    identification: {
      size: "12-19mm long",
      color: "Silver-grey, metallic appearance",
      distinguishingFeatures: [
        "Teardrop shaped body",
        "Three tail filaments",
        "Long antennae",
        "No wings",
        "Fish-like movement"
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
      commonBoroughs: ["All boroughs with older properties"],
      seasonalActivity: {
        spring: "Activity increases",
        summer: "Thrive in humidity",
        autumn: "Move deeper indoors",
        winter: "Concentrate near heat/moisture"
      },
      propertyTypes: ["Victorian properties", "Basement flats", "Libraries", "Museums"]
    },
    urgencyLevel: "low",
    relatedPests: ["booklice", "carpet beetles"]
  }
];