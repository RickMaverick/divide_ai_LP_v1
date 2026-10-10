import type { CSSProperties } from "react";
import { ICONS, type IconName } from "./icons";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  style?: CSSProperties;
};

export function Icon({ name, size = 24, color = "currentColor", style }: IconProps) {
  const body = ICONS[name];
  if (!body) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
      aria-hidden
      style={{ color, flexShrink: 0, display: "block", ...style }}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}

export type { IconName };
