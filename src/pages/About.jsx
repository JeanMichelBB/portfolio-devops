// src/pages/About.jsx
import React, { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`min-h-screen text-center py-10 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto p-3">
        This page contains information about me. Here, you can learn more about my background, experiences, and what drives me in my work.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto p-3">
        Welcome to my portfolio website. Here, you can learn more about me, my projects, and my experiences. Feel free to explore the site and reach out to me if you have any inquiries or collaboration opportunities. I would love to hear from you.
      </p>
    </div>
  );
};

export default About;