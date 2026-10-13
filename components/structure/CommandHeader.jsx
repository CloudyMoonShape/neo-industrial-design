import React from "react";
/** Sticky command header: brand code + mono meta report + actions, with an optional index nav rail beneath. */
export function CommandHeader({ code = "SPEC/NI-04", sub, meta = [], actions, nav = [], activeHref, onNavigate, sticky = true, style }) {
  return (
    <header style={{ position: sticky ? "sticky" : "relative", top: 0, zIndex: 40, background: "color-mix(in srgb, var(--surface-primary) 92%, transparent)", borderBottom: "var(--hairline) solid var(--border-strong)", ...style }}>
      <div style={{ width: "min(var(--content-max), calc(100% - 48px))", marginInline: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "8px 16px", padding: "10px 0 8px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "0.04em", lineHeight: 1, textTransform: "uppercase" }}>{code}</span>
            {sub && <span style={{ fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-meta)", color: "var(--text-secondary)" }}>{sub}</span>}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-meta)", color: "var(--text-secondary)" }}>
            {meta.map((m, i) => <span key={i}>{m.key} <b style={{ color: "var(--text-primary)", fontWeight: 500 }}>{m.value}</b></span>)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end" }}>{actions}</div>
        </div>
        {nav.length > 0 && (
          <nav aria-label="Index" style={{ display: "flex", overflowX: "auto", borderTop: "var(--hairline) solid var(--border-default)", scrollbarWidth: "none" }}>
            {nav.map((n) => <NavLink key={n.href} item={n} active={activeHref === n.href} onNavigate={onNavigate} />)}
          </nav>
        )}
      </div>
    </header>
  );
}
function NavLink({ item, active, onNavigate }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={item.href} onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(item); } : undefined} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, fontSize: "var(--text-meta)", textDecoration: "none", color: active || hover ? "var(--signal-primary)" : "var(--text-secondary)", padding: "10px 14px", whiteSpace: "nowrap", borderRight: "var(--hairline) solid var(--border-default)", transition: "color var(--motion-base) var(--ease-mechanical)" }}>{item.label}</a>
  );
}
