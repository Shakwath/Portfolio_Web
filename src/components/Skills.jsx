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
    { name: "HTML", level: 98, icon: <SiHtml5 className="text-orange-500" /> },
    { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", level: 85, icon: <SiReact className="text-sky-400" /> },
    { name: "Node.js", level: 85, icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-400" /> },
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
  className="py-20 text-white bg-[#0a0a0f] relative overflow-hidden border border-white/10"
>
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 ">
        <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full top-10 left-10" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full bottom-10 right-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* TITLE */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16 "
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* TECHNICAL SKILLS */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <h3 className="text-xl font-semibold mb-8 text-blue-400">
              Technical Skills
            </h3>

            <div className="space-y-8">

              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">

                  {/* ICON + NAME */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white text-sm">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>

                </div>
              ))}

            </div>
          </motion.div>

          {/* PROFESSIONAL SKILLS */}
          <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <h3 className="text-xl font-semibold mb-8 text-blue-400">
        Professional Skills
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {professionalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
           className="
            p-6 rounded-2xl
            bg-white/5 backdrop-blur-md
            border border-white/20
            hover:border-white/40
            hover:bg-white/10
            transition duration-300
          ">
            {/* ICON */}
            <div className="text-3xl mb-3">{skill.icon}</div>

            {/* TITLE */}
            <h4 className="text-white font-semibold text-lg">
              {skill.title}
            </h4>

            {/* YOUR EXACT DESCRIPTION */}
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
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