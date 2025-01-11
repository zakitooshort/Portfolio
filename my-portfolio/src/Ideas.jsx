import SidePanel from "./SidePanel";
import React, { useState } from "react";
import idea1 from "./assets/idea1.png";
import idea2 from "./assets/idea2.png";
import idea3 from "./assets/idea3.png";
import idea4 from "./assets/idea4.png";
import idea5 from "./assets/idea5.png";
import idea6 from "./assets/idea6.jpg";


export default function Ideas() {

  const [modal1, setModal1] = useState(false);
  const toggleModal1 = () => {
    setModal1(!modal1);
  }
  const [modal2, setModal2] = useState(false);
  const toggleModal2 = () => {
    setModal2(!modal2);
  }
  const [modal3, setModal3] = useState(false);
  const toggleModal3 = () => {
    setModal3(!modal3);
  }
  const [modal4, setModal4] = useState(false);
  const toggleModal4 = () => {
    setModal4(!modal4);
  }
  const [modal5, setModal5] = useState(false);
  const toggleModal5 = () => {
    setModal5(!modal5);
  }
  const [modal6, setModal6] = useState(false);
  const toggleModal6 = () => {
    setModal6(!modal6);
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
            <img src={idea1} alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline" onClick={toggleModal1}>Read More</button>
            
          </div>
          {modal1 && (
            <div className="modal w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 ">
              <div onClick={toggleModal1} className="w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 bg-[#A9A9A9] opacity-50"></div>
              <div className="p-4 modal-content absolute top-[8%] left-[25%] bg-[#1f1f1f] max-h-[80vh] h-[55vh] max-w-[100vh] w-[100vh]">
                <div className="text-4xl ml-1">Emotion-Mirroring Mirror</div>
                <div className=" ml-2 mt-4 text-2xl"><strong>Detailed Description: <br /></strong>
                 This concept involves using facial recognition and emotion detection to animate an avatar that mirrors your mood. Imagine a digital reflection that not only shows your face but expresses how you feel in a creative and surreal way. The avatar could change colors, shapes, or even environments based on your emotions.
                </div><br />
                <div className=" ml-2 text-2xl"><strong>
                 Potential Technologies: <br /></strong>
                 <strong>TensorFlow.js</strong> for emotion detection. <br />
                 <strong>Three.js or p5.js</strong> for dynamic avatar rendering. <br />
                 <strong>WebRTC</strong> for accessing the webcam.</div>
                <button className=" bg-[#313131] rounded pl-2 pr-2 pt-1 pb-1  ml-2 mt-10 text-xl text-semibold" onClick={toggleModal1}>close</button>
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
            <img src={idea2} alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline" onClick={toggleModal2} >Read More</button>
          </div>
          {modal2 && (
            <div className="modal w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 ">
              <div onClick={toggleModal2} className="w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 bg-[#A9A9A9] opacity-50"></div>
              <div className="p-4 modal-content absolute top-[8%] left-[25%] bg-[#1f1f1f] max-h-[80vh] h-[55vh] max-w-[100vh] w-[100vh]">
                <div className="text-4xl ml-1">Reverse To-Do List</div>
                <div className=" ml-2 mt-4 text-2xl"><strong>Detailed Description: <br /></strong>
                Instead of listing tasks you need to do, this app lets you list tasks you’ve already completed. It’s a great way to motivate yourself by focusing on accomplishments rather than obligations.
                </div><br />
                <div className=" ml-2 text-2xl"><strong>
                 Potential Technologies: <br /></strong>
                 <strong>React</strong> Frontend. <br />
                 <strong>Tailwind</strong> fStyling. <br />
                 <strong>Node.js</strong> Backend. <br />
                 <strong>MongoDB or Firebase</strong> Database.</div>
                <button className=" bg-[#313131] rounded pl-2 pr-2 pt-1 pb-1  ml-2 mt-10 text-xl text-semibold" onClick={toggleModal2}>close</button>
              </div>
               
            </div>
            )}
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
            <img src={idea3} alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline"  onClick={toggleModal3}>Read More</button>
          </div>
          {modal3 && (
            <div className="modal w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 ">
              <div onClick={toggleModal3} className="w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 bg-[#A9A9A9] opacity-50"></div>
              <div className="p-4 modal-content absolute top-[8%] left-[25%] bg-[#1f1f1f] max-h-[80vh] h-[55vh] max-w-[100vh] w-[100vh]">
                <div className="text-4xl ml-1">Emzzzzz</div>
                <div className=" ml-2 mt-4 text-2xl"><strong>Detailed Description: <br /></strong>
                 This concept involves using facial recognition and emotion detection to animate an avatar that mirrors your mood. Imagine a digital reflection that not only shows your face but expresses how you feel in a creative and surreal way. The avatar could change colors, shapes, or even environments based on your emotions.
                </div><br />
                <div className=" ml-2 text-2xl"><strong>
                 Potential Technologies: <br /></strong>
                 <strong>TensorFlow.js</strong> for emotion detection. <br />
                 <strong>Three.js or p5.js</strong> for dynamic avatar rendering. <br />
                 <strong>WebRTC</strong> for accessing the webcam.</div>
                <button className=" bg-[#313131] rounded pl-2 pr-2 pt-1 pb-1  ml-2 mt-10 text-xl text-semibold" onClick={toggleModal3}>close</button>
              </div>
               
            </div>
            )}
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
            <img src={idea4} alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline" onClick={toggleModal4}>Read More</button>
          </div>
          {modal4 && (
            <div className="modal w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 ">
              <div onClick={toggleModal4} className="w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 bg-[#A9A9A9] opacity-50"></div>
              <div className="p-4 modal-content absolute top-[8%] left-[25%] bg-[#1f1f1f] max-h-[80vh] h-[55vh] max-w-[100vh] w-[100vh]">
                <div className="text-4xl ml-1">Emzzzzz</div>
                <div className=" ml-2 mt-4 text-2xl"><strong>Detailed Description: <br /></strong>
                 This concept involves using facial recognition and emotion detection to animate an avatar that mirrors your mood. Imagine a digital reflection that not only shows your face but expresses how you feel in a creative and surreal way. The avatar could change colors, shapes, or even environments based on your emotions.
                </div><br />
                <div className=" ml-2 text-2xl"><strong>
                 Potential Technologies: <br /></strong>
                 <strong>TensorFlow.js</strong> for emotion detection. <br />
                 <strong>Three.js or p5.js</strong> for dynamic avatar rendering. <br />
                 <strong>WebRTC</strong> for accessing the webcam.</div>
                <button className=" bg-[#313131] rounded pl-2 pr-2 pt-1 pb-1  ml-2 mt-10 text-xl text-semibold" onClick={toggleModal4}>close</button>
              </div>
               
            </div>
            )}
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
            <img src={idea5} alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline" onClick={toggleModal5}>Read More</button>
          </div>
          {modal5 && (
            <div className="modal w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 ">
              <div onClick={toggleModal5} className="w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 bg-[#A9A9A9] opacity-50"></div>
              <div className="p-4 modal-content absolute top-[8%] left-[25%] bg-[#1f1f1f] max-h-[80vh] h-[55vh] max-w-[100vh] w-[100vh]">
                <div className="text-4xl ml-1">Emzzzzz</div>
                <div className=" ml-2 mt-4 text-2xl"><strong>Detailed Description: <br /></strong>
                 This concept involves using facial recognition and emotion detection to animate an avatar that mirrors your mood. Imagine a digital reflection that not only shows your face but expresses how you feel in a creative and surreal way. The avatar could change colors, shapes, or even environments based on your emotions.
                </div><br />
                <div className=" ml-2 text-2xl"><strong>
                 Potential Technologies: <br /></strong>
                 <strong>TensorFlow.js</strong> for emotion detection. <br />
                 <strong>Three.js or p5.js</strong> for dynamic avatar rendering. <br />
                 <strong>WebRTC</strong> for accessing the webcam.</div>
                <button className=" bg-[#313131] rounded pl-2 pr-2 pt-1 pb-1  ml-2 mt-10 text-xl text-semibold" onClick={toggleModal5}>close</button>
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
            <h2 class="text-2xl font-semibold">Real-Time Mood Chat</h2>
            <p class="text-gray-600 mt-3">
            A chat app where your avatar and the chat background change in real time based on your mood. Users can see each other’s “emotional states” and respond accordingly.</p>
            <img src={idea6} alt="Prototype Image" class="mt-4 rounded-lg" />
            <button class="mt-4 text-blue-500 hover:underline" onClick={toggleModal6}>Read More</button>
          </div>
          {modal6 && (
            <div className="modal w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 ">
              <div onClick={toggleModal6} className="w-[100vw] h-[100vh] fixed right-0 left-0 top-0 bottom-0 bg-[#A9A9A9] opacity-50"></div>
              <div className="p-4 modal-content absolute top-[8%] left-[25%] bg-[#1f1f1f] max-h-[80vh] h-[55vh] max-w-[100vh] w-[100vh]">
                <div className="text-4xl ml-1">Emzzzzz</div>
                <div className=" ml-2 mt-4 text-2xl"><strong>Detailed Description: <br /></strong>
                 This concept involves using facial recognition and emotion detection to animate an avatar that mirrors your mood. Imagine a digital reflection that not only shows your face but expresses how you feel in a creative and surreal way. The avatar could change colors, shapes, or even environments based on your emotions.
                </div><br />
                <div className=" ml-2 text-2xl"><strong>
                 Potential Technologies: <br /></strong>
                 <strong>TensorFlow.js</strong> for emotion detection. <br />
                 <strong>Three.js or p5.js</strong> for dynamic avatar rendering. <br />
                 <strong>WebRTC</strong> for accessing the webcam.</div>
                <button className=" bg-[#313131] rounded pl-2 pr-2 pt-1 pb-1  ml-2 mt-10 text-xl text-semibold" onClick={toggleModal6}>close</button>
              </div>
               
            </div>
            )}
        </div>
      </main>
    </div>
   </>
  )
}