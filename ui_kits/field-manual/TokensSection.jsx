const { SectionHead, Heading, Label, Plate, Stamp, GridField } = window.NeoIndustrialDesignSystem_fae892;
const SWATCHES = [["--ni-black","#0B0B0B","Field page"],["--ni-ink","#101010","panel"],["--ni-charcoal","#161616","raised"],["--ni-steel","#2B2B2B","structure"],["--ni-white","#F6F5F1","Field text"],["--ni-paper","#F3EEE2","paper"],["--ni-cream","#EDE6D2","Fab page"],["--ni-sand","#C9B48A","oxidized sand"],["--ni-fog","#B7B3A8","secondary"],["--ni-mute","#7B776E","notes"],["--ni-safety","#FF4C00","the accent"],["--ni-safety-2","#FF7A18","hot edge"],["--ni-amber","#E39B24","metering"],["--ni-hivis","#F0C14B","high-vis"],["--ni-rust","#B84312","oxidized metal"],["--ni-brown","#2A1A12","Fab text"],["--ni-nvg","#9CFF6A","HUD accent"],["--ni-alert","#FF2E2E","alert"]];
const SEMANTIC = [["--surface-primary","page"],["--surface-elevated","panel"],["--surface-secondary","raised"],["--text-primary","text"],["--text-secondary","secondary"],["--text-muted","notes"],["--border-default","divider"],["--signal-primary","accent / CTA"],["--signal-active","online"],["--signal-warn","degraded"],["--signal-alert","alert"]];
function Swatch({ token, hex, use, onCopy, copied }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={() => onCopy(hex || token, token)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "block", width: "100%", textAlign: "left", padding: 0, overflow: "hidden", cursor: "pointer", color: "var(--text-primary)", background: "var(--surface-elevated)", border: "var(--hairline) solid " + (hover ? "var(--signal-primary)" : "var(--border-strong)"), transition: "border-color var(--motion-base) var(--ease-mechanical)" }}>
      <div style={{ height: 72, background: hex || `var(${token})`, borderBottom: "var(--hairline) solid var(--border-default)" }} />
      <div style={{ padding: "10px 12px 12px", display: "grid", gap: 2 }}>
        <Label size="meta">{copied === token ? "Copied" : token}</Label>
        <Label size="meta" tone="muted" style={{ letterSpacing: "0.08em", textTransform: "none" }}>{hex ? hex + " · " : ""}{use}</Label>
      </div>
    </button>
  );
}
function TokensSection({ copy, copied, gridOn }) {
  const grid6 = { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, marginBottom: 48 };
  return (
    <section id="sec-tokens" className="sec">
      <div className="wrap">
        <SectionHead id="01 / TOKENS" title="System plate" description="Components consume semantic tokens only. Primitives are paint; semantic is the interface. Switching Field / Fabrication changes no component." aside={<Stamp size="sm">Base 4 · Grid 48</Stamp>} />
        <Heading level="h3" style={{ marginBottom: 8 }}>Primitives</Heading>
        <Label size="meta" tone="secondary" as="p" style={{ margin: "0 0 16px" }}>One accent + black / charcoal / paper · click to copy</Label>
        <div style={grid6}>{SWATCHES.map(([t, h, u]) => <Swatch key={t} token={t} hex={h} use={u} onCopy={copy} copied={copied} />)}</div>
        <Heading level="h3" style={{ marginBottom: 8 }}>Semantic</Heading>
        <Label size="meta" tone="secondary" as="p" style={{ margin: "0 0 16px" }}>Portable layer · remapped by Field / Fabrication</Label>
        <div style={grid6}>{SEMANTIC.map(([t, u]) => <Swatch key={t} token={t} use={u} onCopy={copy} copied={copied} />)}</div>
        <Heading level="h3" style={{ marginBottom: 8 }}>Type scale</Heading>
        <p style={{ margin: "0 0 8px", color: "var(--text-secondary)" }}>One family per job. Hierarchy by scale, space and alignment.</p>
        {[["--font-display","Barlow Condensed 800 · 64–128px · lh 0.86",<Heading level="h1" style={{ fontSize: 56 }}>Field manual</Heading>,"Hero words. Uppercase. Production: Saans ExtraBold."],
          ["--font-title","Barlow Condensed 700 · 28–42px",<Heading level="h2">Operational grid</Heading>,"Section titles. No second decorative face."],
          ["--font-body","IBM Plex Sans 400/500 · 14–16px",<p style={{ margin: 0, maxWidth: "62ch", lineHeight: 1.55 }}>Swiss-grid discipline, engineering-document density, hard-tech physicality. Looking good is a side effect.</p>,"Body copy. Line-height 1.5. No slogans."],
          ["--font-mono","IBM Plex Mono 500 · 11–12px · tracking 0.14em",<Label>Status: Active deployment · Unit ID: NI-04 · Datum / WGS 84</Label>,"Status, coordinates, serials, buttons."]
        ].map(([tok, spec, sample, note]) => (
          <div key={tok} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 8, padding: "16px 0", alignItems: "end", borderBottom: "var(--hairline) solid var(--border-default)" }}>
            <div><Label size="meta">{tok}</Label><div style={{ fontSize: 12, marginTop: 4, color: "var(--text-secondary)" }}>{spec}</div></div>
            <div>{sample}<Label size="meta" tone="muted" as="p" style={{ margin: "8px 0 0" }}>{note}</Label></div>
          </div>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 48 }}>
          <Plate label="Spacing" meta="Base 4"><div style={{ display: "flex", alignItems: "end", gap: 8, flexWrap: "wrap" }}>{[4,8,12,16,24,32,48,64,96].map((n) => <div key={n} style={{ display: "grid", gap: 6, justifyItems: "center" }}><i style={{ display: "block", background: "var(--signal-primary)", width: Math.max(4, n / 2), height: n }} /><Label size="micro" tone="muted">{n}</Label></div>)}</div></Plate>
          <Plate label="Stroke / Radius" meta="Hard edge"><Label as="p" size="stamp" style={{ margin: 0, fontWeight: 400, lineHeight: 1.8 }}>Radius default 0 · max 2px<br />Shadow: none · hairline 1px or dashed cut<br />Dash: 4px 3px — carton / unfinished<br />Stripe modulus: 3px bar / 2px gap</Label></Plate>
        </div>
        <Plate label="Visible grid" meta="--grid-major: 48px" style={{ marginTop: 16 }}>
          <GridField color="var(--border-strong)" opacity={gridOn ? 0.85 : 0.2} style={{ height: 180, border: "var(--hairline) solid var(--border-strong)" }}><Label size="meta" tone="secondary" style={{ position: "absolute", right: 12, bottom: 10 }}>48 × 48</Label></GridField>
        </Plate>
      </div>
    </section>
  );
}
window.TokensSection = TokensSection;
