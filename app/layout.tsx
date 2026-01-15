import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luminous Estates – Ultra-Luxury Real Estate",
  description:
    "Discover extraordinary properties crafted for the most discerning clientele. Each residence is a masterpiece of design, location, and unparalleled luxury."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

