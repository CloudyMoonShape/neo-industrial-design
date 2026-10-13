import React from "react";
/** Coordinate / datum block: signal key + mono value pairs, in a row or stacked. */
export function CoordBlock({ items = [], direction = "row", align = "left", style }) {
  const row = direction === "row";
  return (
    <div style={{ display: "grid", gridTemplateColumns: row ? `repeat(${items.length}, minmax(0, 1fr))` : "1fr", gap: row ? 16 : 0, textAlign: align, fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-stamp)", lineHeight: "var(--leading-mono)", ...style }}>
      {items.map((it, i) => (
        <div key={i} style={row ? {} : { display: "flex", gap: 8, justifyContent: align === "right" ? "flex-end" : "flex-start" }}>
          <b style={{ color: "var(--signal-primary)", fontWeight: 500 }}>{it.key}</b>{row ? <div>{it.value}</div> : <span> / {it.value}</span>}
        </div>
      ))}
    </div>
  );
}
