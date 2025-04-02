import React, { useEffect, useState } from "react";
import PythonFundamental from "../components/PythonFundamental";
import python from "../assets/python.jpg"; // Adjust the path as necessary

const Python = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
        bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
        bg-[position:120%_110%] sm:bg-[position:85%_130%] md:bg-[position:85%_130%]`}
      style={{
        backgroundImage: `url(${python})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Python</h1>

        {/* 🎓 Python Fundamental Concepts (Collapsible) */}
        <PythonFundamental />

        {/* 🚀 My Experience with Python */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Python</h2>
          <p className="text-gray-600">
            I have used Python for **____ (describe your experience: backend development, data science, automation, AI, etc.)**.
            This included **____ (frameworks and tools: Flask, FastAPI, Pandas, NumPy, etc.)**.
          </p>
          <p className="text-gray-600">
            One major challenge I solved was **____ (describe a problem: API performance, automating workflows, etc.)**.
            I addressed it by **____ (solution: optimizing code, using caching, implementing async tasks, etc.)**.
          </p>
        </section>

        {/* 🏗️ Real-World Python Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Implementation (Projects)</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **____ (Project Name, e.g., "Automated Data Processing with Python")**
            <strong>Description:</strong> **____ (How you used Python in this project)**
            <strong>Link:</strong> <a href="____ (GitHub or Live Demo URL)" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        {/* 🔗 Python & Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Technologies</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Web Development:</strong> Built APIs using **FastAPI and Flask**.</li>
            <li><strong>Data Science & AI:</strong> Worked with **Pandas, NumPy, TensorFlow, and PyTorch**.</li>
            <li><strong>Automation & Scripting:</strong> Automated tasks using **Python scripts and cron jobs**.</li>
            <li><strong>DevOps & Cloud:</strong> Deployed Python apps on **AWS, GCP, or Azure**.</li>
          </ul>
        </section>

        {/* ⚡ Best Practices & Debugging */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Optimizing Performance:</strong> Used **async programming and caching mechanisms**.</li>
            <li><strong>Security:</strong> Managed API security using **OAuth2 and JWT tokens**.</li>
            <li><strong>Code Quality:</strong> Followed **PEP 8 and type hints for maintainability**.</li>
            <li><strong>Debugging:</strong> Used **logging, profiling tools, and unit tests**.</li>
          </ul>
        </section>

        {/* 📚 Python Learning Resources */}
        <section className="mb-8 pb-30">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Python Official Documentation</a></li>
            <li><a href="https://realpython.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Real Python (Tutorials & Guides)</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Python;