import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkgplekj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        form.reset();
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0a0a0f] text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[320px] h-[320px] bg-cyan-500/10 blur-[140px] rounded-full top-10 left-10" />
        <div className="absolute w-[320px] h-[320px] bg-purple-500/10 blur-[140px] rounded-full bottom-10 right-10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Touch
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cyan-300">
              Contact Information
            </h3>

            <p className="text-gray-400">
              Feel free to contact me anytime. I’ll reply as soon as possible.
            </p>

            {/* INFO ITEMS */}
            {[
              { icon: <Mail />, text: "shakawathhossain0@gmail.com" },
              { icon: <Phone />, text: "+8801609-503460" },
              { icon: <MapPin />, text: "Chittagong, Bangladesh" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}

            {/* SOCIAL */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Github />, link: "https://github.com/Shakwath" },
                { icon: <Linkedin />, link: "#" },
                { icon: <Twitter />, link: "#" },
                { icon: <Instagram />, link: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >

            <input
              name="name"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-2xl border border-white/10 transition
                ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-cyan-500/20"
                }`}
            >
              {loading ? "Sending..." : "Send Message ✉️"}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}