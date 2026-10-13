import * as React from "react";
export interface HudPanelProps {
  /** Oversized uppercase title (SURVEY-OS). */
  title?: React.ReactNode;
  topLeft?: React.ReactNode;
  /** Usually a <Stamp>. */
  topRight?: React.ReactNode;
  /** Telemetry lines: bearing, range, link. Use <br/> between lines. */
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
  /** Night-vision green radial glow. Default true. */
  beam?: boolean;
  minHeight?: number;
  /** Map / contour graphic placed under the title. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function HudPanel(props: HudPanelProps): JSX.Element;
