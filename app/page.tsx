"use client"

import { useEffect } from "react"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import OpenSource from "./components/OpenSource"
import Leadership from "./components/Leadership"

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
          el.classList.add("show")
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="flex flex-col items-center bg-[#1B4543] px-8">
      <Hero />
      <section id="about" className="fade-in w-full max-w-6xl mt-16">
        <AboutMe />
      </section>
      <section id="experience" className="fade-in w-full max-w-6xl mt-16">
        <Experience />
      </section>
      <section id="projects" className="fade-in w-full max-w-6xl mt-12">
        <Projects />
      </section>
      <section id="opensource" className="fade-in w-full max-w-6xl mt-12">
        <OpenSource />
      </section>
      <section id="leadership" className="fade-in w-full max-w-6xl mt-12">
        <Leadership />
      </section>
      <footer className="w-full text-center mt-12 pb-6 text-[#AAB3BE] text-sm">
        © {new Date().getFullYear()} Vinithra Sadras. All rights reserved.
      </footer>
    </main>
  )
}
