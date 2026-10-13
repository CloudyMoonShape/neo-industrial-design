import * as React from "react";
export interface HeaderMeta { key: React.ReactNode; value: React.ReactNode; }
export interface NavItem { href: string; label: React.ReactNode; }
export interface CommandHeaderProps {
  /** Brand code in display type, e.g. "SPEC/NI-04". Render the system name in type — there is no logo. */
  code?: React.ReactNode;
  /** Mono subtitle beside the code ("Field Manual"). */
  sub?: React.ReactNode;
  /** KEY value pairs: DATE, CLOCK, SECTOR, STATUS. */
  meta?: HeaderMeta[];
  /** Right-aligned controls (SegmentedControl, Button size="sm"). */
  actions?: React.ReactNode;
  /** Optional index rail under the header ("01 Tokens", "02 Micrographics"). */
  nav?: NavItem[];
  activeHref?: string;
  onNavigate?: (item: NavItem) => void;
  sticky?: boolean;
  style?: React.CSSProperties;
}
export declare function CommandHeader(props: CommandHeaderProps): JSX.Element;
