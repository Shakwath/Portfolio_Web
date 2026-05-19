import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { startSmoothScroll } from "./scroll";

export default function App() {
  useEffect(() => {
    startSmoothScroll();
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* Toast Container MUST be inside return */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}