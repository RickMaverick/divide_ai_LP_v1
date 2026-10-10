import { Badge } from "@/components/ds/Badge";
import { Button } from "@/components/ds/Button";
import { Wordmark } from "@/components/Wordmark";
import { links, nav, showBetaBar } from "@/lib/content";

export function BetaBar() {
  if (!showBetaBar) return null;
  return (
    <div className="bg-fill-primary px-4 py-2.5 text-center text-sm font-medium text-pretty text-on-fill">
      O DivideAi está em Beta e é gratuito. Bora testar com a sua turma.
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-6 px-6 py-3">
        <a href="#topo" className="flex items-center gap-2 hover:no-underline">
          <Wordmark className="text-[22px]" />
          <Badge tone="info">Beta</Badge>
        </a>
        <nav className="ml-auto flex flex-wrap gap-6 text-sm font-medium whitespace-nowrap">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-text hover:underline">
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={links.ios} fullWidth={false}>
          Baixar grátis
        </Button>
      </div>
    </header>
  );
}
