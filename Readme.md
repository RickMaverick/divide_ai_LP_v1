# Landing Page DivideAi

Landing page do DivideAi, o app para dividir despesas entre amigos que viajam juntos. Feita com **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Rodando localmente

Requer Node.js 20.9+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## Estrutura

```
app/
  layout.tsx         # <html lang="pt-BR">, metadata/SEO
  page.tsx           # monta as seções da página
  globals.css        # tokens do design system + tema Tailwind + animações
components/
  sections/          # Header/BetaBar, Hero, Story, HowItWorks, Features, Plans, FinalCta/Footer
  ds/                # componentes do design system DivideAi (Button, Badge, Icon, rows, TotalsCards…)
  HeroStory.tsx      # animação de fundo do hero (client)
  PhoneMockup.tsx    # mockup 3D do celular
  ScaledBox.tsx      # escala o mockup para a largura disponível
  SettleDemo.tsx     # demo interativa do "Registrar quitação"
lib/content.ts       # textos, dados de exemplo e links (download, termos, contato)
design/              # export original do Claude Design (referência, fora do build)
```

Textos e links ficam em `lib/content.ts`. Os links de download (`links.ios`, `links.android`) e do rodapé ainda apontam para `#`.

Os tokens (cores, tipografia, raios, sombras) vêm de `design/divideae-design-system-…/tokens` e estão em `app/globals.css`. Eles também viram utilitários Tailwind: `bg-surface`, `text-muted`, `border-border`, `bg-deep-blue`, `text-primary-text`…

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta Next.js sozinha. Não precisa de `vercel.json` nem de variáveis de ambiente. Clique em **Deploy**.

Cada push na branch de produção gera um novo deploy, e cada PR ganha uma URL de preview.

Alternativa pela CLI: `npx vercel` (preview) e `npx vercel --prod`.
