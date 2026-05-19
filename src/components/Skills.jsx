import React from "react";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Skills() {
  const technicalSkills = [
    {
      name: "HTML",
      level: 98,
      color: "from-orange-500 to-orange-300",
      icon: <SiHtml5 className="text-orange-500" />,
    },
    {
      name: "JavaScript",
      level: 90,
      color: "from-yellow-400 to-yellow-200",
      icon: <SiJavascript className="text-yellow-400" />,
    },
    {
      name: "React",
      level: 85,
      color: "from-cyan-400 to-sky-300",
      icon: <SiReact className="text-sky-400" />,
    },
    {
      name: "Node.js",
      level: 85,
      color: "from-green-500 to-green-300",
      icon: <SiNodedotjs className="text-green-500" />,
    },
    {
      name: "Express.js",
      level: 80,
      color: "from-gray-300 to-gray-100",
      icon: <SiExpress className="text-gray-300" />,
    },
    {
      name: "MongoDB",
      level: 80,
      color: "from-green-400 to-emerald-300",
      icon: <SiMongodb className="text-green-400" />,
    },
  ];

  const professionalSkills = [
    {
      title: "Teamwork",
      desc: "Collaborating effectively with teams.",
      icon: "👥",
    },
    {
      title: "Communication",
      desc: "Clear articulation and listening skills.",
      icon: "💬",
    },
    {
      title: "Time Management",
      desc: "Efficiently prioritizing tasks.",
      icon: "⏰",
    },
    {
      title: "Problem Solving",
      desc: "Analyzing and solving issues creatively.",
      icon: "🧠",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-[#0a0a0f] text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-[320px] h-[320px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-purple-500/10 blur-[140px] rounded-full" />

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-3">
            Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Skills
            </span>
          </h2>

          <div className="w-28 h-1 rounded-full mx-auto mt-6 bg-gradient-to-r from-cyan-400 to-purple-500" />
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* TECHNICAL SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            rounded-[32px]
            border border-white/10
            bg-white/5 backdrop-blur-2xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold mb-10 text-cyan-300">
              Technical Skills
            </h3>

            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* TOP */}
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.15,
                      }}
                      className="
                      w-12 h-12 rounded-2xl
                      bg-white/5 border border-white/10
                      flex items-center justify-center
                      text-2xl backdrop-blur-xl
                      "
                    >
                      {skill.icon}
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-white">
                          {skill.name}
                        </h4>

                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="relative w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1.4,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 blur-md opacity-70 bg-white/40" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PROFESSIONAL SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            rounded-[32px]
            border border-white/10
            bg-white/5 backdrop-blur-2xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold mb-10 text-purple-300">
              Professional Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  viewport={{ once: true }}
                  className="
                  relative overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/5 backdrop-blur-xl
                  p-6
                  group
                  "
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className="
                    relative w-16 h-16 rounded-2xl
                    bg-white/10 border border-white/10
                    flex items-center justify-center
                    text-3xl mb-5
                    "
                  >
                    {skill.icon}
                  </motion.div>

                  {/* TITLE */}
                  <h4 className="relative text-lg font-semibold text-white">
                    {skill.title}
                  </h4>

                  {/* DESC */}
                  <p className="relative text-gray-400 text-sm mt-3 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}