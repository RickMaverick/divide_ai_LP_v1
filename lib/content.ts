import type { IconName } from "@/components/ds/Icon";

/** Links de download e do rodapé — preencha quando as lojas/páginas estiverem prontas. */
export const links = {
  ios: "#",
  android: "#",
  terms: "#",
  privacy: "#",
  contact: "#",
};

export const showBetaBar = true;

export const nav = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#planos", label: "Planos" },
];

export const recentExpenses = [
  { title: "Mercado", payer: "Bruno Lima", date: "12/01/2026", category: "Alimentação", amountCents: 48790, hasReceipt: true },
  { title: "Café da manhã", payer: "Marina Costa", date: "13/01/2026", category: "Alimentação", amountCents: 12400 },
  { title: "Passeio de barco", payer: "Ana Souza", date: "13/01/2026", category: "Lazer", amountCents: 60000, hasReceipt: true },
];

export const steps: { n: string; icon: IconName; title: string; text: string }[] = [
  {
    n: "01",
    icon: "airplane-outline",
    title: "Crie o grupo da trip",
    text: "Dê um nome, escolha se é viagem ou casa e pronto. Floripa, Churras de sábado, Apê da Augusta.",
  },
  {
    n: "02",
    icon: "person-add-outline",
    title: "Chame os amigos",
    text: "Adicione quem vai junto. Cada um acompanha os gastos do grupo pelo próprio celular.",
  },
  {
    n: "03",
    icon: "receipt-outline",
    title: "Lance as despesas",
    text: "Quem pagou, quanto e quem participou. Divida igual, por valores ou por percentual e anexe o comprovante.",
  },
  {
    n: "04",
    icon: "wallet-outline",
    title: "Acerte as contas",
    text: "Veja quem tem a receber e quem tem a dever, e registre cada quitação quando o Pix cair.",
  },
];

export const balances = [
  { name: "Ana Souza", paidCents: 128450, consumedCents: 97210, balanceCents: 31240 },
  { name: "Marina Costa", paidCents: 12400, consumedCents: 43640, balanceCents: -31240 },
];

export const suggestion = { from: "Marina Costa", to: "Ana Souza", amountCents: 31240 };

export const features = [
  "Divisão igual, por valores ou por percentual.",
  "Saldo de cada pessoa: quanto pagou e quanto consumiu.",
  "Sugestões de quem paga quem, sem conta de cabeça.",
  "Comprovantes anexados a cada despesa.",
];

export const freeItems = [
  "Grupos de viagem e de casa",
  "Despesas com divisão igual, por valores ou percentual",
  "Saldos e sugestões de acerto",
  "Comprovantes anexados",
];

export const soonPlans = [
  { name: "Traveler", text: "Pra quem vive de mala pronta. Novidades a caminho, detalhes em breve." },
  { name: "Nomade", text: "Pra quem divide a vida com o mundo. Novidades a caminho, detalhes em breve." },
];

/** Dados da tela "Início" no mockup do celular. */
export const phone = {
  receivableCents: 128450,
  owedCents: 31200,
  groups: [
    { name: "Trip Floripa", type: "Viagem", memberCount: 5, balanceCents: 97240 },
    { name: "Apê da Augusta", type: "Casa", memberCount: 3, balanceCents: -31200 },
    { name: "Churras de sábado", type: "Viagem", memberCount: 8, balanceCents: 0 },
  ],
  badges: { avisos: 2 },
};
