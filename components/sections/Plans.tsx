import { Badge } from "@/components/ds/Badge";
import { Button } from "@/components/ds/Button";
import { freeItems, links, soonPlans } from "@/lib/content";
import { CheckItem, container, Eyebrow, h2, lead } from "./shared";

export function Plans() {
  return (
    <section id="planos" className="border-y border-border bg-surface">
      <div className={`${container} flex flex-col gap-12`}>
        <div className="flex max-w-[640px] flex-col gap-3">
          <Eyebrow>Planos</Eyebrow>
          <h2 className={h2}>Durante o Beta, é tudo de graça.</h2>
          <p className={lead}>Comece no Free hoje. Os planos Traveler e Nomade chegam em breve, com valores ainda a definir.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
          <div className="flex flex-col gap-5 rounded-card border-2 border-fill-primary bg-bg p-6 shadow-card-md">
            <div className="flex items-center justify-between gap-2">
              <span className="text-2xl font-bold">Free</span>
              <Badge tone="success">Disponível no Beta</Badge>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">R$ 0</span>
              <span className="text-sm whitespace-nowrap text-muted">durante o Beta</span>
            </div>
            <div className="leading-[1.55] text-muted">Tudo o que você precisa pra organizar a próxima trip com a galera.</div>
            <div className="flex flex-1 flex-col gap-2.5">
              {freeItems.map((it) => (
                <CheckItem key={it} size={18} className="gap-2.5 text-[15px] leading-[1.45]">
                  {it}
                </CheckItem>
              ))}
            </div>
            <Button href={links.ios}>Começar grátis</Button>
          </div>

          {soonPlans.map((p) => (
            <div key={p.name} className="flex flex-col gap-5 rounded-card border border-border bg-bg p-6 shadow-card">
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl font-bold">{p.name}</span>
                <Badge tone="warning">Em breve</Badge>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-muted">R$ --</span>
                <span className="text-sm whitespace-nowrap text-muted">valor a definir</span>
              </div>
              <div className="flex-1 leading-[1.55] text-pretty text-muted">{p.text}</div>
              <Button variant="secondary" disabled>
                Em breve
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
