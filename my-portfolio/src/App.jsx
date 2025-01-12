import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import SidePanel from "./SidePanel";
import TooltipCursor from "./TooltipCursor";
import dayjs from 'dayjs';
import cat1 from "./assets/cat1.jpg";
import cat2 from "./assets/cat2.jpg";
import cat3 from "./assets/cat3.jpg";
import cat4 from "./assets/cat4.jpg";
import cat5 from "./assets/cat5.jpg";
import cat6 from "./assets/cat6.jpg";
import cat7 from "./assets/cat7.jpg";
import cat8 from "./assets/cat8.jpg";
import cat9 from "./assets/cat9.jpg";


export default function App() {
  
  const now = dayjs();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  return (
    <>
    
    <div className="divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414]">
      <SidePanel/>
      <main className="flex-1 space-6 text-white overflow-y-auto">
        <div className="flex">
        <p className="flex-1 w-64  pt-6 pl-6 text-xl font-medium">Hello there , السلام عليكم</p>
        <p className="flex-initial pt-6 mr-14  text-xl font-medium text-align-center">{now.format('dddd')} {now.format('MMMM D, YYYY')} {currentTime.toLocaleTimeString()}</p>
        </div>
        <div>
          <h1 className="font-bold text-7xl pt-10 pl-[21vh]">OUZAI</h1>
          <h1 className="font-bold text-6xl pt-2 pl-[34vh]">MOHAMED</h1>
          <h1 className="font-bold text-6xl pt-2 pl-[48vh]">ZAKARIA</h1>
          <hr class="border-[#A9A9A9] mt-10"/>
        </div>
        <div>
          <p className="font-medium text-[22px] pt-10 pl-[11vh] pr-[18vh]">Welcome to his personal portfolio. This is where he shares his journey as a developer, his learning experiences, and the skills he’s working to master.</p>
          <p className="font-medium text-[22px] pt-10 pl-[11vh] pr-[18vh]">This portfolio is just the beginning stay tuned as he continues to work on new projects and expand his skills.</p>
          <p className="text-[22px] text-gray-500 italic  pt-6 pl-[11vh] pr-[18vh]">
            This portfolio is purely personal, created for self-expression. I'm not looking for job opportunities at this time.
          </p>
          <hr class="border-[#A9A9A9] mt-10"/>
        </div>
        <div>
          
          <div>
          <div><h1 className="font-semibold text-[34px] pt-10 pl-[11vh]">Thoughts</h1>
          <h2 className="font-medium text-[28px] pt-10 pl-[11vh]">unfiltered thoughts, opinions, and ideas about the world around me</h2>
          <p className="font-medium text-[#999999] italic text-[26px] pt-10 pl-[11vh]">-“The Intersection of Art and Technology: Where I See Myself Fitting In”</p>
          <p className="font-medium text-[22px] pt-10 pl-[11vh] pr-[11vh]">Art and technology have always been two sides of the same coin for me both driven by creativity, innovation, and the ability to evoke emotion.
            <br /> <br />At their intersection lies a space where logic meets imagination, and that's where I see myself.
            <br /> <br />In this intersection, I find inspiration, purpose, and an infinite playground for innovation. It’s a space where every line of code has the potential to tell a story, evoke emotion, or inspire others to dream big.</p>
          </div>
          <p className="font-medium text-[#999999] italic text-[26px] pt-10 pl-[11vh]">-”Why I Believe Simplicity is the Ultimate Sophistication in Design”</p>
          <p className="font-medium text-[22px] pt-10 pl-[11vh] pr-[11vh]">In a world filled with constant noise and complexity, simplicity stands out as a breath of fresh air. To me, simplicity <br />
            in design isn’t about doing less it’s about doing more with less. It’s about clarity, focus, and the ability to communicate purpose without unnecessary distractions.<br /> <br />
            simplicity isn’t about what you remove it’s about what you leave behind. And that, to me, is the ultimate sophistication.
          </p>
          <p className="font-medium text-[#999999] italic text-[26px] pt-10 pl-[11vh]">-”Cherish Those Close to You”</p>
          <p className="font-medium text-[22px] pt-10 pl-[11vh] pr-[11vh]">
          Life has a way of reminding us just how precious the people we care about are.
          <br /><br />There’s someone in my life who has shown me the value of presence, kindness, and genuine connection.
          <br />Their influence has shaped how I see the world and taught me to appreciate the relationships that truly matter.
          <br /><br />
          We often get caught up in the rush of daily life, assuming that there will always be time to express our gratitude or share meaningful moments. But the truth is, time is never guaranteed.
          <br /><br /> It’s the small things a smile, a conversation, a shared memory that create the bonds we hold dear.
          So, take a moment to cherish the people close to you. Tell them how much they mean to you, listen to them, and show them your appreciation.
          <br /><br /> These connections are what make life rich and fulfilling. In the end, it’s the love and care we give to those around us that define the moments we treasure the most.
          </p>
          </div>
          <hr class="border-[#A9A9A9] mt-10"/>
          <div >
          <h1 className="font-semibold text-3xl pt-10 pl-[11vh]">My CATS!</h1>
          
          <div>
                    <div className="mt-10 flex  justify-center space-x-10 ">
                    
                      <div className="flex  ">
                      <TooltipCursor content="PET!">
                        <img className=" w-[30.5vh] rounded  object-scale-down " src={cat1} alt="" />
                        </TooltipCursor> </div>
                      <div className="flex"><TooltipCursor content="PET!">
                        <img className="w-[33vh] rounded  object-scale-down" src={cat6} alt="Halo" />
                        </TooltipCursor></div>
                        <div className="flex rounded"> <TooltipCursor content="PET!">
                        <img className="w-[30.5vh] rounded object-scale-down " src={cat5} alt="Halo" /></TooltipCursor></div>
                      <div className="flex "><TooltipCursor content="PET!">
                        <img className=" w-[30.5vh] rounded object-scale-down " src={cat2} alt="" /></TooltipCursor></div>
                    </div>
                   
           </div>
                   
         <hr class="border-[#A9A9A9] mt-10"/>
        </div>
          <ContactForm />
        </div>
      </main>
    </div>
   
   </>
  )
}