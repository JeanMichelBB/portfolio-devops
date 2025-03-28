// src/pages/About.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const previousPath = sessionStorage.getItem("previousPath");
    const savedPosition = sessionStorage.getItem("scrollPosition");

    if (savedPosition && previousPath && location.pathname !== previousPath) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem("scrollPosition");
      sessionStorage.removeItem("previousPath");
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
    setTimeout(() => setIsVisible(true), 100);
  }, [location]);

  return (
    <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        This page contains information about me. Here, you can learn more about my background, experiences, and what drives me in my work.
      </p>
    </div>
  );
};

export default About;