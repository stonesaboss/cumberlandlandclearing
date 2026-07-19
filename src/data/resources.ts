/**
 * Resource Center configuration — single source of truth for /resources/.
 *
 * HOW TO ADD A FUTURE ARTICLE (after keyword/SERP research):
 * 1. Create the article page (e.g. src/pages/resources/<hub>/<article>.astro
 *    or extend the data-driven route) so the URL actually exists.
 * 2. Find its title in the hub's `plannedGuides` list below and add an `href`
 *    (plus an optional short `description`). The card automatically becomes a
 *    link and loses its "Coming Soon" badge. Never add an href for a route
 *    that does not build — unpublished guides must stay non-clickable.
 * Navigation, hub cards, breadcrumbs and the sitemap all derive from this
 * file and the built routes; nothing else needs manual updates.
 */

export interface PlannedGuide {
  title: string;
  /** Set ONLY once the article route exists and builds. */
  href?: string;
  description?: string;
}

export interface ResourceImageSlot {
  /** Final expected asset path — generate/install the image here later. */
  src: string;
  /** Existing site asset shown until the final image is installed. */
  fallback: string;
  alt: string;
  /** Landscape ratio used site-wide for feature imagery. */
  aspect: '3:2';
  status: 'pending' | 'available';
  /** Brief for the future image-generation workflow. */
  subject: string;
}

export interface ResourceHub {
  slug: string;
  order: number;
  /** Card title on the Resource Center landing page. */
  cardTitle: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short label used in breadcrumbs and Helpful Guides anchors. */
  shortLabel: string;
  intro: string[];
  factors: { heading: string; items: string[] };
  plannedGuides: PlannedGuide[];
  related: { label: string; href: string; note: string }[];
  /** One-line reminder that property needs vary — varies per hub. */
  qualification: string;
  image: ResourceImageSlot;
}

export const RESOURCES_INDEX = {
  metaTitle: 'Land Clearing Resources | Cumberland Land Clearing',
  metaDescription:
    'Practical guides to land-clearing costs, clearing methods, property conditions, project planning, site prep and rural land improvement in Tennessee.',
  h1: 'Upper Cumberland Land Clearing Knowledge Center',
  intro: [
    'Planning a land-clearing project involves more than choosing a machine. Vegetation density, tree size, terrain, equipment access, drainage, debris handling and the intended use of the property can all affect the right clearing method.',
    'Explore practical resources covering land-clearing costs, forestry mulching, brush and tree removal, project preparation, rural property improvement and conditions commonly encountered across Tennessee’s Upper Cumberland region.',
  ],
  image: {
    src: '/images/resources/resources-land-clearing-knowledge-center.webp',
    fallback: '/images/hero/hero-forestry-mulcher.webp',
    alt: 'Land-clearing equipment working on wooded rural property in Tennessee',
    aspect: '3:2',
    status: 'pending',
    subject: 'Land-clearing equipment working on wooded rural Tennessee property, wide view',
  } satisfies ResourceImageSlot,
} as const;

export const resourceHubs: ResourceHub[] = [
  {
    slug: 'land-clearing-costs',
    order: 1,
    cardTitle: 'Understand Clearing Costs',
    cardDescription:
      'Learn which property conditions affect land-clearing estimates, including acreage, vegetation, tree size, terrain, access, stump removal, debris handling and final site requirements.',
    metaTitle: 'Land-Clearing Cost Guides | Cumberland Land Clearing',
    metaDescription:
      'Learn what affects land-clearing costs in Tennessee, including acreage, trees, brush, terrain, access, stumps, debris and final site preparation.',
    h1: 'Land-Clearing Costs and Estimates',
    shortLabel: 'Land-Clearing Costs',
    intro: [
      'Land-clearing prices cannot be determined by acreage alone. Vegetation density, tree diameter, terrain, equipment access, stump removal, debris handling and the intended use of the land all influence the project scope.',
      'This resource section will help Tennessee property owners understand the factors behind an estimate and prepare the information needed for a property-specific review.',
    ],
    factors: {
      heading: 'What Shapes a Land-Clearing Estimate',
      items: [
        'Total acreage and the shape of the work area',
        'Vegetation density and the diameter of the largest trees',
        'Slope, rock and soil conditions the machines must work on',
        'Entrance width, overhead clearance and trailer room',
        'Whether stumps and roots must come out or can remain',
        'How debris is handled: mulched in place, piled, burned where permitted, or hauled',
        'The finished condition the land needs for its next use',
      ],
    },
    plannedGuides: [
      { title: 'How Much Does Land Clearing Cost in Tennessee?' },
      { title: 'What Affects Land-Clearing Cost Per Acre?' },
      { title: 'Forestry Mulching Cost Versus Traditional Clearing' },
      { title: 'How Terrain Affects Land-Clearing Cost' },
      { title: 'How Equipment Access Affects an Estimate' },
      { title: 'What Property Photos Should You Send for an Estimate?' },
      { title: 'Why Small Projects May Cost More Per Acre' },
      { title: 'Does Land-Clearing Pricing Include Debris Removal?' },
    ],
    related: [
      { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/', note: 'What full-scope clearing projects involve in Putnam County.' },
      { label: 'Forestry Mulching in Cookeville', href: '/forestry-mulching-cookeville-tn/', note: 'The single-machine method that often changes the cost picture.' },
      { label: 'Request a Project Review', href: '/request-estimate/', note: 'Submit property details for an estimate grounded in your actual site.' },
    ],
    qualification:
      'Every parcel prices differently — two properties of equal acreage can carry very different scopes, so a property-specific review beats any per-acre rule of thumb.',
    image: {
      src: '/images/resources/resources-land-clearing-costs.webp',
      fallback: '/images/page-features/overgrown-acreage.webp',
      alt: 'Wooded Tennessee acreage showing brush, mature trees and varied terrain before clearing',
      aspect: '3:2',
      status: 'pending',
      subject: 'Wooded Tennessee acreage with mixed brush, mature trees and varied terrain, pre-clearing',
    },
  },
  {
    slug: 'clearing-methods',
    order: 2,
    cardTitle: 'Compare Clearing Methods',
    cardDescription:
      'Understand the differences among forestry mulching, traditional clearing, brush cutting, stump grinding, stump excavation, grubbing and selective clearing.',
    metaTitle: 'Land-Clearing Methods Explained | Cumberland Land Clearing',
    metaDescription:
      'Compare forestry mulching, traditional land clearing, brush cutting, stump removal, grubbing and selective clearing methods.',
    h1: 'Land-Clearing Methods',
    shortLabel: 'Clearing Methods',
    intro: [
      'Different property goals require different clearing methods. Forestry mulching may be suitable for brush and saplings, while construction preparation may require complete tree, stump and root removal.',
      'Use this section to understand what each method does, what remains afterward and which property goals it may support.',
    ],
    factors: {
      heading: 'What Determines the Right Method',
      items: [
        'What must be removed — and just as importantly, what must stay',
        'Whether the ground will carry a structure, pasture, trail or pond afterward',
        'How much material handling (piling, hauling, burning) the project can absorb',
        'How much regrowth the finished surface can tolerate',
        'Which machines the terrain and access can physically support',
      ],
    },
    plannedGuides: [
      { title: 'Forestry Mulching Versus Traditional Land Clearing' },
      { title: 'Brush Cutting Versus Forestry Mulching' },
      { title: 'Stump Grinding Versus Stump Removal' },
      { title: 'What Is Grubbing?' },
      { title: 'What Is Selective Land Clearing?' },
      { title: 'Can Land Be Cleared Without Removing Every Tree?' },
      { title: 'What Happens to Trees and Brush After Clearing?' },
      { title: 'When Does Cleared Material Need to Be Hauled Away?' },
    ],
    related: [
      { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/', note: 'Full-scope clearing for construction, access and land improvement.' },
      { label: 'Forestry Mulching in Cookeville', href: '/forestry-mulching-cookeville-tn/', note: 'Grinding brush and saplings in place with a single machine.' },
      { label: 'Brush Clearing in Cookeville', href: '/brush-clearing-cookeville-tn/', note: 'Knocking back overgrowth so property can be used again.' },
      { label: 'Stump and Tree Clearing', href: '/stump-and-tree-clearing/', note: 'When the project has to go below the surface.' },
    ],
    qualification:
      'Method choice depends on the specific site — a contractor matches equipment to vegetation, terrain and the finish the land needs, not the other way around.',
    image: {
      src: '/images/resources/resources-clearing-methods.webp',
      fallback: '/images/page-features/forestry-mulching.webp',
      alt: 'Forestry mulching equipment processing brush and saplings on rural property',
      aspect: '3:2',
      status: 'pending',
      subject: 'Forestry mulcher processing brush and saplings, method comparison context',
    },
  },
  {
    slug: 'property-conditions',
    order: 3,
    cardTitle: 'Evaluate Your Property',
    cardDescription:
      'Explore how dense brush, mature trees, slopes, rock, wet ground and limited equipment access can influence a clearing project.',
    metaTitle: 'Property Conditions That Affect Land Clearing',
    metaDescription:
      'Learn how vegetation, trees, slopes, rock, wet ground and equipment access can affect a Tennessee land-clearing project.',
    h1: 'Property Conditions and Land Clearing',
    shortLabel: 'Property Conditions',
    intro: [
      'Two properties of the same size can require completely different equipment, production time and clearing methods. Vegetation, terrain, soil moisture, rock and access often matter as much as total acreage.',
      'Use these resources to evaluate the conditions that may influence your project.',
    ],
    factors: {
      heading: 'Conditions Worth Evaluating Before You Request Work',
      items: [
        'Brush density — walkable undergrowth versus an impenetrable thicket',
        'Tree sizes, from saplings a mulcher shreds to hardwoods that need felling',
        'Slope and whether machines can work it safely',
        'Rock at or near the surface, common on the Cumberland Plateau',
        'Seasonal soil moisture, springs and soft ground',
        'The entrance: gate width, overhead clearance and turning room',
      ],
    },
    plannedGuides: [
      { title: 'How to Clear Land Covered in Dense Brush' },
      { title: 'Reclaiming Property Overgrown With Saplings' },
      { title: 'How Rocky Ground Affects Land Clearing' },
      { title: 'Can Forestry Mulching Be Used on Steep Land?' },
      { title: 'How Wet Ground Affects Heavy Equipment' },
      { title: 'Can Land Clearing Be Done After Heavy Rain?' },
      { title: 'Clearing Around Desirable Mature Trees' },
      { title: 'Clearing Property With Limited Equipment Access' },
    ],
    related: [
      { label: 'Brush Clearing in Cookeville', href: '/brush-clearing-cookeville-tn/', note: 'The usual starting point for badly overgrown ground.' },
      { label: 'Forestry Mulching in Cookeville', href: '/forestry-mulching-cookeville-tn/', note: 'Low-impact clearing that preserves the soil surface.' },
      { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/', note: 'Heavier equipment for heavier conditions.' },
    ],
    qualification:
      'Photographs beat descriptions — wide shots of the vegetation, terrain and entrance tell a contractor more than any checklist answer.',
    image: {
      src: '/images/resources/resources-property-conditions.webp',
      fallback: '/images/page-features/brush-clearing.webp',
      alt: 'Dense brush, trees and sloped ground on an Upper Cumberland property',
      aspect: '3:2',
      status: 'pending',
      subject: 'Dense brush, mixed trees and sloped ground on an Upper Cumberland parcel',
    },
  },
  {
    slug: 'project-planning',
    order: 4,
    cardTitle: 'Plan Your Project',
    cardDescription:
      'Learn what to identify, photograph, mark and verify before requesting an estimate or allowing equipment onto the property.',
    metaTitle: 'How to Plan a Land-Clearing Project',
    metaDescription:
      'Learn how to prepare property details, photos, boundaries, access information and project goals before requesting land clearing.',
    h1: 'Planning a Land-Clearing Project',
    shortLabel: 'Project Planning',
    intro: [
      'A clearly defined scope helps property owners receive more useful estimates and reduces confusion once equipment arrives. Before requesting service, identify the work area, property goals, access limitations, vegetation conditions and features that must remain.',
      'These resources will explain how to prepare for a land-clearing project.',
    ],
    factors: {
      heading: 'What Good Preparation Covers',
      items: [
        'Where the work area starts and stops — marked, not assumed',
        'Trees, structures and features that must be protected',
        'Gates, entrances and the route equipment will actually travel',
        'Overhead and underground utilities in or near the work area',
        'Target timing and any seasonal constraints on the ground',
        'Wide photographs of the vegetation, terrain and entrance',
      ],
    },
    plannedGuides: [
      { title: 'How to Plan a Land-Clearing Project' },
      { title: 'What to Do Before Clearing Your Property' },
      { title: 'How to Mark the Area You Want Cleared' },
      { title: 'Should You Get a Survey Before Land Clearing?' },
      { title: 'How to Identify Property Lines Before Clearing' },
      { title: 'What Information Contractors Need' },
      { title: 'How Long Does Land Clearing Take?' },
      { title: 'What Time of Year Is Best for Land Clearing?' },
      { title: 'How to Prepare Gates and Entrances for Equipment' },
      { title: 'What Underground Utilities Must Be Marked?' },
    ],
    related: [
      { label: 'Request a Project Review', href: '/request-estimate/', note: 'The structured form collects exactly the details contractors need.' },
      { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/', note: 'What a full clearing project typically includes.' },
      { label: 'Upper Cumberland Service Area', href: '/service-area/', note: 'Confirm the property falls within reviewed coverage.' },
    ],
    qualification:
      'No two projects prepare identically — the contractor reviewing your property will confirm which of these steps matter for your specific site.',
    image: {
      src: '/images/resources/resources-project-planning.webp',
      fallback: '/images/page-features/land-clearing.webp',
      alt: 'Marked rural property entrance and wooded work area being evaluated for land clearing',
      aspect: '3:2',
      status: 'pending',
      subject: 'Rural property entrance and wooded work area marked for evaluation',
    },
  },
  {
    slug: 'site-preparation',
    order: 5,
    cardTitle: 'Prepare a Building Site',
    cardDescription:
      'Understand the relationship among vegetation removal, grubbing, excavation, grading, drainage and preparation for construction.',
    metaTitle: 'Construction and Site-Preparation Guides',
    metaDescription:
      'Learn how clearing, grubbing, excavation, grading and drainage relate to preparing Tennessee land for construction.',
    h1: 'Construction and Site Preparation',
    shortLabel: 'Site Preparation',
    intro: [
      'Removing visible vegetation does not necessarily make land ready for construction. Building sites, driveways, ponds and utility areas may also require stump excavation, root removal, grading, drainage work and soil preparation.',
      'Use these guides to understand the stages between clearing wooded land and producing a usable site.',
    ],
    factors: {
      heading: 'Stages Between Wooded Land and a Buildable Site',
      items: [
        'Surface clearing — trees, brush and vegetation off the footprint',
        'Grubbing — stumps and root systems out of load-bearing areas',
        'Rough grading — shaping the pad, driveway and drainage paths',
        'Drainage — deciding where water goes before it decides for you',
        'Coordination — leaving the site in the condition the next trade expects',
      ],
    },
    plannedGuides: [
      { title: 'Land Clearing for a New Home Site' },
      { title: 'Preparing Land for a Cabin, Barn or Workshop' },
      { title: 'Clearing Land for a Driveway' },
      { title: 'Clearing Versus Grading' },
      { title: 'Why Stumps and Roots Must Be Removed From Building Areas' },
      { title: 'What Is a Building Pad?' },
      { title: 'How Drainage Should Be Considered Before Grading' },
      { title: 'Preparing Rural Land for Septic Installation' },
      { title: 'What Should Happen After a Lot Is Cleared?' },
      { title: 'When Does a Site Need Erosion Control?' },
    ],
    related: [
      { label: 'Excavation, Grading & Site Prep', href: '/excavation-grading-site-prep/', note: 'The earthwork phase that follows clearing.' },
      { label: 'Stump and Tree Clearing', href: '/stump-and-tree-clearing/', note: 'Removing what construction cannot build over.' },
      { label: 'Lot Clearing in Cookeville', href: '/lot-clearing-cookeville-tn/', note: 'Clearing scoped to a residential building footprint.' },
      { label: 'Pond-Site Clearing & Excavation', href: '/pond-excavation/', note: 'Site preparation where the finished product holds water.' },
    ],
    qualification:
      'Construction requirements come from the build itself — foundation type, driveway route and drainage plan set the site-prep scope, so involve the builder’s expectations early.',
    image: {
      src: '/images/resources/resources-site-preparation.webp',
      fallback: '/images/page-features/grading-site-prep.webp',
      alt: 'Cleared rural building site being prepared for grading and construction',
      aspect: '3:2',
      status: 'pending',
      subject: 'Cleared rural building site mid-preparation for grading and construction',
    },
  },
  {
    slug: 'rural-property-projects',
    order: 6,
    cardTitle: 'Improve Rural Acreage',
    cardDescription:
      'Explore pasture reclamation, fence-line clearing, trail creation, pond-site preparation and access improvements for rural properties.',
    metaTitle: 'Rural Property Clearing Guides | Tennessee',
    metaDescription:
      'Explore guides for pasture reclamation, fence-line clearing, trails, pond sites and access improvements on rural Tennessee property.',
    h1: 'Rural Property Clearing Projects',
    shortLabel: 'Rural Property Projects',
    intro: [
      'Land clearing is often used to restore or improve existing acreage rather than prepare a completely bare construction site. Overgrown pastures, blocked fence lines, inaccessible trails and neglected farm roads may each require a different approach.',
      'These resources focus on common rural property projects in Tennessee.',
    ],
    factors: {
      heading: 'What Shapes a Rural Improvement Project',
      items: [
        'The gap between the land’s current condition and how you want to use it',
        'Whether the target is open field, woodland edge or corridor work',
        'The maintenance plan — reclaimed ground stays reclaimed only with follow-up',
        'Access for trucks and trailers across working farm ground',
        'Water: ponds, wet-weather springs and drainage patterns on the parcel',
      ],
    },
    plannedGuides: [
      { title: 'How to Reclaim an Overgrown Pasture' },
      { title: 'How to Clear a Fence Line' },
      { title: 'How Wide Should a Cleared Fence Line Be?' },
      { title: 'Creating Access Trails Through Wooded Property' },
      { title: 'Clearing Trails for Hunting and Recreation' },
      { title: 'Clearing Around a Farm Pond' },
      { title: 'Preparing a Site for a New Pond' },
      { title: 'Improving Access to Rural Acreage' },
      { title: 'Maintaining Land After Forestry Mulching' },
      { title: 'Reopening an Abandoned Farm Road' },
    ],
    related: [
      { label: 'Pasture Reclamation', href: '/pasture-reclamation/', note: 'Returning brush-choked fields to grazing and hay.' },
      { label: 'Fence-Line Clearing', href: '/fence-line-clearing/', note: 'Opening corridors along boundaries and farm fencing.' },
      { label: 'Trail & Access Clearing', href: '/trail-clearing/', note: 'Reaching the back of the property again.' },
      { label: 'Pond-Site Clearing & Excavation', href: '/pond-excavation/', note: 'Clearing and dirt work for planned pond sites.' },
    ],
    qualification:
      'Rural projects are as varied as the farms they happen on — coverage and approach depend on the parcel, so describe the specific ground when requesting a review.',
    image: {
      src: '/images/resources/resources-rural-property-projects.webp',
      fallback: '/images/page-features/pasture-reclamation.webp',
      alt: 'Reclaimed pasture with cleared fence lines and improved access across rural acreage',
      aspect: '3:2',
      status: 'pending',
      subject: 'Reclaimed pasture with cleared fence lines and access lane on rural acreage',
    },
  },
  {
    slug: 'upper-cumberland-land-guide',
    order: 7,
    cardTitle: 'Explore Local Land Conditions',
    cardDescription:
      'Learn about terrain, vegetation, access and seasonal conditions that may affect projects in Tennessee’s Upper Cumberland region.',
    metaTitle: 'Upper Cumberland Land-Clearing Guide',
    metaDescription:
      'Explore land-clearing considerations for terrain, vegetation, access and rural properties across Tennessee’s Upper Cumberland region.',
    h1: 'Upper Cumberland Land Guide',
    shortLabel: 'Upper Cumberland Land Guide',
    intro: [
      'Properties across the Upper Cumberland can vary significantly in slope, vegetation, soil, rock, drainage and road access. These conditions can affect equipment selection, project timing and the clearing method needed.',
      'This section will provide practical regional information without duplicating generic city pages or replacing property-specific contractor evaluations.',
    ],
    factors: {
      heading: 'Regional Conditions That Show Up in Projects',
      items: [
        'Plateau ground versus valley bottoms — different rock, soil and drainage',
        'Cedar and brush encroachment patterns on pasture edges',
        'Sandstone near the surface around the Cumberland Plateau',
        'Seasonal moisture windows that open and close working conditions',
        'Rural road and gate access that determines what equipment can arrive',
      ],
    },
    plannedGuides: [
      { title: 'Land Clearing in the Upper Cumberland: Property Owner’s Guide' },
      { title: 'Common Land-Clearing Conditions Around Cookeville' },
      { title: 'Land-Clearing Considerations on the Cumberland Plateau' },
      { title: 'Clearing Sloped Tennessee Property' },
      { title: 'Cedar and Brush Encroachment on Pastureland' },
      { title: 'Rocky Ground and Land Preparation' },
      { title: 'Seasonal Ground Conditions for Land Clearing' },
      { title: 'Rural Equipment Access in the Upper Cumberland' },
      { title: 'Questions to Ask Before Buying Overgrown Land' },
      { title: 'Estimating the Usable Acreage of an Overgrown Parcel' },
    ],
    related: [
      { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/', note: 'The region’s primary market and property mix.' },
      { label: 'Land Clearing in Crossville', href: '/land-clearing-crossville-tn/', note: 'Plateau terrain and larger wooded tracts.' },
      { label: 'Upper Cumberland Service Area', href: '/service-area/', note: 'Where project requests are reviewed across the region.' },
    ],
    qualification:
      'Regional patterns inform planning, but they never replace an on-the-ground look — each parcel gets evaluated on its own conditions.',
    image: {
      src: '/images/resources/resources-upper-cumberland-land-guide.webp',
      fallback: '/images/page-features/trail-access.webp',
      alt: 'Wooded and rolling rural landscape representative of Tennessee’s Upper Cumberland region',
      aspect: '3:2',
      status: 'pending',
      subject: 'Rolling wooded rural landscape characteristic of the Upper Cumberland region',
    },
  },
];

export const sortedHubs = [...resourceHubs].sort((a, b) => a.order - b.order);

export function getHub(slug: string): ResourceHub | undefined {
  return resourceHubs.find((h) => h.slug === slug);
}

/** Resolve the image to actually render: final asset when available, fallback until then. */
export function resolveImage(img: ResourceImageSlot): string {
  return img.status === 'available' ? img.src : img.fallback;
}
