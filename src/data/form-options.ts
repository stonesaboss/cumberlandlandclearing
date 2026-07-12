/** Shared option lists for the lead form — mirrored server-side in functions/api/lead.ts */

export const SERVICE_OPTIONS = [
  'Land Clearing',
  'Forestry Mulching',
  'Brush Clearing',
  'Lot Clearing',
  'Pasture Reclamation',
  'Fence-Line Clearing',
  'Trail Clearing',
  'Pond-Site Clearing',
  'Stump & Tree Clearing',
  'Excavation, Grading & Site Preparation',
  'Not Sure',
] as const;

export const ACREAGE_OPTIONS = [
  'Under 1 acre',
  '1–2 acres',
  '3–5 acres',
  '6–10 acres',
  '11–20 acres',
  '21–50 acres',
  'Over 50 acres',
  'Not Sure',
] as const;

export const CONDITION_OPTIONS = [
  'Dense Brush',
  'Saplings and Small Trees',
  'Mature Trees',
  'Mixed Trees and Brush',
  'Overgrown Pasture',
  'Wooded Lot',
  'Existing Trail or Fence Line',
  'Previously Cleared but Overgrown',
  'Not Sure',
] as const;

export const INTENDED_USE_OPTIONS = [
  'Home or Building Site',
  'Pasture or Farm Use',
  'Property Access',
  'Trail or Hunting Access',
  'Fence Installation',
  'Pond Construction',
  'General Property Cleanup',
  'Development',
  'Other',
] as const;

export const TERRAIN_OPTIONS = [
  'Mostly Flat',
  'Rolling',
  'Steep',
  'Rocky',
  'Wet or Soft Ground',
  'Mixed',
  'Not Sure',
] as const;

export const ACCESS_OPTIONS = [
  'Wide Open Access',
  'Standard Driveway',
  'Narrow Gate',
  'Limited Trailer Access',
  'Steep Entrance',
  'Unknown',
] as const;

export const TIMING_OPTIONS = [
  'As Soon As Possible',
  'Within 1 Month',
  '1–3 Months',
  '3–6 Months',
  '6+ Months / Planning Ahead',
  'Flexible',
] as const;
