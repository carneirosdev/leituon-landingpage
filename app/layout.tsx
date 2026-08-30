import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://leituon.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LeituOn — o teu coach pessoal de leitura",
    template: "%s · LeituOn",
  },
  description:
    "Aponta o que lês, mantém a sequência viva e chega ao fim dos livros que começas. O LeituOn acompanha o teu ritmo, avisa-te quando um livro fica para trás e funciona mesmo sem internet.",
  keywords: [
    "leitura",
    "hábito de leitura",
    "plano de leitura",
    "diário de leitura",
    "biblioteca pessoal",
    "app de livros",
  ],
  authors: [{ name: "LeituOn" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "LeituOn",
    title: "LeituOn — o teu coach pessoal de leitura",
    description:
      "Sequência de leitura, metas com data marcada, notas por livro e lista de desejos. Em português, para iPhone e Android.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeituOn — o teu coach pessoal de leitura",
    description:
      "Sequência de leitura, metas com data marcada, notas por livro e lista de desejos.",
  },
  icons: {
    icon: [{ url: "/leituon-icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

/**
 * Aplica o tema antes da primeira pintura. Sem isto, quem escolheu escuro vê
 * um clarão branco em cada navegação.
 */
const THEME_SCRIPT = `
try {
  var stored = localStorage.getItem('leituon-theme');
  var dark = stored ? stored === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  if (dark) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${geist.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
