import SidePanel from "./SidePanel";
import MobileNavbar from "./MobileNavbar";

const projectPipeline = [
  {
    category: "DEV TOOLS & CLIS",
    projects: [
      {
        name: "Local-first Code Review CLI",
        description: "A CLI that diffs git changes, runs AST-based checks, and comments inline  no remote CI needed. Supports plugins.",
        tags: ["Go", "Rust"],
        difficulty: "Hard",
      },
      {
        name: "TUI Database Explorer",
        description: "A terminal UI app (like a mini DBeaver) for browsing Postgres/SQLite schemas, running queries, and visualizing results  all in the terminal.",
        tags: ["Rust", "Go"],
        difficulty: "Hard",
      },
      {
        name: "Dotfiles Manager with Profiles",
        description: "CLI to sync, version, and encrypt dotfiles across machines. Supports profiles (work/home), hooks, and secret redaction.",
        tags: ["Python", "Go"],
        difficulty: "Medium",
      },
      {
        name: "Git History Visualizer",
        description: "A CLI that renders a graph of commit history, branches, merges, and authors  colorized and interactive in the terminal.",
        tags: ["Python", "Rust"],
        difficulty: "Medium",
      },
    ],
  },
  {
    category: "AI / ML POWERED APPS",
    projects: [
      {
        name: "Local RAG Document Q&A Engine",
        description: "A local Q&A engine that chunks and embeds documents, stores them locally, and answers questions with citations  no API key, runs fully offline.",
        tags: ["Python"],
        difficulty: "Hard",
      },
      {
        name: "AI Code Explainer & Refactorer",
        description: "A tool that takes any code snippet and returns a structured explanation, complexity analysis, and a refactored version with a diff view. Supports multiple languages.",
        tags: ["TypeScript", "Next.js"],
        difficulty: "Medium",
      },
      {
        name: "Real-time Meeting Transcriber",
        description: "Captures mic audio, transcribes live with Whisper, extracts action items and decisions at the end  outputs a structured summary.",
        tags: ["Python"],
        difficulty: "Hard",
      },
      {
        name: "LLM-powered Finance Tracker",
        description: "An app that reads bank export files, categorizes transactions using an LLM, flags anomalies, and generates a monthly narrative summary.",
        tags: ["Python", "React"],
        difficulty: "Medium",
      },
    ],
  },
  {
    category: "GAMES & CREATIVE TECH",
    projects: [
      {
        name: "Multiplayer Browser Game + Server",
        description: "A real-time multiplayer game with an authoritative game server handling physics, state sync, and lag compensation.",
        tags: ["TypeScript", "Node"],
        difficulty: "Hard",
      },
      {
        name: "Procedural World Generator",
        description: "Generates infinite terrain using noise algorithms (Perlin, Simplex), then renders it with biomes, elevation, and rivers.",
        tags: ["C++", "TypeScript"],
        difficulty: "Hard",
      },
      {
        name: "Ray Tracer from Scratch",
        description: "A ray tracer built from scratch with reflections, shadows, anti-aliasing, and multiple light sources  no graphics library, just math and pixels.",
        tags: ["C++", "Rust"],
        difficulty: "Hard",
      },
      {
        name: "Generative Art Engine",
        description: "A browser tool that creates algorithmic art (L-systems, reaction-diffusion, flow fields) with controls and exports to SVG or high-res PNG.",
        tags: ["TypeScript", "Canvas"],
        difficulty: "Medium",
      },
    ],
  },
  {
    category: "APIS, BACKENDS & INFRA",
    projects: [
      {
        name: "Distributed Task Queue",
        description: "A job queue system with workers, retries, dead-letter queues, and a monitoring dashboard  built from scratch, no Celery or BullMQ.",
        tags: ["Go", "Rust"],
        difficulty: "Hard",
      },
      {
        name: "URL Shortener with Analytics API",
        description: "A production-grade short URL service with click analytics, geo tracking, rate limiting, auth, and a public REST API  self-hostable via Docker.",
        tags: ["Go", "Node"],
        difficulty: "Medium",
      },
      {
        name: "Collaborative Text Editor (CRDT)",
        description: "A real-time multi-user text editor using CRDTs for conflict-free sync  like a mini Google Docs you built yourself.",
        tags: ["TypeScript", "Rust"],
        difficulty: "Hard",
      },
      {
        name: "GraphQL API Gateway",
        description: "A gateway that stitches multiple upstream REST/GraphQL services, adds caching, JWT auth, rate limiting, and query cost analysis.",
        tags: ["TypeScript", "Node"],
        difficulty: "Hard",
      },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <div className="@[800px]:divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414] @container">
        <aside className="hidden @[800px]:block sticky w-1/5 text-white space--4 top-0 h-100% sidepanelmother">
          <SidePanel />
        </aside>
        <nav className="block @[800px]:hidden">
          <MobileNavbar />
        </nav>
        <main className="flex-1 text-white overflow-y-auto">
          <div className="@container">
            <div className="mt-12 @[1000px]:mt-6"></div>

            <span className="flex-shrink font-bold ml-10 mx-4 text-[18px] @[500px]:text-[20px] @[600px]:text-2xl @[700px]:text-3xl">
              Completed Projects
            </span>
            <div className="flex-grow border-t-[3px] mt-2"></div>
            <div className="flex gap-8 pt-8 pr-10 pl-10 mb-10 flex-wrap">
              <div className="w-full border border-[#A9A9A9] border-opacity-30 p-5 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-[15px] @[500px]:text-[17px] @[700px]:text-[20px] font-bold flex-1 mr-3">ShortiesHost</h2>
                  <span className="text-[10px] @[500px]:text-[11px] px-2 py-0.5 rounded-full border border-green-400 text-green-400 flex-shrink-0">Beta</span>
                </div>
                <p className="text-[#D3D3D3] mb-4 text-[12px] @[500px]:text-[13px] @[700px]:text-[15px] leading-relaxed">
                  Minecraft server hosting platform for the Algerian market. No existing platform supported local payment or Arabic  so he built one. Containerized server deployment with real-time dashboard (start/stop, console, file management), Chargily integration for El Dahabia card payments, and full Arabic RTL support. Custom orchestration layer for Docker container lifecycle, dynamic resource allocation, automated email flows, and auth  all production-deployed on Linux with SSL.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TypeScript", "TailwindCSS", "Node.js", "Docker", "Supabase", "Chargily", "Resend", "Linux", "i18n"].map((tag) => (
                    <span key={tag} className="border border-[#A9A9A9] rounded-full px-2 py-0.5 text-[10px] @[500px]:text-[11px] @[700px]:text-[12px]">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="https://www.shortieshost.me/" target="_blank" className="text-[12px] @[500px]:text-[14px] bg-gray-600 text-white px-3 py-1 @[500px]:px-4 @[500px]:py-2 rounded-md hover:bg-gray-500 transition">Live Site</a>
                </div>
              </div>
            </div>

            <span className="flex-shrink font-bold ml-10 mx-4 text-[18px] @[500px]:text-[20px] @[600px]:text-2xl @[700px]:text-3xl">
              Project Pipeline
            </span>
            <div className="flex-grow border-t-[3px] mt-2 mb-8"></div>

            {projectPipeline.map((group) => (
              <div key={group.category} className="mb-10">
                <p className="ml-10 mb-4 text-[11px] @[500px]:text-[12px] @[700px]:text-[13px] text-[#A9A9A9] tracking-widest">
                  {group.category}
                </p>
                <div className="grid grid-cols-1 @[700px]:grid-cols-2 gap-4 px-10">
                  {group.projects.map((project) => (
                    <div
                      key={project.name}
                      className="border border-[#A9A9A9] border-opacity-25 p-4 rounded-lg hover:border-opacity-60 transition duration-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h2 className="text-[13px] @[500px]:text-[14px] @[700px]:text-[15px] font-semibold flex-1 mr-2">
                          {project.name}
                        </h2>
                        <span
                          className={`text-[10px] @[500px]:text-[11px] px-2 py-0.5 rounded-full border flex-shrink-0 ${
                            project.difficulty === "Hard"
                              ? "border-red-400 text-red-400"
                              : "border-yellow-400 text-yellow-400"
                          }`}
                        >
                          {project.difficulty}
                        </span>
                      </div>
                      <p className="text-[#A9A9A9] text-[11px] @[500px]:text-[12px] mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[#A9A9A9] rounded-full px-2 py-0.5 text-[10px] @[500px]:text-[11px] @[700px]:text-[12px]"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="border border-[#A9A9A9] border-opacity-30 rounded-full px-2 py-0.5 text-[10px] @[500px]:text-[11px] @[700px]:text-[12px] text-[#A9A9A9] opacity-50">
                          Planned
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
