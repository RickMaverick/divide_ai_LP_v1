"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renderiza `children` num quadro fixo (`size`×`size` px) e escala para caber na largura do container.
 * `initialScale` é usado no SSR/primeiro paint (0.4833 = 580/1200, como no design original).
 */
export function ScaledBox({
  size,
  initialScale,
  className = "",
  children,
}: {
  size: number;
  initialScale: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(initialScale);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / size));
    ro.observe(el);
    return () => ro.disconnect();
  }, [size]);

  return (
    <div ref={ref} data-hero-visual className={`relative aspect-square overflow-visible ${className}`}>
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: size, height: size, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
