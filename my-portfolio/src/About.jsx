import SidePanel from "./SidePanel";


export default function About() {
  return (
    <>   
    <div className="divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414]">
      <SidePanel/>
      <main className="flex-1 space-6 text-white overflow-y-auto">
      </main>
    </div>
   </>
  )
}