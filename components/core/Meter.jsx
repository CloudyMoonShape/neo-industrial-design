import React from "react";
const TONE = { signal: "var(--signal-primary)", warn: "var(--signal-warn)", active: "var(--signal-active)", ink: "var(--text-primary)" };
/** Horizontal gauge: mono label + 8px track. Load / 78%. */
export function Meter({ label, value = 0, max = 100, tone = "signal", showValue = true, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ display: "grid", gap: 6, ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontSize: "var(--text-stamp)" }}>
        <span>{label}</span>{showValue && <span style={{ color: "var(--text-secondary)" }}>{Math.round(pct)}%</span>}
      </div>
      <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} style={{ height: 8, background: "var(--border-default)", position: "relative" }}>
        <i style={{ display: "block", height: "100%", width: pct + "%", background: TONE[tone] || TONE.signal, transition: "width var(--motion-slow) var(--ease-mechanical)" }} />
      </div>
    </div>
  );
}
