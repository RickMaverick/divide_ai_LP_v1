import type { CSSProperties, ReactNode } from "react";

const TONE = {
  success: ["var(--success-text)", "var(--tint-success-bg)", "var(--tint-success-border)"],
  error: ["var(--error-text)", "var(--tint-error-bg)", "var(--tint-error-border)"],
  warning: ["var(--warning-text)", "var(--tint-warning-bg)", "var(--tint-warning-border)"],
  info: ["var(--info-text)", "var(--tint-info-bg)", "var(--tint-info-border)"],
} as const;

type BadgeProps = {
  tone?: keyof typeof TONE;
  children?: ReactNode;
  style?: CSSProperties;
};

export function Badge({ tone = "success", children, style }: BadgeProps) {
  const [c, bg, bd] = TONE[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 16px",
        borderRadius: "var(--radius-full)",
        border: "1px solid " + bd,
        background: bg,
        color: c,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-sm)",
        fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
