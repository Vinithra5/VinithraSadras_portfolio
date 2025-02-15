"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";  // ✅ Ensure it's imported correctly

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
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section (Appears First) */}
      <Hero />

      {/* About Me Section (Appears on Scroll) */}
      <section id="about" className="fade-in">
        <AboutMe />
      </section>

      {/* Professional Experience Section (Appears on Scroll) */}
      <section id="experience" className="fade-in">
        <Experience />
      </section>

      {/* Projects Section (Appears on Scroll) */}
      <section id="projects" className="fade-in">
        <Projects />
      </section>
    </main>
  );
}
