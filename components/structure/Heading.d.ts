import * as React from "react";
export interface HeadingProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "style"> {
  /** hero 64–128px · h1 56–96 · h2 28–42 · h3 22 · h4 18. */
  level?: "hero" | "h1" | "h2" | "h3" | "h4";
  /** Override the rendered tag. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Heading(props: HeadingProps): JSX.Element;
