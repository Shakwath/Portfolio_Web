import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  //const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto mt-3 px-4">

        {/* Glass Navbar Container */}
        <div className="flex items-center justify-between 
          backdrop-blur-xl bg-white/10 dark:bg-black/20 
          border border-white/10 rounded-2xl px-5 h-16 shadow-lg">

          {/* LEFT SIDE - LOGO */}
        <motion.div
          className="text-xl font-bold text-white dark:text-white px-3 py-1 rounded-lg"
          whileHover={{ scale: 1.05 }}
        > Md Shakwath
        </motion.div>

          {/* RIGHT SIDE - DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8 text-white/80 font-medium">

            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-yellow-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

           
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
     <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          menuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden mt-2 mx-4"
      >
  <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-6 py-4 space-y-3 text-white/80">

    {["home", "about", "projects", "skills", "contact"].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        className="block hover:text-yellow-400 transition"
        onClick={(e) => {
          e.preventDefault(); 

          // close menu first
          setMenuOpen(false);

          // smooth scroll after animation
          setTimeout(() => {
            const section = document.getElementById(item);
            if (section) {
              section.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 150);
        }}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </a>
    ))}

  </div>
      </motion.div>
    </nav>
  );
}