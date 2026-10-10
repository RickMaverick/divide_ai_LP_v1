import type { CSSProperties } from "react";
import { colorForName, initials } from "./utils";

type AvatarProps = {
  name: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
};

export function Avatar({ name, size = 40, color, style }: AvatarProps) {
  return (
    <div
      aria-label={name}
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        background: color || colorForName(name),
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
        fontSize: Math.round(size * 0.4),
        ...style,
      }}
    >
      {initials(name)}
    </div>
  );
}
