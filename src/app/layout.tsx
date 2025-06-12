import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RivisBarber - Estilo y precisión para el hombre moderno",
  description: "Barbería moderna especializada en cortes de pelo, barba y afeitado clásico. Servicios profesionales con productos premium en un ambiente masculino y elegante.",
  keywords: ["barbería", "corte de pelo", "barba", "afeitado", "hombre", "estilo", "masculino", "profesional"],
  authors: [{ name: "RivisBarber" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "RivisBarber - Estilo y precisión para el hombre moderno",
    description: "Barbería moderna especializada en cortes de pelo, barba y afeitado clásico.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
