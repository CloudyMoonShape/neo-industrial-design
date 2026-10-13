/** Copy-paste :root dump.
 * Primitives = palette. Semantic = what components consume.
 * Hex values are [DERIVED] kit measurements, not official source specs.
 * Production type: swap display/body/mono to Saans (Displaay). */
export const NI_ROOT_CSS = `:root {
  /* SPEC/NI-04 — Neo Industrial tokens
     STRUCTURE FIRST / SIGNAL SECOND / DECORATION LAST
     Production typeface: Saans (proportional / semi-mono / mono). Kit substitutes below. */

  /* ── PRIMITIVES ──
     [DERIVED] hex from Field (black/white/safety) and Fabrication (rust/sand/brown) atmospheres.
     [OBSERVED] one high-visibility color + black/charcoal/paper. Do not add a second accent. */
  --ni-black: #0B0B0B;
  --ni-ink: #101010;
  --ni-charcoal: #161616;
  --ni-steel: #2B2B2B;
  --ni-white: #F6F5F1;
  --ni-paper: #F3EEE2;
  --ni-cream: #EDE6D2;
  --ni-sand: #C9B48A;
  --ni-fog: #B7B3A8;
  --ni-mute: #7B776E;

  --ni-safety: #FF4C00;
  --ni-safety-2: #FF7A18;
  --ni-amber: #E39B24;
  --ni-hivis: #F0C14B;
  --ni-rust: #B84312;
  --ni-brown: #2A1A12;
  --ni-nvg: #9CFF6A;
  --ni-alert: #FF2E2E;
  --ni-datum: #2E62F0;

  --ni-line: rgba(246, 245, 241, 0.16);
  --ni-line-strong: rgba(246, 245, 241, 0.32);

  /* ── SEMANTIC ── [INVENTED] portable layer. Themes remap these; components never read primitives. */
  --surface-primary: var(--ni-black);
  --surface-secondary: var(--ni-charcoal);
  --surface-elevated: var(--ni-ink);
  --surface-paper: var(--ni-paper);

  --text-primary: var(--ni-white);
  --text-secondary: var(--ni-fog);
  --text-muted: var(--ni-mute);

  --border-default: var(--ni-line);
  --border-strong: var(--ni-line-strong);

  --signal-primary: var(--ni-safety);
  --signal-primary-fg: var(--ni-black);
  --signal-active: var(--ni-nvg);
  --signal-alert: var(--ni-alert);
  --signal-warn: var(--ni-amber);

  /* ── TYPE ── [DERIVED] kit substitutes. [OBSERVED] one family, hierarchy by scale/space/align. */
  --font-display: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-title: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-body: "IBM Plex Sans", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;
  --font-serif: "Source Serif 4", "Times New Roman", serif;

  /* ── SPACE / GRID ── [DERIVED] 4-base scale; 24/48 visible grid inferred from repeated layouts. */
  --ni-space-1: 4px;
  --ni-space-2: 8px;
  --ni-space-3: 12px;
  --ni-space-4: 16px;
  --ni-space-5: 24px;
  --ni-space-6: 32px;
  --ni-space-7: 48px;
  --ni-space-8: 64px;
  --ni-space-9: 96px;
  --ni-grid: 48px;
  --ni-grid-fine: 24px;
  --ni-radius: 0px;
  --ni-radius-max: 2px;
  --ni-hairline: 1px;
  --ni-dash: 4px 3px;
  --ni-stripe-bar: 3px;
  --ni-stripe-gap: 2px;
  --ni-track-stamp: 0.14em;
  --ni-track-display: -0.02em;
  --ni-leading-display: 0.88;

  /* ── MOTION ── [INVENTED] mechanical, no bounce / spring / luxury ease. */
  --motion-fast: 80ms;
  --motion-base: 140ms;
  --motion-slow: 220ms;
  --ease-mechanical: cubic-bezier(0.2, 0, 0, 1);
}`;
