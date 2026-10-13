import React from "react";
/** Packaging panel: full-bleed signal field, dashed cut line, oversized chamfered display type, mono header and footer lines. */
export function PackPanel({ header, footerLeft, footerRight, children, minHeight = 320, style }) {
  const m = { fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-stamp)", color: "color-mix(in srgb, var(--signal-primary-fg) 70%, transparent)" };
  return (
    <div style={{ position: "relative", background: "var(--signal-primary)", color: "var(--signal-primary-fg)", minHeight, padding: "28px 24px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16, ...style }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 14, border: "1px dashed color-mix(in srgb, var(--signal-primary-fg) 55%, transparent)", pointerEvents: "none" }} />
      <div style={m}>{header}</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(80px, 18vw, 180px)", lineHeight: 0.78, letterSpacing: "-0.04em", textTransform: "uppercase" }}>{children}</div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}><span style={m}>{footerLeft}</span><span style={m}>{footerRight}</span></div>
    </div>
  );
}
