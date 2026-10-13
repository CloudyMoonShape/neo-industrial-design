import React from "react";
/** Hairline-celled definition grid: micro mono key over 12px mono value. */
export function KeyValue({ items = [], columns = 2, style }) {
  return (
    <dl style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, margin: 0, border: "var(--hairline) solid var(--border-default)", borderRight: 0, borderBottom: 0, ...style }}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: "10px 12px", borderRight: "var(--hairline) solid var(--border-default)", borderBottom: "var(--hairline) solid var(--border-default)" }}>
          <dt style={{ fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-micro)", color: "var(--text-muted)" }}>{it.key}</dt>
          <dd style={{ margin: "2px 0 0", fontFamily: "var(--font-mono)", fontSize: "var(--text-caption)", letterSpacing: "0.06em", fontVariantNumeric: "tabular-nums", color: it.tone === "signal" ? "var(--signal-primary)" : "var(--text-primary)" }}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
