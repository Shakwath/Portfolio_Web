import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 transition-colors duration-700
      bg-gradient-to-br from-gray-50 via-white to-blue-50
      dark:from-[#0a0a0f] dark:via-[#111122] dark:to-[#1a1a2e]
      text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Contact Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Feel free to reach out I’ll get back to you as soon as possible!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-4 rounded-lg
                bg-gradient-to-r from-white to-blue-50
                dark:from-gray-800 dark:to-gray-900
                border border-gray-200 dark:border-gray-700
                shadow-md transition-all duration-300"
              >
                <Mail className="text-blue-500 w-6 h-6" />
                <div>
                  <h4 className="font-medium text-blue-600 dark:text-blue-400">
                    Email
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    shakawathhossain0@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-4 rounded-lg
                bg-gradient-to-r from-white to-blue-50
                dark:from-gray-800 dark:to-gray-900
                border border-gray-200 dark:border-gray-700
                shadow-md transition-all duration-300"
              >
                <Phone className="text-purple-500 w-6 h-6" />
                <div>
                  <h4 className="font-medium text-purple-600 dark:text-purple-400">
                    Phone
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    +8801609-503460
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-4 rounded-lg
                bg-gradient-to-r from-white to-blue-50
                dark:from-gray-800 dark:to-gray-900
                border border-gray-200 dark:border-gray-700
                shadow-md transition-all duration-300"
              >
                <MapPin className="text-pink-500 w-6 h-6" />
                <div>
                  <h4 className="font-medium text-pink-600 dark:text-pink-400">
                    Location
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    West Bakolia, Chittagong
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-purple-600 dark:text-purple-400">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    link: "https://github.com/Shakwath",
                    icon: <Github size={22} />,
                    color: "from-gray-700 to-gray-900",
                  },
                  {
                    link: "https://x.com/ShakawathH84904",
                    icon: <Twitter size={22} />,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    link: "https://www.linkedin.com/in/shakawath-hossain-3a3561300/",
                    icon: <Linkedin size={22} />,
                    color: "from-blue-700 to-indigo-500",
                  },
                  {
                    link: "https://www.instagram.com/shakawath__/",
                    icon: <Instagram size={22} />,
                    color: "from-pink-500 to-red-500",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} text-white hover:scale-110 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition`}
                    whileHover={{ rotate: 10 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Formspree Integration */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Send Me a Message
            </h3>
            <form
              action="https://formspree.io/f/mkgplekj" // 
              method="POST"
              className="space-y-5"
            >
              {["Name", "Email"].map((label, index) => (
                <div key={index}>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    {label}
                  </label>
                  <input
                    type={label === "Email" ? "email" : "text"}
                    name={label.toLowerCase()}
                    required
                    className="w-full px-4 py-3 rounded-lg border
                    border-gray-300 dark:border-gray-700
                    bg-white dark:bg-gray-800
                    focus:ring-2 focus:ring-blue-500
                    outline-none transition duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border
                  border-gray-300 dark:border-gray-700
                  bg-white dark:bg-gray-800
                  focus:ring-2 focus:ring-blue-500
                  outline-none transition duration-300"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full px-6 py-3 font-medium rounded-lg text-white
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]
                transition-all duration-500"
              >
                Send Message ✉️
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
