import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#0a0a0f] border-t border-white/10 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full top-10 left-10" />
        <div className="absolute w-[250px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full bottom-10 right-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <motion.div
                  className="text-xl font-bold text-white dark:text-white px-3 py-1 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                > Md Shakwath
                
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-4"
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/Shakwath" },
            { icon: <FaTwitter />, link: "https://x.com" },
            { icon: <FaLinkedin />, link: "https://linkedin.com" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="
              w-11 h-11 flex items-center justify-center
              rounded-full
              border border-white/20
              text-white
              bg-transparent
              hover:border-white
              hover:text-cyan-300
              transition
              "
            >
              {item.icon}
            </motion.a>
          ))}

        </motion.div>

      </div>

      {/* Bottom line (border-only style instead of gradient bar) */}
      <div className="mt-8 w-full h-px bg-white/10"></div>

    </footer>
  );
}