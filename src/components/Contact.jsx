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
      className="py-20 text-white relative overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background Glow (updated to match dark neon theme) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full top-10 left-10" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full bottom-10 right-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 z-10">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16
          bg-gradient-to-r from-white via-white
          bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Contact Information
            </h3>

            <p className="text-gray-300 mb-6">
              Feel free to reach out I’ll get back to you as soon as possible!
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-lg
              bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:border-white transition">
                <Mail className="text-blue-400 w-6 h-6" />
                <div>
                  <h4 className="font-medium text-white0">Email</h4>
                  <p className="text-gray-300">
                    shakawathhossain0@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-lg
              bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:border-white transition">
                <Phone className="text-white w-6 h-6" />
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-300">
                    +8801609-503460
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-lg
              bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:border-white transition">
                <MapPin className="text-red-600 w-6 h-6" />
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">
                    West Bakolia, Chittagong
                  </p>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-white">
                Follow Me
              </h4>

              <div className="flex space-x-4">

                {[
                  { link: "https://github.com/Shakwath", icon: <Github /> },
                  { link: "https://x.com", icon: <Twitter /> },
                  { link: "https://linkedin.com", icon: <Linkedin /> },
                  { link: "https://instagram.com", icon: <Instagram /> },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="
                    w-11 h-11 flex items-center justify-center
                    border border-white/20
                    rounded-full
                    text-white
                    bg-transparent
                    hover:border-white
                    hover:text-cyan-400
                    transition
                    "
                  >
                    {item.icon}
                  </a>
                ))}

              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Send Me a Message
            </h3>

            <form
              action="https://formspree.io/f/mkgplekj"
              method="POST"
              className="space-y-5"
            >

              {["Name", "Email"].map((label, index) => (
                <input
                  key={index}
                  type={label === "Email" ? "email" : "text"}
                  name={label.toLowerCase()}
                  placeholder={label}
                  required
                  className="
                  w-full px-4 py-3 rounded-lg
                  border border-white/10
                  bg-transparent
                  text-white
                  focus:border-white
                  outline-none
                  transition
                  "
                />
              ))}

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="
                w-full px-4 py-3 rounded-lg
                border border-white/10
                bg-transparent
                text-white
                focus:border-white
                outline-none
                transition
                "
              />

              <button
                type="submit"
                className="
                w-full py-3 rounded-lg
                border border-white
                text-white
                bg-transparent
                hover:border-green-500
                hover:text-green-300
                transition
                "
              >
                Send Message ✉️
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}