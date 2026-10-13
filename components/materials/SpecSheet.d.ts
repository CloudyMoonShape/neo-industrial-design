import * as React from "react";
export interface SpecSheetProps {
  /** Rail mark. Defaults to <Mark size={56}/>; pass null to omit. */
  mark?: React.ReactNode | null;
  /** Rail document lines: DOC NI-04 / REV 1.4 / CLASS: OPEN. */
  doc?: React.ReactNode[];
  /** Rail stamp, e.g. <Stamp tone="solid">Active</Stamp>. */
  stamp?: React.ReactNode;
  railWidth?: number;
  /** Body: Heading, paragraph, Meter, KeyValue. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SpecSheet(props: SpecSheetProps): JSX.Element;
