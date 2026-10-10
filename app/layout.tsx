import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "DivideAi — divisão de despesas para quem viaja junto";
const description =
  "Crie o grupo da viagem, chame a galera e lance cada despesa na hora. O DivideAi faz a conta de quem pagou, quem consumiu e quem deve pra quem. Grátis durante o Beta.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "DivideAi",
  openGraph: {
    title,
    description,
    siteName: "DivideAi",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0a1e5f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
