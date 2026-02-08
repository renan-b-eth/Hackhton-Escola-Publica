import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hackathon nas Escolas Públicas | Circuito Estadual de Inovação",
  description:
    "O Primeiro Circuito de Hackathons das Escolas Estaduais. Conectando alunos da rede pública à tecnologia, inovação e ao mercado de trabalho global. Uma iniciativa do Prof. Renan Santos.",
  keywords: [
    "hackathon",
    "escola pública",
    "educação",
    "tecnologia",
    "inovação",
    "programação",
    "Renan Santos",
    "Rendey",
  ],
  openGraph: {
    title: "Hackathon nas Escolas Públicas",
    description:
      "Conectando alunos da rede pública à tecnologia, inovação e ao mercado de trabalho global.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
