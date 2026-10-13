const { SectionHead, Heading, Label, Button, StatusList, Stamp, Plate } = window.NeoIndustrialDesignSystem_fae892;
const VOICE_OK = ["STATUS: ACTIVE DEPLOYMENT", "DATUM / WGS 84", "UNIT ID: NI-04", "TARGET LOCKED", "FIELD OPERATION: ACTIVE", "ENGAGE DESIGN OPS", "REF: [ ORBITAL-SYS-01 ]", "CONTINUOUS", "BUILT FOR FIELD USE", "FUNCTION OVER DECORATION"];
const VOICE_NO = ["reimagine", "seamless", "next-gen synergy", "unlock the future", "delightful", "bold new era"];
function List({ items, kill }) {
  return <ul style={{ margin: 0, padding: 0, listStyle: "none", border: "var(--hairline) solid var(--border-strong)" }}>{items.map((v, i) => <li key={v} style={{ padding: "12px 16px", borderBottom: i < items.length - 1 ? "var(--hairline) solid var(--border-default)" : 0, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: kill ? "line-through" : "none", color: kill ? "var(--text-muted)" : "var(--text-primary)" }}>{v}</li>)}</ul>;
}
function StatesSection() {
  const [locked, setLocked] = React.useState(false);
  const [wipe, setWipe] = React.useState(false);
  const toggle = () => { setLocked((v) => !v); setWipe(true); setTimeout(() => setWipe(false), 240); };
  return (
    <>
      <section id="sec-states" className="sec">
        <div className="wrap">
          <SectionHead id="04 / STATES + MOTION" title="Operational UI" description="The language has to run an interface, not just a brand still. Motion only expresses state change: snap / wipe / lock. No bounce, no spring." aside={<Stamp size="sm">80 / 140 / 220 ms</Stamp>} />
          <Heading level="h3" style={{ marginBottom: 12 }}>Command button</Heading>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}><Button>Default</Button><Button variant="ghost">Ghost</Button><Button selected>Selected</Button><Button disabled>Disabled</Button><Button variant="warn">Warning</Button><Button variant="offline">Offline</Button></div>
          <Heading level="h3" style={{ marginBottom: 12 }}>System row</Heading>
          <StatusList style={{ marginBottom: 32 }} rows={[{ id: "G-01", name: "Survey unit", state: "online" }, { id: "G-02", name: "Pack line", state: "active" }, { id: "G-03", name: "Reserve", state: "standby" }, { id: "G-04", name: "Thermal", state: "degraded" }, { id: "G-05", name: "Remote", state: "offline" }]} />
          <Heading level="h3" style={{ marginBottom: 12 }}>Motion</Heading>
          <Label size="meta" tone="secondary" as="p" style={{ margin: "0 0 16px" }}>--motion-fast 80ms · --motion-base 140ms · --motion-slow 220ms · --ease-mechanical</Label>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <Button variant={locked ? "solid" : "ghost"} selected={locked} onClick={toggle} style={{ position: "relative", overflow: "hidden" }}>
              <i aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--text-primary)", transformOrigin: "left", transform: wipe ? "scaleX(1)" : "scaleX(0)", opacity: wipe ? 0.35 : 0, transition: wipe ? "transform var(--motion-slow) var(--ease-mechanical), opacity var(--motion-slow) var(--ease-mechanical)" : "none", pointerEvents: "none" }} />
              {locked ? "Status: Active" : "Status: Standby"}
            </Button>
            <Label size="meta" tone="secondary">Wipe + lock · no spring</Label>
          </div>
        </div>
      </section>
      <section id="sec-voice" className="sec">
        <div className="wrap">
          <SectionHead id="05 / VOICE + RULES" title="Operating language" description="Copy is material. Write in the register of a running document, not a startup pitch." aside={<Stamp size="sm">Use / Kill</Stamp>} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div><Heading level="h3" style={{ marginBottom: 12 }}>Use</Heading><List items={VOICE_OK} /></div>
            <div><Heading level="h3" style={{ marginBottom: 12 }}>Kill</Heading><List items={VOICE_NO} kill /></div>
          </div>
          <Plate tone="flat" style={{ marginTop: 32, padding: 20 }}><Heading level="h3" style={{ fontSize: 24, letterSpacing: "0.02em", lineHeight: 1.15 }}>If it cannot print on a spec plate, a carton side, or a work jacket, it is not done.</Heading></Plate>
        </div>
      </section>
      <footer style={{ padding: "48px 0 64px", borderTop: "var(--hairline) solid var(--border-strong)" }}>
        <div className="wrap">
          <Heading level="h1" style={{ fontSize: "clamp(28px, 6vw, 56px)", letterSpacing: "0.02em", lineHeight: 0.9 }}>Function over decoration</Heading>
          <Label as="p" size="stamp" style={{ margin: "16px 0 0", fontWeight: 400 }}>SPEC/NI-04 · Built for field use · Approach: restrained / operational / grounded</Label>
        </div>
      </footer>
    </>
  );
}
window.StatesSection = StatesSection;
