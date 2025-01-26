import React, { useState } from "react";
import './tailwind.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-sm text-gray-200 shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
       
        <div className="w-20">
          <img src="images/logo-2.png" alt="Logo" />
        </div>

      
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:space-x-6 md:w-auto transition-all duration-300`}
        >
          <a href="" className="links">
            Home
          </a>
          <a href="" className="links">
            About
          </a>
          <a href="" className="links">
            Services
          </a>
          <a href="" className="links">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
