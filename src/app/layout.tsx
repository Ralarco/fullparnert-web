import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full Partner | Soluciones Logísticas e Industriales de Precisión",
  description: "Líderes en integración logística y precisión arquitectónica industrial. Proveemos soluciones de alto rendimiento para los desafíos más complejos del mercado actual.",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;700;800&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
