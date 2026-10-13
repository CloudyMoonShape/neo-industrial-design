import React from "react";
import { Mark } from "./Mark.jsx";
/** Spec-sheet layout: narrow left rail (mark, doc lines, stamp) + main body. A specification, not a poster. */
export function SpecSheet({ mark, doc = [], stamp, children, railWidth = 180, style }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `${railWidth}px 1fr`, border: "var(--hairline) solid var(--border-strong)", background: "var(--surface-elevated)", ...style }}>
      <aside style={{ padding: "20px 16px", borderRight: "var(--hairline) solid var(--border-strong)", display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
        {mark === undefined ? <Mark size={56} /> : mark}
        <div style={{ fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-stamp)", lineHeight: "var(--leading-mono)" }}>{doc.map((d, i) => <div key={i}>{d}</div>)}</div>
        {stamp}
      </aside>
      <div style={{ padding: 20, display: "grid", gap: 16, alignContent: "start" }}>{children}</div>
    </div>
  );
}
