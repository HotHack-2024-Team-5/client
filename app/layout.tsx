import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "flowbite";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "modular-team-5",
  description: "Generated by team-5 woooooo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.js" />
      </body>
    </html>
  );
}
