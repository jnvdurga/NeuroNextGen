import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Directly use Footer here
import { Suspense } from "react";
import Loader from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntelyHood - Empowering Businesses with AI-Driven Solutions",
  description: "Empowering Ideas with AI-Driven Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<Loader />}>
          <Header />
          {children}
          <Footer /> {/* ✅ use Footer directly */}
        </Suspense>
      </body>
    </html>
  );
}
