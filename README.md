# NEO INDUSTRIAL — SPEC/NI-04

**English** · [简体中文](README.zh-CN.md)

`STATUS: FIELD TESTING` · `REV 1.0` · `LICENSE: MIT`

A design system for interfaces that should read like an engineering document: Swiss grids, technical spec sheets, factory markings and aviation graphics, applied to screens. One signal color, hairline structure, uppercase mono labels, a visible grid, and nothing decorative.

> If it cannot print on a spec plate, a carton side, or a work jacket, it is not done.

![Field Manual — the reference page of the system](docs/images/field-manual.png)

## What is in here

| Path | Contents |
| --- | --- |
| [`DESIGN.md`](DESIGN.md) | The full specification: voice, color, type, spacing, grid, motion, iconography, component index. Start here. |
| [`styles.css`](styles.css) + [`tokens/`](tokens) | Design tokens as CSS custom properties: primitives, semantic tokens, two atmospheres. |
| [`components/`](components) | 22 React components in four groups (core, structure, materials, micrographics). Each has `.jsx`, `.d.ts` and a `.prompt.md` usage note. |
| [`guidelines/`](guidelines) | 17 specimen cards for color, type, spacing and brand rules. Open directly in a browser. |
| [`ui_kits/field-manual/`](ui_kits/field-manual) | The Field Manual: a single-page document that is also the reference UI. |
| [`examples/image-stitcher/`](examples/image-stitcher) | A working tool built in this language. |
| [`archive/grok-v1/`](archive/grok-v1) | The first pass, generated with Grok Build, kept as the provenance record. |
| [`SKILL.md`](SKILL.md) | Entry point when the repo is used as a Claude skill. |

## Quick look

Open [`ui_kits/field-manual/field-manual-standalone.html`](ui_kits/field-manual/field-manual-standalone.html) in a browser. It is a single self-contained file: no build step, no server.

## Using the tokens

```html
<link rel="stylesheet" href="styles.css">
```

Components and custom CSS read **semantic** tokens only, never primitives:

```css
.panel {
  background: var(--surface-elevated);
  color: var(--text-primary);
  border: var(--hairline) solid var(--border-strong);
}
.panel .label {
  font: var(--weight-mono) var(--text-stamp) / 1 var(--font-mono);
  letter-spacing: var(--track-stamp);
  text-transform: uppercase;
  color: var(--text-muted);
}
```

Two atmospheres share the same semantic names, so switching is one attribute:

| Atmosphere | How | Palette |
| --- | --- | --- |
| **Field** (default) | nothing | black, white text, safety orange `#FF4C00` |
| **Fabrication** | `<html data-atmos="fab">` | cream, sand, deep brown, rust `#B84312` |

## Non-negotiables

- One accent color per surface. Status colors (online green, degraded amber, alert red) are not accents.
- Zero radius, no shadows, no gradients, no blur.
- No emoji, no pictorial icons. Meaning is carried by mono labels, status stamps and an 8px state dot.
- Labels are uppercase mono in `KEY: VALUE` form. Every page carries at least one status stamp.
- Motion is mechanical: 80 / 140 / 220 ms on `cubic-bezier(0.2, 0, 0, 1)`. No spring, no bounce.
- Validation test: turn the signal color off, turn the micrographics off, view in grayscale. It must still read as an engineering document.

## Components

![Core controls](docs/images/core-controls.png)

| Group | Components |
| --- | --- |
| core | Button, Stamp, SegmentedControl, Meter, KeyValue, StatusList, Toast |
| structure | CommandHeader, SectionHead, Plate, GridField, Corners, CoordBlock, UnitId, Heading, Label |
| materials | Mark, Lockup, HudPanel, SpecSheet, PackPanel |
| micrographics | Micrographic (index, scan, scanlines, octagon, chamfer, cut, cross, barcode) |

![Materials](docs/images/materials.png)

The components are plain React with inline styles that read the tokens. There is no npm package: copy the files you need. `_ds_bundle.js` is a prebuilt browser bundle of all of them (exposed as `window.NeoIndustrialDesignSystem_fae892`), used by the UI kit and the specimen cards.

## Example: image stitcher

[`examples/image-stitcher/index.html`](examples/image-stitcher/index.html) is a single-file tool for stitching images horizontally or vertically and exporting at the source ratio or a chosen one (1:1, 4:3, 16:9, custom; contain or cover). It shows the system applied to a real working interface: command header with a live status stamp, numbered spec rail, visible grid, Field and Fabrication atmospheres. The UI is in Chinese with English annotations. Everything runs locally; no image leaves the browser.

![Image stitcher](docs/images/image-stitcher.png)

## Use as a Claude skill

```bash
git clone https://github.com/CloudyMoonShape/neo-industrial-design.git ~/.claude/skills/neo-industrial-design
```

Then invoke `/neo-industrial-design` in Claude Code, or just ask for something "in the Neo Industrial style". The skill reads `DESIGN.md`, the tokens and the component notes before building.

## Fonts

The kit uses three Google Fonts as stand-ins: **Barlow Condensed** (display and titles), **IBM Plex Sans** (body) and **IBM Plex Mono** (every operational label). The production target is Saans by Displaay, a commercial family that is not included. Swap the families in `tokens/fonts.css` and `tokens/typography.css`; every other token stays.

## Provenance

The first pass was generated with Grok Build as a single-page Field Manual. This repository is the second pass: reviewed, refined into layered tokens and components, and documented. The first pass is kept in [`archive/grok-v1/`](archive/grok-v1).

The system is anonymized. It was distilled from public material in the defense, robotics and industrial-design genre, but no real person, studio, client name or client mark appears anywhere in it.

## License

[MIT](LICENSE) © 2026 MoonShade
