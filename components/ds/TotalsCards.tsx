import type { CSSProperties, ReactNode } from "react";
import { Card } from "./Card";
import { MoneyText } from "./MoneyText";

function Cell({ label, children, style }: { label: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <Card style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0, ...style }}>
      <span style={{ fontSize: "var(--fs-sm)", color: "var(--muted)" }}>{label}</span>
      {children}
    </Card>
  );
}

type TotalsCardsProps = {
  receivableCents?: number;
  owedCents?: number;
  showBalance?: boolean;
  style?: CSSProperties;
};

export function TotalsCards({ receivableCents = 0, owedCents = 0, showBalance = true, style }: TotalsCardsProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, ...style }}>
      <div style={{ display: "flex", gap: 12 }}>
        <Cell label="A receber">
          <MoneyText cents={receivableCents} kind="amount" tone="positive" size="xl" />
        </Cell>
        <Cell label="A dever">
          <MoneyText cents={owedCents} kind="amount" tone="negative" size="xl" />
        </Cell>
      </div>
      {showBalance ? (
        <Cell label="Balanço" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <MoneyText cents={receivableCents - owedCents} size="2xl" />
        </Cell>
      ) : null}
    </div>
  );
}
