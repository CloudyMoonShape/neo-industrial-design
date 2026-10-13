import * as React from "react";
export interface SectionHeadProps {
  /** Numbered section id, e.g. "01 / TOKENS". */
  id: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Stamps, labels or a button. */
  aside?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionHead(props: SectionHeadProps): JSX.Element;
