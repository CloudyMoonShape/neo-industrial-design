import React from "react";
const BARCODE = [2, 1, 3, 1, 1, 4, 2, 1, 3, 2, 1, 1, 5, 1, 2, 3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 2];
/** Annotation-layer parts: index bars, scan bars, octagon, chamfer plate, scanlines, dashed cut, crosshair, density code. Decoration budget: Content 60 / System 30 / Micro 10. */
export function Micrographic({ kind = "index", color = "var(--text-primary)", accent = "var(--signal-primary)", width = "100%", height = 72, style }) {
  const box = { width, height, ...style };
  switch (kind) {
    case "index": return <div aria-hidden="true" style={{ ...box, background: `repeating-linear-gradient(90deg, ${color} 0 var(--stripe-bar), transparent var(--stripe-bar) calc(var(--stripe-bar) + var(--stripe-gap)))` }} />;
    case "scan": return <div aria-hidden="true" style={{ ...box, background: `repeating-linear-gradient(180deg, ${color} 0 2px, transparent 2px 6px)`, opacity: 0.85 }} />;
    case "scanlines": return <div aria-hidden="true" style={{ ...box, background: `repeating-linear-gradient(180deg, transparent 0 3px, color-mix(in srgb, ${color} 32%, transparent) 3px 4px)` }} />;
    case "octagon": return <div aria-hidden="true" style={{ ...box, background: color, clipPath: "polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)" }} />;
    case "chamfer": return <div aria-hidden="true" style={{ ...box, background: accent, clipPath: "polygon(var(--chamfer) 0, 100% 0, 100% calc(100% - var(--chamfer)), calc(100% - var(--chamfer)) 100%, 0 100%, 0 var(--chamfer))" }} />;
    case "cut": return <div aria-hidden="true" style={{ ...box, border: `1px dashed ${color}`, outline: `1px dashed ${color}`, outlineOffset: 6 }} />;
    case "cross": {
      const b = (p) => <b style={{ position: "absolute", width: 10, height: 10, border: `1px solid ${color}`, ...p }} />;
      return (
        <div aria-hidden="true" style={{ ...box, position: "relative" }}>
          <i style={{ position: "absolute", left: "50%", top: 0, width: 1, height: "100%", background: accent, transform: "translateX(-50%)" }} />
          <i style={{ position: "absolute", top: "50%", left: 0, height: 1, width: "100%", background: accent, transform: "translateY(-50%)" }} />
          {b({ top: 0, left: 0, borderRight: 0, borderBottom: 0 })}{b({ top: 0, right: 0, borderLeft: 0, borderBottom: 0 })}{b({ bottom: 0, left: 0, borderRight: 0, borderTop: 0 })}{b({ bottom: 0, right: 0, borderLeft: 0, borderTop: 0 })}
        </div>
      );
    }
    case "barcode": return (
      <div aria-hidden="true" style={{ ...box, display: "flex", alignItems: "stretch" }}>
        {BARCODE.map((w, i) => <i key={i} style={{ display: "block", background: color, height: "100%", width: w * 2, marginRight: i % 3 === 0 ? 3 : 1 }} />)}
      </div>
    );
    default: return null;
  }
}
