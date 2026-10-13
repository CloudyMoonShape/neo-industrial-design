const { SectionHead, Heading, Label, Plate, Stamp, Button, Micrographic, Lockup, CoordBlock, HudPanel, SpecSheet, Meter, KeyValue, PackPanel, UnitId } = window.NeoIndustrialDesignSystem_fae892;
const MG = [["Index bars","--stripe","index","Equal-width verticals. Compression, indexing, early storage retrieval."],["Scan bars","horizontal","scan","Tracking lines, playback, terminal-output rhythm."],["Octagon","clip-path","octagon","Slot / chamfer / octagon — nameplate and hatch geometry, not rounded cards."],["Chamfer plate","12px cut","chamfer","Base plate. Packaging wordmarks and unit plates share one cut angle."],["Scanlines","3+1","scanlines","Restrained density. Not distressing, not glitch art."],["Dashed cut","--dash","cut","Packaging, partitions, unfinished states. Solid = closed system."],["Crosshair","fiducial","cross","Corner marks and aiming. Not a game-HUD skin."],["Density code","barcode-like","barcode","Unit identification. Not a scannable barcode."]];
function HudMap() {
  return <svg viewBox="0 0 520 220" width="100%" height="140" fill="none" aria-hidden="true" style={{ opacity: 0.85 }}><path d="M20 150 L80 120 L140 140 L200 70 L280 90 L340 40 L400 80 L500 60" stroke="currentColor" strokeWidth="1" /><path d="M30 190 L110 160 L190 180 L250 130 L360 150 L480 120" stroke="currentColor" strokeWidth="1" opacity="0.45" /><rect x="196" y="66" width="12" height="12" stroke="var(--ni-safety)" /><line x1="202" y1="40" x2="202" y2="66" stroke="var(--ni-safety)" /></svg>;
}
function MaterialsSection({ date, zulu }) {
  return (
    <>
      <section id="sec-micro" className="sec">
        <div className="wrap">
          <SectionHead id="02 / MICROGRAPHICS" title="Annotation set" description="A parts drawer, not wallpaper. Density budget: Content 60 / System 30 / Micro 10. Hero ≤ 3 families, ordinary block 1–2. Annotation contrast stays below body text." aside={<Stamp size="sm">MG-01 – MG-08</Stamp>} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {MG.map(([name, meta, kind, note], i) => (
              <Plate key={kind} label={`MG-0${i + 1} ${name}`} meta={meta}>
                <div style={{ minHeight: 140, display: "grid", placeItems: "center", background: "var(--surface-primary)", border: "var(--hairline) solid var(--border-default)", marginBottom: 12, overflow: "hidden", padding: kind === "scanlines" ? 0 : 16 }}>
                  <Micrographic kind={kind} width={kind === "octagon" || kind === "cross" ? 84 : kind === "chamfer" ? 120 : kind === "barcode" ? "auto" : "80%"} height={kind === "scanlines" ? "100%" : kind === "octagon" || kind === "cross" ? 84 : kind === "chamfer" ? 64 : 64} />
                </div>
                <Label size="meta" tone="secondary" as="p" style={{ margin: 0, textTransform: "none", letterSpacing: "0.04em" }}>{note}</Label>
              </Plate>
            ))}
          </div>
        </div>
      </section>
      <section id="sec-materials" className="sec">
        <div className="wrap" style={{ display: "grid", gap: 16 }}>
          <SectionHead id="03 / MATERIALS" title="Deployable parts" description="Physical specimens. Mark + wordmark + metadata bars are a locked combination. Each specimen uses one micrographic family." aside={<Label size="meta" tone="secondary">Print / HUD / Carton / Kit</Label>} style={{ marginBottom: 0 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Plate label="Type lockup" meta="MAT-01"><Lockup word="Orbital" sub="Sys-01 · Continuous build" top={["Status: Active", "U.S.A.", "Field lab"]} bottom={["Unit NI-04", "Rev 1.4", date]} /></Plate>
            <Plate label="Status stamps" meta="MAT-02">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}><Stamp>Standby</Stamp><Stamp tone="solid">Active</Stamp><Stamp tone="online">Online</Stamp><Stamp tone="warn">Degraded</Stamp><Stamp tone="alert">Alert</Stamp><Stamp tone="offline">Offline</Stamp></div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8, marginBottom: 12, borderBottom: "var(--hairline) solid var(--border-default)" }}><Label size="meta" tone="muted">Unit identifiers</Label><Label size="meta" tone="muted">MAT-03</Label></div>
              <UnitId size="md" align="left">G-01</UnitId>
              <Label as="p" style={{ margin: "12px 0 0", fontWeight: 400 }}>UNIT ID: NI-04 · SN 04-7721-AX · LOT 26A</Label>
            </Plate>
          </div>
          <Plate label="Coordinate block" meta="MAT-04"><CoordBlock items={[{ key: "Datum", value: "WGS 84" }, { key: "Projection", value: "UTM 18N" }, { key: "Alt", value: "12.4 M" }, { key: "Grid", value: "48 / 24" }]} /></Plate>
          <Plate label="HUD / map overlay" meta="MAT-05 · one family + type">
            <HudPanel title="Survey-OS" topLeft="Survey-OS / Grid 18" topRight={<Stamp>Online</Stamp>} bottomLeft={<>Bearing 041.2<br />Range 1.04 km<br /><span style={{ color: "var(--signal-active)" }}>Link stable</span></>} bottomRight={<>Unit G-01<br />Alt 12.4<br />{zulu}</>}><HudMap /></HudPanel>
          </Plate>
          <Plate label="Spec sheet" meta="MAT-06 · left rail + meters">
            <SpecSheet doc={["Doc NI-04", "Rev 1.4", "Class: Open"]} stamp={<Stamp tone="solid">Active</Stamp>}>
              <Heading level="h3">Assembly record</Heading>
              <p style={{ margin: 0, color: "var(--text-secondary)" }}>Designed for the infrastructure under the stack, not the consumer surface on top of it. A specification, not a poster.</p>
              <Meter label="Load" value={78} /><Meter label="Thermal" value={41} tone="warn" />
              <KeyValue items={[{ key: "Mass", value: "12.4 kg" }, { key: "Voltage", value: "48 VDC" }, { key: "Duty", value: "Continuous" }, { key: "Env", value: "IP65 / −20–55°" }]} />
            </SpecSheet>
          </Plate>
          <Plate label="Packaging panel" meta="MAT-07 · safety field + cut"><PackPanel header="Industrial packaging unit · Status: Active deployment" footerLeft="SN 04-7721-AX · NET 12.4 KG" footerRight="Cut / Fold / Deploy">NI-04</PackPanel></Plate>
          <Plate label="Command buttons" meta="MAT-08">
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}><Button>Engage design ops</Button><Button variant="ghost">Field report</Button><Button variant="ink">System online</Button></div>
            <p style={{ margin: "16px 0 0", color: "var(--text-secondary)", maxWidth: "62ch" }}>Solid signal / ghost outline / ink inverse. No radius, no shadow. Press scales to 0.98 over 80ms with no spring.</p>
          </Plate>
        </div>
      </section>
    </>
  );
}
window.MaterialsSection = MaterialsSection;
