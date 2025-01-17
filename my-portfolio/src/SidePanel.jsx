import { Link } from "react-router-dom";
function SidePanel(){
  const handleMailClick = (e) => {
    e.preventDefault(); 
    window.location.href = 'mailto:zakip1r1o13@gmail.com';
  };
  return(
    <aside className="w-1/5 text-white space--4 sticky top-0 h-100%">
    <div className="@container">
    <div className="container">
    <Link to="/"><h2 className="@[200px]:text-[20px] @[240px]:text-[25px] @[277px]:text-3xl @[330px]:text-4xl font-semibold mb-4 pt-6 pl-6">ZAKITOOSHORT</h2></Link>
    
    <nav>
      <div class="grid grid-cols-1 divide-y-[0.5px] divide-[#A9A9A9]">
        <div><ul className="@[360px]:space-y-2">
        <li>
    
          <Link to="/About" className="font-normal @[360px]:mt-2  mt-[-5%] ml-6 text-[16px] @[250px]:text-[20px] @[277px]:text-2xl @[330px]:text-3xl inline-block m-2 rounded hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            About
          </Link>
        </li>
        <li>
          <Link to="/Ideas" className="font-normal @[360px]:mt-2  mt-[-6%] mt-0.5 ml-6 text-[16px] @[250px]:text-[20px] @[277px]:text-2xl @[330px]:text-3xl  inline-block m-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Ideas
          </Link>
        </li>
        <li>
          <a href="/CV.pdf" download className="font-normal mb-[8px] @[360px]:mb-10 @[360px]:mt-2  mt-[-5%] ml-6 text-[16px] @[250px]:text-[20px] @[277px]:text-2xl @[330px]:text-3xl  inline-block m-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            CV
          </a>
        </li>
      </ul>
      </div>


      <div>
        <h3 className="opacity-75 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl  tracking-widest font-normal mb-0 @[360px]:mb-4 pt-4 pl-6">MILESTONES</h3>
        <ul className="">
        <li>
          <Link to="/Projects" className=" font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Skills" className="font-normal pt-0.5 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/Goals" className="font-normal  @[360px]:mb-24 mb-4 pt-0.5 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out ">
            Goals
          </Link>
        </li>
      </ul>
      </div>



      <div>
      <h3 className="opacity-75 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl tracking-widest font-normal mb-2 pt-6 pl-6">CONTACT</h3>
        <ul>
        <li>
          <Link to="#" onClick={handleMailClick} className="mt-1 font-normal pt-2 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Mail
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/zakitooshort/profilecard/?igsh=MndjbHM5MzJ5c3Ft" target="_blank" className="font-normal pt-0.5 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Instagram
          </Link>
        </li>
        <li>
          <Link to="https://github.com/zakitooshort" target="_blank" className="font-normal pt-0.5 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Github
          </Link>
        </li>
        <li>
          <Link to="https://read.cv/zakitooshort" target="_blank" className="font-normal pt-0.5 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
            Read.cv
          </Link>
        </li>
        <li>
          <Link to="https://leetcode.com/u/zakitooshort/" target="_blank" className="font-normal pt-0.5 pl-6 text-[16px] @[250px]:text-[20px] @[277px]:text-1xl @[330px]:text-2xl inline-block p-2 rounded  hover:text-[#B6B6B4] hover:underline transition duration-200 ease-in-out">
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