import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClarityScript } from "@/components/clarity-script";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Esta Hack — O 1º Hackathon das Escolas Estaduais!",
  description:
    "Uma iniciativa inédita que reúne alunos das escolas estaduais para criar soluções reais com tecnologia. Venha conhecer os projetos!",
  keywords: [
    "hackathon",
    "escola pública",
    "educação",
    "tecnologia",
    "inovação",
    "desenvolvimento de sistemas",
    "pré-TCC",
    "Renan Santos",
    "EstaHack",
    "escola estadual",
  ],
  openGraph: {
    title: "Esta Hack — O 1º Hackathon das Escolas Estaduais!",
    description:
      "Uma iniciativa inédita que reúne alunos das escolas estaduais para criar soluções reais com tecnologia. Venha conhecer os projetos!",
    url: "https://www.estahack.com",
    siteName: "EstaHack",
    images: [
      {
        url: "https://www.estahack.com/imagem-alunos.jpg",
        width: 1200,
        height: 630,
        alt: "Alunos da E.E. Nancy de Oliveira Fidalgo apresentando seus projetos no EstaHack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esta Hack — O 1º Hackathon das Escolas Estaduais!",
    description:
      "Uma iniciativa inédita que reúne alunos das escolas estaduais para criar soluções reais com tecnologia.",
    images: ["https://www.estahack.com/imagem-alunos.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClarityScript />
        {children}
        <ExitIntentModal />
      </body>
    </html>
  );
}
