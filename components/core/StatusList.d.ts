import * as React from "react";
export interface StatusRow { id: string; name?: React.ReactNode; state: "online" | "active" | "standby" | "degraded" | "warning" | "alert" | "offline"; status?: React.ReactNode; }
export interface StatusListProps {
  rows: StatusRow[];
  onSelect?: (row: StatusRow) => void;
  style?: React.CSSProperties;
}
export declare function StatusList(props: StatusListProps): JSX.Element;
