import React, { useEffect, useState } from "react";

const CICD = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">CICD</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is CICD?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          CICD stands for Continuous Integration and Continuous Deployment, a set of practices designed to help software teams deliver high-quality applications rapidly. 
          These practices automate the steps involved in integrating, testing, and deploying software, allowing for faster and more reliable development cycles.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Continuous Integration (CI)</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Continuous Integration (CI) focuses on automating the process of integrating new code changes into a shared codebase. Every time a developer commits new code,
          the code is automatically tested to ensure that it works correctly and doesn’t introduce any bugs. Tools like <strong>Jenkins</strong>, <strong>GitLab CI</strong>, and
          <strong> Travis CI</strong> are commonly used for implementing CI pipelines.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Continuous Deployment (CD)</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Continuous Deployment (CD) takes CI to the next level by automating the deployment process. Every time the code passes all the tests in the CI pipeline, it is automatically
          deployed to the production environment. This ensures that new features, improvements, and fixes are delivered to users quickly and without manual intervention. 
          Tools like <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>AWS</strong> often play a key role in Continuous Deployment.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Benefits of CICD</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Improved software quality with automated testing.</li>
          <li>Faster development cycles and quicker delivery of features.</li>
          <li>Reduced manual intervention in the deployment process.</li>
          <li>Early detection of bugs and errors through automated testing.</li>
          <li>Improved collaboration among development, testing, and operations teams.</li>
        </ul>
      </section>
    </div>
  );
};

export default CICD;