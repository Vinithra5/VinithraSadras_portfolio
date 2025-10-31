import type React from "react"
import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Vinithra Sadras - Portfolio",
  description: "Tech enthusiast passionate about building impactful solutions",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#1B4543]">
      <body className="text-[#E0E1DD] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
