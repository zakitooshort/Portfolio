import React from 'react';
import SidePanel from "./SidePanel";
import MobileNavbar from "./MobileNavbar";

const roadmap = [
  {
    label: "ACADEMIC",
    items: [
      {
        title: "Complete Masters 1 — ISII",
        detail: "Ingenierie des Systemes Informatiques Intelligents, Algiers 1",
        status: "In progress",
      },
    ],
  },
  {
    label: "PROJECTS",
    items: [
      { title: "Ship at least one project per month", detail: "From the pipeline  any category, any difficulty.", status: "Ongoing" },
      { title: "Build a production-ready backend", detail: "Something with auth, a real DB, deployed  not just local.", status: "Planned" },
      { title: "Ship a CLI tool people can actually use", detail: "Open source, documented, installable.", status: "Planned" },
      { title: "Finish a creative/graphics project", detail: "Ray tracer or generative art engine  math-heavy, visually striking.", status: "Planned" },
    ],
  },
  {
    label: "SKILLS",
    items: [
      { title: "Get comfortable in Go or Rust", detail: "Build something real in one of them  not just tutorials.", status: "In progress" },
      { title: "Understand systems deeper", detail: "Compilers, OS, networking  the stuff under the surface.", status: "Planned" },
      { title: "Sharpen algorithms & problem solving", detail: "Consistent Leetcode practice alongside real projects.", status: "Ongoing" },
    ],
  },
];

const quotes = [
  { text: "Our work is never over.", author: "Kanye West" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
];

const statusColor = {
  "In progress": "text-yellow-400 border-yellow-400",
  "Ongoing": "text-green-400 border-green-400",
  "Planned": "text-[#A9A9A9] border-[#A9A9A9]",
  "Done": "text-blue-400 border-blue-400",
};

export default function Goals() {
  return (
    <>
      <div className="@[800px]:divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414] @container">
        <aside className="hidden @[800px]:block sticky w-1/5 text-white space--4 top-0 h-100% sidepanelmother">
          <SidePanel />
        </aside>
        <nav className="block @[800px]:hidden">
          <MobileNavbar />
        </nav>
        <main className="flex-1 space-6 text-white overflow-y-auto p-10">
          <div className="@container">
            <div className="@[600px]:text-[20px] mt-4 @[500px]:mt-0 @[700px]:text-[25px] @[900px]:text-3xl @[1000px]:text-4xl font-semibold mb-2">
              Roadmap
            </div>
            <p className="text-[#A9A9A9] text-[12px] @[600px]:text-[14px] @[900px]:text-[16px] mb-6">
              Where he's at, what he's working toward.
            </p>
            <div className="flex-grow border-t-[1px] @[900px]:border-t-[2px] @[1000px]:border-t-[3px] mb-10"></div>

            {roadmap.map((section) => (
              <div key={section.label} className="mb-10">
                <p className="text-[11px] @[500px]:text-[12px] @[700px]:text-[13px] text-[#A9A9A9] tracking-widest mb-4">
                  {section.label}
                </p>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-[#1e1e1e] border border-[#A9A9A9] border-opacity-20 rounded-lg p-4 flex items-start justify-between gap-4"
                    >
                      <div className="flex-1">
                        <p className="text-[13px] @[500px]:text-[14px] @[700px]:text-[15px] @[900px]:text-[16px] font-semibold">
                          {item.title}
                        </p>
                        <p className="text-[#A9A9A9] text-[11px] @[500px]:text-[12px] @[700px]:text-[13px] mt-1">
                          {item.detail}
                        </p>
                      </div>
                      <span
                        className={`text-[10px] @[500px]:text-[11px] px-2 py-0.5 rounded-full border flex-shrink-0 ${statusColor[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex-grow border-t-[1px] @[900px]:border-t-[2px] mb-10"></div>

            <div className="mb-10">
              <p className="text-[11px] @[500px]:text-[12px] @[700px]:text-[13px] text-[#A9A9A9] tracking-widest mb-4">
                WORDS THAT STUCK
              </p>
              <div className="space-y-3">
                {quotes.map((q) => (
                  <p
                    key={q.author}
                    className="text-[13px] @[500px]:text-[14px] @[700px]:text-[16px] @[900px]:text-[18px] italic text-[#D3D3D3]"
                  >
                    "{q.text}" <span className="not-italic text-[#A9A9A9] text-[11px] @[500px]:text-[12px]"> {q.author}</span>
                  </p>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
