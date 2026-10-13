import * as React from "react";
export interface PlateProps extends Omit<React.HTMLAttributes<HTMLElement>, "style"> {
  /** Left mono label ("Spec sheet"). */
  label?: React.ReactNode;
  /** Right mono meta ("MAT-06 · left rail + meters"). */
  meta?: React.ReactNode;
  padding?: string | number;
  /** elevated (default) uses --surface-elevated; flat is transparent. */
  tone?: "elevated" | "flat";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Plate(props: PlateProps): JSX.Element;
