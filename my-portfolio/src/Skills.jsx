import SidePanel from "./SidePanel";
import MobileNavbar from "./MobileNavbar";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import typescript from "./assets/typescript.png";
import React from "./assets/React.png";
import vuejs from "./assets/vuejs.png";
import python from "./assets/python.png";
import Django from "./assets/Django.png";
import flask from "./assets/flask.png";
import node from "./assets/node.png";
import postgres from "./assets/postgres.png";
import tailwind from "./assets/tailwind.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import figma from "./assets/figma.png";
import docker from "./assets/docker.png";
import supabase from "./assets/supabase.png";

import go from "./assets/go.png";
import rust from "./assets/rust.png";
import gin from "./assets/gin.png";
import next from "./assets/next.png";
import express from "./assets/express.png";
import nest from "./assets/nest.png";
import fastapi from "./assets/fastapi.png";
import mongo from "./assets/mongo.png";
import Cplus from "./assets/Cplus.png";
import graphql from "./assets/graphql.png";
import sqlite from "./assets/sqlite.png";
import socketio from "./assets/socketio.png";

import lock from "./assets/lock.png";

const learned = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: typescript, alt: "TypeScript" },
  { src: React, alt: "React" },
  { src: vuejs, alt: "Vue.js" },
  { src: python, alt: "Python" },
  { src: Django, alt: "Django" },
  { src: flask, alt: "Flask" },
  { src: node, alt: "Node.js" },
  { src: postgres, alt: "PostgreSQL" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  { src: figma, alt: "Figma" },
{ src: docker, alt: "Docker" },
{ src: supabase, alt: "Supabase" },
];

const aspiring = [
  { src: go, alt: "Go" },       
  { src: rust, alt: "Rust" },   
  { src: gin, alt: "Gin" },      
  { src: next, alt: "Next.js" },  
  { src: express, alt: "Express" }, 
  { src: nest, alt: "NestJS" }, 
  { src: fastapi, alt: "FastAPI" }, 
  { src: mongo, alt: "MongoDB" }, 
  { src: Cplus, alt: "C++" },     
{ src: graphql, alt: "GraphQL" },
{ src: sqlite, alt: "SQLite" },
{ src: socketio, alt: "Socket.io" },
];

function SkillCard({ src, alt, locked }) {
  return (
    <div className="skill relative ml-6 @[600px]:ml-10 m-6 w-[11vh] h-[11vh]">
      <div className="absolute inset-0 bg-[#fff] blur-md"></div>
      <img
        src={src}
        alt={alt}
        className="absolute h-[11vh] w-[11vh] object-scale-down rounded-lg @[1000px]:rounded-xl @[1100px]:rounded-3xl bg-[#36454F] p-3"
      />
      {locked && <img src={lock} alt="locked" className="absolute z-10" />}
    </div>
  );
}

const softSkills = [
  { label: "Problem-Solving", detail: "Debugging is genuinely fun. I like understanding why something breaks, not just making the error go away." },
  { label: "Communication", detail: "I can explain technical things to non-technical people without losing them or being condescending about it." },
  { label: "Teamwork", detail: "Group projects, internships — I know when to take initiative and when to step back and listen." },
  { label: "Adaptability", detail: "I pick up new tools fast. Usually I just build something with them." },
  { label: "Time Management", detail: "I know what needs to be done first and what can wait. I don't need micromanaging." },
];

export default function Skills() {
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

            <div className="text-center font-semibold m-4 @[200px]:text-[20px] @[700px]:text-[25px] @[900px]:text-3xl @[1000px]:text-4xl">
              SKILLS
            </div>
            <hr className="mt-2 mb-6 border-[#A9A9A9]" />

            <div className="font-semibold ml-2 @[200px]:ml-10 @[700px]:ml-20 m-4 @[200px]:text-[15px] @[700px]:text-[18px] @[900px]:text-xl @[1050px]:text-2xl text-[#A9A9A9]">
              Learned
            </div>
            <div className="flex flex-wrap pl-8 @[700px]:pl-10">
              {learned.map((s) => (
                <SkillCard key={s.alt} src={s.src} alt={s.alt} locked={false} />
              ))}
            </div>

            <div className="font-semibold ml-2 @[200px]:ml-10 @[700px]:ml-20 mt-8 m-4 @[200px]:text-[15px] @[700px]:text-[18px] @[900px]:text-xl @[1050px]:text-2xl text-[#A9A9A9]">
              Want to learn
            </div>
            <div className="flex flex-wrap pl-8 @[700px]:pl-10">
              {aspiring.map((s) => (
                <SkillCard key={s.alt} src={s.src} alt={s.alt} locked={true} />
              ))}
            </div>

            <hr className="mt-10 mb-6 border-[#A9A9A9]" />

            <div className="font-semibold ml-2 @[200px]:ml-10 @[700px]:ml-20 m-4 @[200px]:text-[20px] @[700px]:text-[25px] @[900px]:text-3xl @[1000px]:text-4xl">
              Soft Skills
            </div>
            <ul className="mt-4 ml-[3vh] mr-[8vh] @[700px]:ml-[11vh] @[700px]:mr-[18vh] space-y-5 mb-10">
              {softSkills.map((s) => (
                <li key={s.label} className="text-[14px] @[500px]:text-[16px] @[700px]:text-[18px] @[900px]:text-[20px]">
                  <strong>{s.label}:</strong> {s.detail}
                </li>
              ))}
            </ul>

          </div>
        </main>
      </div>
    </>
  );
}
