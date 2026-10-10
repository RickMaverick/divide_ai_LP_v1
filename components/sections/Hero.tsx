import { Button } from "@/components/ds/Button";
import { HeroStory } from "@/components/HeroStory";
import { PhoneMockup } from "@/components/PhoneMockup";
import { ScaledBox } from "@/components/ScaledBox";
import { links } from "@/lib/content";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-deep-blue text-white">
      <HeroStory animate />
      <div className="relative z-[1] mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-14 px-6 pt-[72px] pb-24">
        <div data-hero-text className="flex flex-col gap-6 self-center pb-[72px]">
          <div className="text-sm font-medium text-brand-primary">Divisão de despesas para quem viaja junto</div>
          <h1 className="m-0 text-[clamp(36px,5.4vw,60px)] leading-[1.05] font-bold tracking-[-0.02em] text-balance">
            Uma boa trip entre amigos <br></br> com as <span className="text-brand-primary">contas em dia</span>
          </h1>
          <p className="m-0 max-w-[500px] text-lg leading-[1.55] text-pretty text-hero-body">
            Crie o grupo da viagem, chame a galera e lance cada despesa na hora. O DivideAi faz a conta de quem pagou,
            quem consumiu e quem deve pra quem.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={links.ios} fullWidth={false}>
              Baixar para iOS
            </Button>
            <Button href={links.android} variant="secondary" fullWidth={false}>
              Baixar para Android
            </Button>
          </div>
          <div className="text-sm text-hero-muted">Grátis durante o Beta. Sem cartão de crédito.</div>
        </div>

        <div className="flex justify-center self-center pb-10">
          {/* O mockup é desenhado em 1200×1200 e reduzido para caber em até 580 px. */}
          <ScaledBox size={1200} initialScale={580 / 1200} className="w-[580px] max-w-full">
            <PhoneMockup background="transparente" screenTheme="light" />
          </ScaledBox>
        </div>
      </div>
    </section>
  );
}
