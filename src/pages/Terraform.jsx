import React, { useEffect, useState } from "react";

const Terraform = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Terraform</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Infrastructure as Code (IaC)</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Terraform is a powerful tool for Infrastructure as Code (IaC) that allows you to define and provision infrastructure using declarative configuration files.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Multi-cloud Deployment</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I have experience using Terraform to manage and automate multi-cloud infrastructure across providers like AWS, GCP, and Azure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Version Control & Automation</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With Terraform, I automate provisioning and management of cloud resources, track version-controlled configurations, and implement continuous integration for infrastructure management.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Collaboration & Best Practices</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Expertise in team collaboration, module development, and following Terraform best practices to ensure code reusability, maintainability, and scalability across teams.
        </p>
      </section>
    </div>
  );
};

export default Terraform;