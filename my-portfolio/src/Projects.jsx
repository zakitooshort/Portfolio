import SidePanel from "./SidePanel";

export default function Projects() {
  return (
    <>   
      <div className="divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414]">
        <SidePanel/>
        <main className="flex-1 text-white overflow-y-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-8 pt-10 pr-10 pl-10">
            
            <div className="md:w-1/2 w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-2xl font-bold mb-2">My Personal Portfolio</h2>
              <p className="text-gray-300 mb-4">
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
                <a href="#" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Source Code</a>
              </div>
            </div>

            <div className="md:w-1/2 w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-xl font-bold mb-4">Project Previews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="/path/to/your/image1.jpg" alt="Preview 1" className="w-full h-auto rounded-lg" />
                <img src="/path/to/your/image2.jpg" alt="Preview 2" className="w-full h-auto rounded-lg" />
                <img src="/path/to/your/image3.jpg" alt="Preview 3" className="w-full h-auto rounded-lg" />
              </div>
            </div>

          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-8 p-10">
            
            <div className="md:w-1/2 w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
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
                <a href="#" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Source Code</a>
              </div>
            </div>

            <div className="md:w-1/2 w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-xl font-bold mb-4">Project Previews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="/path/to/your/image1.jpg" alt="Preview 1" className="w-full h-auto rounded-lg" />
                <img src="/path/to/your/image2.jpg" alt="Preview 2" className="w-full h-auto rounded-lg" />
                <img src="/path/to/your/image3.jpg" alt="Preview 3" className="w-full h-auto rounded-lg" />
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}
