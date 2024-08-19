import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jérémy Mendes - Développeur Front-End | React, Next.js, TypeScript",
  description:
    "Je suis Jérémy Mendes, développeur front-end spécialisé en React, Next.js et TypeScript. Découvrez mes projets et contactez-moi pour vos besoins en développement web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}