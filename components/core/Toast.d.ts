import * as React from "react";
export interface ToastProps {
  open?: boolean;
  tone?: "signal" | "ink" | "alert";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element | null;
