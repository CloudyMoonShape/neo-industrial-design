import * as React from "react";
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  /** solid = signal CTA (one per view). ghost = secondary. ink = inverse. warn = degraded action. offline = unavailable (dashed). */
  variant?: "solid" | "ghost" | "ink" | "warn" | "offline";
  /** md = 44px hit target (default). sm = 36px, header / toolbar only. */
  size?: "md" | "sm";
  /** Inset 1px ring marks the active choice in a set. */
  selected?: boolean;
  disabled?: boolean;
  /** Full-width. */
  block?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
