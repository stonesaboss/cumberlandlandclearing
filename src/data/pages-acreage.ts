import type { ServicePage } from './types';

export const acreagePages: ServicePage[] = [
  {
    slug: 'pasture-reclamation',
    metaTitle: 'Pasture Reclamation in Upper Cumberland | Pasture Clearing',
    metaDescription:
      'Request pasture reclamation across Upper Cumberland, TN. Recover grazing and hay ground from cedar, brush, saplings and encroaching overgrowth on farms and rural acreage.',
    h1: 'Pasture Reclamation in Upper Cumberland',
    eyebrow: 'Recover Usable Farm Ground',
    breadcrumbLabel: 'Pasture Reclamation',
    intro: [
      'Pasture that goes unmowed for a few seasons starts to disappear — cedar seedlings, blackberry, sumac and sapling regrowth move in from the fencerows until the field is more thicket than grass. Pasture reclamation reverses that process and returns the ground to grazing or hay production.',
      'Across the farms of Putnam, White, Overton, DeKalb and Cumberland counties, reclamation is one of the most requested acreage projects in the region.',
    ],
    image: '/images/pasture-reclamation.svg',
    imageAlt: 'Illustration of a field being reclaimed from encroaching brush and cedar',
    sections: [
      {
        heading: 'Signs a Field Is Ready for Reclamation',
        bullets: [
          'Cedar and sapling stems too thick for a bush hog to handle',
          'Blackberry, briar and sumac colonies spreading from field edges',
          'Shrinking usable acreage and grazing capacity year over year',
          'Fence lines no longer visible or maintainable',
          'Volunteer trees maturing in what used to be open field',
        ],
      },
      {
        heading: 'How Reclamation Work Is Typically Done',
        paragraphs: [
          'Light encroachment may be handled with heavy rotary mowing. Once woody stems pass what a mower tolerates, forestry mulching becomes the usual tool — it grinds cedar and saplings to ground level and leaves a mulch layer that breaks down into the field. Heavier regrowth with established trees may call for mulching plus selective removal, and badly rutted or eroded ground can need smoothing afterward.',
          'The end goal shapes the method: ground returning to hay production needs a smoother, cleaner finish than ground used for rough grazing.',
        ],
      },
      {
        heading: 'After the Brush Is Gone',
        paragraphs: [
          'Reclaimed pasture stays reclaimed only with follow-up — regular mowing, grazing pressure or reseeding into a maintained stand. Many owners schedule a follow-up mulching pass a year later to knock back regrowth from roots and seed. Ask the contractor what maintenance the specific vegetation on your ground will need.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Will mulched cedar hurt the pasture?',
        a: 'Mulched material breaks down over time and typically integrates into the field. Heavy mulch concentrations can temporarily slow grass in spots; discuss finish expectations if quick reseeding is the goal.',
      },
      {
        q: 'Can reclamation preserve good trees in the field?',
        a: 'Yes — shade trees for livestock are commonly flagged and kept while the surrounding brush is removed. Mark keepers clearly before work starts.',
      },
      {
        q: 'How many acres can be reclaimed at once?',
        a: 'Anywhere from a single paddock to entire farms. Production rate depends on stem density and size, so per-acre pace varies widely between fields — even on the same property.',
      },
    ],
    related: [
      { label: 'Forestry Mulching in Cookeville', href: '/forestry-mulching-cookeville-tn/' },
      { label: 'Fence-Line Clearing', href: '/fence-line-clearing/' },
      { label: 'Brush Clearing in Cookeville', href: '/brush-clearing-cookeville-tn/' },
    ],
    serviceType: 'Pasture reclamation',
    areaServed: ['Upper Cumberland TN', 'Putnam County TN', 'White County TN', 'Overton County TN'],
  },
  {
    slug: 'fence-line-clearing',
    metaTitle: 'Fence-Line Clearing in Upper Cumberland | Boundary Clearing',
    metaDescription:
      'Request fence-line clearing across Upper Cumberland, TN. Restore visibility and access along property boundaries, farm fencing and utility corridors overtaken by brush and trees.',
    h1: 'Fence-Line Clearing in Upper Cumberland',
    eyebrow: 'Boundaries, Fencerows & Corridors',
    breadcrumbLabel: 'Fence-Line Clearing',
    intro: [
      'Fencerows are where overgrowth starts. Birds seed them, mowers can’t reach them, and within a few years a farm fence is buried under cedar, hackberry, briars and vines — pushing wire out of line and hiding damage until livestock finds it first.',
      'Fence-line clearing opens a clean corridor along boundaries so fencing can be inspected, repaired or replaced, and so property lines are visible again.',
    ],
    image: '/images/fence-line-clearing.svg',
    imageAlt: 'Illustration of a cleared corridor along a farm fence line',
    sections: [
      {
        heading: 'Why Fence Lines Get Cleared',
        bullets: [
          'Replacing or repairing farm fencing that brush has overtaken',
          'Re-establishing visible property boundaries before a survey or sale',
          'Stopping trees from leaning into, and eventually crushing, fence wire',
          'Opening corridors along utility easements and driveways',
          'Reclaiming field edges so pastures stop shrinking inward',
        ],
      },
      {
        heading: 'How the Work Is Done',
        paragraphs: [
          'A typical request clears a corridor — often ten to twenty feet — along the fence route. Compact forestry mulchers and skid-steer attachments work well in these strips because they maneuver along the line and leave mulch instead of piles. Trees grown up through existing wire require careful handling, and old fence hidden in the brush is a real equipment hazard, so flag known wire, posts and corners in your request.',
        ],
      },
      {
        heading: 'Old Fence, New Fence',
        paragraphs: [
          'If new fencing follows the clearing, tell the contractor — the corridor width, stump height and finish that fence builders need is specific, and coordinating the two jobs avoids re-clearing. Removal of old wire and posts can sometimes be included in scope; it is worth asking.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How wide should a cleared fence line be?',
        a: 'Enough for the equipment doing the fence work plus future maintenance access — commonly 10–20 feet, but the fence builder’s needs and the terrain set the number.',
      },
      {
        q: 'Can trees grown into the fence be removed?',
        a: 'Usually, though wire embedded in trunks makes cutting hazardous and slow. Point out grown-in trees during the walkthrough so they are handled deliberately.',
      },
      {
        q: 'Do both neighbors need to agree?',
        a: 'Work on or at a shared boundary is worth discussing with the adjoining owner beforehand, and a current survey helps when the line itself is uncertain. Contractors clear to the boundaries you identify.',
      },
    ],
    related: [
      { label: 'Pasture Reclamation', href: '/pasture-reclamation/' },
      { label: 'Brush Clearing in Cookeville', href: '/brush-clearing-cookeville-tn/' },
      { label: 'Trail & Access Clearing', href: '/trail-clearing/' },
    ],
    serviceType: 'Fence-line clearing',
    areaServed: ['Upper Cumberland TN'],
  },
  {
    slug: 'trail-clearing',
    metaTitle: 'Trail & Access Clearing in Upper Cumberland TN',
    metaDescription:
      'Request trail and access clearing across Upper Cumberland, TN — hunting access, recreation trails, ATV routes and interior roads through wooded acreage and rural property.',
    h1: 'Trail and Access Clearing in Upper Cumberland',
    eyebrow: 'Open Up the Back of the Property',
    breadcrumbLabel: 'Trail Clearing',
    intro: [
      'Large parcels are only as usable as their access. Trail clearing cuts corridors through wooded and overgrown ground so owners can actually reach the back of the property — on foot, by ATV or with a truck — for hunting, recreation, timber management or simply checking the land.',
      'On Upper Cumberland ridges and hollows, a well-routed trail also becomes the working access for every future project on the parcel.',
    ],
    image: '/images/trail-access.svg',
    imageAlt: 'Illustration of a cleared trail winding through wooded rural property',
    sections: [
      {
        heading: 'Common Trail Projects',
        bullets: [
          'Hunting access to stands, plots and creek bottoms',
          'ATV and side-by-side loops through wooded acreage',
          'Walking and riding trails on recreational land',
          'Interior access roads for management, firewood and equipment',
          'Reopening old logging roads and farm lanes grown shut',
        ],
      },
      {
        heading: 'Routing a Trail That Lasts',
        paragraphs: [
          'The difference between a trail and a future gully is routing. Good trails follow contours where possible, cross slopes rather than running straight down them, avoid seasonal wet spots, and use existing old roadbeds when they are sound. Forestry mulching suits most trail corridors because it leaves a mulch surface that resists erosion, while truck-width access roads may need grading and gravel behind the clearing.',
        ],
      },
      {
        heading: 'Width and Overhead Clearance',
        paragraphs: [
          'State what will travel the trail: a walking path, an ATV corridor and a pickup route need different widths and overhead clearing heights. Trimming the canopy to the right height at clearing time is far easier than coming back later.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How wide is a typical cleared trail?',
        a: 'Walking trails may need only 4–6 feet, ATV trails commonly 6–8, and truck access 10–12 or more, plus overhead clearance. The vehicles you plan to use set the spec.',
      },
      {
        q: 'Can trails be cut on steep ground?',
        a: 'Often yes, with contour routing and the right machine — but slope, soil and rock determine feasibility. Note steep sections and any known wet crossings in the request.',
      },
      {
        q: 'Will a mulched trail hold up to ATV traffic?',
        a: 'Generally well, since the mulch bed sheds water and regrowth is slowed. High-traffic or truck routes may eventually want gravel in soft spots.',
      },
    ],
    related: [
      { label: 'Forestry Mulching in Cookeville', href: '/forestry-mulching-cookeville-tn/' },
      { label: 'Fence-Line Clearing', href: '/fence-line-clearing/' },
      { label: 'Excavation, Grading & Site Prep', href: '/excavation-grading-site-prep/' },
    ],
    serviceType: 'Trail and access clearing',
    areaServed: ['Upper Cumberland TN'],
  },
  {
    slug: 'pond-excavation',
    metaTitle: 'Pond-Site Clearing & Excavation Requests | Upper Cumberland',
    metaDescription:
      'Request pond-site clearing and excavation in Upper Cumberland, TN. Clear trees, brush and access around planned farm ponds and recreational ponds before dirt work begins.',
    h1: 'Pond-Site Clearing and Excavation Requests',
    eyebrow: 'Before the Water Comes the Clearing',
    breadcrumbLabel: 'Pond-Site Clearing',
    intro: [
      'Every pond project starts as a clearing project. Before an excavator shapes a basin and dam, the footprint has to be stripped of trees, brush, stumps and roots — organic material left in a dam or basin decays, settles and leaks.',
      'This page covers requesting the clearing and excavation side of a pond project on Upper Cumberland farms and rural acreage.',
    ],
    image: '/images/pond-site-clearing.svg',
    imageAlt: 'Illustration of a cleared pond site with water and open banks',
    sections: [
      {
        heading: 'What Pond-Site Preparation Involves',
        bullets: [
          'Clearing trees and brush from the basin, dam footprint and spillway route',
          'Removing stumps and root systems — not just surface vegetation',
          'Opening equipment access wide enough for excavators and dump trucks',
          'Clearing staging areas for spoil and topsoil',
          'Establishing work room around the banks for shaping and seeding',
        ],
      },
      {
        heading: 'Why Ponds Need More Than Mulching',
        paragraphs: [
          'Forestry mulching alone is rarely sufficient for a pond footprint, because mulching leaves roots and near-grade stumps in place. Material under a dam or in the sealed basin must come out, which means grubbing with excavation equipment. Mulching still plays a role — it is often the efficient way to open access and clear the surrounding area outside the actual water line.',
        ],
      },
      {
        heading: 'Site Factors a Contractor Will Evaluate',
        bullets: [
          'Watershed and where the pond’s water will come from',
          'Soil type and whether the site will hold water',
          'Slope, dam height and spillway routing',
          'Overflow path and downstream considerations',
          'Access for heavy excavation equipment and hauling',
        ],
        paragraphs: [
          'Requirements for pond construction can vary by location and project scale, so contractors typically evaluate the specific site — and any approvals it may need — before committing to a design.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can any property have a pond?',
        a: 'Not every site holds water or has the watershed to fill. Soil, slope, drainage area and intended size all matter, and a contractor or pond builder evaluates that onsite before excavation is planned.',
      },
      {
        q: 'What happens to the trees cleared from a pond site?',
        a: 'Options include hauling, burning where permitted, burying in designated spoil areas away from the dam, or mulching material outside the basin. Stumps and roots from the basin itself are removed and disposed of, not buried in the dam.',
      },
      {
        q: 'Is pond excavation part of the same request?',
        a: 'Submit it together. Some contractors clear and excavate; others coordinate with a pond builder. Describing the whole project helps route it correctly.',
      },
    ],
    related: [
      { label: 'Excavation, Grading & Site Prep', href: '/excavation-grading-site-prep/' },
      { label: 'Stump & Tree Clearing', href: '/stump-and-tree-clearing/' },
      { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/' },
    ],
    serviceType: 'Pond-site clearing and excavation',
    areaServed: ['Upper Cumberland TN'],
  },
  {
    slug: 'stump-and-tree-clearing',
    metaTitle: 'Stump & Tree Clearing in Upper Cumberland TN',
    metaDescription:
      'Request stump and tree clearing across Upper Cumberland, TN — unwanted trees, stump removal and root grubbing when a project needs more than surface mulching.',
    h1: 'Stump and Tree Clearing in Upper Cumberland',
    eyebrow: 'When the Project Goes Below the Surface',
    breadcrumbLabel: 'Stump & Tree Clearing',
    intro: [
      'Some projects only need vegetation knocked down; others need it gone — roots and all. Stump and tree clearing covers the heavier end of land clearing: felling and removing unwanted trees, pulling or grinding stumps, and grubbing root systems where the ground is headed for construction, pasture smoothing or pond work.',
    ],
    image: '/images/stump-tree-clearing.svg',
    imageAlt: 'Illustration of cleared ground with remaining stumps being removed',
    sections: [
      {
        heading: 'When Stumps and Roots Have to Go',
        bullets: [
          'Building footprints, driveways and septic areas — buried wood settles',
          'Pond basins and dam footprints',
          'Fields that will be smoothed, worked or finish-mowed',
          'Lots where visible stumps interfere with mowing and use',
          'Grade changes where roots would surface later',
        ],
      },
      {
        heading: 'Removal Methods',
        paragraphs: [
          'Stump grinding chews the stump below grade and suits lawns and areas staying in place; the roots remain and the chips fill the hole. Excavator grubbing removes the stump and root ball entirely, which construction and pond work usually demand, but disturbs more soil and produces material to dispose of. Whole-tree removal combines felling with grubbing in one operation. The intended use of the ground picks the method — and the price difference between them is significant.',
        ],
      },
      {
        heading: 'Debris and Backfill',
        paragraphs: [
          'Grubbed stumps are bulky and do not burn easily, so plan for hauling or an approved onsite disposal area. Holes left by root balls need backfill and compaction if the ground will be built on or mowed. Include your finish expectations in the request so the scope covers the last step, not just the extraction.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Grinding or grubbing — which do I need?',
        a: 'If the ground carries a structure, driveway, septic field or pond, grubbing is the norm. If the area just needs to look clean and be mowable, grinding is usually adequate. Intended use decides.',
      },
      {
        q: 'Can a few individual trees be removed, not a whole area?',
        a: 'Yes — selective tree removal on rural property is a common request, though trees near structures or lines may call for a tree service rather than clearing equipment. Describe what is around the trees.',
      },
      {
        q: 'What fills the hole after a stump comes out?',
        a: 'Typically soil backfill, compacted in lifts if anything will bear on it. Grinding leaves chips that settle as they decay, which is fine for mulch beds but not for slabs.',
      },
    ],
    related: [
      { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/' },
      { label: 'Lot Clearing in Cookeville', href: '/lot-clearing-cookeville-tn/' },
      { label: 'Pond-Site Clearing & Excavation', href: '/pond-excavation/' },
    ],
    serviceType: 'Stump and tree clearing',
    areaServed: ['Upper Cumberland TN'],
  },
];
