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
  title: "1º EstaHack - E.E. Nancy de Oliveira Fidalgo",
  description:
    "A Primeira Escola Estadual a realizar um Hackathon no Ensino Técnico em Desenvolvimento de Sistemas. Conectando alunos da rede pública à tecnologia, inovação e ao mercado de trabalho global.",
  keywords: [
    "hackathon",
    "escola pública",
    "educação",
    "tecnologia",
    "inovação",
    "desenvolvimento de sistemas",
    "Renan Santos",
    "EstaHack",
  ],
  openGraph: {
    title: "1º EstaHack - E.E. Nancy de Oliveira Fidalgo",
    description:
      "A Primeira Escola Estadual a realizar um Hackathon no Ensino Técnico em Desenvolvimento de Sistemas.",
    url: "https://hackhton-escola-publica.vercel.app",
    siteName: "EstaHack",
    images: [
      {
        url: "https://hackhton-escola-publica.vercel.app/imagem1.png", // Usando a foto do evento como destacada
        width: 1200,
        height: 630,
        alt: "EstaHack - Hackathon Escola Pública",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1º EstaHack - E.E. Nancy de Oliveira Fidalgo",
    description: "A Primeira Escola Estadual a realizar um Hackathon no Ensino Técnico.",
    images: ["https://hackhton-escola-publica.vercel.app/imagem1.png"],
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
