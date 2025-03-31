import React, { useEffect, useState } from "react";

const Docker = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Docker</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Containerization Technology</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Docker is a powerful containerization tool that allows you to package applications and their dependencies into isolated containers, ensuring consistency across different environments.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Microservices & Orchestration</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I have extensive experience building microservices architectures and using Docker for the deployment, scaling, and management of containerized applications in production.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">CI/CD & Automation</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I leverage Docker in CI/CD pipelines to automate the testing, building, and deployment processes, improving development workflows and time-to-production.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Efficiency and Isolation</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Docker allows me to create lightweight, fast-to-deploy environments, ensuring efficient use of resources and minimizing conflicts between dependencies and environments.
        </p>
      </section>
    </div>
  );
};

export default Docker;