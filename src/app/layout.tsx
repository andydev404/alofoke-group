import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Alofoke Group",
  description:
    "Lista de canales de Youtube que pertenecen a Alofoke Media Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${inter.className} p-10 antialiased font-sans h-full bg-neutral-950 text-neutral-50`}
      >
        <div className="fixed -left-28 -top-32 blur-3xl opacity-40 -z-10 w-[600px] h-[600px] rounded-full bg-red-600"></div>
        {children}
      </body>
    </html>
  );
}
