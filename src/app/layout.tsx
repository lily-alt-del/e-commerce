import type { Metadata } from "next";
import { Pangolin, Federo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

// Configuração das fontes online
const pangolin = Pangolin({
  weight: "400",
  variable: "--font-pangolin",
  subsets: ["latin"],
});

const federo = Federo({
  weight: "400",
  variable: "--font-federo",
  subsets: ["latin"],
});

// Configuração da fonte local
const punkWest = localFont({
  src: [
    {
      path: "../../public/punk-west/Punk-West.otf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-punk-west",
});

;// Metadata da aplicação
export const metadata: Metadata = {
  title: "Brechó Lily",
  description: "Brechó de roupas estilosas e alternativas",
};

// Layout raiz da aplicação
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${pangolin.variable} ${federo.variable} ${punkWest.variable}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
