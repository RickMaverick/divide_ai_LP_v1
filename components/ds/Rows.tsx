import type { CSSProperties } from "react";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import { MoneyText } from "./MoneyText";
import { formatBRL } from "./utils";

const column: CSSProperties = { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 };
const titleText: CSSProperties = {
  fontSize: "var(--fs-base)",
  fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
  color: "var(--text)",
};
const metaText: CSSProperties = { fontSize: "var(--fs-xs)", color: "var(--muted)" };

type BalanceRowProps = {
  name: string;
  paidCents?: number;
  consumedCents?: number;
  balanceCents?: number;
  style?: CSSProperties;
};

export function BalanceRow({ name, paidCents = 0, consumedCents = 0, balanceCents, style }: BalanceRowProps) {
  const bal = balanceCents !== undefined ? balanceCents : paidCents - consumedCents;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 56, padding: "8px 0", ...style }}>
      <Avatar name={name} size={40} />
      <div style={column}>
        <span style={titleText}>{name}</span>
        <span style={{ ...metaText, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          Pagou {formatBRL(paidCents)} · Consumiu {formatBRL(consumedCents)}
        </span>
      </div>
      <MoneyText cents={bal} />
    </div>
  );
}

type ExpenseRowProps = {
  title: string;
  payer?: string;
  date?: string;
  category?: string;
  amountCents?: number;
  hasReceipt?: boolean;
  variant?: "card" | "flat";
  style?: CSSProperties;
};

export function ExpenseRow({
  title,
  payer,
  date,
  category,
  amountCents = 0,
  hasReceipt = false,
  variant = "card",
  style,
}: ExpenseRowProps) {
  const card = variant === "card";
  const meta = [payer, date, category].filter(Boolean).join(" · ");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        minHeight: 56,
        boxSizing: "border-box",
        ...(card
          ? {
              padding: 16,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
            }
          : { padding: "10px 0" }),
        ...style,
      }}
    >
      <div style={column}>
        <span
          style={{
            ...titleText,
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontWeight: (card ? "var(--fw-medium)" : "var(--fw-regular)") as CSSProperties["fontWeight"],
          }}
        >
          {title}
          {hasReceipt ? (
            <Icon name="attach" size={16} color="var(--muted)" style={{ transform: "rotate(45deg)" }} />
          ) : null}
        </span>
        <span style={metaText}>{meta}</span>
      </div>
      <MoneyText cents={amountCents} kind="amount" />
    </div>
  );
}

type GroupRowProps = {
  name: string;
  type?: string;
  memberCount?: number;
  balanceCents?: number;
  style?: CSSProperties;
};

export function GroupRow({ name, type = "Viagem", memberCount = 0, balanceCents = 0, style }: GroupRowProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 16,
        minHeight: 44,
        boxSizing: "border-box",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        ...style,
      }}
    >
      <div style={column}>
        <span style={titleText}>{name}</span>
        <span style={metaText}>
          {type} · {memberCount} {memberCount === 1 ? "membro" : "membros"}
        </span>
      </div>
      <MoneyText cents={balanceCents} />
    </div>
  );
}
