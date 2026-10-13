const { GridField, Corners, Label, Stamp, Heading, CoordBlock, UnitId } = window.NeoIndustrialDesignSystem_fae892;
function Hero({ gridOn }) {
  return (
    <GridField opacity={gridOn ? 1 : 0} style={{ borderBottom: "var(--hairline) solid var(--border-strong)", overflow: "hidden" }}>
      <Corners inset={16} />
      <div className="wrap" style={{ padding: "36px 0 48px", minHeight: "calc(100vh - 96px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <Label tone="signal">Ref: [ Orbital-Sys-01 ] · Lab: SPEC/NI-04</Label>
          <Stamp tone="solid">Target locked</Stamp>
        </div>
        <div>
          <Label size="meta" tone="secondary" as="p" style={{ margin: 0 }}>Design language / Neo Industrial</Label>
          <Heading level="hero" style={{ margin: "12px 0 20px" }}>Field<br />Manual</Heading>
          <p style={{ margin: 0, maxWidth: "42ch", fontSize: "var(--text-body)", lineHeight: "var(--leading-body-loose)" }}>Swiss-grid discipline, the information density of an engineering document, and the physicality of American hard tech. Looking good is a side effect; credible and deployable is the goal.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "end", gap: 16 }}>
          <CoordBlock direction="column" items={[{ key: "Datum", value: "WGS 84" }, { key: "Lat", value: "40.7128 N" }, { key: "Lon", value: "74.0060 W" }, { key: "Proj", value: "UTM 18N" }]} />
          <Stamp>Field operation: Active</Stamp>
          <UnitId>G-01</UnitId>
        </div>
      </div>
    </GridField>
  );
}
window.Hero = Hero;
