const fmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/** Formata centavos em BRL ("R$ 1.284,50"); `signed` adiciona +/- para saldos. */
export function formatBRL(cents: number, signed = false): string {
  const abs = fmt.format(Math.abs(cents || 0) / 100).replace(/ /g, " ");
  if (!signed || !cents) return abs;
  return (cents > 0 ? "+" : "-") + abs;
}

const PALETTE = [
  "var(--avatar-0)",
  "var(--avatar-1)",
  "var(--avatar-2)",
  "var(--avatar-3)",
  "var(--avatar-4)",
  "var(--avatar-5)",
];

/** Cor do avatar: soma dos códigos dos caracteres, módulo 6. */
export function colorForName(name = ""): string {
  let s = 0;
  for (let i = 0; i < name.length; i++) s += name.charCodeAt(i);
  return PALETTE[s % 6];
}

export function initials(name = ""): string {
  const p = name.trim().split(/\s+/);
  return ((p[0] || "")[0] || "").concat(p.length > 1 ? p[p.length - 1][0] : "").toUpperCase();
}
