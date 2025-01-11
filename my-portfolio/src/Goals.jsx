import SidePanel from "./SidePanel";


export default function Goals() {
  return (
    <>   
    <div className="divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414]">
      <SidePanel/>
      <main className="flex-1 space-6 text-white overflow-y-auto">
        <div className="text-7xl text-semibold p-20 text-center bg-gray-600">This Page Is Currently Under Maintenance</div>
      </main>
    </div>
   </>
  )
}