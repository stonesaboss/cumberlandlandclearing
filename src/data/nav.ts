export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Land Clearing',
    href: '/land-clearing-cookeville-tn/',
    children: [
      { label: 'Land Clearing', href: '/land-clearing-cookeville-tn/' },
      { label: 'Brush Clearing', href: '/brush-clearing-cookeville-tn/' },
      { label: 'Lot Clearing', href: '/lot-clearing-cookeville-tn/' },
      { label: 'Stump & Tree Clearing', href: '/stump-and-tree-clearing/' },
      { label: 'Site Preparation', href: '/excavation-grading-site-prep/' },
    ],
  },
  { label: 'Forestry Mulching', href: '/forestry-mulching-cookeville-tn/' },
  {
    label: 'Other Services',
    href: '/excavation-grading-site-prep/',
    children: [
      { label: 'Pasture Reclamation', href: '/pasture-reclamation/' },
      { label: 'Fence-Line Clearing', href: '/fence-line-clearing/' },
      { label: 'Trail Clearing', href: '/trail-clearing/' },
      { label: 'Pond-Site Clearing', href: '/pond-excavation/' },
      { label: 'Excavation, Grading & Site Prep', href: '/excavation-grading-site-prep/' },
    ],
  },
  { label: 'Project Types', href: '/#project-types' },
  {
    label: 'Service Areas',
    href: '/service-area/',
    children: [
      { label: 'Cookeville', href: '/land-clearing-cookeville-tn/' },
      { label: 'Crossville', href: '/land-clearing-crossville-tn/' },
      { label: 'Sparta', href: '/land-clearing-sparta-tn/' },
      { label: 'Livingston', href: '/land-clearing-livingston-smithville-tn/' },
      { label: 'Smithville', href: '/land-clearing-livingston-smithville-tn/' },
      { label: 'View All Service Areas', href: '/service-area/' },
    ],
  },
  {
    label: 'Land Clearing Resources',
    href: '/resources/',
    children: [
      { label: 'Knowledge Center', href: '/resources/' },
      { label: 'Clearing Cost Guides', href: '/resources/land-clearing-costs/' },
      { label: 'Clearing Methods', href: '/resources/clearing-methods/' },
      { label: 'Project Planning', href: '/resources/project-planning/' },
      { label: 'Site Preparation', href: '/resources/site-preparation/' },
      { label: 'FAQs', href: '/#faqs' },
    ],
  },
];

export const FOOTER_SERVICES: NavLink[] = [
  { label: 'Land Clearing in Cookeville', href: '/land-clearing-cookeville-tn/' },
  { label: 'Forestry Mulching in Cookeville', href: '/forestry-mulching-cookeville-tn/' },
  { label: 'Brush Clearing in Cookeville', href: '/brush-clearing-cookeville-tn/' },
  { label: 'Lot Clearing in Cookeville', href: '/lot-clearing-cookeville-tn/' },
  { label: 'Stump & Tree Clearing', href: '/stump-and-tree-clearing/' },
  { label: 'Excavation, Grading & Site Prep', href: '/excavation-grading-site-prep/' },
];

export const FOOTER_PROJECT_TYPES: NavLink[] = [
  { label: 'Pasture Reclamation', href: '/pasture-reclamation/' },
  { label: 'Fence-Line Clearing', href: '/fence-line-clearing/' },
  { label: 'Trail & Access Clearing', href: '/trail-clearing/' },
  { label: 'Pond-Site Clearing', href: '/pond-excavation/' },
];

export const FOOTER_AREAS: NavLink[] = [
  { label: 'Cookeville & Putnam County', href: '/land-clearing-cookeville-tn/' },
  { label: 'Crossville & Cumberland County', href: '/land-clearing-crossville-tn/' },
  { label: 'Sparta & White County', href: '/land-clearing-sparta-tn/' },
  { label: 'Livingston & Smithville', href: '/land-clearing-livingston-smithville-tn/' },
  { label: 'Full Service Area', href: '/service-area/' },
];
