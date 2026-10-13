import React from "react";
const DOT = {
  online: { background: "var(--signal-active)" }, active: { background: "var(--signal-active)" }, standby: { background: "var(--text-secondary)" },
  degraded: { background: "var(--signal-warn)" }, warning: { background: "var(--signal-warn)" }, alert: { background: "var(--signal-alert)" },
  offline: { background: "transparent", boxShadow: "inset 0 0 0 1px var(--text-muted)" },
};
/** System rows: 8px square state dot · id · name · status. Offline rows are muted. */
export function StatusList({ rows = [], onSelect, style }) {
  return (
    <div style={{ border: "var(--hairline) solid var(--border-strong)", ...style }}>
      {rows.map((r, i) => {
        const off = r.state === "offline";
        return (
          <div key={r.id || i} data-state={r.state} onClick={onSelect ? () => onSelect(r) : undefined}
            style={{ display: "grid", gridTemplateColumns: "14px 1fr auto auto", gap: 12, alignItems: "center", padding: "12px 14px", minHeight: 44, cursor: onSelect ? "pointer" : "default",
              borderBottom: i < rows.length - 1 ? "var(--hairline) solid var(--border-default)" : 0, fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontWeight: 400, letterSpacing: "0.1em", fontSize: "var(--text-stamp)", color: off ? "var(--text-muted)" : "var(--text-primary)" }}>
            <i style={{ width: 8, height: 8, display: "block", ...(DOT[r.state] || { background: "var(--text-muted)" }) }} />
            <span>{r.id}</span>
            <span style={{ color: off ? "var(--text-muted)" : "var(--text-secondary)" }}>{r.name}</span>
            <span>{r.status ?? ("Status: " + (r.state || ""))}</span>
          </div>
        );
      })}
    </div>
  );
}
