import React from "react";
import { Mark } from "./Mark.jsx";
/** Type lockup: graphic mark + wordmark + top/bottom mono metadata bars. The three parts are a locked combination. */
export function Lockup({ mark, word, sub, top = [], bottom = [], style }) {
  const bar = (items, pos) => (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap", padding: "8px 12px", fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-meta)", [pos === "top" ? "borderBottom" : "borderTop"]: "var(--hairline) solid var(--text-primary)" }}>
      {items.map((t, i) => <span key={i}>{t}</span>)}
    </div>
  );
  return (
    <div style={{ border: "var(--hairline) solid var(--text-primary)", background: "var(--surface-primary)", color: "var(--text-primary)", ...style }}>
      {top.length > 0 && bar(top, "top")}
      <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 16, alignItems: "center", padding: "20px 16px" }}>
        {mark || <Mark />}
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 7vw, 64px)", lineHeight: 0.8, letterSpacing: "-0.02em", textTransform: "uppercase" }}>{word}</div>
          {sub && <div style={{ fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontSize: "var(--text-stamp)", marginTop: 8, color: "var(--text-secondary)" }}>{sub}</div>}
        </div>
      </div>
      {bottom.length > 0 && bar(bottom, "bottom")}
    </div>
  );
}
