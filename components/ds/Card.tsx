import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  elevation?: "none" | "sm" | "md";
  padding?: number;
  style?: CSSProperties;
};

const SHADOW = { none: "none", sm: "var(--shadow-sm)", md: "var(--shadow-md)" };

export function Card({ children, elevation = "sm", padding = 16, style }: CardProps) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding,
        boxShadow: SHADOW[elevation],
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
