import * as React from "react";
export interface LockupProps {
  /** Graphic mark. Defaults to <Mark />. */
  mark?: React.ReactNode;
  /** Wordmark text, rendered uppercase display 800. */
  word: React.ReactNode;
  /** Mono subline beneath the wordmark. */
  sub?: React.ReactNode;
  /** Top metadata bar items (STATUS: ACTIVE · U.S.A. · FIELD LAB). */
  top?: React.ReactNode[];
  /** Bottom metadata bar items (UNIT NI-04 · REV 1.4 · date). */
  bottom?: React.ReactNode[];
  style?: React.CSSProperties;
}
export declare function Lockup(props: LockupProps): JSX.Element;
