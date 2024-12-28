export default function App() {
  return (
    <>
    
    <div className="divide-x-[0.5px] divide-[#A9A9A9] flex h-screen font-['Montserrat'] bg-[#141414]">
      
      <aside className="w-1/5 text-white p-4 sticky top-0 h-screen">
        <h2 className="text-3xl font-semibold mb-4 pt-6 pl-6">ZAKITOOSHORT</h2>
        <nav>
          <div class="grid grid-cols-1 divide-y-[0.5px] divide-[#A9A9A9]">
            <div><ul className="space-y-2">
            <li>
              <a href="#home" className="font-normal pt-2 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#about" className="font-normal pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Ideas
              </a>
            </li>
            <li>
              <a href="#contact" className="font-normal pb-10 pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                CV
              </a>
            </li>
          </ul>
          </div>


          <div>
            <h3 className="opacity-75 text-2xl tracking-widest font-normal mb-4 pt-6 pl-6">MILESTONES</h3>
            <ul className="">
            <li>
              <a href="#home" className="font-normal pt-2 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="font-normal pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="font-normal pb-24 pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Goals
              </a>
            </li>
          </ul>
          </div>



          <div>
          <h3 className="opacity-75 text-2xl tracking-widest font-normal mb-4 pt-6 pl-6">CONTACT</h3>
            <ul className="">
            <li>
              <a href="#home" className="font-normal pt-2 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Mail
              </a>
            </li>
            <li>
              <a href="#about" className="font-normal pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Instagram
              </a>
            </li>
            <li>
              <a href="#contact" className="font-normal pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Linkedn
              </a>
            </li>
            <li>
              <a href="#about" className="font-normal pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Read.cv
              </a>
            </li>
            <li>
              <a href="#contact" className="font-normal pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                Leetcode
              </a>
            </li>
          </ul></div>
          </div>
          
        </nav>
      </aside>

      
      <main className="flex-1 p-6 text-white overflow-y-auto">
        <div className="flex">
        <p className="flex-1 w-64 text-xl font-medium">Hello there , السلام عليكم</p>
        <p className="flex-initial w-64 text-xl font-medium">Thursday,Dec 24 6:39 PM</p>
        </div>
      </main>
    </div>
   
   </>
  )
}