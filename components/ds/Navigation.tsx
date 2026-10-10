import type { CSSProperties } from "react";
import { Icon, type IconName } from "./Icon";

// Versões estáticas (só visuais) do Fab e da TabBar, usadas no mockup do celular.

export function Fab({ label = "Nova despesa", icon = "add" }: { label?: string; icon?: IconName }) {
  return (
    <div
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: 48,
        minWidth: 48,
        padding: "0 20px 0 16px",
        borderRadius: "var(--radius-full)",
        background: "var(--fill-primary)",
        color: "var(--on-fill)",
        boxShadow: "var(--shadow-lg)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-base)",
        fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
      }}
    >
      <Icon name={icon} size={20} />
      <span style={{ whiteSpace: "nowrap" }}>{label}</span>
    </div>
  );
}

const TABS: { key: string; label: string; icon: IconName }[] = [
  { key: "inicio", label: "Início", icon: "home-outline" },
  { key: "grupos", label: "Grupos", icon: "people-outline" },
  { key: "amigos", label: "Amigos", icon: "person-add-outline" },
  { key: "avisos", label: "Avisos", icon: "notifications-outline" },
  { key: "perfil", label: "Perfil", icon: "person-outline" },
];

export function TabBar({ active = "inicio", badges = {} }: { active?: string; badges?: Record<string, number> }) {
  return (
    <div
      aria-hidden
      style={{ display: "flex", background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "8px 0 12px" }}
    >
      {TABS.map((t) => {
        const b = badges[t.key];
        return (
          <div
            key={t.key}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              minHeight: "var(--min-touch)",
              color: t.key === active ? "var(--primary-text)" : "var(--muted)",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
            }}
          >
            <span style={{ position: "relative" }}>
              <Icon name={t.icon} size={24} />
              {b ? (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -9,
                    minWidth: 18,
                    height: 18,
                    padding: "0 4px",
                    boxSizing: "border-box",
                    borderRadius: 9,
                    background: "var(--badge-bg)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {b}
                </span>
              ) : null}
            </span>
            {t.label}
          </div>
        );
      })}
    </div>
  );
}
