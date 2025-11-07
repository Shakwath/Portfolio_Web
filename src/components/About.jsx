import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react"; // icon for resume button

export default function About() {
  return (
    <section
      id="about"
      className="py-20 transition-colors duration-700 
      bg-gradient-to-br from-gray-50 via-gray-100 to-white 
      dark:from-[#0a0a0f] dark:via-[#111122] dark:to-[#1a1a2e] 
      text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 
          dark:from-blue-400 dark:via-purple-500 dark:to-pink-400 
          bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg max-w-3xl mx-auto leading-relaxed 
          text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I’m a frontend developer passionate about crafting interactive,
          accessible, and high-performance web experiences. I love transforming
          ideas into elegant and responsive designs using React, Tailwind CSS,
          and modern development tools.
        </motion.p>

        {/* Info Cards */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Web Developer Card */}
          <motion.div
            className="p-6 rounded-2xl 
            bg-gradient-to-b from-blue-100 to-white 
            dark:from-[#1a1a2e] dark:to-[#111122] 
            border border-gray-300 dark:border-gray-700 
            shadow-md dark:shadow-blue-600/20 
            hover:shadow-lg hover:shadow-blue-500/40 
            transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Web Developer
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              Skilled in React, Tailwind, and building modern UIs
            </p>
          </motion.div>

          {/* 5+ Projects Card */}
          <motion.div
            className="p-6 rounded-2xl 
            bg-gradient-to-b from-purple-100 to-white 
            dark:from-[#1a1a2e] dark:to-[#111122] 
            border border-gray-300 dark:border-gray-700 
            shadow-md dark:shadow-purple-600/20 
            hover:shadow-lg hover:shadow-purple-500/40 
            transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              5+ Projects Completed
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              Delivered creative and functional web solutions
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="p-6 rounded-2xl 
            bg-gradient-to-b from-pink-100 to-white 
            dark:from-[#1a1a2e] dark:to-[#111122] 
            border border-gray-300 dark:border-gray-700 
            shadow-md dark:shadow-pink-600/20 
            hover:shadow-lg hover:shadow-pink-500/40 
            transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
              Education
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              B.Sc. in Computer Science
            </p>
          </motion.div>
        </div>

        {/* Resume Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 
            text-white text-lg font-medium rounded-full 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
            hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
            shadow-md hover:shadow-lg transition-all duration-500"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
