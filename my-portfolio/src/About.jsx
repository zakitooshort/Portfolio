import SidePanel from "./SidePanel";
import uni from "./assets/uni.jpg";
import kanye from "./assets/kanye.jpg";
import halo from "./assets/halo.jpg";
import assassin from "./assets/assassin.jpg";
import bo1 from "./assets/bo1.jpg";
import noodles from "./assets/noodles.jpg";
import beach from "./assets/beach.jpg";
import out from "./assets/out.jpg";


export default function About() {
  return (
    <>   
    <div className="divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414]">
      <SidePanel/>
      <main className="flex-1 space-6 text-white overflow-y-auto">
        <p className="leading-[4rem] ml-10 mt-16 mr-[38vh] text-5xl font-bold">ZAKI might not reach the top shelf but he’ll help you reach your goals </p>
        <p className="leading-[4rem] ml-10 mt-6 mr-[33vh] text-5xl font-medium">A Passionate developer amazed by the endless possibilities of technology and programming,
         currently on a journey to become a skilled <br />
         full-stack developer. <br />
         With a deep curiosity and a drive to create, he’s eager to learn, innovate, and contribute to meaningful projects. </p>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink ml-10 mx-4 text-[20px] text-[#A9A9A9] text-gray-400">EDUCATION</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div className="relative flex py-5 items-center">
          <div className="ml-28 flex-grow mb-20">
            <h1 className="text-3xl font-medium">University Of Algiers 1</h1>
            <h2 className="text-3xl font-medium text-[#D3D3D3]" >Computer Sciences</h2>
            <p className="text-[#D3D3D3] text-[18px] mt-4">2022-2025</p>
            <p className="text-[22px] mt-10">Undergraduate Licence CompSci (ISIL)</p>
          </div>
          <div className="w-[40%] mr-20"><img className=" flex-shrink rounded-[25px] h-[45%]" src={uni} alt="university image" /><p className="ml-10 mt-6 text-[#D3D3D3]">Library building </p></div>
         </div>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink ml-10 mx-4 text-[20px] text-[#A9A9A9] text-gray-400">JOURNEY</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div className="mr-20 ml-20">
          <p className=" text-[22px] ">His journey into technology began with a deep curiosity about how programming can shape the world around us. <br />
          Starting with the basics, He quickly became captivated by the endless possibilities of creating impactful solutions through code. <br />
          Currently, He’s exploring full-stack development, focusing on React, Vue.js, Tailwind CSS, Node.js, Express, Django, and PostgreSQL . <br />
          While He hasn’t built a big project yet, He’s actively learning, experimenting, and building smaller applications to strengthen his foundation.
           His journey is defined by curiosity, persistence, and a drive to create meaningful applications that solve real-world problems.</p>
          <br />
          <p className="text-semibold text-[25px]">This portfolio is a snapshot of where he is today, and he’s excited to continue growing and turning his aspirations into reality.</p>
         </div>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink ml-10 mx-4 text-[20px] text-[#A9A9A9] text-gray-400">INSPIRATION</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div className="mr-20 ml-20">
           <p className="text-[24px]">His inspiration comes from a mix of innovation in technology and the boundless creativity of individuals who dare to challenge the status quo. In the tech world, He’s fascinated by how simple ideas evolve into transformative solutions that shape our lives.</p>
           <div className="relative flex py-5 items-center">
          <div className=" flex-grow mb-20">
            <p className=" text-[24px] mt-4">Beyond technology, He’s deeply inspired by Kanye West , whose relentless <br />
               pursuit of creativity and excellence reminds him to think boldly, embrace 
                originality, and push boundaries in everything he does. 
                <br /> Ye’s journey serves as a reminder that passion and vision can drive extraordinary achievements.</p>
            <p className="text-[24px] italic mt-10 text-[#F5F5F5]">“Now i can let these dream killers kill my self esteem <br /> or use my arrogance as a steam to power my dreams” -Ye</p>
          </div>
          <div className="w-[40%] mr-20"><img className=" flex-shrink rounded-[25px]" src={kanye} alt="university image" /></div>
         </div>
         </div>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink ml-10 mx-4 text-[20px] text-[#A9A9A9] text-gray-400">THINGS I LOVE TO DO</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div>
          <p className="ml-10 mr-[30vh] text-[26px] text-semibold">When I’m not coding, I enjoy hanging out with my friends. I also love playing video games, which inspire me with their design and mechanics, and exploring new technologies. These hobbies, along with researching innovative ideas online, keep me motivated and curious.</p>
         </div>
         <div><p className="ml-12 mt-10 text-xl text-[#A9A9A9]">Going out with friends</p>
          <div className="mt-5 flex space-x-4">
            <div className="flex-1"><img className="ml-20 w-[40vh]  object-scale-down rounded-[25px]" src={noodles} alt="noodles" /><p className="ml-28 mt-2">Eating</p>  </div>
            <div className="flex-1"><img className="ml-12 w-[40vh]  object-scale-down rounded-[25px]" src={out} alt="going out" /><p className="ml-20 mt-2">Having fun</p></div>
            <div className="flex-1"><img className="w-[40vh]  object-scale-down rounded-[25px]" src={beach} alt="beach" /><p className="ml-10 mt-2">Visiting the beach</p></div>
          </div>
         </div>
         <div><p className="ml-12 mt-10 text-xl text-[#A9A9A9]">Fav video game series:</p>
          <div className="mt-5 flex space-x-4">
            <div className="flex-1"><img className="ml-20 h-[70%]  object-scale-down rounded-[25px]" src={bo1} alt="call of duty black ops 1" /><p className="ml-28">Call Of Duty Black Ops Zombies</p>  </div>
            <div className="flex-1"><img className="ml-12 h-[70%]  object-scale-down rounded-[25px]" src={assassin} alt="Assassin's creed" /><p className="ml-20">Assassin's Creed</p></div>
            <div className="flex-1"><img className="h-[70%]  object-scale-down rounded-[25px]" src={halo} alt="Halo" /><p className="ml-10">Halo series </p></div>
          </div>
         </div>
      </main>
    </div>
   </>
  )
}