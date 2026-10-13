import * as React from "react";
export interface LabelProps extends Omit<React.HTMLAttributes<HTMLElement>, "style"> {
  /** stamp 11px (default) · meta 10px · micro 9px. */
  size?: "stamp" | "meta" | "micro";
  tone?: "primary" | "secondary" | "muted" | "signal" | "active";
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Label(props: LabelProps): JSX.Element;
