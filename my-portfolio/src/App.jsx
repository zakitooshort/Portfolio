export default function App() {
  return (
    <>
    
    <div className="flex h-screen font-['Montserrat'] bg-[#141414]">
      {/* Sidebar */}
      <aside className="w-1/5 text-white p-4 sticky top-0 h-screen">
        <h2 className="text-3xl font-semibold mb-4 pt-6 pl-6">ZAKITOOSHORT</h2>
        <nav>
          <ul className="space-y-2">
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
              <a href="#contact" className="font-normal pt-0.5 pl-6 text-2xl block p-2 rounded hover:bg-gray-700">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        
      </main>
    </div>
   
   </>
  )
}