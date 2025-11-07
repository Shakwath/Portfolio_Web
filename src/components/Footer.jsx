import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black py-12 border-t border-gray-300 dark:border-gray-800 overflow-hidden transition-colors duration-500">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-60 dark:opacity-40 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6 z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Md Shakwath
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        {/* Right Side - Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex space-x-4"
        >
          {[
            {
              href: "https://github.com/Shakwath",
              label: "GitHub",
              icon: <FaGithub />,
              color: "from-gray-700 to-gray-900",
            },
            {
              href: "https://x.com/ShakawathH84904",
              label: "Twitter",
              icon: <FaTwitter />,
              color: "from-blue-500 to-cyan-500",
            },
            {
              href: "https://www.linkedin.com/in/shakawath-hossain-3a3561300/",
              label: "LinkedIn",
              icon: <FaLinkedin />,
              color: "from-blue-700 to-indigo-500",
            },
            {
              href: "https://www.instagram.com/shakawath__/",
              label: "Instagram",
              icon: <FaInstagram />,
              color: "from-pink-500 to-red-500",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-md hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition`}
              title={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Animated bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </footer>
  );
}
