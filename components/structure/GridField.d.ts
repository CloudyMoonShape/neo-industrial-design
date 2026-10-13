import * as React from "react";
export interface GridFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  /** Major cell size. Default var(--grid-major) = 48px. */
  major?: string;
  /** Optional minor cell (e.g. "24px"). */
  minor?: string;
  color?: string;
  minorColor?: string;
  /** 0 hides the grid (keep layout, drop the lines). */
  opacity?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function GridField(props: GridFieldProps): JSX.Element;
