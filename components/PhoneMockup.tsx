import { GroupRow } from "./ds/Rows";
import { Fab, TabBar } from "./ds/Navigation";
import { TotalsCards } from "./ds/TotalsCards";
import { phone } from "@/lib/content";

const BACKGROUNDS = { claro: "#f2f1f6", roxo: "#b275ff", azul: "#0a1e5f", transparente: "transparent" };

type PhoneMockupProps = {
  background?: keyof typeof BACKGROUNDS;
  screenTheme?: "light" | "dark";
};

/** Celular 3D com a tela "Início" do app. Desenhado num quadro fixo de 1200×1200 px — escale pelo container. */
export function PhoneMockup({ background = "transparente", screenTheme = "light" }: PhoneMockupProps) {
  return (
    <div
      role="img"
      aria-label="App DivideAi aberto na tela inicial, com saldos e grupos de viagem"
      style={{
        width: 1200,
        height: 1200,
        background: BACKGROUNDS[background],
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        perspective: 2400,
      }}
    >
      {/* sombra no chão */}
      <div
        style={{
          position: "absolute",
          left: 330,
          top: 1030,
          width: 560,
          height: 70,
          borderRadius: "50%",
          background: "radial-gradient(closest-side,rgba(10,30,95,.32),rgba(10,30,95,0))",
          filter: "blur(14px)",
          transform: "rotate(-6deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 430,
          height: 900,
          margin: "-470px 0 0 -215px",
          transformStyle: "preserve-3d",
          transform: "rotateX(14deg) rotateY(-24deg) rotateZ(-14deg)",
        }}
      >
        {/* espessura da carcaça */}
        <div style={{ position: "absolute", inset: 0, borderRadius: 72, background: "#8536e7", transform: "translateZ(-18px)" }} />
        <div style={{ position: "absolute", inset: 0, borderRadius: 72, background: "#7a2fd6", transform: "translateZ(-12px)" }} />
        <div style={{ position: "absolute", inset: 0, borderRadius: 72, background: "#8f45ee", transform: "translateZ(-6px)" }} />
        {[
          [190, 44],
          [260, 78],
          [352, 78],
        ].map(([top, height]) => (
          <div
            key={top}
            style={{
              position: "absolute",
              left: -7,
              top,
              width: 8,
              height,
              borderRadius: 4,
              background: "#7a2fd6",
              transform: "translateZ(-9px)",
            }}
          />
        ))}

        <div style={{ position: "absolute", inset: 0, borderRadius: 72, background: "#b275ff", padding: 6, boxSizing: "border-box" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: 66, background: "#0b0f1a", padding: 14, boxSizing: "border-box" }}>
            <div
              data-theme={screenTheme}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: 54,
                overflow: "hidden",
                background: "var(--bg)",
                color: "var(--text)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* status bar */}
              <div
                style={{
                  height: 54,
                  flex: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 34px",
                  fontSize: 16,
                  fontWeight: 700,
                  position: "relative",
                }}
              >
                <span>9:41</span>
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 12,
                    width: 118,
                    height: 34,
                    marginLeft: -59,
                    borderRadius: 9999,
                    background: "#000000",
                  }}
                />
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
                    {[5, 7, 9, 11].map((h) => (
                      <span key={h} style={{ width: 3, height: h, background: "currentColor", borderRadius: 1 }} />
                    ))}
                  </div>
                  <div
                    style={{
                      width: 24,
                      height: 11,
                      border: "1.5px solid currentColor",
                      borderRadius: 4,
                      padding: 1.5,
                      boxSizing: "border-box",
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ width: "75%", height: "100%", background: "currentColor", borderRadius: 1.5 }} />
                  </div>
                </div>
              </div>

              {/* conteúdo da tela Início */}
              <div style={{ flex: 1, padding: "12px 16px 0", display: "flex", flexDirection: "column", gap: 16, overflow: "hidden" }}>
                <div style={{ font: "var(--type-greeting)" }}>Olá, Ana</div>
                <TotalsCards receivableCents={phone.receivableCents} owedCents={phone.owedCents} showBalance />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ font: "var(--type-section)" }}>Seus grupos</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--primary-text)" }}>Ver todos</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {phone.groups.map((g) => (
                    <GroupRow key={g.name} {...g} />
                  ))}
                </div>
              </div>

              <div style={{ position: "absolute", right: 16, bottom: 104 }}>
                <Fab label="Nova despesa" />
              </div>
              <div style={{ flex: "none" }}>
                <TabBar active="inicio" badges={phone.badges} />
                <div style={{ height: 28, background: "var(--surface)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ width: 130, height: 5, borderRadius: 9999, background: "var(--text)" }} />
                </div>
              </div>

              {/* reflexo da tela */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: "linear-gradient(125deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,0) 38%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
