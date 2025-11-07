import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react"; // For icons

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark mode persistence
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
          >
            Md Shakwath
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-800 dark:text-gray-200 font-medium">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-blue-500 dark:hover:text-purple-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
              title="Toggle Theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden bg-gray-100 dark:bg-gray-800 overflow-hidden"
      >
        <div className="flex flex-col px-6 py-4 space-y-3 text-gray-800 dark:text-gray-200 font-medium">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-blue-500 dark:hover:text-purple-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center space-x-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 w-fit"
          >
            {isDark ? (
              <>
                <Sun size={18} className="text-yellow-400" />{" "}
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={18} className="text-gray-800" />{" "}
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
