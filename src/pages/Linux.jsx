import React, { useEffect, useState } from "react";

const Linux = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Linux</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">System Administration</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience in configuring and managing Linux-based systems for both personal and professional use. From setting up servers to ensuring system stability, Linux is at the core of my workflow.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Command-Line Efficiency</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Proficient in using Linux CLI for file management, process monitoring, networking, and scripting, making daily tasks more efficient.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Automation & Optimization</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Automating repetitive tasks with Bash scripting and tools like systemd. Optimizing system performance and ensuring security through proper configurations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Troubleshooting & Maintenance</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experienced in diagnosing and resolving system issues, managing users, permissions, and ensuring smooth operations across Linux environments.
        </p>
      </section>
    </div>
  );
};

export default Linux;