"use client";

import { useState } from "react";
import { SuggestionRow } from "./ds/SuggestionRow";
import { suggestion } from "@/lib/content";

/** Sugestão de acerto interativa: o botão "Registrar quitação" marca como quitado. */
export function SettleDemo() {
  const [settled, setSettled] = useState(false);
  return <SuggestionRow {...suggestion} settled={settled} onSettle={() => setSettled(true)} />;
}
