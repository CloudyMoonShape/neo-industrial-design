import React from "react";
/** Inline group of mono toggles in one hairline frame. Pressed segment fills with signal. */
export function SegmentedControl({ options = [], value, onChange, multiple = false, "aria-label": ariaLabel, style }) {
  const isOn = (v) => (multiple ? Array.isArray(value) && value.includes(v) : value === v);
  const toggle = (v) => { if (!onChange) return; if (!multiple) return onChange(v); const cur = Array.isArray(value) ? value : []; onChange(cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]); };
  return (
    <div role="group" aria-label={ariaLabel} style={{ display: "inline-flex", border: "var(--hairline) solid var(--border-strong)", ...style }}>
      {options.map((o) => {
        const opt = typeof o === "string" ? { value: o, label: o } : o; const on = isOn(opt.value);
        return (
          <button key={opt.value} type="button" aria-pressed={on} onClick={() => toggle(opt.value)}
            style={{ background: on ? "var(--signal-primary)" : "transparent", color: on ? "var(--signal-primary-fg)" : "var(--text-secondary)", border: 0, cursor: "pointer",
              fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontSize: "var(--text-meta)", padding: "8px 10px", minHeight: "var(--control-height-sm)",
              transition: "background var(--motion-base) var(--ease-mechanical), color var(--motion-base) var(--ease-mechanical)" }}>{opt.label}</button>
        );
      })}
    </div>
  );
}
