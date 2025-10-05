import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-black text-white fixed top-0 left-0 z-50 shadow-lg">
      
      <h2 className="text-2xl font-bold">
        everlyn<span className="text-purple-400">.</span>
      </h2>

      
      <ul className="hidden md:flex gap-6 text-gray-300 items-center">
        <li>
          <a href="#features" className="hover:text-blue-400 transition-colors">
            Features
          </a>
        </li>
        <li>
          <a href="#how" className="hover:text-blue-400 transition-colors">
            How it Works
          </a>
        </li>
        <li>
          <a href="#usecases" className="hover:text-blue-400 transition-colors">
            Use Cases
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="hover:text-blue-400 transition-colors"
          >
            Testimonials
          </a>
        </li>

       
        <li>
          <a
            href="#cta"
            className="hidden md:inline-block bg-gradient-to-l from-blue-600 to-purple-600 text-white rounded-3xl py-2 px-5 font-semibold transition duration-300 hover:brightness-90"
          >
            Get Started
          </a>
        </li>
      </ul>

      
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

     
      {menuOpen && (
        <div className="absolute top-[4.5rem] left-0 w-full bg-black text-gray-300 flex flex-col items-center gap-4 py-6 md:hidden shadow-lg border-t border-gray-800">
          <a href="#features" className="hover:text-blue-400 transition-colors">
            Features
          </a>
          <a href="#how" className="hover:text-blue-400 transition-colors">
            How it Works
          </a>
          <a href="#usecases" className="hover:text-blue-400 transition-colors">
            Use Cases
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-400 transition-colors"
          >
            Testimonials
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
