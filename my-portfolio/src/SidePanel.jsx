import { Link } from "react-router-dom";
function SidePanel(){
  const handleMailClick = (e) => {
    e.preventDefault(); 
    window.location.href = 'mailto:zakip1r1o13@gmail.com';
  };
  return(
    <aside className="w-1/5 text-white space--4 sticky top-0 h-100% sidepanel">
    <div className="@container">
    <div className="container">
    <Link to="/"><h2 className="sidebar-link-title @[200px]:text-[20px] @[240px]:text-[25px] @[277px]:text-3xl @[330px]:text-4xl font-semibold mb-4 pt-6 pl-6">ZAKITOOSHORT</h2></Link>
    
    <nav>
      <div class="grid grid-cols-1 divide-y-[0.5px] divide-[#A9A9A9]">
        <div><ul className="@[300px]:space-y-2 ">
        <li>
    
          <Link to="/About" className="sidebar-link-1 font-normal @[200px]:pt-4  mt-[-5%] ml-6 text-[16px] @[250px]:text-[20px] @[277px]:text-2xl @[330px]:text-3xl inline-block m-2 rounded hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            About
          </Link>
        </li>
        <li>
          <Link to="/Ideas" className="sidebar-link-1 font-normal @[200px]:pt-0  pt-0  ml-6 text-[16px] @[250px]:text-[20px] @[277px]:text-2xl @[330px]:text-3xl  inline-block m-0 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Ideas
          </Link>
        </li>
        <li>
          <a href="/CV.pdf" download className="sidebar-link-bottom font-normal pb-[4px] @[200px]:mb-8 @[300px]:mb-10 @[200px]:mt-2  mt-[-5%] ml-6 text-[16px] @[250px]:text-[20px] @[277px]:text-2xl @[330px]:text-3xl  inline-block m-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            CV
          </a>
        </li>
      </ul>
      </div>


      <div>
        <h3 className="sidebar-link-title-2 opacity-75 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl  tracking-widest sidebar-link font-normal mb-0 @[200px]:mb-4 pt-4 pl-6">MILESTONES</h3>
        <ul className="">
        <li>
          <Link to="/Projects" className=" sidebar-link-2 font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Skills" className="sidebar-link-2 font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/Goals" className="sidebar-link-bottom-2 font-normal  @[200px]:mb-24 mb-[2px] pt-0 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out ">
            Goals
          </Link>
        </li>
      </ul>
      </div>



      <div>
      <h3 className="opacity-75 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl tracking-widest sidebar-link-title-3 font-normal mb-4 pt-6 pl-6">CONTACT</h3>
        <ul>
        <li>
          <Link to="#" onClick={handleMailClick} className=" sidebar-link-3 font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Mail
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/zakitooshort/profilecard/?igsh=MndjbHM5MzJ5c3Ft" target="_blank" className="sidebar-link-3 font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Instagram
          </Link>
        </li>
        <li>
          <Link to="https://github.com/zakitooshort" target="_blank" className="sidebar-link-3 font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Github
          </Link>
        </li>
        <li>
          <Link to="https://read.cv/zakitooshort" target="_blank" className="sidebar-link-3 font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Read.cv
          </Link>
        </li>
        <li>
          <Link to="https://leetcode.com/u/zakitooshort/" target="_blank" className="sidebar-link-3 font-normal pt-2 pl-6 text-[16px] @[60%]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Leetcode
          </Link>
        </li>
      </ul></div>
      </div>
      
    </nav></div></div>
  </aside>
  )
}
export default SidePanel;