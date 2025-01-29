import SidePanel from "./SidePanel";
import Carousel from "./Carousel.jsx";
import MobileNavbar from "./MobileNavbar";
import ss1 from "./assets/ss1.png";
import ss2 from "./assets/ss2.png";
import ss3 from "./assets/ss3.png";
import ss4 from "./assets/ss4.png";
import ss5 from "./assets/ss5.jpg";
import ss6 from "./assets/ss6.jpg";

const slides=[
  ss1,ss2,ss3,ss4,
]
const slides2=[
  ss6,ss5,
]

export default function Projects() {
  return (
    <>   
      <div className="@[800px]:divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414] @container">
      <aside className="hidden @[800px]:block sticky w-1/5 text-white space--4 top-0 h-100% sidepanelmother ">
      <SidePanel/></aside>
      <nav className="block @[800px]:hidden">
        <MobileNavbar />
      </nav>
        <main className="flex-1 text-white overflow-y-auto">
          <div className="@container">
          <div className="mt-12 @[1000px]:mt-6"></div>
        <span class="flex-shrink text-bold ml-10  mx-4 text-[18px] @[500px]:text-[20px] @[600px]:text-2xl @[700px]:text-3xl ">Completed Projects</span>
        <div class="flex-grow border-t-[3px] mt-2"></div>
          <div className="flex gap-8 pt-10 pr-10 pl-10 mb-10 flex-wrap @[1250px]:flex-nowrap ">
            
            <div className="@[1250px]:w-3/5 w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-[16px] @[500px]:text-[18px] @[600px]:text-[20px] @[700px]:text-2xl font-bold mb-2">My Personal Portfolio</h2>
              <p className="text-gray-300 mb-4 max-h-[110px] overflow-y-auto [&::-webkit-scrollbar]:w-[5px]
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-[#454545]
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                This portfolio is a creative and personal showcase of my journey as a developer.
                Built with React and styled using Tailwind CSS, it represents my evolving skills and interests in development.
                It features thoughtful sections such as "About Me," "Ideas," and "Thoughts," where I share my projects, 
                inspirations, and personal reflections.
                It’s a personal space where I express my love for technology, design, and creativity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  React
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  Tailwind CSS
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                 Vite 
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  Email js
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  DayJS 
                </button>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/zakitooshort/Portfolio/tree/main" target="_blank" className="text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px] bg-gray-500 text-white px-2 py-1 @[500px]:px-4 @[500px]:py-2 rounded-md hover:bg-gray-600">Source Code</a>
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
          <div class="flex-grow border-t-[3px] mt-2"></div>
          <div className="flex gap-8 pt-10 pr-10 pl-10 mb-10 flex-wrap @[1250px]:flex-nowrap ">
            
            <div className="@[1250px]:w-3/5 w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-[16px] @[500px]:text-[18px] @[600px]:text-[20px] @[700px]:text-2xl font-bold mb-2">Cloud-Based File Management System</h2>
              <p className="text-gray-300 mb-4 max-h-[110px] overflow-y-auto [&::-webkit-scrollbar]:w-[5px]
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-[#454545]
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                This project is a cloud-based file management system that allows users to upload, download, and manage their files securely. Users can register, log in, and access their uploaded files, which are stored in the cloud using Cloudinary. The application ensures that each user can only access their own files, providing a personalized and secure experience. Key features include file upload, file download, file deletion, and a user-friendly interface built with React and Flask
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  React
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  TypeScript
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                 Vite 
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  Axios
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  Flask 
                </button>
                
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  Cloudinary
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  SQLite
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                  Flask-JWT
                </button>
                
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/zakitooshort/Cloud-File-Storage-System" target="_blank" className="text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px] bg-gray-500 text-white px-2 py-1 @[500px]:px-4 @[500px]:py-2 rounded-md hover:bg-gray-600">Source Code</a>
              </div>
            </div>
            <div className="@[1250px]:w-3/5   @[1110px]:ml-[20%] @[1250px]:ml-0 overflow-auto max-w-[60vh] max-h-[600px] flex justify-center items-center">
            <div className="border p-4 rounded-lg shadow-lg w-[60vh]">
            <div className="max-w-lg p-2">
              <Carousel>
                {slides2.map((s)=>(
                  <img src={s}/>
                ))}
              </Carousel>
            </div>
            </div>
            </div>

          </div>
          
        <span class="flex-shrink text-bold ml-10 mx-4  text-[18px] @[500px]:text-[20px] @[600px]:text-2xl @[700px]:text-3xl ">In Progress Projects</span>
        <div class="flex-grow border-t-[3px] mt-4"></div>
          <div className="flex flex-wrap md:flex-nowrap gap-8 p-10">
            
            <div className=" w-full border p-4 rounded-lg shadow-lg overflow-auto max-h-[600px]">
              <h2 className="text-2xl font-bold mb-2 text-[16px] @[500px]:text-[18px] @[600px]:text-[20px] @[700px]:text-2xl">Minesweeper Game with AI Solver</h2>
              <p className="text-gray-300 mb-4 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
              This project combines the classic Minesweeper game with an AI powered by the NEAT algorithm. The AI learns and improves its strategies, identifying patterns and solving the game intelligently. It's a blend of game development and machine learning in action.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                 Python
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                Pygame
                </button>
                <button className="border-[#A9A9A9] rounded-full border-2 px-2 py-1 text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px]">
                NEAT 
                </button>
                
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/zakitooshort/minesweeper-Ai-Solver" target="_blank" className="text-white text-[12px] @[500px]:text-[14px] @[600px]:text-[16px] @[700px]:text-[18px] bg-gray-500 text-white px-2 py-1 @[500px]:px-4 @[500px]:py-2  rounded-md hover:bg-gray-600">Source Code</a>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  )
}
