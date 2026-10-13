import React from "react";
/** Fixed bottom-right confirmation strip in signal orange. Auto-dismiss handled by caller. */
export function Toast({ children, open = true, tone = "signal", style }) {
  if (!open) return null;
  const t = tone === "ink" ? { background: "var(--text-primary)", color: "var(--surface-primary)" } : tone === "alert" ? { background: "var(--signal-alert)", color: "var(--signal-alert-fg)" } : { background: "var(--signal-primary)", color: "var(--signal-primary-fg)" };
  return (
    <div role="status" style={{ position: "fixed", bottom: 20, right: 20, zIndex: 60, padding: "10px 14px", pointerEvents: "none", fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontSize: "var(--text-stamp)", ...t, ...style }}>{children}</div>
  );
}
