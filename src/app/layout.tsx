import type { Metadata } from "next";
import "~/styles/globals.css";
import { TRPCProvider } from "./_components/TRPCProvider";
import { CustomCursor } from "./_components/CustomCursor";
import { Header } from "./_components/Header";

export const metadata: Metadata = {
  title: "Designer & 3D Artist | Behance Projects & YouTube Creator Portfolio",
  description: "Portfolio de Identidade Visual e Capas 3D para YouTube. Projetos no Behance (LO Studio & Fortnite Thumbnails) e atendimento a mais de 10 grandes canais como Hero Base, Pulga, Nicks, LOUD Diguera e mais.",
  openGraph: {
    title: "Designer Portfolio - T3 App",
    description: "Visual Identity & 3D YouTube Thumbnails Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-background text-lightText antialiased selection:bg-accentRed selection:text-white min-h-screen flex flex-col">
        <TRPCProvider>
          <CustomCursor />
          <Header />
          <main className="flex-grow">{children}</main>
        </TRPCProvider>
      </body>
    </html>
  );
}

