import * as React from "react";
export interface StampProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "style"> {
  /** ghost (default) = neutral label. solid = signal. online = night-vision green. warn = amber outline. alert = red. ink = inverse. offline = dashed, muted. */
  tone?: "ghost" | "solid" | "online" | "warn" | "alert" | "ink" | "offline";
  size?: "md" | "sm";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Stamp(props: StampProps): JSX.Element;
