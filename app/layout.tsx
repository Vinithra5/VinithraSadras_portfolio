import Navbar from "@/components/Navbar"; 
import "../styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinithra Portfolio",
  description: "My personal portfolio built with Next.js & Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<body className="bg-[#0D1B2A] text-[#E0E1DD] antialiased">
<Navbar /> 
        {children} 
      </body>
    </html>
  );
}
