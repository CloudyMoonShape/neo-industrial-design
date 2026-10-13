import React from "react";
import { GridField } from "../structure/GridField.jsx";
import { Heading } from "../structure/Heading.jsx";
/** HUD / map overlay: black field, visible grid, optional night-vision beam, oversized title, mono telemetry in the corners. */
export function HudPanel({ title, topLeft, topRight, bottomLeft, bottomRight, beam = true, minHeight = 320, children, style }) {
  const tel = { fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-meta)", letterSpacing: "0.12em", color: "rgba(246,245,241,.7)", lineHeight: 1.8 };
  return (
    <GridField color="rgba(246,245,241,.1)" style={{ background: "var(--ni-black)", color: "var(--ni-white)", border: "var(--hairline) solid var(--ni-steel)", overflow: "hidden", minHeight, ...style }}>
      {beam && <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(156,255,106,.12), transparent 55%)", pointerEvents: "none" }} />}
      <div style={{ position: "relative", padding: 20, minHeight, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}><div style={tel}>{topLeft}</div><div>{topRight}</div></div>
        <div>{title && <Heading level="h1" style={{ margin: "24px 0", color: "var(--ni-white)" }}>{title}</Heading>}{children}</div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}><div style={tel}>{bottomLeft}</div><div style={{ ...tel, textAlign: "right" }}>{bottomRight}</div></div>
      </div>
    </GridField>
  );
}
