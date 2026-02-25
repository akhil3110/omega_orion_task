import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omega Orion Task",
  description: "A simple application built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-full flex bg-[#F7F7F7] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full w-70 py-4 ml-4">
          <Sidebar />
        </div>
          {children}
      </body>
    </html>
  );
}
