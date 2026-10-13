import React from "react";
const T = { stamp: "var(--text-stamp)", meta: "var(--text-meta)", micro: "var(--text-micro)" };
const C = { primary: "var(--text-primary)", secondary: "var(--text-secondary)", muted: "var(--text-muted)", signal: "var(--signal-primary)", active: "var(--signal-active)" };
/** Mono operational label: kicker, meta line, coordinate, telemetry. Uppercase, tracked, tabular numerals. */
export function Label({ size = "stamp", tone = "primary", as: Tag = "span", children, style, ...rest }) {
  return <Tag style={{ fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: size === "stamp" ? 500 : 400, fontSize: T[size] || T.stamp, color: C[tone] || C.primary, lineHeight: "var(--leading-mono)", ...style }} {...rest}>{children}</Tag>;
}
