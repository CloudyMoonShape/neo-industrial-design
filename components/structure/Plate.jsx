import React from "react";
/** Bordered panel on the elevated surface with a mono label row. The system's only "card". No radius, no shadow. */
export function Plate({ label, meta, children, padding = "var(--plate-pad)", tone = "elevated", style, ...rest }) {
  return (
    <section style={{ border: "var(--hairline) solid var(--border-strong)", background: tone === "flat" ? "transparent" : "var(--surface-elevated)", padding, ...style }} {...rest}>
      {(label || meta) && (
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline", marginBottom: 12, paddingBottom: 8, borderBottom: "var(--hairline) solid var(--border-default)", fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-meta)", color: "var(--text-muted)" }}>
          <span>{label}</span><span>{meta}</span>
        </div>
      )}
      {children}
    </section>
  );
}
