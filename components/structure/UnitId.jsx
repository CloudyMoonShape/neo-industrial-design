import React from "react";
/** Oversized unit identifier: G-01, NI-04. Display 800, leading 0.8, tracking +0.02em. */
export function UnitId({ children, size = "lg", align = "right", style, ...rest }) {
  return <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: size === "lg" ? "var(--text-unit)" : size === "md" ? 42 : 28, lineHeight: 0.8, letterSpacing: "0.02em", textAlign: align, textTransform: "uppercase", ...style }} {...rest}>{children}</div>;
}
