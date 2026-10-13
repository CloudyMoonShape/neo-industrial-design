import React from "react";
const TONES = {
  solid: { background: "var(--signal-primary)", color: "var(--signal-primary-fg)", borderColor: "var(--signal-primary)" },
  ghost: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border-strong)" },
  ink: { background: "var(--text-primary)", color: "var(--surface-primary)", borderColor: "var(--text-primary)" },
  warn: { background: "transparent", color: "var(--signal-warn)", borderColor: "var(--signal-warn)" },
  offline: { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-default)", borderStyle: "dashed" },
};
/** Command button. Mono uppercase label, hard edge, 44px hit target. Hover: brightness / border lifts. Press: scale 0.98 over 80ms. */
export function Button({ variant = "solid", size = "md", selected = false, disabled = false, block = false, leading, trailing, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const tone = TONES[variant] || TONES.solid;
  const base = {
    display: block ? "flex" : "inline-flex", width: block ? "100%" : undefined, alignItems: "center", justifyContent: "center", gap: 8,
    minHeight: size === "sm" ? "var(--control-height-sm)" : "var(--control-height)", padding: size === "sm" ? "0 12px" : "0 var(--control-pad-x)",
    fontFamily:"var(--font-mono)",fontWeight:500,letterSpacing:"var(--track-stamp)",textTransform:"uppercase",fontVariantNumeric:"tabular-nums", fontSize: "var(--text-stamp)", lineHeight: 1,
    border: "var(--hairline) solid", borderRadius: "var(--radius)", textDecoration: "none", cursor: disabled ? "not-allowed" : "pointer", whiteSpace: "nowrap",
    transition: "filter var(--motion-base) var(--ease-mechanical), transform var(--motion-fast) var(--ease-mechanical), border-color var(--motion-base) var(--ease-mechanical)",
    ...tone,
  };
  if (selected) base.boxShadow = "inset 0 0 0 1px var(--text-primary)";
  if (hover && !disabled) { if (variant === "solid") base.filter = "brightness(1.08)"; else if (variant === "ghost") base.borderColor = "var(--text-primary)"; else if (variant === "offline") base.color = "var(--text-secondary)"; }
  if (down && !disabled) base.transform = "scale(var(--press-scale))";
  if (disabled) base.opacity = "var(--disabled-opacity)";
  return (
    <button type="button" disabled={disabled} style={{ ...base, ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }} onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)} {...rest}>
      {leading}{children}{trailing}
    </button>
  );
}
