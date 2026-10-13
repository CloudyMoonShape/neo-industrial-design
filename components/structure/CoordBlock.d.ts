import * as React from "react";
export interface CoordItem { key: React.ReactNode; value: React.ReactNode; }
export interface CoordBlockProps {
  /** DATUM / WGS 84 · PROJECTION / UTM 18N · ALT / 12.4 M · GRID / 48 / 24 */
  items: CoordItem[];
  /** row = four columns (materials plate). column = stacked lines (hero foot). */
  direction?: "row" | "column";
  align?: "left" | "right";
  style?: React.CSSProperties;
}
export declare function CoordBlock(props: CoordBlockProps): JSX.Element;
