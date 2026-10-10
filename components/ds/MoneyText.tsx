import type { CSSProperties } from "react";
import { formatBRL } from "./utils";

const TONES = {
  positive: "var(--success-text)",
  negative: "var(--error-text)",
  neutral: "var(--muted)",
  none: "inherit",
};

const SIZES = {
  xs: "var(--fs-xs)",
  sm: "var(--fs-sm)",
  base: "var(--fs-base)",
  lg: "var(--fs-lg)",
  xl: "var(--fs-xl)",
  "2xl": "var(--fs-2xl)",
};

type MoneyTextProps = {
  cents?: number;
  /** "balance" leva sinal e cor; "amount" (despesa) sai neutro. */
  kind?: "balance" | "amount";
  tone?: keyof typeof TONES;
  size?: keyof typeof SIZES;
  style?: CSSProperties;
};

export function MoneyText({ cents = 0, kind = "balance", tone, size = "base", style }: MoneyTextProps) {
  const isBalance = kind === "balance";
  const t = tone || (isBalance ? (cents > 0 ? "positive" : cents < 0 ? "negative" : "neutral") : "none");
  return (
    <span
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
        fontSize: SIZES[size],
        color: TONES[t],
        whiteSpace: "nowrap",
        fontVariantNumeric: "tabular-nums",
        ...style,
      }}
    >
      {formatBRL(cents, isBalance)}
    </span>
  );
}
