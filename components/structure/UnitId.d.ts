import * as React from "react";
export interface UnitIdProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children?: React.ReactNode;
  /** lg 48–96px (hero corner) · md 42 · sm 28. */
  size?: "lg" | "md" | "sm";
  align?: "left" | "right" | "center";
  style?: React.CSSProperties;
}
export declare function UnitId(props: UnitIdProps): JSX.Element;
