"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaEdit } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#0D1B2A] text-[#E0E1DD] p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Name & Menu */}
        <div className="flex items-center space-x-6 text-lg">
        <h1 className="text-2xl font-bold text-[#F4A261] font-[cursive] italic">Vinithra Sadras</h1>
        <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-[#F4A261]">Home</Link></li>
            <li><Link href="#about" className="hover:text-[#F4A261] transition duration-300">About</Link></li>
            <li><Link href="#experience" className="hover:text-[#F4A261] transition duration-300">Experience</Link></li>
            <li><Link href="#projects" className="hover:text-[#F4A261] transition duration-300">Projects</Link></li>
          </ul>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4 text-2xl">
          <a href="mailto:vsadras@syr.edu" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-[#F4A261] transition duration-300" />
          </a>
          <a href="https://github.com/vinithra-sadras" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[#F4A261] transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/vinithra-sadras" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[#F4A261] transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaEdit className="hover:text-[#F4A261] transition duration-300" />
          </a>
        </div>
      </div>
    </nav>
  );
}
