import { Button } from "@/components/ds/Button";
import { Wordmark } from "@/components/Wordmark";
import { links } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="bg-deep-blue text-white">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="m-0 text-[clamp(30px,4.4vw,48px)] leading-[1.1] font-bold tracking-[-0.02em] text-balance">
          A próxima trip já tem quem cuide das <span className="text-brand-primary">contas.</span>
        </h2>
        <p className="m-0 text-lg leading-[1.55] text-pretty text-hero-body">
          Baixe o DivideAi, crie seu primeiro grupo e chame os amigos. É grátis durante o Beta.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={links.ios} fullWidth={false}>
            Baixar para iOS
          </Button>
          <Button href={links.android} variant="secondary" fullWidth={false}>
            Baixar para Android
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-6 px-6 py-8 text-sm text-muted">
        <Wordmark className="text-lg" />
        <span>Uma boa trip entre amigos, com as contas em dia.</span>
        <div className="ml-auto flex flex-wrap gap-5">
          <a href={links.terms} className="hover:underline">Termos de uso</a>
          <a href={links.privacy} className="hover:underline">Privacidade</a>
          <a href={links.contact} className="hover:underline">Contato</a>
        </div>
      </div>
    </footer>
  );
}
