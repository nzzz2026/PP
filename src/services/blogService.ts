import { format, parseISO, isWithinInterval } from 'date-fns';
import { BlogStorageService } from './blogStorageService';

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  thumbnailImage?: string;
  images?: string[];
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedDate: string;
  updatedDate?: string;
  readTime: number;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  metaDescription?: string;
  metaKeywords?: string[];
  views?: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  color?: string;
  count?: number;
}

// Pest control specific categories
export const categories: BlogCategory[] = [
  {
    id: 'rodents',
    name: 'Rodents',
    slug: 'rodents',
    description: 'Rats, mice, and rodent control',
    color: '#8B4513',
    icon: ''
  },
  {
    id: 'insects',
    name: 'Insects',
    slug: 'insects', 
    description: 'Bed bugs, cockroaches, ants, and more',
    color: '#006400',
    icon: ''
  },
  {
    id: 'birds',
    name: 'Birds',
    slug: 'birds',
    description: 'Pigeons, seagulls, and bird control',
    color: '#4682B4',
    icon: ''
  },
  {
    id: 'wasps',
    name: 'Wasps & Bees',
    slug: 'wasps-bees',
    description: 'Wasps, hornets, and bee management',
    color: '#FFD700',
    icon: ''
  },
  {
    id: 'prevention',
    name: 'Prevention',
    slug: 'prevention',
    description: 'Pest prevention tips and guidance',
    color: '#059669',
    icon: ''
  },
  {
    id: 'commercial',
    name: 'Commercial',
    slug: 'commercial',
    description: 'Business and commercial pest control',
    color: '#1E40AF',
    icon: ''
  },
  {
    id: 'seasonal',
    name: 'Seasonal',
    slug: 'seasonal',
    description: 'Seasonal pest issues and solutions',
    color: '#DC2626',
    icon: ''
  },
  {
    id: 'regulations',
    name: 'Regulations',
    slug: 'regulations',
    description: 'Legal requirements and compliance',
    color: '#6B7280',
    icon: ''
  }
];

// Sample blog posts with real pest control content
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'complete-guide-london-rat-control-2024',
    title: 'The Complete Guide to Rat Control in London Properties (2024)',
    excerpt: 'Everything London property owners need to know about identifying, preventing, and eliminating rat infestations. Learn about the latest control methods, legal requirements, and when to call professionals.',
    content: `Rat infestations in London have increased by 25% over the past five years, making effective control more important than ever. This comprehensive guide covers everything property owners need to know about dealing with these persistent pests.

## Understanding London's Rat Problem

London's extensive underground network, combined with aging Victorian sewers and abundant food sources, creates ideal conditions for rat populations. The common brown rat (Rattus norvegicus) is particularly prevalent, capable of squeezing through gaps as small as 20mm.

### Signs of Rat Activity

Early detection is crucial for effective control. Look for these telltale signs:

- **Droppings**: Dark, pellet-shaped droppings 10-14mm long
- **Gnaw marks**: Fresh gnaw marks on wood, plastic, or cables
- **Tracks and runways**: Greasy marks along walls and well-worn paths
- **Sounds**: Scratching, squeaking, or scurrying in walls or ceilings
- **Nests**: Shredded materials in hidden areas
- **Smell**: Strong ammonia-like odor from urine

## Health Risks and Legal Obligations

Rats carry numerous diseases including Leptospirosis (Weil's disease), Salmonellosis, and Hantavirus. Under the Prevention of Damage by Pests Act 1949, property owners have a legal obligation to keep premises free from rats and mice.

### Professional Control Methods

Modern rat control combines multiple approaches for maximum effectiveness:

1. **Integrated Pest Management (IPM)**: Combining prevention, monitoring, and targeted treatment
2. **Baiting programs**: Using anticoagulant rodenticides in secure bait stations
3. **Trapping**: Snap traps, live capture traps, and electronic traps
4. **Proofing**: Sealing entry points with steel wool, metal kick plates, and cement
5. **Environmental management**: Removing food sources and harbourage

## Prevention Strategies

Prevention is always more cost-effective than treatment:

- Store food in sealed containers
- Fix leaking pipes and remove water sources
- Keep gardens tidy and compost bins secure
- Seal gaps larger than 6mm
- Install door brushes and drain covers
- Maintain regular bin collection schedules

## When to Call Professionals

While DIY methods can work for minor issues, professional intervention is recommended when:
- Multiple rats are spotted
- Rats are seen during daylight
- There's evidence in living spaces
- DIY treatments have failed
- You're dealing with commercial premises

Professional pest controllers offer expertise, commercial-grade products, and comprehensive treatment plans that ensure complete elimination.

## Cost Considerations

Professional rat control in London typically costs:
- Initial survey: £150-250
- Treatment program: £200-500
- Proofing work: £300-1000+
- Contracts: £40-100/month

Remember, delaying treatment often leads to more extensive and expensive problems.`,
    featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2000&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    category: 'rodents',
    tags: ['rats', 'rodent control', 'prevention', 'London', 'property management'],
    author: {
      id: '1',
      name: 'James Mitchell',
      role: 'Senior Pest Control Specialist',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80'
    },
    publishedDate: '2024-01-15',
    readTime: 8,
    featured: true,
    status: 'published',
    metaDescription: 'Complete guide to rat control in London. Learn identification, prevention, and elimination methods. Professional advice for property owners.',
    metaKeywords: ['rat control London', 'pest control', 'rodent removal', 'property management']
  },
  {
    id: '2',
    slug: 'bed-bug-epidemic-london-hotels-2024',
    title: 'London\'s Hidden Bed Bug Crisis: What Hotels Won\'t Tell You',
    excerpt: 'Bed bug infestations in London have surged 65% since 2020. Learn how to identify, prevent, and treat bed bug problems in residential and commercial properties.',
    content: `The resurgence of bed bugs in London represents one of the most challenging pest control issues facing the capital. These resilient parasites have adapted to modern life, spreading through hotels, public transport, and residential buildings at an alarming rate.

## The Scale of the Problem

Recent data from pest control companies shows bed bug callouts have increased dramatically:
- 65% increase since 2020
- 40% of London hotels have dealt with infestations
- 1 in 5 London residents have experienced bed bugs

## Biology and Behavior

Understanding bed bug biology is crucial for effective control:

**Physical Characteristics:**
- Adults: 4-7mm long, brown, flat oval shape
- Can survive 6-12 months without feeding
- Females lay 200-500 eggs in their lifetime
- Complete development in 45 days under optimal conditions

**Feeding Patterns:**
- Feed exclusively on blood
- Most active between 2-5 AM
- Attracted by CO2 and body heat
- Can travel up to 20 feet for a meal

## Detection Methods

Early detection significantly improves treatment success:

1. **Visual Inspection**: Check mattress seams, bed frames, headboards
2. **Signs to Look For**:
   - Live bugs or shells
   - Rust-colored blood spots
   - Dark fecal spots
   - Sweet, musty odor
   - Small blood spots on sheets

3. **Professional Detection**: Trained dogs can detect with 95% accuracy

## Treatment Approaches

### Heat Treatment
- Raising room temperature to 50°C for 90 minutes
- 100% mortality rate when properly applied
- No chemical residues
- Single treatment often sufficient

### Chemical Treatment
- Residual insecticides applied to harbourages
- Multiple treatments usually required
- Combines different active ingredients
- Requires preparation and follow-up

### Integrated Approach
Most effective combining:
- Thorough preparation and decluttering
- Steam treatment of mattresses
- Chemical application to bed frames
- Encasements for mattresses
- Ongoing monitoring

## Prevention for Hotels and Accommodations

Commercial properties require robust prevention:
- Staff training on early detection
- Regular professional inspections
- Immediate isolation protocols
- Guest education materials
- Laundry procedures at 60°C+

## Costs and Considerations

Treatment costs vary significantly:
- Single room heat treatment: £500-1500
- Chemical treatment program: £300-800
- Whole property treatment: £2000-10000+
- Prevention contracts: £200-500/month

Early intervention saves money and reputation.`,
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    category: 'insects',
    tags: ['bed bugs', 'hotels', 'residential', 'heat treatment', 'prevention'],
    author: {
      id: '2',
      name: 'Sarah Chen',
      role: 'Commercial Pest Manager',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    publishedDate: '2024-01-22',
    readTime: 7,
    featured: true,
    status: 'published',
    metaDescription: 'Comprehensive guide to bed bug control in London. Detection, treatment, and prevention strategies for homes and hotels.',
    metaKeywords: ['bed bugs London', 'hotel pest control', 'bed bug treatment', 'heat treatment']
  },
  {
    id: '3',
    slug: 'summer-wasp-season-preparation-2024',
    title: 'Preparing for Wasp Season: A Property Manager\'s Guide',
    excerpt: 'As temperatures rise, wasp activity increases dramatically. Learn how to prevent nest formation and safely manage wasp problems on your property.',
    content: `Every summer, London properties face increased wasp activity that can pose serious risks to residents and visitors. This guide provides essential information for property managers and homeowners to prepare for and manage wasp season effectively.

## Understanding Wasp Behavior

### Seasonal Lifecycle
- **Spring (April-May)**: Queens emerge and begin nest building
- **Early Summer (June-July)**: Colony growth accelerates
- **Late Summer (August-September)**: Peak population and aggression
- **Autumn (October)**: Colony decline and dispersal

## Prevention is Key

Early spring prevention can prevent summer problems:

1. **Seal Entry Points**: Check and seal gaps in soffits, fascias, and roof tiles
2. **Remove Food Sources**: Cover bins, clean up spills, manage compost
3. **Regular Inspections**: Check sheds, lofts, and garages weekly
4. **Maintain Gardens**: Trim bushes, remove fallen fruit
5. **Install Screens**: Window and door screens prevent indoor entry

## Safe Nest Removal

**Never attempt DIY removal for:**
- Nests larger than a tennis ball
- Nests in walls or hard-to-reach areas
- If you're allergic to stings
- Multiple nests on the property

Professional removal ensures safety and complete elimination.

## Emergency Response Protocols

For property managers:
1. Establish exclusion zones around nests
2. Document location and size
3. Contact professional pest control
4. Notify affected residents
5. Schedule treatment outside peak hours

## Cost-Effective Management

- Early season prevention: £50-150
- Single nest removal: £75-150
- Multiple nests: £150-300
- Emergency callout: £150-250
- Seasonal prevention contract: £200-400`,
    featuredImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=2000&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    category: 'wasps',
    tags: ['wasps', 'seasonal', 'prevention', 'safety', 'property management'],
    author: {
      id: '1',
      name: 'James Mitchell',
      role: 'Senior Pest Control Specialist',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80'
    },
    publishedDate: '2024-01-08',
    readTime: 5,
    featured: false,
    status: 'published',
    metaDescription: 'Essential guide for managing wasps on London properties. Prevention, identification, and safe removal strategies.',
    metaKeywords: ['wasp control', 'wasp nest removal', 'summer pests', 'property management']
  },
  {
    id: '4',
    slug: 'cockroach-control-london-restaurants',
    title: 'Cockroach Control for London Restaurants: Compliance & Best Practices',
    excerpt: 'Comprehensive guide for restaurant owners on preventing and eliminating cockroach infestations while maintaining food safety compliance.',
    content: `Cockroach infestations can destroy a restaurant's reputation overnight. This guide provides London food businesses with essential strategies for prevention, control, and regulatory compliance.

## Species Common in London Kitchens

1. **German Cockroach** (Blattella germanica)
   - Most common in restaurants
   - Rapid reproduction (30-40 offspring every 30 days)
   - Prefers warm, humid areas near food

2. **Oriental Cockroach** (Blatta orientalis)
   - Common in basements and drains
   - Slower moving, larger size
   - Thrives in cool, damp conditions

## Critical Control Points

### Kitchen Design and Maintenance
- Seal all cracks and crevices with silicone
- Install door sweeps and screens
- Maintain grout and tiles
- Ensure proper drainage
- Eliminate moisture sources

### Sanitation Protocols
**Daily Requirements:**
- Deep clean all food preparation surfaces
- Empty bins and clean containers
- Sweep and mop floors
- Clean equipment undersides
- Remove cardboard immediately

**Weekly Deep Cleaning:**
- Pull out and clean behind equipment
- Degrease extraction systems
- Clean floor drains
- Inspect and clean storage areas

## Monitoring and Detection

Implement a comprehensive monitoring program:
- Sticky traps in strategic locations
- Weekly trap inspections
- Documentation of all findings
- Trend analysis to identify problem areas
- Night-time inspections monthly

## Treatment Strategies

### Gel Baiting
- Apply in cracks and crevices
- Non-disruptive to operations
- Highly effective for German cockroaches
- Requires multiple applications

### Insect Growth Regulators (IGRs)
- Prevents reproduction
- Long-term population control
- Safe around food areas when properly applied

### Heat Treatment
- For severe infestations
- Chemical-free option
- Requires temporary closure
- 100% mortality when properly executed

## Regulatory Compliance

**Food Safety Act 1990 Requirements:**
- Maintain pest-free premises
- Document all pest control measures
- Regular professional inspections
- Staff training records

**Environmental Health Inspections:**
- Zero tolerance for cockroach activity
- Can result in immediate closure
- Prosecution and unlimited fines possible

## Creating a Pest Management Plan

1. Risk Assessment
2. Preventive measures
3. Monitoring procedures  
4. Treatment protocols
5. Documentation system
6. Staff training program
7. Review and improvement

## Cost of Non-Compliance

- Emergency closure: £5,000-20,000 in lost revenue
- Deep cleaning: £2,000-5,000
- Legal costs: £5,000-50,000
- Reputation damage: Immeasurable

Investment in prevention (£200-500/month) is minimal compared to infestation costs.`,
    featuredImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    category: 'commercial',
    tags: ['cockroaches', 'restaurants', 'food safety', 'compliance', 'commercial'],
    author: {
      id: '2',
      name: 'Sarah Chen',
      role: 'Commercial Pest Manager',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    publishedDate: '2024-01-29',
    readTime: 9,
    featured: false,
    status: 'published',
    metaDescription: 'Essential cockroach control guide for London restaurants. Compliance, prevention, and treatment strategies for food businesses.',
    metaKeywords: ['cockroach control', 'restaurant pest control', 'food safety', 'commercial pest management']
  },
  {
    id: '5',
    slug: 'pigeon-control-london-buildings',
    title: 'Effective Pigeon Control for London Buildings: Solutions That Work',
    excerpt: 'Pigeons cause millions in damage to London buildings annually. Discover humane and effective control methods that protect your property.',
    content: `Feral pigeons cost London property owners millions annually in cleaning and repairs. This guide explores effective, humane solutions for managing pigeon problems on commercial and residential buildings.

## Understanding the Problem

### Health Risks
- Over 60 diseases linked to pigeons
- Cryptococcosis, Histoplasmosis, Psittacosis
- Slip hazards from droppings
- Contamination of water tanks

### Property Damage
- Acidic droppings erode stonework
- Blocked gutters and drainage
- Damage to air conditioning units
- Fire hazards from nesting materials

## Assessment and Planning

Before implementing control measures:
1. Survey the extent of the problem
2. Identify roosting and nesting sites
3. Determine access points
4. Assess food sources
5. Consider building usage and aesthetics

## Control Methods

### Physical Deterrents

**Bird Spikes**
- Cost: £20-40 per meter installed
- Effectiveness: 90% for light pressure
- Lifespan: 10+ years
- Best for: Ledges, signs, beams

**Bird Netting**
- Cost: £25-50 per square meter
- Effectiveness: 100% exclusion
- Lifespan: 10-20 years
- Best for: Large areas, courtyards

**Electric Track Systems**
- Cost: £40-60 per meter
- Effectiveness: 95% for all pressure levels
- Lifespan: 8+ years
- Best for: Historic buildings, high visibility areas

**Bird Wire Systems**
- Cost: £25-35 per meter
- Effectiveness: 85% for light-medium pressure
- Lifespan: 10+ years
- Best for: Architectural features

### Population Management

**Egg and Nest Removal**
- Requires General License
- Must be done humanely
- Regular monitoring needed
- Part of integrated approach

**Trapping Programs**
- Professional only
- Requires proper licensing
- Humane disposal essential
- Ongoing commitment needed

## Legal Considerations

All bird control must comply with:
- Wildlife and Countryside Act 1981
- Animal Welfare Act 2006
- General Licenses for pest birds
- Planning permission for listed buildings

## Implementation Strategy

**Phase 1: Immediate Action**
- Clean and disinfect affected areas
- Remove food sources
- Install deterrents on priority areas

**Phase 2: Comprehensive Protection**
- Systematic installation of long-term solutions
- Seal access points
- Modify architecture where possible

**Phase 3: Maintenance**
- Regular inspections
- Prompt repairs
- Ongoing cleaning program
- Population monitoring

## Cost-Benefit Analysis

**Initial Investment:**
- Small building: £2,000-5,000
- Medium building: £5,000-15,000
- Large complex: £15,000-50,000+

**Annual Savings:**
- Cleaning costs: £3,000-10,000
- Repair costs: £2,000-8,000
- Health and safety compliance
- Improved property value

ROI typically achieved within 2-3 years.`,
    featuredImage: 'https://images.unsplash.com/photo-1582816122205-8e6d0a472ef9?auto=format&fit=crop&w=2000&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1582816122205-8e6d0a472ef9?auto=format&fit=crop&w=800&q=80',
    category: 'birds',
    tags: ['pigeons', 'bird control', 'building management', 'deterrents'],
    author: {
      id: '3',
      name: 'Michael Thompson',
      role: 'Urban Wildlife Specialist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    publishedDate: '2024-02-05',
    readTime: 8,
    featured: false,
    status: 'published',
    metaDescription: 'Comprehensive pigeon control guide for London buildings. Humane deterrents, legal requirements, and cost-effective solutions.',
    metaKeywords: ['pigeon control', 'bird deterrents', 'building management', 'bird spikes']
  },
  {
    id: '6',
    slug: 'mouse-prevention-london-homes-winter',
    title: 'Winter Mouse Prevention: Protecting Your London Home',
    excerpt: 'As temperatures drop, mice seek warm shelter indoors. Learn proven strategies to keep mice out of your home this winter.',
    content: `Each winter, thousands of London homes experience mouse invasions as these adaptable rodents seek warmth and food. This guide provides homeowners with practical, effective strategies to prevent and control mouse problems during the colder months.

## Why Winter Brings Mice Indoors

### Environmental Factors
- Temperature drops below 15°C trigger shelter-seeking
- Reduced outdoor food sources
- Garden flooding drives mice from burrows
- Heating systems create attractive warm zones

## Identifying Entry Points

Mice can squeeze through gaps as small as 6mm (the width of a pencil). Common entry points include:

**External:**
- Gaps under doors (install brush strips)
- Holes around pipes and cables
- Damaged air bricks
- Missing roof tiles
- Gaps in soffits and fascias

**Internal:**
- Behind kitchen cabinets
- Under bathtubs
- Around boiler pipes
- Loft hatch gaps
- Damaged floorboards

## Prevention Strategies

### Immediate Actions
1. **Seal All Gaps**: Use steel wool and caulk for holes
2. **Door Brushes**: Install on all external doors
3. **Repair Damage**: Fix broken air bricks and vents
4. **Tidy Gardens**: Remove shelter opportunities
5. **Secure Food**: Use airtight containers

### Long-term Solutions
- Install mesh on air bricks
- Concrete around pipe entries
- Maintain building exterior
- Regular professional inspections
- Create unfavorable environment

## Signs of Mouse Activity

**Visual Evidence:**
- Droppings (3-8mm, rice grain-shaped)
- Gnaw marks on food packages
- Grease marks along walls
- Nesting materials (paper, fabric)
- Live or dead mice

**Other Indicators:**
- Ammonia-like smell
- Scratching in walls/ceilings
- Pet behavior changes
- Damaged food packages

## Safe Control Methods

### Trapping
**Pros:**
- Immediate results
- No poison risks
- Confirms elimination

**Best Practices:**
- Use multiple traps
- Place along walls
- Bait with chocolate or peanut butter
- Check daily

### Bait Stations
**When Appropriate:**
- Multiple mice present
- Difficult access areas
- Professional application recommended

**Safety Considerations:**
- Keep away from children/pets
- Use tamper-proof stations
- Follow label instructions
- Dispose of carefully

## Health Risks

Mice pose serious health risks:
- Salmonella transmission
- Hantavirus (rare but serious)
- Leptospirosis
- Parasites (fleas, mites)
- Allergens from droppings

## When to Call Professionals

Contact pest control when:
- DIY methods fail after 2 weeks
- Multiple mice spotted
- Sounds in walls/ceilings
- Commercial premises affected
- Health concerns exist

## Cost Comparison

**DIY Prevention:**
- Materials: £30-100
- Time: 4-8 hours
- Success rate: 60-70%

**Professional Service:**
- Initial visit: £150-250
- Treatment program: £200-400
- Success rate: 95%+
- Guarantee included

## Seasonal Maintenance Calendar

**September:** Inspect and seal entry points
**October:** Clear gardens, secure compost
**November:** Install door brushes, check loft
**December-February:** Monitor for activity
**March:** Post-winter inspection

Prevention investment of £100-200 can save thousands in damage and health risks.`,
    featuredImage: 'https://images.unsplash.com/photo-1605489893242-2d3d6d76eb80?auto=format&fit=crop&w=2000&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1605489893242-2d3d6d76eb80?auto=format&fit=crop&w=800&q=80',
    category: 'rodents',
    tags: ['mice', 'winter', 'prevention', 'home protection', 'seasonal'],
    author: {
      id: '1',
      name: 'James Mitchell',
      role: 'Senior Pest Control Specialist',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80'
    },
    publishedDate: '2024-02-12',
    readTime: 7,
    featured: false,
    status: 'published',
    metaDescription: 'Complete guide to preventing mice in London homes during winter. Practical tips, prevention strategies, and when to call professionals.',
    metaKeywords: ['mouse prevention', 'winter pests', 'home protection', 'rodent control']
  }
];

class BlogService {
  private categories: BlogCategory[] = categories;

  // Get all posts with optional filtering  
  getPosts(filters?: {
    category?: string;
    tags?: string[];
    featured?: boolean;
    status?: string;
    searchQuery?: string;
  }): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    let filtered = [...posts];

    if (filters?.status) {
      filtered = filtered.filter(post => post.status === filters.status);
    } else {
      // Default to published posts
      filtered = filtered.filter(post => post.status === 'published');
    }

    if (filters?.category) {
      filtered = filtered.filter(post => post.category === filters.category);
    }

    if (filters?.tags && filters.tags.length > 0) {
      filtered = filtered.filter(post => 
        filters.tags!.some(tag => post.tags.includes(tag))
      );
    }

    if (filters?.featured !== undefined) {
      filtered = filtered.filter(post => post.featured === filters.featured);
    }

    if (filters?.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => 
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  }

  // Get single post by slug
  getPostBySlug(slug: string): BlogPost | undefined {
    const posts = BlogStorageService.getPosts();
    return posts.find(post => post.slug === slug);
  }

  // Get featured posts
  getFeaturedPosts(limit: number = 3): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    return posts
      .filter(post => post.featured && post.status === 'published')
      .sort((a, b) => 
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      )
      .slice(0, limit);
  }

  // Get recent posts
  getRecentPosts(limit: number = 5): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    return posts
      .filter(post => post.status === 'published')
      .sort((a, b) => 
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      )
      .slice(0, limit);
  }

  // Get related posts
  getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    return posts
      .filter(post => 
        post.id !== currentPost.id &&
        post.status === 'published' &&
        (post.category === currentPost.category ||
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .sort((a, b) => {
        // Prioritize same category
        if (a.category === currentPost.category && b.category !== currentPost.category) return -1;
        if (b.category === currentPost.category && a.category !== currentPost.category) return 1;
        
        // Then sort by date
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      })
      .slice(0, limit);
  }

  // Get posts by category
  getPostsByCategory(categorySlug: string): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    return posts.filter(
      post => post.category === categorySlug && post.status === 'published'
    );
  }

  // Get posts by tag
  getPostsByTag(tag: string): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    return posts.filter(
      post => post.tags.includes(tag) && post.status === 'published'
    );
  }

  // Get all categories with post count
  getCategories(): BlogCategory[] {
    const posts = BlogStorageService.getPosts();
    return this.categories.map(cat => ({
      ...cat,
      count: posts.filter(
        post => post.category === cat.slug && post.status === 'published'
      ).length
    }));
  }

  // Get all unique tags
  getAllTags(): string[] {
    const posts = BlogStorageService.getPosts();
    const tags = new Set<string>();
    posts
      .filter(post => post.status === 'published')
      .forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }

  // Get posts for date range
  getPostsByDateRange(startDate: Date, endDate: Date): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    return posts.filter(post => {
      const postDate = parseISO(post.publishedDate);
      return isWithinInterval(postDate, { start: startDate, end: endDate }) &&
             post.status === 'published';
    });
  }

  // Search posts
  searchPosts(query: string): BlogPost[] {
    const posts = BlogStorageService.getPosts();
    const lowerQuery = query.toLowerCase();
    return posts.filter(
      post => 
        post.status === 'published' &&
        (post.title.toLowerCase().includes(lowerQuery) ||
         post.excerpt.toLowerCase().includes(lowerQuery) ||
         post.content.toLowerCase().includes(lowerQuery) ||
         post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
         post.category.toLowerCase().includes(lowerQuery))
    );
  }

  // Get archive data (posts grouped by month)
  getArchive(): { [key: string]: BlogPost[] } {
    const posts = BlogStorageService.getPosts();
    const archive: { [key: string]: BlogPost[] } = {};
    
    posts
      .filter(post => post.status === 'published')
      .forEach(post => {
        const monthYear = format(parseISO(post.publishedDate), 'MMMM yyyy');
        if (!archive[monthYear]) {
          archive[monthYear] = [];
        }
        archive[monthYear].push(post);
      });
    
    return archive;
  }
}

export const blogService = new BlogService();