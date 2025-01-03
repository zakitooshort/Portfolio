import { Link } from "react-router-dom";
function SidePanel(){
  return(
    <aside className="w-1/5 text-white space--4 sticky top-0 h-screen">
    <Link to="/"><h2 className="text-4xl font-semibold mb-4 pt-6 pl-6">ZAKITOOSHORT</h2></Link>
    <nav>
      <div class="grid grid-cols-1 divide-y-[0.5px] divide-[#A9A9A9]">
        <div><ul className="space-y-2">
        <li>
          <Link to="/About" className="font-normal mt-2 ml-6 text-3xl inline-block m-2 rounded hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            About
          </Link>
        </li>
        <li>
          <Link to="/Ideas" className="font-normal mt-0.5 ml-6 text-3xl inline-block m-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Ideas
          </Link>
        </li>
        <li>
          <Link to="#contact" className="font-normal mb-10 mt-0.5 ml-6 text-3xl inline-block m-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            CV
          </Link>
        </li>
      </ul>
      </div>


      <div>
        <h3 className="opacity-75 text-2xl tracking-widest font-normal mb-4 pt-6 pl-6">MILESTONES</h3>
        <ul className="">
        <li>
          <Link to="/Projects" className="font-normal pt-2 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Skills" className="font-normal pt-0.5 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/Goals" className="font-normal mb-24 pt-0.5 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out ">
            Goals
          </Link>
        </li>
      </ul>
      </div>



      <div>
      <h3 className="opacity-75 text-2xl tracking-widest font-normal mb-4 pt-6 pl-6">CONTACT</h3>
        <ul>
        <li>
          <Link to="#home" className="font-normal pt-2 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Mail
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/zakitooshort/profilecard/?igsh=MndjbHM5MzJ5c3Ft" target="_blank" className="font-normal pt-0.5 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Instagram
          </Link>
        </li>
        <li>
          <Link to="#contact" className="font-normal pt-0.5 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Linkedn
          </Link>
        </li>
        <li>
          <Link to="#about" className="font-normal pt-0.5 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Read.cv
          </Link>
        </li>
        <li>
          <Link to="#contact" className="font-normal pt-0.5 pl-6 text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Leetcode
          </Link>
        </li>
      </ul></div>
      </div>
      
    </nav>
  </aside>
  )
}
export default SidePanel;