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
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once when page loads

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-[#1B4543] text-[#E0E1DD] px-8 space-y-16">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section id="about" className="fade-in w-full max-w-6xl">
        <AboutMe />
      </section>

      {/* Experience Section */}
      <section id="experience" className="fade-in w-full max-w-6xl">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="fade-in w-full max-w-6xl">
        <Projects />
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="fade-in w-full max-w-6xl">
        <OpenSource />
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="fade-in w-full max-w-6xl">
        <Leadership />
      </section>
    </main>
  );
}
