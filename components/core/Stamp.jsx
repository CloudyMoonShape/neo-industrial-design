import React from "react";
const TONES = {
  ghost: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border-strong)" },
  solid: { background: "var(--signal-primary)", color: "var(--signal-primary-fg)", borderColor: "var(--signal-primary)" },
  online: { background: "var(--signal-active)", color: "var(--signal-active-fg)", borderColor: "var(--signal-active)" },
  warn: { background: "transparent", color: "var(--signal-warn)", borderColor: "var(--signal-warn)" },
  alert: { background: "var(--signal-alert)", color: "var(--signal-alert-fg)", borderColor: "var(--signal-alert)" },
  ink: { background: "var(--text-primary)", color: "var(--surface-primary)", borderColor: "var(--text-primary)" },
  offline: { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-strong)", borderStyle: "dashed", opacity: 0.7 },
};
/** Status stamp: STATUS: ACTIVE / TARGET LOCKED / FIELD TESTING. Every page carries at least one. */
export function Stamp({ tone = "ghost", size = "md", children, style, ...rest }) {
  const t = TONES[tone] || TONES.ghost;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontSize: size === "sm" ? "var(--text-meta)" : "var(--text-stamp)", lineHeight: 1,
      padding: size === "sm" ? "4px 8px" : "var(--stamp-pad)", border: "var(--hairline) solid", whiteSpace: "nowrap", ...t, ...style }} {...rest}>{children}</span>
  );
}
