"use client";

import type { CSSProperties } from "react";
import { Button } from "./Button";
import { MoneyText } from "./MoneyText";

type SuggestionRowProps = {
  from: string;
  to: string;
  amountCents?: number;
  onSettle?: () => void;
  settled?: boolean;
  style?: CSSProperties;
};

export function SuggestionRow({ from, to, amountCents = 0, onSettle, settled = false, style }: SuggestionRowProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "8px 0", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ flex: 1, minWidth: 0, fontSize: "var(--fs-base)", color: "var(--text)" }}>
          {from} paga {to}
        </span>
        <MoneyText cents={amountCents} kind="amount" tone="neutral" />
      </div>
      <Button variant="secondary" onClick={onSettle} disabled={settled}>
        {settled ? "Quitação registrada" : "Registrar quitação"}
      </Button>
    </div>
  );
}
