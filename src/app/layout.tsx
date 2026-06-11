import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CENADT | Centro Avançado de Treinamentos & Serviços",
  description: "Líder em Educação Profissional, Cursos NR-10, NR-35, NR-33, Bombeiro Civil, Brigada de Incêndio e Assessoria Técnica em Engenharia de Segurança contra Incêndio. Sediada em Maranguape, Ceará.",
  keywords: [
    "CENADT",
    "Cursos NR Maranguape",
    "Bombeiro Civil Ceará",
    "Treinamento de Segurança do Trabalho",
    "NR-10",
    "NR-35",
    "NR-33",
    "Projeto de Incêndio Ceará",
    "Brigada de Incêndio",
    "Treinamento in-company",
  ],
  authors: [{ name: "CENADT" }],
  creator: "CENADT",
  publisher: "CENADT",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.cenadt.com/",
    title: "CENADT | Centro Avançado de Treinamentos & Serviços",
    description: "Referência em educação profissional, treinamentos normativos e assessoria técnica contra incêndio. Qualidade na formação, sucesso na profissão.",
    siteName: "CENADT",
  },
  twitter: {
    card: "summary_large_image",
    title: "CENADT | Centro Avançado de Treinamentos & Serviços",
    description: "Referência em educação profissional, treinamentos normativos e assessoria técnica contra incêndio. Qualidade na formação, sucesso na profissão.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
