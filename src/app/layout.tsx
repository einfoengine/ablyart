import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ablyart — We Fix Your Digital Presence",
  description: "ablyart is a digital marketing agency that crafts high-converting digital experiences through strategic marketing, bold creative, and data-driven execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060608] antialiased overflow-x-clip w-full">
        <div className="relative w-full overflow-x-clip flex flex-col min-h-screen">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
