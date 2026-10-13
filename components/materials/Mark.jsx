import React from "react";
/** System unit mark: 1.5px octagon plate with a display-weight code. Not a client logo — a nameplate. */
export function Mark({ code = "04", size = 72, color = "currentColor", filled = false, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" aria-hidden="true" style={{ display: "block", color, ...style }}>
      <polygon points="22,4 50,4 68,22 68,50 50,68 22,68 4,50 4,22" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" />
      <text x="36" y="45" textAnchor="middle" fill={filled ? "var(--surface-primary)" : "currentColor"} fontFamily="var(--font-display)" fontWeight="800" fontSize="28" letterSpacing="1">{code}</text>
    </svg>
  );
}
