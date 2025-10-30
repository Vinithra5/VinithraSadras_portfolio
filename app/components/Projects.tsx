"use client"
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa"

const projects = [
  {
    title: "SwiftScan – OCR Web Application",
    description:
      "I built SwiftScan to solve a problem I kept running into: extracting text from images and making it searchable. The idea was to create a full stack platform using React and Flask that could handle text extraction efficiently. I engineered REST endpoints with caching and pagination to make sure queries stayed fast and the system could scale as usage grew. One of the key challenges was making it fault tolerant, so I implemented structured exception handling and persistent storage layers to ensure it could run reliably in production. It's been really satisfying to see how a well designed API can make the user experience so much smoother.",
    tech: "React, Flask, REST APIs, OCR, Caching, Pagination",
    github: "#",
    demo: "#",
  },
  {
    title: "Collaborative AI Code Editor",
    description:
      "This project was all about creating a real time coding environment where multiple people could work together seamlessly. I architected it using React and Node.js, and integrated the OpenAI API to provide contextual coding assistance as you type. The real time collaboration was powered by WebSockets, which allowed for instant updates across all users. I also added syntax validation and auto save sessions to make the experience as smooth as possible. Performance was a big focus. I optimized event handling and session persistence, which improved responsiveness and reliability by 85%. Setting up automated testing and versioned deployments made sure the whole system stayed maintainable and could be continuously delivered without breaking things.",
    tech: "React, Node.js, OpenAI API, WebSockets, CI/CD",
    github: "https://github.com/Vinithra5/ai-code-editor",
    demo: "#",
  },
  {
    title: "Inbox Cleaner – Gmail Unsubscriber Tool",
    description:
      "I was tired of my inbox being flooded with newsletters I never read, so I built a tool to fix that. Using Python and Gmail's List Unsubscribe headers, I created an automated system that could remove over 3,000 unwanted emails efficiently. The tool categorizes emails and provides usage insights through an interactive Streamlit dashboard, so you can see exactly what's being cleaned up. I designed it with modularity in mind, so it's easy to extend to other mail services in the future. It's been incredibly satisfying to see my inbox go from chaos to clean with just a few clicks.",
    tech: "Python, Gmail API, Streamlit, Automation",
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-20 mx-auto max-w-6xl mt-12">
      <h2 className="text-4xl font-bold text-[#F0BE6F] mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E2D2F] rounded-lg p-6 shadow-md transition-transform duration-300 
                       hover:scale-105 hover:shadow-lg flex flex-col h-full"
          >
            {/* Project Header */}
            <div className="flex justify-between items-center mb-4">
              <FaFolderOpen className="text-[#F0BE6F] text-3xl" />
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-[#AAB3BE] text-xl hover:text-[#F0BE6F] transition" />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-[#AAB3BE] text-xl hover:text-[#F0BE6F] transition" />
                </a>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-lg font-semibold text-[#F0BE6F]">{project.title}</h3>

            <p className="text-[#AAB3BE] mt-2 flex-grow leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <p className="text-sm text-[#AAB3BE] mt-2 italic">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
