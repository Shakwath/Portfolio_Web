import React, { useState } from "react";
import { motion } from "framer-motion";

// React Icons (install if not yet: npm i react-icons)
import { FaReact, FaNodeJs, FaVuejs, FaJs } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

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
      "A user-friendly Visa Navigator Portal that simplifies visa checking, application, and tracking system.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    image: "https://i.ibb.co.com/HT49QZBc/Screenshot-2025-09-12-010123.png",
    link: "https://visa-navigation-client.vercel.app/",
  },
  {
    title: "Gadget Haven",
    description:
      "Tech product showcase with authentication, filters, and cart functionality.",
    tech: ["Vue", "Firebase", "Tailwind"],
    image: "https://i.ibb.co.com/21780Mnk/Screenshot-2025-09-12-011402.png",
    link: "https://lively-sawine-2097e5.netlify.app/",
  },
  {
    title: "Learn Vocabulary",
    description:
      "Interactive web app to improve vocabulary with pronunciation, categories, and tracking.",
    tech: ["JavaScript", "Firebase"],
    image: "https://i.ibb.co.com/S44FgXbZ/Screenshot-2025-09-12-010929.png",
    link: "https://a9-vocabullary-learn.web.app/",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-20 text-white bg-[#0a0a0f] relative overflow-hidden border border-white/10">

      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full top-10 left-10" />
        <div className="absolute w-72 h-72 bg-purple-500/10 blur-3xl rounded-full bottom-10 right-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl overflow-hidden
              bg-white/10 backdrop-blur-xl border border-white/10
              shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
              transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-cyan-300">
                  {project.title}
                </h3>

                <p className="text-gray-200 text-sm mt-2">
                  {project.description}
                </p>

                {/* TECH ICONS */}
                <div className="flex flex-wrap gap-3 mt-4 text-2xl">
                  {project.tech.map((t, i) => (
                    <span key={i} title={t}>
                      {techIcons[t] || (
                        <span className="text-sm text-gray-300">{t}</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* BUTTONS (ONLY BORDER STYLE) */}
                <div className="flex gap-3 mt-5">

                  <a
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 rounded-lg
                    border border-green-400 text-white
                    hover:bg-green-400/10 transition"
                  >
                    Live
                  </a>

                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="px-4 py-2 rounded-lg
                    border border-cyan-400 text-white
                    hover:border-white transition"
                  >
                    Details
                  </button>

                </div>

                {/* DETAILS */}
                {active === index && (
                  <motion.div
                    className="mt-4 p-4 rounded-2xl
                    bg-white/10 border border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-sm text-gray-100">
                      Modern full-stack project focused on performance, scalability, and UI/UX.
                    </p>
                  </motion.div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Shakwath?tab=repositories"
            target="_blank"
            className="inline-block px-6 py-3 rounded-2xl
            border border-white/20 text-white
            hover:bg-white/10 transition"
          >
            View All Projects →
          </a>
        </div>

      </div>
    </section>
  );
}