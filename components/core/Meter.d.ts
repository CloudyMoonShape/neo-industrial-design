import * as React from "react";
export interface MeterProps {
  label: React.ReactNode;
  value?: number;
  max?: number;
  /** signal (default) / warn (thermal, degraded) / active (online) / ink. */
  tone?: "signal" | "warn" | "active" | "ink";
  showValue?: boolean;
  style?: React.CSSProperties;
}
export declare function Meter(props: MeterProps): JSX.Element;
