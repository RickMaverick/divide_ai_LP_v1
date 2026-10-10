import type { ReactNode } from "react";
import { Icon } from "@/components/ds/Icon";

export const container = "mx-auto max-w-[1160px] px-6 py-24";
export const twoColumns = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-14";
export const card = "rounded-card border border-border shadow-card";
export const h2 = "m-0 text-[clamp(28px,3.6vw,40px)] leading-[1.15] font-bold tracking-[-0.015em] text-balance";
export const lead = "m-0 text-lg leading-[1.6] text-pretty text-muted";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="text-sm font-medium text-primary-text">{children}</div>;
}

export function CheckItem({ children, size = 20, className = "" }: { children: ReactNode; size?: number; className?: string }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <span className="flex flex-none pt-0.5 text-success-text">
        <Icon name="checkmark" size={size} />
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </div>
  );
}
