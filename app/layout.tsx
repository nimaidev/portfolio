"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nimai C | DEV</title>
        <link rel="icon" href="/nimai.png" />
      </head>
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
          </body>
    </html>
  );
}
