# Resource Center — image asset manifest

Eight feature images are pending for the Resource Center. Until each file is
installed, pages render an existing site image as the interim visual (mapping
in `src/data/resources.ts`).

**To install an image:** generate/produce it per the subject brief, save it to
the exact path below (WebP, 1200×800 / 3:2 landscape, no text or logos baked
in), then flip that entry's `status` from `'pending'` to `'available'` in
`src/data/resources.ts`. Nothing else needs to change.

| # | File (under `public/images/resources/`) | Route | Ratio | Status | Suggested subject | Alt text |
|---|---|---|---|---|---|---|
| 1 | `resources-land-clearing-knowledge-center.webp` | `/resources/` | 3:2 | pending | Land-clearing equipment working on wooded rural Tennessee property, wide view | Land-clearing equipment working on wooded rural property in Tennessee |
| 2 | `resources-land-clearing-costs.webp` | `/resources/land-clearing-costs/` | 3:2 | pending | Wooded Tennessee acreage with mixed brush, mature trees and varied terrain, pre-clearing | Wooded Tennessee acreage showing brush, mature trees and varied terrain before clearing |
| 3 | `resources-clearing-methods.webp` | `/resources/clearing-methods/` | 3:2 | pending | Forestry mulcher processing brush and saplings, method comparison context | Forestry mulching equipment processing brush and saplings on rural property |
| 4 | `resources-property-conditions.webp` | `/resources/property-conditions/` | 3:2 | pending | Dense brush, mixed trees and sloped ground on an Upper Cumberland parcel | Dense brush, trees and sloped ground on an Upper Cumberland property |
| 5 | `resources-project-planning.webp` | `/resources/project-planning/` | 3:2 | pending | Rural property entrance and wooded work area marked for evaluation | Marked rural property entrance and wooded work area being evaluated for land clearing |
| 6 | `resources-site-preparation.webp` | `/resources/site-preparation/` | 3:2 | pending | Cleared rural building site mid-preparation for grading and construction | Cleared rural building site being prepared for grading and construction |
| 7 | `resources-rural-property-projects.webp` | `/resources/rural-property-projects/` | 3:2 | pending | Reclaimed pasture with cleared fence lines and access lane on rural acreage | Reclaimed pasture with cleared fence lines and improved access across rural acreage |
| 8 | `resources-upper-cumberland-land-guide.webp` | `/resources/upper-cumberland-land-guide/` | 3:2 | pending | Rolling wooded rural landscape characteristic of the Upper Cumberland region | Wooded and rolling rural landscape representative of Tennessee's Upper Cumberland region |

Content rules: representative service imagery only — no fabricated project
photos, no text in the image, no visible equipment branding, no fake company
logos.
