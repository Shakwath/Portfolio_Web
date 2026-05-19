import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaJs,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Vue: <FaVuejs className="text-green-300" />,
  JavaScript: <FaJs className="text-yellow-300" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
};

const projects = [
  {
    title: "Visa Navigation Site",
    description:
      "A modern visa management platform with authentication, application tracking, and responsive dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    image:
      "https://i.ibb.co.com/HT49QZBc/Screenshot-2025-09-12-010123.png",
    link: "https://visa-navigation-client.vercel.app/",
  },
  {
    title: "Gadget Haven",
    description:
      "Tech product showcase with advanced filtering, authentication, and modern shopping experience.",
    tech: ["Vue", "Firebase", "Tailwind"],
    image:
      "https://i.ibb.co.com/21780Mnk/Screenshot-2025-09-12-011402.png",
    link: "https://lively-sawine-2097e5.netlify.app/",
  },
  {
    title: "Learn Vocabulary",
    description:
      "Interactive vocabulary learning platform with pronunciation, categories, and tracking system.",
    tech: ["JavaScript", "Firebase"],
    image:
      "https://i.ibb.co.com/S44FgXbZ/Screenshot-2025-09-12-010929.png",
    link: "https://a9-vocabullary-learn.web.app/",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#0a0a0f] text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-[320px] h-[320px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-purple-500/10 blur-[140px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Projects
            </span>
          </h2>

          <div className="w-28 h-1 rounded-full mx-auto mt-6 bg-gradient-to-r from-cyan-400 to-purple-500" />
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
              relative overflow-hidden rounded-[30px]
              border border-white/10
              bg-white/5 backdrop-blur-2xl
              group
              "
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full h-60 object-cover
                  transition duration-700
                  group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/20 to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                  absolute top-4 right-4
                  px-3 py-1 rounded-full
                  bg-black/40 backdrop-blur-xl
                  border border-white/10
                  text-xs text-white
                  "
                >
                  Featured
                </motion.div>
              </div>

              {/* CONTENT */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mt-3">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mt-5 text-2xl">
                  {project.tech.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        scale: 1.2,
                        rotate: 6,
                      }}
                      className="
                      w-11 h-11 rounded-2xl
                      bg-white/5 border border-white/10
                      backdrop-blur-xl
                      flex items-center justify-center
                      "
                      title={tech}
                    >
                      {techIcons[tech]}
                    </motion.div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex items-center gap-2
                    px-5 py-2.5 rounded-2xl
                    bg-white/10 backdrop-blur-xl
                    border border-white/10
                    text-white text-sm
                    hover:bg-white/15
                    transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="
                    px-5 py-2.5 rounded-2xl
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    text-sm text-white
                    hover:bg-white/10
                    transition
                    "
                  >
                    {active === index ? "Close" : "Details"}
                  </motion.button>
                </div>

                {/* DETAILS */}
                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                        mt-5 rounded-2xl
                        border border-white/10
                        bg-white/5 backdrop-blur-xl
                        p-4
                        "
                      >
                        <p className="text-sm text-gray-200 leading-relaxed">
                          This project focuses on modern UI/UX,
                          responsive design, authentication,
                          optimized performance, and scalable
                          full-stack architecture.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="https://github.com/Shakwath?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="
            inline-flex items-center gap-3
            px-7 py-3 rounded-2xl
            bg-white/5 backdrop-blur-2xl
            border border-white/10
            text-white
            hover:bg-white/10
            transition
            "
          >
            <FaGithub className="text-xl" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}