import { BalanceRow } from "@/components/ds/Rows";
import { SettleDemo } from "@/components/SettleDemo";
import { balances, features } from "@/lib/content";
import { card, CheckItem, container, Eyebrow, h2, lead, twoColumns } from "./shared";

export function Features() {
  return (
    <section id="recursos" className="bg-bg">
      <div className={`${container} ${twoColumns}`}>
        <div className={`${card} flex flex-col gap-3 bg-surface p-4`}>
          <div className="px-1 pt-1 [font:var(--type-section)]">Saldos</div>
          {balances.map((b) => (
            <BalanceRow key={b.name} {...b} />
          ))}
          <div className="px-1 pt-3 [font:var(--type-section)]">Sugestões de acerto</div>
          <SettleDemo />
        </div>
        <div className="flex flex-col gap-6">
          <Eyebrow>Saldos e acertos</Eyebrow>
          <h2 className={h2}>Ninguém sai no prejuízo. Nem fica devendo sem saber.</h2>
          <p className={lead}>
            Veja quanto cada um pagou e consumiu. O app sugere o jeito mais simples de acertar e você registra a quitação
            com um toque.
          </p>
          <div className="flex flex-col gap-3">
            {features.map((f) => (
              <CheckItem key={f} className="leading-normal">
                {f}
              </CheckItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
