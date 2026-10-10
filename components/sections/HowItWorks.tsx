import { Icon } from "@/components/ds/Icon";
import { steps } from "@/lib/content";
import { card, container, Eyebrow, h2 } from "./shared";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border bg-surface">
      <div className={`${container} flex flex-col gap-12`}>
        <div className="flex max-w-[640px] flex-col gap-3">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className={h2}>Da ideia da trip ao último acerto em quatro passos.</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4">
          {steps.map((step) => (
            <div key={step.n} className={`${card} flex flex-col gap-4 bg-bg p-6`}>
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-full border border-tint-info-border bg-tint-info-bg text-primary-text">
                  <Icon name={step.icon} size={24} />
                </div>
                <span className="text-sm font-medium text-muted">{step.n}</span>
              </div>
              <div className="text-xl leading-[1.3] font-bold">{step.title}</div>
              <div className="leading-[1.55] text-pretty text-muted">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
