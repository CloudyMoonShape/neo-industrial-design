import React from "react";
/** Visible-grid backdrop. Wrap a hero, HUD or plate; children render above the grid. */
export function GridField({ major = "var(--grid-major)", minor, color = "var(--grid-line)", minorColor = "var(--border-default)", opacity = 1, children, style, ...rest }) {
  const layers = [`linear-gradient(to right, ${color} 1px, transparent 1px)`, `linear-gradient(to bottom, ${color} 1px, transparent 1px)`];
  const sizes = [`${major} ${major}`, `${major} ${major}`];
  if (minor) { layers.push(`linear-gradient(to right, ${minorColor} 1px, transparent 1px)`, `linear-gradient(to bottom, ${minorColor} 1px, transparent 1px)`); sizes.push(`${minor} ${minor}`, `${minor} ${minor}`); }
  return (
    <div style={{ position: "relative", isolation: "isolate", ...style }} {...rest}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: layers.join(","), backgroundSize: sizes.join(","), opacity, transition: "opacity var(--motion-fast) var(--ease-mechanical)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
