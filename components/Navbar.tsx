"use client"; // since it uses useState (client component)

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About Us", id: "about" },
    { name: "Blogs", id: "blogs" },
  ];

  return (
    <nav className="w-full flex items-center justify-between bg-gray-700 rounded-full px-4 py-1 shadow-lg mx-auto max-w-6xl relative opacity-90">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/photos/logo.png"
          alt="Logo"
          width={120} // adjust as needed
          height={40}
          className="ml-4"
        />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <button 
              onClick={() => scrollToSection(item.id)}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              {item.name}
              <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1"></span>
            </button>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow transition hover:cursor-pointer mr-2">
        Get A Quote
      </button>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-700 rounded-b-2xl shadow-lg flex flex-col items-center z-50 md:hidden animate-fade-in">
          <ul className="flex flex-col space-y-4 py-4 text-white font-medium w-full items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-blue-400 transition cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow transition">
            Get A Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
