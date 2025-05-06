import type { Metadata } from "next";
import { Poppins, Barlow } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboard Game Store",
  description:
    "Dashboard para visualizar os dados do banco de dados Game Store",
};

export default async function RootLayout({
  children,
  navbar,
}: {
  children: ReactNode;
  navbar: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${barlow.variable} font-poppins flex h-screen w-screen bg-[#F3F2F7] antialiased`}
      >
        {navbar}
        <main className="flex w-full flex-col px-12 py-10">{children}</main>
      </body>
    </html>
  );
}
