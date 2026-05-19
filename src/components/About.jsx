import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Experience() {
  const stats = [
    {
      label: "Experience",
      value: "2+ Years",
    },
    {
      label: "Projects",
      value: "15+ Completed",
    },
    {
      label: "Tech Stack",
      value: "MERN Stack",
    },
  ];

  const education = [
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
  ];

  const techIcons = [
    <FaReact />,
    <FaNodeJs />,
    <SiMongodb />,
    <SiExpress />,
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-[#0a0a0f] text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-[320px] h-[320px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-purple-500/10 blur-[140px] rounded-full" />

        {/* Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-3">
            My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Experience &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Education
            </span>
          </h2>

          <div className="w-28 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              className="
              relative overflow-hidden rounded-3xl
              border border-white/10
              bg-white/5 backdrop-blur-2xl
              p-7 text-center
              group
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              <h3 className="relative text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="relative text-gray-400 mt-2 text-sm tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            relative overflow-hidden rounded-[30px]
            border border-cyan-400/10
            bg-white/5 backdrop-blur-2xl
            p-8
            group
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/5" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-xl">
                <FaBriefcase />
              </div>

              <h3 className="text-2xl font-bold text-cyan-300">
                Experience
              </h3>
            </div>

            <div className="relative border-l border-white/10 pl-6">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              />

              <h4 className="text-xl font-semibold text-white">
                Full Stack Web Developer
              </h4>

              <p className="text-cyan-300 text-sm mt-1">
                2025 - Present
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed text-sm">
                Building scalable and responsive full-stack web
                applications using React, Node.js, Express, and MongoDB
                with modern UI/UX and optimized performance.
              </p>

              {/* Tech Stack */}
              <div className="flex items-center gap-4 mt-6 text-2xl text-white/80">
                {techIcons.map((icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.2,
                      rotate: 8,
                    }}
                    className="
                    w-12 h-12 rounded-2xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                    backdrop-blur-xl
                    "
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            relative overflow-hidden rounded-[30px]
            border border-purple-400/10
            bg-white/5 backdrop-blur-2xl
            p-8
            group
            "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/5" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300 text-xl">
                <FaGraduationCap />
              </div>

              <h3 className="text-2xl font-bold text-purple-300">
                Education
              </h3>
            </div>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{
                    scale: 1.02,
                    x: 5,
                  }}
                  viewport={{ once: true }}
                  className="
                  rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-xl
                  p-5 transition-all duration-300
                  "
                >
                  <h4 className="text-lg font-semibold text-white">
                    {edu.title}
                  </h4>

                  <p className="text-sm text-gray-400 mt-2">
                    {edu.sub}
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