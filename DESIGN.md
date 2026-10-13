# Neo Industrial Design System — SPEC/NI-04

**Design language:** Neo-Industrial. Swiss grids + technical systems + industrial typography + utilitarian interfaces — "the collision of Swiss design and technical spec sheets". Built from engineering manuals, factory markings, aviation graphics, research labs and specification sheets: coordinates, serial numbers, data stamps, unit identifiers, grid structures, technical annotations, reference codes.

**Approach:** restrained / operational / grounded. **Execution filter:** function over decoration. **Acceptance test:** *If it cannot print on a spec plate, a carton side, or a work jacket, it is not done.*

This project is the second pass on a first-pass kit built by Grok Build. Review → refinement → systemization → delivery: the strongest ideas (one signal color, hairline structure, mono stamps, visible grid, Field/Fabrication atmospheres, mechanical motion, operational voice) are preserved; prototype tooling, redundant token aliases, italic display type, the apparel gimmick and mixed-language copy are removed.

## Sources

- **First pass:** a single-page Field Manual generated with Grok Build — tokens, component CSS and the page itself. The relevant files are kept unchanged in `archive/grok-v1/` as the provenance record.
- **Research:** public posts and printed matter from the defense / robotics / industrial-design genre (spec plates, carton markings, aviation graphics, lab documents). Research material is not redistributed here. **The system is anonymized:** no real person, studio, client name or client mark appears anywhere in it.

**Products represented:** one — the *Field Manual* (SPEC/NI-04), a single-page design-system document that is also the reference UI. Two atmospheres run through it: **Field / Defense HUD** (black, white text, safety-orange stamps, occasional night-vision green) and **Fabrication** (oxidized rust, sand, deep brown).

## Content fundamentals

- **Register:** an operating document, not a pitch. Sentences are declarative, short, factual. "Designed for the infrastructure under the stack, not the consumer surface on top of it."
- **Labels** are uppercase mono `KEY: VALUE` or `KEY / VALUE` pairs: `STATUS: ACTIVE DEPLOYMENT`, `DATUM / WGS 84`, `UNIT ID: NI-04`, `REF: [ ORBITAL-SYS-01 ]`, `FIELD OPERATION: ACTIVE`, `ENGAGE DESIGN OPS`, `TARGET LOCKED`, `CONTINUOUS`, `BUILT FOR FIELD USE`, `FUNCTION OVER DECORATION`.
- **Every page carries at least one status stamp.** Headers read as live reports: `DATE WED 02 SEP 26 · CLOCK 17:03:08 Z · SECTOR AI / ROBOTICS / DEFENSE / INDUSTRY · STATUS FIELD TESTING`. Times are UTC ("Z"), dates are `DDD DD MMM YY`.
- **Casing:** display and titles are uppercase (CSS transform); body is sentence case; mono labels uppercase. Buttons are verbs or states ("Engage design ops", "Export HTML", "Status: Standby"), never "Get started".
- **Numbering:** sections are numbered `01 / TOKENS`, parts are coded `MAT-06`, `MG-03`, `G-01`, `NI-04`, serials `SN 04-7721-AX`, revisions `REV 1.4`.
- **Person:** no "we", no "you". The system speaks about the object.
- **Kill list:** reimagine · seamless · next-gen synergy · unlock the future · delightful · bold new era. No exclamation marks. **No emoji, ever.**
- **Vibe:** engineered rather than designed. Credible and deployable is the goal; looking good is a side effect.

## Visual foundations

- **Color:** one high-visibility accent per surface + black / charcoal / paper. Field: `--ni-black` page, `--ni-ink` panels, `--ni-white` text, `--ni-safety #FF4C00` accent. Fabrication (`[data-atmos="fab"]`): `--ni-cream` page, `--ni-paper` panels, `--ni-brown` text, `--ni-rust` accent. `--ni-nvg` green = online / link stable; `--ni-amber` = metering / degraded; `--ni-alert` red = alert only; `--ni-datum` blue is reserved for geodetic datum labels and never appears in UI; `--ni-hivis` is print-only. Never introduce a second accent. Components read semantic tokens (`--surface-*`, `--text-*`, `--border-*`, `--signal-*`) only.
- **Type:** Barlow Condensed 800 for display (64–128px, leading 0.86, tracking −0.02em, uppercase, **never italic**), Barlow Condensed 700 for titles (h2 28–42 / h3 22 / h4 18, tracked +0.01–0.04em), IBM Plex Sans 400/500 body (15px / 1.5, max 62ch), IBM Plex Mono 500 for every operational label (11px stamps tracked 0.14em, 10px meta, 9px micro; tabular numerals). One family per job — hierarchy is size, space and alignment. Production target: Saans by Displaay (proportional / semi-mono / mono); the three Google families are licensed stand-ins.
- **Spacing:** base-4 scale 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Content width 1280, gutters 24 (16 mobile). Sections pad 64 top / 80 bottom. Plates pad 16; stamps pad 6×10; buttons 44px tall (36 small), 16px side padding.
- **Grid:** a **visible** 48px grid (24px minor) drawn as 1px hairlines under heroes, HUDs and plates. The grid is a style element, not a construction aid. It can be toggled off — structure must still hold.
- **Backgrounds:** flat solids only. No photography in the kit (the reference genre is aerial / terrain imagery with the grid and type laid over it — when imagery is used it is desaturated, cool-to-warm earth tones, no grain filters, no duotone). No gradients except the HUD's single night-vision radial glow at 12% and the packaging panel's solid signal field. No patterns beyond the eight micrographics.
- **Borders & depth:** everything is a 1px hairline — `--border-default` (16% ink) for dividers, `--border-strong` (32%) for frames, solid ink for lockups. **No box shadows, ever.** Dashed 4/3 lines mean "unfinished / cut here / offline"; solid means "closed system". 12px chamfer is the only corner treatment; radius is 0 (2px maximum on physical print).
- **Cards:** the `Plate` — hairline frame, elevated surface, mono label row. Square corners, no shadow, no gradient, no colored left border. Nest at most one level.
- **Hover:** solid buttons brighten 8%; ghost borders go from 32% to full ink; nav and links turn signal orange; swatches get a signal border. Transitions 140ms.
- **Press:** scale 0.98 over 80ms, no spring. Selected state is an inset 1px ink ring.
- **Disabled:** opacity 0.38. Offline: dashed border, muted text.
- **Motion:** 80 / 140 / 220ms on `cubic-bezier(0.2, 0, 0, 1)`. Vocabulary is snap / wipe / lock. No bounce, no spring, no parallax, no fades longer than 220ms. Respects `prefers-reduced-motion`.
- **Transparency & blur:** none. The sticky header is 92% surface with **no** backdrop blur. Overlays sit on solid surfaces.
- **Protection:** text over imagery is protected by the visible grid and a plate, never by a gradient scrim.
- **Iconography / micrographics:** eight CSS-only annotation parts (index bars 3/2 modulus, scan bars, 3+1 scanlines, octagon, chamfer plate, dashed cut, crosshair, density code). Budget: content 60 / system 30 / micro 10 — hero ≤ 3 families, ordinary block 1–2, annotation contrast below body text.
- **Layout rules:** sticky command header (brand code · meta report · controls · index nav). Hero = kicker + stamp top, display title + one paragraph middle, coordinate block bottom-left and oversized unit id bottom-right, fiducial corners on the frame. Spec sheets are left rail + body. Mobile is single column.
- **Validation:** turn the signal color off, turn the micrographics off, view in grayscale — the composition must still read as an engineering document. If it looks decorated, remove something.

## Iconography

- There is **no icon font and no icon set** in the source. The system deliberately uses no pictorial icons: meaning is carried by mono text labels, status stamps and an 8px square state dot (filled = online, fog = standby, amber = degraded, red = alert, hollow = offline).
- **Micrographics** (see above) are the only graphic vocabulary; they are components (`Micrographic kind=…`), not image files.
- **Marks:** `assets/mark-octagon.svg` — the kit's own 16px favicon-style unit mark (octagon plate with a cross). The `Mark` component renders the scalable version (octagon outline + two-character code). **There is no company logo**; where a logo would go, render the system code in display type (`SPEC/NI-04`). Do not draw or reconstruct any client mark.
- Unicode used as punctuation only: ` · ` between meta items, ` / ` in coordinate pairs, `—` for absent values, `[ ]` around reference codes. No arrows-as-icons, no emoji.
- If a consuming project genuinely needs pictorial icons, use a 1.5px-stroke geometric set (e.g. Lucide from CDN) at 16px in `--text-secondary`, never filled, never colored — and flag it as an addition.

## Components

Grouped under `components/`. Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; one card per group.

**core/** — controls and indicators
- `Button` — solid / ghost / ink / warn / offline; selected, disabled; md 44 / sm 36
- `Stamp` — ghost / solid / online / warn / alert / ink / offline
- `SegmentedControl` — one-of or multi toggle in a hairline frame
- `Meter` — 8px gauge with mono label; signal / warn / active
- `KeyValue` — hairline-celled definition grid
- `StatusList` — system rows with square state dot
- `Toast` — fixed bottom-right confirmation strip

**structure/** — layout and type
- `CommandHeader` — sticky brand code + meta report + actions + index nav
- `SectionHead` — numbered section opener with dashed rule
- `Plate` — the only card
- `GridField` — visible-grid backdrop
- `Corners` — fiducial corner brackets
- `CoordBlock` — datum / projection readouts
- `UnitId` — oversized unit code
- `Heading` — hero / h1 / h2 / h3 / h4
- `Label` — mono operational text: stamp / meta / micro

**materials/** — deployable specimens
- `Mark` — octagonal nameplate
- `Lockup` — mark + wordmark + metadata bars
- `HudPanel` — HUD / map overlay
- `SpecSheet` — left rail + body
- `PackPanel` — packaging side panel

**micrographics/**
- `Micrographic` — index / scan / scanlines / octagon / chamfer / cut / cross / barcode

**Intentional additions** (not literal source components, but source *patterns* promoted to components): `Heading` and `Label` (the source's `.ni-h1/.ni-h2/.ni-kicker/.ni-mono` helper classes), `GridField` (`.ni-hero-grid`), `Corners` (`.ni-corners`), `UnitId` (`.ni-unit-lg`), `Mark` (`Mark()` in `field-manual.tsx`).

**Removed from the source on review:** apparel jacket silhouette (illustrative gimmick), swatch/copy tooling, provenance badges `[Observed]/[Derived]/[Invented]`, Gray / Signal-off / Anno-off validation modes (kept as a written test above), the gradient "Don't" card, `--bg/--fg/--accent/--panel/--hivis/--motion-quick/--ease-mech` duplicate aliases, italic hero, Tailwind `@theme` block, Chinese explanatory copy.

## Index

- `styles.css` — entry point; `@import`s everything under `tokens/`.
- `tokens/fonts.css` (Google Fonts import), `colors.css` (primitives + Field semantic + Fabrication scope), `typography.css`, `spacing.css`, `motion.css`, `base.css` (body reset, link colors, focus ring).
- `guidelines/*.html` — 17 specimen cards: Colors (5), Type (4), Spacing (4), Brand (4).
- `components/{core,structure,materials,micrographics}/` — 22 components + 4 cards.
- `ui_kits/field-manual/` — the Field Manual recreation (`index.html`, `Hero.jsx`, `TokensSection.jsx`, `MaterialsSection.jsx`, `StatesSection.jsx`, `README.md`) plus `field-manual-standalone.html`, a single-file self-contained export for quick preview (open directly, no dev server).
- `assets/mark-octagon.svg` — system mark.
- `thumbnail.html` — project tile. `SKILL.md` — agent skill entry.
- `_ds_bundle.js` / `_ds_manifest.json` — prebuilt browser bundle of all components (`window.NeoIndustrialDesignSystem_fae892`), used by `ui_kits/field-manual/index.html` and the guideline cards. `_adherence.oxlintrc.json` — optional lint rules for consuming projects.
- `archive/grok-v1/` — the first-pass Field Manual (single-file HTML, React source, screenshots).
- `examples/image-stitcher/` — a working single-file tool built in this language (Chinese UI with English annotations).
