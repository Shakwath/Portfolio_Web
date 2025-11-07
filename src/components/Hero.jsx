import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-gray-100 via-white to-blue-100 
      dark:from-[#0a0a0f] dark:via-[#111122] dark:to-[#1a1a2e]
      text-gray-900 dark:text-white pt-16 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 
                bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                MD Shakwath
              </motion.span>
            </h1>

            <motion.h2
              className="text-2xl sm:text-3xl font-semibold mb-6 
              text-transparent bg-clip-text bg-gradient-to-r 
              from-cyan-500 to-blue-700 dark:from-cyan-400 dark:to-blue-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Web Developer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              I build modern, interactive, and responsive web experiences using
              React, Tailwind CSS, and cutting-edge technologies.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 font-medium text-white rounded-lg 
                bg-gradient-to-r from-blue-600 to-purple-600 
                hover:from-purple-600 hover:to-pink-500 
                transition-all duration-300 shadow-lg 
                hover:shadow-purple-500/40"
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 font-medium rounded-lg 
                border border-blue-500 text-blue-600 dark:text-blue-400 
                hover:text-white hover:bg-gradient-to-r 
                from-blue-600 to-purple-600 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glowing Gradient Ring */}
             <div
  className="absolute -inset-4 
  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
  rounded-full blur-xl opacity-25 dark:opacity-35"
></div>

{/* Profile Image */}
<img
  src="https://i.ibb.co/PvVz31jd/afas.png"
  alt="Profile"
  className="relative rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 
  object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg shadow-blue-500/10"
 />
  
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
