import * as React from "react";
export interface CornersProps {
  /** Distance from the parent's edges. Default 16. */
  inset?: number | string;
  /** Arm length. Default 18 (--fiducial). */
  size?: number;
  color?: string;
  weight?: number;
  style?: React.CSSProperties;
}
export declare function Corners(props: CornersProps): JSX.Element;
