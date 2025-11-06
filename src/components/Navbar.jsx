import React from "react";
import { MdOutlineRestaurant } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white py-4 px-5 lg:px-14 flex items-center justify-between transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-1.5 text-2xl font-bold text-orange-500">
        <MdOutlineRestaurant />
        <span>SitaRam</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8 font-medium cursor-pointer">
        <span
          onClick={() => handleScroll("home")}
          className="hover:text-orange-400 transition"
        >
          Home
        </span>
        <span
          onClick={() => handleScroll("food")}
          className="hover:text-orange-400 transition"
        >
          Foods
        </span>
        <span
          onClick={() => handleScroll("services")}
          className="hover:text-orange-400 transition"
        >
          Services
        </span>
        <span
          onClick={() => handleScroll("contact")}
          className="hover:text-orange-400 transition"
        >
          Contact
        </span>
      </nav>

      <div className="flex flex-col-reverse sm:flex-row items-center gap-2 sm:gap-4">
        {/* Theme Toggle */}
        <span className="cursor-pointer *:cursor-pointer">
          <ThemeToggle />
        </span>

        {/* Register Button */}
        <button
          className="cursor-pointer bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-4 rounded-full text-sm font-medium"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="lg:hidden text-2xl text-black dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-3 left-0 w-full z-10 bg-white dark:bg-black shadow-md  md:hidden flex flex-col space-y-4 px-6 py-4 mt-8">
          <span
            onClick={() => {
              handleScroll("home");
              setIsMobileMenuOpen(false);
            }}
            className="text-orange-500 font-medium cursor-pointer"
          >
            Home
          </span>

          <span
            onClick={() => {
              handleScroll("food");
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-700 dark:text-white hover:text-orange-500 transition cursor-pointer"
          >
            Food
          </span>

          <span
            onClick={() => {
              handleScroll("services");
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-700 dark:text-white hover:text-orange-500 transition cursor-pointer"
          >
            Services
          </span>

          <span
            onClick={() => {
              handleScroll("contact");
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-700 dark:text-white hover:text-orange-500 transition cursor-pointer"
          >
            Contact
          </span>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border dark:border-white border-black rounded-full px-4 py-1.5 pr-10 focus:outline-none text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 p-1 rounded-full text-white">
              <FiSearch size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
