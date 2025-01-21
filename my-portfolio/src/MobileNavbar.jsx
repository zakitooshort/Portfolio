import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const buttonRef = useRef(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); 
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-[#191919] text-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
       
        <Link to="/" className="text-xl font-semibold">
          ZAKITOOSHORT
        </Link>

        <button ref={buttonRef} onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div
        ref={menuRef}
        className={`bg-[#1c1c1c] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 p-2">
          <li>
            <Link
              to="/About"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Ideas"
              className="block p-2 rounded hover:bg-[#222222] transition duration-200"
              onClick={toggleMenu}
            >
              Ideas
            </Link>
          </li>
          <hr/>
          
          <li>
            <Link
              to="/Projects"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Skills"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/Goals"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
              onClick={toggleMenu}
            >
              Goals
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:zakip1r1o13@gmail.com";
              }}
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
            >
              Mail
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/zakitooshort/profilecard/?igsh=MndjbHM5MzJ5c3Ft"
              target="_blank"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/zakitooshort"
              target="_blank"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              to="https://read.cv/zakitooshort"
              target="_blank"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
            >
              Read.cv
            </Link>
          </li>
          <li>
            <Link
              to="https://leetcode.com/u/zakitooshort/"
              target="_blank"
              className="block pl-2 p-[4px] rounded hover:bg-[#222222] transition duration-200"
            >
              Leetcode
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavbar;