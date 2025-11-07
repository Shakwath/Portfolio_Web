import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = [
    { name: "HTML/CSS", level: 98, color: "from-pink-400 to-yellow-400" },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-amber-500" },
    { name: "React", level: 85, color: "from-sky-400 to-blue-500" },
    { name: "Node.js / Express.js", level: 85, color: "from-green-400 to-emerald-500" },
    { name: "MongoDB", level: 80, color: "from-teal-400 to-green-500" },
  ];

  const professionalSkills = [
    { title: "Teamwork", desc: "Collaborating effectively with teams.", icon: "👥" },
    { title: "Communication", desc: "Clear articulation and listening skills.", icon: "💬" },
    { title: "Time Management", desc: "Efficiently prioritizing tasks.", icon: "⏰" },
    { title: "Problem Solving", desc: "Analyzing and solving issues creatively.", icon: "🧠" },
  ];

  return (
    <section
      id="skills"
      className="py-20 transition-colors duration-700 
      bg-gradient-to-b from-gray-50 via-gray-100 to-white 
      text-gray-900 
      dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white
      relative overflow-hidden"
    >
      {/* Animated glow background */}
      <div
        className="absolute inset-0 bg-gradient-to-r 
        from-blue-300/20 via-purple-200/10 to-pink-300/20 
        dark:from-blue-900/20 dark:via-purple-800/10 dark:to-pink-900/20 
        animate-pulse blur-3xl pointer-events-none"
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-blue-600 via-purple-600 to-pink-500 
          dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-blue-600 dark:text-cyan-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-purple-600 dark:text-purple-400">
              Professional Skills
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-6 rounded-xl border transition-all duration-500 
                  bg-gradient-to-br from-gray-100 to-gray-200 
                  dark:from-gray-800 dark:to-gray-900 
                  border-gray-300 dark:border-gray-700 
                  hover:shadow-[0_0_25px_rgba(147,51,234,0.3)]"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{skill.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
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
