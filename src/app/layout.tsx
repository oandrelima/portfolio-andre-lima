import type { Metadata } from "next";
import "~/styles/globals.css";
import { TRPCProvider } from "./_components/TRPCProvider";
import { CustomCursor } from "./_components/CustomCursor";
import { Header } from "./_components/Header";

export const metadata: Metadata = {
  title: "André Lima's Portfolio",
  description: "André Lima's Portfolio",
  openGraph: {
    title: "André Lima's Portfolio",
    description: "André Lima's Portfolio",
    siteName: "André Lima's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "André Lima's Portfolio",
    description: "André Lima's Portfolio",
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
