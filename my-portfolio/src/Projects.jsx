import SidePanel from "./SidePanel";
import Carousel from "./Carousel.jsx";
import MobileNavbar from "./MobileNavbar";
import ss1 from "./assets/ss1.png";
import ss2 from "./assets/ss2.png";
import ss3 from "./assets/ss3.png";
import ss4 from "./assets/ss4.png";

const slides=[
  ss1,ss2,ss3,ss4,
]

export default function Projects() {
  return (
    <>   
      <div className="@[800px]:divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414] @container">
      <aside className="hidden @[800px]:block sticky w-1/5 text-white space--4 top-0 h-100% sidepanel ">
      <SidePanel/></aside>
      <nav className="block @[800px]:hidden">
        <MobileNavbar />
      </nav>
        <main className="flex-1 text-white overflow-y-auto">
          <div className="@container">
          <div className="mt-4"></div>
        <span class="flex-shrink text-bold ml-10 mx-4 text-3xl ">Completed Projects</span>
        <div class="flex-grow border-t-[3px] "></div>
          <div className="flex min-w-[60vh] gap-8 pt-10 pr-10 pl-10 mb-10 flex-wrap @[1250px]:flex-nowrap ">
            
            <div className="@[1250px]:w-3/5 w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-2xl font-bold mb-2">My Personal Portfolio</h2>
              <p className="text-gray-300 mb-4 max-h-[110px] overflow-y-auto [&::-webkit-scrollbar]:w-[5px]
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-[#454545]
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
                This portfolio is a creative and personal showcase of my journey as a developer.
                Built with React and styled using Tailwind CSS, it represents my evolving skills and interests in development.
                It features thoughtful sections such as "About Me," "Ideas," and "Thoughts," where I share my projects, 
                inspirations, and personal reflections.
                It’s a personal space where I express my love for technology, design, and creativity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                  React
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                  Tailwind CSS
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                 Vite 
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                  Email js
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                  DayJS 
                </button>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/zakitooshort/Portfolio/tree/main" target="_blank" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Source Code</a>
              </div>
            </div>
            <div className="@[1250px]:w-3/5   @[1110px]:ml-[20%] @[1250px]:ml-0 overflow-auto max-w-[60vh] max-h-[600px] flex justify-center items-center">
            <div className="border p-4 rounded-lg shadow-lg w-[60vh]">
            <div className="max-w-lg">
              <Carousel>
                {slides.map((s)=>(
                  <img src={s}/>
                ))}
              </Carousel>
            </div>
            </div>
            </div>

          </div>
          
        <span class="flex-shrink text-bold ml-10 mx-4 text-3xl">In Progress Projects</span>
        <div class="flex-grow border-t-[3px] "></div>
          <div className="flex flex-wrap md:flex-nowrap gap-8 p-10">
            
            <div className=" w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-2xl font-bold mb-2">Minesweeper Game with AI Solver</h2>
              <p className="text-gray-300 mb-4">
                This portfolio is a creative and personal showcase of my journey as a developer.
                Built with React and styled using Tailwind CSS, it represents my evolving skills and interests in development.
                It features thoughtful sections such as "About Me," "Ideas," and "Thoughts," where I share my projects, 
                inspirations, and personal reflections.
                It’s a personal space where I express my love for technology, design, and creativity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                 Python
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                Pygame
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1">
                NEAT 
                </button>
                
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/zakitooshort/minesweeper-Ai-Solver" target="_blank" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Source Code</a>
              </div>
            </div>

            

          </div>
          </div>
        </main>
      </div>
    </>
  )
}
