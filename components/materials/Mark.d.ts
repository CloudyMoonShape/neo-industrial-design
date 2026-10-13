import * as React from "react";
export interface MarkProps {
  /** Two-character code inside the plate. Default "04". */
  code?: string;
  size?: number;
  color?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}
export declare function Mark(props: MarkProps): JSX.Element;
