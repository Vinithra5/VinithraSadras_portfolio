"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-[#1B4543]/60 text-[#E0E1DD] p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Name & Menu */}
        <div className="flex items-center space-x-6 text-lg">
          <h1 className="text-2xl font-bold text-[#F0BE6F]">Vinithra Sadras</h1>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-[#F0BE6F]">Home</Link></li>
            <li><Link href="#about" className="hover:text-[#F0BE6F]">About</Link></li>
            <li><Link href="#experience" className="hover:text-[#F0BE6F]">Experience</Link></li>
            <li><Link href="#projects" className="hover:text-[#F0BE6F]">Projects</Link></li>
            <li><Link href="#opensource" className="hover:text-[#F0BE6F]">Open Source</Link></li>
            <li><Link href="#leadership" className="hover:text-[#F0BE6F]">Leadership</Link></li>
          </ul>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4 text-2xl">
          <a href="mailto:vsadras@syr.edu"><FaEnvelope className="hover:text-[#F0BE6F]" /></a>
          <a href="https://github.com/Vinithra5"><FaGithub className="hover:text-[#F0BE6F]" /></a>
          <a href="https://linkedin.com/in/vinithra-sadras"><FaLinkedin className="hover:text-[#F0BE6F]" /></a>
        </div>
      </div>
    </nav>
  );
}
