import * as React from "react";
export interface SegmentOption { value: string; label: React.ReactNode; }
export interface SegmentedControlProps {
  options: Array<string | SegmentOption>;
  /** Single value, or string[] when multiple. */
  value?: string | string[];
  onChange?: (value: any) => void;
  /** Independent toggles (Grid / Signal / Anno) instead of one-of. */
  multiple?: boolean;
  "aria-label"?: string;
  style?: React.CSSProperties;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
