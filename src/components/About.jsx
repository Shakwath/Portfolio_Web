import React from "react";
import { motion } from "framer-motion";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="about"
      className="py-20 text-white bg-[#0a0a0f] relative overflow-hidden border border-white/10"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full top-10 left-10" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full bottom-10 right-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Experience & Education
        </motion.h2>

        {/* STATS */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">

  {[
    { label: "Experience", value: "2+ Years" },
    { label: "Projects", value: "3+ Completed" },
    { label: "Stack", value: "React / Node JS" },
  ].map((item, i) => (
    <motion.div
      key={i}
      className="
      rounded-3xl p-6 text-center
      border border-white/20
      bg-transparent
      hover:border-white
      transition-all duration-500
      "
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: i * 0.1 }}
    >
      <h3 className="text-2xl font-semibold text-cyan-300">
        {item.value}
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        {item.label}
      </p>
    </motion.div>
  ))}

</div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-cyan-300">
              <FaBriefcase /> Experience
            </h3>

            <div className="rounded-3xl p-6
              bg-white/10 backdrop-blur-xl
              border border-white/10
              hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              transition">

              <h4 className="font-semibold text-white">
                Web Developer
              </h4>

              <p className="text-sm text-gray-400">
                2025 - PRESENT
              </p>

              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Developing modern full-stack web applications using React,
                Node.js, MongoDB, and Express with a focus on performance,
                scalability, and UI/UX.
              </p>
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-purple-300">
              <FaGraduationCap /> Education
            </h3>

            <div className="space-y-4">

              {[
                {
                  title: "International Islamic University Chittagong",
                  sub: "BSc in CSE (2023 - 2027)",
                },
                {
                  title: "Chittagong Govt City College",
                  sub: "2020 - 2021",
                },
                {
                  title: "Haji Mohammad Mohsin Govt High School",
                  sub: "2015 - 2019",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="p-5 rounded-3xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/10
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
                  transition"
                >
                  <h4 className="font-medium text-white">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {edu.sub}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}