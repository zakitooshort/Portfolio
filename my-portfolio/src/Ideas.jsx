import SidePanel from "./SidePanel";
import React, { useState } from "react"


export default function Ideas() {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  
  return (
    <>   
    <div className="divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414]">
      <SidePanel/>
      <main className="flex-1 space-6 text-white overflow-y-auto">
      <div class="relative flex py-5 items-center">
          <span class="flex-shrink text-semibold ml-10 mx-4 text-4xl">IDEAS</span>
          <div class="flex-grow border-t-[3px] "></div>
         </div>
         <div class="flex items-center justify-between space-x-4 m-12 ">
          <div class="flex-1 p-6 border border-gray-300 shadow-lg overflow-y-auto
           [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-500 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 max-h-96 h-96 ">
            <h2 class="text-2xl font-semibold">Emotion-Mirroring Mirror</h2>
            <p class="text-gray-600 mt-3">
            A virtual mirror that uses your webcam to detect your emotions and display an avatar that mirrors your mood in a surreal, animated way.
            </p>
            <img src="https://via.placeholder.com/400" alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline" onClick={toggleModal}>Read More</button>
            
          </div>
          {modal && (
            <div className="modal w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 ">
              <div onClick={toggleModal} className="w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 bg-[#A9A9A9] opacity-50"></div>
              <div className="modal-content absolute top-[20%] left-[25%] bg-[#1f1f1f] max-h-[100vh] h-[100vh] max-w-[100vh] w-[100vh]">
                Content modal <h2>ZAKI</h2>
                <button className="closeModal" onClick={toggleModal}>close</button>
              </div>
               
            </div>
            )}

          <div class="w-px  bg-gray-300"></div>

          <div class="flex-1 p-6 border border-gray-300 shadow-lg max-h-96 h-96 overflow-y-auto
           [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-500
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <h2 class="text-2xl font-semibold">Reverse Todo List</h2>
            <p class="text-gray-600 mt-3">
            A todo list where instead of listing things to do, you list things you've already done. Over time, it visualizes your accomplishments and progress, helping to boost motivation.
            </p>
            <img src="https://via.placeholder.com/400" alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>
        </div>
        
         <div class="flex items-center justify-between space-x-4 m-12 ">
          <div class="flex-1 p-6 border border-gray-300 shadow-lg overflow-y-auto
           [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-500
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 max-h-96 h-96">
            <h2 class="text-2xl font-semibold">Dynamic Debate Platform</h2>
            <p class="text-gray-600 mt-3">
            A debate platform where AI generates opposing arguments based on user input, helping people strengthen their opinions or see things from a different perspective.
            </p>
            <img src="https://via.placeholder.com/400" alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>

          <div class="w-px h-full bg-gray-300"></div>

          <div class="flex-1 p-6 border border-gray-300 shadow-lg max-h-96 h-96 overflow-y-auto
           [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-500
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <h2 class="text-2xl font-semibold">Personal Time Capsule</h2>
            <p class="text-gray-600 mt-3">
            A digital time capsule where you can store messages, files, or even recorded videos to be sent to your future self on a chosen date. Bonus: You could add AR visuals when you open it!</p>
            <img src="https://via.placeholder.com/400" alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>
        </div>
        <div class="flex items-center justify-between space-x-4 m-12 ">
          <div class="flex-1 p-6 border border-gray-300 shadow-lg overflow-y-auto
           [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-500
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 max-h-96 h-96">
            <h2 class="text-2xl font-semibold">Memory-Augmenting Journal</h2>
            <p class="text-gray-600 mt-3">
            A journal app that uses AI to analyze your entries and suggest things you might want to remember later, like special moments or recurring thoughts. It could even generate poetic summaries of your life over time.</p>
            <img src="https://via.placeholder.com/400" alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>

          <div class="w-px  bg-gray-300"></div>

          <div class="flex-1 p-6 border border-gray-300 shadow-lg max-h-96 h-96 overflow-y-auto
           [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-500
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
               dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <h2 class="text-2xl font-semibold">Real-Time Mood Chat</h2>
            <p class="text-gray-600 mt-3">
            A chat app where your avatar and the chat background change in real time based on your mood. Users can see each other’s “emotional states” and respond accordingly.</p>
            <img src="https://via.placeholder.com/400" alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline">Read More</button>
          </div>
        </div>
      </main>
    </div>
   </>
  )
}