import React from "react";
/** Fiducial corner brackets. Absolutely positioned inside a relative parent. */
export function Corners({ inset = 16, size = 18, color = "var(--text-primary)", weight = 1, style }) {
  const arm = (pos) => <i style={{ position: "absolute", width: size, height: size, borderColor: color, borderStyle: "solid", borderWidth: 0, ...pos }} />;
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset, pointerEvents: "none", zIndex: 2, ...style }}>
      {arm({ top: 0, left: 0, borderTopWidth: weight, borderLeftWidth: weight })}
      {arm({ top: 0, right: 0, borderTopWidth: weight, borderRightWidth: weight })}
      {arm({ bottom: 0, left: 0, borderBottomWidth: weight, borderLeftWidth: weight })}
      {arm({ bottom: 0, right: 0, borderBottomWidth: weight, borderRightWidth: weight })}
    </div>
  );
}
