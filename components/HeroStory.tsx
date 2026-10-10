"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Icon, type IconName } from "./ds/Icon";

type Box = { l: number; t: number; r: number; b: number };

const ITEMS: { x: number; y: number; icon: IconName; title: string; total: string; part: string; payer: string }[] = [
  { x: 0.08, y: 0.1, icon: "airplane-outline", title: "Passagens", total: "R$ 1.260,00", part: "R$ 420,00", payer: "Ana" },
  { x: 0.92, y: 0.08, icon: "home-outline", title: "Hospedagem", total: "R$ 960,00", part: "R$ 320,00", payer: "Bruno" },
  { x: 0.06, y: 0.62, icon: "receipt-outline", title: "Mercado", total: "R$ 487,50", part: "R$ 162,50", payer: "Marina" },
  { x: 0.94, y: 0.58, icon: "wallet-outline", title: "Passeio de barco", total: "R$ 600,00", part: "R$ 200,00", payer: "Ana" },
];
const PEOPLE = [
  { i: "A", c: "#b275ff" },
  { i: "B", c: "#2dd4bf" },
  { i: "M", c: "#7dd3fc" },
];
const FAN = [
  [-96, 58],
  [0, 78],
  [96, 58],
];
const DOTS = [
  [58, 14, 4, 0],
  [72, 30, 3, 1.6],
  [88, 18, 5, 3.2],
  [94, 46, 3, 0.8],
  [64, 52, 3, 2.4],
  [80, 62, 4, 4.1],
  [46, 8, 3, 5.0],
  [36, 64, 3, 1.1],
  [97, 8, 3, 2.9],
];
const LOOP = 16; // segundos
const STILL_T = 4.8; // quadro exibido sem animação (cards de despesa visíveis)
const M = 166;

const cl = (v: number) => Math.max(0, Math.min(1, v));
const ss = (v: number) => {
  v = cl(v);
  return v * v * (3 - 2 * v);
};
const win = (u: number, a: number, b: number, c: number, d: number) => ss((u - a) / (b - a)) * (1 - ss((u - c) / (d - c)));

const glass: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#ffffff",
  fontFamily: "var(--font-sans)",
  whiteSpace: "nowrap",
};

/**
 * Fundo animado do hero: despesas surgem, viram cards, se dividem entre 3 pessoas
 * e convergem para "Quitação registrada." Mede o texto e o mockup do hero
 * (data-hero-text / data-hero-visual) para não sobrepor o conteúdo.
 */
export function HeroStory({ animate = true }: { animate?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number; text: Box | null; vis: Box | null }>({
    w: 1200,
    h: 680,
    text: null,
    vis: null,
  });
  const [frame, setFrame] = useState(STILL_T);

  useEffect(() => {
    const el = ref.current;
    const sec = el?.parentElement;
    if (!el || !sec) return;
    const rel = (n: Element | null, b: DOMRect): Box | null => {
      if (!n) return null;
      const r = n.getBoundingClientRect();
      return { l: r.left - b.left, t: r.top - b.top, r: r.right - b.left, b: r.bottom - b.top };
    };
    const measure = () => {
      const b = el.getBoundingClientRect();
      setSize({
        w: b.width,
        h: b.height,
        text: rel(sec.querySelector("[data-hero-text]"), b),
        vis: rel(sec.querySelector("[data-hero-visual]"), b),
      });
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const t1 = setTimeout(measure, 600);
    return () => {
      ro.disconnect();
      clearTimeout(t1);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!animate || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setFrame(((now - start) / 1000) % LOOP);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const t = animate ? frame : STILL_T;
  const W = size.w;
  const H = size.h;
  const vis = size.vis || { l: W * 0.5, t: H * 0.1, r: W * 0.95, b: H * 0.9 };
  const txt = size.text || { l: 0, t: 0, r: W * 0.45, b: H };
  const vw = vis.r - vis.l;
  const vh = vis.b - vis.t;
  const place = (fx: number, fy: number) => {
    let x = vis.l + vw * fx;
    const y = vis.t + vh * fy;
    const overlapY = y + 110 > txt.t && y - 60 < txt.b;
    if (overlapY && x - M < txt.r + 16 && x + M > txt.l) x = txt.r + 16 + M;
    x = Math.max(M, Math.min(W - M, x));
    return [x, y];
  };
  const pill = { x: Math.max(M, Math.min(W - M, vis.l + vw / 2)), y: Math.min(H - 30, vis.b + 4) };

  const nodes: ReactNode[] = [];
  ITEMS.forEach((it, k) => {
    const u = t - k * 0.35;
    const [cx, cy] = place(it.x, it.y);

    const io = win(u, 0, 0.6, 3.0, 3.6);
    if (io > 0.001)
      nodes.push(
        <div
          key={"i" + k}
          style={{
            ...glass,
            width: 64,
            height: 64,
            borderRadius: 9999,
            background: "rgba(125,211,252,0.10)",
            border: "1px solid rgba(125,211,252,0.40)",
            color: "#7dd3fc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: io,
            transform: `translate(${cx - 32}px,${cy - 32}px) scale(${0.6 + 0.4 * io})`,
          }}
        >
          <Icon name={it.icon} size={30} />
        </div>,
      );

    const co = win(u, 3.0, 3.6, 6.4, 7.0);
    if (co > 0.001)
      nodes.push(
        <div
          key={"c" + k}
          style={{
            ...glass,
            width: 240,
            boxSizing: "border-box",
            padding: "12px 14px",
            borderRadius: 12,
            display: "flex",
            gap: 12,
            alignItems: "center",
            opacity: co,
            transform: `translate(${cx - 120}px,${cy - 30}px) scale(${0.9 + 0.1 * co})`,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              flex: "none",
              borderRadius: 9999,
              background: "rgba(178,117,255,0.22)",
              color: "#d9bfff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name={it.icon} size={20} />
          </div>
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{it.title}</span>
            <span style={{ fontSize: 12, color: "#c3cae6" }}>{it.payer} pagou · 3 pessoas</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 500 }}>{it.total}</span>
        </div>,
      );

    PEOPLE.forEach((p, j) => {
      const appear = ss((u - 6.4) / 0.7);
      const travel = ss((u - 9.6) / 1.4);
      const o = appear * (1 - ss((u - 10.6) / 0.4));
      if (o < 0.001) return;
      const sx = cx + FAN[j][0] * appear;
      const sy = cy + FAN[j][1] * appear - 30 * (1 - appear);
      const x = sx + (pill.x - sx) * travel;
      const y = sy + (pill.y - sy) * travel;
      nodes.push(
        <div
          key={"p" + k + j}
          style={{
            ...glass,
            height: 32,
            boxSizing: "border-box",
            padding: "0 12px 0 4px",
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 500,
            opacity: o,
            transform: `translate(${x - 54}px,${y - 16}px) scale(${1 - 0.3 * travel})`,
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              borderRadius: 9999,
              background: p.c,
              color: "#0a1e5f",
              fontSize: 12,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {p.i}
          </span>
          {it.part}
        </div>,
      );
    });
  });

  const po = win(t, 10.8, 11.4, 14.6, 15.4);
  if (po > 0.001)
    nodes.push(
      <div
        key="pill"
        style={{
          ...glass,
          height: 44,
          boxSizing: "border-box",
          padding: "0 18px 0 12px",
          borderRadius: 9999,
          background: "rgba(45,212,191,0.14)",
          border: "1px solid rgba(45,212,191,0.50)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 15,
          fontWeight: 500,
          opacity: po,
          transform: `translate(${pill.x - 105}px,${pill.y - 22}px) scale(${0.85 + 0.15 * po})`,
        }}
      >
        <span style={{ color: "#5eead4", display: "flex" }}>
          <Icon name="checkmark-circle-outline" size={22} />
        </span>
        Quitação registrada.
      </div>,
    );

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {DOTS.map(([x, y, r, d], i) => (
        <span
          key={"s" + i}
          className="dai-anim"
          style={{
            position: "absolute",
            left: x + "%",
            top: y + "%",
            width: r * 2,
            height: r * 2,
            borderRadius: 9999,
            background: "#b275ff",
            boxShadow: `0 0 ${r * 4}px ${r}px rgba(178,117,255,0.45)`,
            opacity: animate ? undefined : 0.5,
            animation: animate ? `daiTwinkle ${5 + (i % 3) * 1.5}s ease-in-out ${d}s infinite` : "none",
          }}
        />
      ))}
      {/* Só renderiza os cards depois de medir/animar no cliente, evitando posições erradas no SSR */}
      <div className="absolute inset-0" style={{ opacity: 0.9 }}>
        {size.vis ? nodes : null}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,30,95,0.72) 0%, rgba(10,30,95,0.5) 45%, rgba(10,30,95,0.15) 100%)",
        }}
      />
    </div>
  );
}
