import React from "react";
const L = {
  hero: { as: "h1", fontFamily: "var(--font-display)", fontWeight: "var(--weight-display)", fontSize: "var(--text-hero)", lineHeight: "var(--leading-display)", letterSpacing: "var(--track-display)" },
  h1: { as: "h1", fontFamily: "var(--font-display)", fontWeight: "var(--weight-display)", fontSize: "var(--text-h1)", lineHeight: "var(--leading-display)", letterSpacing: "var(--track-display)" },
  h2: { as: "h2", fontFamily: "var(--font-title)", fontWeight: "var(--weight-title)", fontSize: "var(--text-h2)", lineHeight: "var(--leading-title)", letterSpacing: "var(--track-title)" },
  h3: { as: "h3", fontFamily: "var(--font-title)", fontWeight: "var(--weight-title)", fontSize: "var(--text-h3)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--track-h3)" },
  h4: { as: "h4", fontFamily: "var(--font-title)", fontWeight: "var(--weight-title)", fontSize: "var(--text-h4)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--track-h3)" },
};
/** Display / title type. Always uppercase, never italic. Hierarchy = size + space, nothing else. */
export function Heading({ level = "h2", as, children, style, ...rest }) {
  const { as: defTag, ...s } = L[level] || L.h2;
  const Tag = as || defTag;
  return <Tag style={{ margin: 0, textTransform: "uppercase", textWrap: "balance", color: "inherit", ...s, ...style }} {...rest}>{children}</Tag>;
}
