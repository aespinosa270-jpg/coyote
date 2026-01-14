import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; 
import "./globals.css";
import { ChatWidget } from "@/components/landing/ChatWidget";

// 1. Configuración de Fuentes (Industrial + Editorial)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: '--font-oswald',
  display: 'swap',
});

// 2. Metadata Actualizada (Lenguaje Corporativo/Industrial)
export const metadata: Metadata = {
  title: "Coyote Textil | Infraestructura y Suministro Textil",
  description: "Abasto textil de alto nivel para confeccionistas. Logística nacional, stock físico garantizado y venta por mayoreo en México.",
  keywords: ["suministro textil", "telas mayoreo cdmx", "infraestructura textil", "rollos de tela", "proveedor industrial", "textiles deportivos"],
  openGraph: {
    title: "Coyote Textil | Suministro Nacional",
    description: "Infraestructura de abasto para tu producción. Calidad premium y logística blindada.",
    type: "website",
    locale: "es_MX",
    siteName: "Coyote Textil",
  },
  icons: {
    icon: "/assets/favicon.ico", // Asegúrate de tener un favicon si es posible
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* 3. Body:
        - bg-[#050505]: Negro profundo unificado.
        - antialiased: Texto más nítido.
        - selection:bg-yellow-500: El texto seleccionado se ve amarillo coyote.
      */}
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-[#050505] text-white font-sans selection:bg-yellow-500 selection:text-black`}>
        
        {children}

        {/* Widget de WhatsApp flotante */}
        <ChatWidget />
        
      </body>
    </html>
  );
}