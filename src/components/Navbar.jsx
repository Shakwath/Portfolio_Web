import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  FolderKanban,
  Code2,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const itemRefs = useRef({});

  const navItems = [
    { name: "home", icon: <Home size={16} /> },
    { name: "about", icon: <User size={16} /> },
    { name: "projects", icon: <FolderKanban size={16} /> },
    { name: "skills", icon: <Code2 size={16} /> },
    { name: "contact", icon: <Mail size={16} /> },
  ];

  // scroll glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // move indicator dynamically (REAL DOM POSITION = UNIQUE)
  useEffect(() => {
    const el = itemRefs.current[active];
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 py-3">
      <div
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 relative
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-2xl border border-white/10 shadow-xl"
            : "bg-white/5 backdrop-blur-xl border border-white/10"
        }`}
      >
        <div className="h-14 px-4 flex items-center justify-between relative">

          {/* LOGO */}
          <h1 className="text-white font-bold text-lg">
            Md Shakwath
          </h1>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex relative items-center">

            {/* 🔥 REAL MOVING INDICATOR */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute h-10 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xl"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />

            {navItems.map((item) => (
              <button
                key={item.name}
                ref={(el) => (itemRefs.current[item.name] = el)}
                onClick={() => scrollTo(item.name)}
                className="px-4 py-2 flex items-center gap-2 text-sm text-white/70 hover:text-white transition relative z-10"
              >
                <span className="transition group-hover:scale-110">
                  {item.icon}
                </span>
                {item.name}
              </button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10 text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-4 pb-4"
            >
              <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 space-y-2">

                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollTo(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
                    ${
                      active === item.name
                        ? "bg-white/10 text-white"
                        : "text-white/70"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}