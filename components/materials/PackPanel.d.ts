import * as React from "react";
export interface PackPanelProps {
  /** Mono header line: INDUSTRIAL PACKAGING UNIT · STATUS: ACTIVE DEPLOYMENT */
  header?: React.ReactNode;
  footerLeft?: React.ReactNode;
  footerRight?: React.ReactNode;
  /** Oversized display type (or a chamfered-letter SVG). */
  children?: React.ReactNode;
  minHeight?: number;
  style?: React.CSSProperties;
}
export declare function PackPanel(props: PackPanelProps): JSX.Element;
