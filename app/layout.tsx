import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Leilas portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased min-h-screen grid grid-rows-[auto_1fr_auto] w-full`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
