import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import Header_logo from "../component/Home_component/img/image.png";
import Header_logo from "../assets/img/apilogo.png";

export default function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-full mx-auto px-6 md:px-6 300 sm:px-6  flex items-center justify-between flex-wrap  min-h-[60px]">
        {/* Logo */}
        <div>
          <img
            src={Header_logo}
            alt="Company Logo"
            className="w-[60px] h-auto transition-transform duration-300 ease-in-out hover:brightness-110"
            // hover:scale-110 aa thi logo zoom thai
          />
        </div>

        {/* Toggle Button */}
        <motion.button
          className="lg:hidden text-2xl ml-auto"
          // block text-2xl cursor-pointer bg-transparent border-none ml-auto transition-transform duration-200 hover:scale-110 lg:hidden"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => setMenuOpen(!MenuOpen)}
          aria-expanded={MenuOpen}
          aria-controls="nav-menu"
          aria-label={MenuOpen ? "Close menu" : "Open menu"}
        >
          {MenuOpen ? "×" : "☰"}
        </motion.button>

        {/* Navigation */}
        <nav
          id="nav-menu"
          className={`${MenuOpen ? "block  animate-slideDown" : "hidden"}
          w-full lg:block lg:w-auto`}
        >
          <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8 list-none m-0 p-0">
            {["Own_API", "API_Prc", "Product"].map((path) => (
              <li key={path}>
                <NavLink
                  to={`/${path}`}
                  className={({ isActive }) =>
                    `block font-medium text-#d16751 font-G text-base transition-colors duration-200
                     ${
                       isActive
                         ? "text-[#4b54c9] underline underline-offset-4 decoration-2"
                         : "hover:text-[#4b54c9] hover:underline underline-offset-4 decoration-2"
                     }`
                  }
                  onClick={handleClick}
                >
                  {path.replace("_", " ").toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
// https://chatgpt.com/c/68d0ddf2-3228-8323-98a2-ff589b8492b0
