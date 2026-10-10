import { ExpenseRow } from "@/components/ds/Rows";
import { recentExpenses } from "@/lib/content";
import { card, container, h2, twoColumns } from "./shared";

export function Story() {
  return (
    <section className="bg-bg">
      <div className={`${container} ${twoColumns}`}>
        <div className="flex flex-col gap-5">
          <h2 className={h2}>Um paga o mercado, outro o café. E no fim, quem deve quanto?</h2>
          <p className="m-0 text-lg leading-[1.65] text-pretty text-muted">
            Em viagens entre amigos, é comum que as finanças acabem saindo do controle. Afinal, quem não gosta de
            aproveitar bons momentos sem se preocupar tanto com a conta? Um paga o mercado, outro cuida do café da
            manhã, alguém banca o passeio... e assim cada um vai contribuindo como pode. No fim, surgem aquelas
            diferenças entre quem gastou mais ou menos — mas dividir essas despesas de forma justa não precisa ser
            complicado.
          </p>
        </div>
        <div className={`${card} flex flex-col gap-3 bg-surface p-4`}>
          <div className="flex items-baseline justify-between px-1 pt-1">
            <span className="[font:var(--type-section)]">Despesas recentes</span>
            <span className="text-sm text-muted">Trip Floripa</span>
          </div>
          {recentExpenses.map((e) => (
            <ExpenseRow key={e.title} {...e} variant="card" />
          ))}
        </div>
      </div>
    </section>
  );
}
