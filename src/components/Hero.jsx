import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-[#0a0a0f] text-white pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Small Intro */}
         <motion.p
        className="text-white/80 text-lg mb-3 tracking-widest uppercase 
        bg-white/10 backdrop-blur-md inline-block px-4 py-2 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.p>
          {/* Main Heading */}
         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 text-white">
          Hi, I'm{" "}
          <span className="text-gray-300">
            MD Shakwath
          </span>
        </h1>
          {/* Dynamic Typing */}
          <div className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-300">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
            
                "Creative Coder ",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
            I create modern, fast, and user-friendly websites using React,
            Tailwind CSS, Firebase, and the latest technologies. Passionate
            about design + development.
          </p>

          {/* Buttons */}
          
          <div className="flex flex-wrap gap-4 mb-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-xl 
            bg-white/10 backdrop-blur-md border border-white/20 
            text-white font-semibold shadow-lg 
            hover:border-white transition"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-xl 
            bg-white/10 backdrop-blur-md border border-white/20 
            text-white font-semibold shadow-lg 
            hover:border-white transition 
            flex items-center gap-2"
          >
            <FaDownload />
            Resume
          </motion.a>
</div>

          {/* Social Links */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative"
          >
            {/* Glow Ring */}
            <div className="absolute -inset-5 rounded-full bg-blue-500/30 blur-3xl opacity-50 animate-pulse"></div>

            {/* Profile */}
            <img
              src="https://i.ibb.co.com/gbmLzn75/profile.jpg"
              alt="Profile"
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />

            
           <div className="absolute bottom-5 -left-10 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/30 shadow-lg font-semibold flex items-center gap-2">
  
            {/* Active Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for Work
          </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}