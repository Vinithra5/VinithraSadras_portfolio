import Navbar from "@/components/Navbar"; 
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinithra Portfolio",
  description: "My personal portfolio built with Next.js & Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#1B4543] text-[#E0E1DD] antialiased">
      <body>
        <Navbar />  {/* Navbar is included in every page */}
        {children}   {/* This will be replaced by the specific page's content */}
      </body>
    </html>
  );
}
