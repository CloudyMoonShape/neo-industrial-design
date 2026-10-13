# UI kit — Field Manual (SPEC/NI-04)

Recreation of the single-page Neo-Industrial "Field Manual" (source: the first pass in `archive/grok-v1/src/field-manual.tsx` + `archive/grok-v1/src/styles.css`). It is the only product surface in the source.

Screens (all in one scrolling document, reachable through the index nav):
- `Hero.jsx` — grid field, fiducial corners, kicker + stamp, display title, coordinate block, unit id.
- `TokensSection.jsx` — 01 Tokens: primitive swatches (click to copy), semantic swatches, type scale, spacing / edge plates.
- `MaterialsSection.jsx` — 02 Micrographics + 03 Materials: lockup, stamps, coordinate block, HUD, spec sheet, packaging, command buttons.
- `StatesSection.jsx` — 04 States / motion: button states, system rows, wipe-lock demo; 05 Voice: use / kill lists; footer.

Interactions: Field / Fabrication atmosphere switch (remaps semantic tokens via `data-atmos`), Grid on/off, live UTC clock, copy-to-clipboard with toast, index nav.

Omitted on purpose (not production-grade): apparel silhouette, validation toggles (Gray / Signal-off / Anno-off), provenance badges, the "Don't" gradient card, Chinese explanatory copy.

## Standalone copy

`field-manual-standalone.html` — a self-contained, single-file export of this same
document (fonts/scripts/data inlined, no CDN or `_ds_bundle.js` dependency). Open it
directly in a browser for a quick look; no dev server or Babel-in-browser step needed
like `index.html` requires. It is a snapshot, not the source — edit `Hero.jsx` /
`TokensSection.jsx` / `MaterialsSection.jsx` / `StatesSection.jsx` (via `index.html`)
for real changes, and re-export if the standalone copy needs to catch up.
