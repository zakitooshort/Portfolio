import SidePanel from "./SidePanel";
import uni from "./assets/uni.jpg";
import kanye from "./assets/kanye.jpg";
import halo from "./assets/halo.jpg";
import assassin from "./assets/assassin.jpg";
import bo1 from "./assets/bo1.jpg";
import noodles from "./assets/noodles.jpg";
import beach from "./assets/beach.jpg";
import out from "./assets/out.jpg";
import MobileNavbar from "./MobileNavbar";


export default function About() {
  return (
    <>   
    <div className="@[800px]:divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414] @container">
    <aside className="hidden @[800px]:block sticky w-1/5 text-white space--4 top-0 h-100% sidepanelmother ">
    <SidePanel/></aside>
    <nav className="block @[800px]:hidden">
        <MobileNavbar />
      </nav>
      <main className="flex-1 space-6 text-white overflow-y-auto">
        <div className="@container">
        <p className=" ml-10 mt-16 @[900px]:mt-16 mr-[10%] @[900px]:mr-[25%] text-lg @[400px]:text-xl @[550px]:text-2xl @[600px]:text-3xl @[900px]:text-4xl @[1200px]:text-5xl font-bold">ZAKI might not reach the top shelf but he’ll help you reach your goals </p>
        <p className=" ml-10 mt-6 @[900px]:mt-6 mr-[10%] @[900px]:mr-[15%] text-lg @[400px]:text-xl @[550px]:text-2xl @[600px]:text-3xl @[900px]:text-4xl @[1200px]:text-5xl font-medium">A Passionate developer amazed by the endless possibilities of technology and programming,
         currently on a journey to become a skilled software engineer. <br />
         With a deep curiosity and a drive to create, he’s eager to learn, innovate, and contribute to meaningful projects. </p>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink @[900px]:ml-10 mx-2 @[900px]:mx-4 @[600px]:text-[16px] @[900px]:text-[18px] @[1200px]:text-[20px] text-[#A9A9A9] text-gray-400">EDUCATION</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div className="relative @[550px]:flex @[900px]:py-5 items-center">
          <div className="ml-10 mb-2 @[900px]:ml-28 flex-grow @[900px]:mb-20">
            <h1 className="text-sm @[400px]:text-md @[550px]:text-lg @[600px]:text-xl @[900px]:text-2xl @[1200px]:text-3xl font-medium">University Of Algiers 1</h1>
            <h2 className="text-sm @[400px]:text-md @[550px]:text-lg @[600px]:text-xl @[900px]:text-2xl @[1200px]:text-3xl font-medium text-[#D3D3D3]" >Computer Sciences</h2>
            <p className="text-[#D3D3D3] text-[12px] @[900px]:text-[18px] mt-4">2022-2025</p>
            <p className="text-[12px] @[400px]:text-[14px] @[550px]:text-[16px] @[600px]:text-[18px] @[900px]:text-[20px] @[1200px]:text-[22px] mt-10">Undergraduate Licence CompSci (ISIL)</p>
          </div>
          <div className="@[600px]:w-[60%] w-[70%] ml-[10%] mr-2 @[900px]:mr-20"><img className=" flex-shrink rounded-[25px] h-[60%]" src={uni} alt="university image" /><p className="ml-10 mt-6 text-[12px] @[600px]:text-[14px] @[900px]:text-[16px] @[1200px]:text-[18px] text-[#D3D3D3]">Library building </p></div>
         </div>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink @[900px]:ml-10 mx-2 @[900px]:mx-4 @[600px]:text-[16px] @[900px]:text-[18px] @[1200px]:text-[20px] text-[#A9A9A9] text-gray-400">JOURNEY</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div className="mr-[10%] ml-[10%] @[900px]:mr-20 @[900px]:ml-20">
          <p className=" text-[12px] @[400px]:text-[14px] @[550px]:text-[16px] @[600px]:text-[18px] @[900px]:text-[20px] @[1200px]:text-[22px] ">His journey into technology began with a deep curiosity about how programming can shape the world around us. <br />
          Starting with the basics, He quickly became captivated by the endless possibilities of creating impactful solutions through code. <br />
          Currently, He’s exploring full-stack development, focusing on React, Vue.js, Tailwind CSS, Node.js, Express, Django, and PostgreSQL . <br />
          While He hasn’t built a big project yet, He’s actively learning, experimenting, and building smaller applications to strengthen his foundation.
           His journey is defined by curiosity, persistence, and a drive to create meaningful applications that solve real-world problems.</p>
          <br />
          <p className="text-semibold text-[15px] @[400px]:text-[17px] @[550px]:text-[19px] @[600px]:text-[21px] @[900px]:text-[23px] @[1200px]:text-[25px]">This portfolio is a snapshot of where he is today, and he’s excited to continue growing and turning his aspirations into reality.</p>
         </div>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink @[900px]:ml-10 mx-2 @[900px]:mx-4 @[600px]:text-[16px] @[900px]:text-[18px] @[1200px]:text-[20px] text-[#A9A9A9] text-gray-400">INSPIRATION</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div className="mr-[10%] ml-[10%] @[900px]:mr-20 @[900px]:ml-20">
           <p className="text-[14px] @[400px]:text-[16px] @[550px]:text-[18px] @[600px]:text-[20px] @[900px]:text-[22px] @[1200px]:text-[24px]">His inspiration comes from a mix of innovation in technology and the boundless creativity of individuals who dare to challenge the status quo. In the tech world, He’s fascinated by how simple ideas evolve into transformative solutions that shape our lives.</p>
           <div className="relative @[1100px]:flex py-5 items-center">
          <div className=" flex-grow @[1100px]:mb-20 mb-2">
            <p className=" text-[14px] @[400px]:text-[16px] @[550px]:text-[18px] @[600px]:text-[20px] @[900px]:text-[22px] @[1200px]:text-[24px] mt-4">Beyond technology, He’s deeply inspired by Kanye West , whose relentless <br />
               pursuit of creativity and excellence reminds him to think boldly, embrace 
                originality, and push boundaries in everything he does. 
                <br /> Ye’s journey serves as a reminder that passion and vision can drive extraordinary achievements.</p>
            <p className="@[600px]:text-[16px] @[900px]:text-[17px] @[1200px]:text-[22px] p-2 italic mt-10 text-[#A9A9A9]">“Now i can let these dream killers kill my self esteem <br /> or use my arrogance as a steam to power my dreams” -Ye</p>
          </div>
          <div className="@[600px]:w-[40%] w-[70%]"><img className=" flex-shrink rounded-[25px]" src={kanye} alt="university image" /></div>
         </div>
         </div>
         <div class="relative flex py-5 items-center">
          <span class="flex-shrink @[900px]:ml-10 mx-2 @[900px]:mx-4 @[600px]:text-[16px] @[900px]:text-[18px] @[1200px]:text-[20px] text-[#A9A9A9] text-gray-400">THINGS I LOVE TO DO</span>
          <div class="flex-grow border-t border-[#A9A9A9] border-gray-400"></div>
         </div>
         <div>
          <p className="mr-1 ml-1 @[500px]:mr-[5vh] @[500px]:ml-4 @[900px]:mr-20 @[900px]:ml-20   @[600px]:text-[16px] @[900px]:text-[18px] @[1200px]:text-[26px] text-semibold">When I’m not coding, I enjoy hanging out with my friends. I also love playing video games, which inspire me with their design and mechanics, and exploring new technologies. These hobbies, along with researching innovative ideas online, keep me motivated and curious.</p>
         </div>
         <div><p className=" ml-1 mt-1 @[500px]:ml-6 @[500px]:mt-6 @[900px]:ml-12 @[900px]:mt-10 @[600px]:text-md @[900px]:text-lg @[1200px]:text-xl text-[#A9A9A9]">Going out with friends:</p>
          <div className="mt-5 ml-[5%] @[600px]:flex space-x-4">
            <div className="flex-1"><img className="ml-20 @[600px]:ml-0 w-[30vh] @[600px]:w-[18vh] @[900px]:w-[25vh] @[1200px]:w-[30vh]  object-scale-down " src={noodles} alt="noodles" /><p className="ml-28 mt-4">Eating</p>  </div>
            <div className="flex-1"><img className="ml-16 @[600px]:ml-0 mt-8 @[600px]:mt-0 w-[30vh] @[600px]:w-[18vh] @[900px]:w-[25vh] @[1200px]:w-[30vh]  object-scale-down " src={out} alt="going out" /><p className="ml-20 mt-4">Having fun</p></div>
            <div className="flex-1"><img className="ml-16 @[600px]:ml-0 mt-8 @[600px]:mt-0 w-[30vh] @[600px]:w-[18vh] @[900px]:w-[25vh] @[1200px]:w-[30vh]  object-scale-down " src={beach} alt="beach" /><p className="ml-20 @[600px]:ml-4  mt-4">Visiting the beach</p></div>
          </div>
         </div>
         <div><p className=" ml-1 mt-1 @[500px]:ml-6 @[500px]:mt-6 @[900px]:ml-12 @[900px]:mt-10 @[600px]:text-md @[900px]:text-lg @[1200px]:text-xl text-[#A9A9A9]">Fav video game series:</p>
          <div className="mt-5  @[600px]:flex space-x-4">
            <div className="flex-1"><img className="ml-24 @[600px]:ml-8 @[700px]:ml-10 w-[30vh] @[600px]:w-[17vh] @[750px]:w-[20vh] @[900px]:w-[25vh] @[1200px]:w-[30vh]  object-scale-down " src={bo1} alt="call of duty black ops 1" /><p className="ml-24 @[450px]:ml-12 mt-2 text-[13px]">Call Of Duty Black Ops Zombies</p>  </div>
            <div className="flex-1"><img className="ml-20 @[600px]:ml-8 @[700px]:ml-10 mt-8 @[600px]:mt-0 w-[30vh] @[600px]:w-[17vh] @[750px]:w-[20vh] @[900px]:w-[25vh] @[1200px]:w-[30vh]  object-scale-down " src={assassin} alt="Assassin's creed" /><p className="ml-20 mt-2">Assassin's Creed</p></div>
            <div className="flex-1"><img className="ml-20 @[600px]:ml-8 @[700px]:ml-10 mt-8 @[600px]:mt-0 w-[30vh] @[600px]:w-[17vh] @[750px]:w-[20vh] @[900px]:w-[25vh] @[1200px]:w-[30vh]  object-scale-down " src={halo} alt="Halo" /><p className="ml-20 mt-2">Halo series </p></div>
          </div>
         </div>
         </div>
      </main>
    </div>
   </>
  )
}