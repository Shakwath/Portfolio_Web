import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Visa Navigation Site",
    description:
      "A user-friendly Visa Navigator Portal that simplifies the process of checking visa requirements, applying for visas online, and tracking applications.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    image: "https://i.ibb.co.com/HT49QZBc/Screenshot-2025-09-12-010123.png",
    link: "https://visa-navigation-client.vercel.app/",
    delay: 0.1,
  },
  {
    title: "Gadget Haven",
    description:
      "A responsive tech product showcase using React and Firebase authentication system, featuring product filters and cart functionality.",
    tech: ["Vue.js", "Firebase", "Tailwind", "DaisyUI"],
    image: "https://i.ibb.co.com/21780Mnk/Screenshot-2025-09-12-011402.png",
    link: "https://lively-sawine-2097e5.netlify.app/",
    delay: 0.2,
  },
  {
    title: "Learn Vocabulary",
    description:
      "An interactive web app designed to help users improve their vocabulary in a fun and effective way. Offers pronunciation, categories, and tracking.",
    tech: ["Firebase Auth", "JavaScript", "API"],
    image: "https://i.ibb.co.com/S44FgXbZ/Screenshot-2025-09-12-010929.png",
    link: "https://a9-vocabullary-learn.web.app/",
    delay: 0.3,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 transition-colors duration-700
      bg-gradient-to-br from-gray-50 via-white to-blue-50
      dark:from-[#0a0a0f] dark:via-[#111122] dark:to-[#1a1a2e]
      text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden
              bg-gradient-to-b from-white to-blue-50 
              dark:from-[#1a1a2e] dark:to-[#0f0f1c]
              border border-gray-300 dark:border-gray-700 
              shadow-md dark:shadow-blue-600/30
              hover:shadow-xl hover:shadow-blue-500/40
              transform hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, delay: project.delay }}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full
                      bg-gradient-to-r from-blue-100 to-purple-100
                      dark:from-blue-900/40 dark:to-purple-800/40
                      text-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg
                  border border-blue-500 dark:border-purple-500
                  text-blue-600 dark:text-purple-400 font-medium
                  hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white
                  transition-all duration-500"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://github.com/Shakwath?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg
            border border-blue-500 dark:border-purple-500
            text-blue-600 dark:text-purple-400 font-semibold
            hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white
            transition-all duration-500"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
