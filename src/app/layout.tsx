import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Hive | MVP em 10 Dias",
  description: "Enquanto a agência tradicional ainda está montando o orçamento, a gente entrega o seu MVP no ar. Engenharia séria acelerada por IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-base">{children}</body>
    </html>
  );
}
