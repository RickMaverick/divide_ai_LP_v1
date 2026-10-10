"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

const VARIANTS = {
  primary: { background: "var(--fill-primary)", color: "var(--on-fill)" },
  secondary: { background: "var(--surface)", color: "var(--text)" },
  destructive: { background: "var(--fill-destructive)", color: "var(--on-fill)" },
  ghost: { background: "transparent", color: "var(--primary-text)" },
} satisfies Record<string, CSSProperties>;

type ButtonProps = {
  variant?: keyof typeof VARIANTS;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: IconName;
  fullWidth?: boolean;
  /** Quando informado, renderiza um link (<a>) com o visual de botão. */
  href?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
};

export function Button({
  variant = "primary",
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = true,
  href,
  style,
  type = "button",
}: ButtonProps) {
  const inactive = disabled || loading;
  const css: CSSProperties = {
    ...VARIANTS[variant],
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: "var(--min-touch)",
    padding: "12px 16px",
    border: "none",
    borderRadius: "var(--radius-md)",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-base)",
    fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
    lineHeight: 1.25,
    textDecoration: "none",
    cursor: inactive ? "default" : "pointer",
    opacity: inactive ? "var(--disabled-opacity)" : 1,
    transition: "opacity .15s",
    ...style,
  };
  const press = (o: string) => (e: MouseEvent<HTMLElement>) => {
    if (!inactive) e.currentTarget.style.opacity = o;
  };
  const handlers = { onMouseDown: press("0.85"), onMouseUp: press("1"), onMouseLeave: press("1") };
  const content = loading ? (
    <span
      aria-label="Carregando"
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: "2px solid currentColor",
        borderRightColor: "transparent",
        animation: "dvae-spin .8s linear infinite",
        boxSizing: "border-box",
      }}
    />
  ) : (
    <>
      {icon ? <Icon name={icon} size={20} /> : null}
      {children}
    </>
  );

  if (href && !inactive) {
    return (
      <a href={href} style={css} {...handlers}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} disabled={inactive} onClick={inactive ? undefined : onClick} style={css} {...handlers}>
      {content}
    </button>
  );
}
