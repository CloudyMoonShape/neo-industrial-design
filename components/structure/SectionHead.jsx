import React from "react";
import { Heading } from "./Heading.jsx";
/** Section opener: signal-colored mono id, title + description, right-aligned aside; dashed rule beneath. */
export function SectionHead({ id, title, description, aside, style }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "160px 1fr auto", gap: 16, alignItems: "end", marginBottom: 32, paddingBottom: 20, borderBottom: "var(--hairline) dashed var(--border-strong)", ...style }}>
      <span style={{ fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-stamp)", color: "var(--signal-primary)" }}>{id}</span>
      <div>
        <Heading level="h2">{title}</Heading>
        {description && <p style={{ margin: "8px 0 0", fontSize: "var(--text-body)", lineHeight: "var(--leading-body-loose)", color: "var(--text-secondary)", maxWidth: "62ch" }}>{description}</p>}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{aside}</div>
    </div>
  );
}
