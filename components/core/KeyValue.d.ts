import * as React from "react";
export interface KeyValueItem { key: React.ReactNode; value: React.ReactNode; tone?: "default" | "signal"; }
export interface KeyValueProps {
  items: KeyValueItem[];
  /** Grid columns. Default 2. */
  columns?: number;
  style?: React.CSSProperties;
}
export declare function KeyValue(props: KeyValueProps): JSX.Element;
