"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Leadership from "@/components/Leadership";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".fade-in").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-[#1B4543] text-[#E0E1DD] px-8">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section id="about" className="fade-in w-full max-w-6xl mt-16">
        <AboutMe />
      </section>

      {/* Experience Section */}
      <section id="experience" className="fade-in w-full max-w-6xl mt-16">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="fade-in w-full max-w-6xl mt-12">
        <Projects />
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="fade-in w-full max-w-6xl mt-12">
        <OpenSource />
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="fade-in w-full max-w-6xl mt-12">
        <Leadership />
      </section>

      {/* Footer - Simple Copyright Notice */}
      <footer className="w-full text-center mt-12 pb-6 text-[#AAB3BE] text-sm">
        © {new Date().getFullYear()} Vinithra Sadras. All rights reserved.
      </footer>
    </main>
  );
}
