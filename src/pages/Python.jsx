import React, { useEffect, useState } from "react";

const Python = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Python</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">General Purpose Programming</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Python is a versatile programming language used for web development, automation, data analysis, and more. Its simplicity and readability make it a favorite among developers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Backend Development</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience in building APIs and backend services using Python frameworks such as FastAPI and Flask. Ensuring performance and scalability in web applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Automation & Scripting</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Creating scripts to automate repetitive tasks, system administration, and data processing, improving efficiency and workflow.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Data Handling & AI</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Familiar with working on data processing, manipulation, and AI tools using Python. Using libraries like Pandas, NumPy, and integrating AI models for various applications.
        </p>
      </section>
    </div>
  );
};

export default Python;