import * as React from "react";
export interface MicrographicProps {
  /** index = vertical bars (3/2 modulus) · scan = horizontal bars · scanlines = 3+1 overlay · octagon · chamfer (signal plate) · cut = dashed cut · cross = crosshair fiducial · barcode = density code. */
  kind?: "index" | "scan" | "scanlines" | "octagon" | "chamfer" | "cut" | "cross" | "barcode";
  color?: string;
  /** Used by chamfer and cross. */
  accent?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}
export declare function Micrographic(props: MicrographicProps): JSX.Element | null;
