import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel Administrativo | CENADT",
  description: "Gerenciamento de conteúdo do site institucional CENADT.",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#09090b", color: "#fafafa" }}>
      {children}
    </div>
  );
}
